"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, FileDown } from "lucide-react"
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
import { DownloadReportButton } from "@/components/download-report-button"
import { ShareAnalysisButton } from "@/components/share-analysis-button"
import { ScheduleButton } from "@/components/schedule-button"
import { DataImportExport } from "@/components/data-import-export"
import { FieldSelector } from "@/components/field-selector"

// Extended historical data from 2000 to 2025
const yearlyYieldData = [
  { year: 2000, yield: 32, average: 30 },
  { year: 2001, yield: 33, average: 31 },
  { year: 2002, yield: 34, average: 31 },
  { year: 2003, yield: 35, average: 32 },
  { year: 2004, yield: 36, average: 33 },
  { year: 2005, yield: 37, average: 33 },
  { year: 2006, yield: 38, average: 34 },
  { year: 2007, yield: 38, average: 34 },
  { year: 2008, yield: 39, average: 35 },
  { year: 2009, yield: 40, average: 35 },
  { year: 2010, yield: 40, average: 36 },
  { year: 2011, yield: 41, average: 36 },
  { year: 2012, yield: 39, average: 37 }, // Drought year
  { year: 2013, yield: 42, average: 37 },
  { year: 2014, yield: 43, average: 37 },
  { year: 2015, yield: 44, average: 38 },
  { year: 2016, yield: 45, average: 38 },
  { year: 2017, yield: 46, average: 38 },
  { year: 2018, yield: 47, average: 39 },
  { year: 2019, yield: 48, average: 39 },
  { year: 2020, yield: 46, average: 40 }, // COVID impact
  { year: 2021, yield: 50, average: 41 },
  { year: 2022, yield: 52, average: 42 },
  { year: 2023, yield: 54, average: 43 },
  { year: 2024, yield: 56, average: 44 },
  { year: 2025, yield: 57, average: 44, note: "Partial year (Jan-Mar)" },
]

// Global field data
const globalFieldComparisonData = [
  { field: "North Field (USA)", yield: 56, area: 120, region: "North America" },
  { field: "South Field (USA)", yield: 48, area: 85, region: "North America" },
  { field: "West Field (USA)", yield: 52, area: 110, region: "North America" },
  { field: "East Field (USA)", yield: 44, area: 75, region: "North America" },
  { field: "Central Field (USA)", yield: 58, area: 130, region: "North America" },
  { field: "Nairobi Farm (Kenya)", yield: 42, area: 95, region: "Africa" },
  { field: "Lagos Plot (Nigeria)", yield: 38, area: 65, region: "Africa" },
  { field: "Cairo Field (Egypt)", yield: 45, area: 110, region: "Africa" },
  { field: "Punjab Field (India)", yield: 51, area: 85, region: "Asia" },
  { field: "Shandong Plot (China)", yield: 54, area: 120, region: "Asia" },
  { field: "Mekong Delta (Vietnam)", yield: 49, area: 90, region: "Asia" },
  { field: "Pampas Field (Argentina)", yield: 53, area: 150, region: "South America" },
  { field: "Mato Grosso (Brazil)", yield: 50, area: 200, region: "South America" },
  { field: "Murray-Darling (Australia)", yield: 46, area: 180, region: "Oceania" },
  { field: "Canterbury Plains (NZ)", yield: 52, area: 95, region: "Oceania" },
  { field: "Andalusia Plot (Spain)", yield: 47, area: 75, region: "Europe" },
  { field: "Normandy Field (France)", yield: 51, area: 90, region: "Europe" },
  { field: "Po Valley (Italy)", yield: 49, area: 85, region: "Europe" },
]

const monthlyGrowthData = [
  { month: "Mar", growth: 5, rainfall: 30 },
  { month: "Apr", growth: 15, rainfall: 45 },
  { month: "May", growth: 30, rainfall: 60 },
  { month: "Jun", growth: 50, rainfall: 40 },
  { month: "Jul", growth: 75, rainfall: 35 },
  { month: "Aug", growth: 95, rainfall: 25 },
  { month: "Sep", growth: 100, rainfall: 20 },
]

