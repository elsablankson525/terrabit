import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AboutSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-[#64ffda]/10 to-[#64ffda]/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-[#64ffda]/10 to-[#64ffda]/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">
              <span className="relative inline-block">
                About TerraBit
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#64ffda]"></span>
              </span>
            </h2>
          </div>

          <div className="border border-[#64ffda]/10 rounded-lg p-8 bg-[#112240]/50 backdrop-blur-sm">
            <p className="text-white/80 text-lg mb-6 leading-relaxed">
              TerraBit™ is a data-driven platform designed to analyse your farming needs, allowing you to better utilise
              inputs and natural resources. A subsidiary of TerraBit, Climate Corporation is dedicated to help farmers
              to sustainably increase productivity with digital tools.
            </p>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              TerraBit™ enables the farmer to collect, store and analyse data on a single easy-to-use platform. Our
              mission is to empower farmers with the insights they need to make informed decisions, optimize their
              operations, and increase yields while promoting sustainable farming practices.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="border border-[#64ffda]/10 rounded-lg p-6 bg-[#0a192f]/50 hover:bg-[#0a192f]/70 transition-all">
                <h3 className="text-[#64ffda] font-bold mb-3">Data Collection</h3>
                <p className="text-white/70">Gather field data through sensors, satellites, and manual inputs</p>
              </div>
              <div className="border border-[#64ffda]/10 rounded-lg p-6 bg-[#0a192f]/50 hover:bg-[#0a192f]/70 transition-all">
                <h3 className="text-[#64ffda] font-bold mb-3">Smart Analysis</h3>
                <p className="text-white/70">Process and analyze data to generate actionable insights</p>
              </div>
              <div className="border border-[#64ffda]/10 rounded-lg p-6 bg-[#0a192f]/50 hover:bg-[#0a192f]/70 transition-all">
                <h3 className="text-[#64ffda] font-bold mb-3">Sustainable Farming</h3>
                <p className="text-white/70">Optimize resource usage to promote environmental sustainability</p>
              </div>
            </div>

            <div className="text-center">
              <Link href="/about">
                <Button className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f] font-medium px-6 py-3 inline-flex items-center gap-2 group">
                  Learn More About TerraBit
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

