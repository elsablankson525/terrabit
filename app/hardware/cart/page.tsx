"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Trash2, ShoppingCart, ArrowLeft, Plus, Minus, CreditCard, Truck } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { useToast } from "@/hooks/use-toast"

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, subtotal } = useCart()
  const { toast } = useToast()
  const [promoCode, setPromoCode] = useState("")
  const [isApplyingPromo, setIsApplyingPromo] = useState(false)

  const shipping = subtotal > 100 ? 0 : 15.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  const handleApplyPromo = () => {
    setIsApplyingPromo(true)

    // Simulate API call
    setTimeout(() => {
      setIsApplyingPromo(false)

      if (promoCode.toLowerCase() === "terrabit10") {
        toast({
          title: "Promo Code Applied",
          description: "10% discount has been applied to your order.",
          duration: 3000,
        })
      } else {
        toast({
          title: "Invalid Promo Code",
          description: "The promo code you entered is invalid or expired.",
          variant: "destructive",
          duration: 3000,
        })
      }
    }, 1000)
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0a192f] to-[#112240] text-white">
        {/* Header */}
        <header className="border-b border-[#64ffda]/10 py-4 px-6 backdrop-blur-sm bg-[#0a192f]/80 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link href="/" className="flex items-center mr-8">
              <h1 className="text-white font-bold text-xl">
                <span className="text-[#64ffda]">TERRA</span>
                <span className="ml-1">BIT</span>
              </h1>
              <div className="ml-2 w-2 h-2 rounded-full bg-[#64ffda] animate-pulse"></div>
            </Link>
          </div>
        </header>

        <div className="container mx-auto px-6 py-12">
          <div className="flex items-center mb-8">
            <Link href="/hardware">
              <Button variant="ghost" className="text-white hover:text-[#64ffda]">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Hardware Store
              </Button>
            </Link>
          </div>

          <div className="text-center py-16">
            <ShoppingCart className="h-16 w-16 mx-auto mb-4 text-[#64ffda]/30" />
            <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-white/70 mb-8 max-w-md mx-auto">
              Looks like you haven't added any products to your cart yet. Browse our hardware store to find the perfect
              agricultural technology for your farm.
            </p>
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
      {/* Header */}
      <header className="border-b border-[#64ffda]/10 py-4 px-6 backdrop-blur-sm bg-[#0a192f]/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center mr-8">
            <h1 className="text-white font-bold text-xl">
              <span className="text-[#64ffda]">TERRA</span>
              <span className="ml-1">BIT</span>
            </h1>
            <div className="ml-2 w-2 h-2 rounded-full bg-[#64ffda] animate-pulse"></div>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Link href="/hardware">
              <Button variant="ghost" className="text-white hover:text-[#64ffda]">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Hardware Store
              </Button>
            </Link>
          </div>
          <h1 className="text-2xl font-bold">Your Cart</h1>
          <Button
            variant="ghost"
            className="text-white/70 hover:text-white"
            onClick={() => {
              clearCart()
              toast({
                title: "Cart Cleared",
                description: "All items have been removed from your cart.",
                duration: 3000,
              })
            }}
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Clear Cart
          </Button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-1">
            <div className="space-y-4">
              {items.map((item) => (
                <Card key={item.id} className="bg-[#112240]/70 border-[#64ffda]/10">
                  <CardContent className="p-4">
                    <div className="flex items-center">
                      <div className="w-20 h-20 relative mr-4 bg-[#0a192f]/50 rounded-md overflow-hidden">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                      <div className="flex-1">
                        <Link href={`/hardware/product/${item.id}`}>
                          <h3 className="font-bold text-white hover:text-[#64ffda] transition-colors">{item.name}</h3>
                        </Link>
                        <p className="text-white/70 text-sm">Category: {item.category}</p>
                        <div className="text-[#64ffda] font-bold mt-1">${item.price.toFixed(2)}</div>
                      </div>
                      <div className="flex items-center">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-white/70 hover:text-white"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-white/70 hover:text-white"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="w-24 text-right font-bold">${(item.price * item.quantity).toFixed(2)}</div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="ml-4 text-white/70 hover:text-white"
                        onClick={() => {
                          removeItem(item.id)
                          toast({
                            title: "Item Removed",
                            description: `${item.name} has been removed from your cart.`,
                            duration: 3000,
                          })
                        }}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-80 shrink-0">
            <Card className="bg-[#112240]/70 border-[#64ffda]/10 sticky top-24">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>

                <div className="space-y-2 mb-4">
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
                  {shipping === 0 && (
                    <div className="text-[#64ffda] text-sm flex items-center mt-1">
                      <Truck className="h-3 w-3 mr-1" />
                      Free shipping on orders over $100
                    </div>
                  )}
                </div>

                <div className="flex items-center mb-4">
                  <Input
                    type="text"
                    placeholder="Promo Code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="bg-[#0a192f]/50 border-[#64ffda]/20 text-white"
                  />
                  <Button
                    className="ml-2 whitespace-nowrap bg-[#64ffda]/10 hover:bg-[#64ffda]/20 text-[#64ffda]"
                    onClick={handleApplyPromo}
                    disabled={isApplyingPromo || !promoCode.trim()}
                  >
                    {isApplyingPromo ? "Applying..." : "Apply"}
                  </Button>
                </div>

                <div className="border-t border-[#64ffda]/10 pt-4 mb-6">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <Link href="/checkout">
                  <Button className="w-full bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f] font-medium py-6">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Proceed to Checkout
                  </Button>
                </Link>

                <div className="mt-4 text-center text-white/50 text-sm">Secure checkout powered by Stripe</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

