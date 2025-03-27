import { Check, CreditCard, Smartphone } from "lucide-react"
import Link from "next/link"
import { UpgradePlan } from "@/components/upgrade-plan"
import { ContactSales } from "@/components/contact-sales"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a192f] to-[#112240] text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">
            <span className="relative inline-block">
              Simple, Transparent Pricing
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#64ffda]"></span>
            </span>
          </h1>
          <p className="text-xl text-white/80">
            Choose the plan that's right for your farming operation. All plans include access to our core platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Basic Plan */}
          <div className="border border-[#64ffda]/10 rounded-lg overflow-hidden transition-all duration-300 hover:translate-y-[-4px] group">
            <div className="p-6 bg-[#112240]/70">
              <h3 className="text-xl font-bold mb-2">Basic</h3>
              <div className="flex items-end gap-1 mb-4">
                <span className="text-4xl font-bold">$5</span>
                <span className="text-white/70 mb-1">/acre/year</span>
              </div>
              <p className="text-white/70">Perfect for small farms getting started with digital agriculture.</p>
            </div>
            <div className="p-6 bg-[#112240]/50">
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#64ffda] mr-2 shrink-0" />
                  <span>Field monitoring (up to 500 acres)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#64ffda] mr-2 shrink-0" />
                  <span>Basic weather forecasts</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#64ffda] mr-2 shrink-0" />
                  <span>Mobile app access</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#64ffda] mr-2 shrink-0" />
                  <span>Email support</span>
                </li>
              </ul>
              <UpgradePlan
                currentPlan="Basic"
                variant="default"
                className="w-full bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f] font-medium"
              >
                Get Started
              </UpgradePlan>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="border-2 border-[#64ffda] rounded-lg overflow-hidden transition-all duration-300 hover:translate-y-[-4px] group relative">
            <div className="absolute top-0 right-0 bg-[#64ffda] text-[#0a192f] px-3 py-1 text-xs font-bold">
              MOST POPULAR
            </div>
            <div className="p-6 bg-[#112240]/70">
              <h3 className="text-xl font-bold mb-2">Professional</h3>
              <div className="flex items-end gap-1 mb-4">
                <span className="text-4xl font-bold">$12</span>
                <span className="text-white/70 mb-1">/acre/year</span>
              </div>
              <p className="text-white/70">Ideal for medium-sized operations seeking comprehensive tools.</p>
            </div>
            <div className="p-6 bg-[#112240]/50">
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#64ffda] mr-2 shrink-0" />
                  <span>Everything in Basic</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#64ffda] mr-2 shrink-0" />
                  <span>Advanced crop analysis</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#64ffda] mr-2 shrink-0" />
                  <span>Field-level weather insights</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#64ffda] mr-2 shrink-0" />
                  <span>Yield prediction models</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#64ffda] mr-2 shrink-0" />
                  <span>Priority support</span>
                </li>
              </ul>
              <UpgradePlan
                currentPlan="Professional"
                variant="default"
                className="w-full bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f] font-medium"
              >
                Get Started
              </UpgradePlan>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="border border-[#64ffda]/10 rounded-lg overflow-hidden transition-all duration-300 hover:translate-y-[-4px] group">
            <div className="p-6 bg-[#112240]/70">
              <h3 className="text-xl font-bold mb-2">Enterprise</h3>
              <div className="flex items-end gap-1 mb-4">
                <span className="text-xl font-bold">Custom Pricing</span>
              </div>
              <p className="text-white/70">For large operations with advanced needs and custom requirements.</p>
            </div>
            <div className="p-6 bg-[#112240]/50">
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#64ffda] mr-2 shrink-0" />
                  <span>Everything in Professional</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#64ffda] mr-2 shrink-0" />
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#64ffda] mr-2 shrink-0" />
                  <span>Advanced analytics and reporting</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#64ffda] mr-2 shrink-0" />
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#64ffda] mr-2 shrink-0" />
                  <span>24/7 premium support</span>
                </li>
              </ul>
              <ContactSales className="w-full border border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10">
                Contact Sales
              </ContactSales>
            </div>
          </div>
        </div>

        {/* Payment Options */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Payment Options</h2>
          <p className="text-white/70 mb-8">Choose from multiple payment methods for your convenience.</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            <Link
              href="/payment/credit-card"
              className="border border-[#64ffda]/10 rounded-lg p-4 bg-[#112240]/50 hover:bg-[#112240]/80 transition-all flex flex-col items-center justify-center gap-2 group"
            >
              <CreditCard className="h-8 w-8 text-[#64ffda] group-hover:scale-110 transition-transform" />
              <span>Credit Card</span>
            </Link>
            <Link
              href="/payment/debit-card"
              className="border border-[#64ffda]/10 rounded-lg p-4 bg-[#112240]/50 hover:bg-[#112240]/80 transition-all flex flex-col items-center justify-center gap-2 group"
            >
              <CreditCard className="h-8 w-8 text-[#64ffda] group-hover:scale-110 transition-transform" />
              <span>Debit Card</span>
            </Link>
            <Link
              href="/payment/google-pay"
              className="border border-[#64ffda]/10 rounded-lg p-4 bg-[#112240]/50 hover:bg-[#112240]/80 transition-all flex flex-col items-center justify-center gap-2 group"
            >
              <Smartphone className="h-8 w-8 text-[#64ffda] group-hover:scale-110 transition-transform" />
              <span>Google Pay</span>
            </Link>
            <Link
              href="/payment/apple-pay"
              className="border border-[#64ffda]/10 rounded-lg p-4 bg-[#112240]/50 hover:bg-[#112240]/80 transition-all flex flex-col items-center justify-center gap-2 group"
            >
              <Smartphone className="h-8 w-8 text-[#64ffda] group-hover:scale-110 transition-transform" />
              <span>Apple Pay</span>
            </Link>
            <Link
              href="/payment/crypto"
              className="border border-[#64ffda]/10 rounded-lg p-4 bg-[#112240]/50 hover:bg-[#112240]/80 transition-all flex flex-col items-center justify-center gap-2 group"
            >
              <div className="text-[#64ffda] text-xl font-bold group-hover:scale-110 transition-transform">₿</div>
              <span>Cryptocurrency</span>
            </Link>
            <Link
              href="/payment/paypal"
              className="border border-[#64ffda]/10 rounded-lg p-4 bg-[#112240]/50 hover:bg-[#112240]/80 transition-all flex flex-col items-center justify-center gap-2 group"
            >
              <div className="text-[#64ffda] text-xl font-bold group-hover:scale-110 transition-transform">P</div>
              <span>PayPal</span>
            </Link>
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border border-[#64ffda]/10 rounded-lg p-6 bg-[#112240]/50">
              <h3 className="text-xl font-bold mb-2">Can I switch plans later?</h3>
              <p className="text-white/70">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing
                cycle.
              </p>
            </div>
            <div className="border border-[#64ffda]/10 rounded-lg p-6 bg-[#112240]/50">
              <h3 className="text-xl font-bold mb-2">Is there a free trial available?</h3>
              <p className="text-white/70">
                We offer a 30-day free trial for all new users. No credit card required to get started.
              </p>
            </div>
            <div className="border border-[#64ffda]/10 rounded-lg p-6 bg-[#112240]/50">
              <h3 className="text-xl font-bold mb-2">What hardware is required?</h3>
              <p className="text-white/70">
                Our basic plan works with your existing equipment. For advanced features, we recommend our TerraBit
                sensors and weather stations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

