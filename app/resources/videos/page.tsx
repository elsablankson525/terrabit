import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Play, Calendar, Clock, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Sample videos data
const videos = [
  {
    id: 1,
    title: "Optimizing Irrigation with Soil Moisture Sensors",
    description: "Learn how to properly install and use TerraBit soil moisture sensors to maximize water efficiency.",
    thumbnail: "/placeholder.svg?height=400&width=600",
    duration: "18:24",
    date: "March 10, 2023",
    views: 12453,
    category: "Tutorials",
    youtubeId: "abc123",
  },
  {
    id: 2,
    title: "Drone Mapping: From Beginner to Expert",
    description: "A comprehensive guide to using agricultural drones for field mapping and crop health assessment.",
    thumbnail: "/placeholder.svg?height=400&width=600",
    duration: "32:15",
    date: "February 22, 2023",
    views: 8765,
    category: "Tutorials",
    youtubeId: "def456",
  },
  {
    id: 3,
    title: "Understanding NDVI and Other Vegetation Indices",
    description: "Explanation of different vegetation indices and how to interpret them for better crop management.",
    thumbnail: "/placeholder.svg?height=400&width=600",
    duration: "24:50",
    date: "January 15, 2023",
    views: 6543,
    category: "Educational",
    youtubeId: "ghi789",
  },
  {
    id: 4,
    title: "TerraBit Success Story: Johnson Family Farm",
    description: "See how the Johnson family transformed their 5th-generation farm with digital agriculture tools.",
    thumbnail: "/placeholder.svg?height=400&width=600",
    duration: "12:36",
    date: "December 8, 2022",
    views: 9876,
    category: "Case Studies",
    youtubeId: "jkl012",
  },
  {
    id: 5,
    title: "Weather Station Setup and Maintenance",
    description: "Step-by-step guide to setting up your TerraBit weather station for optimal performance.",
    thumbnail: "/placeholder.svg?height=400&width=600",
    duration: "15:42",
    date: "November 20, 2022",
    views: 5432,
    category: "Tutorials",
    youtubeId: "mno345",
  },
  {
    id: 6,
    title: "Soil Health Fundamentals for Sustainable Farming",
    description: "Learn the basics of soil health and how to use TerraBit tools to monitor and improve your soil.",
    thumbnail: "/placeholder.svg?height=400&width=600",
    duration: "28:17",
    date: "October 5, 2022",
    views: 7654,
    category: "Educational",
    youtubeId: "pqr678",
  },
]

// Sample video categories
const categories = [
  { name: "All", count: 24 },
  { name: "Tutorials", count: 10 },
  { name: "Educational", count: 8 },
  { name: "Case Studies", count: 6 },
]

// Sample featured playlists
const playlists = [
  { name: "Getting Started with TerraBit", videos: 5 },
  { name: "Advanced Precision Agriculture", videos: 8 },
  { name: "Sustainable Farming Practices", videos: 6 },
  { name: "Seasonal Farming Tips", videos: 4 },
]

