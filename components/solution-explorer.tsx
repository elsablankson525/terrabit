"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Layers, BarChart, Cloud, Droplets, Leaf, Sun } from "lucide-react"
import Link from "next/link"

interface SolutionExplorerProps {
  solution: "field-monitoring" | "crop-analysis" | "weather-insights"
  className?: string
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
  children?: React.ReactNode
}

export function SolutionExplorer({ solution, className, variant = "link", children }: SolutionExplorerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")

  const solutions = {
    "field-monitoring": {
      title: "Field Monitoring",
      description: "Real-time monitoring of your fields with advanced sensors and satellite imagery.",
      icon: <Layers className="h-5 w-5 text-[#64ffda]" />,
      overview: {
        description:
          "Our field monitoring solution provides comprehensive insights into your field conditions, helping you make data-driven decisions for optimal crop management.",
        benefits: [
          "Real-time field data at your fingertips",
          "Early detection of issues before they impact yield",
          "Historical data analysis for better planning",
          "Integration with other TerraBit solutions",
        ],
        image: "/placeholder.svg?height=300&width=500",
      },
      features: [
        {
          title: "Satellite Imagery",
          description: "High-resolution satellite imagery updated every 3-5 days, providing comprehensive field views.",
          icon: <Layers className="h-10 w-10 text-[#64ffda]" />,
        },
        {
          title: "Soil Moisture Tracking",
          description: "Continuous monitoring of soil moisture levels to optimize irrigation and prevent water stress.",
          icon: <Droplets className="h-10 w-10 text-[#64ffda]" />,
        },
        {
          title: "Crop Health Indicators",
          description: "Advanced vegetation indices to assess crop health and identify problem areas quickly.",
          icon: <Leaf className="h-10 w-10 text-[#64ffda]" />,
        },
      ],
      caseStudies: [
        {
          title: "Midwest Corn Farm",
          description:
            "Increased yield by 15% through early detection of nutrient deficiencies using TerraBit's field monitoring.",
          location: "Iowa, USA",
          result: "15% yield increase",
        },
        {
          title: "Coffee Plantation",
          description:
            "Reduced water usage by 30% while maintaining crop quality through precise soil moisture monitoring.",
          location: "Kenya",
          result: "30% water savings",
        },
      ],
    },
    "crop-analysis": {
      title: "Crop Analysis",
      description: "Advanced analytics to help you understand crop performance and optimize yield potential.",
      icon: <BarChart className="h-5 w-5 text-[#64ffda]" />,
      overview: {
        description:
          "Our crop analysis solution uses advanced algorithms to analyze crop performance, predict yields, and identify optimization opportunities throughout the growing season.",
        benefits: [
          "Accurate yield predictions weeks before harvest",
          "Early detection of diseases and pests",
          "Optimization of inputs based on crop needs",
          "Detailed growth stage tracking",
        ],
        image: "/placeholder.svg?height=300&width=500",
      },
      features: [
        {
          title: "Yield Prediction Models",
          description: "AI-powered yield forecasting that gets more accurate as the season progresses.",
          icon: <BarChart className="h-10 w-10 text-[#64ffda]" />,
        },
        {
          title: "Disease & Pest Detection",
          description: "Early identification of potential threats through image recognition and pattern analysis.",
          icon: <Leaf className="h-10 w-10 text-[#64ffda]" />,
        },
        {
          title: "Growth Stage Tracking",
          description: "Automated monitoring of crop development stages to optimize timing of field operations.",
          icon: <Sun className="h-10 w-10 text-[#64ffda]" />,
        },
      ],
      caseStudies: [
        {
          title: "Large Wheat Operation",
          description: "Saved $45,000 in fungicide costs through targeted application based on disease risk analysis.",
          location: "Saskatchewan, Canada",
          result: "$45,000 cost savings",
        },
        {
          title: "Rice Cooperative",
          description:
            "Increased overall production by 22% through optimized fertilizer application based on growth stage analysis.",
          location: "Vietnam",
          result: "22% production increase",
        },
      ],
    },
    "weather-insights": {
      title: "Weather Insights",
      description: "Hyperlocal weather forecasting and historical analysis to help you plan operations.",
      icon: <Cloud className="h-5 w-5 text-[#64ffda]" />,
      overview: {
        description:
          "Our weather insights solution provides field-level weather forecasting and analysis, helping you make informed decisions about planting, spraying, harvesting, and other weather-dependent operations.",
        benefits: [
          "Hyperlocal forecasts for each of your fields",
          "Historical weather data analysis",
          "Weather-based recommendations for field operations",
          "Severe weather alerts and notifications",
        ],
        image: "/placeholder.svg?height=300&width=500",
      },
      features: [
        {
          title: "Field-level Forecasts",
          description: "Hyperlocal 10-day forecasts customized for each of your fields, updated hourly.",
          icon: <Cloud className="h-10 w-10 text-[#64ffda]" />,
        },
        {
          title: "Precipitation Tracking",
          description: "Detailed rainfall monitoring and forecasting to optimize irrigation and field operations.",
          icon: <Droplets className="h-10 w-10 text-[#64ffda]" />,
        },
        {
          title: "Growing Degree Days",
          description:
            "Calculation and tracking of GDD to predict crop development stages and optimize timing of operations.",
          icon: <Sun className="h-10 w-10 text-[#64ffda]" />,
        },
      ],
      caseStudies: [
        {
          title: "Vineyard Estate",
          description:
            "Prevented frost damage worth $120,000 through early warning system and targeted protection measures.",
          location: "Bordeaux, France",
          result: "$120,000 saved from frost damage",
        },
        {
          title: "Cotton Farm",
          description:
            "Optimized harvest timing based on precipitation forecasts, resulting in 8% quality improvement.",
          location: "Texas, USA",
          result: "8% quality improvement",
        },
      ],
    },
  }

  const currentSolution = solutions[solution]

  return (
    <>
      <Button variant={variant} className={className} onClick={() => setIsOpen(true)}>
        {children || (
          <div className="flex items-center gap-2">
            {currentSolution.icon}
            <span>{currentSolution.title}</span>
          </div>
        )}
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-[#112240] border-[#64ffda]/10 text-white sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-xl">
              {currentSolution.icon}
              <span>{currentSolution.title}</span>
            </DialogTitle>
            <DialogDescription className="text-white/70">{currentSolution.description}</DialogDescription>
          </DialogHeader>

          <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-3 mb-4 bg-[#0a192f]/50">
              <TabsTrigger
                value="overview"
                className="data-[state=active]:bg-[#64ffda] data-[state=active]:text-[#0a192f]"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="features"
                className="data-[state=active]:bg-[#64ffda] data-[state=active]:text-[#0a192f]"
              >
                Features
              </TabsTrigger>
              <TabsTrigger
                value="case-studies"
                className="data-[state=active]:bg-[#64ffda] data-[state=active]:text-[#0a192f]"
              >
                Case Studies
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-white/80 mb-4">{currentSolution.overview.description}</p>

                  <h3 className="text-[#64ffda] font-medium mb-2">Key Benefits</h3>
                  <ul className="space-y-2">
                    {currentSolution.overview.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#64ffda] mr-2">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <img
                    src={currentSolution.overview.image || "/placeholder.svg"}
                    alt={currentSolution.title}
                    className="rounded-md w-full h-auto"
                  />
                </div>
              </div>

              <div className="pt-4 flex justify-between">
                <Button
                  variant="outline"
                  className="border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10"
                  onClick={() => setActiveTab("features")}
                >
                  Explore Features <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <Button className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f]" asChild>
                  <Link href={`/solutions/${solution}`}>View Full Solution</Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="features" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {currentSolution.features.map((feature, index) => (
                  <Card key={index} className="bg-[#0a192f]/50 border-[#64ffda]/10">
                    <CardHeader>
                      <div className="mb-2">{feature.icon}</div>
                      <CardTitle className="text-white">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-white/70">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="pt-4 flex justify-between">
                <Button
                  variant="outline"
                  className="border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10"
                  onClick={() => setActiveTab("case-studies")}
                >
                  View Case Studies <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <Button className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f]" asChild>
                  <Link href={`/solutions/${solution}`}>View Full Solution</Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="case-studies" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentSolution.caseStudies.map((caseStudy, index) => (
                  <Card key={index} className="bg-[#0a192f]/50 border-[#64ffda]/10">
                    <CardHeader>
                      <CardTitle className="text-white">{caseStudy.title}</CardTitle>
                      <CardDescription className="text-white/70">{caseStudy.location}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-white/80">{caseStudy.description}</p>
                    </CardContent>
                    <CardFooter>
                      <div className="text-[#64ffda] font-medium">Result: {caseStudy.result}</div>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              <div className="pt-4 flex justify-between">
                <Button
                  variant="outline"
                  className="border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10"
                  onClick={() => setActiveTab("overview")}
                >
                  Back to Overview
                </Button>

                <Button className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f]" asChild>
                  <Link href={`/solutions/${solution}`}>View Full Solution</Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </>
  )
}

