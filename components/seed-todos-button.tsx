"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function SeedTodosButton() {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  async function handleSeedTodos() {
    setIsLoading(true)

    try {
      const response = await fetch("/api/todos/seed", {
        method: "POST",
      })

      const data = await response.json()

      if (data.error) {
        toast({
          title: "Error",
          description: data.error,
          variant: "destructive",
        })
      } else {
        toast({
          title: "Success",
          description: "Sample todos have been added to your account",
        })

        // Reload the page to show the new todos
        window.location.reload()
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to seed todos. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button
      onClick={handleSeedTodos}
      disabled={isLoading}
      className="bg-[#64ffda] text-[#0a192f] hover:bg-[#64ffda]/80"
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Loading...
        </>
      ) : (
        "Seed Sample Todos"
      )}
    </Button>
  )
}

