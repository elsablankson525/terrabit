"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Download, Share2, AlertTriangle, Calendar } from 'lucide-react'
import Link from "next/link"

export default function SoilHealthPage() {
  const [selectedField, setSelectedField] = useState("North Field")
  const [showFields, setShowFields] = useState(false)
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownloadReport = () => {
    setIsDownloading(true)
    
    // Simulate download delay
    setTimeout(() => {
      setIsDownloading(false)
      alert("Soil Health Analysis report has been downloaded successfully!")
    }, 1500)
  }

  const handleShareAnalysis = () => {
    alert(`Analysis for ${selectedField} has been shared successfully!`)
  }

  const handleScheduleTest = () => {
    alert("Soil test has been scheduled successfully! Our team will contact you shortly.")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a192f] to-[#112240] text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8 flex items-center gap-4">
          <Link href="/dashboard">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">Soil Health Analysis</h1>
        </div>

        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div>
              <label className="text-sm text-white/70 block mb-1">Select Field</label>
              <select
                className="bg-[#0a192f]/50 border border-[#64ffda]/20 rounded-md p-2 text-white"
                value={selectedField}
                onChange={(e) => setSelectedField(e.target.value)}
              >
                <option>North Field</option>
                <option>South Field</option>
                <option>East Field</option>
                <option>West Field</option>
                <option>Central Field</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-white/70 block mb-1">Last Sample Date</label>
              <div className="flex items-center gap-2 bg-[#0a192f]/50 border border-[#64ffda]/20 rounded-md p-2 text-white">
                <Calendar className="h-4 w-4 text-[#64ffda]" />
                <span>September 15, 2023</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              className="border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10"
              onClick={() => setShowFields(!showFields)}
            >
              My Fields
            </Button>
            <Button 
              className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f]"
              onClick={handleScheduleTest}
            >
              Schedule Soil Test
            </Button>
          </div>
        </div>

        {showFields && (
          <Card className="bg-[#112240]/70 border-[#64ffda]/10 mb-8">
            <CardHeader>
              <CardTitle className="text-white">My Fields</CardTitle>
              <CardDescription className="text-white/70">Select a field to view soil health analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {["North Field", "South Field", "East Field", "West Field", "Central Field"].map((field) => (
                  <div 
                    key={field}
                    className={`p-4 rounded-lg border cursor-pointer transition-all ${
                      selectedField === field 
                        ? "border-[#64ffda] bg-[#64ffda]/10" 
                        : "border-[#64ffda]/20 hover:border-[#64ffda]/50"
                    }`}
                    onClick={() => setSelectedField(field)}
                  >
                    <h3 className="font-medium text-white">{field}</h3>
                    <p className="text-sm text-white/70">Last sampled: Sep 15, 2023</p>
                    <div className="mt-2 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      <span className="text-xs text-green-400">Good health</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-[#112240]/70 border-[#64ffda]/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-lg">Soil pH</CardTitle>
              <CardDescription className="text-white/70">Current reading</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-end gap-2">
                <div className="text-4xl font-bold text-[#64ffda]">6.4</div>
                <div className="text-green-400 text-sm pb-1">Optimal (6.0-7.0)</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#112240]/70 border-[#64ffda]/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-lg">Organic Matter</CardTitle>
              <CardDescription className="text-white/70">Percentage</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-end gap-2">
                <div className="text-4xl font-bold text-[#64ffda]">3.2%</div>
                <div className="text-yellow-400 text-sm pb-1">Slightly Low (Target: 4-5%)</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#112240]/70 border-[#64ffda]/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-lg">Overall Health Score</CardTitle>
              <CardDescription className="text-white/70">Based on all metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-end gap-2">
                <div className="text-4xl font-bold text-[#64ffda]">78/100</div>
                <div className="text-green-400 text-sm pb-1">Good</div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-[#112240]/70 border-[#64ffda]/10 mb-8">
          <CardHeader>
            <CardTitle className="text-white">Soil Health Recommendations</CardTitle>
            <CardDescription className="text-white/70">Based on your latest soil sample</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 border border-yellow-500/20 bg-yellow-500/10 rounded-md">
                <h3 className="font-bold text-yellow-400 mb-2 flex items-center">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Nitrogen Deficiency
                </h3>
                <p className="text-white/80">
                  Your soil is slightly low in nitrogen. Consider applying 40-50 lbs/acre of nitrogen fertilizer before
                  planting.
                </p>
              </div>

              <div className="p-4 border border-[#64ffda]/20 bg-[#64ffda]/5 rounded-md">
                <h3 className="font-bold text-[#64ffda] mb-2">Organic Matter Improvement</h3>
                <p className="text-white/80">
                  To increase organic matter content, consider adding compost or implementing cover crops in your
                  rotation. Target is to reach 4-5% organic matter over the next 2-3 growing seasons.
                </p>
              </div>

              <div className="p-4 border border-green-500/20 bg-green-500/10 rounded-md">
                <h3 className="font-bold text-green-400 mb-2">Optimal pH Level</h3>
                <p className="text-white/80">
                  Your soil pH is in the optimal range for most crops. Continue monitoring but no adjustment needed at
                  this time.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-between items-center">
          <Button 
            variant="outline" 
            className="border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10"
            onClick={handleDownloadReport}
            disabled={isDownloading}
          >
            {isDownloading ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Downloading...
              </span>
            ) : (
              <>
                <Download className="h-4 w-4 mr-2" />
                Download Full Report
              </>
            )}
          </Button>

          <div className="flex gap-2">
            <Button 
              variant="outline" 
              className="border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10"
              onClick={handleShareAnalysis}
            >
              <Share2 className="h-4 w-4 mr-2" />
              Share Analysis
            </Button>
            <Button 
              className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f]"
              onClick={handleScheduleTest}
            >
              Schedule Soil Test
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

