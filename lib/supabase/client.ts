import { createClient } from "@supabase/supabase-js"
import type { Database } from "@/types/supabase"

// This is a simple client that works everywhere
// It does NOT use cookies or next/headers
let browserInstance: ReturnType<typeof createClient<Database>> | null = null

export function createBrowserClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
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

export function getSupabaseBrowserClient() {
  if (browserInstance) return browserInstance
  browserInstance = createBrowserClient()
  return browserInstance
}

// For server-side usage in App Router
export const createServerClient = () => {
  throw new Error("createServerClient should only be called in Server Components")
}

