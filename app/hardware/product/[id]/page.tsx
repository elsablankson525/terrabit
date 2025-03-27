"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, ShoppingCart, Heart, Check, Truck, Shield, BarChart, FileText } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useCart } from "@/context/cart-context"
import { useToast } from "@/hooks/use-toast"

// Sample product data - in a real app, this would come from a database or API
const products = [
  {
    id: 1,
    name: "TerraBit Soil Moisture Sensor",
    category: "sensors",
    price: 129.99,
    rating: 4.8,
    reviews: 124,
    image: "https://th.bing.com/th/id/OIP.NXsySvr0fBwCNyc6cNOVyQHaHa?rs=1&pid=ImgDetMain",
    images: [
      "https://th.bing.com/th/id/OIP.NXsySvr0fBwCNyc6cNOVyQHaHa?rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.NXsySvr0fBwCNyc6cNOVyQHaHa?rs=1&pid=ImgDetMain&angle=90",
      "https://th.bing.com/th/id/OIP.NXsySvr0fBwCNyc6cNOVyQHaHa?rs=1&pid=ImgDetMain&angle=180",
      "https://th.bing.com/th/id/OIP.NXsySvr0fBwCNyc6cNOVyQHaHa?rs=1&pid=ImgDetMain&angle=270",
    ],
    description:
      "The TerraBit Soil Moisture Sensor is an advanced monitoring device designed specifically for agricultural applications. It provides accurate, real-time measurements of soil moisture levels at multiple depths, helping farmers optimize irrigation schedules and water usage.",
    features: [
      "Wireless connectivity with up to 5-mile range",
      "5-year battery life with solar recharging option",
      "Real-time monitoring via TerraBit mobile app",
      "Weather-resistant design for harsh environments",
      'Multiple depth measurements (4", 8", 12", 24")',
      "Temperature and EC (Electrical Conductivity) sensors included",
      "Easy installation with minimal soil disturbance",
      "Data logging capability for offline operation",
    ],
    specifications: {
      Dimensions: '4.5" x 2.3" x 1.2"',
      Weight: "8.5 oz",
      "Power Source": "3.6V Lithium battery with solar option",
      "Battery Life": "Up to 5 years",
      "Wireless Range": "Up to 5 miles (line of sight)",
      "Measurement Range": "0-100% volumetric water content",
      Accuracy: "±2%",
      "Operating Temperature": "-40°F to 140°F",
      "Data Transmission": "Every 15 minutes (adjustable)",
      Warranty: "2 years",
    },
    inStock: true,
    isFeatured: true,
    isNew: true,
    isBestseller: true,
    relatedProducts: [2, 4, 8],
  },
]

// Sample related products
const relatedProducts = [
  {
    id: 2,
    name: "AgroScan Pro Drone",
    price: 1299.99,
    rating: 4.7,
    reviews: 89,
    image:
      "https://sjc.microlink.io/3jUjJahqLp6BHKeCVGU1xeTR8MdumAi6dL5u7o88LvihWAQGrLQSomOarZ3QUMwuLhlwExVhrYtHDDvFcqoKEQ.jpeg",
    inStock: true,
  },
  {
    id: 4,
    name: "CropGuard Weather Station",
    price: 349.99,
    rating: 4.6,
    reviews: 72,
    image: "https://th.bing.com/th/id/OIP.D8J4KCLIrmZC5ulabGheJwHaIi?rs=1&pid=ImgDetMain",
    inStock: true,
  },
  {
    id: 8,
    name: "NutriScan Soil Analyzer",
    price: 179.99,
    rating: 4.5,
    reviews: 91,
    image: "https://th.bing.com/th/id/OIP.EdX-veXMKbiy24fy1S2M-gHaE8?rs=1&pid=ImgDetMain",
    inStock: true,
  },
]

