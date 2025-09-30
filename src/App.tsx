import { Hero } from "@/components/ui/animated-hero"
import Testimonials from "@/components/ui/testimonials"
import PricingSimple from "@/components/blocks/pricing"
import { Features } from "@/components/blocks/features-4"
import CallToAction from "@/components/ui/call-to-action"
import { FlickeringGrid } from "@/components/ui/flickering-grid"

function App() {
  return (
    <div className="min-h-screen relative">
      {/* Background grid */}
      <div className="fixed inset-0 z-0">
        <FlickeringGrid
          className="w-full h-full"
          squareSize={4}
          gridGap={6}
          color="rgb(255, 107, 157)"
          maxOpacity={0.3}
          flickerChance={0.3}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <Features />
        <PricingSimple />
        <Testimonials />
        <CallToAction />
      </div>
    </div>
  )
}

export default App