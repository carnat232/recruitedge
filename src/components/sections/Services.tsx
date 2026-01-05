import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, 
  Users, 
  Target, 
  Globe, 
  TrendingUp, 
  Calendar,
  FileSearch,
  Award,
  Shield,
  Compass,
  Building2,
  UserCheck
} from "lucide-react";

const employerServices = [
  { icon: Briefcase, title: "Permanent Recruitment", desc: "Long-term talent acquisition" },
  { icon: Calendar, title: "Contract & Temporary", desc: "Flexible staffing solutions" },
  { icon: Target, title: "Executive Search", desc: "Senior leadership hiring" },
  { icon: Globe, title: "Remote & International", desc: "Global talent sourcing" },
  { icon: TrendingUp, title: "Market Insights", desc: "Talent market intelligence" },
  { icon: Users, title: "Workforce Planning", desc: "Strategic hiring support" },
];

const candidateServices = [
  { icon: FileSearch, title: "Job Matching", desc: "Find your perfect role" },
  { icon: Award, title: "CV Optimization", desc: "Stand out to employers" },
  { icon: UserCheck, title: "Interview Coaching", desc: "Ace your interviews" },
  { icon: Shield, title: "Confidential Search", desc: "Discreet job hunting" },
  { icon: Compass, title: "Career Guidance", desc: "Shape your future" },
  { icon: Building2, title: "Global Access", desc: "Top employers worldwide" },
];

export function Services() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Recruitment Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Whether you're hiring talent or seeking your next opportunity, we deliver results.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Employer Services */}
          <AnimatedSection delay={0.1}>
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-navy flex items-center justify-center">
                  <Building2 className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">For Employers</h3>
                  <p className="text-muted-foreground">Find exceptional talent</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {employerServices.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <service.icon className="w-5 h-5 text-secondary mt-0.5" />
                    <div>
                      <div className="font-medium text-foreground">{service.title}</div>
                      <div className="text-sm text-muted-foreground">{service.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/employers">
                <Button variant="navy" size="lg" className="w-full">
                  Request Talent
                </Button>
              </Link>
            </div>
          </AnimatedSection>

          {/* Candidate Services */}
          <AnimatedSection delay={0.2}>
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-teal flex items-center justify-center">
                  <Users className="w-7 h-7 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">For Candidates</h3>
                  <p className="text-muted-foreground">Advance your career</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {candidateServices.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <service.icon className="w-5 h-5 text-accent mt-0.5" />
                    <div>
                      <div className="font-medium text-foreground">{service.title}</div>
                      <div className="text-sm text-muted-foreground">{service.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/upload-cv">
                <Button variant="gold" size="lg" className="w-full">
                  Upload Your CV
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
