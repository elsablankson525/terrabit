"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"
import { useCart } from "@/context/cart-context"
import { useToast } from "@/hooks/use-toast"

// Featured products data
const featuredProducts = [
  {
    id: 101,
    name: "TerraBit Pro Soil Analyzer",
    category: "sensors",
    price: 349.99,
    rating: 4.9,
    reviews: 78,
    image: "https://th.bing.com/th/id/OIP.NXsySvr0fBwCNyc6cNOVyQHaHa?rs=1&pid=ImgDetMain",
    description: "Our most advanced soil analyzer with AI-powered recommendations and cloud integration.",
    features: ["AI recommendations", "Cloud sync", "10-year battery", "Multi-depth analysis"],
    inStock: true,
    isNew: true,
  },
  {
    id: 102,
    name: "AgroScan Elite Drone",
    category: "drones",
    price: 2499.99,
    rating: 4.8,
    reviews: 42,
    image:
      "https://sjc.microlink.io/3jUjJahqLp6BHKeCVGU1xeTR8MdumAi6dL5u7o88LvihWAQGrLQSomOarZ3QUMwuLhlwExVhrYtHDDvFcqoKEQ.jpeg",
    description: "Professional-grade agricultural drone with 8K camera, thermal imaging, and 60-minute flight time.",
    features: ["8K camera", "Thermal imaging", "60-minute flight", "Automated mapping"],
    inStock: true,
    isNew: true,
  },
  {
    id: 103,
    name: "SmartFlow Pro Irrigation System",
    category: "irrigation",
    price: 599.99,
    rating: 4.7,
    reviews: 56,
    image:
      "https://sjc.microlink.io/ikZ9osocXoTKsUGCmopyBc-dtqsDABfNZhYZpN6GjkbBC4lvlO1hJxnDZOmCkDkog0TQ82B5Y-gCoQUnL-wcwQ.jpeg",
    description: "Complete smart irrigation system with AI weather prediction and zone-based optimization.",
    features: ["AI weather prediction", "Zone optimization", "Water usage analytics", "Mobile control"],
    inStock: true,
    isNew: true,
  },
  {
    id: 104,
    name: "SensorHub Enterprise",
    category: "sensors",
    price: 899.99,
    rating: 4.9,
    reviews: 31,
    image:
      "https://sjc.microlink.io/r6aj2QfrQfbNpmYj6caTl0a2faA17xybGj-M4nS-dUpQ_r9ksxZw7jfjOh91aUpoqUTqhHxfdGZA40r71oECjA.jpeg",
    description: "Centralized sensor monitoring system for enterprise farms with unlimited sensor connections.",
    features: ["Unlimited sensors", "Real-time alerts", "Historical data", "API integration"],
    inStock: true,
    isNew: true,
  },
  {
    id: 105,
    name: "CropGuard Pro Weather Station",
    category: "sensors",
    price: 749.99,
    rating: 4.8,
    reviews: 47,
    image: "https://th.bing.com/th/id/OIP.D8J4KCLIrmZC5ulabGheJwHaIi?rs=1&pid=ImgDetMain",
    description: "Professional weather station with lightning detection, solar radiation monitoring, and soil sensors.",
    features: ["Lightning detection", "Solar radiation", "Soil sensors", "5-mile range"],
    inStock: true,
    isNew: true,
  },
  {
    id: 106,
    name: "HarvestTrack Enterprise",
    category: "sensors",
    price: 1299.99,
    rating: 4.7,
    reviews: 29,
    image: "https://th.bing.com/th/id/OIP.dZ724Qht1YnbOyXRyOak0QAAAA?rs=1&pid=ImgDetMain",
    description: "Enterprise-grade yield monitoring system with predictive analytics and multi-vehicle support.",
    features: ["Predictive analytics", "Multi-vehicle support", "Automated calibration", "Yield mapping"],
    inStock: true,
    isNew: true,
  },
]

export default function FeaturedProductsPage() {
  const { user, isLoading } = useAuth()
  const { addItem } = useCart()
  const { toast } = useToast()
  const router = useRouter()

  useEffect(() => {
    // Redirect to login page if user is not authenticated
    if (!isLoading && !user) {
      router.push("/login")
    }
  }, [user, isLoading, router])

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0a192f] to-[#112240] text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#64ffda] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl">Loading...</p>
        </div>
      </div>
    )
  }

  // Show login required message if user is not authenticated
  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0a192f] to-[#112240] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Login Required</h1>
          <p className="text-white/70 mb-6">You need to be logged in to view featured products.</p>
          <Link href="/login">
            <Button className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f]">Login</Button>
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = (product: typeof featuredProducts[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
      category: product.category,
    })

    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
      variant: "success",
      duration: 3000,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a192f] to-[#112240] text-white">
      {/* Header */}
      <header className="border-b border-[#64ffda]/10 py-4 px-6 backdrop-blur-sm bg-[#0a192f]/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
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
            <Link
              href="/hardware/featured-products"
              className="py-2 text-[#64ffda] border-b border-[#64ffda] transition-colors"
            >
              Featured Products
            </Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Premium Featured Products</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Exclusive high-end agricultural technology available only to premium members.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="bg-[#112240]/70 border-[#64ffda]/10 overflow-hidden">
              <div className="relative">
                <Link href={`/hardware/product/${product.id}`}>
                  <div className="aspect-square relative overflow-hidden bg-[#0a192f]/50">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-contain p-4 hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 text-white hover:text-[#64ffda] bg-[#0a192f]/50 hover:bg-[#0a192f]/70 rounded-full"
                >
                  <Heart className="h-5 w-5" />
                </Button>
                {product.isNew && (
                  <div className="absolute top-2 left-2 bg-[#64ffda] text-[#0a192f] text-xs font-bold px-2 py-1 rounded">
                    PREMIUM
                  </div>
                )}
              </div>
              <CardContent className="p-4">
                <Link href={`/hardware/product/${product.id}`}>
                  <h3 className="font-bold text-white hover:text-[#64ffda] transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-center mt-1 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? "fill-[#64ffda] text-[#64ffda]"
                            : i < product.rating
                              ? "fill-[#64ffda]/50 text-[#64ffda]/50"
                              : "text-[#64ffda]/30"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-white/70 text-sm ml-1">({product.reviews})</span>
                </div>
                <p className="text-white/70 text-sm line-clamp-2 mb-3">{product.description}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {product.features.slice(0, 2).map((feature, index) => (
                    <span key={index} className="text-xs bg-[#0a192f] text-white/70 px-2 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                  {product.features.length > 2 && (
                    <span className="text-xs bg-[#0a192f] text-white/70 px-2 py-1 rounded-full">
                      +{product.features.length - 2} more
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold text-[#64ffda]">${product.price.toFixed(2)}</div>
                  <div className="text-white/70 text-sm">{product.inStock ? "In Stock" : "Out of Stock"}</div>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button
                  className="w-full bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f]"
                  disabled={!product.inStock}
                  onClick={() => handleAddToCart(product)}
                >
                  {product.inStock ? "Add to Cart" : "Out of Stock"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

