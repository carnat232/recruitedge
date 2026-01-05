import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Team } from "@/components/sections/Team";
import { CTA } from "@/components/sections/CTA";

const TeamPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-navy text-primary-foreground">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
              Our Team
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Meet the <span className="text-gradient-gold">Experts</span> Behind Your Success
            </h1>
            <p className="text-xl text-primary-foreground/70 leading-relaxed">
              Our leadership team brings decades of combined experience in global recruitment, talent acquisition, and workforce strategy.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Section */}
      <Team />

      {/* CTA */}
      <CTA />
    </Layout>
  );
};

export default TeamPage;
