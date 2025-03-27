"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Share2, Copy, Mail, LinkIcon } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function ShareAnalysisButton({ analysisType = "Soil Health", className, variant = "outline" }) {
  const [open, setOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("link")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [copied, setCopied] = useState(false)
  const [sending, setSending] = useState(false)

  const shareUrl = `https://terrabit.com/shared-analysis/${analysisType.toLowerCase().replace(/\s+/g, "-")}-${Date.now()}`

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSendEmail = () => {
    if (!email) {
      alert("Please enter an email address")
      return
    }

    setSending(true)

    // Simulate sending process
    setTimeout(() => {
      setSending(false)

      // Create a notification or toast here in a real implementation
      alert(`Analysis shared with ${email} successfully!`)
      setEmail("")
      setMessage("")
      setOpen(false)
    }, 1500)
  }

  return (
    <>
      <Button variant={variant} className={className} onClick={() => setOpen(true)}>
        <Share2 className="h-4 w-4 mr-2" />
        Share Analysis
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Share {analysisType} Analysis</DialogTitle>
            <DialogDescription>Share your analysis with colleagues or partners</DialogDescription>
          </DialogHeader>

          <Tabs defaultValue="link" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 mb-4">
              <TabsTrigger value="link">Share Link</TabsTrigger>
              <TabsTrigger value="email">Email</TabsTrigger>
            </TabsList>

            <TabsContent value="link" className="space-y-4">
              <div className="flex items-center space-x-2">
                <Input value={shareUrl} readOnly />
                <Button size="icon" onClick={handleCopyLink}>
                  {copied ? <LinkIcon className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>

              <div className="p-4 border rounded-md">
                <h3 className="font-bold mb-2 flex items-center">
                  <LinkIcon className="h-4 w-4 mr-2" />
                  Access Control
                </h3>
                <p className="text-sm">
                  Anyone with this link can view this analysis. The link will expire in 30 days.
                </p>
              </div>

              <div className="flex justify-end">
                <DialogClose asChild>
                  <Button>Done</Button>
                </DialogClose>
              </div>
            </TabsContent>

            <TabsContent value="email" className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Recipient Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="colleague@example.com"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="message">Message (Optional)</Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="I thought you might find this analysis interesting..."
                  rows={3}
                />
              </div>

              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleSendEmail} disabled={sending}>
                  {sending ? (
                    <>Sending</>
                  ) : (
                    <>
                      <Mail className="h-4 w-4 mr-2" />
                      Send
                    </>
                  )}
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </>
  )
}

