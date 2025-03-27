"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Loader2, User, Edit, LogOut } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/contexts/auth-context"
import { getProfileById } from "@/lib/services/profile-service"
import { getSupabaseBrowserClient } from "@/lib/supabase/supabaseBrowserClient"

type Profile = {
  id: string
  full_name: string
  email: string
  avatar_url?: string
  has_premium_access: boolean
  created_at: string
}

export default function ProfilePage() {
  const { user } = useAuth()
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadProfile() {
      if (!user) {
        router.push("/login")
        return
      }

      try {
        const profileData = await getProfileById(user.id)
        setProfile(profileData)
      } catch (err) {
        console.error("Error loading profile:", err)
        setError("Failed to load profile data")
      } finally {
        setLoading(false)
      }
    }

    loadProfile()
  }, [user, router])

  const handleSignOut = async () => {
    try {
      const supabase = getSupabaseBrowserClient()
      await supabase.auth.signOut()
      router.push("/login")
    } catch (err) {
      console.error("Error signing out:", err)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0a192f] to-[#112240] text-white flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-[#64ffda]" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0a192f] to-[#112240] text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400 mb-4">{error}</p>
          <Button onClick={() => router.push("/login")} className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f]">
            Go to Login
          </Button>
        </div>
      </div>
    )
  }

  if (!profile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0a192f] to-[#112240] text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-white/70 mb-4">Profile not found</p>
          <Button onClick={() => router.push("/login")} className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f]">
            Go to Login
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a192f] to-[#112240] text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">My Profile</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="bg-[#112240]/70 backdrop-blur-sm rounded-lg border border-[#64ffda]/10 p-6">
              <div className="flex flex-col items-center space-y-4">
                {profile.avatar_url ? (
                  <img
                    src={profile.avatar_url || "/placeholder.svg"}
                    alt="Profile"
                    className="w-32 h-32 rounded-full object-cover border-2 border-[#64ffda]/30"
                  />
                ) : (
                  <div className="w-32 h-32 rounded-full bg-[#0a192f] flex items-center justify-center border-2 border-[#64ffda]/30">
                    <User className="h-16 w-16 text-[#64ffda]/50" />
                  </div>
                )}

                <h2 className="text-xl font-semibold">{profile.full_name}</h2>
                <p className="text-white/70">{profile.email}</p>

                <div className="w-full pt-4">
                  <Link href="/profile/edit">
                    <Button className="w-full bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f] font-medium">
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Profile
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="bg-[#112240]/70 backdrop-blur-sm rounded-lg border border-[#64ffda]/10 p-6">
              <h2 className="text-xl font-semibold mb-4">Account Information</h2>

              <div className="space-y-4">
                <div>
                  <p className="text-white/50 text-sm">Full Name</p>
                  <p className="text-white font-medium">{profile.full_name}</p>
                </div>

                <div>
                  <p className="text-white/50 text-sm">Email Address</p>
                  <p className="text-white font-medium">{profile.email}</p>
                </div>

                <div>
                  <p className="text-white/50 text-sm">Account Type</p>
                  <p className="text-white font-medium">
                    {profile.has_premium_access ? <span className="text-[#64ffda]">Premium</span> : "Free"}
                  </p>
                </div>

                <div>
                  <p className="text-white/50 text-sm">Member Since</p>
                  <p className="text-white font-medium">{new Date(profile.created_at).toLocaleDateString()}</p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#64ffda]/10">
                <Button
                  onClick={handleSignOut}
                  variant="outline"
                  className="border-[#64ffda]/20 hover:bg-[#64ffda]/10 text-white"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

