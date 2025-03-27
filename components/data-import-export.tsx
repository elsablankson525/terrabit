"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, Upload, FileText, AlertTriangle, Check } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface DataImportExportProps {
  dataType: string
}

export function DataImportExport({ dataType }: DataImportExportProps) {
  const [open, setOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("export")
  const [format, setFormat] = useState("csv")
  const [processing, setProcessing] = useState(false)
  const [progress, setProgress] = useState(0)
  const [status, setStatus] = useState<"idle" | "processing" | "success" | "error">("idle")
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleExport = () => {
    setProcessing(true)
    setProgress(0)
    setStatus("processing")

    // Simulate export process with progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setProcessing(false)
          setStatus("success")
          return 100
        }
        return prev + 10
      })
    }, 300)
  }

  const handleImport = () => {
    if (!selectedFile) {
      alert("Please select a file to import")
      return
    }

    setProcessing(true)
    setProgress(0)
    setStatus("processing")

    // Simulate import process with progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setProcessing(false)
          setStatus("success")
          return 100
        }
        return prev + 10
      })
    }, 300)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  const resetState = () => {
    setProcessing(false)
    setProgress(0)
    setStatus("idle")
    setSelectedFile(null)
  }

  return (
    <>
      <div className="flex gap-2">
        <Button
          variant="outline"
          className="border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10"
          onClick={() => {
            setActiveTab("export")
            resetState()
            setOpen(true)
          }}
        >
          <Download className="h-4 w-4 mr-2" />
          Export Data
        </Button>
        <Button
          variant="outline"
          className="border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10"
          onClick={() => {
            setActiveTab("import")
            resetState()
            setOpen(true)
          }}
        >
          <Upload className="h-4 w-4 mr-2" />
          Import Data
        </Button>
      </div>

      <Dialog
        open={open}
        onOpenChange={(isOpen) => {
          if (!isOpen) resetState()
          setOpen(isOpen)
        }}
      >
        <DialogContent className="bg-[#112240] border-[#64ffda]/10 text-white sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>{dataType} Data Management</DialogTitle>
            <DialogDescription className="text-white/70">
              Import or export your {dataType.toLowerCase()} data
            </DialogDescription>
          </DialogHeader>

          <Tabs defaultValue="export" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 mb-4 bg-[#0a192f]/50">
              <TabsTrigger
                value="export"
                className="data-[state=active]:bg-[#64ffda] data-[state=active]:text-[#0a192f]"
              >
                Export Data
              </TabsTrigger>
              <TabsTrigger
                value="import"
                className="data-[state=active]:bg-[#64ffda] data-[state=active]:text-[#0a192f]"
              >
                Import Data
              </TabsTrigger>
            </TabsList>

            <TabsContent value="export" className="space-y-4">
              {status === "idle" && (
                <>
                  <div className="grid gap-2">
                    <Label htmlFor="format">File Format</Label>
                    <Select value={format} onValueChange={setFormat}>
                      <SelectTrigger id="format" className="bg-[#0a192f]/50 border-[#64ffda]/20 text-white">
                        <SelectValue placeholder="Select format" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#112240] border-[#64ffda]/10 text-white">
                        <SelectItem value="csv">CSV File</SelectItem>
                        <SelectItem value="xlsx">Excel Spreadsheet</SelectItem>
                        <SelectItem value="json">JSON Data</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="p-4 border border-[#64ffda]/20 bg-[#64ffda]/5 rounded-md">
                    <h3 className="font-bold text-[#64ffda] mb-2 flex items-center">
                      <FileText className="h-4 w-4 mr-2" />
                      Export Details
                    </h3>
                    <p className="text-white/80 text-sm">
                      This will export all your {dataType.toLowerCase()} data including field information, historical
                      records, and analysis results.
                    </p>
                  </div>
                </>
              )}

              {status === "processing" && (
                <div className="space-y-4 py-4">
                  <p className="text-center">Preparing your data for export...</p>
                  <Progress value={progress} className="h-2 bg-[#0a192f]/50" />
                  <p className="text-center text-sm text-white/70">{progress}% complete</p>
                </div>
              )}

              {status === "success" && (
                <div className="p-4 border border-green-500/20 bg-green-500/10 rounded-md">
                  <h3 className="font-bold text-green-400 mb-2 flex items-center">
                    <Check className="h-4 w-4 mr-2" />
                    Export Complete
                  </h3>
                  <p className="text-white/80 text-sm mb-4">
                    Your {dataType.toLowerCase()} data has been successfully exported.
                  </p>
                  <Button
                    className="w-full bg-green-500 hover:bg-green-600 text-white"
                    onClick={() => {
                      setOpen(false)
                      resetState()
                    }}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download File
                  </Button>
                </div>
              )}

              {status === "error" && (
                <div className="p-4 border border-red-500/20 bg-red-500/10 rounded-md">
                  <h3 className="font-bold text-red-400 mb-2 flex items-center">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Export Failed
                  </h3>
                  <p className="text-white/80 text-sm">
                    There was an error exporting your data. Please try again or contact support.
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="import" className="space-y-4">
              {status === "idle" && (
                <>
                  <div className="grid gap-2">
                    <Label htmlFor="file">Select File</Label>
                    <div className="flex items-center gap-2">
                      <Input
                        id="file"
                        type="file"
                        accept=".csv,.xlsx,.json"
                        onChange={handleFileChange}
                        className="bg-[#0a192f]/50 border-[#64ffda]/20 text-white"
                      />
                    </div>
                    <p className="text-xs text-white/70">Supported formats: CSV, Excel, JSON</p>
                  </div>

                  <div className="p-4 border border-yellow-500/20 bg-yellow-500/10 rounded-md">
                    <h3 className="font-bold text-yellow-400 mb-2 flex items-center">
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      Import Warning
                    </h3>
                    <p className="text-white/80 text-sm">
                      Importing data will overwrite any existing data. Make sure you have a backup before proceeding.
                    </p>
                  </div>
                </>
              )}

              {status === "processing" && (
                <div className="space-y-4 py-4">
                  <p className="text-center">Processing your data import...</p>
                  <Progress value={progress} className="h-2 bg-[#0a192f]/50" />
                  <p className="text-center text-sm text-white/70">{progress}% complete</p>
                </div>
              )}

              {status === "success" && (
                <div className="p-4 border border-green-500/20 bg-green-500/10 rounded-md">
                  <h3 className="font-bold text-green-400 mb-2 flex items-center">
                    <Check className="h-4 w-4 mr-2" />
                    Import Complete
                  </h3>
                  <p className="text-white/80 text-sm">Your data has been successfully imported into the system.</p>
                </div>
              )}

              {status === "error" && (
                <div className="p-4 border border-red-500/20 bg-red-500/10 rounded-md">
                  <h3 className="font-bold text-red-400 mb-2 flex items-center">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Import Failed
                  </h3>
                  <p className="text-white/80 text-sm">
                    There was an error importing your data. Please check the file format and try again.
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>

          <DialogFooter>
            {status === "idle" && (
              <>
                <Button
                  variant="outline"
                  onClick={() => setOpen(false)}
                  className="border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10"
                >
                  Cancel
                </Button>
                <Button
                  onClick={activeTab === "export" ? handleExport : handleImport}
                  disabled={processing || (activeTab === "import" && !selectedFile)}
                  className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f]"
                >
                  {activeTab === "export" ? "Export" : "Import"}
                </Button>
              </>
            )}

            {(status === "error" || status === "success") && activeTab === "import" && (
              <Button onClick={() => resetState()} className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f]">
                Done
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

// Helper component for file input
function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  )
}

