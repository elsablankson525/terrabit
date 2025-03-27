"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, MapPin, Truck, Calendar, CreditCard, Phone, Mail, Clock, Check } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

// Sample distributor data - in a real app, this would come from an API
const distributors = [
  {
    id: 1,
    name: "AgriTech Solutions",
    distance: "2.3 miles",
    address: "123 Farm Road, Farmville, CA 94123",
    phone: "(555) 123-4567",
    email: "info@agritechsolutions.com",
    rating: 4.8,
    specialties: ["Soil Sensors", "Weather Stations", "Irrigation Systems"],
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "FarmDirect Supply",
    distance: "5.7 miles",
    address: "456 Harvest Lane, Croptown, CA 94124",
    phone: "(555) 987-6543",
    email: "sales@farmdirect.com",
    rating: 4.6,
    specialties: ["Fertilizers", "Seeds", "Farm Equipment"],
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Rural Tech Distributors",
    distance: "8.2 miles",
    address: "789 Field Avenue, Agraria, CA 94125",
    phone: "(555) 456-7890",
    email: "contact@ruraltech.com",
    rating: 4.9,
    specialties: ["Smart Farming", "Drones", "Precision Agriculture"],
    image: "/placeholder.svg?height=80&width=80",
  },
]

export default function FindDistributorPage() {
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null)
  const [locationStatus, setLocationStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [selectedDistributor, setSelectedDistributor] = useState<number | null>(null)
  const [step, setStep] = useState<"find" | "contact" | "delivery" | "payment" | "tracking">("find")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    deliveryDate: "",
    deliveryTime: "",
    notes: "",
    paymentMethod: "credit-card",
  })
  const router = useRouter()

  useEffect(() => {
    if (locationStatus === "idle") {
      setLocationStatus("loading")
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            })
            setLocationStatus("success")
          },
          (error) => {
            console.error("Error getting location:", error)
            setLocationStatus("error")
          },
        )
      } else {
        setLocationStatus("error")
      }
    }
  }, [locationStatus])

  const handleDistributorSelect = (id: number) => {
    setSelectedDistributor(id)
    setStep("contact")
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep("delivery")
  }

  const handleDeliverySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep("payment")
  }

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep("tracking")
  }

  const selectedDistributorData = distributors.find((d) => d.id === selectedDistributor)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a192f] to-[#112240] text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8 flex items-center gap-4">
          <Link href="/partners">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">Find a Distributor Near You</h1>
        </div>

        {step === "find" && (
          <>
            <div className="mb-8">
              <Card className="bg-[#112240]/70 border-[#64ffda]/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-[#64ffda]" />
                    Your Location
                  </CardTitle>
                  <CardDescription className="text-white/70">
                    We use your location to find the nearest distributors
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {locationStatus === "loading" && (
                    <div className="flex items-center justify-center p-6">
                      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#64ffda]"></div>
                      <span className="ml-3 text-white/70">Detecting your location...</span>
                    </div>
                  )}

                  {locationStatus === "success" && (
                    <div className="p-4 border border-[#64ffda]/20 bg-[#64ffda]/5 rounded-md">
                      <p className="text-white/80">
                        <span className="font-medium">Location detected!</span> We've found distributors near your
                        current location.
                      </p>
                    </div>
                  )}

                  {locationStatus === "error" && (
                    <div className="p-4 border border-red-500/20 bg-red-500/10 rounded-md">
                      <p className="text-white/80">
                        <span className="font-medium">Location detection failed.</span> Please enter your location
                        manually or allow location access.
                      </p>
                      <div className="mt-4">
                        <Label htmlFor="manual-location">Enter your city or zip code</Label>
                        <div className="flex gap-2 mt-1">
                          <Input
                            id="manual-location"
                            placeholder="City or ZIP code"
                            className="bg-[#0a192f]/50 border-[#64ffda]/20 focus:border-[#64ffda] focus:ring-[#64ffda]/20"
                          />
                          <Button className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f]">Search</Button>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold mb-6">Distributors Near You</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {distributors.map((distributor) => (
                <Card key={distributor.id} className="bg-[#112240]/70 border-[#64ffda]/10">
                  <CardHeader className="flex flex-row items-start gap-4 pb-2">
                    <img
                      src={distributor.image || "/placeholder.svg"}
                      alt={distributor.name}
                      className="w-16 h-16 rounded-md object-cover bg-[#0a192f]"
                    />
                    <div className="flex-1">
                      <CardTitle className="text-white">{distributor.name}</CardTitle>
                      <div className="flex items-center mt-1">
                        <MapPin className="h-4 w-4 text-[#64ffda] mr-1" />
                        <CardDescription className="text-white/70">{distributor.distance} away</CardDescription>
                      </div>
                    </div>
                    <div className="bg-[#64ffda]/10 px-2 py-1 rounded text-[#64ffda] text-sm font-medium">
                      {distributor.rating} ★
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80 text-sm mb-2">{distributor.address}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {distributor.specialties.map((specialty) => (
                        <span key={specialty} className="text-xs bg-[#0a192f] text-white/70 px-2 py-1 rounded-full">
                          {specialty}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-white/70">
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-1" />
                        {distributor.phone}
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-1" />
                        {distributor.email}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="w-full bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f]"
                      onClick={() => handleDistributorSelect(distributor.id)}
                    >
                      Select This Distributor
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </>
        )}

        {step === "contact" && selectedDistributorData && (
          <Card className="bg-[#112240]/70 border-[#64ffda]/10 max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-white">Contact Information</CardTitle>
              <CardDescription className="text-white/70">
                Please provide your contact details for {selectedDistributorData.name}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1 bg-[#0a192f]/50 border-[#64ffda]/20 focus:border-[#64ffda] focus:ring-[#64ffda]/20"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1 bg-[#0a192f]/50 border-[#64ffda]/20 focus:border-[#64ffda] focus:ring-[#64ffda]/20"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="mt-1 bg-[#0a192f]/50 border-[#64ffda]/20 focus:border-[#64ffda] focus:ring-[#64ffda]/20"
                    />
                  </div>
                  <div>
                    <Label htmlFor="address">Delivery Address</Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="mt-1 bg-[#0a192f]/50 border-[#64ffda]/20 focus:border-[#64ffda] focus:ring-[#64ffda]/20"
                    />
                  </div>
                </div>
                <div className="flex justify-between mt-6">
                  <Button
                    type="button"
                    variant="outline"
                    className="border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10"
                    onClick={() => setStep("find")}
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back
                  </Button>
                  <Button type="submit" className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f]">
                    Continue to Delivery
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {step === "delivery" && selectedDistributorData && (
          <Card className="bg-[#112240]/70 border-[#64ffda]/10 max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-white">Delivery Preferences</CardTitle>
              <CardDescription className="text-white/70">
                When would you like to receive your delivery from {selectedDistributorData.name}?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleDeliverySubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="deliveryDate" className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-[#64ffda]" />
                      Preferred Delivery Date
                    </Label>
                    <Input
                      id="deliveryDate"
                      name="deliveryDate"
                      type="date"
                      value={formData.deliveryDate}
                      onChange={handleInputChange}
                      required
                      min={new Date().toISOString().split("T")[0]}
                      className="mt-1 bg-[#0a192f]/50 border-[#64ffda]/20 focus:border-[#64ffda] focus:ring-[#64ffda]/20"
                    />
                  </div>
                  <div>
                    <Label htmlFor="deliveryTime" className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-[#64ffda]" />
                      Preferred Time Window
                    </Label>
                    <select
                      id="deliveryTime"
                      name="deliveryTime"
                      value={formData.deliveryTime}
                      onChange={handleInputChange}
                      required
                      className="w-full mt-1 bg-[#0a192f]/50 border border-[#64ffda]/20 rounded-md p-2 text-white"
                    >
                      <option value="">Select a time window</option>
                      <option value="morning">Morning (8AM - 12PM)</option>
                      <option value="afternoon">Afternoon (12PM - 4PM)</option>
                      <option value="evening">Evening (4PM - 8PM)</option>
                    </select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="notes" className="flex items-center">
                    <Truck className="h-4 w-4 mr-2 text-[#64ffda]" />
                    Delivery Instructions
                  </Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Any special instructions for delivery..."
                    className="mt-1 bg-[#0a192f]/50 border-[#64ffda]/20 focus:border-[#64ffda] focus:ring-[#64ffda]/20 min-h-[100px]"
                  />
                </div>
                <div className="flex justify-between mt-6">
                  <Button
                    type="button"
                    variant="outline"
                    className="border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10"
                    onClick={() => setStep("contact")}
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back
                  </Button>
                  <Button type="submit" className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f]">
                    Continue to Payment
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {step === "payment" && selectedDistributorData && (
          <Card className="bg-[#112240]/70 border-[#64ffda]/10 max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-white">Payment Options</CardTitle>
              <CardDescription className="text-white/70">
                Choose your preferred payment method for your order from {selectedDistributorData.name}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handlePaymentSubmit} className="space-y-4">
                <Tabs
                  defaultValue="credit-card"
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, paymentMethod: value }))}
                >
                  <TabsList className="grid grid-cols-3 mb-6 bg-[#0a192f]/50">
                    <TabsTrigger
                      value="credit-card"
                      className="data-[state=active]:bg-[#64ffda] data-[state=active]:text-[#0a192f]"
                    >
                      <CreditCard className="h-4 w-4 mr-2" />
                      Credit Card
                    </TabsTrigger>
                    <TabsTrigger
                      value="invoice"
                      className="data-[state=active]:bg-[#64ffda] data-[state=active]:text-[#0a192f]"
                    >
                      Invoice
                    </TabsTrigger>
                    <TabsTrigger
                      value="financing"
                      className="data-[state=active]:bg-[#64ffda] data-[state=active]:text-[#0a192f]"
                    >
                      Financing
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="credit-card" className="space-y-4">
                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        className="mt-1 bg-[#0a192f]/50 border-[#64ffda]/20 focus:border-[#64ffda] focus:ring-[#64ffda]/20"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiryDate">Expiry Date</Label>
                        <Input
                          id="expiryDate"
                          placeholder="MM/YY"
                          className="mt-1 bg-[#0a192f]/50 border-[#64ffda]/20 focus:border-[#64ffda] focus:ring-[#64ffda]/20"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input
                          id="cvv"
                          placeholder="123"
                          className="mt-1 bg-[#0a192f]/50 border-[#64ffda]/20 focus:border-[#64ffda] focus:ring-[#64ffda]/20"
                        />
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="invoice" className="space-y-4">
                    <div className="p-4 border border-[#64ffda]/20 bg-[#64ffda]/5 rounded-md">
                      <h3 className="font-bold text-[#64ffda] mb-2">Invoice Terms</h3>
                      <p className="text-white/80">
                        You will receive an invoice for your order. Payment is due within 30 days of receipt.
                      </p>
                    </div>
                    <div>
                      <Label htmlFor="poNumber">Purchase Order Number (Optional)</Label>
                      <Input
                        id="poNumber"
                        placeholder="Enter your PO number"
                        className="mt-1 bg-[#0a192f]/50 border-[#64ffda]/20 focus:border-[#64ffda] focus:ring-[#64ffda]/20"
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="financing" className="space-y-4">
                    <div className="p-4 border border-[#64ffda]/20 bg-[#64ffda]/5 rounded-md">
                      <h3 className="font-bold text-[#64ffda] mb-2">Financing Options</h3>
                      <p className="text-white/80">
                        We offer flexible financing options to help you manage your farm equipment purchases.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="financing-6"
                          name="financing-option"
                          className="text-[#64ffda]"
                          defaultChecked
                        />
                        <Label htmlFor="financing-6">6 months (0% interest)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="radio" id="financing-12" name="financing-option" className="text-[#64ffda]" />
                        <Label htmlFor="financing-12">12 months (2.9% interest)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="radio" id="financing-24" name="financing-option" className="text-[#64ffda]" />
                        <Label htmlFor="financing-24">24 months (4.9% interest)</Label>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="flex justify-between mt-6">
                  <Button
                    type="button"
                    variant="outline"
                    className="border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10"
                    onClick={() => setStep("delivery")}
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back
                  </Button>
                  <Button type="submit" className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f]">
                    Complete Order
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {step === "tracking" && selectedDistributorData && (
          <Card className="bg-[#112240]/70 border-[#64ffda]/10 max-w-2xl mx-auto">
            <CardHeader>
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-[#64ffda]/20 flex items-center justify-center">
                  <Truck className="h-8 w-8 text-[#64ffda]" />
                </div>
              </div>
              <CardTitle className="text-white text-center">Order Confirmed!</CardTitle>
              <CardDescription className="text-white/70 text-center">
                Your order has been placed with {selectedDistributorData.name}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-4 border border-[#64ffda]/20 bg-[#64ffda]/5 rounded-md mb-6">
                <h3 className="font-bold text-[#64ffda] mb-2">Order Details</h3>
                <div className="space-y-2 text-white/80">
                  <p>
                    <span className="font-medium">Order Number:</span> TB-
                    {Math.floor(Math.random() * 1000000)
                      .toString()
                      .padStart(6, "0")}
                  </p>
                  <p>
                    <span className="font-medium">Distributor:</span> {selectedDistributorData.name}
                  </p>
                  <p>
                    <span className="font-medium">Delivery Date:</span> {formData.deliveryDate} (
                    {formData.deliveryTime === "morning"
                      ? "8AM - 12PM"
                      : formData.deliveryTime === "afternoon"
                        ? "12PM - 4PM"
                        : "4PM - 8PM"}
                    )
                  </p>
                  <p>
                    <span className="font-medium">Payment Method:</span>{" "}
                    {formData.paymentMethod === "credit-card"
                      ? "Credit Card"
                      : formData.paymentMethod === "invoice"
                        ? "Invoice"
                        : "Financing"}
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-white mb-4">Delivery Tracking</h3>
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#64ffda]/20"></div>
                  <div className="space-y-6">
                    <div className="relative pl-10">
                      <div className="absolute left-0 w-8 h-8 rounded-full bg-[#64ffda] flex items-center justify-center">
                        <Check className="h-5 w-5 text-[#0a192f]" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Order Placed</h4>
                        <p className="text-sm text-white/70">Your order has been received and is being processed.</p>
                      </div>
                    </div>
                    <div className="relative pl-10">
                      <div className="absolute left-0 w-8 h-8 rounded-full bg-[#0a192f] border border-[#64ffda]/20 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-[#64ffda]"></div>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Order Processing</h4>
                        <p className="text-sm text-white/70">Your order is being prepared for shipment.</p>
                      </div>
                    </div>
                    <div className="relative pl-10">
                      <div className="absolute left-0 w-8 h-8 rounded-full bg-[#0a192f] border border-[#64ffda]/20 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-[#64ffda]/20"></div>
                      </div>
                      <div>
                        <h4 className="font-medium text-white/50">Out for Delivery</h4>
                        <p className="text-sm text-white/50">Your order will be delivered on your selected date.</p>
                      </div>
                    </div>
                    <div className="relative pl-10">
                      <div className="absolute left-0 w-8 h-8 rounded-full bg-[#0a192f] border border-[#64ffda]/20 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-[#64ffda]/20"></div>
                      </div>
                      <div>
                        <h4 className="font-medium text-white/50">Delivered</h4>
                        <p className="text-sm text-white/50">Your order has been delivered.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-white/70 mb-6">
                  You will receive email updates about your order status. You can also check the status anytime in your
                  account dashboard.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/dashboard">
                    <Button className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f]">Go to Dashboard</Button>
                  </Link>
                  <Link href="/">
                    <Button variant="outline" className="border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10">
                      Return to Home
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

