"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "Zamani made sending money abroad so fast and simple — finally a platform I trust.",
    author: "Early User",
    role: "Business Owner",
  },
  {
    quote: "I love earning daily yield while keeping my funds accessible. Brilliant!",
    author: "Early User",
    role: "Digital Entrepreneur",
  },
  {
    quote: "The conversion rates are the best I've found, and the security gives me complete peace of mind.",
    author: "Early User",
    role: "International Trader",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">What Early Users Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of satisfied users already using Zamani
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background p-8 rounded-xl border border-border">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-foreground">— {testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
