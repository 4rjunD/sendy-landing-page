import { Hero } from "@/components/ui/animated-hero"
import Testimonials from "@/components/ui/testimonials"
import PricingSimple from "@/components/blocks/pricing"
import { Features } from "@/components/blocks/features-4"
import CallToAction from "@/components/ui/call-to-action"

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <PricingSimple />
      <Testimonials />
      <CallToAction />
    </div>
  )
}

export default App
