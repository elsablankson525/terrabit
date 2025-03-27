import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Calendar, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "How TerraBit Sensors Helped Me Save 30% on Irrigation Costs",
    excerpt:
      "Iowa corn farmer John Deere shares his experience using TerraBit soil moisture sensors to optimize irrigation scheduling and reduce water usage.",
    image: "/placeholder.svg?height=400&width=600",
    date: "March 15, 2023",
    author: "John Deere",
    category: "Success Stories",
    tags: ["Irrigation", "Water Management", "Soil Sensors", "Cost Savings"],
  },
  {
    id: 2,
    title: "Precision Agriculture: A Year-Round Approach to Sustainable Farming",
    excerpt:
      "California vineyard owner Sarah Johnson explains how she implemented precision agriculture techniques with TerraBit technology to improve grape quality and yield.",
    image: "/placeholder.svg?height=400&width=600",
    date: "February 8, 2023",
    author: "Sarah Johnson",
    category: "Case Studies",
    tags: ["Precision Agriculture", "Sustainability", "Vineyard Management"],
  },
  {
    id: 3,
    title: "From Skeptic to Believer: My Journey with Agricultural Technology",
    excerpt:
      "Fifth-generation farmer Michael Thompson shares his initial skepticism and eventual adoption of digital farming tools that transformed his operation.",
    image: "/placeholder.svg?height=400&width=600",
    date: "January 22, 2023",
    author: "Michael Thompson",
    category: "Farmer Stories",
    tags: ["Digital Transformation", "Traditional Farming", "Technology Adoption"],
  },
  {
    id: 4,
    title: "Weather Data: The Missing Piece in My Farm Management Puzzle",
    excerpt:
      "Kansas wheat farmer Emily Zhang discusses how hyperlocal weather insights from TerraBit helped her make better decisions during unpredictable weather patterns.",
    image: "/placeholder.svg?height=400&width=600",
    date: "December 10, 2022",
    author: "Emily Zhang",
    category: "Success Stories",
    tags: ["Weather Insights", "Risk Management", "Decision Making"],
  },
  {
    id: 5,
    title: "Small Farm, Big Data: Scaling Technology for Operations of All Sizes",
    excerpt:
      "Small-scale organic farmer Carlos Rodriguez explains how he adapted enterprise-level agricultural technology to his 15-acre diversified vegetable farm.",
    image: "/placeholder.svg?height=400&width=600",
    date: "November 5, 2022",
    author: "Carlos Rodriguez",
    category: "Case Studies",
    tags: ["Small Farms", "Organic Farming", "Technology Scaling"],
  },
  {
    id: 6,
    title: "Drone Mapping Changed How I View My Fields - Literally",
    excerpt:
      "Nebraska farmer James Wilson shares his experience using TerraBit's drone technology to identify field issues invisible from the ground.",
    image: "/placeholder.svg?height=400&width=600",
    date: "October 18, 2022",
    author: "James Wilson",
    category: "Farmer Stories",
    tags: ["Drone Technology", "Field Mapping", "Crop Health"],
  },
]

// Sample categories
const categories = [
  { name: "Success Stories", count: 12 },
  { name: "Case Studies", count: 8 },
  { name: "Farmer Stories", count: 15 },
  { name: "Technology Updates", count: 7 },
  { name: "Industry News", count: 10 },
]

// Sample popular tags
const popularTags = [
  { name: "Irrigation", count: 18 },
  { name: "Soil Health", count: 24 },
  { name: "Weather", count: 15 },
  { name: "Drones", count: 12 },
  { name: "Precision Agriculture", count: 20 },
  { name: "Sustainability", count: 17 },
  { name: "Cost Savings", count: 14 },
  { name: "Technology", count: 22 },
]

