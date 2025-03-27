import { getSupabaseBrowserClient } from "@/lib/supabase/supabaseBrowserClient"
import { BUCKET_NAMES, uploadFile, deleteFile } from "@/lib/supabase/storage"

export type Profile = {
  id: string
  full_name: string
  email: string
  avatar_url?: string
  has_premium_access: boolean
  created_at: string
  updated_at: string
}

/**
 * Get a user profile by ID
 */
export async function getProfileById(userId: string): Promise<Profile | null> {
  try {
    const supabase = getSupabaseBrowserClient()
    const { data, error } = await supabase.from("profiles").select("*").eq("id", userId).single()

    if (error) {
      console.error("Error fetching profile:", error)
      return null
    }

    return data as Profile
  } catch (error) {
    console.error("Error in getProfileById:", error)
    return null
  }
}

/**
 * Update a user profile
 */
export async function updateProfile(userId: string, profileData: Partial<Profile>): Promise<Profile | null> {
  try {
    const supabase = getSupabaseBrowserClient()
    const { data, error } = await supabase.from("profiles").update(profileData).eq("id", userId).select().single()

    if (error) {
      console.error("Error updating profile:", error)
      return null
    }

    return data as Profile
  } catch (error) {
    console.error("Error in updateProfile:", error)
    return null
  }
}

/**
 * Upload a profile avatar
 */
export async function uploadAvatar(userId: string, file: File): Promise<{ avatar_url: string } | null> {
  try {
    // Upload the file to the avatars bucket
    const filePath = `${userId}/${Date.now()}_${file.name}`
    const fileObject = await uploadFile(BUCKET_NAMES.AVATARS, filePath, file)

    if (!fileObject) {
      throw new Error("Failed to upload avatar")
    }

    // Update the user profile with the new avatar URL
    const supabase = getSupabaseBrowserClient()
    const { data, error } = await supabase
      .from("profiles")
      .update({ avatar_url: fileObject.url })
      .eq("id", userId)
      .select("avatar_url")
      .single()

    if (error) {
      console.error("Error updating profile with avatar:", error)
      return null
    }

    return data as { avatar_url: string }
  } catch (error) {
    console.error("Error in uploadAvatar:", error)
    return null
  }
}

/**
 * Delete a profile avatar
 */
export async function deleteAvatar(userId: string): Promise<boolean> {
  try {
    // Get the current profile to find the avatar path
    const profile = await getProfileById(userId)

    if (!profile || !profile.avatar_url) {
      return false
    }

    // Extract the path from the URL
    const url = new URL(profile.avatar_url)
    const pathParts = url.pathname.split("/")
    const bucketIndex = pathParts.findIndex((part) => part === BUCKET_NAMES.AVATARS)

    if (bucketIndex === -1) {
      return false
    }

    const filePath = pathParts.slice(bucketIndex + 1).join("/")

    // Delete the file from storage
    const deleted = await deleteFile(BUCKET_NAMES.AVATARS, filePath)

    if (!deleted) {
      return false
    }

    // Update the profile to remove the avatar URL
    const supabase = getSupabaseBrowserClient()
    const { error } = await supabase.from("profiles").update({ avatar_url: null }).eq("id", userId)

    if (error) {
      console.error("Error updating profile after avatar deletion:", error)
      return false
    }

    return true
  } catch (error) {
    console.error("Error in deleteAvatar:", error)
    return false
  }
}

