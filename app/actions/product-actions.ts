"use server"

import { revalidatePath } from "next/cache"
import { createServerClient } from "@/lib/supabase"
import type { ProductInput } from "@/lib/services/products"

/**
 * Create a new product (admin only)
 */
export async function createProductAction(
  formData: FormData,
): Promise<{ success: boolean; message: string; productId?: number }> {
  try {
    const supabase = createServerClient()

    // Check if user is admin (you would need to implement this check)
    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (!user) {
      return { success: false, message: "Unauthorized" }
    }

    // Get form data
    const name = formData.get("name") as string
    const category = formData.get("category") as string
    const price = Number.parseFloat(formData.get("price") as string)
    const description = formData.get("description") as string
    const brand = formData.get("brand") as string
    const inStock = formData.get("inStock") === "true"
    const isFeatured = formData.get("isFeatured") === "true"
    const isNew = formData.get("isNew") === "true"
    const isBestseller = formData.get("isBestseller") === "true"

    // Get features as an array
    const featuresString = formData.get("features") as string
    const features = featuresString
      .split(",")
      .map((f) => f.trim())
      .filter(Boolean)

    // Get image file
    const imageFile = formData.get("image") as File

    // Validate required fields
    if (!name || !category || isNaN(price) || !description || !brand) {
      return { success: false, message: "Missing required fields" }
    }

    // Upload image to storage
    let imageUrl = ""
    if (imageFile && imageFile.size > 0) {
      const fileExt = imageFile.name.split(".").pop()
      const fileName = `${Math.random().toString(36).substring(2, 15)}.${fileExt}`
      const filePath = `products/${fileName}`

      const { error: uploadError } = await supabase.storage.from("terrabit").upload(filePath, imageFile, {
        cacheControl: "3600",
        upsert: false,
      })

      if (uploadError) {
        return { success: false, message: `Error uploading image: ${uploadError.message}` }
      }

      // Get the public URL for the uploaded image
      const {
        data: { publicUrl },
      } = supabase.storage.from("terrabit").getPublicUrl(filePath)

      imageUrl = publicUrl
    }

    // Create the product
    const { data, error } = await supabase
      .from("products")
      .insert([
        {
          name,
          category,
          price,
          description,
          brand,
          image: imageUrl,
          features,
          inStock,
          isFeatured,
          isNew,
          isBestseller,
          rating: 0,
          reviews: 0,
        },
      ])
      .select()

    if (error) {
      return { success: false, message: `Error creating product: ${error.message}` }
    }

    // Revalidate the products page
    revalidatePath("/hardware")

    return {
      success: true,
      message: "Product created successfully",
      productId: data[0].id,
    }
  } catch (error) {
    console.error("Error in createProductAction:", error)
    return { success: false, message: "An unexpected error occurred" }
  }
}

/**
 * Update an existing product (admin only)
 */
export async function updateProductAction(
  productId: number,
  formData: FormData,
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

    // Get form data
    const name = formData.get("name") as string
    const category = formData.get("category") as string
    const price = Number.parseFloat(formData.get("price") as string)
    const description = formData.get("description") as string
    const brand = formData.get("brand") as string
    const inStock = formData.get("inStock") === "true"
    const isFeatured = formData.get("isFeatured") === "true"
    const isNew = formData.get("isNew") === "true"
    const isBestseller = formData.get("isBestseller") === "true"

    // Get features as an array
    const featuresString = formData.get("features") as string
    const features = featuresString
      .split(",")
      .map((f) => f.trim())
      .filter(Boolean)

    // Get image file
    const imageFile = formData.get("image") as File

    // Prepare update data
    const updateData: Partial<ProductInput> = {
      name,
      category,
      price,
      description,
      brand,
      features,
      inStock,
      isFeatured,
      isNew,
      isBestseller,
    }

    // Upload new image if provided
    if (imageFile && imageFile.size > 0) {
      // Get the current product to check if we need to delete an old image
      const { data: currentProduct } = await supabase.from("products").select("image").eq("id", productId).single()

      const fileExt = imageFile.name.split(".").pop()
      const fileName = `${Math.random().toString(36).substring(2, 15)}.${fileExt}`
      const filePath = `products/${fileName}`

      const { error: uploadError } = await supabase.storage.from("terrabit").upload(filePath, imageFile, {
        cacheControl: "3600",
        upsert: false,
      })

      if (uploadError) {
        return { success: false, message: `Error uploading image: ${uploadError.message}` }
      }

      // Get the public URL for the uploaded image
      const {
        data: { publicUrl },
      } = supabase.storage.from("terrabit").getPublicUrl(filePath)

      updateData.image = publicUrl

      // Delete the old image if it exists
      if (currentProduct && currentProduct.image) {
        // Extract the path from the URL
        const oldImagePath = currentProduct.image.split("/").slice(-2).join("/")
        if (oldImagePath) {
          await supabase.storage.from("terrabit").remove([oldImagePath])
        }
      }
    }

    // Update the product
    const { error } = await supabase.from("products").update(updateData).eq("id", productId)

    if (error) {
      return { success: false, message: `Error updating product: ${error.message}` }
    }

    // Revalidate the products page
    revalidatePath("/hardware")
    revalidatePath(`/hardware/product/${productId}`)

    return { success: true, message: "Product updated successfully" }
  } catch (error) {
    console.error("Error in updateProductAction:", error)
    return { success: false, message: "An unexpected error occurred" }
  }
}

/**
 * Delete a product (admin only)
 */
export async function deleteProductAction(productId: number): Promise<{ success: boolean; message: string }> {
  try {
    const supabase = createServerClient()

    // Check if user is admin (you would need to implement this check)
    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (!user) {
      return { success: false, message: "Unauthorized" }
    }

    // Get the product to delete its image
    const { data: product } = await supabase.from("products").select("image").eq("id", productId).single()

    // Delete the product
    const { error } = await supabase.from("products").delete().eq("id", productId)

    if (error) {
      return { success: false, message: `Error deleting product: ${error.message}` }
    }

    // Delete the associated image if it exists
    if (product && product.image) {
      // Extract the path from the URL
      const imagePath = product.image.split("/").slice(-2).join("/")
      if (imagePath) {
        await supabase.storage.from("terrabit").remove([imagePath])
      }
    }

    // Revalidate the products page
    revalidatePath("/hardware")

    return { success: true, message: "Product deleted successfully" }
  } catch (error) {
    console.error("Error in deleteProductAction:", error)
    return { success: false, message: "An unexpected error occurred" }
  }
}

