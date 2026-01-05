import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";

const TestimonialsPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-navy text-primary-foreground">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
              Testimonials
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Success Stories from <span className="text-gradient-gold">Our Clients</span>
            </h1>
            <p className="text-xl text-primary-foreground/70 leading-relaxed">
              Hear what employers and candidates say about their experience with RecruiteEdgeGlobal.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA */}
      <CTA />
    </Layout>
  );
};

export default TestimonialsPage;
