import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Process } from "@/components/sections/Process";
import { CTA } from "@/components/sections/CTA";

const ProcessPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-navy text-primary-foreground">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
              Our Process
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              A Structured Approach to <span className="text-gradient-gold">Recruitment Excellence</span>
            </h1>
            <p className="text-xl text-primary-foreground/70 leading-relaxed">
              Our proven methodology ensures efficient, transparent, and successful outcomes for both employers and candidates.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Process Section */}
      <Process />

      {/* CTA */}
      <CTA />
    </Layout>
  );
};

export default ProcessPage;
