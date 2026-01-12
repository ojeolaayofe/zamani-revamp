"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  const handleOpenWaitlist = () => {
    document.getElementById("waitlistModalTrigger")?.click()
  }

  return (
    <section className="min-h-[600px] bg-gradient-to-br from-background via-muted to-background flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-10 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <div className="inline-block bg-muted px-4 py-2 rounded-full text-sm text-muted-foreground border border-border animate-fade-in-up">
          🚀 Join the waitlist for early access
        </div>

        <h1
          className="text-5xl sm:text-6xl font-bold text-foreground text-balance leading-tight animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          Move Money Across Borders – <span className="text-primary animate-glow">Fast, Simple & Secure</span>
        </h1>

        <p
          className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Convert ₦ to USDC instantly, send money abroad, and earn daily yield — all in one platform.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <Button
            size="lg"
            onClick={handleOpenWaitlist}
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Get Early Access <ArrowRight className="ml-2" size={20} />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 bg-transparent transition-all duration-300 transform hover:scale-105"
          >
            Watch Demo
          </Button>
        </div>

        <div
          className="grid grid-cols-3 gap-4 pt-12 max-w-2xl mx-auto animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="text-center p-4 rounded-lg hover:bg-muted/50 transition duration-300 transform hover:scale-105">
            <div className="text-2xl font-bold text-primary animate-float">⚡</div>
            <p className="text-sm text-muted-foreground mt-2">Instant Transfers</p>
          </div>
          <div
            className="text-center p-4 rounded-lg hover:bg-muted/50 transition duration-300 transform hover:scale-105"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="text-2xl font-bold text-primary animate-float" style={{ animationDelay: "0.5s" }}>
              💱
            </div>
            <p className="text-sm text-muted-foreground mt-2">Smart Conversion</p>
          </div>
          <div
            className="text-center p-4 rounded-lg hover:bg-muted/50 transition duration-300 transform hover:scale-105"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="text-2xl font-bold text-primary animate-float" style={{ animationDelay: "1s" }}>
              📈
            </div>
            <p className="text-sm text-muted-foreground mt-2">Daily Yield</p>
          </div>
        </div>
      </div>
    </section>
  )
}
