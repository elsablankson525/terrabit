import { getSupabaseBrowserClient, createServerClient } from "@/lib/supabase"
import { clearCart } from "./cart"

export interface OrderItem {
  id: number
  order_id: number
  product_id: number
  quantity: number
  price: number
  created_at: string
  // Joined product data
  product?: {
    name: string
    image: string
    category: string
  }
}

export interface Order {
  id: number
  user_id: string
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled"
  total: number
  shipping_address: string
  billing_address: string
  payment_method: string
  created_at: string
  updated_at: string
  items?: OrderItem[]
}

export interface CreateOrderInput {
  shipping_address: string
  billing_address: string
  payment_method: string
  items: {
    product_id: number
    quantity: number
    price: number
  }[]
}

/**
 * Get orders for the current user
 */
export async function getUserOrders(): Promise<Order[]> {
  try {
    const supabase = getSupabaseBrowserClient()

    // Get the current user
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return []
    }

    // Get the orders
    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Error fetching orders:", error)
      return []
    }

    return data || []
  } catch (error) {
    console.error("Error in getUserOrders:", error)
    return []
  }
}

/**
 * Get a specific order with its items
 */
export async function getOrderById(orderId: number): Promise<Order | null> {
  try {
    const supabase = getSupabaseBrowserClient()

    // Get the current user
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return null
    }

    // Get the order
    const { data: order, error: orderError } = await supabase
      .from("orders")
      .select("*")
      .eq("id", orderId)
      .eq("user_id", user.id) // Ensure the order belongs to the user
      .single()

    if (orderError) {
      console.error("Error fetching order:", orderError)
      return null
    }

    // Get the order items
    const { data: items, error: itemsError } = await supabase
      .from("order_items")
      .select(`
        *,
        product:product_id (
          name,
          image,
          category
        )
      `)
      .eq("order_id", orderId)

    if (itemsError) {
      console.error("Error fetching order items:", itemsError)
      return order
    }

    return {
      ...order,
      items: items || [],
    }
  } catch (error) {
    console.error("Error in getOrderById:", error)
    return null
  }
}

/**
 * Create a new order
 */
export async function createOrder(orderInput: CreateOrderInput): Promise<Order | null> {
  try {
    const supabase = getSupabaseBrowserClient()

    // Get the current user
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return null
    }

    // Calculate the total
    const total = orderInput.items.reduce((sum, item) => sum + item.price * item.quantity, 0)

    // Start a transaction
    const { data: order, error: orderError } = await supabase
      .from("orders")
      .insert([
        {
          user_id: user.id,
          status: "pending",
          total,
          shipping_address: orderInput.shipping_address,
          billing_address: orderInput.billing_address,
          payment_method: orderInput.payment_method,
        },
      ])
      .select()

    if (orderError) {
      console.error("Error creating order:", orderError)
      return null
    }

    // Insert order items
    const orderItems = orderInput.items.map((item) => ({
      order_id: order[0].id,
      product_id: item.product_id,
      quantity: item.quantity,
      price: item.price,
    }))

    const { error: itemsError } = await supabase.from("order_items").insert(orderItems)

    if (itemsError) {
      console.error("Error creating order items:", itemsError)
      // Attempt to delete the order if items failed
      await supabase.from("orders").delete().eq("id", order[0].id)
      return null
    }

    // Clear the cart after successful order
    await clearCart()

    return order[0]
  } catch (error) {
    console.error("Error in createOrder:", error)
    return null
  }
}

/**
 * Update order status (admin only)
 */
export async function updateOrderStatus(
  orderId: number,
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled",
): Promise<boolean> {
  try {
    // This function should only be called from server components or actions
    const supabase = createServerClient()

    const { error } = await supabase
      .from("orders")
      .update({
        status,
        updated_at: new Date().toISOString(),
      })
      .eq("id", orderId)

    if (error) {
      console.error("Error updating order status:", error)
      return false
    }

    return true
  } catch (error) {
    console.error("Error in updateOrderStatus:", error)
    return false
  }
}

