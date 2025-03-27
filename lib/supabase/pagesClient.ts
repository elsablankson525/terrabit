import { createClient } from "@supabase/supabase-js"
import type { Database } from "@/types/supabase"

export const createPagesClient = () => {
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

// Singleton instance for client-side usage in pages/ directory
let pagesClientInstance: ReturnType<typeof createClient<Database>> | null = null

export const getPagesClient = () => {
  if (pagesClientInstance) return pagesClientInstance

  pagesClientInstance = createPagesClient()
  return pagesClientInstance
}

