"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WaitlistModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.id === "waitlistModalTrigger") {
        console.log("[v0] Waitlist modal trigger clicked")
        setIsOpen(true)
      }
    }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      const scriptURL =
        "https://script.google.com/macros/s/AKfycbyPFThL6F5O78kXe3C5AHe_r4UTax0f-2GKcdAXhK9S9GkfEVkDz8VGJXLCXjqV_7Rz/exec"

      const formData = new FormData()
      formData.append("name", name)
      formData.append("email", email)

      const response = await fetch(scriptURL, {
        method: "POST",
        body: formData,
      })
      const result = await response.json()

      if (result.status === "success") {
        setIsSubmitted(true)
        setName("")
        setEmail("")
        setTimeout(() => {
          setIsOpen(false)
          setIsSubmitted(false)
        }, 3000)
      } else {
        setError(result.message || "Submission failed. Please try again.")
      }
    } catch (err) {
      setError("Error submitting form. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen)
    return (
      <>
        <button id="waitlistModalTrigger" style={{ display: "none" }} />
      </>
    )

  return (
    <>
      <button id="waitlistModalTrigger" style={{ display: "none" }} />
      <div
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fade-in-up"
        onClick={(e) => {
          if (e.target === e.currentTarget) setIsOpen(false)
        }}
      >
        <div className="bg-background rounded-xl shadow-xl max-w-md w-full p-8 relative transform transition-all duration-300 hover:shadow-2xl animate-fade-in-up">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition duration-300"
          >
            <X size={24} />
          </button>

          {isSubmitted ? (
            <div className="text-center space-y-4 animate-fade-in-up">
              <div className="flex justify-center">
                <CheckCircle className="text-primary animate-float" size={64} />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Welcome Onboard! 🎉</h3>
              <p className="text-muted-foreground">
                You've been added to our waitlist. We'll notify you as soon as we launch.
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-foreground mb-2">Get Early Access</h2>
              <p className="text-muted-foreground mb-6">Join our waitlist and be the first to experience Zamani</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition duration-300"
                    placeholder="you@example.com"
                  />
                </div>

                {error && <p className="text-sm text-destructive animate-fade-in-up">{error}</p>}

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
                >
                  {isLoading ? "Joining..." : "Join Waitlist"}
                </Button>
              </form>

              <p className="text-xs text-muted-foreground text-center mt-4">
                We'll never share your information. Privacy policy
              </p>
            </>
          )}
        </div>
      </div>
    </>
  )
}
