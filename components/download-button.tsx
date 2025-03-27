"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface DownloadButtonProps {
  fileType?: string
  fileName?: string
  reportType?: string
  className?: string
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  children?: React.ReactNode
  showToast?: boolean
}

export function DownloadButton({
  fileType = "pdf",
  fileName = "report",
  reportType = "Analysis",
  className,
  variant = "outline",
  children,
  showToast = true,
}: DownloadButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false)
  const { toast } = useToast()

  const handleDownload = async () => {
    setIsDownloading(true)

    try {
      // In a real app, this would be an API call to generate the file
      // For demo purposes, we'll simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Generate current date for the filename
      const date = new Date().toISOString().split("T")[0]
      const fullFileName = `${fileName}_${date}.${fileType}`

      // Show success message
      if (showToast) {
        toast({
          title: "Download Complete",
          description: `${reportType} report has been downloaded as ${fullFileName}!`,
          duration: 3000,
        })
      } else {
        alert(`${reportType} report has been downloaded as ${fullFileName}!`)
      }
    } catch (error) {
      console.error("Download failed:", error)

      if (showToast) {
        toast({
          title: "Download Failed",
          description: "Failed to download the report. Please try again.",
          variant: "destructive",
          duration: 3000,
        })
      } else {
        alert("Failed to download the report. Please try again.")
      }
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <Button variant={variant} className={className} onClick={handleDownload} disabled={isDownloading}>
      {isDownloading ? (
        <span className="flex items-center">
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Downloading...
        </span>
      ) : (
        <>
          <Download className="h-4 w-4 mr-2" />
          {children || `Download ${reportType}`}
        </>
      )}
    </Button>
  )
}

