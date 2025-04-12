import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ValueCards } from "@/components/value-cards"
import { SignupForm } from "@/components/signup-form"
import { Footer } from "@/components/footer"
import { PricingSection } from "@/components/pricing-section"
import { trackPageVisit } from "@/lib/actions"

export default async function Home() {
  // Track page visit
  await trackPageVisit()

  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ValueCards />
      <PricingSection />
      <SignupForm />
      <Footer />
    </main>
  )
}
