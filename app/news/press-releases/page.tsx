import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Calendar, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Sample press releases data
const pressReleases = [
  {
    id: 1,
    title: "TerraBit Announces Partnership with Global Agricultural Research Institute",
    excerpt:
      "Strategic collaboration aims to accelerate the development of sustainable farming technologies and practices worldwide.",
    image: "/placeholder.svg?height=400&width=600",
    date: "April 12, 2023",
    source: "TerraBit Newsroom",
    url: "#",
  },
  {
    id: 2,
    title: "TerraBit Secures $50 Million in Series C Funding to Expand Digital Farming Platform",
    excerpt:
      "Investment will fuel global expansion and development of new AI-powered features for precision agriculture.",
    image: "/placeholder.svg?height=400&width=600",
    date: "March 28, 2023",
    source: "TechCrunch",
    url: "https://techcrunch.com",
  },
  {
    id: 3,
    title: "New TerraBit Weather Station Network Provides Hyperlocal Forecasts for Farmers",
    excerpt:
      "Nationwide deployment of advanced weather monitoring stations offers unprecedented accuracy in agricultural weather prediction.",
    image: "/placeholder.svg?height=400&width=600",
    date: "February 15, 2023",
    source: "AgTech Today",
    url: "#",
  },
  {
    id: 4,
    title: "TerraBit Launches Sustainable Farming Initiative with $2 Million Grant Program",
    excerpt:
      "Program will support farmers implementing water conservation and soil health practices using TerraBit technology.",
    image: "/placeholder.svg?height=400&width=600",
    date: "January 30, 2023",
    source: "Environmental News Network",
    url: "#",
  },
  {
    id: 5,
    title: "TerraBit Technology Helps Farmers Reduce Water Usage by 25% in Drought-Stricken Regions",
    excerpt:
      "Independent study confirms significant water conservation results from precision irrigation systems powered by TerraBit soil moisture sensors.",
    image: "/placeholder.svg?height=400&width=600",
    date: "December 8, 2022",
    source: "Water Conservation Journal",
    url: "#",
  },
  {
    id: 6,
    title: "TerraBit CEO Named 'Agricultural Innovator of the Year'",
    excerpt:
      "Recognition highlights company's contributions to modernizing farming practices through accessible technology.",
    image: "/placeholder.svg?height=400&width=600",
    date: "November 15, 2022",
    source: "Ag Industry Weekly",
    url: "#",
  },
]

export default function PressReleasesPage() {
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
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="py-2 text-white hover:text-[#64ffda] transition-colors">
                Home
              </Link>
              <Link href="/hardware" className="py-2 text-white hover:text-[#64ffda] transition-colors">
                Hardware Store
              </Link>
              <Link href="/pricing" className="py-2 text-white hover:text-[#64ffda] transition-colors">
                Pricing
              </Link>
              <Link href="/partners" className="py-2 text-white hover:text-[#64ffda] transition-colors">
                Partners
              </Link>
              <Link
                href="/news/press-releases"
                className="py-2 text-[#64ffda] border-b border-[#64ffda] transition-colors"
              >
                News
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
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
      <div className="relative py-16 px-6">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-[#64ffda]/10 to-[#64ffda]/5 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-[#64ffda]/10 to-[#64ffda]/5 blur-3xl"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(100,255,218,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(100,255,218,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">
              <span className="relative inline-block">
                Press Releases
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#64ffda]"></span>
              </span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              The latest news and announcements from TerraBit and our partners in agricultural innovation.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {pressReleases.map((release) => (
            <Card key={release.id} className="bg-[#112240]/70 border-[#64ffda]/10 overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 relative">
                  <div className="aspect-video md:h-full relative">
                    <Image
                      src={release.image || "/placeholder.svg"}
                      alt={release.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2 text-white/50 text-sm mb-2">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {release.date}
                      </div>
                      <span>•</span>
                      <div className="flex items-center">
                        <span className="text-[#64ffda]">{release.source}</span>
                      </div>
                    </div>
                    <CardTitle className="text-white hover:text-[#64ffda] transition-colors">
                      <Link href={`/news/press-releases/${release.id}`}>{release.title}</Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80">{release.excerpt}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <Link href={`/news/press-releases/${release.id}`}>
                      <Button
                        variant="link"
                        className="text-[#64ffda] p-0 flex items-center gap-1 hover:gap-2 transition-all"
                      >
                        Read Full Release <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                    {release.source !== "TerraBit Newsroom" && (
                      <Link href={release.url} target="_blank" rel="noopener noreferrer">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10"
                        >
                          <ExternalLink className="h-4 w-4 mr-1" /> Source
                        </Button>
                      </Link>
                    )}
                  </CardFooter>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Button variant="outline" className="border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10">
            Load More Press Releases
          </Button>
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="bg-[#0a192f] py-12">
        <div className="container mx-auto px-6">
          <div className="border border-[#64ffda]/10 rounded-lg p-8 bg-[#112240]/50 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-2">Stay Updated</h2>
            <p className="text-white/70 mb-6">
              Subscribe to our newsletter to receive the latest news and announcements directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-[#0a192f]/50 border border-[#64ffda]/20 rounded-md p-2 text-white focus:outline-none focus:border-[#64ffda]"
              />
              <Button className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f] whitespace-nowrap">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

