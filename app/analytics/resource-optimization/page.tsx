"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Download, Share2, Droplet, Leaf, Zap, AlertTriangle } from "lucide-react"
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

// Sample data for resource optimization
const waterUsageData = [
  { month: "Apr", usage: 1.2, optimal: 1.5, unit: "in/acre" },
  { month: "May", usage: 2.5, optimal: 2.2, unit: "in/acre" },
  { month: "Jun", usage: 3.8, optimal: 3.5, unit: "in/acre" },
  { month: "Jul", usage: 4.2, optimal: 4.0, unit: "in/acre" },
  { month: "Aug", usage: 3.5, optimal: 3.2, unit: "in/acre" },
  { month: "Sep", usage: 2.0, optimal: 1.8, unit: "in/acre" },
]

const fertilizerData = [
  { type: "Nitrogen (N)", applied: 180, recommended: 160, unit: "lbs/acre" },
  { type: "Phosphorus (P)", applied: 60, recommended: 70, unit: "lbs/acre" },
  { type: "Potassium (K)", applied: 80, recommended: 90, unit: "lbs/acre" },
  { type: "Sulfur (S)", applied: 20, recommended: 25, unit: "lbs/acre" },
]

const costSavingsData = [
  { category: "Water", current: 75, potential: 60 },
  { category: "Fertilizer", current: 120, potential: 95 },
  { category: "Pesticides", current: 45, potential: 35 },
  { category: "Energy", current: 60, potential: 50 },
]

const COLORS = ["#64ffda", "#0a192f", "#112240", "#8884d8"]

