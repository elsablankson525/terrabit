"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Pencil, Trash2, X } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import TodoForm from "./todo-form"
import type { Todo } from "@/lib/services/todos"

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [editingTodoId, setEditingTodoId] = useState<string | null>(null)
  const [showForm, setShowForm] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    fetchTodos()
  }, [])

  async function fetchTodos() {
    setIsLoading(true)
    try {
      const response = await fetch("/api/todos")
      const data = await response.json()

      if (data.error) {
        toast({
          title: "Error fetching todos",
          description: data.error,
          variant: "destructive",
        })
        setTodos([])
      } else {
        setTodos(data.todos)
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch todos. Please try again.",
        variant: "destructive",
      })
      setTodos([])
    } finally {
      setIsLoading(false)
    }
  }

  async function handleAddTodo(todo: Omit<Todo, "id" | "created_at" | "updated_at">) {
    try {
      const response = await fetch("/api/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
      })

      const data = await response.json()

      if (data.error) {
        toast({
          title: "Error adding todo",
          description: data.error,
          variant: "destructive",
        })
      } else {
        setTodos((prevTodos) => [data.todo, ...prevTodos])
        setShowForm(false)
        toast({
          title: "Success",
          description: "Todo added successfully",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add todo. Please try again.",
        variant: "destructive",
      })
    }
  }

  async function handleUpdateTodo(id: string, updates: Partial<Omit<Todo, "id" | "created_at" | "updated_at">>) {
    try {
      const response = await fetch(`/api/todos/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updates),
      })

      const data = await response.json()

      if (data.error) {
        toast({
          title: "Error updating todo",
          description: data.error,
          variant: "destructive",
        })
      } else {
        setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? data.todo : todo)))
        setEditingTodoId(null)
        toast({
          title: "Success",
          description: "Todo updated successfully",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update todo. Please try again.",
        variant: "destructive",
      })
    }
  }

  async function handleDeleteTodo(id: string) {
    try {
      const response = await fetch(`/api/todos/${id}`, {
        method: "DELETE",
      })

      const data = await response.json()

      if (data.error) {
        toast({
          title: "Error deleting todo",
          description: data.error,
          variant: "destructive",
        })
      } else {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
        toast({
          title: "Success",
          description: "Todo deleted successfully",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete todo. Please try again.",
        variant: "destructive",
      })
    }
  }

  async function handleToggleComplete(id: string, isComplete: boolean) {
    await handleUpdateTodo(id, { is_complete: isComplete })
  }

  function getPriorityColor(priority: string | null) {
    switch (priority) {
      case "high":
        return "bg-red-500 hover:bg-red-600"
      case "medium":
        return "bg-yellow-500 hover:bg-yellow-600"
      case "low":
        return "bg-green-500 hover:bg-green-600"
      default:
        return "bg-blue-500 hover:bg-blue-600"
    }
  }

  function formatDate(dateString: string | null) {
    if (!dateString) return "No due date"

    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  function getDueDateClass(dueDate: string | null, isComplete: boolean) {
    if (isComplete || !dueDate) return "text-muted-foreground"

    const now = new Date()
    const due = new Date(dueDate)

    if (due < now) {
      return "text-red-500"
    } else if (due.getTime() - now.getTime() < 2 * 24 * 60 * 60 * 1000) {
      return "text-yellow-500"
    } else {
      return "text-muted-foreground"
    }
  }

  const editingTodo = editingTodoId ? todos.find((todo) => todo.id === editingTodoId) : null

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>My Tasks</CardTitle>
        <Button
          onClick={() => setShowForm(!showForm)}
          variant="outline"
          className="border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10"
        >
          {showForm ? "Cancel" : "Add New Task"}
        </Button>
      </CardHeader>
      <CardContent>
        {showForm && (
          <div className="mb-6">
            <TodoForm onSubmit={handleAddTodo} onCancel={() => setShowForm(false)} />
          </div>
        )}

        {editingTodo && (
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Edit Task</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setEditingTodoId(null)}
                className="text-red-500 hover:text-red-700 hover:bg-red-100/10"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <TodoForm
              onSubmit={(updates) => handleUpdateTodo(editingTodo.id, updates)}
              onCancel={() => setEditingTodoId(null)}
              initialData={editingTodo}
            />
          </div>
        )}

        {isLoading ? (
          <div className="py-4 text-center text-muted-foreground">Loading tasks...</div>
        ) : todos.length === 0 ? (
          <div className="py-8 text-center text-muted-foreground">
            <p>No tasks yet. Add your first task to get started.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {todos.map((todo) => (
              <div
                key={todo.id}
                className={`flex items-start gap-3 p-3 rounded-lg border ${todo.is_complete ? "bg-muted/30" : ""}`}
              >
                <Checkbox
                  checked={todo.is_complete}
                  onCheckedChange={(checked) => handleToggleComplete(todo.id, checked as boolean)}
                  className="mt-1"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className={`font-medium ${todo.is_complete ? "line-through text-muted-foreground" : ""}`}>
                      {todo.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      {todo.priority && (
                        <Badge className={`${getPriorityColor(todo.priority)}`}>
                          {todo.priority.charAt(0).toUpperCase() + todo.priority.slice(1)}
                        </Badge>
                      )}
                      <div className="flex items-center">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setEditingTodoId(todo.id)}
                          className="text-blue-500 hover:text-blue-700 hover:bg-blue-100/10"
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDeleteTodo(todo.id)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-100/10"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <p
                    className={`text-sm mt-1 ${
                      todo.is_complete ? "text-muted-foreground/70" : "text-muted-foreground"
                    }`}
                  >
                    {todo.description}
                  </p>
                  <div className="flex items-center justify-between mt-2 text-xs">
                    {todo.category && <span className="text-muted-foreground">{todo.category}</span>}
                    <span className={getDueDateClass(todo.due_date, todo.is_complete)}>
                      {formatDate(todo.due_date)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

