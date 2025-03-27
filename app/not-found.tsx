"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#0a192f] to-[#112240] text-white">
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="text-center max-w-md">
          <div className="mb-6 relative">
            <div className="text-[150px] font-bold text-[#64ffda]/10 leading-none">404</div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <h1 className="text-3xl font-bold mb-2">Page Not Found</h1>
              <div className="w-16 h-1 bg-[#64ffda] mx-auto"></div>
            </div>
          </div>

          <p className="text-white/70 mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f] w-full sm:w-auto">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>

            <Link href="/contact">
              <Button
                variant="outline"
                className="border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10 w-full sm:w-auto"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Contact Support
              </Button>
            </Link>
          </div>

          <div className="mt-12 border-t border-[#64ffda]/10 pt-8">
            <p className="text-white/50 mb-4">Try searching for what you're looking for:</p>
            <form
              className="flex gap-2 max-w-sm mx-auto"
              onSubmit={(e) => {
                e.preventDefault()
                const form = e.target as HTMLFormElement
                const search = (form.elements.namedItem("search") as HTMLInputElement).value
                window.location.href = `/search?q=${encodeURIComponent(search)}`
              }}
            >
              <input
                type="search"
                name="search"
                placeholder="Search..."
                className="flex-1 bg-[#0a192f]/50 border border-[#64ffda]/20 rounded-md px-3 py-2 text-white focus:outline-none focus:border-[#64ffda]"
              />
              <Button type="submit" className="bg-[#64ffda]/10 hover:bg-[#64ffda]/20 border border-[#64ffda]/20">
                <Search className="h-4 w-4 text-[#64ffda]" />
                <span className="sr-only">Search</span>
              </Button>
            </form>
          </div>
        </div>
      </div>

      <footer className="py-6 border-t border-[#64ffda]/10 text-center">
        <Link href="/" className="flex items-center justify-center mb-4">
          <h1 className="text-white font-bold text-xl">
            <span className="text-[#64ffda]">TERRA</span>
            <span className="ml-1">BIT</span>
          </h1>
          <div className="ml-2 w-2 h-2 rounded-full bg-[#64ffda] animate-pulse"></div>
        </Link>
        <p className="text-white/50 text-sm">&copy; {new Date().getFullYear()} TerraBit. All rights reserved.</p>
      </footer>
    </div>
  )
}

