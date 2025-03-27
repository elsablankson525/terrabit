"use client"

import { useUserPreferences } from "@/context/user-preferences-context"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { useState, useEffect } from "react"

export default function LanguageSelector() {
  const [isMounted, setIsMounted] = useState(false)
  const { language, setLanguage } = useUserPreferences()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <Button variant="ghost" size="icon" aria-label="Select language">
        <Globe className="h-5 w-5" />
      </Button>
    )
  }

  const languages = [
    { code: "en", name: "English" },
    { code: "es", name: "Español" },
    { code: "fr", name: "Français" },
    { code: "de", name: "Deutsch" },
    { code: "zh", name: "中文" },
    { code: "ja", name: "日本語" },
  ]

  return (
    <div className="relative">
      <Button variant="ghost" size="icon" aria-label="Select language">
        <Globe className="h-5 w-5" />
      </Button>
      <div className="absolute right-0 top-full mt-1 w-32 bg-[#112240] border border-[#64ffda]/10 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code as any)}
            className={`block w-full text-left px-4 py-2 text-white hover:bg-[#64ffda]/10 rounded-sm ${language === lang.code ? "bg-accent" : ""}`}
          >
            {lang.name}
          </button>
        ))}
      </div>
    </div>
  )
}

