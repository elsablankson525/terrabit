"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { ArrowLeft, Check, AlertTriangle, Lock } from "lucide-react"
import Link from "next/link"

export default function AnalyticsDashboardPage() {
  const [hasSubscription] = useState(false) // In a real app, this would be determined by checking the user's subscription status

  if (!hasSubscription) {
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
            <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
          </div>

          <Card className="bg-[#112240]/70 border-[#64ffda]/10 max-w-3xl mx-auto">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-[#64ffda]/10 flex items-center justify-center mb-4">
                <Lock className="h-8 w-8 text-[#64ffda]" />
              </div>
              <CardTitle className="text-white text-2xl">Analytics Dashboard Access</CardTitle>
              <CardDescription className="text-white/70">
                You need an active subscription to access the analytics dashboard
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="p-4 border border-[#64ffda]/20 bg-[#64ffda]/5 rounded-md">
                  <h3 className="font-bold text-[#64ffda] mb-2">Why Subscribe to TerraBit Analytics?</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#64ffda] mr-2 shrink-0 mt-0.5" />
                      <span>Access comprehensive soil health analysis and recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#64ffda] mr-2 shrink-0 mt-0.5" />
                      <span>Monitor crop performance with real-time data and insights</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#64ffda] mr-2 shrink-0 mt-0.5" />
                      <span>Optimize resource usage to reduce costs and environmental impact</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#64ffda] mr-2 shrink-0 mt-0.5" />
                      <span>Make data-driven decisions to increase yields and profitability</span>
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="bg-[#0a192f]/50 border-[#64ffda]/10">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-white text-lg">Basic</CardTitle>
                      <div className="mt-1">
                        <span className="text-2xl font-bold text-[#64ffda]">$5</span>
                        <span className="text-white/70">/acre/year</span>
                      </div>
                    </CardHeader>
                    <CardContent className="text-sm">
                      <ul className="space-y-1">
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
                        <Button className="w-full bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f]">Select</Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card className="bg-[#0a192f]/50 border-[#64ffda] relative">
                    <div className="absolute top-0 right-0 bg-[#64ffda] text-[#0a192f] px-3 py-1 text-xs font-bold">
                      POPULAR
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-white text-lg">Professional</CardTitle>
                      <div className="mt-1">
                        <span className="text-2xl font-bold text-[#64ffda]">$12</span>
                        <span className="text-white/70">/acre/year</span>
                      </div>
                    </CardHeader>
                    <CardContent className="text-sm">
                      <ul className="space-y-1">
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
                        <Button className="w-full bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f]">Select</Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card className="bg-[#0a192f]/50 border-[#64ffda]/10">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-white text-lg">Enterprise</CardTitle>
                      <div className="mt-1">
                        <span className="text-xl font-bold text-[#64ffda]">Custom</span>
                      </div>
                    </CardHeader>
                    <CardContent className="text-sm">
                      <ul className="space-y-1">
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

                <div className="p-4 border border-yellow-500/20 bg-yellow-500/10 rounded-md">
                  <h3 className="font-bold text-yellow-400 mb-2 flex items-center">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Not Ready to Subscribe?
                  </h3>
                  <p className="text-white/80 mb-4">
                    Try our interactive demo to see how TerraBit can transform your farming operations.
                  </p>
                  <Link href="/analytics/demo">
                    <Button variant="outline" className="border-yellow-500/20 text-white hover:bg-yellow-500/10">
                      Try Analytics Demo
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  // If the user has a subscription, show the actual dashboard (this would be implemented in a real app)
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
          <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
        </div>

        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-4">Dashboard Content Would Appear Here</h2>
          <p className="text-white/70 mb-6">
            This is a placeholder for the actual analytics dashboard that would be shown to subscribed users.
          </p>
          <Link href="/dashboard">
            <Button className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f]">Return to Dashboard</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

