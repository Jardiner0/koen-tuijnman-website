import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/80" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <p className="text-accent font-medium text-lg">Principal Product Manager</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Building AI Products
              <br />
              That Matter
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">
              10 years of product experience. Now building AI solutions that improve everyday life and work.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              variant="accent"
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="group"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("about")}
            >
              Learn More
            </Button>
          </div>

          <div className="pt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="space-y-2">
              <p className="text-3xl font-bold text-accent">10+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-accent">200K+</p>
              <p className="text-sm text-muted-foreground">Customers Served</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-accent">$150M+</p>
              <p className="text-sm text-muted-foreground">Revenue Driven</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
