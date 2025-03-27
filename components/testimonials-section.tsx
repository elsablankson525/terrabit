"use client"

import Link from "next/link"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "John Deere",
    role: "Corn Farmer, Iowa, USA",
    quote:
      "TerraBit has completely transformed how I manage my 2,000-acre corn farm. The soil moisture tracking alone has saved me thousands in irrigation costs, and the yield predictions are incredibly accurate.",
    rating: 5,
    years: "TerraBit user for 3 years",
    region: "North America",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Organic Vegetable Farmer, California, USA",
    quote:
      "As an organic farmer, I need precise data to make sustainable decisions. TerraBit's analytics have helped me reduce water usage by 30% while increasing my vegetable yields. The platform is intuitive and the insights are actionable.",
    rating: 5,
    years: "TerraBit user for 2 years",
    region: "North America",
  },
  {
    id: 3,
    name: "Miguel Rodriguez",
    role: "Vineyard Owner, Oregon, USA",
    quote:
      "The microclimate data from TerraBit has been a game-changer for our vineyard. We can now predict frost risks with remarkable accuracy and take preventive measures. The ROI on this platform has been exceptional.",
    rating: 4,
    years: "TerraBit user for 1 year",
    region: "North America",
  },
  {
    id: 4,
    name: "Emily Zhang",
    role: "Rice Farmer, Arkansas, USA",
    quote:
      "TerraBit's field monitoring tools have helped me optimize water levels in my rice paddies with precision I never thought possible. The mobile app lets me check conditions from anywhere, giving me peace of mind during critical growing periods.",
    rating: 5,
    years: "TerraBit user for 2 years",
    region: "North America",
  },
  {
    id: 5,
    name: "Kwame Nkrumah",
    role: "Cocoa Farmer, Ghana",
    quote:
      "TerraBit has revolutionized how I manage my cocoa plantation. The pest prediction alerts have helped me reduce crop losses by 40%, and the soil analysis tools have improved my fertilizer efficiency tremendously.",
    rating: 5,
    years: "TerraBit user for 2 years",
    region: "Africa",
  },
  {
    id: 6,
    name: "Amara Diallo",
    role: "Millet & Sorghum Farmer, Senegal",
    quote:
      "In our region where rainfall is unpredictable, TerraBit's weather forecasting has been invaluable. I've been able to time my planting perfectly, and the drought monitoring tools help me manage water resources effectively.",
    rating: 5,
    years: "TerraBit user for 1 year",
    region: "Africa",
  },
  {
    id: 7,
    name: "Tendai Mutasa",
    role: "Maize Farmer, Zimbabwe",
    quote:
      "Before TerraBit, I struggled with inconsistent yields. The soil health analysis identified nutrient deficiencies I wasn't aware of, and after following TerraBit's recommendations, my yields increased by 35% in just one season.",
    rating: 4,
    years: "TerraBit user for 2 years",
    region: "Africa",
  },
  {
    id: 8,
    name: "Fatima Ndiaye",
    role: "Vegetable Cooperative Leader, Morocco",
    quote:
      "Our cooperative of 50 small-scale farmers has seen remarkable improvements since adopting TerraBit. The ability to share equipment data and coordinate planting schedules has strengthened our community while increasing everyone's profits.",
    rating: 5,
    years: "TerraBit user for 3 years",
    region: "Africa",
  },
]

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [region, setRegion] = useState("all")

  const filteredTestimonials = region === "all" ? testimonials : testimonials.filter((t) => t.region === region)

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? filteredTestimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === filteredTestimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(100,255,218,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(100,255,218,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">
              <span className="relative inline-block">
                What Our Farmers Say
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#64ffda]"></span>
              </span>
            </h2>
            <p className="text-xl text-white/80">
              Hear from farmers who have transformed their operations with TerraBit.
            </p>

            <div className="mt-6 flex justify-center gap-2">
              <Button
                variant={region === "all" ? "default" : "outline"}
                size="sm"
                className={
                  region === "all"
                    ? "bg-[#64ffda] text-[#0a192f]"
                    : "border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10"
                }
                onClick={() => {
                  setRegion("all")
                  setActiveIndex(0)
                }}
              >
                All Regions
              </Button>
              <Button
                variant={region === "North America" ? "default" : "outline"}
                size="sm"
                className={
                  region === "North America"
                    ? "bg-[#64ffda] text-[#0a192f]"
                    : "border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10"
                }
                onClick={() => {
                  setRegion("North America")
                  setActiveIndex(0)
                }}
              >
                North America
              </Button>
              <Button
                variant={region === "Africa" ? "default" : "outline"}
                size="sm"
                className={
                  region === "Africa"
                    ? "bg-[#64ffda] text-[#0a192f]"
                    : "border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10"
                }
                onClick={() => {
                  setRegion("Africa")
                  setActiveIndex(0)
                }}
              >
                Africa
              </Button>
            </div>
          </div>

          <div className="relative">
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 text-white border-white/20 hover:bg-white/10 h-10 w-10 rounded-full"
              onClick={handlePrev}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="overflow-hidden px-12">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {filteredTestimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="border border-[#64ffda]/10 rounded-lg p-8 bg-[#112240]/50 backdrop-blur-sm">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 rounded-full bg-[#64ffda]/20 flex items-center justify-center text-[#64ffda] font-bold text-xl mr-4">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <h3 className="font-bold text-white">{testimonial.name}</h3>
                          <p className="text-white/70 text-sm">{testimonial.role}</p>
                        </div>
                      </div>

                      <div className="flex mb-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${i < testimonial.rating ? "text-[#64ffda] fill-[#64ffda]" : "text-white/20"}`}
                          />
                        ))}
                      </div>

                      <blockquote className="text-white/80 text-lg italic mb-6">"{testimonial.quote}"</blockquote>

                      <p className="text-white/50 text-sm">{testimonial.years}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 text-white border-white/20 hover:bg-white/10 h-10 w-10 rounded-full"
              onClick={handleNext}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex justify-center mt-8">
            <div className="flex gap-2">
              {filteredTestimonials.map((_, i) => (
                <button
                  key={i}
                  className={`h-2 rounded-full transition-all ${
                    activeIndex === i ? "w-8 bg-[#64ffda]" : "w-2 bg-white/20"
                  }`}
                  onClick={() => setActiveIndex(i)}
                ></button>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/testimonials">
              <Button variant="outline" className="text-white border-white hover:bg-white/10 px-6 py-3">
                Read More Success Stories
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

