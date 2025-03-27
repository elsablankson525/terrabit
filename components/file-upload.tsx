"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Upload, X, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface FileUploadProps {
  onUpload: (file: File) => Promise<void>
  accept?: string
  maxSize?: number // in bytes
  className?: string
  buttonText?: string
  disabled?: boolean
}

export function FileUpload({
  onUpload,
  accept = "image/*",
  maxSize = 5 * 1024 * 1024, // 5MB default
  className,
  buttonText = "Upload File",
  disabled = false,
}: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    validateAndSetFile(selectedFile)
  }

  const validateAndSetFile = (selectedFile?: File | null) => {
    setError(null)

    if (!selectedFile) {
      return
    }

    // Check file size
    if (selectedFile.size > maxSize) {
      setError(`File size exceeds the limit of ${maxSize / 1024 / 1024}MB`)
      return
    }

    // Check file type if accept is specified
    if (accept !== "*" && !accept.includes("*")) {
      const fileType = selectedFile.type
      const acceptTypes = accept.split(",").map((type) => type.trim())
      const isAccepted = acceptTypes.some((type) => {
        if (type.includes("*")) {
          const typePrefix = type.split("*")[0]
          return fileType.startsWith(typePrefix)
        }
        return type === fileType
      })

      if (!isAccepted) {
        setError(`File type not accepted. Please upload ${accept}`)
        return
      }
    }

    setFile(selectedFile)
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
    const droppedFile = e.dataTransfer.files?.[0]
    validateAndSetFile(droppedFile)
  }

  const handleUpload = async () => {
    if (!file) return

    try {
      setIsUploading(true)
      await onUpload(file)
      setFile(null)
      if (fileInputRef.current) {
        fileInputRef.current.value = ""
      }
    } catch (err) {
      console.error("Upload error:", err)
      setError("Failed to upload file. Please try again.")
    } finally {
      setIsUploading(false)
    }
  }

  const handleClearFile = () => {
    setFile(null)
    setError(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div className={cn("space-y-4", className)}>
      <div
        className={cn(
          "border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors",
          isDragging ? "border-[#64ffda] bg-[#64ffda]/5" : "border-[#64ffda]/20 hover:border-[#64ffda]/50",
          disabled && "opacity-50 cursor-not-allowed",
        )}
        onDragOver={!disabled ? handleDragOver : undefined}
        onDragLeave={!disabled ? handleDragLeave : undefined}
        onDrop={!disabled ? handleDrop : undefined}
        onClick={() => !disabled && fileInputRef.current?.click()}
      >
        <div className="flex flex-col items-center justify-center space-y-2">
          <Upload className="h-10 w-10 text-[#64ffda]/70" />
          <div className="text-sm text-white/70">
            <span className="font-medium text-[#64ffda]">Click to upload</span> or drag and drop
          </div>
          <p className="text-xs text-white/50">
            {accept === "*" ? "Any file type" : `${accept.split(",").join(", ")} accepted`}
          </p>
          <p className="text-xs text-white/50">Max size: {maxSize / 1024 / 1024}MB</p>
        </div>
        <Input
          ref={fileInputRef}
          type="file"
          accept={accept}
          onChange={handleFileChange}
          className="hidden"
          disabled={disabled}
        />
      </div>

      {error && <div className="text-red-400 text-sm bg-red-500/10 p-2 rounded border border-red-500/20">{error}</div>}

      {file && !error && (
        <div className="bg-[#0a192f]/50 p-3 rounded-lg border border-[#64ffda]/20">
          <div className="flex items-center justify-between">
            <div className="truncate">
              <p className="text-sm font-medium text-white truncate">{file.name}</p>
              <p className="text-xs text-white/50">{(file.size / 1024).toFixed(2)} KB</p>
            </div>
            <button onClick={handleClearFile} className="text-white/70 hover:text-white" disabled={isUploading}>
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {file && !error && (
        <Button
          onClick={handleUpload}
          className="w-full bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f] font-medium"
          disabled={isUploading || disabled}
        >
          {isUploading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Uploading...
            </>
          ) : (
            buttonText
          )}
        </Button>
      )}
    </div>
  )
}

