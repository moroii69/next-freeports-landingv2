import { HeroSection } from "@/components/hero-section"
import { FeatureGrid } from "@/components/feature-grid"
import { CodeExamples } from "@/components/code-examples"
import { InteractiveDemo } from "@/components/interactive-demo"
import { PricingSection } from "@/components/pricing-section"
import { FAQ } from "@/components/faq"
import { CTASection } from "@/components/cta-section"
import { CommandMenu } from "@/components/command-menu"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/50">
      <CommandMenu />
      <HeroSection />
      <FeatureGrid />
      <CodeExamples />
      <InteractiveDemo />
      <PricingSection />
      <FAQ />
      <CTASection />
    </div>
  )
}

