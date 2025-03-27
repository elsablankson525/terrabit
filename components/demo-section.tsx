"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Play, Pause, SkipForward, SkipBack, Monitor, Smartphone, Laptop } from "lucide-react"
import Link from "next/link"

export default function DemoSection() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isPlaying, setIsPlaying] = useState(false)
  const [device, setDevice] = useState("desktop")

  const totalSteps = 4

  const handleNext = () => {
    setCurrentStep((prev) => (prev < totalSteps ? prev + 1 : prev))
  }

  const handlePrev = () => {
    setCurrentStep((prev) => (prev > 1 ? prev - 1 : prev))
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full bg-gradient-to-r from-[#64ffda]/10 to-[#64ffda]/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">
              <span className="relative inline-block">
                See TerraBit in Action
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#64ffda]"></span>
              </span>
            </h2>
            <p className="text-xl text-white/80">
              Experience how TerraBit can transform your farming operations with our interactive demo.
            </p>
          </div>

          <div className="border border-[#64ffda]/10 rounded-lg overflow-hidden bg-[#0a192f]/80 backdrop-blur-sm">
            <div className="border-b border-[#64ffda]/10 p-4 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <button
                  className={`p-2 rounded-md ${device === "desktop" ? "bg-[#64ffda]/20 text-[#64ffda]" : "text-white/70 hover:bg-[#112240]/50"}`}
                  onClick={() => setDevice("desktop")}
                >
                  <Monitor className="h-5 w-5" />
                </button>
                <button
                  className={`p-2 rounded-md ${device === "laptop" ? "bg-[#64ffda]/20 text-[#64ffda]" : "text-white/70 hover:bg-[#112240]/50"}`}
                  onClick={() => setDevice("laptop")}
                >
                  <Laptop className="h-5 w-5" />
                </button>
                <button
                  className={`p-2 rounded-md ${device === "mobile" ? "bg-[#64ffda]/20 text-[#64ffda]" : "text-white/70 hover:bg-[#112240]/50"}`}
                  onClick={() => setDevice("mobile")}
                >
                  <Smartphone className="h-5 w-5" />
                </button>
              </div>
              <div className="text-white/70 text-sm">Interactive Demo</div>
            </div>

            <div className="p-8">
              <div
                className={`border border-[#64ffda]/10 rounded-lg bg-[#112240]/30 ${device === "mobile" ? "w-64 h-[500px]" : "w-full h-[400px]"} mx-auto flex items-center justify-center`}
              >
                <div className="text-center p-6">
                  <h3 className="text-2xl font-bold mb-4 text-[#64ffda]">
                    {currentStep === 1 && "Field Monitoring Dashboard"}
                    {currentStep === 2 && "Crop Analysis Tools"}
                    {currentStep === 3 && "Weather Insights"}
                    {currentStep === 4 && "Resource Optimization"}
                  </h3>
                  <p className="text-white/80 mb-4">
                    {currentStep === 1 &&
                      "View real-time data from all your fields in one centralized dashboard. Monitor crop health, soil conditions, and more."}
                    {currentStep === 2 &&
                      "Analyze crop performance with advanced visualization tools. Identify trends and make data-driven decisions."}
                    {currentStep === 3 &&
                      "Access hyperlocal weather forecasts and historical data to plan your operations effectively."}
                    {currentStep === 4 &&
                      "Optimize resource usage with AI-powered recommendations for water, fertilizer, and pesticide application."}
                  </p>
                  <div className="text-[#64ffda] animate-pulse">
                    {isPlaying ? "Demo playing..." : "Press play to start demo"}
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center gap-4 mt-8">
                <Button
                  variant="outline"
                  size="icon"
                  className="text-white border-white/20 hover:bg-white/10 h-10 w-10"
                  onClick={handlePrev}
                  disabled={currentStep === 1}
                >
                  <SkipBack className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="text-white border-white/20 hover:bg-white/10 h-12 w-12"
                  onClick={togglePlay}
                >
                  {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="text-white border-white/20 hover:bg-white/10 h-10 w-10"
                  onClick={handleNext}
                  disabled={currentStep === totalSteps}
                >
                  <SkipForward className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex justify-center mt-6">
                <div className="flex gap-2">
                  {Array.from({ length: totalSteps }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-2 rounded-full ${currentStep === i + 1 ? "w-8 bg-[#64ffda]" : "w-2 bg-white/20"} transition-all`}
                      onClick={() => setCurrentStep(i + 1)}
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-[#64ffda]/10 p-6 flex justify-center">
              <Link href="/request-demo">
                <Button className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f] font-medium px-8 py-3">
                  Request Full Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

