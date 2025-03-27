import { createClient } from "@supabase/supabase-js"
import type { Database } from "@/types/supabase"

// This file is safe to import in both app/ and pages/ directories
export const createBrowserClient = () => {
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
  })
}

// Singleton instance for client-side usage
let browserClientInstance: ReturnType<typeof createClient<Database>> | null = null

export const getSupabaseBrowserClient = () => {
  if (typeof window === "undefined") {
    throw new Error("getSupabaseBrowserClient should only be called in Client Components or client-side code")
  }

  if (browserClientInstance) return browserClientInstance

  browserClientInstance = createBrowserClient()
  return browserClientInstance
}

