"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import type { User, Session } from "@supabase/supabase-js"
import { getSupabaseBrowserClient } from "@/lib/supabase"

type AuthContextType = {
  user: User | null
  session: Session | null
  isLoading: boolean
  signIn: (email: string, password: string) => Promise<{ error: any }>
  signUp: (email: string, password: string, fullName: string) => Promise<{ error: any; data: any }>
  signOut: () => Promise<void>
  hasPremiumAccess: boolean
}

// Create the context with a default undefined value
const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [hasPremiumAccess, setHasPremiumAccess] = useState(false)

  // Use a ref to ensure we don't create multiple instances
  const [supabase] = useState(() => getSupabaseBrowserClient())

  useEffect(() => {
    let mounted = true

    const fetchSession = async () => {
      try {
        const { data, error } = await supabase.auth.getSession()

        if (error) {
          console.error("Error fetching session:", error)
          if (mounted) setIsLoading(false)
          return
        }

        if (data.session && mounted) {
          setSession(data.session)
          setUser(data.session.user)

          try {
            const { data: profile } = await supabase
              .from("profiles")
              .select("has_premium_access")
              .eq("id", data.session.user.id)
              .single()

            if (mounted) {
              setHasPremiumAccess(profile?.has_premium_access || false)
            }
          } catch (err) {
            console.error("Error fetching profile:", err)
          }
        }

        if (mounted) setIsLoading(false)
      } catch (err) {
        console.error("Unexpected error in auth context:", err)
        if (mounted) setIsLoading(false)
      }
    }

    fetchSession()

    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      if (mounted) {
        setSession(session)
        setUser(session?.user || null)
      }
    })

    return () => {
      mounted = false
      data.subscription.unsubscribe()
    }
  }, [supabase])

  const signIn = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (!error) {
        const { data } = await supabase.auth.getUser()
        if (data.user) {
          const { data: profile } = await supabase
            .from("profiles")
            .select("has_premium_access")
            .eq("id", data.user.id)
            .single()

          setHasPremiumAccess(profile?.has_premium_access || false)
        }
      }

      return { error }
    } catch (error) {
      console.error("Sign in error:", error)
      return { error }
    }
  }

  const signUp = async (email: string, password: string, fullName: string) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      })

      if (!error && data.user) {
        await supabase.from("profiles").insert({
          id: data.user.id,
          full_name: fullName,
          email: email,
          has_premium_access: false,
        })
      }

      return { data, error }
    } catch (error) {
      console.error("Sign up error:", error)
      return { data: null, error }
    }
  }

  const signOut = async () => {
    await supabase.auth.signOut()
    setHasPremiumAccess(false)
  }

  // Memoize the context value to prevent unnecessary re-renders
  const value = React.useMemo(
    () => ({
      user,
      session,
      isLoading,
      signIn,
      signUp,
      signOut,
      hasPremiumAccess,
    }),
    [user, session, isLoading, hasPremiumAccess],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