export default function YieldAnalysisPage() {
  const [timeframe, setTimeframe] = useState("yearly")
  const [selectedField, setSelectedField] = useState(null)
  const [region, setRegion] = useState("all")
  const [yearRange, setYearRange] = useState({ start: 2015, end: 2025 })

  // Filter data based on selected year range
  const filteredYearlyData = yearlyYieldData.filter(
    (item) => item.year >= yearRange.start && item.year <= yearRange.end,
  )

  // Filter fields based on selected region
  const filteredFieldData =
    region === "all" ? globalFieldComparisonData : globalFieldComparisonData.filter((item) => item.region === region)

  // Function to handle actual file download
  const handleDownloadCSV = () => {
    // Create CSV content
    let csvContent = "data:text/csv;charset=utf-8,"

    // Add headers
    csvContent += "Year,Yield (bu/acre),Regional Average (bu/acre)\n"

    // Add data rows
    yearlyYieldData.forEach((row) => {
      csvContent += `${row.year},${row.yield},${row.average}\n`
    })

    // Create download link
    const encodedUri = encodeURI(csvContent)
    const link = document.createElement("a")
    link.setAttribute("href", encodedUri)
    link.setAttribute("download", "terrabit_yield_data_2000-2025.csv")
    document.body.appendChild(link)

    // Trigger download
    link.click()

    // Clean up
    document.body.removeChild(link)
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
          <h1 className="text-3xl font-bold">Yield Analysis</h1>
        </div>

        <div className="mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <FieldSelector onFieldChange={(field) => setSelectedField(field)} className="w-full" />

          <div className="flex flex-col gap-2">
            <label className="text-sm text-white/70">Filter by Region</label>
            <select
              className="bg-[#0a192f]/50 border border-[#64ffda]/20 rounded-md p-2 text-white"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
            >
              <option value="all">All Regions</option>
              <option value="North America">North America</option>
              <option value="South America">South America</option>
              <option value="Europe">Europe</option>
              <option value="Africa">Africa</option>
              <option value="Asia">Asia</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-white/70">Year Range</label>
            <div className="flex gap-2">
              <select
                className="bg-[#0a192f]/50 border border-[#64ffda]/20 rounded-md p-2 text-white flex-1"
                value={yearRange.start}
                onChange={(e) => setYearRange({ ...yearRange, start: Number(e.target.value) })}
              >
                {yearlyYieldData.map((item) => (
                  <option key={`start-${item.year}`} value={item.year}>
                    {item.year}
                  </option>
                ))}
              </select>
              <span className="flex items-center text-white/70">to</span>
              <select
                className="bg-[#0a192f]/50 border border-[#64ffda]/20 rounded-md p-2 text-white flex-1"
                value={yearRange.end}
                onChange={(e) => setYearRange({ ...yearRange, end: Number(e.target.value) })}
              >
                {yearlyYieldData.map((item) => (
                  <option key={`end-${item.year}`} value={item.year}>
                    {item.year}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="mb-6 flex justify-between items-center">
          <DataImportExport dataType="Yield" />

          <Button
            variant="outline"
            className="border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10"
            onClick={handleDownloadCSV}
          >
            <FileDown className="h-4 w-4 mr-2" />
            Download Raw Data (CSV)
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-[#112240]/70 border-[#64ffda]/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-lg">Average Yield</CardTitle>
              <CardDescription className="text-white/70">Bushels per acre</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-end gap-2">
                <div className="text-4xl font-bold text-[#64ffda]">52.4</div>
                <div className="text-green-400 text-sm pb-1">+8.2% from last year</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#112240]/70 border-[#64ffda]/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-lg">Total Production</CardTitle>
              <CardDescription className="text-white/70">All fields combined</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-end gap-2">
                <div className="text-4xl font-bold text-[#64ffda]">27,450</div>
                <div className="text-white/70 text-sm pb-1">bushels</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#112240]/70 border-[#64ffda]/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-lg">Top Performing Field</CardTitle>
              <CardDescription className="text-white/70">Highest yield</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-end gap-2">
                <div className="text-4xl font-bold text-[#64ffda]">Central</div>
                <div className="text-white/70 text-sm pb-1">58 bu/acre</div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card className="bg-[#112240]/70 border-[#64ffda]/10">
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="text-white">Yield Trends</CardTitle>
                  <CardDescription className="text-white/70">
                    Historical yield performance ({yearRange.start}-{yearRange.end})
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <DownloadReportButton
                    reportType="Yield Trends"
                    variant="outline"
                    className="h-8 border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10"
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="yearly" className="w-full" onValueChange={setTimeframe}>
                <TabsList className="mb-4 bg-[#0a192f]/50">
                  <TabsTrigger
                    value="yearly"
                    className="data-[state=active]:bg-[#64ffda] data-[state=active]:text-[#0a192f]"
                  >
                    Yearly
                  </TabsTrigger>
                  <TabsTrigger
                    value="monthly"
                    className="data-[state=active]:bg-[#64ffda] data-[state=active]:text-[#0a192f]"
                  >
                    Monthly
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="yearly" className="h-[300px]">
                  <ChartContainer
                    config={{
                      yield: {
                        label: "Your Yield",
                        color: "hsl(var(--chart-1))",
                      },
                      average: {
                        label: "Regional Average",
                        color: "hsl(var(--chart-2))",
                      },
                    }}
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsLineChart data={filteredYearlyData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                        <XAxis dataKey="year" stroke="rgba(255,255,255,0.5)" />
                        <YAxis stroke="rgba(255,255,255,0.5)" />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="yield"
                          stroke="var(--color-yield)"
                          strokeWidth={2}
                          dot={{ r: 4 }}
                          name="Your Yield"
                        />
                        <Line
                          type="monotone"
                          dataKey="average"
                          stroke="var(--color-average)"
                          strokeWidth={2}
                          dot={{ r: 4 }}
                          name="Regional Average"
                        />
                      </RechartsLineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </TabsContent>

                <TabsContent value="monthly" className="h-[300px]">
                  <ChartContainer
                    config={{
                      growth: {
                        label: "Growth %",
                        color: "hsl(var(--chart-1))",
                      },
                      rainfall: {
                        label: "Rainfall (mm)",
                        color: "hsl(var(--chart-2))",
                      },
                    }}
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsLineChart data={monthlyGrowthData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                        <XAxis dataKey="month" stroke="rgba(255,255,255,0.5)" />
                        <YAxis stroke="rgba(255,255,255,0.5)" />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="growth"
                          stroke="var(--color-growth)"
                          strokeWidth={2}
                          dot={{ r: 4 }}
                          name="Growth %"
                        />
                        <Line
                          type="monotone"
                          dataKey="rainfall"
                          stroke="var(--color-rainfall)"
                          strokeWidth={2}
                          dot={{ r: 4 }}
                          name="Rainfall (mm)"
                        />
                      </RechartsLineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card className="bg-[#112240]/70 border-[#64ffda]/10">
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="text-white">Field Comparison</CardTitle>
                  <CardDescription className="text-white/70">
                    Yield by field (bushels/acre) - {region === "all" ? "Global Data" : region}
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <ShareAnalysisButton
                    analysisType="Field Comparison"
                    variant="outline"
                    className="h-8 border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10"
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ChartContainer
                  config={{
                    yield: {
                      label: "Yield (bu/acre)",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsBarChart data={filteredFieldData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                      <XAxis dataKey="field" stroke="rgba(255,255,255,0.5)" angle={-45} textAnchor="end" height={80} />
                      <YAxis stroke="rgba(255,255,255,0.5)" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Bar dataKey="yield" fill="var(--color-yield)" name="Yield (bu/acre)" />
                    </RechartsBarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-[#112240]/70 border-[#64ffda]/10 mb-8">
          <CardHeader>
            <CardTitle className="text-white">Yield Analysis Insights</CardTitle>
            <CardDescription className="text-white/70">AI-generated recommendations based on your data</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 border border-green-500/20 bg-green-500/10 rounded-md">
                <h3 className="font-bold text-green-400 mb-2 flex items-center">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  Positive Trend
                </h3>
                <p className="text-white/80">
                  Your yield has consistently increased over the past 3 years, outperforming the regional average by
                  13.2%.
                </p>
              </div>

              <div className="p-4 border border-yellow-500/20 bg-yellow-500/10 rounded-md">
                <h3 className="font-bold text-yellow-400 mb-2 flex items-center">
                  <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                  Opportunity
                </h3>
                <p className="text-white/80">
                  South Field is underperforming compared to other fields. Consider soil testing and adjusting
                  fertilizer application rates.
                </p>
              </div>

              <div className="p-4 border border-[#64ffda]/20 bg-[#64ffda]/5 rounded-md">
                <h3 className="font-bold text-[#64ffda] mb-2 flex items-center">
                  <span className="inline-block w-2 h-2 bg-[#64ffda] rounded-full mr-2"></span>
                  Recommendation
                </h3>
                <p className="text-white/80">
                  Based on your soil type and climate conditions, consider increasing plant population in Central Field
                  by 5-7% to maximize yield potential.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-between items-center">
          <DownloadReportButton
            reportType="Full Yield"
            variant="outline"
            className="border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10"
          />

          <div className="flex gap-2">
            <ShareAnalysisButton
              analysisType="Yield"
              variant="outline"
              className="border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10"
            />
            <ScheduleButton type="consultation" className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f]" />
          </div>
        </div>
      </div>
    </div>
  )
}

