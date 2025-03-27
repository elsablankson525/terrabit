import { getSupabaseBrowserClient } from "@/lib/supabase"
import { uploadFile, deleteFile } from "@/lib/supabase/storage"

export interface Product {
  id: number
  name: string
  category: string
  price: number
  rating: number
  reviews: number
  image: string
  description: string
  features: string[]
  inStock: boolean
  isFeatured: boolean
  isNew: boolean
  isBestseller: boolean
  brand: string
  created_at?: string
  updated_at?: string
}

export interface ProductInput {
  name: string
  category: string
  price: number
  rating?: number
  reviews?: number
  image: string
  description: string
  features: string[]
  inStock: boolean
  isFeatured?: boolean
  isNew?: boolean
  isBestseller?: boolean
  brand: string
}

/**
 * Get all products
 */
export async function getAllProducts(): Promise<Product[]> {
  try {
    const supabase = getSupabaseBrowserClient()

    const { data, error } = await supabase.from("products").select("*").order("created_at", { ascending: false })

    if (error) {
      console.error("Error fetching products:", error)
      return []
    }

    return data || []
  } catch (error) {
    console.error("Error in getAllProducts:", error)
    return []
  }
}

/**
 * Get products by category
 */
export async function getProductsByCategory(category: string): Promise<Product[]> {
  try {
    const supabase = getSupabaseBrowserClient()

    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("category", category)
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Error fetching products by category:", error)
      return []
    }

    return data || []
  } catch (error) {
    console.error("Error in getProductsByCategory:", error)
    return []
  }
}

/**
 * Get featured products
 */
export async function getFeaturedProducts(): Promise<Product[]> {
  try {
    const supabase = getSupabaseBrowserClient()

    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("isFeatured", true)
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Error fetching featured products:", error)
      return []
    }

    return data || []
  } catch (error) {
    console.error("Error in getFeaturedProducts:", error)
    return []
  }
}

/**
 * Get a product by ID
 */
export async function getProductById(id: number): Promise<Product | null> {
  try {
    const supabase = getSupabaseBrowserClient()

    const { data, error } = await supabase.from("products").select("*").eq("id", id).single()

    if (error) {
      console.error("Error fetching product by ID:", error)
      return null
    }

    return data
  } catch (error) {
    console.error("Error in getProductById:", error)
    return null
  }
}

/**
 * Create a new product
 */
export async function createProduct(product: ProductInput, imageFile?: File): Promise<Product | null> {
  try {
    const supabase = getSupabaseBrowserClient()

    // If an image file is provided, upload it first
    let imageUrl = product.image
    if (imageFile) {
      const uploadResult = await uploadFile(imageFile, "products")
      if (uploadResult) {
        imageUrl = uploadResult.url
      }
    }

    // Create the product with the image URL
    const { data, error } = await supabase
      .from("products")
      .insert([
        {
          ...product,
          image: imageUrl,
          features: JSON.stringify(product.features),
          rating: product.rating || 0,
          reviews: product.reviews || 0,
          isFeatured: product.isFeatured || false,
          isNew: product.isNew || false,
          isBestseller: product.isBestseller || false,
        },
      ])
      .select()

    if (error) {
      console.error("Error creating product:", error)
      return null
    }

    return data[0]
  } catch (error) {
    console.error("Error in createProduct:", error)
    return null
  }
}

/**
 * Update an existing product
 */
export async function updateProduct(
  id: number,
  product: Partial<ProductInput>,
  imageFile?: File,
): Promise<Product | null> {
  try {
    const supabase = getSupabaseBrowserClient()

    // Get the current product to check if we need to delete an old image
    const { data: currentProduct } = await supabase.from("products").select("image").eq("id", id).single()

    // If an image file is provided, upload it and update the URL
    let imageUrl = product.image
    if (imageFile) {
      const uploadResult = await uploadFile(imageFile, "products")
      if (uploadResult) {
        imageUrl = uploadResult.url

        // Delete the old image if it exists and is different
        if (currentProduct && currentProduct.image && currentProduct.image !== imageUrl) {
          // Extract the path from the URL
          const oldImagePath = currentProduct.image.split("/").slice(-2).join("/")
          if (oldImagePath) {
            await deleteFile(oldImagePath)
          }
        }
      }
    }

    // Prepare the update data
    const updateData: any = { ...product }
    if (imageUrl) {
      updateData.image = imageUrl
    }
    if (product.features) {
      updateData.features = JSON.stringify(product.features)
    }

    // Update the product
    const { data, error } = await supabase.from("products").update(updateData).eq("id", id).select()

    if (error) {
      console.error("Error updating product:", error)
      return null
    }

    return data[0]
  } catch (error) {
    console.error("Error in updateProduct:", error)
    return null
  }
}

/**
 * Delete a product
 */
export async function deleteProduct(id: number): Promise<boolean> {
  try {
    const supabase = getSupabaseBrowserClient()

    // Get the product to delete its image
    const { data: product } = await supabase.from("products").select("image").eq("id", id).single()

    // Delete the product
    const { error } = await supabase.from("products").delete().eq("id", id)

    if (error) {
      console.error("Error deleting product:", error)
      return false
    }

    // Delete the associated image if it exists
    if (product && product.image) {
      // Extract the path from the URL
      const imagePath = product.image.split("/").slice(-2).join("/")
      if (imagePath) {
        await deleteFile(imagePath)
      }
    }

    return true
  } catch (error) {
    console.error("Error in deleteProduct:", error)
    return false
  }
}

/**
 * Search products by name or description
 */
export async function searchProducts(query: string): Promise<Product[]> {
  try {
    const supabase = getSupabaseBrowserClient()

    const { data, error } = await supabase
      .from("products")
      .select("*")
      .or(`name.ilike.%${query}%,description.ilike.%${query}%`)
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Error searching products:", error)
      return []
    }

    return data || []
  } catch (error) {
    console.error("Error in searchProducts:", error)
    return []
  }
}

