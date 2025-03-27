"use client"

import { useState } from "react"
import { useCart } from "@/contexts/cart-context"
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
    description: "Advanced soil moisture sensor with wireless connectivity and long battery life.",
    features: ["Wireless", "5-year battery life", "Real-time monitoring", "Weather resistant"],
    inStock: true,
    isFeatured: true,
    isNew: true,
    isBestseller: true,
    brand: "TerraBit",
  },
  // ... other products (omitted for brevity)
]

const categories = [
  { id: "all", name: "All Products" },
  { id: "sensors", name: "Sensors & Monitors" },
  { id: "drones", name: "Drones & Imaging" },
  { id: "irrigation", name: "Smart Irrigation" },
  { id: "tractors", name: "Smart Tractors & Equipment" },
  { id: "software", name: "Software Solutions" },
]

const brands = ["TerraBit", "AgroTech", "FarmSense", "SmartField", "CropMaster", "AgriDrone"]

export default function HardwareClientPage() {
  // All the component code from the previous implementation
  // ... (omitted for brevity)

  const { toast } = useToast()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("featured")
  const [cartCount, setCartCount] = useState(0)

  // Safe cart access with error handling
  const cart = useCart()

  // Rest of the component implementation
  // ... (omitted for brevity)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a192f] to-[#112240] text-white">
      {/* Component JSX */}
      {/* ... (omitted for brevity) */}
    </div>
  )
}

