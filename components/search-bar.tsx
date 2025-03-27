"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function SearchBar({ placeholder = "Search...", className = "" }) {
  const [searchTerm, setSearchTerm] = useState("")
  const router = useRouter()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      // In a real app, this would navigate to search results
      router.push(`/search?q=${encodeURIComponent(searchTerm)}`)
    }
  }

  return (
    <form onSubmit={handleSearch} className={`flex w-full max-w-sm items-center space-x-2 ${className}`}>
      <Input
        type="search"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-1 bg-[#0a192f]/50 border-[#64ffda]/20 text-white focus:border-[#64ffda] focus:ring-[#64ffda]/20"
      />
      <Button type="submit" size="icon" className="bg-[#64ffda]/10 hover:bg-[#64ffda]/20 border border-[#64ffda]/20">
        <Search className="h-4 w-4 text-[#64ffda]" />
        <span className="sr-only">Search</span>
      </Button>
    </form>
  )
}

