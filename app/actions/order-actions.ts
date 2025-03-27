"use server"

import { revalidatePath } from "next/cache"
import { createServerClient } from "@/lib/supabase"
import { clearCart } from "@/lib/services/cart"

/**
 * Create a new order from the user's cart
 */
export async function createOrderFromCart(
  formData: FormData,
): Promise<{ success: boolean; message: string; orderId?: number }> {
  try {
    const supabase = createServerClient()

    // Get the current user
    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (!user) {
      return { success: false, message: "You must be logged in to place an order" }
    }

    // Get shipping and payment information
    const shippingAddress = formData.get("shippingAddress") as string
    const billingAddress = formData.get("billingAddress") as string
    const paymentMethod = formData.get("paymentMethod") as string

    // Validate required fields
    if (!shippingAddress || !billingAddress || !paymentMethod) {
      return { success: false, message: "Missing required fields" }
    }

    // Get the user's cart
    const { data: cartItems, error: cartError } = await supabase
      .from("cart_items")
      .select(`
        *,
        product:product_id (
          name,
          price,
          image,
          category
        )
      `)
      .eq("user_id", user.id)

    if (cartError) {
      return { success: false, message: `Error fetching cart: ${cartError.message}` }
    }

    if (!cartItems || cartItems.length === 0) {
      return { success: false, message: "Your cart is empty" }
    }

    // Calculate the total
    const total = cartItems.reduce((sum, item) => {
      return sum + (item.product?.price || 0) * item.quantity
    }, 0)

    // Create the order
    const { data: order, error: orderError } = await supabase
      .from("orders")
      .insert([
        {
          user_id: user.id,
          status: "pending",
          total,
          shipping_address: shippingAddress,
          billing_address: billingAddress,
          payment_method: paymentMethod,
        },
      ])
      .select()

    if (orderError) {
      return { success: false, message: `Error creating order: ${orderError.message}` }
    }

    // Create order items
    const orderItems = cartItems.map((item) => ({
      order_id: order[0].id,
      product_id: item.product_id,
      quantity: item.quantity,
      price: item.product?.price || 0,
    }))

    const { error: itemsError } = await supabase.from("order_items").insert(orderItems)

    if (itemsError) {
      // Attempt to delete the order if items failed
      await supabase.from("orders").delete().eq("id", order[0].id)
      return { success: false, message: `Error creating order items: ${itemsError.message}` }
    }

    // Clear the cart
    await clearCart()

    // Revalidate the orders page
    revalidatePath("/orders")

    return {
      success: true,
      message: "Order placed successfully",
      orderId: order[0].id,
    }
  } catch (error) {
    console.error("Error in createOrderFromCart:", error)
    return { success: false, message: "An unexpected error occurred" }
  }
}

/**
 * Update order status (admin only)
 */
export async function updateOrderStatusAction(
  orderId: number,
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled",
): Promise<{ success: boolean; message: string }> {
  try {
    const supabase = createServerClient()

    // Check if user is admin (you would need to implement this check)
    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (!user) {
      return { success: false, message: "Unauthorized" }
    }

    // Update the order status
    const { error } = await supabase
      .from("orders")
      .update({
        status,
        updated_at: new Date().toISOString(),
      })
      .eq("id", orderId)

    if (error) {
      return { success: false, message: `Error updating order status: ${error.message}` }
    }

    // Revalidate the orders page
    revalidatePath("/orders")
    revalidatePath(`/orders/${orderId}`)

    return { success: true, message: "Order status updated successfully" }
  } catch (error) {
    console.error("Error in updateOrderStatusAction:", error)
    return { success: false, message: "An unexpected error occurred" }
  }
}

