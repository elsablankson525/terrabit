"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Clock,
  CheckCircle,
  MessageSquare,
  HelpCircle,
  FileText,
  Send,
} from "lucide-react"
import Link from "next/link"
import SearchBar from "@/components/search-bar"
import Footer from "@/components/footer"
import MobileMenu from "@/components/mobile-menu"
import BackToTop from "@/components/back-to-top"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert("Please fill in all required fields")
      return
    }

    setFormStatus("submitting")

    // Simulate form submission
    setTimeout(() => {
      // In a real application, you would send the form data to your backend
      console.log("Form submitted:", formData)
      setFormStatus("success")

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })

      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus("idle")
      }, 5000)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a192f] to-[#112240] text-white">
      {/* Header */}
      <header className="border-b border-[#64ffda]/10 py-4 px-6 backdrop-blur-sm bg-[#0a192f]/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <MobileMenu />
            <Link href="/" className="flex items-center mr-8">
              <h1 className="text-white font-bold text-xl">
                <span className="text-[#64ffda]">TERRA</span>
                <span className="ml-1">BIT</span>
              </h1>
              <div className="ml-2 w-2 h-2 rounded-full bg-[#64ffda] animate-pulse"></div>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="py-2 text-white hover:text-[#64ffda] transition-colors">
                Home
              </Link>
              <Link href="/hardware" className="py-2 text-white hover:text-[#64ffda] transition-colors">
                Hardware Store
              </Link>
              <Link href="/pricing" className="py-2 text-white hover:text-[#64ffda] transition-colors">
                Pricing
              </Link>
              <Link href="/partners" className="py-2 text-white hover:text-[#64ffda] transition-colors">
                Partners
              </Link>
              <Link href="/contact" className="py-2 text-[#64ffda] border-b border-[#64ffda] transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div className="hidden md:block ml-4">
            <SearchBar placeholder="Search..." className="w-64" />
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                Log In
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f] font-medium">Create Account</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative py-16 px-6">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-[#64ffda]/10 to-[#64ffda]/5 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-[#64ffda]/10 to-[#64ffda]/5 blur-3xl"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(100,255,218,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(100,255,218,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">
              <span className="relative inline-block">
                Contact Us
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#64ffda]"></span>
              </span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              We're here to help. Reach out to our team with any questions, feedback, or support needs.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Information */}
          <div className="w-full lg:w-1/3">
            <Card className="bg-[#112240]/70 border-[#64ffda]/10 mb-6">
              <CardHeader>
                <CardTitle className="text-white">Contact Information</CardTitle>
                <CardDescription className="text-white/70">Multiple ways to reach our team</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#64ffda]/10 flex items-center justify-center shrink-0 mr-4">
                    <Phone className="h-5 w-5 text-[#64ffda]" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Phone Support</h3>
                    <p className="text-white/70 mb-1">Customer Service:</p>
                    <a href="tel:+18005551234" className="text-[#64ffda] hover:underline">
                      +1 (800) 555-1234
                    </a>
                    <p className="text-white/70 mb-1 mt-2">Technical Support:</p>
                    <a href="tel:+18005555678" className="text-[#64ffda] hover:underline">
                      +1 (800) 555-5678
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#64ffda]/10 flex items-center justify-center shrink-0 mr-4">
                    <Mail className="h-5 w-5 text-[#64ffda]" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-white/70 mb-1">General Inquiries:</p>
                    <a href="mailto:info@terrabit.com" className="text-[#64ffda] hover:underline">
                      info@terrabit.com
                    </a>
                    <p className="text-white/70 mb-1 mt-2">Support:</p>
                    <a href="mailto:support@terrabit.com" className="text-[#64ffda] hover:underline">
                      support@terrabit.com
                    </a>
                    <p className="text-white/70 mb-1 mt-2">Sales:</p>
                    <a href="mailto:sales@terrabit.com" className="text-[#64ffda] hover:underline">
                      sales@terrabit.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#64ffda]/10 flex items-center justify-center shrink-0 mr-4">
                    <MapPin className="h-5 w-5 text-[#64ffda]" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Office Location</h3>
                    <p className="text-white/70">
                      123 AgTech Boulevard
                      <br />
                      Suite 500
                      <br />
                      San Francisco, CA 94105
                      <br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#64ffda]/10 flex items-center justify-center shrink-0 mr-4">
                    <Clock className="h-5 w-5 text-[#64ffda]" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Hours of Operation</h3>
                    <p className="text-white/70">
                      <span className="font-medium">Phone Support:</span>
                      <br />
                      Monday - Friday: 8:00 AM - 8:00 PM EST
                      <br />
                      Saturday: 9:00 AM - 5:00 PM EST
                      <br />
                      Sunday: Closed
                      <br />
                      <br />
                      <span className="font-medium">Email Support:</span>
                      <br />
                      24/7 - Response within 24 hours
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#112240]/70 border-[#64ffda]/10">
              <CardHeader>
                <CardTitle className="text-white">Connect With Us</CardTitle>
                <CardDescription className="text-white/70">Follow us on social media</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  <a
                    href="https://facebook.com/terrabit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 border border-[#64ffda]/10 rounded-lg hover:bg-[#64ffda]/5 transition-colors"
                    onClick={(e) => {
                      e.preventDefault()
                      window.open("https://facebook.com", "_blank")
                    }}
                  >
                    <Facebook className="h-8 w-8 text-[#64ffda] mb-2" />
                    <span className="text-sm">Facebook</span>
                  </a>
                  <a
                    href="https://twitter.com/terrabit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 border border-[#64ffda]/10 rounded-lg hover:bg-[#64ffda]/5 transition-colors"
                    onClick={(e) => {
                      e.preventDefault()
                      window.open("https://twitter.com", "_blank")
                    }}
                  >
                    <Twitter className="h-8 w-8 text-[#64ffda] mb-2" />
                    <span className="text-sm">Twitter</span>
                  </a>
                  <a
                    href="https://instagram.com/terrabit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 border border-[#64ffda]/10 rounded-lg hover:bg-[#64ffda]/5 transition-colors"
                    onClick={(e) => {
                      e.preventDefault()
                      window.open("https://instagram.com", "_blank")
                    }}
                  >
                    <Instagram className="h-8 w-8 text-[#64ffda] mb-2" />
                    <span className="text-sm">Instagram</span>
                  </a>
                  <a
                    href="https://linkedin.com/company/terrabit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 border border-[#64ffda]/10 rounded-lg hover:bg-[#64ffda]/5 transition-colors"
                    onClick={(e) => {
                      e.preventDefault()
                      window.open("https://linkedin.com", "_blank")
                    }}
                  >
                    <Linkedin className="h-8 w-8 text-[#64ffda] mb-2" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                  <a
                    href="https://youtube.com/terrabit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 border border-[#64ffda]/10 rounded-lg hover:bg-[#64ffda]/5 transition-colors"
                    onClick={(e) => {
                      e.preventDefault()
                      window.open("https://youtube.com", "_blank")
                    }}
                  >
                    <Youtube className="h-8 w-8 text-[#64ffda] mb-2" />
                    <span className="text-sm">YouTube</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-2/3">
            <Card className="bg-[#112240]/70 border-[#64ffda]/10">
              <CardHeader>
                <CardTitle className="text-white">Send Us a Message</CardTitle>
                <CardDescription className="text-white/70">
                  Fill out the form below and we'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                {formStatus === "success" ? (
                  <div className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-[#64ffda]/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-[#64ffda]" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-white/70 mb-6">
                      Thank you for reaching out. We've received your message and will get back to you shortly.
                    </p>
                    <Button
                      onClick={() => setFormStatus("idle")}
                      className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f]"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="mt-1 bg-[#0a192f]/50 border-[#64ffda]/20 focus:border-[#64ffda] focus:ring-[#64ffda]/20"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="mt-1 bg-[#0a192f]/50 border-[#64ffda]/20 focus:border-[#64ffda] focus:ring-[#64ffda]/20"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone">Phone Number (Optional)</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="mt-1 bg-[#0a192f]/50 border-[#64ffda]/20 focus:border-[#64ffda] focus:ring-[#64ffda]/20"
                          placeholder="(123) 456-7890"
                        />
                      </div>
                      <div>
                        <Label htmlFor="subject">Subject</Label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full mt-1 bg-[#0a192f]/50 border border-[#64ffda]/20 rounded-md p-2 text-white"
                        >
                          <option value="">Select a subject</option>
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Technical Support">Technical Support</option>
                          <option value="Sales">Sales</option>
                          <option value="Partnership">Partnership</option>
                          <option value="Feedback">Feedback</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="mt-1 bg-[#0a192f]/50 border-[#64ffda]/20 focus:border-[#64ffda] focus:ring-[#64ffda]/20 min-h-[150px]"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <div className="flex justify-end">
                      <Button
                        type="submit"
                        className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f] font-medium px-8 py-2"
                        disabled={formStatus === "submitting"}
                      >
                        {formStatus === "submitting" ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#0a192f]"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="h-5 w-5 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Support Options */}
      <div className="bg-[#0a192f] py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8 text-center">Additional Support Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-[#112240]/70 border-[#64ffda]/10">
              <CardHeader className="text-center pb-2">
                <div className="w-12 h-12 rounded-full bg-[#64ffda]/10 flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-6 w-6 text-[#64ffda]" />
                </div>
                <CardTitle className="text-white">Live Chat</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-white/70 mb-6">
                  Chat with our support team in real-time for immediate assistance with your questions.
                </p>
                <Button
                  className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f]"
                  onClick={() => {
                    alert("Live chat is now connecting... A support agent will be with you shortly.")
                  }}
                >
                  Start Live Chat
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-[#112240]/70 border-[#64ffda]/10">
              <CardHeader className="text-center pb-2">
                <div className="w-12 h-12 rounded-full bg-[#64ffda]/10 flex items-center justify-center mx-auto mb-4">
                  <HelpCircle className="h-6 w-6 text-[#64ffda]" />
                </div>
                <CardTitle className="text-white">Help Center</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-white/70 mb-6">
                  Browse our knowledge base for answers to frequently asked questions and troubleshooting guides.
                </p>
                <Link href="/support/knowledge-center">
                  <Button className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f]">Visit Help Center</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-[#112240]/70 border-[#64ffda]/10">
              <CardHeader className="text-center pb-2">
                <div className="w-12 h-12 rounded-full bg-[#64ffda]/10 flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-6 w-6 text-[#64ffda]" />
                </div>
                <CardTitle className="text-white">Submit a Ticket</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-white/70 mb-6">
                  Create a support ticket for complex issues that require detailed investigation by our technical team.
                </p>
                <Button
                  className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f]"
                  onClick={() => {
                    window.location.href = "/support/tickets"
                  }}
                >
                  Submit Ticket
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-8 text-center">Visit Our Office</h2>
        <div className="border border-[#64ffda]/10 rounded-lg overflow-hidden">
          <div className="aspect-[16/9] w-full bg-[#0a192f]">
            {/* In a real application, you would embed a Google Map or other map service here */}
            <div className="w-full h-full flex items-center justify-center bg-[#112240]/50">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-[#64ffda] mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">TerraBit Headquarters</h3>
                <p className="text-white/70">
                  123 AgTech Boulevard, Suite 500
                  <br />
                  San Francisco, CA 94105
                  <br />
                  United States
                </p>
                <Button
                  className="mt-4 bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f]"
                  onClick={() => {
                    window.open("https://maps.google.com/?q=San+Francisco,+CA+94105", "_blank")
                  }}
                >
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-[#0a192f] py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div
              className="border border-[#64ffda]/10 rounded-lg p-6 bg-[#112240]/50 hover:bg-[#112240]/70 transition-colors cursor-pointer"
              onClick={() =>
                alert(
                  "Our phone support is available Monday through Friday from 8:00 AM to 8:00 PM EST, and Saturday from 9:00 AM to 5:00 PM EST. Email support is available 24/7 with a response time of within 24 hours.",
                )
              }
            >
              <h3 className="font-bold text-lg mb-2">What are your support hours?</h3>
              <p className="text-white/70">
                Our phone support is available Monday through Friday from 8:00 AM to 8:00 PM EST, and Saturday from 9:00
                AM to 5:00 PM EST. Email support is available 24/7 with a response time of within 24 hours.
              </p>
            </div>
            <div
              className="border border-[#64ffda]/10 rounded-lg p-6 bg-[#112240]/50 hover:bg-[#112240]/70 transition-colors cursor-pointer"
              onClick={() =>
                alert(
                  "For phone calls, our average wait time is less than 5 minutes. For emails and contact form submissions, we typically respond within 24 hours during business days.",
                )
              }
            >
              <h3 className="font-bold text-lg mb-2">How quickly will I receive a response?</h3>
              <p className="text-white/70">
                For phone calls, our average wait time is less than 5 minutes. For emails and contact form submissions,
                we typically respond within 24 hours during business days.
              </p>
            </div>
            <div
              className="border border-[#64ffda]/10 rounded-lg p-6 bg-[#112240]/50 hover:bg-[#112240]/70 transition-colors cursor-pointer"
              onClick={() =>
                alert(
                  "Yes, we offer on-site support for enterprise customers and for complex installations. Please contact our sales team to discuss your specific needs and pricing.",
                )
              }
            >
              <h3 className="font-bold text-lg mb-2">Do you offer on-site support?</h3>
              <p className="text-white/70">
                Yes, we offer on-site support for enterprise customers and for complex installations. Please contact our
                sales team to discuss your specific needs and pricing.
              </p>
            </div>
            <div
              className="border border-[#64ffda]/10 rounded-lg p-6 bg-[#112240]/50 hover:bg-[#112240]/70 transition-colors cursor-pointer"
              onClick={() =>
                alert(
                  "You can report bugs or issues through our contact form, by emailing support@terrabit.com, or by submitting a ticket through our Help Center. Please include as much detail as possible.",
                )
              }
            >
              <h3 className="font-bold text-lg mb-2">How do I report a bug or issue?</h3>
              <p className="text-white/70">
                You can report bugs or issues through our contact form, by emailing support@terrabit.com, or by
                submitting a ticket through our Help Center. Please include as much detail as possible.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/support/faq">
              <Button variant="outline" className="border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10">
                View All FAQs
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="container mx-auto px-6 py-12">
        <div className="border border-[#64ffda]/10 rounded-lg p-8 bg-[#112240]/50 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Stay Connected</h2>
          <p className="text-white/70 mb-6">
            Subscribe to our newsletter to receive the latest updates, news, and special offers.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
            onSubmit={(e) => {
              e.preventDefault()
              const form = e.target as HTMLFormElement
              const email = (form.elements.namedItem("email") as HTMLInputElement).value
              alert(`Thank you for subscribing with ${email}! You'll receive our newsletter soon.`)
              form.reset()
            }}
          >
            <Input
              type="email"
              name="email"
              placeholder="Your email address"
              className="bg-[#0a192f]/50 border-[#64ffda]/20 focus:border-[#64ffda] text-white"
              required
            />
            <Button type="submit" className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f] whitespace-nowrap">
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      <BackToTop />
      <Footer />
    </div>
  )
}

