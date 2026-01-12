"use client"

import { Twitter, Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FooterSection() {
  const handleOpenWaitlist = () => {
    document.getElementById("waitlistModalTrigger")?.click()
  }

  return (
    <footer className="bg-background border-t border-border py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Zamani</h3>
            <p className="text-muted-foreground">Fast, secure cross-border payments powered by innovation.</p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#features" className="hover:text-primary transition duration-300">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-primary transition duration-300">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-primary transition duration-300">
                  Security
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition duration-300">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition duration-300">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition duration-300">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
            <p className="text-muted-foreground">&copy; 2026 Zamani. All rights reserved.</p>

            <div className="flex gap-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition duration-300 transform hover:scale-125"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition duration-300 transform hover:scale-125"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition duration-300 transform hover:scale-125"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className="text-center py-4 border-t border-border/50">
            <p className="text-sm text-muted-foreground">
              Powered by <span className="text-primary font-semibold">Stellar Network</span>
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button
            onClick={handleOpenWaitlist}
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
            size="lg"
          >
            Join the Waitlist for Early Access
          </Button>
        </div>
      </div>
    </footer>
  )
}
