"use client"

import { Suspense } from "react"
import dynamic from "next/dynamic"
import { Loader2 } from "lucide-react"

// Import the client component with SSR disabled
const HardwareClientPage = dynamic(() => import("./client-page"), {
  ssr: false,
  loading: () => <LoadingFallback />,
})

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a192f] to-[#112240] text-white flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="h-12 w-12 animate-spin text-[#64ffda] mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Loading Hardware Store</h2>
        <p className="text-white/70">Please wait while we prepare the best agricultural technology for you...</p>
      </div>
    </div>
  )
}

export default function ClientWrapper() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <HardwareClientPage />
    </Suspense>
  )
}

