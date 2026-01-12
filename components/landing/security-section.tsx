"use client"

import { Shield, Lock, Eye } from "lucide-react"

const securityFeatures = [
  {
    icon: Lock,
    title: "Regulatory Compliance",
    description: "Fully KYC & AML compliant for complete peace of mind.",
  },
  {
    icon: Shield,
    title: "Advanced Security",
    description: "Bank-level encryption for every single transaction.",
  },
  {
    icon: Eye,
    title: "Transparent Fees",
    description: "No hidden charges. Always know exactly what you pay.",
  },
]

export default function SecuritySection() {
  return (
    <section id="security" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Your Money, Safe with Zamani</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade security and compliance standards
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="bg-muted p-8 rounded-xl border border-border text-center">
                <div className="mb-4 w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                  <Icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-12 bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
          <p className="text-muted-foreground mb-2">Trusted by thousands of users</p>
          <p className="text-2xl font-bold text-foreground">₦ Billions moved securely through Zamani</p>
        </div>
      </div>
    </section>
  )
}