export default function ProductPage({ params }: { params: { id: string } }) {
  const { addItem, itemCount } = useCart()
  const { toast } = useToast()
  const productId = Number.parseInt(params.id)
  const product = products.find((p) => p.id === productId)

  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [cartCount, setCartCount] = useState(0)

  // Update cart count from context
  useState(() => {
    setCartCount(itemCount)
  })

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0a192f] to-[#112240] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="text-white/70 mb-6">The product you are looking for does not exist or has been removed.</p>
          <Link href="/hardware">
            <Button className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f]">Return to Hardware Store</Button>
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity,
      category: product.category,
    })

    toast({
      title: "Added to Cart",
      description: `${quantity} ${quantity === 1 ? "unit" : "units"} of ${product.name} added to your cart.`,
      duration: 3000,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a192f] to-[#112240] text-white">
      {/* Header with cart */}
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
              <Link href="/hardware" className="py-2 text-[#64ffda] border-b border-[#64ffda] transition-colors">
                Hardware Store
              </Link>
              <Link href="/pricing" className="py-2 text-white hover:text-[#64ffda] transition-colors">
                Pricing
              </Link>
              <Link href="/partners" className="py-2 text-white hover:text-[#64ffda] transition-colors">
                Partners
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <Link href="/hardware/cart">
                <Button variant="ghost" className="relative p-2 text-white hover:text-[#64ffda] transition-colors">
                  <ShoppingCart className="h-5 w-5" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-[#64ffda] text-[#0a192f] text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </Button>
              </Link>
            </div>
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

      <div className="container mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center mb-6 text-sm">
          <Link href="/hardware" className="text-white/70 hover:text-[#64ffda]">
            Hardware Store
          </Link>
          <span className="mx-2 text-white/50">/</span>
          <Link href={`/hardware/${product.category}`} className="text-white/70 hover:text-[#64ffda]">
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </Link>
          <span className="mx-2 text-white/50">/</span>
          <span className="text-white/50">{product.name}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* Product Images */}
          <div className="w-full lg:w-1/2">
            <div className="border border-[#64ffda]/10 rounded-lg bg-[#112240]/50 p-4 mb-4">
              <div className="relative aspect-square">
                <Image
                  src={product.images[selectedImage] || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
                {product.isNew && (
                  <div className="absolute top-2 left-2 bg-[#64ffda] text-[#0a192f] text-xs font-bold px-2 py-1 rounded">
                    NEW
                  </div>
                )}
                {product.isBestseller && !product.isNew && (
                  <div className="absolute top-2 left-2 bg-[#f59e0b] text-white text-xs font-bold px-2 py-1 rounded">
                    BESTSELLER
                  </div>
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 text-white hover:text-[#64ffda] bg-[#0a192f]/50 hover:bg-[#0a192f]/70 rounded-full"
                >
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`border rounded-md overflow-hidden ${
                    selectedImage === index ? "border-[#64ffda]" : "border-[#64ffda]/10"
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="relative aspect-square">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} - Image ${index + 1}`}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center mb-4">
              <div className="flex mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? "fill-[#64ffda] text-[#64ffda]"
                        : i < product.rating
                          ? "fill-[#64ffda]/50 text-[#64ffda]/50"
                          : "text-[#64ffda]/30"
                    }`}
                  />
                ))}
              </div>
              <span className="text-white/70">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <div className="text-3xl font-bold text-[#64ffda] mb-4">${product.price.toFixed(2)}</div>

            <p className="text-white/80 mb-6">{product.description}</p>

            <div className="mb-6">
              <h3 className="font-bold mb-2">Key Features:</h3>
              <ul className="space-y-2">
                {product.features.slice(0, 4).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-[#64ffda] mr-2 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-[#64ffda]/10 pt-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded-full ${product.inStock ? "bg-green-500" : "bg-red-500"} mr-2`}></div>
                  <span>{product.inStock ? "In Stock" : "Out of Stock"}</span>
                </div>
                <div className="flex items-center">
                  <Truck className="h-5 w-5 text-[#64ffda] mr-2" />
                  <span>Free shipping on orders over $100</span>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center border border-[#64ffda]/20 rounded-md">
                  <button
                    className="px-3 py-2 text-white/70 hover:text-white disabled:opacity-50"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x border-[#64ffda]/20">{quantity}</span>
                  <button
                    className="px-3 py-2 text-white/70 hover:text-white"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <Button
                  className="flex-1 bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f] font-medium py-6"
                  disabled={!product.inStock}
                  onClick={handleAddToCart}
                >
                  {product.inStock ? "Add to Cart" : "Out of Stock"}
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-[#64ffda] mr-2" />
                  <span className="text-sm">2-Year Warranty</span>
                </div>
                <div className="flex items-center">
                  <Truck className="h-5 w-5 text-[#64ffda] mr-2" />
                  <span className="text-sm">Fast Delivery</span>
                </div>
                <div className="flex items-center">
                  <BarChart className="h-5 w-5 text-[#64ffda] mr-2" />
                  <span className="text-sm">Real-time Support</span>
                </div>
                <div className="flex items-center">
                  <FileText className="h-5 w-5 text-[#64ffda] mr-2" />
                  <span className="text-sm">Easy Returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mb-12">
          <Tabs defaultValue="details">
            <TabsList className="grid grid-cols-3 mb-6 bg-[#0a192f]/50">
              <TabsTrigger
                value="details"
                className="data-[state=active]:bg-[#64ffda] data-[state=active]:text-[#0a192f]"
              >
                Product Details
              </TabsTrigger>
              <TabsTrigger
                value="specifications"
                className="data-[state=active]:bg-[#64ffda] data-[state=active]:text-[#0a192f]"
              >
                Specifications
              </TabsTrigger>
              <TabsTrigger
                value="reviews"
                className="data-[state=active]:bg-[#64ffda] data-[state=active]:text-[#0a192f]"
              >
                Reviews
              </TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="border border-[#64ffda]/10 rounded-lg p-6 bg-[#112240]/50">
              <h3 className="text-xl font-bold mb-4">Product Details</h3>
              <p className="text-white/80 mb-4">{product.description}</p>
              <h4 className="font-bold mb-2">Features:</h4>
              <ul className="space-y-2 mb-4">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-[#64ffda] mr-2 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <h4 className="font-bold mb-2">In the Box:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#64ffda] mr-2 shrink-0 mt-0.5" />
                  <span>1x TerraBit Soil Moisture Sensor</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#64ffda] mr-2 shrink-0 mt-0.5" />
                  <span>1x Installation Kit</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#64ffda] mr-2 shrink-0 mt-0.5" />
                  <span>1x Quick Start Guide</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#64ffda] mr-2 shrink-0 mt-0.5" />
                  <span>1x USB Charging Cable</span>
                </li>
              </ul>
            </TabsContent>

            <TabsContent value="specifications" className="border border-[#64ffda]/10 rounded-lg p-6 bg-[#112240]/50">
              <h3 className="text-xl font-bold mb-4">Technical Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="border-b border-[#64ffda]/10 pb-2">
                    <div className="font-medium">{key}</div>
                    <div className="text-white/70">{value}</div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="border border-[#64ffda]/10 rounded-lg p-6 bg-[#112240]/50">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Customer Reviews</h3>
                <Button className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f]">Write a Review</Button>
              </div>

              <div className="flex flex-col md:flex-row gap-6 mb-6">
                <div className="w-full md:w-1/3 border border-[#64ffda]/10 rounded-lg p-4 bg-[#0a192f]/50">
                  <div className="text-center mb-2">
                    <div className="text-4xl font-bold text-[#64ffda]">{product.rating}</div>
                    <div className="flex justify-center my-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(product.rating)
                              ? "fill-[#64ffda] text-[#64ffda]"
                              : i < product.rating
                                ? "fill-[#64ffda]/50 text-[#64ffda]/50"
                                : "text-[#64ffda]/30"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="text-white/70">Based on {product.reviews} reviews</div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-12 text-right mr-2">5 stars</div>
                      <div className="flex-1 bg-[#112240] h-2 rounded-full overflow-hidden">
                        <div className="bg-[#64ffda] h-full rounded-full" style={{ width: "70%" }}></div>
                      </div>
                      <div className="w-8 text-right ml-2 text-white/70">70%</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-12 text-right mr-2">4 stars</div>
                      <div className="flex-1 bg-[#112240] h-2 rounded-full overflow-hidden">
                        <div className="bg-[#64ffda] h-full rounded-full" style={{ width: "20%" }}></div>
                      </div>
                      <div className="w-8 text-right ml-2 text-white/70">20%</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-12 text-right mr-2">3 stars</div>
                      <div className="flex-1 bg-[#112240] h-2 rounded-full overflow-hidden">
                        <div className="bg-[#64ffda] h-full rounded-full" style={{ width: "7%" }}></div>
                      </div>
                      <div className="w-8 text-right ml-2 text-white/70">7%</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-12 text-right mr-2">2 stars</div>
                      <div className="flex-1 bg-[#112240] h-2 rounded-full overflow-hidden">
                        <div className="bg-[#64ffda] h-full rounded-full" style={{ width: "2%" }}></div>
                      </div>
                      <div className="w-8 text-right ml-2 text-white/70">2%</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-12 text-right mr-2">1 star</div>
                      <div className="flex-1 bg-[#112240] h-2 rounded-full overflow-hidden">
                        <div className="bg-[#64ffda] h-full rounded-full" style={{ width: "1%" }}></div>
                      </div>
                      <div className="w-8 text-right ml-2 text-white/70">1%</div>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-2/3 space-y-4">
                  {/* Sample reviews */}
                  <Card className="bg-[#112240]/50 border-[#64ffda]/10">
                    <CardContent className="p-4">
                      <div className="flex justify-between mb-2">
                        <div className="font-bold">John D.</div>
                        <div className="text-white/50 text-sm">2 months ago</div>
                      </div>
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-[#64ffda] text-[#64ffda]" />
                        ))}
                      </div>
                      <h4 className="font-medium mb-2">Game changer for irrigation management</h4>
                      <p className="text-white/70">
                        I've been using this sensor for two months now and it has completely changed how I manage
                        irrigation on my farm. The real-time data is accurate and the battery life is impressive. Highly
                        recommended!
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-[#112240]/50 border-[#64ffda]/10">
                    <CardContent className="p-4">
                      <div className="flex justify-between mb-2">
                        <div className="font-bold">Sarah M.</div>
                        <div className="text-white/50 text-sm">1 month ago</div>
                      </div>
                      <div className="flex mb-2">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-[#64ffda] text-[#64ffda]" />
                        ))}
                        <Star className="h-4 w-4 text-[#64ffda]/30" />
                      </div>
                      <h4 className="font-medium mb-2">Great product, app needs improvement</h4>
                      <p className="text-white/70">
                        The sensor itself works perfectly and installation was easy. The only reason I'm giving 4 stars
                        is that the mobile app could use some improvements in the UI department. Otherwise, it's a solid
                        product.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-[#112240]/50 border-[#64ffda]/10">
                    <CardContent className="p-4">
                      <div className="flex justify-between mb-2">
                        <div className="font-bold">Michael T.</div>
                        <div className="text-white/50 text-sm">3 weeks ago</div>
                      </div>
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-[#64ffda] text-[#64ffda]" />
                        ))}
                      </div>
                      <h4 className="font-medium mb-2">Worth every penny</h4>
                      <p className="text-white/70">
                        After just one growing season, this sensor has paid for itself in water savings alone. The data
                        is accurate and the wireless range is impressive. I've since purchased three more for different
                        fields.
                      </p>
                    </CardContent>
                  </Card>

                  <Button variant="outline" className="w-full border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10">
                    Load More Reviews
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
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
                </div>
                <CardContent className="p-4">
                  <Link href={`/hardware/product/${product.id}`}>
                    <h3 className="font-bold text-white hover:text-[#64ffda] transition-colors">{product.name}</h3>
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
                  <div className="flex items-center justify-between">
                    <div className="text-xl font-bold text-[#64ffda]">${product.price.toFixed(2)}</div>
                    <div className="text-white/70 text-sm">{product.inStock ? "In Stock" : "Out of Stock"}</div>
                  </div>
                  <Button
                    className="w-full mt-4 bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f]"
                    disabled={!product.inStock}
                  >
                    View Product
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recently Viewed */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Recently Viewed</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {relatedProducts.slice(0, 4).map((product) => (
              <Link key={product.id} href={`/hardware/product/${product.id}`}>
                <div className="border border-[#64ffda]/10 rounded-lg p-4 bg-[#112240]/50 hover:bg-[#112240]/70 transition-colors">
                  <div className="aspect-square relative mb-2">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="font-medium text-sm line-clamp-2">{product.name}</h3>
                  <div className="text-[#64ffda] font-bold mt-1">${product.price.toFixed(2)}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

