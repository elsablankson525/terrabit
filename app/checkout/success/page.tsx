"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Truck, Calendar, FileText } from "lucide-react"

export default function CheckoutSuccessPage() {
  // Generate a random order number
  const orderNumber = `TB-${Math.floor(100000 + Math.random() * 900000)}`

  // Calculate estimated delivery date (7-10 days from now)
  const today = new Date()
  const deliveryDate = new Date(today)
  deliveryDate.setDate(today.getDate() + 7 + Math.floor(Math.random() * 4))
  const formattedDeliveryDate = deliveryDate.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a192f] to-[#112240] text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#64ffda]/20 mb-4">
              <CheckCircle className="h-8 w-8 text-[#64ffda]" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
            <p className="text-white/70">
              Thank you for your purchase. We've received your order and will begin processing it right away.
            </p>
          </div>

          <Card className="bg-[#112240]/70 border-[#64ffda]/10 mb-6">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row justify-between mb-6">
                <div>
                  <h2 className="text-lg font-medium mb-1">Order Number</h2>
                  <p className="text-[#64ffda] font-mono">{orderNumber}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <h2 className="text-lg font-medium mb-1">Estimated Delivery</h2>
                  <p className="text-white/70">{formattedDeliveryDate}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-[#64ffda]/20 flex items-center justify-center mr-3">
                    <CheckCircle className="h-4 w-4 text-[#64ffda]" />
                  </div>
                  <div>
                    <h3 className="font-medium">Order Confirmed</h3>
                    <p className="text-white/70 text-sm">Your order has been received and is being processed</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-[#64ffda]/20 flex items-center justify-center mr-3">
                    <Truck className="h-4 w-4 text-[#64ffda]" />
                  </div>
                  <div>
                    <h3 className="font-medium">Shipping</h3>
                    <p className="text-white/70 text-sm">Your items will be shipped within 1-2 business days</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-[#64ffda]/20 flex items-center justify-center mr-3">
                    <Calendar className="h-4 w-4 text-[#64ffda]" />
                  </div>
                  <div>
                    <h3 className="font-medium">Delivery</h3>
                    <p className="text-white/70 text-sm">Estimated delivery date: {formattedDeliveryDate}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <Link href="/hardware" className="flex-1">
              <Button variant="outline" className="w-full border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10">
                Continue Shopping
              </Button>
            </Link>
            <Link href="#" className="flex-1">
              <Button className="w-full bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f]">
                <FileText className="h-4 w-4 mr-2" />
                View Order Details
              </Button>
            </Link>
          </div>

          <div className="text-center text-white/70">
            <p>A confirmation email has been sent to your email address.</p>
            <p className="mt-2">
              Have questions about your order?{" "}
              <Link href="/contact" className="text-[#64ffda] hover:underline">
                Contact our support team
              </Link>
            </p>
          </div>

          <div className="mt-12 border-t border-[#64ffda]/10 pt-8">
            <h2 className="text-xl font-bold mb-4">Recommended for You</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <Link href="/hardware" key={i}>
                  <Card className="bg-[#112240]/50 border-[#64ffda]/10 hover:bg-[#112240]/70 transition-colors">
                    <CardContent className="p-4">
                      <h3 className="font-medium mb-1">Related Product {i}</h3>
                      <p className="text-white/70 text-sm mb-2">Enhance your agricultural monitoring system</p>
                      <div className="flex items-center text-[#64ffda] text-sm">
                        View Details <ArrowRight className="h-3 w-3 ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

