"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Star, Search, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Extended testimonials data with more global farmers
const allTestimonials = [
  {
    id: 1,
    name: "John Deere",
    role: "Corn Farmer, Iowa, USA",
    quote:
      "TerraBit has completely transformed how I manage my 2,000-acre corn farm. The soil moisture tracking alone has saved me thousands in irrigation costs, and the yield predictions are incredibly accurate.",
    rating: 5,
    years: "TerraBit user for 3 years",
    region: "North America",
    crop: "Corn",
    farmSize: "Large",
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
    crop: "Vegetables",
    farmSize: "Medium",
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
    crop: "Grapes",
    farmSize: "Medium",
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
    crop: "Rice",
    farmSize: "Large",
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
    crop: "Cocoa",
    farmSize: "Medium",
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
    crop: "Millet",
    farmSize: "Small",
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
    crop: "Maize",
    farmSize: "Medium",
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
    crop: "Vegetables",
    farmSize: "Small",
  },
  {
    id: 9,
    name: "Raj Patel",
    role: "Rice Farmer, India",
    quote:
      "TerraBit's irrigation recommendations have been a game-changer for our farm. We've reduced water usage by 25% while maintaining yields, which is crucial in our water-stressed region.",
    rating: 5,
    years: "TerraBit user for 2 years",
    region: "Asia",
    crop: "Rice",
    farmSize: "Medium",
  },
  {
    id: 10,
    name: "Liu Wei",
    role: "Wheat Farmer, China",
    quote:
      "The precision agriculture tools in TerraBit have helped me optimize fertilizer application. I'm now using 30% less fertilizer while achieving the same yields, which has significantly improved my profit margins.",
    rating: 4,
    years: "TerraBit user for 1 year",
    region: "Asia",
    crop: "Wheat",
    farmSize: "Large",
  },
  {
    id: 11,
    name: "Carlos Mendoza",
    role: "Coffee Grower, Colombia",
    quote:
      "TerraBit's climate forecasting has been essential for our coffee farm. We can now anticipate frost events and take preventive measures, protecting our high-value crop from damage.",
    rating: 5,
    years: "TerraBit user for 3 years",
    region: "South America",
    crop: "Coffee",
    farmSize: "Medium",
  },
  {
    id: 12,
    name: "Isabella Santos",
    role: "Soybean Farmer, Brazil",
    quote:
      "Managing our large soybean operation became much easier with TerraBit. The equipment tracking and maintenance scheduling features have reduced our downtime by 40% during critical planting and harvest periods.",
    rating: 5,
    years: "TerraBit user for 2 years",
    region: "South America",
    crop: "Soybeans",
    farmSize: "Large",
  },
  {
    id: 13,
    name: "Hans Mueller",
    role: "Potato Farmer, Germany",
    quote:
      "TerraBit's disease prediction models have been remarkably accurate for our potato crops. We've been able to time our fungicide applications perfectly, reducing chemical use while improving disease control.",
    rating: 4,
    years: "TerraBit user for 2 years",
    region: "Europe",
    crop: "Potatoes",
    farmSize: "Medium",
  },
  {
    id: 14,
    name: "Sophie Dubois",
    role: "Wheat & Barley Farmer, France",
    quote:
      "The soil mapping features in TerraBit have revealed patterns in our fields we never noticed before. We've adjusted our planting strategy accordingly and seen a 15% increase in overall yield uniformity.",
    rating: 5,
    years: "TerraBit user for 3 years",
    region: "Europe",
    crop: "Wheat",
    farmSize: "Large",
  },
  {
    id: 15,
    name: "James Wilson",
    role: "Sheep & Crop Farmer, Australia",
    quote:
      "As a mixed enterprise farmer, TerraBit's ability to track both crops and livestock has been invaluable. The pasture growth monitoring helps me optimize grazing rotations while still managing my cropping program effectively.",
    rating: 5,
    years: "TerraBit user for 2 years",
    region: "Oceania",
    crop: "Mixed",
    farmSize: "Large",
  },
  {
    id: 16,
    name: "Amare Bekele",
    role: "Teff Farmer, Ethiopia",
    quote:
      "TerraBit has helped me modernize my teff production. The soil analysis revealed exactly what nutrients I needed to add, and the yield forecasting helps me plan my finances better throughout the season.",
    rating: 4,
    years: "TerraBit user for 1 year",
    region: "Africa",
    crop: "Teff",
    farmSize: "Small",
  },
  {
    id: 17,
    name: "Nala Okafor",
    role: "Cassava Farmer, Nigeria",
    quote:
      "The pest and disease monitoring in TerraBit has been crucial for our cassava crop. We've reduced crop losses by 50% by catching problems early, which has made a huge difference to our community's food security.",
    rating: 5,
    years: "TerraBit user for 2 years",
    region: "Africa",
    crop: "Cassava",
    farmSize: "Medium",
  },
  {
    id: 18,
    name: "Jamal Mbeki",
    role: "Fruit Orchard Manager, South Africa",
    quote:
      "TerraBit's frost alerts and microclimate monitoring have saved our citrus orchard multiple times. The precision irrigation recommendations have also improved our fruit quality and size distribution.",
    rating: 5,
    years: "TerraBit user for 3 years",
    region: "Africa",
    crop: "Citrus",
    farmSize: "Large",
  },
]

