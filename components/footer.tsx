"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0a192f] border-t border-[#64ffda]/10 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center mb-4">
              <h1 className="text-white font-bold text-xl">
                <span className="text-[#64ffda]">TERRA</span>
                <span className="ml-1">BIT</span>
              </h1>
              <div className="ml-2 w-2 h-2 rounded-full bg-[#64ffda] animate-pulse"></div>
            </Link>
            <p className="text-white/70 mb-6">
              The all-in-one digital farming solution empowering farmers with data-driven insights and innovative ag
              tech.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/terrabit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#64ffda] transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://twitter.com/terrabit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#64ffda] transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://instagram.com/terrabit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#64ffda] transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://linkedin.com/company/terrabit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#64ffda] transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://youtube.com/terrabit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#64ffda] transition-colors"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/solutions/field-monitoring"
                  className="text-white/70 hover:text-[#64ffda] transition-colors"
                >
                  Field Monitoring
                </Link>
              </li>
              <li>
                <Link href="/solutions/crop-analysis" className="text-white/70 hover:text-[#64ffda] transition-colors">
                  Crop Analysis
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/weather-insights"
                  className="text-white/70 hover:text-[#64ffda] transition-colors"
                >
                  Weather Insights
                </Link>
              </li>
              <li>
                <Link href="/hardware" className="text-white/70 hover:text-[#64ffda] transition-colors">
                  Hardware Store
                </Link>
              </li>
              <li>
                <Link href="/analytics/dashboard" className="text-white/70 hover:text-[#64ffda] transition-colors">
                  Analytics Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white/70 hover:text-[#64ffda] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-white/70 hover:text-[#64ffda] transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-white/70 hover:text-[#64ffda] transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-[#64ffda] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-white/70 hover:text-[#64ffda] transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Stay Updated</h3>
            <p className="text-white/70 mb-4">
              Subscribe to our newsletter for the latest updates and agricultural insights.
            </p>
            <form
              className="flex flex-col space-y-2"
              onSubmit={(e) => {
                e.preventDefault()
                const form = e.target as HTMLFormElement
                const email = (form.elements.namedItem("email") as HTMLInputElement).value
                alert(`Thank you for subscribing with ${email}! You'll receive our newsletter soon.`)
                form.reset()
              }}
            >
              <div className="flex">
                <Input
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  className="bg-[#0a192f]/50 border-[#64ffda]/20 focus:border-[#64ffda] text-white rounded-r-none"
                  required
                />
                <Button type="submit" className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f] rounded-l-none">
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Subscribe</span>
                </Button>
              </div>
              <p className="text-xs text-white/50">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#64ffda]/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} TerraBit. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-white/50 hover:text-[#64ffda] text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-white/50 hover:text-[#64ffda] text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-white/50 hover:text-[#64ffda] text-sm transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

