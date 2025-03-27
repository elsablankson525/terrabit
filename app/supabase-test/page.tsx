"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { getSupabaseBrowserClient } from "@/lib/supabase"

export default function SupabaseTestPage() {
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading")
  const [message, setMessage] = useState("Testing Supabase connection...")
  const [authConfig, setAuthConfig] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function checkSupabaseConnection() {
      try {
        const supabase = getSupabaseBrowserClient()

        // Test basic connection
        const { data, error } = await supabase.from("profiles").select("count").limit(1)

        if (error) {
          throw error
        }

        // Check auth configuration
        const { data: authSettings } = await supabase.auth.getSession()
        setAuthConfig({
          hasSession: !!authSettings.session,
          providers: {
            google: process.env.NEXT_PUBLIC_SUPABASE_URL?.includes("supabase"),
            twitter: process.env.NEXT_PUBLIC_SUPABASE_URL?.includes("supabase"),
            facebook: process.env.NEXT_PUBLIC_SUPABASE_URL?.includes("supabase"),
          },
        })

        setStatus("success")
        setMessage("Supabase connection successful!")
      } catch (err: any) {
        console.error("Supabase connection error:", err)
        setStatus("error")
        setMessage("Supabase connection failed")
        setError(err.message || "Unknown error")
      }
    }

    checkSupabaseConnection()
  }, [])

  const testSignUp = async () => {
    try {
      const supabase = getSupabaseBrowserClient()
      const testEmail = `test_${Date.now()}@example.com`
      const testPassword = "Test123456!"

      const { data, error } = await supabase.auth.signUp({
        email: testEmail,
        password: testPassword,
      })

      if (error) throw error

      alert(`Test signup successful! Email: ${testEmail}`)
    } catch (err: any) {
      alert(`Test signup failed: ${err.message}`)
    }
  }

  const testGoogleAuth = async () => {
    try {
      const supabase = getSupabaseBrowserClient()

      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      })

      if (error) throw error
    } catch (err: any) {
      alert(`Google auth redirect failed: ${err.message}`)
    }
  }

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Supabase Connection Test</CardTitle>
          <CardDescription>Checking if Supabase is properly configured</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div
                className={`w-4 h-4 rounded-full ${
                  status === "loading" ? "bg-yellow-500" : status === "success" ? "bg-green-500" : "bg-red-500"
                }`}
              ></div>
              <p>{message}</p>
            </div>

            {error && (
              <div className="p-4 bg-red-50 text-red-700 rounded-md">
                <p className="font-semibold">Error details:</p>
                <pre className="mt-2 text-sm overflow-auto">{error}</pre>
              </div>
            )}

            {authConfig && (
              <div className="mt-6 space-y-4">
                <h3 className="text-lg font-medium">Auth Configuration</h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="p-4 bg-gray-50 rounded-md">
                    <p className="font-medium">Session</p>
                    <p className={authConfig.hasSession ? "text-green-600" : "text-red-600"}>
                      {authConfig.hasSession ? "Active session found" : "No active session"}
                    </p>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-md">
                    <p className="font-medium">OAuth Providers</p>
                    <ul className="mt-2 space-y-1">
                      <li className="flex items-center">
                        <span
                          className={`w-2 h-2 rounded-full mr-2 ${
                            authConfig.providers.google ? "bg-green-500" : "bg-red-500"
                          }`}
                        ></span>
                        Google
                      </li>
                      <li className="flex items-center">
                        <span
                          className={`w-2 h-2 rounded-full mr-2 ${
                            authConfig.providers.twitter ? "bg-green-500" : "bg-red-500"
                          }`}
                        ></span>
                        Twitter
                      </li>
                      <li className="flex items-center">
                        <span
                          className={`w-2 h-2 rounded-full mr-2 ${
                            authConfig.providers.facebook ? "bg-green-500" : "bg-red-500"
                          }`}
                        ></span>
                        Facebook
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2 items-stretch sm:flex-row sm:space-y-0 sm:space-x-2">
          <Button onClick={testSignUp} variant="outline">
            Test Signup
          </Button>
          <Button onClick={testGoogleAuth} variant="outline">
            Test Google Auth
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

