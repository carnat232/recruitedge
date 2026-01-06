import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Upload } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 bg-gradient-teal relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-primary-foreground blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-accent blur-[80px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-secondary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Whether you're hiring or job seeking, take the next step with RecruitEdgeGlobal.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/employers">
              <Button variant="gold" size="xl" className="gap-2">
                Hire Talent <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/upload-cv">
              <Button variant="outline-light" size="xl" className="gap-2">
                <Upload className="w-5 h-5" /> Upload CV
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
