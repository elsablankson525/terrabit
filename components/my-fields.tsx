"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { MapPin, Calendar, Droplets, ThermometerSun, Wind, ArrowRight } from "lucide-react"
import Link from "next/link"

// Sample field data from around the world
const fieldsData = [
  {
    id: 1,
    name: "North Field",
    location: "Iowa, USA",
    coordinates: "41.8780° N, 93.0977° W",
    size: "120 acres",
    crop: "Corn",
    lastSampled: "2025-03-15",
    soilType: "Loam",
    moisture: "32%",
    temperature: "18°C",
    windSpeed: "8 km/h",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    name: "South Field",
    location: "Nebraska, USA",
    coordinates: "41.5008° N, 99.6809° W",
    size: "85 acres",
    crop: "Soybeans",
    lastSampled: "2025-03-10",
    soilType: "Clay Loam",
    moisture: "28%",
    temperature: "19°C",
    windSpeed: "6 km/h",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    name: "Kilimanjaro Farm",
    location: "Arusha, Tanzania",
    coordinates: "3.0674° S, 37.3556° E",
    size: "45 acres",
    crop: "Coffee",
    lastSampled: "2025-03-05",
    soilType: "Volcanic",
    moisture: "35%",
    temperature: "22°C",
    windSpeed: "4 km/h",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 4,
    name: "Nile Valley Plot",
    location: "Luxor, Egypt",
    coordinates: "25.6872° N, 32.6396° E",
    size: "30 acres",
    crop: "Wheat",
    lastSampled: "2025-02-28",
    soilType: "Silt",
    moisture: "40%",
    temperature: "24°C",
    windSpeed: "10 km/h",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 5,
    name: "Punjab Field",
    location: "Punjab, India",
    coordinates: "31.1471° N, 75.3412° E",
    size: "65 acres",
    crop: "Rice",
    lastSampled: "2025-03-12",
    soilType: "Alluvial",
    moisture: "45%",
    temperature: "26°C",
    windSpeed: "5 km/h",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 6,
    name: "Pampas Plot",
    location: "Buenos Aires, Argentina",
    coordinates: "34.6037° S, 58.3816° W",
    size: "150 acres",
    crop: "Soybeans",
    lastSampled: "2025-03-08",
    soilType: "Mollisol",
    moisture: "30%",
    temperature: "21°C",
    windSpeed: "12 km/h",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 7,
    name: "Bordeaux Vineyard",
    location: "Bordeaux, France",
    coordinates: "44.8378° N, 0.5792° W",
    size: "25 acres",
    crop: "Grapes",
    lastSampled: "2025-03-01",
    soilType: "Gravel",
    moisture: "25%",
    temperature: "16°C",
    windSpeed: "7 km/h",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 8,
    name: "Murray-Darling Farm",
    location: "New South Wales, Australia",
    coordinates: "34.0833° S, 142.0333° E",
    size: "200 acres",
    crop: "Cotton",
    lastSampled: "2025-03-14",
    soilType: "Sandy Loam",
    moisture: "22%",
    temperature: "23°C",
    windSpeed: "9 km/h",
    image: "/placeholder.svg?height=200&width=400",
  },
]

export function MyFields() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedField, setSelectedField] = useState<(typeof fieldsData)[0] | null>(null)

  const handleFieldClick = (field: (typeof fieldsData)[0]) => {
    setSelectedField(field)
    setIsOpen(true)
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {fieldsData.map((field) => (
          <Card
            key={field.id}
            className="bg-[#112240]/70 border-[#64ffda]/10 hover:border-[#64ffda]/30 transition-all cursor-pointer"
            onClick={() => handleFieldClick(field)}
          >
            <div className="h-40 overflow-hidden">
              <img src={field.image || "/placeholder.svg"} alt={field.name} className="w-full h-full object-cover" />
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-lg">{field.name}</CardTitle>
              <CardDescription className="text-white/70 flex items-center">
                <MapPin className="h-3 w-3 mr-1" /> {field.location}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-white/70 space-y-1">
                <div className="flex justify-between">
                  <span>Size:</span>
                  <span className="text-white">{field.size}</span>
                </div>
                <div className="flex justify-between">
                  <span>Crop:</span>
                  <span className="text-white">{field.crop}</span>
                </div>
                <div className="flex justify-between">
                  <span>Last Sampled:</span>
                  <span className="text-white">{new Date(field.lastSampled).toLocaleDateString()}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-[#112240] border-[#64ffda]/10 text-white sm:max-w-[600px]">
          {selectedField && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl">{selectedField.name}</DialogTitle>
                <DialogDescription className="text-white/70 flex items-center">
                  <MapPin className="h-4 w-4 mr-1" /> {selectedField.location} ({selectedField.coordinates})
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4">
                <div className="h-48 overflow-hidden rounded-md">
                  <img
                    src={selectedField.image || "/placeholder.svg"}
                    alt={selectedField.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h3 className="text-[#64ffda] font-medium">Field Details</h3>
                    <div className="text-sm space-y-1">
                      <div className="flex justify-between">
                        <span className="text-white/70">Size:</span>
                        <span>{selectedField.size}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/70">Crop:</span>
                        <span>{selectedField.crop}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/70">Soil Type:</span>
                        <span>{selectedField.soilType}</span>
                      </div>
                      <div className="flex items-center text-white/70 mt-2">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>Last sampled: {new Date(selectedField.lastSampled).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-[#64ffda] font-medium">Current Conditions</h3>
                    <div className="text-sm space-y-2">
                      <div className="flex items-center">
                        <Droplets className="h-4 w-4 mr-2 text-blue-400" />
                        <span>Soil Moisture: {selectedField.moisture}</span>
                      </div>
                      <div className="flex items-center">
                        <ThermometerSun className="h-4 w-4 mr-2 text-orange-400" />
                        <span>Soil Temperature: {selectedField.temperature}</span>
                      </div>
                      <div className="flex items-center">
                        <Wind className="h-4 w-4 mr-2 text-gray-400" />
                        <span>Wind Speed: {selectedField.windSpeed}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between pt-4 border-t border-[#64ffda]/10">
                  <Button variant="outline" className="border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10" asChild>
                    <Link href={`/analytics/soil-health?field=${selectedField.id}`}>View Soil Analysis</Link>
                  </Button>

                  <Button className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f]" asChild>
                    <Link href={`/analytics/yield-analysis?field=${selectedField.id}`}>
                      View Yield Analysis <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

