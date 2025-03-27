"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Pause } from "lucide-react"

const carouselItems = [
  {
    id: 1,
    subtitle: "EMPOWERING FARMERS",
    title: "The all-in-one digital farming solution",
    description: "Join the community of farmers who have harnessed the power of Climate FieldView™.",
    image: "/placeholder.svg?height=800&width=1600",
    active: true,
  },
  {
    id: 2,
    subtitle: "DATA-DRIVEN INSIGHTS",
    title: "Make informed decisions with real-time data",
    description: "Access powerful analytics and visualizations to optimize your farming operations.",
    image: "/placeholder.svg?height=800&width=1600",
    active: false,
  },
  {
    id: 3,
    subtitle: "INNOVATIVE AG TECH",
    title: "Cutting-edge technology for modern farming",
    description: "Leverage the latest agricultural innovations to increase yield and sustainability.",
    image: "/placeholder.svg?height=800&width=1600",
    active: false,
  },
]

export default function HeroCarousel() {
  const [items, setItems] = useState(carouselItems)
  const [isPaused, setIsPaused] = useState(false)

  const activeItem = items.find((item) => item.active) || items[0]

  const handleTabClick = (id: number) => {
    setItems(
      items.map((item) => ({
        ...item,
        active: item.id === id,
      })),
    )
  }

  return (
    <div className="relative h-[calc(100vh-72px)] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src={activeItem.image || "/placeholder.svg"} alt="Farm field" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-[#003145]/60"></div>
      </div>

      {/* Glowing Orb Effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-yellow-300/20 blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex-1 flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl">
              <p className="text-white text-sm tracking-widest mb-4">{activeItem.subtitle}</p>
              <h1 className="text-white text-5xl font-bold mb-6">{activeItem.title}</h1>
              <p className="text-white text-xl mb-8">{activeItem.description}</p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#F7941D] hover:bg-[#e88712] text-white px-8 py-6">Find a Plan</Button>
                <Button variant="outline" className="text-white border-white hover:bg-white/10 px-8 py-6">
                  Explore Our Solutions
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="container mx-auto px-6 pb-8">
          <div className="flex items-center justify-between">
            <div className="flex space-x-8">
              {items.map((item) => (
                <button
                  key={item.id}
                  className={`pb-2 text-white border-b-2 ${item.active ? "border-[#F7941D]" : "border-transparent"}`}
                  onClick={() => handleTabClick(item.id)}
                >
                  {item.subtitle}
                </button>
              ))}
            </div>
            <button className="text-white p-2" onClick={() => setIsPaused(!isPaused)}>
              <Pause className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

