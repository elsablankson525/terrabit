import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { SolutionExplorer } from "@/components/solution-explorer"

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a192f] to-[#112240] text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">
            <span className="relative inline-block">
              Our Solutions
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#64ffda]"></span>
            </span>
          </h1>
          <p className="text-xl text-white/80">
            TerraBit offers a comprehensive suite of digital farming solutions designed to optimize your agricultural
            operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Field Monitoring */}
          <div className="border border-[#64ffda]/10 rounded-lg p-8 bg-[#112240]/50 backdrop-blur-sm hover:bg-[#112240]/80 transition-all duration-300 hover:translate-y-[-4px] group">
            <div className="w-12 h-12 rounded-full bg-[#64ffda]/10 flex items-center justify-center mb-6 group-hover:bg-[#64ffda]/20 transition-colors">
              <span className="text-[#64ffda] text-2xl font-bold">1</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#64ffda] transition-colors">
              Field Monitoring
            </h3>
            <p className="text-white/70 mb-6">
              Real-time monitoring of your fields with advanced sensors and satellite imagery to track crop health, soil
              conditions, and more.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-[#64ffda] mr-2">•</span>
                <span>Satellite and drone imagery</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#64ffda] mr-2">•</span>
                <span>Soil moisture tracking</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#64ffda] mr-2">•</span>
                <span>Crop health indicators</span>
              </li>
            </ul>
            <SolutionExplorer solution="field-monitoring">
              <Button variant="link" className="text-[#64ffda] p-0 flex items-center gap-2 hover:gap-3 transition-all">
                Learn more <ArrowRight className="h-4 w-4" />
              </Button>
            </SolutionExplorer>
          </div>

          {/* Crop Analysis */}
          <div className="border border-[#64ffda]/10 rounded-lg p-8 bg-[#112240]/50 backdrop-blur-sm hover:bg-[#112240]/80 transition-all duration-300 hover:translate-y-[-4px] group">
            <div className="w-12 h-12 rounded-full bg-[#64ffda]/10 flex items-center justify-center mb-6 group-hover:bg-[#64ffda]/20 transition-colors">
              <span className="text-[#64ffda] text-2xl font-bold">2</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#64ffda] transition-colors">
              Crop Analysis
            </h3>
            <p className="text-white/70 mb-6">
              Advanced analytics to help you understand crop performance, identify issues early, and optimize yield
              potential.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-[#64ffda] mr-2">•</span>
                <span>Yield prediction models</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#64ffda] mr-2">•</span>
                <span>Disease and pest detection</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#64ffda] mr-2">•</span>
                <span>Growth stage tracking</span>
              </li>
            </ul>
            <SolutionExplorer solution="crop-analysis">
              <Button variant="link" className="text-[#64ffda] p-0 flex items-center gap-2 hover:gap-3 transition-all">
                Learn more <ArrowRight className="h-4 w-4" />
              </Button>
            </SolutionExplorer>
          </div>

          {/* Weather Insights */}
          <div className="border border-[#64ffda]/10 rounded-lg p-8 bg-[#112240]/50 backdrop-blur-sm hover:bg-[#112240]/80 transition-all duration-300 hover:translate-y-[-4px] group">
            <div className="w-12 h-12 rounded-full bg-[#64ffda]/10 flex items-center justify-center mb-6 group-hover:bg-[#64ffda]/20 transition-colors">
              <span className="text-[#64ffda] text-2xl font-bold">3</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#64ffda] transition-colors">
              Weather Insights
            </h3>
            <p className="text-white/70 mb-6">
              Hyperlocal weather forecasting and historical analysis to help you plan operations and mitigate
              weather-related risks.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-[#64ffda] mr-2">•</span>
                <span>Field-level forecasts</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#64ffda] mr-2">•</span>
                <span>Precipitation tracking</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#64ffda] mr-2">•</span>
                <span>Growing degree day calculations</span>
              </li>
            </ul>
            <SolutionExplorer solution="weather-insights">
              <Button variant="link" className="text-[#64ffda] p-0 flex items-center gap-2 hover:gap-3 transition-all">
                Learn more <ArrowRight className="h-4 w-4" />
              </Button>
            </SolutionExplorer>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to transform your farming operation?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f] font-medium px-8 py-6">
              Find a Plan
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/10 px-8 py-6">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

