"use client"

import * as React from "react"
import { X, CheckCircle, AlertCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

// Toast context
type ToastContextType = ReturnType<typeof useToast>
const ToastContext = React.createContext<ToastContextType | undefined>(undefined)

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const toast = useToast()
  return <ToastContext.Provider value={toast}>{children}</ToastContext.Provider>
}

export function useToastContext() {
  const context = React.useContext(ToastContext)
  if (!context) {
    throw new Error("useToastContext must be used within a ToastProvider")
  }
  return context
}

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "destructive" | "success"
  title?: string
  description?: string
  onClose?: () => void
}

export const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  ({ className, variant = "default", title, description, onClose, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`
          rounded-md border p-4 shadow-md transition-all duration-300 animate-in slide-in-from-right
          ${
            variant === "destructive"
              ? "bg-red-950 border-red-800 text-white"
              : variant === "success"
                ? "bg-green-950 border-green-800 text-white"
                : "bg-[#112240] border-[#64ffda]/20 text-white"
          }
          ${className}
        `}
        {...props}
      >
        <div className="flex justify-between items-start gap-2">
          <div className="flex gap-2">
            {variant === "destructive" && <AlertCircle className="h-5 w-5 text-red-400" />}
            {variant === "success" && <CheckCircle className="h-5 w-5 text-green-400" />}
            <div>
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && <ToastDescription>{description}</ToastDescription>}
            </div>
          </div>
          <ToastClose onClick={onClose} />
        </div>
      </div>
    )
  },
)
Toast.displayName = "Toast"

export const ToastTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={`font-medium ${className}`} {...props} />,
)
ToastTitle.displayName = "ToastTitle"

export const ToastDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={`text-sm opacity-90 ${className}`} {...props} />,
)
ToastDescription.displayName = "ToastDescription"

export const ToastClose = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => (
    <button ref={ref} className={`rounded-full p-1 hover:bg-white/10 ${className}`} {...props}>
      <X className="h-4 w-4" />
      <span className="sr-only">Close</span>
    </button>
  ),
)
ToastClose.displayName = "ToastClose"

export const ToastViewport = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={`fixed top-4 right-4 z-50 flex flex-col gap-2 w-full max-w-sm ${className}`} {...props} />
  ),
)
ToastViewport.displayName = "ToastViewport"

export function Toaster() {
  const { toasts, dismiss } = useToast()

  return (
    <ToastViewport>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          variant={toast.variant as "default" | "destructive" | "success"}
          title={toast.title}
          description={toast.description}
          onClose={() => dismiss(toast.id)}
        />
      ))}
    </ToastViewport>
  )
}

