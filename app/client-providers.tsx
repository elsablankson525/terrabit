"use client"

import type { ReactNode } from "react"
import { AuthProvider } from "@/contexts/auth-context"
import { UserPreferencesProvider } from "@/context/user-preferences-context"
import { CartProvider } from "@/context/cart-context"

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <UserPreferencesProvider>
        <CartProvider>{children}</CartProvider>
      </UserPreferencesProvider>
    </AuthProvider>
  )
}

