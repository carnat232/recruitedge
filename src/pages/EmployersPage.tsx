import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, 
  Users, 
  Target, 
  Globe, 
  TrendingUp, 
  Calendar,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const services = [
  { icon: Briefcase, title: "Permanent Recruitment", desc: "Find long-term talent that drives your business forward. We source, screen, and present candidates who match your culture and requirements." },
  { icon: Calendar, title: "Contract & Temporary Staffing", desc: "Flexible workforce solutions for project-based needs. Quick turnaround with thoroughly vetted professionals." },
  { icon: Target, title: "Executive Search & Headhunting", desc: "Discrete, targeted searches for senior leadership and C-suite positions. Access to passive candidates in your industry." },
  { icon: Globe, title: "Remote & International Hiring", desc: "Build global teams with confidence. We handle compliance, cultural fit, and cross-border recruitment complexities." },
  { icon: TrendingUp, title: "Talent Market Insights", desc: "Data-driven insights on salary benchmarks, competitor analysis, and talent availability in your sector." },
  { icon: Users, title: "Workforce Planning Support", desc: "Strategic hiring roadmaps aligned with your growth plans. Proactive talent pipelining for future needs." },
];

const benefits = [
  "Access to pre-vetted, qualified candidates",
  "Reduced time-to-hire by up to 50%",
  "Industry-specialist recruiters",
  "Confidential search options",
  "Global talent network",
  "Quality guarantee on placements",
];

const EmployersPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-navy text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
                For Employers
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Find <span className="text-gradient-gold">Exceptional Talent</span> for Your Organization
              </h1>
              <p className="text-xl text-primary-foreground/70 leading-relaxed mb-8">
                Partner with RecruiteEdgeGlobal to access top-tier professionals who drive results. Our structured approach delivers quality candidates efficiently.
              </p>
              <Link to="/contact">
                <Button variant="gold" size="xl" className="gap-2">
                  Request Talent <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-primary-foreground/5 rounded-2xl p-8 border border-primary-foreground/10">
                <h3 className="text-xl font-semibold mb-6">Why Partner With Us?</h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                      <span className="text-primary-foreground/80">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Employer Solutions
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tailored recruitment services to meet every hiring need.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-card rounded-2xl p-6 shadow-md border border-border h-full hover:shadow-xl hover:border-secondary/30 transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-gradient-navy flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Build Your Dream Team?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Contact us today to discuss your hiring needs and how we can help.
            </p>
            <Link to="/contact">
              <Button variant="secondary" size="xl" className="gap-2">
                Get Started <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default EmployersPage;