export default function VideosPage() {
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
                href="/resources/videos"
                className="py-2 text-[#64ffda] border-b border-[#64ffda] transition-colors"
              >
                Resources
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
                Farming Practice Videos
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#64ffda]"></span>
              </span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Watch tutorials, educational content, and success stories to improve your farming operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={category.name === "All" ? "default" : "outline"}
                  className={
                    category.name === "All"
                      ? "bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f] font-medium"
                      : "text-white border-white hover:bg-white/10"
                  }
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Video */}
      <div className="container mx-auto px-6 mb-12">
        <div className="border border-[#64ffda]/10 rounded-lg overflow-hidden bg-[#112240]/50">
          <div className="relative aspect-video">
            <Image src="/placeholder.svg?height=600&width=1200" alt="Featured Video" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 rounded-full bg-[#64ffda]/20 flex items-center justify-center hover:bg-[#64ffda]/30 transition-colors">
                <Play className="h-10 w-10 text-[#64ffda] fill-[#64ffda]" />
              </button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="bg-[#64ffda] text-[#0a192f] text-xs font-bold px-2 py-1 rounded mb-2 inline-block">
                FEATURED
              </span>
              <h2 className="text-2xl font-bold text-white mb-2">2023 Complete Guide to Precision Agriculture</h2>
              <p className="text-white/70 mb-2">
                A comprehensive overview of the latest precision agriculture techniques and technologies.
              </p>
              <div className="flex items-center gap-4 text-white/50 text-sm">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  45:18
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  April 5, 2023
                </div>
                <div>15,872 views</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Videos Grid */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-2xl font-bold mb-6">Latest Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {videos.map((video) => (
                <Card key={video.id} className="bg-[#112240]/70 border-[#64ffda]/10 overflow-hidden">
                  <div className="relative aspect-video group">
                    <Image
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[#0a192f]/30 group-hover:bg-[#0a192f]/10 transition-colors"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="w-12 h-12 rounded-full bg-[#64ffda]/20 flex items-center justify-center hover:bg-[#64ffda]/30 transition-colors">
                        <Play className="h-6 w-6 text-[#64ffda] fill-[#64ffda]" />
                      </button>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-[#0a192f]/80 text-white px-2 py-1 text-xs rounded">
                      {video.duration}
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-white hover:text-[#64ffda] transition-colors">
                      <Link href={`/resources/videos/${video.id}`}>{video.title}</Link>
                    </CardTitle>
                    <CardDescription className="text-white/70">
                      <Link href={`/resources/videos/categories/${video.category.toLowerCase()}`}>
                        <span className="text-[#64ffda] hover:underline">{video.category}</span>
                      </Link>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80 line-clamp-2">{video.description}</p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex items-center gap-4 text-white/50 text-sm">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {video.date}
                      </div>
                      <div>{video.views.toLocaleString()} views</div>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="flex justify-center">
              <Button variant="outline" className="border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10">
                Load More Videos
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3">
            {/* Search */}
            <div className="border border-[#64ffda]/10 rounded-lg p-6 bg-[#112240]/50 mb-6">
              <h3 className="font-bold text-lg mb-4">Search Videos</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search videos..."
                  className="w-full bg-[#0a192f]/50 border border-[#64ffda]/20 rounded-md p-2 text-white focus:outline-none focus:border-[#64ffda]"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-[#64ffda]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Playlists */}
            <div className="border border-[#64ffda]/10 rounded-lg p-6 bg-[#112240]/50 mb-6">
              <h3 className="font-bold text-lg mb-4">Featured Playlists</h3>
              <ul className="space-y-4">
                {playlists.map((playlist, index) => (
                  <li key={index}>
                    <Link
                      href={`/resources/videos/playlists/${playlist.name.toLowerCase().replace(/\s+/g, "-")}`}
                      className="flex items-center gap-3 text-white hover:text-[#64ffda] transition-colors"
                    >
                      <div className="w-10 h-10 bg-[#0a192f] rounded flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-[#64ffda]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 10h16M4 14h16M4 18h16"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{playlist.name}</div>
                        <div className="text-white/50 text-sm">{playlist.videos} videos</div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* YouTube Channel */}
            <div className="border border-[#64ffda]/10 rounded-lg p-6 bg-[#112240]/50 mb-6">
              <h3 className="font-bold text-lg mb-2">Visit Our YouTube Channel</h3>
              <p className="text-white/70 text-sm mb-4">
                Subscribe to our YouTube channel for the latest videos on farming practices and agricultural technology.
              </p>
              <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                  Subscribe on YouTube
                </Button>
              </Link>
            </div>

            {/* Newsletter */}
            <div className="border border-[#64ffda]/10 rounded-lg p-6 bg-[#112240]/50">
              <h3 className="font-bold text-lg mb-2">Get Video Updates</h3>
              <p className="text-white/70 text-sm mb-4">
                Subscribe to our newsletter to be notified when new videos are published.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-[#0a192f]/50 border border-[#64ffda]/20 rounded-md p-2 text-white focus:outline-none focus:border-[#64ffda]"
                />
                <Button className="w-full bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f]">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Resources */}
      <div className="bg-[#0a192f] py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8 text-center">Explore More Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/resources/blog">
              <div className="border border-[#64ffda]/10 rounded-lg overflow-hidden bg-[#112240]/50 hover:bg-[#112240]/70 transition-colors group">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Blog"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#64ffda]/20 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-[#64ffda]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">Farmer Stories Blog</h3>
                  <p className="text-white/70 mb-4">
                    Read about real experiences from farmers using TerraBit technology.
                  </p>
                  <div className="flex items-center text-[#64ffda] group-hover:translate-x-2 transition-transform">
                    Read Articles <ExternalLink className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/resources/podcast">
              <div className="border border-[#64ffda]/10 rounded-lg overflow-hidden bg-[#112240]/50 hover:bg-[#112240]/70 transition-colors group">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Podcast"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#64ffda]/20 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-[#64ffda]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">Around the Farm Podcast</h3>
                  <p className="text-white/70 mb-4">Listen to conversations with farmers and agricultural experts.</p>
                  <div className="flex items-center text-[#64ffda] group-hover:translate-x-2 transition-transform">
                    Listen to Episodes <ExternalLink className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/support/knowledge-center">
              <div className="border border-[#64ffda]/10 rounded-lg overflow-hidden bg-[#112240]/50 hover:bg-[#112240]/70 transition-colors group">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Knowledge Center"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#64ffda]/20 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-[#64ffda]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">Knowledge Center</h3>
                  <p className="text-white/70 mb-4">
                    Access in-depth guides and how-to materials for TerraBit products.
                  </p>
                  <div className="flex items-center text-[#64ffda] group-hover:translate-x-2 transition-transform">
                    Explore Guides <ExternalLink className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