export default function TestimonialsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRegion, setSelectedRegion] = useState("all")
  const [selectedCrop, setSelectedCrop] = useState("all")
  const [selectedFarmSize, setSelectedFarmSize] = useState("all")

  // Get unique crop types for filter
  const cropTypes = ["all", ...new Set(allTestimonials.map((t) => t.crop))]

  // Get unique regions for filter
  const regions = ["all", ...new Set(allTestimonials.map((t) => t.region))]

  // Get unique farm sizes for filter
  const farmSizes = ["all", "Small", "Medium", "Large"]

  // Filter testimonials based on search and filters
  const filteredTestimonials = allTestimonials.filter((testimonial) => {
    const matchesSearch =
      searchTerm === "" ||
      testimonial.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      testimonial.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      testimonial.quote.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesRegion = selectedRegion === "all" || testimonial.region === selectedRegion
    const matchesCrop = selectedCrop === "all" || testimonial.crop === selectedCrop
    const matchesFarmSize = selectedFarmSize === "all" || testimonial.farmSize === selectedFarmSize

    return matchesSearch && matchesRegion && matchesCrop && matchesFarmSize
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a192f] to-[#112240] text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" size="sm" className="mb-4 border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <h1 className="text-4xl font-bold mb-4">Farmer Success Stories</h1>
          <p className="text-xl text-white/80 max-w-3xl">
            Discover how farmers around the world are transforming their operations with TerraBit's digital farming
            solutions.
          </p>
        </div>

        <div className="mb-8 bg-[#112240]/50 p-6 rounded-lg border border-[#64ffda]/10">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <Filter className="h-5 w-5 mr-2 text-[#64ffda]" />
            Filter Success Stories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="text-sm text-white/70 block mb-2">Search</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
                <Input
                  placeholder="Search by name, location, or keyword..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-[#0a192f]/50 border-[#64ffda]/20 text-white"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-white/70 block mb-2">Region</label>
              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger className="bg-[#0a192f]/50 border-[#64ffda]/20 text-white">
                  <SelectValue placeholder="Select region" />
                </SelectTrigger>
                <SelectContent className="bg-[#112240] border-[#64ffda]/10 text-white">
                  {regions.map((region) => (
                    <SelectItem key={region} value={region}>
                      {region === "all" ? "All Regions" : region}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm text-white/70 block mb-2">Crop Type</label>
              <Select value={selectedCrop} onValueChange={setSelectedCrop}>
                <SelectTrigger className="bg-[#0a192f]/50 border-[#64ffda]/20 text-white">
                  <SelectValue placeholder="Select crop" />
                </SelectTrigger>
                <SelectContent className="bg-[#112240] border-[#64ffda]/10 text-white">
                  {cropTypes.map((crop) => (
                    <SelectItem key={crop} value={crop}>
                      {crop === "all" ? "All Crops" : crop}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm text-white/70 block mb-2">Farm Size</label>
              <Select value={selectedFarmSize} onValueChange={setSelectedFarmSize}>
                <SelectTrigger className="bg-[#0a192f]/50 border-[#64ffda]/20 text-white">
                  <SelectValue placeholder="Select farm size" />
                </SelectTrigger>
                <SelectContent className="bg-[#112240] border-[#64ffda]/10 text-white">
                  {farmSizes.map((size) => (
                    <SelectItem key={size} value={size}>
                      {size === "all" ? "All Sizes" : size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="mb-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold">
            {filteredTestimonials.length} {filteredTestimonials.length === 1 ? "Story" : "Stories"} Found
          </h2>

          <Button
            variant="outline"
            className="border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10"
            onClick={() => {
              setSearchTerm("")
              setSelectedRegion("all")
              setSelectedCrop("all")
              setSelectedFarmSize("all")
            }}
          >
            Reset Filters
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-[#112240]/70 border-[#64ffda]/10">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
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
                      className={`h-4 w-4 ${i < testimonial.rating ? "text-[#64ffda] fill-[#64ffda]" : "text-white/20"}`}
                    />
                  ))}
                </div>

                <blockquote className="text-white/80 text-base italic mb-4">"{testimonial.quote}"</blockquote>

                <div className="flex justify-between items-center text-sm text-white/50">
                  <span>{testimonial.years}</span>
                  <span>{testimonial.region}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTestimonials.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white/70 text-lg">
              No testimonials match your current filters. Try adjusting your search criteria.
            </p>
          </div>
        )}

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Join These Success Stories?</h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            See how TerraBit can transform your farming operation with data-driven insights and precision agriculture
            tools.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f] px-6 py-3">Start Free Trial</Button>
            <Button
              variant="outline"
              className="border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10 px-6 py-3"
              onClick={() => (window.location.href = "/contact")}
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