export default function ResourceOptimizationPage() {
  const [selectedField, setSelectedField] = useState("All Fields")

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
          <h1 className="text-3xl font-bold">Resource Optimization</h1>
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
                <option>All Fields</option>
                <option>North Field</option>
                <option>South Field</option>
                <option>East Field</option>
                <option>West Field</option>
                <option>Central Field</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-white/70 block mb-1">Growing Season</label>
              <select className="bg-[#0a192f]/50 border border-[#64ffda]/20 rounded-md p-2 text-white">
                <option>2023</option>
                <option>2022</option>
                <option>2021</option>
              </select>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10">
              <Download className="h-4 w-4 mr-2" />
              Export Data
            </Button>
            <Button className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f]">Generate Recommendations</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-[#112240]/70 border-[#64ffda]/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-lg flex items-center">
                <Droplet className="h-4 w-4 mr-2 text-[#64ffda]" />
                Water Efficiency
              </CardTitle>
              <CardDescription className="text-white/70">Current vs. Optimal</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-end gap-2">
                <div className="text-4xl font-bold text-[#64ffda]">85%</div>
                <div className="text-yellow-400 text-sm pb-1">15% savings potential</div>
              </div>
              <div className="w-full bg-[#0a192f]/50 rounded-full h-2.5 mt-2">
                <div className="bg-[#64ffda] h-2.5 rounded-full" style={{ width: "85%" }}></div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#112240]/70 border-[#64ffda]/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-lg flex items-center">
                <Leaf className="h-4 w-4 mr-2 text-[#64ffda]" />
                Fertilizer Efficiency
              </CardTitle>
              <CardDescription className="text-white/70">Current vs. Optimal</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-end gap-2">
                <div className="text-4xl font-bold text-[#64ffda]">78%</div>
                <div className="text-yellow-400 text-sm pb-1">22% savings potential</div>
              </div>
              <div className="w-full bg-[#0a192f]/50 rounded-full h-2.5 mt-2">
                <div className="bg-[#64ffda] h-2.5 rounded-full" style={{ width: "78%" }}></div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#112240]/70 border-[#64ffda]/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-lg flex items-center">
                <Zap className="h-4 w-4 mr-2 text-[#64ffda]" />
                Potential Cost Savings
              </CardTitle>
              <CardDescription className="text-white/70">Per acre</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-end gap-2">
                <div className="text-4xl font-bold text-[#64ffda]">$60</div>
                <div className="text-green-400 text-sm pb-1">per acre</div>
              </div>
              <p className="text-white/70 text-sm mt-1">$12,000 total potential savings</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card className="bg-[#112240]/70 border-[#64ffda]/10">
            <CardHeader>
              <CardTitle className="text-white">Water Usage Analysis</CardTitle>
              <CardDescription className="text-white/70">Applied vs. Optimal (inches/acre)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ChartContainer
                  config={{
                    usage: {
                      label: "Applied",
                      color: "hsl(var(--chart-1))",
                    },
                    optimal: {
                      label: "Optimal",
                      color: "hsl(var(--chart-2))",
                    },
                  }}
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsLineChart data={waterUsageData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                      <XAxis dataKey="month" stroke="rgba(255,255,255,0.5)" />
                      <YAxis stroke="rgba(255,255,255,0.5)" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="usage"
                        stroke="var(--color-usage)"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        name="Applied"
                      />
                      <Line
                        type="monotone"
                        dataKey="optimal"
                        stroke="var(--color-optimal)"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        name="Optimal"
                      />
                    </RechartsLineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>

              <div className="mt-4 p-4 border border-yellow-500/20 bg-yellow-500/10 rounded-md">
                <h3 className="font-bold text-yellow-400 mb-2 flex items-center">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Overwatering Detected
                </h3>
                <p className="text-white/80">
                  May through August shows consistent overwatering compared to optimal levels. Consider adjusting
                  irrigation schedules to save water and reduce costs.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#112240]/70 border-[#64ffda]/10">
            <CardHeader>
              <CardTitle className="text-white">Fertilizer Application</CardTitle>
              <CardDescription className="text-white/70">Applied vs. Recommended (lbs/acre)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ChartContainer
                  config={{
                    applied: {
                      label: "Applied",
                      color: "hsl(var(--chart-1))",
                    },
                    recommended: {
                      label: "Recommended",
                      color: "hsl(var(--chart-2))",
                    },
                  }}
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsBarChart data={fertilizerData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                      <XAxis dataKey="type" stroke="rgba(255,255,255,0.5)" />
                      <YAxis stroke="rgba(255,255,255,0.5)" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Bar dataKey="applied" fill="var(--color-applied)" name="Applied" />
                      <Bar dataKey="recommended" fill="var(--color-recommended)" name="Recommended" />
                    </RechartsBarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>

              <div className="mt-4 p-4 border border-[#64ffda]/20 bg-[#64ffda]/5 rounded-md">
                <h3 className="font-bold text-[#64ffda] mb-2">Fertilizer Optimization</h3>
                <p className="text-white/80">
                  Nitrogen application is 12.5% above recommended levels. Consider reducing nitrogen and increasing
                  phosphorus and potassium for better nutrient balance and cost savings.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-[#112240]/70 border-[#64ffda]/10 mb-8">
          <CardHeader>
            <CardTitle className="text-white">Cost Savings Potential</CardTitle>
            <CardDescription className="text-white/70">Current vs. Optimized Costs ($/acre)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="h-[300px]">
                <ChartContainer
                  config={{
                    current: {
                      label: "Current Cost",
                      color: "hsl(var(--chart-1))",
                    },
                    potential: {
                      label: "Potential Cost",
                      color: "hsl(var(--chart-2))",
                    },
                  }}
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsBarChart data={costSavingsData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                      <XAxis dataKey="category" stroke="rgba(255,255,255,0.5)" />
                      <YAxis stroke="rgba(255,255,255,0.5)" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Bar dataKey="current" fill="var(--color-current)" name="Current Cost" />
                      <Bar dataKey="potential" fill="var(--color-potential)" name="Potential Cost" />
                    </RechartsBarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>

              <div className="space-y-4">
                <div className="p-4 border border-[#64ffda]/20 bg-[#64ffda]/5 rounded-md">
                  <h3 className="font-bold text-[#64ffda] mb-2">Total Savings Potential</h3>
                  <p className="text-white/80">
                    By optimizing resource usage across all categories, you could save approximately $60 per acre,
                    totaling $12,000 across your entire operation.
                  </p>
                </div>

                <div className="p-4 border border-green-500/20 bg-green-500/10 rounded-md">
                  <h3 className="font-bold text-green-400 mb-2">Environmental Impact</h3>
                  <p className="text-white/80">
                    Optimizing resource usage would also reduce your environmental footprint, including a 15% reduction
                    in water usage and 20% reduction in nitrogen runoff.
                  </p>
                </div>

                <div className="p-4 border border-yellow-500/20 bg-yellow-500/10 rounded-md">
                  <h3 className="font-bold text-yellow-400 mb-2">ROI Analysis</h3>
                  <p className="text-white/80">
                    Implementing the recommended precision agriculture tools would cost approximately $8,000 with a
                    payback period of 8 months based on projected savings.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#112240]/70 border-[#64ffda]/10 mb-8">
          <CardHeader>
            <CardTitle className="text-white">Resource Optimization Recommendations</CardTitle>
            <CardDescription className="text-white/70">AI-generated recommendations for your operation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 border border-[#64ffda]/20 bg-[#64ffda]/5 rounded-md">
                <h3 className="font-bold text-[#64ffda] mb-2">Water Management</h3>
                <p className="text-white/80">
                  Install soil moisture sensors in North and East fields to monitor moisture levels in real-time. Adjust
                  irrigation schedules to apply water only when soil moisture drops below 65% of field capacity.
                </p>
              </div>

              <div className="p-4 border border-[#64ffda]/20 bg-[#64ffda]/5 rounded-md">
                <h3 className="font-bold text-[#64ffda] mb-2">Fertilizer Application</h3>
                <p className="text-white/80">
                  Implement variable rate technology for nitrogen application based on soil test results and yield
                  potential maps. Reduce overall nitrogen application by 12% and redistribute based on field zones.
                </p>
              </div>

              <div className="p-4 border border-[#64ffda]/20 bg-[#64ffda]/5 rounded-md">
                <h3 className="font-bold text-[#64ffda] mb-2">Energy Conservation</h3>
                <p className="text-white/80">
                  Schedule irrigation during off-peak electricity hours when possible. Consider upgrading to
                  high-efficiency pumps which could reduce energy consumption by up to 20%.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-between items-center">
          <Button variant="outline" className="border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10">
            <Download className="h-4 w-4 mr-2" />
            Download Full Report
          </Button>

          <div className="flex gap-2">
            <Button variant="outline" className="border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10">
              <Share2 className="h-4 w-4 mr-2" />
              Share Analysis
            </Button>
            <Button className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f]">Schedule Consultation</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

