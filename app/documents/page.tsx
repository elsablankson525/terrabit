"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { FileUpload } from "@/components/file-upload"
import { Loader2, File, Trash2, Download, FileText, Plus } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { BUCKET_NAMES, uploadFile, deleteFile, listFiles, type FileObject } from "@/lib/supabase/storage"

export default function DocumentsPage() {
  const { user } = useAuth()
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [documents, setDocuments] = useState<FileObject[]>([])
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [showUpload, setShowUpload] = useState(false)

  useEffect(() => {
    async function loadDocuments() {
      if (!user) {
        router.push("/login")
        return
      }

      try {
        const userDocumentsPath = `${user.id}`
        const docs = await listFiles(BUCKET_NAMES.DOCUMENTS, userDocumentsPath)
        setDocuments(docs)
      } catch (err) {
        console.error("Error loading documents:", err)
        setError("Failed to load documents")
      } finally {
        setLoading(false)
      }
    }

    loadDocuments()
  }, [user, router])

  const handleUploadDocument = async (file: File) => {
    if (!user) return

    try {
      setError(null)
      const filePath = `${user.id}/${Date.now()}_${file.name}`
      const fileObject = await uploadFile(BUCKET_NAMES.DOCUMENTS, filePath, file)

      if (fileObject) {
        setDocuments((prev) => [...prev, fileObject])
        setSuccess("Document uploaded successfully")
        setShowUpload(false)
      } else {
        setError("Failed to upload document")
      }
    } catch (err) {
      console.error("Error uploading document:", err)
      setError("An error occurred while uploading your document")
    }
  }

  const handleDeleteDocument = async (filePath: string) => {
    try {
      setError(null)
      const deleted = await deleteFile(BUCKET_NAMES.DOCUMENTS, filePath)

      if (deleted) {
        setDocuments((prev) => prev.filter((doc) => doc.path !== filePath))
        setSuccess("Document deleted successfully")
      } else {
        setError("Failed to delete document")
      }
    } catch (err) {
      console.error("Error deleting document:", err)
      setError("An error occurred while deleting the document")
    }
  }

  const getFileIcon = (fileType: string) => {
    if (fileType.includes("pdf")) {
      return <FileText className="h-6 w-6 text-red-400" />
    } else if (fileType.includes("word") || fileType.includes("document")) {
      return <FileText className="h-6 w-6 text-blue-400" />
    } else if (fileType.includes("sheet") || fileType.includes("excel")) {
      return <FileText className="h-6 w-6 text-green-400" />
    } else if (fileType.includes("image")) {
      return <FileText className="h-6 w-6 text-purple-400" />
    } else {
      return <File className="h-6 w-6 text-[#64ffda]" />
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0a192f] to-[#112240] text-white flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-[#64ffda]" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a192f] to-[#112240] text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">My Documents</h1>
          <Button
            onClick={() => setShowUpload(!showUpload)}
            className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f] font-medium"
          >
            {showUpload ? (
              "Cancel"
            ) : (
              <>
                <Plus className="h-4 w-4 mr-2" />
                Upload Document
              </>
            )}
          </Button>
        </div>

        {error && (
          <div className="mb-6 p-3 bg-red-500/10 border border-red-500/30 rounded text-red-400 text-sm">{error}</div>
        )}

        {success && (
          <div className="mb-6 p-3 bg-green-500/10 border border-green-500/30 rounded text-green-400 text-sm">
            {success}
          </div>
        )}

        {showUpload && (
          <div className="mb-8 bg-[#112240]/70 backdrop-blur-sm rounded-lg border border-[#64ffda]/10 p-6">
            <h2 className="text-xl font-semibold mb-4">Upload New Document</h2>
            <FileUpload
              onUpload={handleUploadDocument}
              accept=".pdf,.doc,.docx,.xls,.xlsx,.txt,.jpg,.jpeg,.png"
              maxSize={10 * 1024 * 1024} // 10MB
              buttonText="Upload Document"
            />
          </div>
        )}

        <div className="bg-[#112240]/70 backdrop-blur-sm rounded-lg border border-[#64ffda]/10 p-6">
          <h2 className="text-xl font-semibold mb-4">Your Documents</h2>

          {documents.length === 0 ? (
            <div className="text-center py-8">
              <File className="h-12 w-12 text-[#64ffda]/30 mx-auto mb-4" />
              <p className="text-white/70">You don't have any documents yet</p>
              <Button
                onClick={() => setShowUpload(true)}
                variant="outline"
                className="mt-4 border-[#64ffda]/20 hover:bg-[#64ffda]/10 text-white"
              >
                Upload Your First Document
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {documents.map((doc) => (
                <div
                  key={doc.path}
                  className="flex items-center justify-between p-4 bg-[#0a192f]/50 rounded-lg border border-[#64ffda]/10 hover:border-[#64ffda]/30 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    {getFileIcon(doc.type)}
                    <div>
                      <p className="font-medium">{doc.name}</p>
                      <p className="text-xs text-white/50">
                        {(doc.size / 1024).toFixed(2)} KB • {new Date(doc.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <a
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-white/70 hover:text-white hover:bg-[#64ffda]/10 rounded"
                      title="Download"
                    >
                      <Download className="h-5 w-5" />
                    </a>
                    <button
                      onClick={() => handleDeleteDocument(doc.path)}
                      className="p-2 text-white/70 hover:text-red-400 hover:bg-red-500/10 rounded"
                      title="Delete"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

