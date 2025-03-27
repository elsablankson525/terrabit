"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export function RequestDemoButton({ className, variant = "default", size = "default" }) {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [company, setCompany] = useState("")
  const [farmSize, setFarmSize] = useState("")
  const [interests, setInterests] = useState([])
  const [message, setMessage] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (!name || !email || !farmSize) {
      alert("Please fill in all required fields")
      return
    }

    setSubmitting(true)

    // Simulate submission process
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false)
        setOpen(false)

        // Reset form fields
        setName("")
        setEmail("")
        setPhone("")
        setCompany("")
        setFarmSize("")
        setInterests([])
        setMessage("")
      }, 3000)
    }, 1500)
  }

  const interestOptions = [
    { id: "yield-analysis", label: "Yield Analysis" },
    { id: "soil-health", label: "Soil Health Monitoring" },
    { id: "weather", label: "Weather Forecasting" },
    { id: "equipment", label: "Equipment Integration" },
    { id: "prescriptions", label: "Variable Rate Prescriptions" },
    { id: "imagery", label: "Satellite Imagery" },
  ]

  return (
    <>
      <Button variant={variant} size={size} className={className} onClick={() => setOpen(true)}>
        <Play className="h-4 w-4 mr-2" />
        Request Full Demo
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Request a Full TerraBit Demo</DialogTitle>
            <DialogDescription>
              Fill out the form below and our team will contact you to schedule a personalized demo.
            </DialogDescription>
          </DialogHeader>

          {!submitted ? (
            <>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Full Name*</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="email">Email Address*</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john.doe@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(123) 456-7890"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="company">Farm/Company Name</Label>
                    <Input
                      id="company"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Sunshine Farms"
                    />
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="farmSize">Farm Size (acres)*</Label>
                  <Select value={farmSize} onValueChange={setFarmSize} required>
                    <SelectTrigger id="farmSize">
                      <SelectValue placeholder="Select farm size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="< 100">Less than 100 acres</SelectItem>
                      <SelectItem value="100-500">100 - 500 acres</SelectItem>
                      <SelectItem value="501-1000">501 - 1,000 acres</SelectItem>
                      <SelectItem value="1001-5000">1,001 - 5,000 acres</SelectItem>
                      <SelectItem value="> 5000">More than 5,000 acres</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label>Areas of Interest (select all that apply)</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {interestOptions.map((option) => (
                      <div key={option.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={option.id}
                          checked={interests.includes(option.id)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setInterests([...interests, option.id])
                            } else {
                              setInterests(interests.filter((id) => id !== option.id))
                            }
                          }}
                        />
                        <label
                          htmlFor={option.id}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your specific needs or questions..."
                    rows={3}
                  />
                </div>
              </div>

              <DialogFooter>
                <Button variant="outline" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleSubmit} disabled={submitting}>
                  {submitting ? "Submitting..." : "Request Demo"}
                </Button>
              </DialogFooter>
            </>
          ) : (
            <div className="py-8 text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Demo Request Submitted!</h3>
              <p className="text-muted-foreground">
                Thank you for your interest in TerraBit. A member of our team will contact you within 24 hours to
                schedule your personalized demo.
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

