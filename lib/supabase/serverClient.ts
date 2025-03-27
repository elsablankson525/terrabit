import { createClient } from "@supabase/supabase-js"
import { cookies } from "next/headers"
import type { Database } from "@/types/supabase"

// WARNING: This file can ONLY be imported in Server Components within the app/ directory
// DO NOT import this file directly in pages/ directory or in Client Components

export const createServerClient = () => {
  if (typeof window !== "undefined") {
    throw new Error("createServerClient should only be called in Server Components")
  }

  const cookieStore = cookies()

  return createClient<Database>(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value
      },
      set(name: string, value: string, options: any) {
        try {
          cookieStore.set({ name, value, ...options })
        } catch (error) {
          // Handle cookies in read-only context
        }
      },
      remove(name: string, options: any) {
        try {
          cookieStore.set({ name, value: "", ...options })
        } catch (error) {
          // Handle cookies in read-only context
        }
      },
    },
  })
}

export const getSupabaseServerClient = () => {
  if (typeof window !== "undefined") {
    throw new Error("getSupabaseServerClient should only be called in Server Components")
  }

  return createServerClient()
}

