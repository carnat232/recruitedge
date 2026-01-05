import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CheckCircle2, Globe, Users, Award, TrendingUp } from "lucide-react";

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "50+", label: "Countries Served" },
  { value: "10K+", label: "Successful Placements" },
  { value: "500+", label: "Partner Companies" },
];

const values = [
  { icon: Globe, title: "Global Reach", description: "Operating across continents with local expertise" },
  { icon: Users, title: "People First", description: "Every placement is a career, not just a position" },
  { icon: Award, title: "Excellence", description: "Uncompromising standards in everything we do" },
  { icon: TrendingUp, title: "Results Driven", description: "Focused on long-term success for all parties" },
];

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-navy text-primary-foreground">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Your Trusted Partner in <span className="text-gradient-gold">Global Talent Acquisition</span>
            </h1>
            <p className="text-xl text-primary-foreground/70 leading-relaxed">
              RecruiteEdgeGlobal is a global recruitment agency committed to delivering exceptional hiring outcomes for employers and meaningful career opportunities for professionals worldwide.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.1} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-4">
                Our Mission
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Connecting the Right People with the Right Opportunities
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Our approach combines industry expertise, structured processes, and a people-first mindset to ensure quality placements that create long-term success for both clients and candidates.
              </p>
              <ul className="space-y-3">
                {["Quality placements that create lasting success", "Ethical recruitment and confidential processes", "Industry expertise across global markets", "People-first mindset in every interaction"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div key={index} className="bg-card rounded-2xl p-6 shadow-md border border-border">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                      <value.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
