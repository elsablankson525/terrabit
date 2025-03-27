"use client"

import { useEffect, useState } from "react"
import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function PremiumPage() {
  const { user, isLoading } = useAuth()
  const [hasPremium, setHasPremium] = useState(false)

  useEffect(() => {
    // Check if user has premium access
    if (user) {
      // This would typically be a check against your database
      // For now, we'll just simulate it
      setHasPremium(false)
    }
  }, [user])

  if (isLoading) {
    return <div className="container mx-auto py-8">Loading...</div>
  }

  const plans = [
    {
      name: "Basic",
      price: "$9.99",
      description: "Perfect for casual users",
      features: ["Basic search functionality", "Limited to 50 searches per day", "Standard results"],
    },
    {
      name: "Pro",
      price: "$19.99",
      description: "Great for power users",
      features: ["Advanced search algorithms", "Unlimited searches", "Priority support", "Ad-free experience"],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$49.99",
      description: "For businesses and teams",
      features: [
        "All Pro features",
        "Team collaboration tools",
        "API access",
        "Custom integrations",
        "Dedicated account manager",
      ],
    },
  ]

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">{user ? "Upgrade Your Experience" : "Premium Plans"}</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <Card key={plan.name} className={`flex flex-col ${plan.popular ? "border-primary shadow-lg" : ""}`}>
            {plan.popular && (
              <div className="bg-primary text-primary-foreground text-center py-1 text-sm font-medium">
                Most Popular
              </div>
            )}
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
              <div className="text-3xl font-bold mt-2">{plan.price}</div>
              <div className="text-sm text-muted-foreground">per month</div>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">{user ? (hasPremium ? "Current Plan" : "Upgrade Now") : "Sign Up"}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {!user && (
        <div className="text-center mt-8">
          <p className="text-muted-foreground mb-4">Already have an account? Sign in to manage your subscription.</p>
          <Button variant="outline">Sign In</Button>
        </div>
      )}
    </div>
  )
}

