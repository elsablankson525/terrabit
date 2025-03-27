"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Download, Share2, Cloud, CloudRain, Sun, Thermometer } from "lucide-react"
import Link from "next/link"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  Bar,
  BarChart as RechartsBarChart,
  Line,
  LineChart as RechartsLineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts"

// Sample data for weather impact analysis
const temperatureData = [
  { month: "Jan", temp: 28, avg: 30 },
  { month: "Feb", temp: 32, avg: 32 },
  { month: "Mar", temp: 45, avg: 42 },
  { month: "Apr", temp: 55, avg: 52 },
  { month: "May", temp: 65, avg: 62 },
  { month: "Jun", temp: 75, avg: 72 },
  { month: "Jul", temp: 82, avg: 78 },
  { month: "Aug", temp: 80, avg: 76 },
  { month: "Sep", temp: 70, avg: 68 },
]

const rainfallData = [
  { month: "Jan", rainfall: 2.1, avg: 2.5 },
  { month: "Feb", rainfall: 2.3, avg: 2.2 },
  { month: "Mar", rainfall: 3.2, avg: 2.8 },
  { month: "Apr", rainfall: 3.8, avg: 3.5 },
  { month: "May", rainfall: 4.5, avg: 4.0 },
  { month: "Jun", rainfall: 3.2, avg: 3.8 },
  { month: "Jul", rainfall: 2.8, avg: 3.5 },
  { month: "Aug", rainfall: 2.5, avg: 3.2 },
  { month: "Sep", rainfall: 3.0, avg: 3.0 },
]

const growingDegreeData = [
  { month: "Apr", gdd: 120, optimal: 100 },
  { month: "May", gdd: 320, optimal: 300 },
  { month: "Jun", gdd: 580, optimal: 550 },
  { month: "Jul", gdd: 880, optimal: 850 },
  { month: "Aug", gdd: 1150, optimal: 1100 },
  { month: "Sep", gdd: 1320, optimal: 1300 },
]

