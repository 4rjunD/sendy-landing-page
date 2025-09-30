import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";

interface PricingTier {
  name: string;
  upfront: string;
  monthly: string;
  features: string[];
  isPopular?: boolean;
  href: string;
}

export default function PricingSimple() {
  const pricingTiers: PricingTier[] = [
    {
      name: "Starter",
      upfront: "$1,000",
      monthly: "$500/mo",
      features: [
        "AI receptionist answers all calls",
        "Basic call routing",
        "Appointment scheduling",
        "Email notifications",
        "Standard business hours support"
      ],
      href: "https://cal.com/arjun-dixit-0nwkzi/15min"
    },
    {
      name: "Professional",
      upfront: "$2,000",
      monthly: "$600/mo",
      features: [
        "Everything in Starter",
        "Advanced call routing",
        "CRM integration",
        "Custom greeting messages",
        "Analytics dashboard",
        "24/7 priority support"
      ],
      isPopular: true,
      href: "https://cal.com/arjun-dixit-0nwkzi/15min"
    },
    {
      name: "Enterprise",
      upfront: "$5,000+",
      monthly: "$1,000+/mo",
      features: [
        "Everything in Professional",
        "Multiple phone numbers",
        "Custom AI training",
        "Dedicated account manager",
        "White-glove onboarding",
        "Custom integrations"
      ],
      href: "https://cal.com/arjun-dixit-0nwkzi/15min"
    }
  ];

  return (
    <section className="py-16 md:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-semibold lg:text-5xl">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600">Choose the plan that fits your business</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mt-12">
          {pricingTiers.map((tier, index) => (
            <Card 
              key={index} 
              className={`relative flex flex-col p-8 ${tier.isPopular ? 'border-pink-500 border-2 shadow-xl scale-105' : 'border-gray-200'}`}
            >
              {tier.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="pb-6">
                <h3 className="text-2xl font-bold text-gray-900">{tier.name}</h3>
                <div className="mt-4">
                  <div className="text-4xl font-bold text-gray-900">{tier.upfront}</div>
                  <div className="text-sm text-gray-600 mt-1">upfront setup</div>
                  <div className="text-2xl font-semibold text-pink-500 mt-3">{tier.monthly}</div>
                  <div className="text-sm text-gray-600">monthly retainer</div>
                </div>
              </CardHeader>

              <CardContent className="flex-1">
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-pink-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href={tier.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button 
                      className="w-full bg-pink-500 hover:bg-pink-600"
                      size="lg"
                  >
                    Get Started
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-gray-600 mt-12">
          All plans include a 30-day money-back guarantee. Questions? <a href="https://cal.com/arjun-dixit-0nwkzi/15min" className="text-pink-500 hover:underline">Book a call</a>
        </p>
      </div>
    </section>
  );
}