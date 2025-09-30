import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["never miss a customer", "answer every call instantly", "handle calls 24/7", "book appointments automatically", "save thousands monthly"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2500);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  const scrollToTestimonials = () => {
    const allSections = document.querySelectorAll('section');
    const testimonials = allSections[allSections.length - 1];
    testimonials.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="w-full bg-gradient-to-br from-pink-50 to-white/80">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div>
            <Button 
              variant="secondary" 
              size="sm" 
              className="gap-4 cursor-pointer"
              onClick={scrollToTestimonials}
            >
              Trusted by Small Businesses <MoveRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-gray-900">Sendy helps you</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold text-pink-500"
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              Your AI phone assistant answers every call, books appointments, and handles customer questions 24/7 - so you can focus on running your business.
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <a href="https://cal.com/arjun-dixit-0nwkzi/15min" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-4 bg-pink-500 hover:bg-pink-600">
                Book a Demo <PhoneCall className="w-4 h-4" />
              </Button>
            </a>
            <Button 
              size="lg" 
              className="gap-4" 
              variant="outline"
              onClick={scrollToFeatures}
            >
              See How It Works <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };