"use server"

import { initializeStorageBuckets } from "@/lib/supabase/storage"
import { createServerClient } from "./supabase-server"

export async function initializeStorage() {
  return await initializeStorageBuckets()
}

// Server actions for app/ directory
export async function serverAction() {
  const supabase = createServerClient()
  // Rest of the code
  return { success: true }
}

