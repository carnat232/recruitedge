import { AnimatedSection } from "@/components/AnimatedSection";
import { CheckCircle2 } from "lucide-react";

const values = [
  "Quality placements that create lasting success",
  "Ethical recruitment and confidential processes",
  "Industry expertise across global markets",
  "People-first mindset in every interaction",
];

export function About() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              About RecruitEdgeGlobal
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Your Trusted Partner in{" "}
              <span className="text-secondary">Global Talent Acquisition</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              RecruitEdgeGlobal is a global recruitment agency committed to delivering exceptional hiring outcomes for employers and meaningful career opportunities for professionals.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our approach combines industry expertise, structured processes, and a people-first mindset to ensure quality placements that create long-term success for both clients and candidates.
            </p>
            <ul className="space-y-3">
              {values.map((value, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                  <span className="text-foreground">{value}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-teal overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-primary-foreground">
                    <div className="text-6xl font-bold mb-2">15+</div>
                    <div className="text-lg opacity-80">Years of Excellence</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl shadow-xl p-6 border border-border">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                    <span className="text-accent font-bold text-xl">50+</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Countries</div>
                    <div className="text-sm text-muted-foreground">Global Reach</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
