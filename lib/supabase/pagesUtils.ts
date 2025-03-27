import { createClient } from "@supabase/supabase-js"
import type { Database } from "@/types/supabase"
import { getCookie, setCookie } from "cookies-next"

// This file is safe to use in the pages/ directory
export const createPagesClient = (req?: any, res?: any) => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error("Missing Supabase environment variables")
    throw new Error("Missing Supabase environment variables")
  }

  return createClient<Database>(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
    cookies: {
      get(name: string) {
        return getCookie(name, { req, res })?.toString()
      },
      set(name: string, value: string, options: any) {
        setCookie(name, value, { req, res, ...options })
      },
      remove(name: string, options: any) {
        setCookie(name, "", { req, res, ...options, maxAge: -1 })
      },
    },
  })
}

// For client-side usage in pages/
export const getPagesClient = () => {
  if (typeof window === "undefined") {
    throw new Error("Use createPagesClient for server-side in pages/")
  }

  return createBrowserClient()
}

// Re-export from browser client for convenience
import { createBrowserClient } from "./supabaseBrowserClient"

