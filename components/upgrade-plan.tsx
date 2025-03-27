"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export function UpgradePlan({ currentPlan = "Basic", buttonText = "Upgrade Plan", className, variant = "default" }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)

  const plans = [
    { id: "basic", name: "Basic", price: "$49", features: ["5 fields", "Basic analytics", "7-day data history"] },
    {
      id: "pro",
      name: "Pro",
      price: "$99",
      features: ["15 fields", "Advanced analytics", "30-day data history", "API access"],
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "Custom",
      features: ["Unlimited fields", "Full analytics suite", "1-year data history", "API access", "Dedicated support"],
    },
  ]

  const handleUpgrade = () => {
    if (!selectedPlan) {
      alert("Please select a plan to continue")
      return
    }

    setIsProcessing(true)

    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false)
      setIsOpen(false)
      alert(`Successfully upgraded to ${selectedPlan} plan!`)
    }, 1500)
  }

  return (
    <>
      <Button variant={variant} className={className} onClick={() => setIsOpen(true)}>
        {buttonText}
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Upgrade Your Plan</DialogTitle>
            <DialogDescription>Choose a plan that works best for your farming needs</DialogDescription>
          </DialogHeader>

          <div className="py-4">
            <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan}>
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`flex items-start space-x-3 space-y-0 rounded-md border p-4 mb-3 ${
                    selectedPlan === plan.name ? "border-primary" : "border-input"
                  }`}
                >
                  <RadioGroupItem value={plan.name} id={plan.id} className="mt-1" />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <Label htmlFor={plan.id} className="font-medium">
                        {plan.name}
                      </Label>
                      <span className="font-bold">{plan.price}</span>
                    </div>
                    <ul className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="mr-2">•</span> {feature}
                        </li>
                      ))}
                    </ul>
                    {currentPlan === plan.name && <div className="mt-2 text-sm text-primary">Current plan</div>}
                  </div>
                </div>
              ))}
            </RadioGroup>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleUpgrade} disabled={isProcessing}>
              {isProcessing ? "Processing..." : "Confirm Upgrade"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

