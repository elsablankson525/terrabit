import { createBrowserClient } from "../supabase/client"

export interface Todo {
  id: string
  title: string
  description: string
  is_complete: boolean
  due_date: string | null
  priority: string | null
  category: string | null
  created_at: string
  updated_at: string | null
}

export async function getTodos() {
  try {
    const supabase = createBrowserClient()

    const { data, error } = await supabase.from("todos").select("*").order("created_at", { ascending: false })

    if (error) {
      console.error("Error fetching todos:", error)
      return { todos: [], error: error.message }
    }

    return { todos: data as Todo[], error: null }
  } catch (error) {
    console.error("Error in getTodos:", error)
    return {
      todos: [],
      error: error instanceof Error ? error.message : "An unknown error occurred",
    }
  }
}

export async function addTodo(todo: Omit<Todo, "id" | "created_at" | "updated_at">) {
  try {
    const supabase = createBrowserClient()

    const { data, error } = await supabase.from("todos").insert([todo]).select()

    if (error) {
      console.error("Error adding todo:", error)
      return { todo: null, error: error.message }
    }

    return { todo: data[0] as Todo, error: null }
  } catch (error) {
    console.error("Error in addTodo:", error)
    return {
      todo: null,
      error: error instanceof Error ? error.message : "An unknown error occurred",
    }
  }
}

export async function updateTodo(id: string, updates: Partial<Omit<Todo, "id" | "created_at" | "updated_at">>) {
  try {
    const supabase = createBrowserClient()

    const { data, error } = await supabase.from("todos").update(updates).eq("id", id).select()

    if (error) {
      console.error("Error updating todo:", error)
      return { todo: null, error: error.message }
    }

    return { todo: data[0] as Todo, error: null }
  } catch (error) {
    console.error("Error in updateTodo:", error)
    return {
      todo: null,
      error: error instanceof Error ? error.message : "An unknown error occurred",
    }
  }
}

export async function deleteTodo(id: string) {
  try {
    const supabase = createBrowserClient()

    const { error } = await supabase.from("todos").delete().eq("id", id)

    if (error) {
      console.error("Error deleting todo:", error)
      return { success: false, error: error.message }
    }

    return { success: true, error: null }
  } catch (error) {
    console.error("Error in deleteTodo:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "An unknown error occurred",
    }
  }
}

