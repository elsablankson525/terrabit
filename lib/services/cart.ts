import { getSupabaseBrowserClient } from "@/lib/supabase"

export interface CartItem {
  id: number
  product_id: number
  user_id: string
  quantity: number
  created_at: string
  updated_at: string
  // Joined product data
  product?: {
    name: string
    price: number
    image: string
    category: string
  }
}

/**
 * Get the current user's cart
 */
export async function getCart(): Promise<CartItem[]> {
  try {
    const supabase = getSupabaseBrowserClient()

    // Get the current user
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return []
    }

    // Get the cart with product details
    const { data, error } = await supabase
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

    if (error) {
      console.error("Error fetching cart:", error)
      return []
    }

    return data || []
  } catch (error) {
    console.error("Error in getCart:", error)
    return []
  }
}

/**
 * Add an item to the cart
 */
export async function addToCart(productId: number, quantity = 1): Promise<CartItem | null> {
  try {
    const supabase = getSupabaseBrowserClient()

    // Get the current user
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return null
    }

    // Check if the item is already in the cart
    const { data: existingItems } = await supabase
      .from("cart_items")
      .select("*")
      .eq("user_id", user.id)
      .eq("product_id", productId)

    if (existingItems && existingItems.length > 0) {
      // Update the quantity
      const { data, error } = await supabase
        .from("cart_items")
        .update({
          quantity: existingItems[0].quantity + quantity,
          updated_at: new Date().toISOString(),
        })
        .eq("id", existingItems[0].id)
        .select()

      if (error) {
        console.error("Error updating cart item:", error)
        return null
      }

      return data[0]
    } else {
      // Add a new item
      const { data, error } = await supabase
        .from("cart_items")
        .insert([
          {
            product_id: productId,
            user_id: user.id,
            quantity,
          },
        ])
        .select()

      if (error) {
        console.error("Error adding to cart:", error)
        return null
      }

      return data[0]
    }
  } catch (error) {
    console.error("Error in addToCart:", error)
    return null
  }
}

/**
 * Update cart item quantity
 */
export async function updateCartItemQuantity(cartItemId: number, quantity: number): Promise<CartItem | null> {
  try {
    const supabase = getSupabaseBrowserClient()

    // Get the current user
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return null
    }

    // Update the quantity
    const { data, error } = await supabase
      .from("cart_items")
      .update({
        quantity,
        updated_at: new Date().toISOString(),
      })
      .eq("id", cartItemId)
      .eq("user_id", user.id) // Ensure the item belongs to the user
      .select()

    if (error) {
      console.error("Error updating cart item quantity:", error)
      return null
    }

    return data[0]
  } catch (error) {
    console.error("Error in updateCartItemQuantity:", error)
    return null
  }
}

/**
 * Remove an item from the cart
 */
export async function removeFromCart(cartItemId: number): Promise<boolean> {
  try {
    const supabase = getSupabaseBrowserClient()

    // Get the current user
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return false
    }

    // Delete the item
    const { error } = await supabase.from("cart_items").delete().eq("id", cartItemId).eq("user_id", user.id) // Ensure the item belongs to the user

    if (error) {
      console.error("Error removing from cart:", error)
      return false
    }

    return true
  } catch (error) {
    console.error("Error in removeFromCart:", error)
    return false
  }
}

/**
 * Clear the cart
 */
export async function clearCart(): Promise<boolean> {
  try {
    const supabase = getSupabaseBrowserClient()

    // Get the current user
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return false
    }

    // Delete all items
    const { error } = await supabase.from("cart_items").delete().eq("user_id", user.id)

    if (error) {
      console.error("Error clearing cart:", error)
      return false
    }

    return true
  } catch (error) {
    console.error("Error in clearCart:", error)
    return false
  }
}

