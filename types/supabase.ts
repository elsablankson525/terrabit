export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          full_name: string | null
          email: string | null
          has_premium_access: boolean
          created_at: string
          updated_at: string | null
        }
        Insert: {
          id: string
          full_name?: string | null
          email?: string | null
          has_premium_access?: boolean
          created_at?: string
          updated_at?: string | null
        }
        Update: {
          id?: string
          full_name?: string | null
          email?: string | null
          has_premium_access?: boolean
          created_at?: string
          updated_at?: string | null
        }
      }
      todos: {
        Row: {
          id: string
          title: string
          description: string
          is_complete: boolean
          due_date: string | null
          priority: string | null
          category: string | null
          user_id: string
          created_at: string
          updated_at: string | null
        }
        Insert: {
          id?: string
          title: string
          description: string
          is_complete: boolean
          due_date?: string | null
          priority?: string | null
          category?: string | null
          user_id?: string
          created_at?: string
          updated_at?: string | null
        }
        Update: {
          id?: string
          title?: string
          description?: string
          is_complete?: boolean
          due_date?: string | null
          priority?: string | null
          category?: string | null
          user_id?: string
          created_at?: string
          updated_at?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

