import { Button } from "@/components/ui/button"
import { BarChart3, PieChart, LineChart, ArrowRight, Database, TrendingUp, Zap } from "lucide-react"
import Link from "next/link"

export default function DataAnalyticsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(100,255,218,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(100,255,218,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">
              <span className="relative inline-block">
                Data Analytics Tools
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#64ffda]"></span>
              </span>
            </h2>
            <p className="text-xl text-white/80">
              Powerful analytics tools to help you understand and optimize your farming operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Link
              href="/analytics/yield-analysis"
              className="border border-[#64ffda]/10 rounded-lg p-6 bg-[#112240]/50 backdrop-blur-sm hover:bg-[#112240]/80 transition-all duration-300 hover:translate-y-[-4px] group"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[#64ffda]/10 flex items-center justify-center mr-4 group-hover:bg-[#64ffda]/20 transition-colors">
                  <BarChart3 className="h-6 w-6 text-[#64ffda]" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#64ffda] transition-colors">
                  Yield Analysis
                </h3>
              </div>
              <p className="text-white/70 mb-4">
                Track and analyze crop yields across your fields. Compare performance year-over-year and identify areas
                for improvement.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-white/50">Updated daily</span>
                <Button
                  variant="link"
                  className="text-[#64ffda] p-0 flex items-center gap-2 hover:gap-3 transition-all"
                >
                  View Analysis <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </Link>

            <Link
              href="/analytics/soil-health"
              className="border border-[#64ffda]/10 rounded-lg p-6 bg-[#112240]/50 backdrop-blur-sm hover:bg-[#112240]/80 transition-all duration-300 hover:translate-y-[-4px] group"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[#64ffda]/10 flex items-center justify-center mr-4 group-hover:bg-[#64ffda]/20 transition-colors">
                  <PieChart className="h-6 w-6 text-[#64ffda]" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#64ffda] transition-colors">
                  Soil Health Metrics
                </h3>
              </div>
              <p className="text-white/70 mb-4">
                Monitor soil composition, nutrient levels, and moisture content. Receive recommendations for optimal
                soil management.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-white/50">Real-time data</span>
                <Button
                  variant="link"
                  className="text-[#64ffda] p-0 flex items-center gap-2 hover:gap-3 transition-all"
                >
                  View Analysis <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </Link>

            <Link
              href="/analytics/weather-impact"
              className="border border-[#64ffda]/10 rounded-lg p-6 bg-[#112240]/50 backdrop-blur-sm hover:bg-[#112240]/80 transition-all duration-300 hover:translate-y-[-4px] group"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[#64ffda]/10 flex items-center justify-center mr-4 group-hover:bg-[#64ffda]/20 transition-colors">
                  <LineChart className="h-6 w-6 text-[#64ffda]" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#64ffda] transition-colors">
                  Weather Impact
                </h3>
              </div>
              <p className="text-white/70 mb-4">
                Analyze how weather patterns affect your crops. Forecast potential impacts and plan mitigation
                strategies.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-white/50">Hourly updates</span>
                <Button
                  variant="link"
                  className="text-[#64ffda] p-0 flex items-center gap-2 hover:gap-3 transition-all"
                >
                  View Analysis <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </Link>

            <Link
              href="/analytics/resource-optimization"
              className="border border-[#64ffda]/10 rounded-lg p-6 bg-[#112240]/50 backdrop-blur-sm hover:bg-[#112240]/80 transition-all duration-300 hover:translate-y-[-4px] group"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[#64ffda]/10 flex items-center justify-center mr-4 group-hover:bg-[#64ffda]/20 transition-colors">
                  <Zap className="h-6 w-6 text-[#64ffda]" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#64ffda] transition-colors">
                  Resource Optimization
                </h3>
              </div>
              <p className="text-white/70 mb-4">
                Optimize water, fertilizer, and pesticide usage. Reduce waste and environmental impact while maximizing
                yields.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-white/50">Weekly recommendations</span>
                <Button
                  variant="link"
                  className="text-[#64ffda] p-0 flex items-center gap-2 hover:gap-3 transition-all"
                >
                  View Analysis <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </Link>
          </div>

          <div className="border border-[#64ffda]/10 rounded-lg p-8 bg-[#112240]/50 backdrop-blur-sm text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to unlock the power of your farm data?</h3>
            <p className="text-white/70 mb-6">
              Our comprehensive analytics platform helps you make data-driven decisions to optimize your farming
              operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/analytics/dashboard">
                <Button className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f] font-medium px-6 py-3 flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  Access Your Dashboard
                </Button>
              </Link>
              <Link href="/analytics/demo">
                <Button
                  variant="outline"
                  className="text-white border-white hover:bg-white/10 px-6 py-3 flex items-center gap-2"
                >
                  <TrendingUp className="h-5 w-5" />
                  Try Analytics Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

