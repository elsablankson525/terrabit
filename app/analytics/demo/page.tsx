"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Download, Beaker, Microscope, FileText, Check, AlertTriangle, Leaf } from "lucide-react"
import Link from "next/link"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart as RechartsBarChart, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts"

// Sample data for soil analysis demo
const nutrientData = [
  { name: "Nitrogen (N)", value: 45, optimal: 70, unit: "ppm" },
  { name: "Phosphorus (P)", value: 35, optimal: 50, unit: "ppm" },
  { name: "Potassium (K)", value: 160, optimal: 170, unit: "ppm" },
  { name: "Calcium (Ca)", value: 1100, optimal: 1100, unit: "ppm" },
  { name: "Magnesium (Mg)", value: 120, optimal: 150, unit: "ppm" },
  { name: "Sulfur (S)", value: 12, optimal: 20, unit: "ppm" },
]

const COLORS = ["#64ffda", "#0a192f", "#112240", "#8884d8"]

export default function AnalyticsDemoPage() {
  const [demoStep, setDemoStep] = useState(1)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisComplete, setAnalysisComplete] = useState(false)

  const handleNextStep = () => {
    if (demoStep < 4) {
      setDemoStep(demoStep + 1)

      if (demoStep === 2) {
        setIsAnalyzing(true)
        setTimeout(() => {
          setIsAnalyzing(false)
          setAnalysisComplete(true)
        }, 3000)
      }
    }
  }

  const handlePrevStep = () => {
    if (demoStep > 1) {
      setDemoStep(demoStep - 1)

      if (demoStep === 4) {
        setAnalysisComplete(false)
      }
    }
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
          <h1 className="text-3xl font-bold">Soil Analysis Demo</h1>
        </div>

        <div className="mb-8">
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${demoStep >= 1 ? "bg-[#64ffda] text-[#0a192f]" : "bg-[#112240] text-white/50"}`}
                >
                  {demoStep > 1 ? <Check className="h-5 w-5" /> : "1"}
                </div>
                <div className={`h-1 w-16 mx-1 ${demoStep > 1 ? "bg-[#64ffda]" : "bg-[#112240]"}`}></div>
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${demoStep >= 2 ? "bg-[#64ffda] text-[#0a192f]" : "bg-[#112240] text-white/50"}`}
                >
                  {demoStep > 2 ? <Check className="h-5 w-5" /> : "2"}
                </div>
                <div className={`h-1 w-16 mx-1 ${demoStep > 2 ? "bg-[#64ffda]" : "bg-[#112240]"}`}></div>
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${demoStep >= 3 ? "bg-[#64ffda] text-[#0a192f]" : "bg-[#112240] text-white/50"}`}
                >
                  {demoStep > 3 ? <Check className="h-5 w-5" /> : "3"}
                </div>
                <div className={`h-1 w-16 mx-1 ${demoStep > 3 ? "bg-[#64ffda]" : "bg-[#112240]"}`}></div>
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${demoStep >= 4 ? "bg-[#64ffda] text-[#0a192f]" : "bg-[#112240] text-white/50"}`}
                >
                  4
                </div>
              </div>
              <div className="text-white/70">Step {demoStep} of 4</div>
            </div>
            <div className="grid grid-cols-4 text-center text-sm text-white/70">
              <div>Sample Collection</div>
              <div>Analysis</div>
              <div>Results</div>
              <div>Recommendations</div>
            </div>
          </div>
        </div>

        {demoStep === 1 && (
          <Card className="bg-[#112240]/70 border-[#64ffda]/10 mb-8">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Beaker className="h-5 w-5 mr-2 text-[#64ffda]" />
                Step 1: Soil Sample Collection
              </CardTitle>
              <CardDescription className="text-white/70">
                Learn how to properly collect soil samples for analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="aspect-video rounded-lg bg-[#0a192f]/50 flex items-center justify-center mb-4">
                    <div className="text-center p-8">
                      <Beaker className="h-16 w-16 mx-auto text-[#64ffda] mb-4" />
                      <p className="text-white/70">Soil sampling demonstration video would appear here</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 border border-[#64ffda]/20 bg-[#64ffda]/5 rounded-md">
                      <h3 className="font-bold text-[#64ffda] mb-2">Why Proper Sampling Matters</h3>
                      <p className="text-white/80">
                        Accurate soil sampling is critical for reliable analysis results. A representative sample
                        ensures that fertilizer and amendment recommendations are appropriate for your specific field
                        conditions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold text-white text-lg">Soil Sampling Steps:</h3>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#64ffda]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-[#64ffda] text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Divide Field into Zones</h4>
                      <p className="text-white/70">
                        Separate your field into zones based on soil type, topography, and crop performance.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#64ffda]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-[#64ffda] text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Collect Multiple Cores</h4>
                      <p className="text-white/70">
                        Take 10-15 soil cores from each zone at a depth of 6-8 inches for most crops.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#64ffda]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-[#64ffda] text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Mix Thoroughly</h4>
                      <p className="text-white/70">
                        Combine and mix the cores from each zone in a clean plastic bucket.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#64ffda]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-[#64ffda] text-sm">4</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Label and Submit</h4>
                      <p className="text-white/70">
                        Place 1-2 cups of soil in a labeled sample bag and submit to the TerraBit lab for analysis.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 border border-yellow-500/20 bg-yellow-500/10 rounded-md mt-6">
                    <h3 className="font-bold text-yellow-400 mb-2 flex items-center">
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      Important Tips
                    </h3>
                    <ul className="list-disc pl-5 text-white/80 space-y-1">
                      <li>Avoid sampling when soil is too wet or immediately after fertilizer application</li>
                      <li>Use clean tools to prevent contamination</li>
                      <li>Sample at consistent depths for comparable results over time</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10" disabled>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous Step
              </Button>
              <Button className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f]" onClick={handleNextStep}>
                Next Step
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardFooter>
          </Card>
        )}

        {demoStep === 2 && (
          <Card className="bg-[#112240]/70 border-[#64ffda]/10 mb-8">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Microscope className="h-5 w-5 mr-2 text-[#64ffda]" />
                Step 2: Laboratory Analysis
              </CardTitle>
              <CardDescription className="text-white/70">
                See how soil samples are analyzed in our state-of-the-art laboratory
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="aspect-video rounded-lg bg-[#0a192f]/50 flex items-center justify-center mb-4">
                    <div className="text-center p-8">
                      <Microscope className="h-16 w-16 mx-auto text-[#64ffda] mb-4" />
                      <p className="text-white/70">Laboratory analysis demonstration would appear here</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 border border-[#64ffda]/20 bg-[#64ffda]/5 rounded-md">
                      <h3 className="font-bold text-[#64ffda] mb-2">TerraBit Lab Technology</h3>
                      <p className="text-white/80">
                        Our laboratories use advanced spectroscopy and chromatography techniques to provide accurate,
                        comprehensive soil analysis with fast turnaround times.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold text-white text-lg">Analysis Process:</h3>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#64ffda]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-[#64ffda] text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Sample Preparation</h4>
                      <p className="text-white/70">
                        Samples are dried, ground, and sieved to ensure consistency for testing.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#64ffda]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-[#64ffda] text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Nutrient Extraction</h4>
                      <p className="text-white/70">
                        Chemical extractants are used to measure available nutrients in the soil.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#64ffda]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-[#64ffda] text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Instrumental Analysis</h4>
                      <p className="text-white/70">
                        Advanced instruments measure nutrient levels, pH, organic matter, and other soil properties.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#64ffda]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-[#64ffda] text-sm">4</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Data Processing</h4>
                      <p className="text-white/70">
                        Results are processed through our proprietary algorithms to generate recommendations.
                      </p>
                    </div>
                  </div>

                  {isAnalyzing ? (
                    <div className="p-6 border border-[#64ffda]/20 bg-[#64ffda]/5 rounded-md mt-6 text-center">
                      <div className="animate-pulse flex flex-col items-center">
                        <Microscope className="h-12 w-12 text-[#64ffda] mb-4" />
                        <h3 className="font-bold text-[#64ffda] mb-2">Analyzing Sample...</h3>
                        <div className="w-full bg-[#0a192f]/50 rounded-full h-2.5 mt-2 mb-4">
                          <div
                            className="bg-[#64ffda] h-2.5 rounded-full animate-[progress_3s_ease-in-out]"
                            style={{ width: "100%" }}
                          ></div>
                        </div>
                        <p className="text-white/80">Please wait while we process your soil sample</p>
                      </div>
                    </div>
                  ) : (
                    <div className="p-4 border border-green-500/20 bg-green-500/10 rounded-md mt-6">
                      <h3 className="font-bold text-green-400 mb-2 flex items-center">
                        <Check className="h-4 w-4 mr-2" />
                        Quality Assurance
                      </h3>
                      <p className="text-white/80">
                        Every sample is tested with strict quality control measures. We regularly calibrate our
                        instruments and include standard reference materials to ensure accuracy.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                variant="outline"
                className="border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10"
                onClick={handlePrevStep}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous Step
              </Button>
              <Button
                className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f]"
                onClick={handleNextStep}
                disabled={isAnalyzing}
              >
                {isAnalyzing ? "Analyzing..." : "Next Step"}
                {!isAnalyzing && <ArrowRight className="h-4 w-4 ml-2" />}
              </Button>
            </CardFooter>
          </Card>
        )}

        {demoStep === 3 && (
          <Card className="bg-[#112240]/70 border-[#64ffda]/10 mb-8">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <FileText className="h-5 w-5 mr-2 text-[#64ffda]" />
                Step 3: Analysis Results
              </CardTitle>
              <CardDescription className="text-white/70">
                Review your comprehensive soil analysis report
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <Card className="bg-[#0a192f]/50 border-[#64ffda]/10 mb-4">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-white text-lg">Soil Test Results</CardTitle>
                      <CardDescription className="text-white/70">Sample ID: ST-2023-10-15-001</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center pb-2 border-b border-[#64ffda]/10">
                          <span className="text-white/70">pH</span>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-white">6.2</span>
                            <span className="text-yellow-400 text-xs">(Slightly Low)</span>
                          </div>
                        </div>

                        <div className="flex justify-between items-center pb-2 border-b border-[#64ffda]/10">
                          <span className="text-white/70">Organic Matter</span>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-white">2.8%</span>
                            <span className="text-yellow-400 text-xs">(Low)</span>
                          </div>
                        </div>

                        <div className="flex justify-between items-center pb-2 border-b border-[#64ffda]/10">
                          <span className="text-white/70">Cation Exchange Capacity</span>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-white">12.5 meq/100g</span>
                            <span className="text-green-400 text-xs">(Good)</span>
                          </div>
                        </div>

                        <div className="flex justify-between items-center pb-2 border-b border-[#64ffda]/10">
                          <span className="text-white/70">Texture</span>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-white">Loam</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="h-[300px]">
                    <ChartContainer
                      config={{
                        value: {
                          label: "Current Level",
                          color: "hsl(var(--chart-1))",
                        },
                        optimal: {
                          label: "Optimal Level",
                          color: "hsl(var(--chart-2))",
                        },
                      }}
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <RechartsBarChart data={nutrientData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                          <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" />
                          <YAxis stroke="rgba(255,255,255,0.5)" />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Legend />
                          <Bar dataKey="value" fill="var(--color-value)" name="Current Level" />
                          <Bar dataKey="optimal" fill="var(--color-optimal)" name="Optimal Level" />
                        </RechartsBarChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold text-white text-lg">Nutrient Status Summary:</h3>

                  <div className="p-4 border border-red-500/20 bg-red-500/10 rounded-md">
                    <h3 className="font-bold text-red-400 mb-2">Deficient Nutrients</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>Nitrogen (N)</span>
                        <span className="font-bold">45 ppm</span>
                      </div>
                      <div className="w-full bg-[#0a192f]/50 rounded-full h-2">
                        <div className="bg-red-400 h-2 rounded-full" style={{ width: "64%" }}></div>
                      </div>
                      <p className="text-sm text-white/70">36% below optimal level (70 ppm)</p>
                    </div>
                  </div>

                  <div className="p-4 border border-yellow-500/20 bg-yellow-500/10 rounded-md">
                    <h3 className="font-bold text-yellow-400 mb-2">Slightly Low Nutrients</h3>
                    <div className="space-y-2 mb-3">
                      <div className="flex justify-between items-center">
                        <span>Phosphorus (P)</span>
                        <span className="font-bold">35 ppm</span>
                      </div>
                      <div className="w-full bg-[#0a192f]/50 rounded-full h-2">
                        <div className="bg-yellow-400 h-2 rounded-full" style={{ width: "70%" }}></div>
                      </div>
                      <p className="text-sm text-white/70">30% below optimal level (50 ppm)</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>Magnesium (Mg)</span>
                        <span className="font-bold">120 ppm</span>
                      </div>
                      <div className="w-full bg-[#0a192f]/50 rounded-full h-2">
                        <div className="bg-yellow-400 h-2 rounded-full" style={{ width: "80%" }}></div>
                      </div>
                      <p className="text-sm text-white/70">20% below optimal level (150 ppm)</p>
                    </div>
                  </div>

                  <div className="p-4 border border-green-500/20 bg-green-500/10 rounded-md">
                    <h3 className="font-bold text-green-400 mb-2">Optimal Nutrients</h3>
                    <div className="space-y-2 mb-3">
                      <div className="flex justify-between items-center">
                        <span>Potassium (K)</span>
                        <span className="font-bold">160 ppm</span>
                      </div>
                      <div className="w-full bg-[#0a192f]/50 rounded-full h-2">
                        <div className="bg-green-400 h-2 rounded-full" style={{ width: "94%" }}></div>
                      </div>
                      <p className="text-sm text-white/70">6% below optimal level (170 ppm)</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>Calcium (Ca)</span>
                        <span className="font-bold">1100 ppm</span>
                      </div>
                      <div className="w-full bg-[#0a192f]/50 rounded-full h-2">
                        <div className="bg-green-400 h-2 rounded-full" style={{ width: "100%" }}></div>
                      </div>
                      <p className="text-sm text-white/70">At optimal level (1100 ppm)</p>
                    </div>
                  </div>

                  <div className="p-4 border border-[#64ffda]/20 bg-[#64ffda]/5 rounded-md mt-6">
                    <h3 className="font-bold text-[#64ffda] mb-2">Soil Health Score</h3>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full border-4 border-[#64ffda] flex items-center justify-center">
                        <span className="text-2xl font-bold text-[#64ffda]">68</span>
                      </div>
                      <div>
                        <p className="font-medium text-white">Moderate</p>
                        <p className="text-white/70 text-sm">
                          Your soil has some deficiencies that need to be addressed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                variant="outline"
                className="border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10"
                onClick={handlePrevStep}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous Step
              </Button>
              <Button className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f]" onClick={handleNextStep}>
                Next Step
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardFooter>
          </Card>
        )}

        {demoStep === 4 && (
          <Card className="bg-[#112240]/70 border-[#64ffda]/10 mb-8">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Leaf className="h-5 w-5 mr-2 text-[#64ffda]" />
                Step 4: Recommendations
              </CardTitle>
              <CardDescription className="text-white/70">
                Personalized recommendations based on your soil analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="p-5 border border-[#64ffda]/20 bg-[#64ffda]/5 rounded-md">
                    <h3 className="font-bold text-[#64ffda] mb-3">Fertilizer Recommendations</h3>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-white mb-1">Nitrogen (N)</h4>
                        <p className="text-white/80 mb-2">Apply 120 lbs/acre of nitrogen fertilizer</p>
                        <div className="flex items-center text-sm text-white/70">
                          <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
                          <span>Split application: 60% pre-plant, 40% at V6 growth stage</span>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-white mb-1">Phosphorus (P)</h4>
                        <p className="text-white/80 mb-2">Apply 60 lbs/acre of P₂O₅</p>
                        <div className="flex items-center text-sm text-white/70">
                          <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                          <span>Band application at planting for maximum efficiency</span>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-white mb-1">Potassium (K)</h4>
                        <p className="text-white/80 mb-2">Apply 40 lbs/acre of K₂O</p>
                        <div className="flex items-center text-sm text-white/70">
                          <div className="w-3 h-3 rounded-full bg-green-400 mr-2"></div>
                          <span>Maintenance application to maintain optimal levels</span>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-white mb-1">Magnesium (Mg)</h4>
                        <p className="text-white/80 mb-2">Apply 15 lbs/acre of Mg</p>
                        <div className="flex items-center text-sm text-white/70">
                          <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                          <span>Consider dolomitic lime if pH adjustment is also needed</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 border border-[#64ffda]/20 bg-[#64ffda]/5 rounded-md">
                    <h3 className="font-bold text-[#64ffda] mb-3">pH Management</h3>
                    <p className="text-white/80 mb-4">
                      Your soil pH of 6.2 is slightly below the optimal range for most crops (6.5-7.0).
                    </p>

                    <div className="space-y-2">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#64ffda]/20 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-[#64ffda] text-sm">1</span>
                        </div>
                        <div>
                          <p className="text-white/80">
                            Apply 1 ton/acre of agricultural limestone to raise pH to optimal range.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#64ffda]/20 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-[#64ffda] text-sm">2</span>
                        </div>
                        <div>
                          <p className="text-white/80">
                            Split application over two years for better results if applying more than 2 tons/acre.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="p-5 border border-[#64ffda]/20 bg-[#64ffda]/5 rounded-md">
                    <h3 className="font-bold text-[#64ffda] mb-3">Organic Matter Management</h3>
                    <p className="text-white/80 mb-4">
                      Your organic matter level of 2.8% is below the optimal range of 4-5% for your soil type.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#64ffda]/20 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="h-4 w-4 text-[#64ffda]" />
                        </div>
                        <div>
                          <h4 className="font-medium text-white">Cover Crops</h4>
                          <p className="text-white/70">
                            Plant cover crops such as cereal rye, clover, or vetch during fallow periods.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#64ffda]/20 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="h-4 w-4 text-[#64ffda]" />
                        </div>
                        <div>
                          <h4 className="font-medium text-white">Crop Residue Management</h4>
                          <p className="text-white/70">
                            Minimize tillage and leave crop residues on the field to decompose.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#64ffda]/20 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="h-4 w-4 text-[#64ffda]" />
                        </div>
                        <div>
                          <h4 className="font-medium text-white">Compost Application</h4>
                          <p className="text-white/70">
                            Apply 2-3 tons/acre of compost annually to build organic matter.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 border border-[#64ffda]/20 bg-[#64ffda]/5 rounded-md">
                    <h3 className="font-bold text-[#64ffda] mb-3">Expected Benefits</h3>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-400/20 flex items-center justify-center shrink-0 mt-0.5">
                          <ArrowRight className="h-4 w-4 text-green-400" />
                        </div>
                        <div>
                          <h4 className="font-medium text-white">Yield Increase</h4>
                          <p className="text-white/70">
                            Implementing these recommendations could increase yield by 15-20%.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-400/20 flex items-center justify-center shrink-0 mt-0.5">
                          <ArrowRight className="h-4 w-4 text-green-400" />
                        </div>
                        <div>
                          <h4 className="font-medium text-white">Improved Soil Health</h4>
                          <p className="text-white/70">
                            Better nutrient cycling, water retention, and disease suppression.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-400/20 flex items-center justify-center shrink-0 mt-0.5">
                          <ArrowRight className="h-4 w-4 text-green-400" />
                        </div>
                        <div>
                          <h4 className="font-medium text-white">Long-term Sustainability</h4>
                          <p className="text-white/70">
                            Building soil health leads to more resilient crops and reduced input costs over time.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                variant="outline"
                className="border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10"
                onClick={handlePrevStep}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous Step
              </Button>
              <Link href="/dashboard">
                <Button className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f]">
                  Complete Demo
                  <Check className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        )}

        <div className="flex justify-between items-center">
          <Link href="/dashboard">
            <Button variant="outline" className="border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10">
              Return to Dashboard
            </Button>
          </Link>

          <div className="flex gap-2">
            <Button variant="outline" className="border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10">
              <Download className="h-4 w-4 mr-2" />
              Download Guide
            </Button>
            <Link href="/pricing">
              <Button className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f]">Get Started with TerraBit</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

