import { AnimatedSection } from "@/components/AnimatedSection";
import { Globe, Shield, Zap, Users, Award, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Globe,
    title: "Global Expertise",
    description: "15+ years connecting talent across 50+ countries worldwide.",
  },
  {
    icon: Shield,
    title: "Confidential & Ethical",
    description: "Strict data protection and transparent recruitment practices.",
  },
  {
    icon: Zap,
    title: "Fast & Structured",
    description: "Efficient processes that deliver quality results quickly.",
  },
  {
    icon: Users,
    title: "Industry-Focused",
    description: "Specialist recruiters who understand your sector deeply.",
  },
  {
    icon: Award,
    title: "Quality Screening",
    description: "Rigorous vetting ensures only the best candidates.",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Success",
    description: "Placements that create lasting value for all parties.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            The RecruiteEdgeGlobal Advantage
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            What sets us apart in the global recruitment landscape.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="group bg-card rounded-2xl p-6 shadow-md border border-border hover:shadow-xl hover:border-secondary/30 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <reason.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
