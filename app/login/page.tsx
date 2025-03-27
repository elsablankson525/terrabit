"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Twitter, Mail, Facebook, Instagram } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { getSupabaseBrowserClient } from "@/lib/supabase"

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [socialAuthStep, setSocialAuthStep] = useState<string | null>(null)
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, rememberMe: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Basic validation
    if (!formData.email || !formData.password) {
      setError("Email and password are required")
      return
    }

    // Login with Supabase
    setLoading(true)
    try {
      const supabase = getSupabaseBrowserClient()

      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      })

      if (signInError) {
        throw signInError
      }

      // Redirect to home page after successful login
      router.push("/")
    } catch (err: any) {
      console.error("Login error:", err)
      setError(err.message || "Invalid email or password")
    } finally {
      setLoading(false)
    }
  }

  const handleSocialLogin = async (provider: string) => {
    try {
      const supabase = getSupabaseBrowserClient()

      if (provider === "google") {
        const { error } = await supabase.auth.signInWithOAuth({
          provider: "google",
          options: {
            redirectTo: `${window.location.origin}/auth/callback`,
          },
        })

        if (error) throw error
      } else if (provider === "twitter") {
        const { error } = await supabase.auth.signInWithOAuth({
          provider: "twitter",
          options: {
            redirectTo: `${window.location.origin}/auth/callback`,
          },
        })

        if (error) throw error
      } else if (provider === "facebook") {
        const { error } = await supabase.auth.signInWithOAuth({
          provider: "facebook",
          options: {
            redirectTo: `${window.location.origin}/auth/callback`,
          },
        })

        if (error) throw error
      }
    } catch (error: any) {
      console.error("Error signing in with OAuth provider", error)
      setError(`Social login error: ${error.message}`)
    }
  }

  const handleSocialAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate social login authentication
    setTimeout(() => {
      setLoading(false)
      router.push("/")
    }, 1500)
  }

  // Render social authentication forms
  if (socialAuthStep === "google") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0a192f] to-[#112240] text-white flex items-center justify-center">
        <div className="w-full max-w-md p-8 rounded-lg border border-[#64ffda]/10 bg-[#112240]/70 backdrop-blur-sm">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white mb-4">
              <Mail className="h-6 w-6 text-[#0a192f]" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Sign in with Google</h2>
            <p className="text-white/70">Enter your Google account details</p>
          </div>

          <form onSubmit={handleSocialAuthSubmit} className="space-y-6">
            <div>
              <Label htmlFor="googleEmail">Email</Label>
              <Input
                id="googleEmail"
                type="email"
                placeholder="your.email@gmail.com"
                required
                className="mt-1 bg-[#0a192f]/50 border-[#64ffda]/20 focus:border-[#64ffda] focus:ring-[#64ffda]/20"
              />
            </div>
            <div>
              <Label htmlFor="googlePassword">Password</Label>
              <Input
                id="googlePassword"
                type="password"
                placeholder="••••••••"
                required
                className="mt-1 bg-[#0a192f]/50 border-[#64ffda]/20 focus:border-[#64ffda] focus:ring-[#64ffda]/20"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f] font-medium py-5"
              disabled={loading}
            >
              {loading ? "Authenticating..." : "Continue with Google"}
            </Button>
            <Button
              type="button"
              variant="outline"
              className="w-full border-[#64ffda]/20 hover:bg-[#64ffda]/10 text-white"
              onClick={() => setSocialAuthStep(null)}
            >
              Back to Login Options
            </Button>
          </form>
        </div>
      </div>
    )
  }

  if (socialAuthStep === "twitter") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0a192f] to-[#112240] text-white flex items-center justify-center">
        <div className="w-full max-w-md p-8 rounded-lg border border-[#64ffda]/10 bg-[#112240]/70 backdrop-blur-sm">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1DA1F2] mb-4">
              <Twitter className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Sign in with Twitter</h2>
            <p className="text-white/70">Enter your Twitter account details</p>
          </div>

          <form onSubmit={handleSocialAuthSubmit} className="space-y-6">
            <div>
              <Label htmlFor="twitterUsername">Username or Email</Label>
              <Input
                id="twitterUsername"
                placeholder="@username or email"
                required
                className="mt-1 bg-[#0a192f]/50 border-[#64ffda]/20 focus:border-[#64ffda] focus:ring-[#64ffda]/20"
              />
            </div>
            <div>
              <Label htmlFor="twitterPassword">Password</Label>
              <Input
                id="twitterPassword"
                type="password"
                placeholder="••••••••"
                required
                className="mt-1 bg-[#0a192f]/50 border-[#64ffda]/20 focus:border-[#64ffda] focus:ring-[#64ffda]/20"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-[#1DA1F2] hover:bg-[#1a91da] text-white font-medium py-5"
              disabled={loading}
            >
              {loading ? "Authenticating..." : "Continue with Twitter"}
            </Button>
            <Button
              type="button"
              variant="outline"
              className="w-full border-[#64ffda]/20 hover:bg-[#64ffda]/10 text-white"
              onClick={() => setSocialAuthStep(null)}
            >
              Back to Login Options
            </Button>
          </form>
        </div>
      </div>
    )
  }

  if (socialAuthStep === "facebook") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0a192f] to-[#112240] text-white flex items-center justify-center">
        <div className="w-full max-w-md p-8 rounded-lg border border-[#64ffda]/10 bg-[#112240]/70 backdrop-blur-sm">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1877F2] mb-4">
              <Facebook className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Sign in with Facebook</h2>
            <p className="text-white/70">Enter your Facebook account details</p>
          </div>

          <form onSubmit={handleSocialAuthSubmit} className="space-y-6">
            <div>
              <Label htmlFor="facebookEmail">Email or Phone</Label>
              <Input
                id="facebookEmail"
                placeholder="Email or phone number"
                required
                className="mt-1 bg-[#0a192f]/50 border-[#64ffda]/20 focus:border-[#64ffda] focus:ring-[#64ffda]/20"
              />
            </div>
            <div>
              <Label htmlFor="facebookPassword">Password</Label>
              <Input
                id="facebookPassword"
                type="password"
                placeholder="••••••••"
                required
                className="mt-1 bg-[#0a192f]/50 border-[#64ffda]/20 focus:border-[#64ffda] focus:ring-[#64ffda]/20"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-[#1877F2] hover:bg-[#166fe5] text-white font-medium py-5"
              disabled={loading}
            >
              {loading ? "Authenticating..." : "Continue with Facebook"}
            </Button>
            <Button
              type="button"
              variant="outline"
              className="w-full border-[#64ffda]/20 hover:bg-[#64ffda]/10 text-white"
              onClick={() => setSocialAuthStep(null)}
            >
              Back to Login Options
            </Button>
          </form>
        </div>
      </div>
    )
  }

  if (socialAuthStep === "instagram") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0a192f] to-[#112240] text-white flex items-center justify-center">
        <div className="w-full max-w-md p-8 rounded-lg border border-[#64ffda]/10 bg-[#112240]/70 backdrop-blur-sm">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#f09433] to-[#bc1888] mb-4">
              <Instagram className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Sign in with Instagram</h2>
            <p className="text-white/70">Enter your Instagram account details</p>
          </div>

          <form onSubmit={handleSocialAuthSubmit} className="space-y-6">
            <div>
              <Label htmlFor="instagramUsername">Username</Label>
              <Input
                id="instagramUsername"
                placeholder="username"
                required
                className="mt-1 bg-[#0a192f]/50 border-[#64ffda]/20 focus:border-[#64ffda] focus:ring-[#64ffda]/20"
              />
            </div>
            <div>
              <Label htmlFor="instagramPassword">Password</Label>
              <Input
                id="instagramPassword"
                type="password"
                placeholder="••••••••"
                required
                className="mt-1 bg-[#0a192f]/50 border-[#64ffda]/20 focus:border-[#64ffda] focus:ring-[#64ffda]/20"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-[#f09433] to-[#bc1888] text-white font-medium py-5"
              disabled={loading}
            >
              {loading ? "Authenticating..." : "Continue with Instagram"}
            </Button>
            <Button
              type="button"
              variant="outline"
              className="w-full border-[#64ffda]/20 hover:bg-[#64ffda]/10 text-white"
              onClick={() => setSocialAuthStep(null)}
            >
              Back to Login Options
            </Button>
          </form>
        </div>
      </div>
    )
  }

  // Default login form
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a192f] to-[#112240] text-white flex items-center justify-center">
      <div className="w-full max-w-md p-8 rounded-lg border border-[#64ffda]/10 bg-[#112240]/70 backdrop-blur-sm">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center">
            <h1 className="text-white font-bold text-2xl">
              <span className="text-[#64ffda]">TERRA</span>
              <span className="ml-1">BIT</span>
            </h1>
            <div className="ml-2 w-2 h-2 rounded-full bg-[#64ffda] animate-pulse"></div>
          </Link>
          <h2 className="text-2xl font-bold mt-6 mb-2">Welcome Back</h2>
          <p className="text-white/70">Log in to access your TerraBit dashboard</p>
        </div>

        {error && (
          <div className="mb-6 p-3 bg-red-500/10 border border-red-500/30 rounded text-red-400 text-sm">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 bg-[#0a192f]/50 border-[#64ffda]/20 focus:border-[#64ffda] focus:ring-[#64ffda]/20"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link href="/forgot-password" className="text-sm text-[#64ffda] hover:underline">
                Forgot password?
              </Link>
            </div>
            <Input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 bg-[#0a192f]/50 border-[#64ffda]/20 focus:border-[#64ffda] focus:ring-[#64ffda]/20"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="rememberMe"
              checked={formData.rememberMe}
              onCheckedChange={handleCheckboxChange}
              className="data-[state=checked]:bg-[#64ffda] data-[state=checked]:text-[#0a192f]"
            />
            <label
              htmlFor="rememberMe"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Remember me
            </label>
          </div>

          <Button
            type="submit"
            className="w-full bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f] font-medium py-5"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Log In"}
          </Button>
        </form>

        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#64ffda]/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-[#112240] text-white/50">Or continue with</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <Button
              type="button"
              variant="outline"
              className="border-[#64ffda]/20 hover:bg-[#64ffda]/10 text-white"
              onClick={() => handleSocialLogin("google")}
              disabled={loading}
            >
              <Mail className="h-4 w-4 mr-2" />
              Google
            </Button>
            <Button
              type="button"
              variant="outline"
              className="border-[#64ffda]/20 hover:bg-[#64ffda]/10 text-white"
              onClick={() => handleSocialLogin("twitter")}
              disabled={loading}
            >
              <Twitter className="h-4 w-4 mr-2" />
              Twitter
            </Button>
            <Button
              type="button"
              variant="outline"
              className="border-[#64ffda]/20 hover:bg-[#64ffda]/10 text-white"
              onClick={() => handleSocialLogin("facebook")}
              disabled={loading}
            >
              <Facebook className="h-4 w-4 mr-2" />
              Facebook
            </Button>
            <Button
              type="button"
              variant="outline"
              className="border-[#64ffda]/20 hover:bg-[#64ffda]/10 text-white"
              onClick={() => handleSocialLogin("instagram")}
              disabled={loading}
            >
              <Instagram className="h-4 w-4 mr-2" />
              Instagram
            </Button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-white/70">
            Don't have an account?{" "}
            <Link href="/signup" className="text-[#64ffda] hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

