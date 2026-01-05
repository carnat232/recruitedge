import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { 
  FileSearch, 
  Award, 
  UserCheck, 
  Shield, 
  Compass, 
  Building2,
  CheckCircle2,
  Upload
} from "lucide-react";

const services = [
  { icon: FileSearch, title: "Job Matching & Placement", desc: "We analyze your skills, experience, and aspirations to match you with roles that align with your career goals." },
  { icon: Award, title: "CV Review & Optimization", desc: "Expert feedback to ensure your CV stands out. We help you highlight achievements and present your best self." },
  { icon: UserCheck, title: "Interview Coaching", desc: "Personalized preparation sessions to help you ace interviews. From technical questions to salary negotiation." },
  { icon: Shield, title: "Confidential Job Search", desc: "Discreet job hunting while employed. Your search remains private until you're ready to make a move." },
  { icon: Compass, title: "Career Guidance", desc: "Strategic advice on career progression, skill development, and market opportunities in your field." },
  { icon: Building2, title: "Access to Global Employers", desc: "Connect with leading companies worldwide. Opportunities across industries and locations." },
];

const benefits = [
  "100% free services for candidates",
  "Access to exclusive job opportunities",
  "Confidential and secure process",
  "Dedicated recruiter support",
  "Global opportunities",
  "Long-term career partnership",
];

const CandidatesPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-teal text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="inline-block px-4 py-2 rounded-full bg-secondary-foreground/20 text-secondary-foreground text-sm font-medium mb-4">
                For Candidates
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Advance Your Career with <span className="text-accent">Global Opportunities</span>
              </h1>
              <p className="text-xl text-secondary-foreground/80 leading-relaxed mb-8">
                Let RecruiteEdgeGlobal connect you with your next career opportunity. Expert guidance, global reach, and completely free for candidates.
              </p>
              <Link to="/upload-cv">
                <Button variant="gold" size="xl" className="gap-2">
                  <Upload className="w-5 h-5" /> Upload Your CV
                </Button>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-secondary-foreground/10 rounded-2xl p-8 border border-secondary-foreground/20">
                <h3 className="text-xl font-semibold mb-6">Candidate Benefits</h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                      <span className="text-secondary-foreground/90">{benefit}</span>
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
            <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Career Support
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to land your dream job.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-card rounded-2xl p-6 shadow-md border border-border h-full hover:shadow-xl hover:border-secondary/30 transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-gradient-teal flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-secondary-foreground" />
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
              Ready to Take the Next Step?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Submit your CV today and let us help you find your perfect role.
            </p>
            <Link to="/upload-cv">
              <Button variant="gold" size="xl" className="gap-2">
                <Upload className="w-5 h-5" /> Upload CV Now
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default CandidatesPage;
