"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Download, FileText } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface DownloadReportProps {
  title?: string
  description?: string
  reportName?: string
  sections?: { id: string; label: string }[]
}

export default function DownloadReport({
  title = "Download Report",
  description = "Select the sections you want to include in your report",
  reportName = "terrabit-report",
  sections = [
    { id: "summary", label: "Summary" },
    { id: "data", label: "Data Analysis" },
    { id: "charts", label: "Charts & Graphs" },
    { id: "recommendations", label: "Recommendations" },
    { id: "appendix", label: "Appendix" },
  ],
}: DownloadReportProps) {
  const [selectedSections, setSelectedSections] = useState<string[]>(sections.map((s) => s.id))
  const [format, setFormat] = useState<"pdf" | "csv" | "excel">("pdf")
  const [isDownloading, setIsDownloading] = useState(false)
  const { toast } = useToast()

  const toggleSection = (sectionId: string) => {
    setSelectedSections((prev) =>
      prev.includes(sectionId) ? prev.filter((id) => id !== sectionId) : [...prev, sectionId],
    )
  }

  const handleDownload = async () => {
    if (selectedSections.length === 0) {
      toast({
        title: "No sections selected",
        description: "Please select at least one section to include in your report.",
        variant: "destructive",
      })
      return
    }

    setIsDownloading(true)

    // Simulate download delay
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Generate filename with date
    const date = new Date().toISOString().split("T")[0]
    const filename = `${reportName}-${date}.${format}`

    toast({
      title: "Report Downloaded",
      description: `Your report has been downloaded as ${filename}`,
      duration: 3000,
    })

    setIsDownloading(false)
  }

  return (
    <Card className="bg-[#112240]/70 border-[#64ffda]/10">
      <CardHeader>
        <CardTitle className="text-white flex items-center">
          <FileText className="h-5 w-5 mr-2 text-[#64ffda]" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-white/70 mb-4">{description}</p>

        <div className="space-y-3 mb-6">
          {sections.map((section) => (
            <div key={section.id} className="flex items-center space-x-2">
              <Checkbox
                id={section.id}
                checked={selectedSections.includes(section.id)}
                onCheckedChange={() => toggleSection(section.id)}
                className="data-[state=checked]:bg-[#64ffda] data-[state=checked]:text-[#0a192f] border-[#64ffda]/50"
              />
              <Label htmlFor={section.id} className="text-white cursor-pointer">
                {section.label}
              </Label>
            </div>
          ))}
        </div>

        <div className="mb-4">
          <h4 className="text-white font-medium mb-2">Format</h4>
          <div className="flex space-x-4">
            <div className="flex items-center">
              <input
                type="radio"
                id="format-pdf"
                name="format"
                value="pdf"
                checked={format === "pdf"}
                onChange={() => setFormat("pdf")}
                className="mr-2"
              />
              <label htmlFor="format-pdf" className="text-white">
                PDF
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="format-csv"
                name="format"
                value="csv"
                checked={format === "csv"}
                onChange={() => setFormat("csv")}
                className="mr-2"
              />
              <label htmlFor="format-csv" className="text-white">
                CSV
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="format-excel"
                name="format"
                value="excel"
                checked={format === "excel"}
                onChange={() => setFormat("excel")}
                className="mr-2"
              />
              <label htmlFor="format-excel" className="text-white">
                Excel
              </label>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f] font-medium"
          onClick={handleDownload}
          disabled={isDownloading || selectedSections.length === 0}
        >
          {isDownloading ? (
            <>
              <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-[#0a192f] border-t-transparent"></div>
              Downloading...
            </>
          ) : (
            <>
              <Download className="mr-2 h-4 w-4" />
              Download Report
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}

