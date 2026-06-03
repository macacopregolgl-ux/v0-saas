import { FluidRibbon } from "@/components/fluid-ribbon"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeatureCards } from "@/components/feature-cards"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <FluidRibbon />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <FeatureCards />
        <CTASection />
        <Footer />
      </div>
    </main>
  )
}
