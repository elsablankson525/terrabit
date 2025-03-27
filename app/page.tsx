"use client"

import { Search, ChevronDown, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import LanguageSelector from "@/components/language-selector"
import HeroSection from "@/components/hero-section"
import TestimonialsSection from "@/components/testimonials-section"
import DataAnalyticsSection from "@/components/data-analytics-section"
import AboutSection from "@/components/about-section"
import DemoSection from "@/components/demo-section"
import Link from "next/link"
import MobileMenu from "@/components/mobile-menu"
import Footer from "@/components/footer"
import BackToTop from "@/components/back-to-top"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#0a192f] to-[#112240]">
      {/* Navigation Bar */}
      <header className="border-b border-[#64ffda]/10 py-4 px-6 backdrop-blur-sm bg-[#0a192f]/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <MobileMenu />
            <div className="mr-8">
              <Link href="/" className="flex items-center">
                <h1 className="text-white font-bold text-xl">
                  <span className="text-[#64ffda]">TERRA</span>
                  <span className="ml-1">BIT</span>
                </h1>
                <div className="ml-2 w-2 h-2 rounded-full bg-[#64ffda] animate-pulse"></div>
              </Link>
            </div>
            <nav className="hidden md:flex space-x-6">
              <div className="relative group">
                <button className="flex items-center space-x-1 py-2 text-white hover:text-[#64ffda] transition-colors">
                  <span>Our Solutions</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute left-0 top-full mt-1 w-48 bg-[#112240] border border-[#64ffda]/10 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2 z-50">
                  <Link
                    href="/solutions/field-monitoring"
                    className="block px-4 py-2 text-white hover:bg-[#64ffda]/10 rounded-sm"
                  >
                    Field Monitoring
                  </Link>
                  <Link
                    href="/solutions/crop-analysis"
                    className="block px-4 py-2 text-white hover:bg-[#64ffda]/10 rounded-sm"
                  >
                    Crop Analysis
                  </Link>
                  <Link
                    href="/solutions/weather-insights"
                    className="block px-4 py-2 text-white hover:bg-[#64ffda]/10 rounded-sm"
                  >
                    Weather Insights
                  </Link>
                </div>
              </div>
              <Link href="/pricing" className="py-2 text-white hover:text-[#64ffda] transition-colors">
                Pricing
              </Link>
              <Link href="/partners" className="py-2 text-white hover:text-[#64ffda] transition-colors">
                Partners
              </Link>
              <div className="relative group">
                <button className="flex items-center space-x-1 py-2 text-white hover:text-[#64ffda] transition-colors">
                  <span>Our Hardware</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute left-0 top-full mt-1 w-48 bg-[#112240] border border-[#64ffda]/10 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2 z-50">
                  <Link href="/hardware" className="block px-4 py-2 text-white hover:bg-[#64ffda]/10 rounded-sm">
                    All Hardware
                  </Link>
                  <Link
                    href="/hardware/sensors"
                    className="block px-4 py-2 text-white hover:bg-[#64ffda]/10 rounded-sm"
                  >
                    Sensors & Monitors
                  </Link>
                  <Link href="/hardware/drones" className="block px-4 py-2 text-white hover:bg-[#64ffda]/10 rounded-sm">
                    Drones & Imaging
                  </Link>
                  <Link
                    href="/hardware/irrigation"
                    className="block px-4 py-2 text-white hover:bg-[#64ffda]/10 rounded-sm"
                  >
                    Smart Irrigation
                  </Link>
                </div>
              </div>
              <div className="relative group">
                <button className="flex items-center space-x-1 py-2 text-white hover:text-[#64ffda] transition-colors">
                  <span>Resources</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute left-0 top-full mt-1 w-64 bg-[#112240] border border-[#64ffda]/10 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2 z-50">
                  <div className="mb-3">
                    <h3 className="px-4 py-1 text-[#64ffda] text-xs font-semibold uppercase tracking-wider">Support</h3>
                    <Link href="/support/guide" className="block px-4 py-2 text-white hover:bg-[#64ffda]/10 rounded-sm">
                      TerraBit Guide
                    </Link>
                    <Link
                      href="/support/knowledge-center"
                      className="block px-4 py-2 text-white hover:bg-[#64ffda]/10 rounded-sm"
                    >
                      Knowledge Center
                    </Link>
                  </div>
                  <div className="mb-3">
                    <h3 className="px-4 py-1 text-[#64ffda] text-xs font-semibold uppercase tracking-wider">
                      Resources
                    </h3>
                    <Link
                      href="/resources/blog"
                      className="block px-4 py-2 text-white hover:bg-[#64ffda]/10 rounded-sm"
                    >
                      Blog
                    </Link>
                    <Link
                      href="/resources/videos"
                      className="block px-4 py-2 text-white hover:bg-[#64ffda]/10 rounded-sm"
                    >
                      Videos
                    </Link>
                    <Link
                      href="/resources/podcast"
                      className="block px-4 py-2 text-white hover:bg-[#64ffda]/10 rounded-sm"
                    >
                      Around the Farm Podcast
                    </Link>
                  </div>
                  <div>
                    <h3 className="px-4 py-1 text-[#64ffda] text-xs font-semibold uppercase tracking-wider">News</h3>
                    <Link
                      href="/news/press-releases"
                      className="block px-4 py-2 text-white hover:bg-[#64ffda]/10 rounded-sm"
                    >
                      Press Releases
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <form
                className="flex w-64 items-center space-x-2"
                onSubmit={(e) => {
                  e.preventDefault()
                  const form = e.target as HTMLFormElement
                  const search = (form.elements.namedItem("search") as HTMLInputElement).value
                  if (search.trim()) {
                    window.location.href = `/search?q=${encodeURIComponent(search)}`
                  }
                }}
              >
                <Input
                  type="search"
                  name="search"
                  placeholder="Search TerraBit..."
                  className="flex-1 bg-[#0a192f]/50 border-[#64ffda]/20 text-white focus:border-[#64ffda] focus:ring-[#64ffda]/20"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="bg-[#64ffda]/10 hover:bg-[#64ffda]/20 border border-[#64ffda]/20"
                >
                  <Search className="h-4 w-4 text-[#64ffda]" />
                  <span className="sr-only">Search</span>
                </Button>
              </form>
            </div>
            <button
              className="md:hidden p-1 text-white hover:text-[#64ffda] transition-colors"
              onClick={() => {
                const searchQuery = prompt("Enter your search query:")
                if (searchQuery && searchQuery.trim()) {
                  window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`
                }
              }}
            >
              <Search className="h-5 w-5" />
            </button>
            <LanguageSelector />
            <Link href="/login">
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                Log In
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f] font-medium">Create Account</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <DataAnalyticsSection />
        <DemoSection />
        <TestimonialsSection />
      </main>

      {/* Contact Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link href="/contact">
          <Button className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f] font-medium rounded-full p-4 flex items-center gap-2 shadow-lg shadow-[#64ffda]/20 transition-all duration-300 hover:scale-105">
            <MessageCircle className="h-5 w-5" />
            <span>Contact Us</span>
          </Button>
        </Link>
      </div>

      <BackToTop />
      <Footer />
    </div>
  )
}

