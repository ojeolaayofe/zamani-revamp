"use client"

import { Zap, PiggyBank, TrendingUp, Lock } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Instant Transfers",
    description: "Send money across borders in seconds with transparent fees.",
  },
  {
    icon: PiggyBank,
    title: "Naira ⇄ USD Conversion",
    description: "Convert your funds instantly and securely.",
  },
  {
    icon: TrendingUp,
    title: "Daily Yield Earnings",
    description: "Grow your digital assets while transacting.",
  },
  {
    icon: Lock,
    title: "Secure & Compliant",
    description: "Built on a trusted, fully compliant infrastructure.",
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Why Zamani?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need for seamless cross-border payments and wealth building
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="p-8 bg-card border border-border rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:border-primary/50 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition">
                  <Icon className="text-primary group-hover:animate-float" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
