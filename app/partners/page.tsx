import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a192f] to-[#112240] text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">
            <span className="relative inline-block">
              Our Partners
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#64ffda]"></span>
            </span>
          </h1>
          <p className="text-xl text-white/80">
            TerraBit collaborates with industry leaders to provide comprehensive solutions for modern agriculture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16">
          <div className="border border-[#64ffda]/10 rounded-lg p-8 bg-[#112240]/50 backdrop-blur-sm hover:bg-[#112240]/80 transition-all duration-300 hover:translate-y-[-4px]">
            <h3 className="text-2xl font-bold mb-4 text-[#64ffda]">Technology Partners</h3>
            <p className="text-white/70 mb-6">
              We work with leading technology companies to integrate cutting-edge solutions into our platform.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="border border-[#64ffda]/10 rounded p-4 text-center bg-[#0a192f]/50">
                <div className="text-white font-bold">TechFarm Inc.</div>
              </div>
              <div className="border border-[#64ffda]/10 rounded p-4 text-center bg-[#0a192f]/50">
                <div className="text-white font-bold">AgriTech Solutions</div>
              </div>
              <div className="border border-[#64ffda]/10 rounded p-4 text-center bg-[#0a192f]/50">
                <div className="text-white font-bold">DataHarvest</div>
              </div>
              <div className="border border-[#64ffda]/10 rounded p-4 text-center bg-[#0a192f]/50">
                <div className="text-white font-bold">SensorTech</div>
              </div>
            </div>
            <Button
              variant="link"
              className="text-[#64ffda] p-0 flex items-center gap-2 hover:gap-3 transition-all"
              asChild
            >
              <a href="https://terrabit-partners.com/technology" target="_blank" rel="noopener noreferrer">
                Learn more about our technology partners <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="border border-[#64ffda]/10 rounded-lg p-8 bg-[#112240]/50 backdrop-blur-sm hover:bg-[#112240]/80 transition-all duration-300 hover:translate-y-[-4px]">
            <h3 className="text-2xl font-bold mb-4 text-[#64ffda]">Distribution Partners</h3>
            <p className="text-white/70 mb-6">
              Our network of distributors ensures TerraBit solutions are available to farmers worldwide.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="border border-[#64ffda]/10 rounded p-4 text-center bg-[#0a192f]/50">
                <div className="text-white font-bold">Global Ag Supply</div>
              </div>
              <div className="border border-[#64ffda]/10 rounded p-4 text-center bg-[#0a192f]/50">
                <div className="text-white font-bold">FarmDirect</div>
              </div>
              <div className="border border-[#64ffda]/10 rounded p-4 text-center bg-[#0a192f]/50">
                <div className="text-white font-bold">AgriGlobal</div>
              </div>
              <div className="border border-[#64ffda]/10 rounded p-4 text-center bg-[#0a192f]/50">
                <div className="text-white font-bold">FarmTech Distributors</div>
              </div>
            </div>
            <Button
              variant="link"
              className="text-[#64ffda] p-0 flex items-center gap-2 hover:gap-3 transition-all"
              asChild
            >
              <Link href="/partners/find-distributor">
                Find a distributor near you <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="border border-[#64ffda]/10 rounded-lg p-8 bg-[#112240]/50 backdrop-blur-sm max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Become a Partner</h2>
          <p className="text-white/80 text-center mb-8">
            Join our partner ecosystem and help shape the future of digital agriculture. We offer comprehensive partner
            programs with attractive benefits.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="border border-[#64ffda]/10 rounded p-4 text-center bg-[#0a192f]/50">
              <h3 className="font-bold text-[#64ffda] mb-2">Technology Partners</h3>
              <p className="text-sm text-white/70">Integrate your technology with our platform</p>
            </div>
            <div className="border border-[#64ffda]/10 rounded p-4 text-center bg-[#0a192f]/50">
              <h3 className="font-bold text-[#64ffda] mb-2">Resellers</h3>
              <p className="text-sm text-white/70">Sell TerraBit solutions to your customers</p>
            </div>
            <div className="border border-[#64ffda]/10 rounded p-4 text-center bg-[#0a192f]/50">
              <h3 className="font-bold text-[#64ffda] mb-2">Strategic Alliances</h3>
              <p className="text-sm text-white/70">Collaborate on joint solutions and initiatives</p>
            </div>
          </div>
          <div className="text-center">
            <Button className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f] font-medium px-8 py-4" asChild>
              <Link href="/partners/apply">Apply to Become a Partner</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

