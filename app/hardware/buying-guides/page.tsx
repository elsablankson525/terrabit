"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronDown, ChevronRight, BookOpen, Download, Share2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Guide categories
const categories = [
  { id: "sensors", name: "Sensors & Monitors" },
  { id: "drones", name: "Drones & Imaging" },
  { id: "irrigation", name: "Smart Irrigation" },
  { id: "tractors", name: "Smart Tractors & Equipment" },
]

export default function BuyingGuidesPage() {
  const [expandedGuide, setExpandedGuide] = useState<string | null>(null)

  const toggleGuide = (guideId: string) => {
    if (expandedGuide === guideId) {
      setExpandedGuide(null)
    } else {
      setExpandedGuide(guideId)
    }
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
              href="/hardware/buying-guides"
              className="py-2 text-[#64ffda] border-b border-[#64ffda] transition-colors"
            >
              Buying Guides
            </Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Agricultural Hardware Buying Guides</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Comprehensive guides to help you choose the right agricultural technology for your farm.
          </p>
        </div>

        <Tabs defaultValue="sensors" className="mb-12">
          <TabsList className="grid grid-cols-4 mb-8 bg-[#0a192f]/50">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-[#64ffda] data-[state=active]:text-[#0a192f]"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="sensors" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Soil Moisture Sensors</h2>
                <p className="text-white/80 mb-4">
                  Soil moisture sensors are essential tools for modern precision agriculture, helping farmers optimize
                  irrigation schedules and water usage.
                </p>
                <div className="space-y-4">
                  <div className="border border-[#64ffda]/10 rounded-lg overflow-hidden">
                    <button
                      className="w-full flex items-center justify-between p-4 text-left"
                      onClick={() => toggleGuide("soil-moisture-guide")}
                    >
                      <span className="font-medium">How to Choose a Soil Moisture Sensor</span>
                      {expandedGuide === "soil-moisture-guide" ? (
                        <ChevronDown className="h-5 w-5 text-[#64ffda]" />
                      ) : (
                        <ChevronRight className="h-5 w-5 text-[#64ffda]" />
                      )}
                    </button>
                    {expandedGuide === "soil-moisture-guide" && (
                      <div className="p-4 border-t border-[#64ffda]/10 bg-[#0a192f]/30">
                        <h3 className="font-bold mb-2">Key Factors to Consider:</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                          <li>Sensor Type: Capacitance vs. Resistive vs. TDR</li>
                          <li>Measurement Depth: Single vs. Multi-depth</li>
                          <li>Connectivity: Wired vs. Wireless</li>
                          <li>Battery Life: Standard vs. Extended</li>
                          <li>Data Access: Local vs. Cloud-based</li>
                          <li>Durability: Weather resistance and build quality</li>
                        </ul>
                        <h3 className="font-bold mb-2">Recommended Models:</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>TerraBit Soil Moisture Sensor - Best overall</li>
                          <li>AquaSense Irrigation Sensors - Best for multiple zones</li>
                          <li>NutriScan Soil Analyzer - Best for comprehensive soil analysis</li>
                        </ul>
                        <div className="flex mt-4">
                          <Button variant="outline" size="sm" className="mr-2">
                            <Download className="h-4 w-4 mr-1" /> Download Guide
                          </Button>
                          <Button variant="outline" size="sm">
                            <Share2 className="h-4 w-4 mr-1" /> Share
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="border border-[#64ffda]/10 rounded-lg overflow-hidden">
                    <button
                      className="w-full flex items-center justify-between p-4 text-left"
                      onClick={() => toggleGuide("soil-installation-guide")}
                    >
                      <span className="font-medium">Installation Best Practices</span>
                      {expandedGuide === "soil-installation-guide" ? (
                        <ChevronDown className="h-5 w-5 text-[#64ffda]" />
                      ) : (
                        <ChevronRight className="h-5 w-5 text-[#64ffda]" />
                      )}
                    </button>
                    {expandedGuide === "soil-installation-guide" && (
                      <div className="p-4 border-t border-[#64ffda]/10 bg-[#0a192f]/30">
                        <h3 className="font-bold mb-2">Installation Steps:</h3>
                        <ol className="list-decimal pl-5 space-y-2 mb-4">
                          <li>Select representative locations in your field</li>
                          <li>Prepare the soil by removing debris and vegetation</li>
                          <li>Create a pilot hole to the desired depth</li>
                          <li>Insert the sensor ensuring good soil contact</li>
                          <li>Configure wireless connectivity if applicable</li>
                          <li>Calibrate the sensor for your specific soil type</li>
                        </ol>
                        <p className="text-white/80 mb-4">
                          For optimal results, install sensors at multiple depths to monitor the entire root zone.
                        </p>
                        <div className="flex mt-4">
                          <Button variant="outline" size="sm" className="mr-2">
                            <Download className="h-4 w-4 mr-1" /> Download Guide
                          </Button>
                          <Button variant="outline" size="sm">
                            <Share2 className="h-4 w-4 mr-1" /> Share
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Weather Stations</h2>
                <p className="text-white/80 mb-4">
                  Agricultural weather stations provide critical data for decision-making, helping farmers anticipate
                  weather conditions and optimize operations.
                </p>
                <div className="space-y-4">
                  <div className="border border-[#64ffda]/10 rounded-lg overflow-hidden">
                    <button
                      className="w-full flex items-center justify-between p-4 text-left"
                      onClick={() => toggleGuide("weather-station-guide")}
                    >
                      <span className="font-medium">Choosing a Weather Station</span>
                      {expandedGuide === "weather-station-guide" ? (
                        <ChevronDown className="h-5 w-5 text-[#64ffda]" />
                      ) : (
                        <ChevronRight className="h-5 w-5 text-[#64ffda]" />
                      )}
                    </button>
                    {expandedGuide === "weather-station-guide" && (
                      <div className="p-4 border-t border-[#64ffda]/10 bg-[#0a192f]/30">
                        <h3 className="font-bold mb-2">Key Factors to Consider:</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                          <li>Sensors: Temperature, humidity, rainfall, wind, solar radiation</li>
                          <li>Accuracy: Professional-grade vs. consumer-grade</li>
                          <li>Power Source: Solar, battery, or wired</li>
                          <li>Data Access: Local display, mobile app, or web interface</li>
                          <li>Integration: Compatibility with farm management software</li>
                          <li>Durability: Weather resistance and build quality</li>
                        </ul>
                        <h3 className="font-bold mb-2">Recommended Models:</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>CropGuard Weather Station - Best overall</li>
                          <li>SensorHub Enterprise - Best for large operations</li>
                        </ul>
                        <div className="flex mt-4">
                          <Button variant="outline" size="sm" className="mr-2">
                            <Download className="h-4 w-4 mr-1" /> Download Guide
                          </Button>
                          <Button variant="outline" size="sm">
                            <Share2 className="h-4 w-4 mr-1" /> Share
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="border border-[#64ffda]/10 rounded-lg overflow-hidden">
                    <button
                      className="w-full flex items-center justify-between p-4 text-left"
                      onClick={() => toggleGuide("weather-placement-guide")}
                    >
                      <span className="font-medium">Optimal Placement Guidelines</span>
                      {expandedGuide === "weather-placement-guide" ? (
                        <ChevronDown className="h-5 w-5 text-[#64ffda]" />
                      ) : (
                        <ChevronRight className="h-5 w-5 text-[#64ffda]" />
                      )}
                    </button>
                    {expandedGuide === "weather-placement-guide" && (
                      <div className="p-4 border-t border-[#64ffda]/10 bg-[#0a192f]/30">
                        <h3 className="font-bold mb-2">Placement Guidelines:</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                          <li>Install in an open area away from buildings and trees</li>
                          <li>Mount temperature sensors 5-6 feet above ground</li>
                          <li>Place rain gauges away from obstructions</li>
                          <li>Mount anemometers (wind sensors) 33 feet above ground when possible</li>
                          <li>Ensure solar radiation sensors have an unobstructed view of the sky</li>
                          <li>Position the station in a location representative of your fields</li>
                        </ul>
                        <p className="text-white/80 mb-4">
                          For large farms, consider multiple weather stations to account for microclimates.
                        </p>
                        <div className="flex mt-4">
                          <Button variant="outline" size="sm" className="mr-2">
                            <Download className="h-4 w-4 mr-1" /> Download Guide
                          </Button>
                          <Button variant="outline" size="sm">
                            <Share2 className="h-4 w-4 mr-1" /> Share
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-[#112240]/70 border-[#64ffda]/10">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="w-full md:w-1/3 mb-6 md:mb-0 md:mr-6">
                    <div className="relative aspect-video rounded-lg overflow-hidden">
                      <Image
                        src="https://sjc.microlink.io/r6aj2QfrQfbNpmYj6caTl0a2faA17xybGj-M4nS-dUpQ_r9ksxZw7jfjOh91aUpoqUTqhHxfdGZA40r71oECjA.jpeg"
                        alt="Sensor Buying Guide"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <BookOpen className="h-12 w-12 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-2/3">
                    <h3 className="text-xl font-bold mb-2">Complete Sensor Buying Guide 2023</h3>
                    <p className="text-white/80 mb-4">
                      Our comprehensive guide covers everything you need to know about agricultural sensors, from soil
                      moisture monitors to weather stations and yield monitors.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-xs bg-[#0a192f] text-white/70 px-2 py-1 rounded-full">Soil Sensors</span>
                      <span className="text-xs bg-[#0a192f] text-white/70 px-2 py-1 rounded-full">
                        Weather Stations
                      </span>
                      <span className="text-xs bg-[#0a192f] text-white/70 px-2 py-1 rounded-full">Yield Monitors</span>
                      <span className="text-xs bg-[#0a192f] text-white/70 px-2 py-1 rounded-full">Installation</span>
                      <span className="text-xs bg-[#0a192f] text-white/70 px-2 py-1 rounded-full">Maintenance</span>
                    </div>
                    <Button className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f]">Download Full Guide</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="drones" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Agricultural Drones</h2>
                <p className="text-white/80 mb-4">
                  Agricultural drones provide farmers with aerial imaging capabilities for crop monitoring, pest
                  detection, and field mapping.
                </p>
                <div className="space-y-4">
                  <div className="border border-[#64ffda]/10 rounded-lg overflow-hidden">
                    <button
                      className="w-full flex items-center justify-between p-4 text-left"
                      onClick={() => toggleGuide("drone-buying-guide")}
                    >
                      <span className="font-medium">Drone Selection Guide</span>
                      {expandedGuide === "drone-buying-guide" ? (
                        <ChevronDown className="h-5 w-5 text-[#64ffda]" />
                      ) : (
                        <ChevronRight className="h-5 w-5 text-[#64ffda]" />
                      )}
                    </button>
                    {expandedGuide === "drone-buying-guide" && (
                      <div className="p-4 border-t border-[#64ffda]/10 bg-[#0a192f]/30">
                        <h3 className="font-bold mb-2">Key Factors to Consider:</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                          <li>Camera Type: RGB, multispectral, or thermal</li>
                          <li>Flight Time: Longer flight times cover more area</li>
                          <li>Range: Communication range between controller and drone</li>
                          <li>Payload Capacity: Ability to carry different sensors</li>
                          <li>Software: Flight planning and image analysis capabilities</li>
                          <li>Durability: Weather resistance and build quality</li>
                        </ul>
                        <h3 className="font-bold mb-2">Recommended Models:</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>AgroScan Pro Drone - Best for professional use</li>
                          <li>FieldView Mini Drone - Best for small to medium farms</li>
                          <li>AgroScan Elite Drone - Best for advanced imaging needs</li>
                        </ul>
                        <div className="flex mt-4">
                          <Button variant="outline" size="sm" className="mr-2">
                            <Download className="h-4 w-4 mr-1" /> Download Guide
                          </Button>
                          <Button variant="outline" size="sm">
                            <Share2 className="h-4 w-4 mr-1" /> Share
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="border border-[#64ffda]/10 rounded-lg overflow-hidden">
                    <button
                      className="w-full flex items-center justify-between p-4 text-left"
                      onClick={() => toggleGuide("drone-regulations-guide")}
                    >
                      <span className="font-medium">Regulations and Licensing</span>
                      {expandedGuide === "drone-regulations-guide" ? (
                        <ChevronDown className="h-5 w-5 text-[#64ffda]" />
                      ) : (
                        <ChevronRight className="h-5 w-5 text-[#64ffda]" />
                      )}
                    </button>
                    {expandedGuide === "drone-regulations-guide" && (
                      <div className="p-4 border-t border-[#64ffda]/10 bg-[#0a192f]/30">
                        <h3 className="font-bold mb-2">Regulatory Considerations:</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                          <li>FAA Part 107 certification for commercial drone operation</li>
                          <li>Drone registration requirements</li>
                          <li>Airspace restrictions and authorization</li>
                          <li>Visual line-of-sight requirements</li>
                          <li>Maximum altitude restrictions</li>
                          <li>Privacy considerations when flying over private property</li>
                        </ul>
                        <p className="text-white/80 mb-4">
                          Always check local regulations as they may vary by location and are subject to change.
                        </p>
                        <div className="flex mt-4">
                          <Button variant="outline" size="sm" className="mr-2">
                            <Download className="h-4 w-4 mr-1" /> Download Guide
                          </Button>
                          <Button variant="outline" size="sm">
                            <Share2 className="h-4 w-4 mr-1" /> Share
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Imaging Technology</h2>
                <p className="text-white/80 mb-4">
                  Understanding the different types of imaging technology is crucial for selecting the right drone for
                  your agricultural needs.
                </p>
                <div className="space-y-4">
                  <div className="border border-[#64ffda]/10 rounded-lg overflow-hidden">
                    <button
                      className="w-full flex items-center justify-between p-4 text-left"
                      onClick={() => toggleGuide("imaging-types-guide")}
                    >
                      <span className="font-medium">Types of Agricultural Imaging</span>
                      {expandedGuide === "imaging-types-guide" ? (
                        <ChevronDown className="h-5 w-5 text-[#64ffda]" />
                      ) : (
                        <ChevronRight className="h-5 w-5 text-[#64ffda]" />
                      )}
                    </button>
                    {expandedGuide === "imaging-types-guide" && (
                      <div className="p-4 border-t border-[#64ffda]/10 bg-[#0a192f]/30">
                        <h3 className="font-bold mb-2">Imaging Technologies:</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                          <li>
                            <strong>RGB (Visual):</strong> Standard color photography for visual inspection
                          </li>
                          <li>
                            <strong>Multispectral:</strong> Captures data across specific wavelength ranges to detect
                            plant stress
                          </li>
                          <li>
                            <strong>Thermal:</strong> Detects heat signatures for irrigation issues and pest
                            infestations
                          </li>
                          <li>
                            <strong>NDVI (Normalized Difference Vegetation Index):</strong> Measures plant health and
                            vigor
                          </li>
                          <li>
                            <strong>LiDAR:</strong> Creates detailed 3D maps of terrain and crop structure
                          </li>
                        </ul>
                        <h3 className="font-bold mb-2">Applications:</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Crop health monitoring and stress detection</li>
                          <li>Weed identification and targeted spraying</li>
                          <li>Irrigation assessment and water management</li>
                          <li>Yield estimation and harvest planning</li>
                        </ul>
                        <div className="flex mt-4">
                          <Button variant="outline" size="sm" className="mr-2">
                            <Download className="h-4 w-4 mr-1" /> Download Guide
                          </Button>
                          <Button variant="outline" size="sm">
                            <Share2 className="h-4 w-4 mr-1" /> Share
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="border border-[#64ffda]/10 rounded-lg overflow-hidden">
                    <button
                      className="w-full flex items-center justify-between p-4 text-left"
                      onClick={() => toggleGuide("data-analysis-guide")}
                    >
                      <span className="font-medium">Data Analysis and Interpretation</span>
                      {expandedGuide === "data-analysis-guide" ? (
                        <ChevronDown className="h-5 w-5 text-[#64ffda]" />
                      ) : (
                        <ChevronRight className="h-5 w-5 text-[#64ffda]" />
                      )}
                    </button>
                    {expandedGuide === "data-analysis-guide" && (
                      <div className="p-4 border-t border-[#64ffda]/10 bg-[#0a192f]/30">
                        <h3 className="font-bold mb-2">Analysis Workflow:</h3>
                        <ol className="list-decimal pl-5 space-y-2 mb-4">
                          <li>Data collection via drone flights</li>
                          <li>Image stitching and processing</li>
                          <li>Application of vegetation indices (NDVI, NDRE, etc.)</li>
                          <li>Identification of problem areas</li>
                          <li>Prescription map generation</li>
                          <li>Integration with farm management software</li>
                        </ol>
                        <p className="text-white/80 mb-4">
                          Effective data analysis requires both specialized software and agricultural knowledge to
                          interpret the results correctly.
                        </p>
                        <div className="flex mt-4">
                          <Button variant="outline" size="sm" className="mr-2">
                            <Download className="h-4 w-4 mr-1" /> Download Guide
                          </Button>
                          <Button variant="outline" size="sm">
                            <Share2 className="h-4 w-4 mr-1" /> Share
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-[#112240]/70 border-[#64ffda]/10">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="w-full md:w-1/3 mb-6 md:mb-0 md:mr-6">
                    <div className="relative aspect-video rounded-lg overflow-hidden">
                      <Image
                        src="https://sjc.microlink.io/3jUjJahqLp6BHKeCVGU1xeTR8MdumAi6dL5u7o88LvihWAQGrLQSomOarZ3QUMwuLhlwExVhrYtHDDvFcqoKEQ.jpeg"
                        alt="Drone Buying Guide"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <BookOpen className="h-12 w-12 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-2/3">
                    <h3 className="text-xl font-bold mb-2">Complete Drone Buying Guide 2023</h3>
                    <p className="text-white/80 mb-4">
                      Our comprehensive guide covers everything you need to know about agricultural drones, from
                      hardware selection to imaging technology and data analysis.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-xs bg-[#0a192f] text-white/70 px-2 py-1 rounded-full">Drone Selection</span>
                      <span className="text-xs bg-[#0a192f] text-white/70 px-2 py-1 rounded-full">
                        Imaging Technology
                      </span>
                      <span className="text-xs bg-[#0a192f] text-white/70 px-2 py-1 rounded-full">Regulations</span>
                      <span className="text-xs bg-[#0a192f] text-white/70 px-2 py-1 rounded-full">Data Analysis</span>
                      <span className="text-xs bg-[#0a192f] text-white/70 px-2 py-1 rounded-full">Best Practices</span>
                    </div>
                    <Button className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f]">Download Full Guide</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="irrigation" className="space-y-6">
            {/* Irrigation content similar to above */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Smart Irrigation Controllers</h2>
                <p className="text-white/80 mb-4">
                  Smart irrigation controllers optimize water usage by automatically adjusting watering schedules based
                  on weather conditions and soil moisture levels.
                </p>
                <div className="space-y-4">
                  <div className="border border-[#64ffda]/10 rounded-lg overflow-hidden">
                    <button
                      className="w-full flex items-center justify-between p-4 text-left"
                      onClick={() => toggleGuide("irrigation-controller-guide")}
                    >
                      <span className="font-medium">Choosing an Irrigation Controller</span>
                      {expandedGuide === "irrigation-controller-guide" ? (
                        <ChevronDown className="h-5 w-5 text-[#64ffda]" />
                      ) : (
                        <ChevronRight className="h-5 w-5 text-[#64ffda]" />
                      )}
                    </button>
                    {expandedGuide === "irrigation-controller-guide" && (
                      <div className="p-4 border-t border-[#64ffda]/10 bg-[#0a192f]/30">
                        <h3 className="font-bold mb-2">Key Factors to Consider:</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                          <li>Number of Zones: Match to your irrigation system</li>
                          <li>Weather Integration: Local or cloud-based weather data</li>
                          <li>Sensor Compatibility: Soil moisture, flow, rain sensors</li>
                          <li>Remote Access: Mobile app or web interface</li>
                          <li>Smart Home Integration: Works with other systems</li>
                          <li>Water Usage Reports: Track consumption and savings</li>
                        </ul>
                        <h3 className="font-bold mb-2">Recommended Models:</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>SmartFlow Irrigation Controller - Best overall</li>
                          <li>SmartFlow Pro Irrigation System - Best for large operations</li>
                          <li>AquaSense Irrigation Sensors - Best companion sensors</li>
                        </ul>
                        <div className="flex mt-4">
                          <Button variant="outline" size="sm" className="mr-2">
                            <Download className="h-4 w-4 mr-1" /> Download Guide
                          </Button>
                          <Button variant="outline" size="sm">
                            <Share2 className="h-4 w-4 mr-1" /> Share
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Water Conservation Strategies</h2>
                <p className="text-white/80 mb-4">
                  Implementing effective water conservation strategies can significantly reduce water usage while
                  maintaining or improving crop yields.
                </p>
                <div className="space-y-4">
                  <div className="border border-[#64ffda]/10 rounded-lg overflow-hidden">
                    <button
                      className="w-full flex items-center justify-between p-4 text-left"
                      onClick={() => toggleGuide("water-conservation-guide")}
                    >
                      <span className="font-medium">Water Conservation Best Practices</span>
                      {expandedGuide === "water-conservation-guide" ? (
                        <ChevronDown className="h-5 w-5 text-[#64ffda]" />
                      ) : (
                        <ChevronRight className="h-5 w-5 text-[#64ffda]" />
                      )}
                    </button>
                    {expandedGuide === "water-conservation-guide" && (
                      <div className="p-4 border-t border-[#64ffda]/10 bg-[#0a192f]/30">
                        <h3 className="font-bold mb-2">Conservation Strategies:</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                          <li>Implement soil moisture-based irrigation scheduling</li>
                          <li>Use drip irrigation for targeted water delivery</li>
                          <li>Schedule irrigation during early morning or evening</li>
                          <li>Utilize deficit irrigation techniques when appropriate</li>
                          <li>Maintain and regularly inspect irrigation systems</li>
                          <li>Incorporate cover crops to improve soil water retention</li>
                        </ul>
                        <p className="text-white/80 mb-4">
                          Smart irrigation technology can reduce water usage by 20-50% compared to traditional methods.
                        </p>
                        <div className="flex mt-4">
                          <Button variant="outline" size="sm" className="mr-2">
                            <Download className="h-4 w-4 mr-1" /> Download Guide
                          </Button>
                          <Button variant="outline" size="sm">
                            <Share2 className="h-4 w-4 mr-1" /> Share
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-[#112240]/70 border-[#64ffda]/10">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="w-full md:w-1/3 mb-6 md:mb-0 md:mr-6">
                    <div className="relative aspect-video rounded-lg overflow-hidden">
                      <Image
                        src="https://sjc.microlink.io/ikZ9osocXoTKsUGCmopyBc-dtqsDABfNZhYZpN6GjkbBC4lvlO1hJxnDZOmCkDkog0TQ82B5Y-gCoQUnL-wcwQ.jpeg"
                        alt="Irrigation Guide"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <BookOpen className="h-12 w-12 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-2/3">
                    <h3 className="text-xl font-bold mb-2">Complete Irrigation Guide 2023</h3>
                    <p className="text-white/80 mb-4">
                      Our comprehensive guide covers everything you need to know about smart irrigation, from controller
                      selection to water conservation strategies and system design.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-xs bg-[#0a192f] text-white/70 px-2 py-1 rounded-full">Controllers</span>
                      <span className="text-xs bg-[#0a192f] text-white/70 px-2 py-1 rounded-full">Sensors</span>
                      <span className="text-xs bg-[#0a192f] text-white/70 px-2 py-1 rounded-full">
                        Water Conservation
                      </span>
                      <span className="text-xs bg-[#0a192f] text-white/70 px-2 py-1 rounded-full">System Design</span>
                      <span className="text-xs bg-[#0a192f] text-white/70 px-2 py-1 rounded-full">ROI Analysis</span>
                    </div>
                    <Button className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f]">Download Full Guide</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tractors" className="space-y-6">
            {/* Tractors content similar to above */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Smart Tractors & Equipment</h2>
                <p className="text-white/80 mb-4">
                  Smart tractors and equipment leverage GPS, sensors, and automation to improve efficiency, precision,
                  and productivity in farming operations.
                </p>
                <div className="space-y-4">
                  <div className="border border-[#64ffda]/10 rounded-lg overflow-hidden">
                    <button
                      className="w-full flex items-center justify-between p-4 text-left"
                      onClick={() => toggleGuide("smart-tractor-guide")}
                    >
                      <span className="font-medium">Smart Tractor Technology Guide</span>
                      {expandedGuide === "smart-tractor-guide" ? (
                        <ChevronDown className="h-5 w-5 text-[#64ffda]" />
                      ) : (
                        <ChevronRight className="h-5 w-5 text-[#64ffda]" />
                      )}
                    </button>
                    {expandedGuide === "smart-tractor-guide" && (
                      <div className="p-4 border-t border-[#64ffda]/10 bg-[#0a192f]/30">
                        <h3 className="font-bold mb-2">Key Technologies:</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                          <li>GPS Guidance Systems: Precision steering and field navigation</li>
                          <li>Auto-Steering: Hands-free operation with centimeter accuracy</li>
                          <li>Variable Rate Technology: Optimized input application</li>
                          <li>Telematics: Remote monitoring and diagnostics</li>
                          <li>Section Control: Automatic implement section management</li>
                          <li>Data Management: Field mapping and operation tracking</li>
                        </ul>
                        <h3 className="font-bold mb-2">Benefits:</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Reduced input costs through precision application</li>
                          <li>Decreased operator fatigue and extended working hours</li>
                          <li>Minimized overlap and skips for improved efficiency</li>
                          <li>Enhanced data collection for informed decision-making</li>
                        </ul>
                        <div className="flex mt-4">
                          <Button variant="outline" size="sm" className="mr-2">
                            <Download className="h-4 w-4 mr-1" /> Download Guide
                          </Button>
                          <Button variant="outline" size="sm">
                            <Share2 className="h-4 w-4 mr-1" /> Share
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Yield Monitoring Systems</h2>
                <p className="text-white/80 mb-4">
                  Yield monitoring systems provide real-time data on crop performance, helping farmers identify field
                  variability and optimize management practices.
                </p>
                <div className="space-y-4">
                  <div className="border border-[#64ffda]/10 rounded-lg overflow-hidden">
                    <button
                      className="w-full flex items-center justify-between p-4 text-left"
                      onClick={() => toggleGuide("yield-monitor-guide")}
                    >
                      <span className="font-medium">Yield Monitor Selection Guide</span>
                      {expandedGuide === "yield-monitor-guide" ? (
                        <ChevronDown className="h-5 w-5 text-[#64ffda]" />
                      ) : (
                        <ChevronRight className="h-5 w-5 text-[#64ffda]" />
                      )}
                    </button>
                    {expandedGuide === "yield-monitor-guide" && (
                      <div className="p-4 border-t border-[#64ffda]/10 bg-[#0a192f]/30">
                        <h3 className="font-bold mb-2">Key Factors to Consider:</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                          <li>Compatibility: Match to your harvesting equipment</li>
                          <li>Accuracy: Sensor quality and calibration capabilities</li>
                          <li>Data Management: Software for analysis and mapping</li>
                          <li>Integration: Works with farm management systems</li>
                          <li>Additional Sensors: Moisture, protein, oil content</li>
                          <li>Support: Training and technical assistance</li>
                        </ul>
                        <h3 className="font-bold mb-2">Recommended Models:</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>HarvestTrack GPS Yield Monitor - Best overall</li>
                          <li>HarvestTrack Enterprise - Best for large operations</li>
                        </ul>
                        <div className="flex mt-4">
                          <Button variant="outline" size="sm" className="mr-2">
                            <Download className="h-4 w-4 mr-1" /> Download Guide
                          </Button>
                          <Button variant="outline" size="sm">
                            <Share2 className="h-4 w-4 mr-1" /> Share
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-[#112240]/70 border-[#64ffda]/10">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="w-full md:w-1/3 mb-6 md:mb-0 md:mr-6">
                    <div className="relative aspect-video rounded-lg overflow-hidden">
                      <Image
                        src="https://th.bing.com/th/id/OIP.dZ724Qht1YnbOyXRyOak0QAAAA?rs=1&pid=ImgDetMain"
                        alt="Smart Equipment Guide"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <BookOpen className="h-12 w-12 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-2/3">
                    <h3 className="text-xl font-bold mb-2">Complete Smart Equipment Guide 2023</h3>
                    <p className="text-white/80 mb-4">
                      Our comprehensive guide covers everything you need to know about smart tractors and equipment,
                      from GPS guidance to yield monitoring and precision agriculture.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-xs bg-[#0a192f] text-white/70 px-2 py-1 rounded-full">GPS Guidance</span>
                      <span className="text-xs bg-[#0a192f] text-white/70 px-2 py-1 rounded-full">Auto-Steering</span>
                      <span className="text-xs bg-[#0a192f] text-white/70 px-2 py-1 rounded-full">
                        Yield Monitoring
                      </span>
                      <span className="text-xs bg-[#0a192f] text-white/70 px-2 py-1 rounded-full">Variable Rate</span>
                      <span className="text-xs bg-[#0a192f] text-white/70 px-2 py-1 rounded-full">ROI Analysis</span>
                    </div>
                    <Button className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f]">Download Full Guide</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-4">Need Personalized Advice?</h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Our agricultural technology experts are available to help you choose the right hardware for your specific
            farming needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f]">Schedule a Consultation</Button>
            <Button variant="outline" className="border-[#64ffda]/20 hover:bg-[#64ffda]/10 text-white">
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

