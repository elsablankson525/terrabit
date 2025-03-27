"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Pause, Play } from "lucide-react"
import Link from "next/link"

const carouselItems = [
  {
    id: 1,
    subtitle: "EMPOWERING FARMERS",
    title: "The all-in-one digital farming solution",
    description:
      "Join the community of farmers who have harnessed the power of TerraBit™ to transform their agricultural operations with cutting-edge technology.",
    active: true,
  },
  {
    id: 2,
    subtitle: "DATA-DRIVEN INSIGHTS",
    title: "Make informed decisions with real-time data",
    description:
      "Access powerful analytics and visualizations to optimize your farming operations and maximize yield potential.",
    active: false,
  },
  {
    id: 3,
    subtitle: "INNOVATIVE AG TECH",
    title: "Cutting-edge technology for modern farming",
    description:
      "Leverage the latest agricultural innovations to increase yield and sustainability while reducing costs and environmental impact.",
    active: false,
  },
]

export default function HeroSection() {
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
    <div className="relative min-h-[calc(100vh-72px)] flex flex-col">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-[#64ffda]/10 to-[#64ffda]/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-[#64ffda]/10 to-[#64ffda]/5 blur-3xl"></div>

        {/* Digital Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(100,255,218,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(100,255,218,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

        {/* Binary Code Effect */}
        <div className="absolute inset-0 overflow-hidden opacity-5">
          <div className="text-[8px] text-[#64ffda] font-mono leading-tight">
            {Array(50)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="whitespace-nowrap">
                  {Array(100)
                    .fill(0)
                    .map((_, j) => (
                      <span key={j}>{Math.random() > 0.5 ? "1" : "0"}</span>
                    ))}
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex-1 flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl">
              <div className="inline-block px-3 py-1 mb-4 border border-[#64ffda]/30 rounded-full bg-[#64ffda]/10 text-[#64ffda] text-xs font-semibold tracking-widest animate-pulse">
                {activeItem.subtitle}
              </div>
              <h1 className="text-white text-5xl font-bold mb-6 leading-tight">
                <span className="relative">
                  {activeItem.title}
                  <span className="absolute -bottom-2 left-0 w-24 h-1 bg-[#64ffda]"></span>
                </span>
              </h1>
              <p className="text-white/80 text-xl mb-8 leading-relaxed">{activeItem.description}</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/pricing">
                  <Button className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f] font-medium px-8 py-6 shadow-lg shadow-[#64ffda]/20 transition-all duration-300 hover:translate-y-[-2px]">
                    Find a Plan
                  </Button>
                </Link>
                <Link href="/solutions">
                  <Button
                    variant="outline"
                    className="text-white border-white hover:bg-white/10 px-8 py-6 transition-all duration-300 hover:translate-y-[-2px]"
                  >
                    Explore Our Solutions
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border border-[#64ffda]/10 rounded-lg p-6 bg-[#112240]/50 backdrop-blur-sm hover:bg-[#112240]/80 transition-colors group">
                  <div className="text-[#64ffda] text-4xl font-bold mb-2 group-hover:scale-110 transition-transform">
                    10K+
                  </div>
                  <div className="text-white/70">Farmers Worldwide</div>
                </div>
                <div className="border border-[#64ffda]/10 rounded-lg p-6 bg-[#112240]/50 backdrop-blur-sm hover:bg-[#112240]/80 transition-colors group">
                  <div className="text-[#64ffda] text-4xl font-bold mb-2 group-hover:scale-110 transition-transform">
                    150M+
                  </div>
                  <div className="text-white/70">Acres Analyzed</div>
                </div>
                <div className="border border-[#64ffda]/10 rounded-lg p-6 bg-[#112240]/50 backdrop-blur-sm hover:bg-[#112240]/80 transition-colors group">
                  <div className="text-[#64ffda] text-4xl font-bold mb-2 group-hover:scale-110 transition-transform">
                    20%
                  </div>
                  <div className="text-white/70">Yield Improvement</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="container mx-auto px-6 pb-8">
          <div className="flex items-center justify-between border-t border-[#64ffda]/10 pt-6">
            <div className="flex space-x-8">
              {items.map((item) => (
                <button
                  key={item.id}
                  className={`pb-2 text-white border-b-2 transition-colors ${
                    item.active ? "border-[#64ffda] text-[#64ffda]" : "border-transparent hover:border-white/30"
                  }`}
                  onClick={() => handleTabClick(item.id)}
                >
                  {item.subtitle}
                </button>
              ))}
            </div>
            <button
              className="text-white p-2 border border-[#64ffda]/20 rounded-full hover:bg-[#64ffda]/10 transition-colors"
              onClick={() => setIsPaused(!isPaused)}
            >
              {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

