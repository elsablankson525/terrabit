import { createClient } from "@supabase/supabase-js"
import type { Database } from "@/types/supabase"
import type { NextApiRequest, NextApiResponse } from "next"
import Cookies from "cookies"

// This file is specifically for use in the pages/ directory API routes

export const createPagesApiClient = (req: NextApiRequest, res: NextApiResponse) => {
  const cookies = new Cookies(req, res)

  return createClient<Database>(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
    },
    cookies: {
      get(name: string) {
        return cookies.get(name)
      },
      set(name: string, value: string, options: any) {
        cookies.set(name, value, options)
      },
      remove(name: string, options: any) {
        cookies.set(name, "", { ...options, maxAge: 0 })
      },
    },
  })
}

