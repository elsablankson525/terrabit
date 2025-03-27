"use client"

import type React from "react"

import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from "@/components/theme-provider"
import { ProfileProvider } from "@/contexts/profile-context"

interface ProvidersProps {
  children: React.ReactNode
}

export function AuthProvider({ children }: ProvidersProps) {
  return <SessionProvider>{children}</SessionProvider>
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <AuthProvider>
        <ProfileProvider>{children}</ProfileProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

