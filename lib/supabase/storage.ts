import { getSupabaseBrowserClient } from "./supabaseBrowserClient"
import { createBrowserClient } from "./client"

export type FileObject = {
  name: string
  size: number
  type: string
  url: string
  path: string
  created_at: string
}

// Constants for bucket names
export const BUCKET_NAMES = {
  AVATARS: "avatars",
  DOCUMENTS: "documents",
  IMAGES: "images",
}

// Initialize storage buckets
export async function initializeStorageBuckets() {
  const supabase = createBrowserClient()

  try {
    // Create buckets if they don't exist
    // This should be called from a server action
    return { success: true }
  } catch (error) {
    console.error("Error initializing storage buckets:", error)
    return { success: false, error }
  }
}

// Upload a file to a bucket
export async function uploadFile(bucket: string, filePath: string, file: File) {
  const supabase = createBrowserClient()

  try {
    const { data, error } = await supabase.storage.from(bucket).upload(filePath, file, {
      upsert: true,
    })

    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error(`Error uploading file to ${bucket}:`, error)
    return { success: false, error }
  }
}

// Get a public URL for a file
export function getFileUrl(bucket: string, filePath: string) {
  const supabase = createBrowserClient()
  const { data } = supabase.storage.from(bucket).getPublicUrl(filePath)
  return data.publicUrl
}

/**
 * Delete a file from Supabase storage
 */
export async function deleteFile(bucketName: string, filePath: string): Promise<boolean> {
  try {
    const supabase = getSupabaseBrowserClient()
    const { error } = await supabase.storage.from(bucketName).remove([filePath])

    if (error) {
      console.error("Error deleting file:", error)
      throw error
    }

    return true
  } catch (error) {
    console.error("Error in deleteFile:", error)
    return false
  }
}

/**
 * List files in a Supabase storage bucket
 */
export async function listFiles(bucketName: string, folderPath?: string): Promise<FileObject[]> {
  try {
    const supabase = getSupabaseBrowserClient()
    const { data, error } = await supabase.storage.from(bucketName).list(folderPath || "")

    if (error) {
      console.error("Error listing files:", error)
      throw error
    }

    if (!data) return []

    // Get public URLs for all files
    return Promise.all(
      data
        .filter((item) => !item.id.endsWith("/")) // Filter out folders
        .map(async (item) => {
          const path = folderPath ? `${folderPath}/${item.name}` : item.name
          const { data: urlData } = supabase.storage.from(bucketName).getPublicUrl(path)

          return {
            name: item.name,
            size: item.metadata?.size || 0,
            type: item.metadata?.mimetype || "",
            url: urlData.publicUrl,
            path,
            created_at: item.created_at,
          }
        }),
    )
  } catch (error) {
    console.error("Error in listFiles:", error)
    return []
  }
}

/**
 * Get a file from Supabase storage by path
 */
export async function getFileByPath(bucketName: string, filePath: string): Promise<FileObject | null> {
  try {
    const supabase = getSupabaseBrowserClient()

    // Get the file metadata
    const { data, error } = await supabase.storage.from(bucketName).list(filePath.split("/").slice(0, -1).join("/"), {
      limit: 1,
      offset: 0,
      search: filePath.split("/").pop(),
    })

    if (error || !data || data.length === 0) {
      return null
    }

    const file = data[0]
    const { data: urlData } = supabase.storage.from(bucketName).getPublicUrl(filePath)

    return {
      name: file.name,
      size: file.metadata?.size || 0,
      type: file.metadata?.mimetype || "",
      url: urlData.publicUrl,
      path: filePath,
      created_at: file.created_at,
    }
  } catch (error) {
    console.error("Error in getFileByPath:", error)
    return null
  }
}

