// Update the loading component to make it more interactive and visually appealing

import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0a192f] to-[#112240] text-white">
      <div className="flex flex-col items-center">
        <div className="relative mb-8">
          <Loader2 className="h-16 w-16 text-[#64ffda] animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#64ffda] animate-pulse"></div>
          </div>
        </div>
        <h1 className="text-white font-bold text-xl mb-2">
          <span className="text-[#64ffda]">TERRA</span>
          <span className="ml-1">BIT</span>
        </h1>
        <p className="text-white/70">Loading your experience...</p>
      </div>
    </div>
  )
}

