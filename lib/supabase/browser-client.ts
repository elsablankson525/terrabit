import { createClient } from "@supabase/supabase-js"
import type { Database } from "@/types/supabase"

// This file is safe to import in both app/ and pages/ directories
// It does NOT use any Server Component features

let browserClientInstance: ReturnType<typeof createClient<Database>> | null = null

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

export const getSupabaseBrowserClient = () => {
  if (browserClientInstance) return browserClientInstance

  browserClientInstance = createBrowserClient()
  return browserClientInstance
}

