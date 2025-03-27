"use client"

import { Suspense } from "react"
import dynamic from "next/dynamic"
import { Skeleton } from "@/components/ui/skeleton"

// Import the client component with ssr: false to prevent server-side rendering
const PremiumPage = dynamic(() => import("./client-page"), {
  ssr: false,
  loading: () => <PremiumPageSkeleton />,
})

function PremiumPageSkeleton() {
  return (
    <div className="container mx-auto py-8 space-y-6">
      <Skeleton className="h-12 w-3/4 mx-auto" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-[400px] rounded-lg" />
        ))}
      </div>
    </div>
  )
}

export default function ClientWrapper() {
  return (
    <Suspense fallback={<PremiumPageSkeleton />}>
      <PremiumPage />
    </Suspense>
  )
}

