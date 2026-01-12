"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenWaitlist = () => {
    document.getElementById("waitlistModalTrigger")?.click()
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-border animate-glow">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-primary animate-fade-in-up">Zamani</div>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-foreground hover:text-primary transition duration-300 transform hover:scale-105"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-foreground hover:text-primary transition duration-300 transform hover:scale-105"
          >
            How It Works
          </a>
          <a
            href="#security"
            className="text-foreground hover:text-primary transition duration-300 transform hover:scale-105"
          >
            Security
          </a>
          <Button
            onClick={handleOpenWaitlist}
            className="bg-primary text-primary-foreground hover:bg-primary/90 animate-glow transition-all duration-300"
          >
            Get Early Access
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden border-t border-border p-4 space-y-4 animate-fade-in-up">
          <a href="#features" className="block text-foreground hover:text-primary transition">
            Features
          </a>
          <a href="#how-it-works" className="block text-foreground hover:text-primary transition">
            How It Works
          </a>
          <a href="#security" className="block text-foreground hover:text-primary transition">
            Security
          </a>
          <Button onClick={handleOpenWaitlist} className="w-full bg-primary text-primary-foreground">
            Get Early Access
          </Button>
        </div>
      )}
    </header>
  )
}
