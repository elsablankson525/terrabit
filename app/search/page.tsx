"use client"

import { useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, ArrowLeft, Filter } from "lucide-react"
import SearchBar from "@/components/search-bar"
import LanguageSelector from "@/components/language-selector"

// Mock search results data
const mockResults = [
  {
    id: 1,
    title: "Field Monitoring Solutions",
    description: "Real-time monitoring of your fields with advanced sensors and satellite imagery.",
    category: "Solutions",
    url: "/solutions/field-monitoring",
  },
  {
    id: 2,
    title: "Soil Health Analysis",
    description: "Comprehensive soil testing and analysis to optimize crop growth and yield.",
    category: "Analytics",
    url: "/analytics/soil-health",
  },
  {
    id: 3,
    title: "Weather Forecasting",
    description: "Hyperlocal weather predictions to help you plan your farming operations.",
    category: "Solutions",
    url: "/solutions/weather-insights",
  },
  {
    id: 4,
    title: "TerraBit Sensors",
    description: "Advanced IoT sensors for monitoring soil moisture, temperature, and more.",
    category: "Hardware",
    url: "/hardware",
  },
  {
    id: 5,
    title: "Yield Analysis Tools",
    description: "Data-driven tools to analyze and improve your crop yields.",
    category: "Analytics",
    url: "/analytics/yield-analysis",
  },
  {
    id: 6,
    title: "Pricing Plans",
    description: "Flexible subscription options for farms of all sizes.",
    category: "Pricing",
    url: "/pricing",
  },
  {
    id: 7,
    title: "Partner Program",
    description: "Join our network of agricultural partners and distributors.",
    category: "Partners",
    url: "/partners",
  },
]

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeFilter, setActiveFilter] = useState("All")

  useEffect(() => {
    // Simulate search API call
    setLoading(true)
    setTimeout(() => {
      if (query) {
        const filtered = mockResults.filter(
          (item) =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.description.toLowerCase().includes(query.toLowerCase()),
        )
        setResults(filtered)
      } else {
        setResults([])
      }
      setLoading(false)
    }, 500)
  }, [query])

  const categories = ["All", ...new Set(mockResults.map((item) => item.category))]

  const filteredResults = activeFilter === "All" ? results : results.filter((item) => item.category === activeFilter)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a192f] to-[#112240] text-white">
      {/* Header */}
      <header className="border-b border-[#64ffda]/10 py-4 px-6 backdrop-blur-sm bg-[#0a192f]/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center mr-8">
              <h1 className="text-white font-bold text-xl">
                <span className="text-[#64ffda]">TERRA</span>
                <span className="ml-1">BIT</span>
              </h1>
              <div className="ml-2 w-2 h-2 rounded-full bg-[#64ffda] animate-pulse"></div>
            </Link>
          </div>

          <div className="flex-1 max-w-xl mx-4">
            <SearchBar placeholder="Search TerraBit..." className="w-full" />
          </div>

          <div className="flex items-center space-x-4">
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

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex items-center mb-8">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:text-[#64ffda]">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-2xl font-bold ml-4">
            Search Results for: <span className="text-[#64ffda]">"{query}"</span>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters */}
          <div className="w-full md:w-64 shrink-0">
            <Card className="bg-[#112240]/70 border-[#64ffda]/10">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium mb-2">Categories</h3>
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant="ghost"
                      className={`w-full justify-start text-left ${
                        activeFilter === category ? "bg-[#64ffda]/10 text-[#64ffda]" : "text-white hover:bg-[#64ffda]/5"
                      }`}
                      onClick={() => setActiveFilter(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="flex-1">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#64ffda]"></div>
              </div>
            ) : filteredResults.length > 0 ? (
              <div className="space-y-4">
                <p className="text-white/70">
                  Found {filteredResults.length} {filteredResults.length === 1 ? "result" : "results"}
                </p>
                {filteredResults.map((result) => (
                  <Link href={result.url} key={result.id}>
                    <Card className="bg-[#112240]/70 border-[#64ffda]/10 hover:border-[#64ffda]/30 transition-all">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-white text-xl">{result.title}</CardTitle>
                          <span className="text-xs px-2 py-1 rounded-full bg-[#64ffda]/10 text-[#64ffda]">
                            {result.category}
                          </span>
                        </div>
                        <CardDescription className="text-white/70">{result.url}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-white/80">{result.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <Card className="bg-[#112240]/70 border-[#64ffda]/10">
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <Search className="h-12 w-12 text-[#64ffda]/30 mb-4" />
                  <h2 className="text-xl font-medium mb-2">No results found</h2>
                  <p className="text-white/70 text-center max-w-md">
                    We couldn't find any matches for "{query}". Try different keywords or check your spelling.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