export default function WeatherImpactPage() {
  const [timeframe, setTimeframe] = useState("season")

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
          <h1 className="text-3xl font-bold">Weather Impact Analysis</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-[#112240]/70 border-[#64ffda]/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-lg flex items-center">
                <Thermometer className="h-4 w-4 mr-2 text-[#64ffda]" />
                Current Temperature
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-end gap-2">
                <div className="text-4xl font-bold text-[#64ffda]">72°F</div>
                <div className="text-green-400 text-sm pb-1">+2° from avg</div>
              </div>
              <p className="text-white/70 text-sm mt-1">Last updated: Today, 10:30 AM</p>
            </CardContent>
          </Card>

          <Card className="bg-[#112240]/70 border-[#64ffda]/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-lg flex items-center">
                <CloudRain className="h-4 w-4 mr-2 text-[#64ffda]" />
                Rainfall (Last 7 Days)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-end gap-2">
                <div className="text-4xl font-bold text-[#64ffda]">1.2"</div>
                <div className="text-yellow-400 text-sm pb-1">-0.3" from avg</div>
              </div>
              <p className="text-white/70 text-sm mt-1">Slightly below average</p>
            </CardContent>
          </Card>

          <Card className="bg-[#112240]/70 border-[#64ffda]/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-lg flex items-center">
                <Sun className="h-4 w-4 mr-2 text-[#64ffda]" />
                Growing Degree Days
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-end gap-2">
                <div className="text-4xl font-bold text-[#64ffda]">1,320</div>
                <div className="text-green-400 text-sm pb-1">On track</div>
              </div>
              <p className="text-white/70 text-sm mt-1">Season to date</p>
            </CardContent>
          </Card>

          <Card className="bg-[#112240]/70 border-[#64ffda]/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-lg flex items-center">
                <Cloud className="h-4 w-4 mr-2 text-[#64ffda]" />
                7-Day Forecast
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-center">
                  <div className="text-xs">Mon</div>
                  <Sun className="h-5 w-5 mx-auto text-yellow-400" />
                  <div className="text-sm">75°</div>
                </div>
                <div className="text-center">
                  <div className="text-xs">Tue</div>
                  <Sun className="h-5 w-5 mx-auto text-yellow-400" />
                  <div className="text-sm">78°</div>
                </div>
                <div className="text-center">
                  <div className="text-xs">Wed</div>
                  <Cloud className="h-5 w-5 mx-auto text-gray-400" />
                  <div className="text-sm">72°</div>
                </div>
                <div className="text-center">
                  <div className="text-xs">Thu</div>
                  <CloudRain className="h-5 w-5 mx-auto text-blue-400" />
                  <div className="text-sm">68°</div>
                </div>
                <div className="text-center">
                  <div className="text-xs">Fri</div>
                  <CloudRain className="h-5 w-5 mx-auto text-blue-400" />
                  <div className="text-sm">65°</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card className="bg-[#112240]/70 border-[#64ffda]/10">
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="text-white">Temperature Trends</CardTitle>
                  <CardDescription className="text-white/70">Current vs. Historical Average (°F)</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ChartContainer
                  config={{
                    temp: {
                      label: "This Year",
                      color: "hsl(var(--chart-1))",
                    },
                    avg: {
                      label: "Historical Average",
                      color: "hsl(var(--chart-2))",
                    },
                  }}
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsLineChart data={temperatureData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                      <XAxis dataKey="month" stroke="rgba(255,255,255,0.5)" />
                      <YAxis stroke="rgba(255,255,255,0.5)" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="temp"
                        stroke="var(--color-temp)"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        name="This Year"
                      />
                      <Line
                        type="monotone"
                        dataKey="avg"
                        stroke="var(--color-avg)"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        name="Historical Average"
                      />
                    </RechartsLineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#112240]/70 border-[#64ffda]/10">
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="text-white">Rainfall Analysis</CardTitle>
                  <CardDescription className="text-white/70">Current vs. Historical Average (inches)</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ChartContainer
                  config={{
                    rainfall: {
                      label: "This Year",
                      color: "hsl(var(--chart-1))",
                    },
                    avg: {
                      label: "Historical Average",
                      color: "hsl(var(--chart-2))",
                    },
                  }}
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsBarChart data={rainfallData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                      <XAxis dataKey="month" stroke="rgba(255,255,255,0.5)" />
                      <YAxis stroke="rgba(255,255,255,0.5)" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Bar dataKey="rainfall" fill="var(--color-rainfall)" name="This Year" />
                      <Bar dataKey="avg" fill="var(--color-avg)" name="Historical Average" />
                    </RechartsBarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-[#112240]/70 border-[#64ffda]/10 mb-8">
          <CardHeader>
            <CardTitle className="text-white">Growing Degree Days (GDD)</CardTitle>
            <CardDescription className="text-white/70">
              Accumulated GDD vs. Optimal for Crop Development
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ChartContainer
                config={{
                  gdd: {
                    label: "Accumulated GDD",
                    color: "hsl(var(--chart-1))",
                  },
                  optimal: {
                    label: "Optimal GDD",
                    color: "hsl(var(--chart-2))",
                  },
                }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsLineChart data={growingDegreeData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="month" stroke="rgba(255,255,255,0.5)" />
                    <YAxis stroke="rgba(255,255,255,0.5)" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="gdd"
                      stroke="var(--color-gdd)"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                      name="Accumulated GDD"
                    />
                    <Line
                      type="monotone"
                      dataKey="optimal"
                      stroke="var(--color-optimal)"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                      name="Optimal GDD"
                    />
                  </RechartsLineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>

            <div className="mt-4 p-4 border border-[#64ffda]/20 bg-[#64ffda]/5 rounded-md">
              <h3 className="font-bold text-[#64ffda] mb-2">Crop Development Stage</h3>
              <p className="text-white/80">
                Based on accumulated GDD, your corn crop is currently in the R5 (Dent) stage. Expect physiological
                maturity in approximately 10-14 days with current temperature trends.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#112240]/70 border-[#64ffda]/10 mb-8">
          <CardHeader>
            <CardTitle className="text-white">Weather Impact Insights</CardTitle>
            <CardDescription className="text-white/70">
              AI-generated recommendations based on weather patterns
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 border border-yellow-500/20 bg-yellow-500/10 rounded-md">
                <h3 className="font-bold text-yellow-400 mb-2">Rainfall Deficit Alert</h3>
                <p className="text-white/80">
                  Current rainfall is 8% below average for this time of year. Consider supplemental irrigation for
                  optimal crop development, especially for the South and East fields.
                </p>
              </div>

              <div className="p-4 border border-green-500/20 bg-green-500/10 rounded-md">
                <h3 className="font-bold text-green-400 mb-2">Optimal Planting Window</h3>
                <p className="text-white/80">
                  Based on soil temperature and moisture trends, the optimal planting window for winter wheat will begin
                  in approximately 12 days. Prepare equipment and inputs accordingly.
                </p>
              </div>

              <div className="p-4 border border-[#64ffda]/20 bg-[#64ffda]/5 rounded-md">
                <h3 className="font-bold text-[#64ffda] mb-2">Pest Pressure Forecast</h3>
                <p className="text-white/80">
                  Current temperature and humidity conditions indicate increased risk for corn earworm development.
                  Consider scouting fields twice weekly and prepare for potential treatment if thresholds are reached.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-between items-center">
          <Button variant="outline" className="border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10">
            <Download className="h-4 w-4 mr-2" />
            Download Weather Report
          </Button>

          <div className="flex gap-2">
            <Button variant="outline" className="border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10">
              <Share2 className="h-4 w-4 mr-2" />
              Share Analysis
            </Button>
            <Button className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f]">Set Weather Alerts</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

