"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Home, ShoppingCart, PieChart, Users, Settings, HelpCircle, FileText, CheckSquare } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        className="text-white hover:text-[#64ffda] transition-colors"
        onClick={toggleMenu}
      >
        <Menu className="h-6 w-6" />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-[#0a192f]/95 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center mb-8">
              <Link href="/" onClick={closeMenu} className="flex items-center">
                <h1 className="text-white font-bold text-xl">
                  <span className="text-[#64ffda]">TERRA</span>
                  <span className="ml-1">BIT</span>
                </h1>
                <div className="ml-2 w-2 h-2 rounded-full bg-[#64ffda] animate-pulse"></div>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-[#64ffda] transition-colors"
                onClick={toggleMenu}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                onClick={closeMenu}
                className={`flex items-center py-2 px-4 rounded-md ${
                  isActive("/")
                    ? "bg-[#64ffda]/10 text-[#64ffda]"
                    : "text-white hover:bg-[#112240] hover:text-[#64ffda]"
                } transition-colors`}
              >
                <Home className="h-5 w-5 mr-3" />
                Home
              </Link>
              <Link
                href="/hardware"
                onClick={closeMenu}
                className={`flex items-center py-2 px-4 rounded-md ${
                  isActive("/hardware")
                    ? "bg-[#64ffda]/10 text-[#64ffda]"
                    : "text-white hover:bg-[#112240] hover:text-[#64ffda]"
                } transition-colors`}
              >
                <ShoppingCart className="h-5 w-5 mr-3" />
                Hardware Store
              </Link>
              <Link
                href="/analytics/dashboard"
                onClick={closeMenu}
                className={`flex items-center py-2 px-4 rounded-md ${
                  pathname.includes("/analytics")
                    ? "bg-[#64ffda]/10 text-[#64ffda]"
                    : "text-white hover:bg-[#112240] hover:text-[#64ffda]"
                } transition-colors`}
              >
                <PieChart className="h-5 w-5 mr-3" />
                Analytics
              </Link>
              <Link
                href="/partners"
                onClick={closeMenu}
                className={`flex items-center py-2 px-4 rounded-md ${
                  isActive("/partners")
                    ? "bg-[#64ffda]/10 text-[#64ffda]"
                    : "text-white hover:bg-[#112240] hover:text-[#64ffda]"
                } transition-colors`}
              >
                <Users className="h-5 w-5 mr-3" />
                Partners
              </Link>
              <Link
                href="/todos"
                onClick={closeMenu}
                className={`flex items-center py-2 px-4 rounded-md ${
                  isActive("/todos")
                    ? "bg-[#64ffda]/10 text-[#64ffda]"
                    : "text-white hover:bg-[#112240] hover:text-[#64ffda]"
                } transition-colors`}
              >
                <CheckSquare className="h-5 w-5 mr-3" />
                Todos
              </Link>
              <Link
                href="/resources/blog"
                onClick={closeMenu}
                className={`flex items-center py-2 px-4 rounded-md ${
                  pathname.includes("/resources")
                    ? "bg-[#64ffda]/10 text-[#64ffda]"
                    : "text-white hover:bg-[#112240] hover:text-[#64ffda]"
                } transition-colors`}
              >
                <FileText className="h-5 w-5 mr-3" />
                Resources
              </Link>
              <Link
                href="/contact"
                onClick={closeMenu}
                className={`flex items-center py-2 px-4 rounded-md ${
                  isActive("/contact")
                    ? "bg-[#64ffda]/10 text-[#64ffda]"
                    : "text-white hover:bg-[#112240] hover:text-[#64ffda]"
                } transition-colors`}
              >
                <HelpCircle className="h-5 w-5 mr-3" />
                Contact
              </Link>
              <Link
                href="/settings"
                onClick={closeMenu}
                className={`flex items-center py-2 px-4 rounded-md ${
                  isActive("/settings")
                    ? "bg-[#64ffda]/10 text-[#64ffda]"
                    : "text-white hover:bg-[#112240] hover:text-[#64ffda]"
                } transition-colors`}
              >
                <Settings className="h-5 w-5 mr-3" />
                Settings
              </Link>
            </nav>

            <div className="mt-8 flex flex-col space-y-4">
              <Link href="/login" onClick={closeMenu}>
                <Button variant="outline" className="w-full text-white border-white hover:bg-white/10">
                  Log In
                </Button>
              </Link>
              <Link href="/signup" onClick={closeMenu}>
                <Button className="w-full bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f] font-medium">
                  Create Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

