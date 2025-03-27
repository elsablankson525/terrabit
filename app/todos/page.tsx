import TodoList from "@/components/todo-list"
import SeedTodosButton from "@/components/seed-todos-button"

export default function TodosPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Todo List</h1>
          <p className="text-muted-foreground mt-1">Manage your tasks and stay organized</p>
        </div>
        <SeedTodosButton />
      </div>

      <TodoList />
    </div>
  )
}

