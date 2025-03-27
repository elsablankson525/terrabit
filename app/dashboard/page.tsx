"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, LineChart, PieChart } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { UserProfileMenu } from "@/components/user-profile-menu"
import { ScheduleButton } from "@/components/schedule-button"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a192f] to-[#112240] text-white">
      {/* Header */}
      <header className="border-b border-[#64ffda]/10 py-4 px-6 backdrop-blur-sm bg-[#0a192f]/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center mr-8">
              <h1 className="text-white font-bold text-xl">
                <span className="text-[#64ffda]">TERRA</span>
                <span className="ml-1">BIT</span>
              </h1>
              <div className="ml-2 w-2 h-2 rounded-full bg-[#64ffda] animate-pulse"></div>
            </Link>
          </div>

          <UserProfileMenu />
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 shrink-0">
            <div className="border border-[#64ffda]/10 rounded-lg bg-[#112240]/70 backdrop-blur-sm p-4 sticky top-24">
              <nav className="space-y-1">
                <button
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md ${activeTab === "overview" ? "bg-[#64ffda]/20 text-[#64ffda]" : "text-white hover:bg-white/5"}`}
                  onClick={() => setActiveTab("overview")}
                >
                  <BarChart3 className="h-5 w-5" />
                  <span>Overview</span>
                </button>
                <button
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md ${activeTab === "fields" ? "bg-[#64ffda]/20 text-[#64ffda]" : "text-white hover:bg-white/5"}`}
                  onClick={() => setActiveTab("fields")}
                >
                  <PieChart className="h-5 w-5" />
                  <span>My Fields</span>
                </button>
                <button
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md ${activeTab === "analytics" ? "bg-[#64ffda]/20 text-[#64ffda]" : "text-white hover:bg-white/5"}`}
                  onClick={() => setActiveTab("analytics")}
                >
                  <LineChart className="h-5 w-5" />
                  <span>Analytics</span>
                </button>
              </nav>

              <div className="mt-8 pt-4 border-t border-[#64ffda]/10">
                <div className="bg-[#0a192f]/50 rounded-lg p-4">
                  <h3 className="font-medium mb-2">Current Plan</h3>
                  <p className="text-[#64ffda] font-bold mb-2">Basic Plan</p>
                  <p className="text-sm text-white/70 mb-4">500 acres limit</p>
                  <Link href="/plans">
                    <Button className="w-full bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f] text-sm">
                      Upgrade Plan
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Welcome, John!</h1>
              <p className="text-white/70">Here's what's happening with your fields today.</p>
            </div>

            <Tabs defaultValue="packages" className="w-full">
              <TabsList className="grid grid-cols-2 mb-8 bg-[#0a192f]/50">
                <TabsTrigger
                  value="packages"
                  className="data-[state=active]:bg-[#64ffda] data-[state=active]:text-[#0a192f]"
                >
                  Premium Packages
                </TabsTrigger>
                <TabsTrigger
                  value="demo"
                  className="data-[state=active]:bg-[#64ffda] data-[state=active]:text-[#0a192f]"
                >
                  Request Demo
                </TabsTrigger>
              </TabsList>

              <TabsContent value="packages" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Basic Plan */}
                  <Card className="bg-[#112240]/70 border-[#64ffda]/10">
                    <CardHeader>
                      <CardTitle className="text-white">Basic Plan</CardTitle>
                      <CardDescription className="text-white/70">For small farms</CardDescription>
                      <div className="mt-2">
                        <span className="text-3xl font-bold text-[#64ffda]">$5</span>
                        <span className="text-white/70">/acre/year</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="text-[#64ffda] mr-2">•</span>
                          <span>Field monitoring (up to 500 acres)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#64ffda] mr-2">•</span>
                          <span>Basic weather forecasts</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#64ffda] mr-2">•</span>
                          <span>Mobile app access</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Link href="/checkout?plan=basic" className="w-full">
                        <Button className="w-full bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f]">
                          Current Plan
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  {/* Professional Plan */}
                  <Card className="bg-[#112240]/70 border-[#64ffda]/10 relative">
                    <div className="absolute top-0 right-0 bg-[#64ffda] text-[#0a192f] px-3 py-1 text-xs font-bold">
                      POPULAR
                    </div>
                    <CardHeader>
                      <CardTitle className="text-white">Professional</CardTitle>
                      <CardDescription className="text-white/70">For medium operations</CardDescription>
                      <div className="mt-2">
                        <span className="text-3xl font-bold text-[#64ffda]">$12</span>
                        <span className="text-white/70">/acre/year</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="text-[#64ffda] mr-2">•</span>
                          <span>Everything in Basic</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#64ffda] mr-2">•</span>
                          <span>Advanced crop analysis</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#64ffda] mr-2">•</span>
                          <span>Field-level weather insights</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#64ffda] mr-2">•</span>
                          <span>Yield prediction models</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Link href="/checkout?plan=professional" className="w-full">
                        <Button className="w-full bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f]">Upgrade</Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  {/* Enterprise Plan */}
                  <Card className="bg-[#112240]/70 border-[#64ffda]/10">
                    <CardHeader>
                      <CardTitle className="text-white">Enterprise</CardTitle>
                      <CardDescription className="text-white/70">For large operations</CardDescription>
                      <div className="mt-2">
                        <span className="text-3xl font-bold text-[#64ffda]">Custom</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="text-[#64ffda] mr-2">•</span>
                          <span>Everything in Professional</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#64ffda] mr-2">•</span>
                          <span>Custom integrations</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#64ffda] mr-2">•</span>
                          <span>Advanced analytics</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#64ffda] mr-2">•</span>
                          <span>Dedicated account manager</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Link href="/contact-sales" className="w-full">
                        <Button
                          variant="outline"
                          className="w-full border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10"
                        >
                          Contact Sales
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="demo" className="space-y-6">
                <Card className="bg-[#112240]/70 border-[#64ffda]/10">
                  <CardHeader>
                    <CardTitle className="text-white">Request a Personalized Demo</CardTitle>
                    <CardDescription className="text-white/70">
                      See how TerraBit can transform your specific farming operations
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Farm Size (acres)</label>
                          <select className="w-full bg-[#0a192f]/50 border border-[#64ffda]/20 rounded-md p-2 text-white">
                            <option>Less than 100</option>
                            <option>100 - 500</option>
                            <option>500 - 1,000</option>
                            <option>1,000 - 5,000</option>
                            <option>More than 5,000</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Primary Crops</label>
                          <select className="w-full bg-[#0a192f]/50 border border-[#64ffda]/20 rounded-md p-2 text-white">
                            <option>Corn</option>
                            <option>Soybeans</option>
                            <option>Wheat</option>
                            <option>Cotton</option>
                            <option>Vegetables</option>
                            <option>Other</option>
                          </select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">What features are you most interested in?</label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="feature1"
                              className="rounded border-[#64ffda]/20 text-[#64ffda]"
                            />
                            <label htmlFor="feature1">Field Monitoring</label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="feature2"
                              className="rounded border-[#64ffda]/20 text-[#64ffda]"
                            />
                            <label htmlFor="feature2">Crop Analysis</label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="feature3"
                              className="rounded border-[#64ffda]/20 text-[#64ffda]"
                            />
                            <label htmlFor="feature3">Weather Insights</label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="feature4"
                              className="rounded border-[#64ffda]/20 text-[#64ffda]"
                            />
                            <label htmlFor="feature4">Resource Optimization</label>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Preferred Demo Date</label>
                        <input
                          type="date"
                          className="w-full bg-[#0a192f]/50 border border-[#64ffda]/20 rounded-md p-2 text-white"
                          min={new Date().toISOString().split("T")[0]}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Additional Comments</label>
                        <textarea
                          className="w-full bg-[#0a192f]/50 border border-[#64ffda]/20 rounded-md p-2 text-white h-24"
                          placeholder="Tell us about your specific needs or questions..."
                        ></textarea>
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter>
                    <ScheduleButton type="demo" className="w-full bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f]" />
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

