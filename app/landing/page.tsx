import Header from "@/components/landing/header"
import HeroSection from "@/components/landing/hero-section"
import FeaturesSection from "@/components/landing/features-section"
import HowItWorksSection from "@/components/landing/how-it-works-section"
import SecuritySection from "@/components/landing/security-section"
import TestimonialsSection from "@/components/landing/testimonials-section"
import FooterSection from "@/components/landing/footer-section"
import WaitlistModal from "@/components/landing/waitlist-modal"

export const metadata = {
  title: "Zamani - Fast Cross-Border Payments",
  description: "Move money across borders instantly, convert Naira to USDC, and earn daily yield with Zamani",
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <SecuritySection />
      <TestimonialsSection />
      <FooterSection />
      <WaitlistModal />
    </div>
  )
}