export default function BlogPage() {
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
              <Link href="/resources/blog" className="py-2 text-[#64ffda] border-b border-[#64ffda] transition-colors">
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
                TerraBit Farmer Stories
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#64ffda]"></span>
              </span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Real experiences from farmers using TerraBit technology to transform their agricultural operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/resources/blog/categories/success-stories">
                <Button className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f] font-medium">
                  Success Stories
                </Button>
              </Link>
              <Link href="/resources/blog/categories/case-studies">
                <Button variant="outline" className="text-white border-white hover:bg-white/10">
                  Case Studies
                </Button>
              </Link>
              <Link href="/resources/blog/categories/farmer-stories">
                <Button variant="outline" className="text-white border-white hover:bg-white/10">
                  Farmer Stories
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Blog Posts */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="bg-[#112240]/70 border-[#64ffda]/10 overflow-hidden">
                  <div className="relative aspect-video">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2 text-white/50 text-sm mb-2">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </div>
                      <span>•</span>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                    </div>
                    <CardTitle className="text-white hover:text-[#64ffda] transition-colors">
                      <Link href={`/resources/blog/${post.id}`}>{post.title}</Link>
                    </CardTitle>
                    <CardDescription className="text-white/70">
                      <Link href={`/resources/blog/categories/${post.category.toLowerCase().replace(/\s+/g, "-")}`}>
                        <span className="text-[#64ffda] hover:underline">{post.category}</span>
                      </Link>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <Link key={index} href={`/resources/blog/tags/${tag.toLowerCase().replace(/\s+/g, "-")}`}>
                          <span className="text-xs bg-[#0a192f] text-white/70 px-2 py-1 rounded-full hover:bg-[#0a192f]/80">
                            {tag}
                          </span>
                        </Link>
                      ))}
                      {post.tags.length > 2 && (
                        <span className="text-xs bg-[#0a192f] text-white/70 px-2 py-1 rounded-full">
                          +{post.tags.length - 2}
                        </span>
                      )}
                    </div>
                    <Link href={`/resources/blog/${post.id}`}>
                      <Button
                        variant="link"
                        className="text-[#64ffda] p-0 flex items-center gap-1 hover:gap-2 transition-all"
                      >
                        Read More <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="flex justify-center">
              <Button variant="outline" className="border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10">
                Load More Articles
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3">
            {/* Search */}
            <div className="border border-[#64ffda]/10 rounded-lg p-6 bg-[#112240]/50 mb-6">
              <h3 className="font-bold text-lg mb-4">Search</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
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

            {/* Categories */}
            <div className="border border-[#64ffda]/10 rounded-lg p-6 bg-[#112240]/50 mb-6">
              <h3 className="font-bold text-lg mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link
                      href={`/resources/blog/categories/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                      className="flex justify-between items-center text-white hover:text-[#64ffda] transition-colors"
                    >
                      <span>{category.name}</span>
                      <span className="text-white/50 text-sm">{category.count}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Tags */}
            <div className="border border-[#64ffda]/10 rounded-lg p-6 bg-[#112240]/50 mb-6">
              <h3 className="font-bold text-lg mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag, index) => (
                  <Link
                    key={index}
                    href={`/resources/blog/tags/${tag.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm bg-[#0a192f] text-white/70 px-3 py-1 rounded-full hover:bg-[#0a192f]/80 hover:text-white transition-colors"
                  >
                    {tag.name} ({tag.count})
                  </Link>
                ))}
              </div>
            </div>

            {/* Featured Post */}
            <div className="border border-[#64ffda]/10 rounded-lg overflow-hidden bg-[#112240]/50 mb-6">
              <div className="relative aspect-video">
                <Image src="/placeholder.svg?height=300&width=500" alt="Featured Post" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="bg-[#64ffda] text-[#0a192f] text-xs font-bold px-2 py-1 rounded mb-2 inline-block">
                    FEATURED
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    How Digital Farming Saved My Family's Century-Old Farm
                  </h3>
                  <p className="text-white/70 text-sm mt-1">A remarkable story of tradition meeting technology</p>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="border border-[#64ffda]/10 rounded-lg p-6 bg-[#112240]/50">
              <h3 className="font-bold text-lg mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-white/70 text-sm mb-4">
                Get the latest farming insights and TerraBit updates delivered to your inbox.
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
            <Link href="/resources/videos">
              <div className="border border-[#64ffda]/10 rounded-lg overflow-hidden bg-[#112240]/50 hover:bg-[#112240]/70 transition-colors group">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Videos"
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
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">Farming Practice Videos</h3>
                  <p className="text-white/70 mb-4">
                    Watch tutorials and demonstrations of effective farming techniques.
                  </p>
                  <div className="flex items-center text-[#64ffda] group-hover:translate-x-2 transition-transform">
                    Watch Videos <ArrowRight className="h-4 w-4 ml-1" />
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
                    Listen to Episodes <ArrowRight className="h-4 w-4 ml-1" />
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
                    Explore Guides <ArrowRight className="h-4 w-4 ml-1" />
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

