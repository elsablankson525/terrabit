import { getSupabaseBrowserClient, createServerClient } from "@/lib/supabase"
import { uploadFile, deleteFile } from "@/lib/supabase/storage"

export interface Profile {
  id: string
  full_name: string
  email: string
  avatar_url?: string
  has_premium_access: boolean
  created_at: string
  updated_at: string
}

export interface ProfileUpdate {
  full_name?: string
  avatar_url?: string
  has_premium_access?: boolean
}

/**
 * Get the current user's profile
 */
export async function getCurrentProfile(): Promise<Profile | null> {
  try {
    const supabase = getSupabaseBrowserClient()

    // Get the current user
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return null
    }

    // Get the profile
    const { data, error } = await supabase.from("profiles").select("*").eq("id", user.id).single()

    if (error) {
      console.error("Error fetching profile:", error)
      return null
    }

    return data
  } catch (error) {
    console.error("Error in getCurrentProfile:", error)
    return null
  }
}

/**
 * Get a profile by ID
 */
export async function getProfileById(id: string): Promise<Profile | null> {
  try {
    const supabase = getSupabaseBrowserClient()

    const { data, error } = await supabase.from("profiles").select("*").eq("id", id).single()

    if (error) {
      console.error("Error fetching profile by ID:", error)
      return null
    }

    return data
  } catch (error) {
    console.error("Error in getProfileById:", error)
    return null
  }
}

/**
 * Update a profile
 */
export async function updateProfile(updates: ProfileUpdate, avatarFile?: File): Promise<Profile | null> {
  try {
    const supabase = getSupabaseBrowserClient()

    // Get the current user
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return null
    }

    // If an avatar file is provided, upload it
    let avatarUrl = updates.avatar_url
    if (avatarFile) {
      const uploadResult = await uploadFile(avatarFile, "images", `avatars/${user.id}`)
      if (uploadResult) {
        avatarUrl = uploadResult.url

        // Delete the old avatar if it exists
        const { data: currentProfile } = await supabase.from("profiles").select("avatar_url").eq("id", user.id).single()

        if (currentProfile && currentProfile.avatar_url && currentProfile.avatar_url !== avatarUrl) {
          // Extract the path from the URL
          const oldAvatarPath = currentProfile.avatar_url.split("/").slice(-2).join("/")
          if (oldAvatarPath) {
            await deleteFile(oldAvatarPath)
          }
        }
      }
    }

    // Update the profile
    const { data, error } = await supabase
      .from("profiles")
      .update({
        ...updates,
        avatar_url: avatarUrl,
        updated_at: new Date().toISOString(),
      })
      .eq("id", user.id)
      .select()

    if (error) {
      console.error("Error updating profile:", error)
      return null
    }

    return data[0]
  } catch (error) {
    console.error("Error in updateProfile:", error)
    return null
  }
}

/**
 * Update premium access status
 */
export async function updatePremiumAccess(userId: string, hasPremiumAccess: boolean): Promise<boolean> {
  try {
    // This function should only be called from server components or actions
    const supabase = createServerClient()

    const { error } = await supabase
      .from("profiles")
      .update({
        has_premium_access: hasPremiumAccess,
        updated_at: new Date().toISOString(),
      })
      .eq("id", userId)

    if (error) {
      console.error("Error updating premium access:", error)
      return false
    }

    return true
  } catch (error) {
    console.error("Error in updatePremiumAccess:", error)
    return false
  }
}

