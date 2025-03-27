"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, CreditCard, ShoppingCart, Check, Truck, Shield } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { useToast } from "@/hooks/use-toast"

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart()
  const { toast } = useToast()
  const [isProcessing, setIsProcessing] = useState(false)

  const shipping = subtotal > 100 ? 0 : 15.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvc: "",
    saveInfo: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast({
      title: "Order Placed Successfully!",
      description: "Your order has been placed and will be shipped soon.",
      duration: 5000,
    })

    // Clear cart and redirect to success page
    clearCart()
    window.location.href = "/checkout/success"
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0a192f] to-[#112240] text-white">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center py-16">
            <ShoppingCart className="h-16 w-16 mx-auto mb-4 text-[#64ffda]/30" />
            <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-white/70 mb-8 max-w-md mx-auto">You don't have any items in your cart to checkout.</p>
            <Link href="/hardware">
              <Button className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f] font-medium px-6 py-3">
                Browse Hardware Store
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a192f] to-[#112240] text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="flex items-center mb-8">
          <Link href="/hardware/cart">
            <Button variant="ghost" className="text-white hover:text-[#64ffda]">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Cart
            </Button>
          </Link>
          <h1 className="text-2xl font-bold ml-4">Checkout</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Checkout Form */}
          <div className="flex-1">
            <form onSubmit={handleSubmit}>
              <Card className="bg-[#112240]/70 border-[#64ffda]/10 mb-6">
                <CardHeader>
                  <CardTitle className="text-white">Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="email" className="text-white">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-[#0a192f]/50 border-[#64ffda]/20 text-white mt-1"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#112240]/70 border-[#64ffda]/10 mb-6">
                <CardHeader>
                  <CardTitle className="text-white">Shipping Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-white">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="bg-[#0a192f]/50 border-[#64ffda]/20 text-white mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-white">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="bg-[#0a192f]/50 border-[#64ffda]/20 text-white mt-1"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="address" className="text-white">
                        Address
                      </Label>
                      <Input
                        id="address"
                        name="address"
                        required
                        value={formData.address}
                        onChange={handleChange}
                        className="bg-[#0a192f]/50 border-[#64ffda]/20 text-white mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="city" className="text-white">
                        City
                      </Label>
                      <Input
                        id="city"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        className="bg-[#0a192f]/50 border-[#64ffda]/20 text-white mt-1"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <Label htmlFor="state" className="text-white">
                          State
                        </Label>
                        <Input
                          id="state"
                          name="state"
                          required
                          value={formData.state}
                          onChange={handleChange}
                          className="bg-[#0a192f]/50 border-[#64ffda]/20 text-white mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="zipCode" className="text-white">
                          ZIP Code
                        </Label>
                        <Input
                          id="zipCode"
                          name="zipCode"
                          required
                          value={formData.zipCode}
                          onChange={handleChange}
                          className="bg-[#0a192f]/50 border-[#64ffda]/20 text-white mt-1"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="country" className="text-white">
                        Country
                      </Label>
                      <select
                        id="country"
                        name="country"
                        required
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full bg-[#0a192f]/50 border-[#64ffda]/20 text-white rounded-md mt-1 p-2"
                      >
                        <option value="United States">United States</option>
                        <option value="Canada">Canada</option>
                        <option value="Mexico">Mexico</option>
                        <option value="United Kingdom">United Kingdom</option>
                      </select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#112240]/70 border-[#64ffda]/10 mb-6">
                <CardHeader>
                  <CardTitle className="text-white">Payment Method</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup defaultValue="card" className="mb-4">
                    <div className="flex items-center space-x-2 border border-[#64ffda]/20 rounded-md p-3 bg-[#0a192f]/30">
                      <RadioGroupItem value="card" id="card" className="text-[#64ffda]" />
                      <Label htmlFor="card" className="flex items-center">
                        <CreditCard className="h-5 w-5 mr-2 text-[#64ffda]" />
                        Credit / Debit Card
                      </Label>
                    </div>
                  </RadioGroup>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="cardNumber" className="text-white">
                        Card Number
                      </Label>
                      <Input
                        id="cardNumber"
                        name="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        required
                        value={formData.cardNumber}
                        onChange={handleChange}
                        className="bg-[#0a192f]/50 border-[#64ffda]/20 text-white mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cardName" className="text-white">
                        Name on Card
                      </Label>
                      <Input
                        id="cardName"
                        name="cardName"
                        required
                        value={formData.cardName}
                        onChange={handleChange}
                        className="bg-[#0a192f]/50 border-[#64ffda]/20 text-white mt-1"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry" className="text-white">
                          Expiry Date
                        </Label>
                        <Input
                          id="expiry"
                          name="expiry"
                          placeholder="MM/YY"
                          required
                          value={formData.expiry}
                          onChange={handleChange}
                          className="bg-[#0a192f]/50 border-[#64ffda]/20 text-white mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvc" className="text-white">
                          CVC
                        </Label>
                        <Input
                          id="cvc"
                          name="cvc"
                          placeholder="123"
                          required
                          value={formData.cvc}
                          onChange={handleChange}
                          className="bg-[#0a192f]/50 border-[#64ffda]/20 text-white mt-1"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-end">
                <Button
                  type="submit"
                  className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f] font-medium px-8 py-6"
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <>
                      <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-[#0a192f] border-t-transparent"></div>
                      Processing...
                    </>
                  ) : (
                    <>Complete Order</>
                  )}
                </Button>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-80 shrink-0">
            <Card className="bg-[#112240]/70 border-[#64ffda]/10 sticky top-24">
              <CardHeader>
                <CardTitle className="text-white">Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <div className="flex-1">
                        <div className="font-medium">{item.name}</div>
                        <div className="text-white/70 text-sm">Qty: {item.quantity}</div>
                      </div>
                      <div className="text-right">${(item.price * item.quantity).toFixed(2)}</div>
                    </div>
                  ))}
                </div>

                <Separator className="my-4 bg-[#64ffda]/10" />

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-white/70">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Shipping</span>
                    <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                </div>

                <Separator className="my-4 bg-[#64ffda]/10" />

                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                <div className="mt-6 space-y-2">
                  <div className="flex items-center text-white/70 text-sm">
                    <Shield className="h-4 w-4 mr-2 text-[#64ffda]" />
                    Secure checkout
                  </div>
                  <div className="flex items-center text-white/70 text-sm">
                    <Truck className="h-4 w-4 mr-2 text-[#64ffda]" />
                    Free shipping on orders over $100
                  </div>
                  <div className="flex items-center text-white/70 text-sm">
                    <Check className="h-4 w-4 mr-2 text-[#64ffda]" />
                    30-day money-back guarantee
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

