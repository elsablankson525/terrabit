"use server"

import { cookies } from "next/headers"
import { createServerClient } from "@/lib/supabase/client"

const sampleTodos = [
  {
    title: "Complete project proposal",
    description: "Finish the draft and send it to the team for review",
    is_complete: false,
    priority: "high",
    category: "Work",
    due_date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days from now
  },
  {
    title: "Buy groceries",
    description: "Milk, eggs, bread, fruits, and vegetables",
    is_complete: false,
    priority: "medium",
    category: "Personal",
    due_date: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString(), // 1 day from now
  },
  {
    title: "Schedule dentist appointment",
    description: "Call Dr. Smith for a checkup",
    is_complete: false,
    priority: "low",
    category: "Health",
    due_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days from now
  },
  {
    title: "Pay utility bills",
    description: "Electricity, water, and internet",
    is_complete: true,
    priority: "medium",
    category: "Finance",
    due_date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
  },
  {
    title: "Prepare presentation for meeting",
    description: "Create slides and practice delivery",
    is_complete: false,
    priority: "high",
    category: "Work",
    due_date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days from now
  },
  {
    title: "Call mom",
    description: "Check in and catch up",
    is_complete: false,
    priority: "medium",
    category: "Personal",
    due_date: null,
  },
  {
    title: "Go for a run",
    description: "30 minutes in the park",
    is_complete: true,
    priority: "low",
    category: "Health",
    due_date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
  },
  {
    title: "Review quarterly budget",
    description: "Analyze expenses and adjust as needed",
    is_complete: false,
    priority: "high",
    category: "Finance",
    due_date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days from now
  },
]

export async function seedTodos() {
  try {
    const cookieStore = cookies()
    const supabase = createServerClient(cookieStore)

    // Get the current user
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser()

    if (userError || !user) {
      return { success: false, error: "User not authenticated" }
    }

    // Delete existing todos for this user
    await supabase.from("todos").delete().eq("user_id", user.id)

    // Insert sample todos
    const { error } = await supabase.from("todos").insert(
      sampleTodos.map((todo) => ({
        ...todo,
        user_id: user.id,
      })),
    )

    if (error) {
      console.error("Error seeding todos:", error)
      return { success: false, error: error.message }
    }

    return { success: true }
  } catch (error) {
    console.error("Error in seedTodos:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "An unknown error occurred",
    }
  }
}

