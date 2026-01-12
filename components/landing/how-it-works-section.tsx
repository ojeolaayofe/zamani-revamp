"use client"

import { User, Wallet, ArrowRight, TrendingUp } from "lucide-react"

const steps = [
  {
    number: "1",
    icon: User,
    title: "Sign Up & Verify",
    description: "Create an account and complete KYC in minutes.",
  },
  {
    number: "2",
    icon: Wallet,
    title: "Fund Your Wallet",
    description: "Top up your Zamani wallet with Naira.",
  },
  {
    number: "3",
    icon: ArrowRight,
    title: "Convert & Send",
    description: "Instantly convert to USDC or send money abroad securely.",
  },
  {
    number: "4",
    icon: TrendingUp,
    title: "Earn Daily Yield",
    description: "Your holdings automatically earn daily yield while you transact.",
  },
]

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
      <style>{`
        @keyframes slideArrow {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(8px);
          }
        }

        @keyframes pulseArrow {
          0%, 100% {
            opacity: 1;
            filter: drop-shadow(0 0 0px rgba(160, 82, 45, 0.5));
          }
          50% {
            opacity: 0.8;
            filter: drop-shadow(0 0 8px rgba(160, 82, 45, 0.8));
          }
        }

        .arrow-connector {
          animation: slideArrow 2s ease-in-out infinite, pulseArrow 2s ease-in-out infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Getting Started is Easy</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Four simple steps to start moving money globally
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                <div className="bg-background p-8 rounded-xl border border-border h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="mb-4 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 pointer-events-none">
                    <div className="flex items-center gap-1">
                      {/* Arrow background glow effect */}
                      <div className="absolute -inset-3 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-lg"></div>
                      {/* Bold arrow icon with gradient */}
                      <div className="arrow-connector relative z-10">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          {/* Gradient definition */}
                          <defs>
                            <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" style={{ stopColor: "rgb(160, 82, 45)", stopOpacity: 1 }} />
                              <stop offset="100%" style={{ stopColor: "rgb(180, 102, 65)", stopOpacity: 1 }} />
                            </linearGradient>
                          </defs>
                          {/* Bold arrow shape */}
                          <path
                            d="M12 24H36M36 24L28 16M36 24L28 32"
                            stroke="url(#arrowGradient)"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
