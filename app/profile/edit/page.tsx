"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FileUpload } from "@/components/file-upload"
import { Loader2, User, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/contexts/auth-context"
import { getProfileById, updateProfile, uploadAvatar, deleteAvatar } from "@/lib/services/profile-service"

export default function EditProfilePage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    avatar_url: "",
  })

  // Wrap the useAuth hook in a try-catch to handle prerendering
  const { user } = useAuth()

  useEffect(() => {
    async function loadProfile() {
      if (!user) {
        // If not authenticated and running in the browser, redirect to login
        if (typeof window !== "undefined") {
          router.push("/login")
        }
        setLoading(false)
        return
      }

      try {
        const profile = await getProfileById(user.id)
        if (profile) {
          setFormData({
            full_name: profile.full_name || "",
            email: profile.email || "",
            avatar_url: profile.avatar_url || "",
          })
        }
      } catch (err) {
        console.error("Error loading profile:", err)
        setError("Failed to load profile data")
      } finally {
        setLoading(false)
      }
    }

    if (typeof window !== "undefined") {
      loadProfile()
    } else {
      setLoading(false)
    }
  }, [user, router])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user) return

    try {
      setSaving(true)
      setError(null)
      setSuccess(null)

      const updated = await updateProfile(user.id, {
        full_name: formData.full_name,
      })

      if (updated) {
        setSuccess("Profile updated successfully")
        setTimeout(() => {
          router.push("/profile")
        }, 1500)
      } else {
        setError("Failed to update profile")
      }
    } catch (err) {
      console.error("Error updating profile:", err)
      setError("An error occurred while updating your profile")
    } finally {
      setSaving(false)
    }
  }

  const handleAvatarUpload = async (file: File) => {
    if (!user) return

    try {
      setError(null)
      const result = await uploadAvatar(user.id, file)

      if (result && result.avatar_url) {
        setFormData((prev) => ({ ...prev, avatar_url: result.avatar_url }))
        setSuccess("Avatar uploaded successfully")
      } else {
        setError("Failed to upload avatar")
      }
    } catch (err) {
      console.error("Error uploading avatar:", err)
      setError("An error occurred while uploading your avatar")
    }
  }

  const handleRemoveAvatar = async () => {
    if (!user || !formData.avatar_url) return

    try {
      setError(null)
      const deleted = await deleteAvatar(user.id)

      if (deleted) {
        setFormData((prev) => ({ ...prev, avatar_url: "" }))
        setSuccess("Avatar removed successfully")
      } else {
        setError("Failed to remove avatar")
      }
    } catch (err) {
      console.error("Error removing avatar:", err)
      setError("An error occurred while removing your avatar")
    }
  }

  // Show a loading state during prerendering or initial load
  if (typeof window === "undefined" || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0a192f] to-[#112240] text-white flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-[#64ffda]" />
      </div>
    )
  }

  // If not authenticated, show a message
  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0a192f] to-[#112240] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Authentication Required</h1>
          <p className="mb-6">Please log in to access this page.</p>
          <Button asChild>
            <Link href="/login">Go to Login</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a192f] to-[#112240] text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/profile" className="inline-flex items-center text-[#64ffda] hover:underline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Profile
          </Link>
          <h1 className="text-3xl font-bold mt-4">Edit Profile</h1>
        </div>

        {error && (
          <div className="mb-6 p-3 bg-red-500/10 border border-red-500/30 rounded text-red-400 text-sm">{error}</div>
        )}

        {success && (
          <div className="mb-6 p-3 bg-green-500/10 border border-green-500/30 rounded text-green-400 text-sm">
            {success}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="bg-[#112240]/70 backdrop-blur-sm rounded-lg border border-[#64ffda]/10 p-6">
              <h2 className="text-xl font-semibold mb-4">Profile Picture</h2>

              <div className="flex flex-col items-center space-y-4">
                {formData.avatar_url ? (
                  <div className="relative">
                    <img
                      src={formData.avatar_url || "/placeholder.svg"}
                      alt="Profile"
                      className="w-32 h-32 rounded-full object-cover border-2 border-[#64ffda]/30"
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-2 w-full border-[#64ffda]/20 hover:bg-[#64ffda]/10 text-white"
                      onClick={handleRemoveAvatar}
                    >
                      Remove Photo
                    </Button>
                  </div>
                ) : (
                  <div className="w-32 h-32 rounded-full bg-[#0a192f] flex items-center justify-center border-2 border-[#64ffda]/30">
                    <User className="h-16 w-16 text-[#64ffda]/50" />
                  </div>
                )}

                <FileUpload
                  onUpload={handleAvatarUpload}
                  accept="image/png,image/jpeg,image/jpg"
                  maxSize={2 * 1024 * 1024} // 2MB
                  buttonText="Upload Avatar"
                  className="w-full"
                />
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="bg-[#112240]/70 backdrop-blur-sm rounded-lg border border-[#64ffda]/10 p-6">
              <h2 className="text-xl font-semibold mb-4">Personal Information</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="full_name">Full Name</Label>
                  <Input
                    id="full_name"
                    name="full_name"
                    type="text"
                    value={formData.full_name}
                    onChange={handleChange}
                    className="mt-1 bg-[#0a192f]/50 border-[#64ffda]/20 focus:border-[#64ffda] focus:ring-[#64ffda]/20"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    disabled
                    className="mt-1 bg-[#0a192f]/50 border-[#64ffda]/20 opacity-70 cursor-not-allowed"
                  />
                  <p className="text-xs text-white/50 mt-1">Email cannot be changed</p>
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f] font-medium py-5 px-8"
                    disabled={saving}
                  >
                    {saving ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Saving...
                      </>
                    ) : (
                      "Save Changes"
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

