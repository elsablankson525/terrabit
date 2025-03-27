"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Check, Upload, Building, Tractor, Users, FileText } from "lucide-react"
import Link from "next/link"

export default function PartnerApplicationPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    companyName: "",
    website: "",
    industry: "",
    foundedYear: "",
    employeeCount: "",
    address: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    annualProduction: "",
    productTypes: "",
    challenges: "",
    supportOffering: "",
    verificationDocuments: [] as string[],
    additionalInfo: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNextStep = () => {
    setStep((prev) => prev + 1)
  }

  const handlePrevStep = () => {
    setStep((prev) => prev - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(5) // Move to success step
  }

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
          <h1 className="text-3xl font-bold">Apply to Become a Partner</h1>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step >= 1 ? "bg-[#64ffda] text-[#0a192f]" : "bg-[#112240] text-white/50"
                  }`}
                >
                  {step > 1 ? <Check className="h-5 w-5" /> : "1"}
                </div>
                <div className={`h-1 w-16 mx-1 ${step > 1 ? "bg-[#64ffda]" : "bg-[#112240]"}`}></div>
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step >= 2 ? "bg-[#64ffda] text-[#0a192f]" : "bg-[#112240] text-white/50"
                  }`}
                >
                  {step > 2 ? <Check className="h-5 w-5" /> : "2"}
                </div>
                <div className={`h-1 w-16 mx-1 ${step > 2 ? "bg-[#64ffda]" : "bg-[#112240]"}`}></div>
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step >= 3 ? "bg-[#64ffda] text-[#0a192f]" : "bg-[#112240] text-white/50"
                  }`}
                >
                  {step > 3 ? <Check className="h-5 w-5" /> : "3"}
                </div>
                <div className={`h-1 w-16 mx-1 ${step > 3 ? "bg-[#64ffda]" : "bg-[#112240]"}`}></div>
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step >= 4 ? "bg-[#64ffda] text-[#0a192f]" : "bg-[#112240] text-white/50"
                  }`}
                >
                  {step > 4 ? <Check className="h-5 w-5" /> : "4"}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 text-center text-sm text-white/70">
              <div>Company Information</div>
              <div>Production Capacity</div>
              <div>Support Offering</div>
              <div>Verification</div>
            </div>
          </div>

          {step === 1 && (
            <Card className="bg-[#112240]/70 border-[#64ffda]/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Building className="h-5 w-5 mr-2 text-[#64ffda]" />
                  Company Information
                </CardTitle>
                <CardDescription className="text-white/70">
                  Tell us about your farm or agricultural business
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="companyName">Company/Farm Name</Label>
                      <Input
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        required
                        className="mt-1 bg-[#0a192f]/50 border-[#64ffda]/20 focus:border-[#64ffda] focus:ring-[#64ffda]/20"
                      />
                    </div>
                    <div>
                      <Label htmlFor="website">Website (Optional)</Label>
                      <Input
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        className="mt-1 bg-[#0a192f]/50 border-[#64ffda]/20 focus:border-[#64ffda] focus:ring-[#64ffda]/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="industry">Primary Industry</Label>
                      <select
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        required
                        className="w-full mt-1 bg-[#0a192f]/50 border border-[#64ffda]/20 rounded-md p-2 text-white"
                      >
                        <option value="">Select industry</option>
                        <option value="crop-farming">Crop Farming</option>
                        <option value="livestock">Livestock</option>
                        <option value="dairy">Dairy</option>
                        <option value="horticulture">Horticulture</option>
                        <option value="aquaculture">Aquaculture</option>
                        <option value="ag-tech">Agricultural Technology</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="foundedYear">Year Founded</Label>
                      <Input
                        id="foundedYear"
                        name="foundedYear"
                        value={formData.foundedYear}
                        onChange={handleInputChange}
                        required
                        className="mt-1 bg-[#0a192f]/50 border-[#64ffda]/20 focus:border-[#64ffda] focus:ring-[#64ffda]/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="employeeCount">Number of Employees</Label>
                      <select
                        id="employeeCount"
                        name="employeeCount"
                        value={formData.employeeCount}
                        onChange={handleInputChange}
                        required
                        className="w-full mt-1 bg-[#0a192f]/50 border border-[#64ffda]/20 rounded-md p-2 text-white"
                      >
                        <option value="">Select range</option>
                        <option value="1-10">1-10</option>
                        <option value="11-50">11-50</option>
                        <option value="51-200">51-200</option>
                        <option value="201-500">201-500</option>
                        <option value="500+">500+</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="address">Business Address</Label>
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

                  <div className="border-t border-[#64ffda]/10 pt-4 mt-4">
                    <h3 className="font-medium text-white mb-4">Primary Contact Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="contactName">Contact Name</Label>
                        <Input
                          id="contactName"
                          name="contactName"
                          value={formData.contactName}
                          onChange={handleInputChange}
                          required
                          className="mt-1 bg-[#0a192f]/50 border-[#64ffda]/20 focus:border-[#64ffda] focus:ring-[#64ffda]/20"
                        />
                      </div>
                      <div>
                        <Label htmlFor="contactEmail">Email</Label>
                        <Input
                          id="contactEmail"
                          name="contactEmail"
                          type="email"
                          value={formData.contactEmail}
                          onChange={handleInputChange}
                          required
                          className="mt-1 bg-[#0a192f]/50 border-[#64ffda]/20 focus:border-[#64ffda] focus:ring-[#64ffda]/20"
                        />
                      </div>
                      <div>
                        <Label htmlFor="contactPhone">Phone</Label>
                        <Input
                          id="contactPhone"
                          name="contactPhone"
                          value={formData.contactPhone}
                          onChange={handleInputChange}
                          required
                          className="mt-1 bg-[#0a192f]/50 border-[#64ffda]/20 focus:border-[#64ffda] focus:ring-[#64ffda]/20"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f]" onClick={handleNextStep}>
                  Next Step
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>
          )}

          {step === 2 && (
            <Card className="bg-[#112240]/70 border-[#64ffda]/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Tractor className="h-5 w-5 mr-2 text-[#64ffda]" />
                  Production Capacity
                </CardTitle>
                <CardDescription className="text-white/70">
                  Tell us about your production capabilities and challenges
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="annualProduction">Annual Production Capacity</Label>
                    <Textarea
                      id="annualProduction"
                      name="annualProduction"
                      value={formData.annualProduction}
                      onChange={handleInputChange}
                      required
                      placeholder="Describe your annual production capacity (e.g., tons of crops, number of livestock, etc.)"
                      className="mt-1 bg-[#0a192f]/50 border-[#64ffda]/20 focus:border-[#64ffda] focus:ring-[#64ffda]/20 min-h-[100px]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="productTypes">Types of Products</Label>
                    <Textarea
                      id="productTypes"
                      name="productTypes"
                      value={formData.productTypes}
                      onChange={handleInputChange}
                      required
                      placeholder="List the main agricultural products you produce"
                      className="mt-1 bg-[#0a192f]/50 border-[#64ffda]/20 focus:border-[#64ffda] focus:ring-[#64ffda]/20 min-h-[100px]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="challenges">Challenges Faced</Label>
                    <Textarea
                      id="challenges"
                      name="challenges"
                      value={formData.challenges}
                      onChange={handleInputChange}
                      required
                      placeholder="Describe the main challenges you face in your agricultural operations"
                      className="mt-1 bg-[#0a192f]/50 border-[#64ffda]/20 focus:border-[#64ffda] focus:ring-[#64ffda]/20 min-h-[100px]"
                    />
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  className="border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10"
                  onClick={handlePrevStep}
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous Step
                </Button>
                <Button className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f]" onClick={handleNextStep}>
                  Next Step
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>
          )}

          {step === 3 && (
            <Card className="bg-[#112240]/70 border-[#64ffda]/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Users className="h-5 w-5 mr-2 text-[#64ffda]" />
                  Support Offering
                </CardTitle>
                <CardDescription className="text-white/70">
                  How can you support other farmers in the TerraBit network?
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="supportOffering">Support Offering</Label>
                    <Textarea
                      id="supportOffering"
                      name="supportOffering"
                      value={formData.supportOffering}
                      onChange={handleInputChange}
                      required
                      placeholder="Describe how you can support other farmers with their needs (e.g., knowledge sharing, equipment sharing, bulk purchasing, etc.)"
                      className="mt-1 bg-[#0a192f]/50 border-[#64ffda]/20 focus:border-[#64ffda] focus:ring-[#64ffda]/20 min-h-[200px]"
                    />
                  </div>

                  <div className="p-4 border border-[#64ffda]/20 bg-[#64ffda]/5 rounded-md">
                    <h3 className="font-bold text-[#64ffda] mb-2">Partner Benefits</h3>
                    <p className="text-white/80 mb-4">As a TerraBit partner, you'll have access to:</p>
                    <ul className="space-y-2 text-white/80">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#64ffda] mr-2 shrink-0 mt-0.5" />
                        <span>Discounted TerraBit subscription rates</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#64ffda] mr-2 shrink-0 mt-0.5" />
                        <span>Priority access to new features and technologies</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#64ffda] mr-2 shrink-0 mt-0.5" />
                        <span>Networking opportunities with other agricultural leaders</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#64ffda] mr-2 shrink-0 mt-0.5" />
                        <span>Co-marketing opportunities and increased visibility</span>
                      </li>
                    </ul>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  className="border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10"
                  onClick={handlePrevStep}
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous Step
                </Button>
                <Button className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f]" onClick={handleNextStep}>
                  Next Step
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>
          )}

          {step === 4 && (
            <Card className="bg-[#112240]/70 border-[#64ffda]/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-[#64ffda]" />
                  Verification Details
                </CardTitle>
                <CardDescription className="text-white/70">
                  Provide verification documents and additional information
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="verificationDocuments">Upload Verification Documents</Label>
                    <div className="mt-1 p-6 border border-dashed border-[#64ffda]/20 rounded-md bg-[#0a192f]/50 flex flex-col items-center justify-center">
                      <Upload className="h-12 w-12 text-[#64ffda]/50 mb-4" />
                      <p className="text-white/70 mb-2">Drag and drop files here, or click to browse</p>
                      <p className="text-white/50 text-sm mb-4">
                        Accepted formats: PDF, JPG, PNG (Max size: 10MB per file)
                      </p>
                      <Button
                        type="button"
                        variant="outline"
                        className="border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10"
                      >
                        Browse Files
                      </Button>
                      <input
                        type="file"
                        id="verificationDocuments"
                        className="hidden"
                        multiple
                        accept=".pdf,.jpg,.jpeg,.png"
                      />
                    </div>
                    <p className="text-white/50 text-sm mt-2">
                      Please upload business registration, farming certifications, or other relevant documents.
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="additionalInfo">Additional Information</Label>
                    <Textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                      placeholder="Any additional information you'd like to share about your farm or business"
                      className="mt-1 bg-[#0a192f]/50 border-[#64ffda]/20 focus:border-[#64ffda] focus:ring-[#64ffda]/20 min-h-[100px]"
                    />
                  </div>

                  <div className="p-4 border border-[#64ffda]/20 bg-[#64ffda]/5 rounded-md">
                    <h3 className="font-bold text-[#64ffda] mb-2">Next Steps</h3>
                    <p className="text-white/80">
                      After submitting your application, our team will review your information and contact you within
                      5-7 business days to discuss the next steps in the partnership process.
                    </p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="terms" className="rounded border-[#64ffda]/20 text-[#64ffda]" required />
                    <Label htmlFor="terms">
                      I agree to the{" "}
                      <Link href="/terms" className="text-[#64ffda] hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-[#64ffda] hover:underline">
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  className="border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10"
                  onClick={handlePrevStep}
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous Step
                </Button>
                <Button
                  type="submit"
                  className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f]"
                  onClick={handleSubmit}
                >
                  Submit Application
                </Button>
              </CardFooter>
            </Card>
          )}

          {step === 5 && (
            <Card className="bg-[#112240]/70 border-[#64ffda]/10">
              <CardHeader>
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#64ffda]/20 flex items-center justify-center">
                    <Check className="h-8 w-8 text-[#64ffda]" />
                  </div>
                </div>
                <CardTitle className="text-white text-center">Application Submitted!</CardTitle>
                <CardDescription className="text-white/70 text-center">
                  Thank you for applying to become a TerraBit partner
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="p-4 border border-[#64ffda]/20 bg-[#64ffda]/5 rounded-md mb-6">
                  <h3 className="font-bold text-[#64ffda] mb-2">What Happens Next?</h3>
                  <ul className="space-y-4 text-white/80">
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-[#64ffda]/20 flex items-center justify-center shrink-0 mt-0.5 mr-3">
                        <span className="text-[#64ffda] text-sm">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Application Review</h4>
                        <p className="text-sm">Our team will review your application within 5-7 business days.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-[#64ffda]/20 flex items-center justify-center shrink-0 mt-0.5 mr-3">
                        <span className="text-[#64ffda] text-sm">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Initial Contact</h4>
                        <p className="text-sm">
                          A TerraBit representative will contact you to discuss your application and answer any
                          questions.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-[#64ffda]/20 flex items-center justify-center shrink-0 mt-0.5 mr-3">
                        <span className="text-[#64ffda] text-sm">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Partnership Agreement</h4>
                        <p className="text-sm">
                          If approved, we'll send you a partnership agreement outlining the terms and benefits.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-[#64ffda]/20 flex items-center justify-center shrink-0 mt-0.5 mr-3">
                        <span className="text-[#64ffda] text-sm">4</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Onboarding</h4>
                        <p className="text-sm">
                          Once the agreement is signed, we'll begin the onboarding process to integrate you into the
                          TerraBit partner network.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="text-center">
                  <p className="text-white/70 mb-6">
                    You will receive a confirmation email shortly with a copy of your application. If you have any
                    questions, please contact our partnership team at partners@terrabit.com.
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
    </div>
  )
}

