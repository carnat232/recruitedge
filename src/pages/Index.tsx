import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Process } from "@/components/sections/Process";
import { Team } from "@/components/sections/Team";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Process />
      <Team />
      <Testimonials />
      <FAQ />
      <CTA />
    </Layout>
  );
};

export default Index;
