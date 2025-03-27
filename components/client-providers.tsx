"use client"

import type React from "react"
import { AuthProvider } from "@/context/auth-context"
import { UserPreferencesProvider } from "@/context/user-preferences-context"
import { CartProvider } from "@/context/cart-context"
import { ToastProvider } from "@/components/ui/toast"

// Combine all client-side providers in a single component
export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <UserPreferencesProvider>
        <CartProvider>
          <ToastProvider>{children}</ToastProvider>
        </CartProvider>
      </UserPreferencesProvider>
    </AuthProvider>
  )
}

