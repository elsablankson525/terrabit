import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Database,
  BarChart,
  Droplets,
  Cloud,
  Bluetooth,
  Satellite,
  PenTool,
  Shield,
  Tractor,
  LineChart,
  Zap,
  ArrowRight,
} from "lucide-react"

export default function AboutPage() {
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
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="py-2 text-white hover:text-[#64ffda] transition-colors">
                Home
              </Link>
              <Link href="/hardware" className="py-2 text-white hover:text-[#64ffda] transition-colors">
                Hardware Store
              </Link>
              <Link href="/pricing" className="py-2 text-white hover:text-[#64ffda] transition-colors">
                Pricing
              </Link>
              <Link href="/partners" className="py-2 text-white hover:text-[#64ffda] transition-colors">
                Partners
              </Link>
              <Link href="/contact" className="py-2 text-white hover:text-[#64ffda] transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                Log In
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f] font-medium">Create Account</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative py-16 px-6">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-[#64ffda]/10 to-[#64ffda]/5 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-[#64ffda]/10 to-[#64ffda]/5 blur-3xl"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(100,255,218,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(100,255,218,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">
              <span className="relative inline-block">
                About TerraBit
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#64ffda]"></span>
              </span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              A cutting-edge digital farming platform designed to empower farmers through data-driven insights
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-lg leading-relaxed mb-8">
              TerraBit is a cutting-edge digital farming platform designed to empower farmers by integrating field data,
              weather insights, and advanced analytics to optimize agricultural decisions. Developed as a tool to
              maximize yield and efficiency, TerraBit helps growers collect, store, and analyze data from their fields
              in real time, offering a seamless way to manage every acre.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-[#64ffda]">What Does TerraBit Do?</h2>
            <p className="mb-6">TerraBit provides farmers with a centralized system to:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card className="bg-[#112240]/70 border-[#64ffda]/10">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-[#64ffda]/10 flex items-center justify-center shrink-0 mr-4">
                      <Database className="h-5 w-5 text-[#64ffda]" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Collect Data</h3>
                      <p className="text-white/70">
                        Using a device like the TerraBit Drive, which connects to tractors or combines via a diagnostic
                        port, farmers can automatically capture equipment data—such as planting rates, application
                        details, and harvest yields—wirelessly syncing it to a mobile app.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#112240]/70 border-[#64ffda]/10">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-[#64ffda]/10 flex items-center justify-center shrink-0 mr-4">
                      <BarChart className="h-5 w-5 text-[#64ffda]" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Visualize Performance</h3>
                      <p className="text-white/70">
                        Through high-definition satellite imagery and field maps, TerraBit lets users monitor crop
                        health, spot variability, and identify issues like nutrient deficiencies or pest pressures as
                        they emerge.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#112240]/70 border-[#64ffda]/10">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-[#64ffda]/10 flex items-center justify-center shrink-0 mr-4">
                      <Droplets className="h-5 w-5 text-[#64ffda]" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Optimize Inputs</h3>
                      <p className="text-white/70">
                        With tools to create variable-rate seed and fertilizer prescriptions, TerraBit tailors
                        recommendations to specific field zones, leveraging historical data and predictive models to
                        boost productivity while minimizing waste.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#112240]/70 border-[#64ffda]/10">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-[#64ffda]/10 flex items-center justify-center shrink-0 mr-4">
                      <Cloud className="h-5 w-5 text-[#64ffda]" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Stay Informed</h3>
                      <p className="text-white/70">
                        The platform delivers real-time weather updates, short-term forecasts, and alerts, helping
                        farmers plan operations like planting or spraying with confidence.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-[#64ffda]">Key Features</h2>
            <div className="space-y-6 mb-12">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-[#64ffda]/10 flex items-center justify-center shrink-0 mr-4">
                  <Bluetooth className="h-5 w-5 text-[#64ffda]" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">TerraBit Drive</h3>
                  <p className="text-white/70">
                    A Bluetooth-enabled device that plugs into machinery, turning raw equipment data into actionable
                    insights displayed on a tablet or phone.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-[#64ffda]/10 flex items-center justify-center shrink-0 mr-4">
                  <Satellite className="h-5 w-5 text-[#64ffda]" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Field Health Insights</h3>
                  <p className="text-white/70">
                    Satellite imagery processed with advanced algorithms highlights areas needing attention, giving
                    farmers a clear picture of crop conditions.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-[#64ffda]/10 flex items-center justify-center shrink-0 mr-4">
                  <PenTool className="h-5 w-5 text-[#64ffda]" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Scripting Tools</h3>
                  <p className="text-white/70">
                    Farmers can build customized planting or fertility plans, adjusting rates based on soil types, past
                    yields, or other variables.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-[#64ffda]/10 flex items-center justify-center shrink-0 mr-4">
                  <Shield className="h-5 w-5 text-[#64ffda]" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Data Ownership</h3>
                  <p className="text-white/70">
                    TerraBit emphasizes user control, ensuring farmers own their data, choose who it's shared with, and
                    that it's never sold to third parties.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-[#64ffda]">How It Works</h2>
            <div className="bg-[#112240]/70 border border-[#64ffda]/10 rounded-lg p-6 mb-12">
              <p className="text-white/90 italic">
                Imagine you're a farmer preparing for the season. You plug the TerraBit Drive into your tractor, and as
                you plant, it records seed spacing and depth, instantly mapping it on your app. During the growing
                season, TerraBit's imagery shows a patchy area in your field; you scout it, find a pest issue, and
                adjust your treatment plan. At harvest, yield data flows in, letting you compare this year's results to
                past seasons and tweak next year's strategy—all from one platform.
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-[#64ffda]">Why TerraBit Matters</h2>
            <p className="mb-8">
              Farming is full of variables—weather, soil, equipment—and TerraBit aims to simplify that complexity. By
              merging data science with practical tools, it helps farmers make informed choices, potentially increasing
              profits while adapting to challenges like climate shifts or resource constraints. It's built to work with
              various equipment brands and connect with other farm management systems, making it flexible for operations
              big or small.
            </p>

            <div className="bg-[#112240]/70 border border-[#64ffda]/10 rounded-lg p-8 mt-12">
              <h3 className="text-xl font-bold mb-4">Ready to Transform Your Farming Operation?</h3>
              <p className="mb-6">
                Join thousands of farmers who are already using TerraBit to optimize their operations, increase yields,
                and make data-driven decisions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/signup">
                  <Button className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f] font-medium">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Features Section */}
      <div className="bg-[#0a192f] py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-12 text-center">Additional Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-[#112240]/70 border-[#64ffda]/10">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-[#64ffda]/10 flex items-center justify-center mx-auto mb-4">
                  <Tractor className="h-8 w-8 text-[#64ffda]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Equipment Integration</h3>
                <p className="text-white/70">
                  Seamlessly connect with over 80% of modern agricultural equipment brands through our universal adapter
                  technology.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#112240]/70 border-[#64ffda]/10">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-[#64ffda]/10 flex items-center justify-center mx-auto mb-4">
                  <LineChart className="h-8 w-8 text-[#64ffda]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Predictive Analytics</h3>
                <p className="text-white/70">
                  Leverage AI-powered insights to predict optimal planting times, potential yield outcomes, and resource
                  requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#112240]/70 border-[#64ffda]/10">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-[#64ffda]/10 flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-[#64ffda]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Real-Time Alerts</h3>
                <p className="text-white/70">
                  Receive instant notifications about weather changes, equipment issues, or field conditions requiring
                  immediate attention.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience TerraBit?</h2>
          <p className="text-xl text-white/80 mb-8">
            Join thousands of farmers who are transforming their operations with data-driven insights.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/signup">
              <Button size="lg" className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f] font-medium px-8">
                Start Free Trial
              </Button>
            </Link>
            <Link href="/demo">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8">
                Request Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

