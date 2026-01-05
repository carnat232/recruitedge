import { AnimatedSection } from "@/components/AnimatedSection";
import { 
  MessageSquare, 
  Search, 
  FileCheck, 
  ListChecks, 
  Users2, 
  CheckCircle2,
  Upload,
  UserCheck,
  Compass,
  Presentation,
  HandshakeIcon,
  Star
} from "lucide-react";

const employerProcess = [
  { icon: MessageSquare, step: "01", title: "Role Consultation", desc: "Understanding your needs" },
  { icon: Search, step: "02", title: "Talent Sourcing", desc: "Accessing global networks" },
  { icon: FileCheck, step: "03", title: "Candidate Screening", desc: "Rigorous vetting process" },
  { icon: ListChecks, step: "04", title: "Shortlisting", desc: "Best-fit candidates" },
  { icon: Users2, step: "05", title: "Interviews & Feedback", desc: "Coordinated process" },
  { icon: CheckCircle2, step: "06", title: "Placement & Follow-Up", desc: "Ensuring success" },
];

const candidateProcess = [
  { icon: Upload, step: "01", title: "CV Submission", desc: "Start your journey" },
  { icon: UserCheck, step: "02", title: "Profile Evaluation", desc: "Understanding your skills" },
  { icon: Compass, step: "03", title: "Job Matching", desc: "Finding the right fit" },
  { icon: Presentation, step: "04", title: "Interview Prep", desc: "Coaching & support" },
  { icon: HandshakeIcon, step: "05", title: "Offer Support", desc: "Negotiation guidance" },
  { icon: Star, step: "06", title: "Career Support", desc: "Long-term success" },
];

export function Process() {
  return (
    <section className="py-24 bg-gradient-navy text-primary-foreground">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Structured for <span className="text-accent">Success</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Clear, efficient processes tailored for employers and candidates.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Employer Process */}
          <AnimatedSection delay={0.1}>
            <div className="bg-primary-foreground/5 rounded-2xl p-8 border border-primary-foreground/10">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-accent-foreground text-sm font-bold">E</span>
                Employer Journey
              </h3>
              <div className="space-y-4">
                {employerProcess.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold">{item.title}</div>
                      <div className="text-sm text-primary-foreground/60">{item.desc}</div>
                    </div>
                    <span className="text-accent font-bold text-lg">{item.step}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Candidate Process */}
          <AnimatedSection delay={0.2}>
            <div className="bg-primary-foreground/5 rounded-2xl p-8 border border-primary-foreground/10">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-secondary-foreground text-sm font-bold">C</span>
                Candidate Journey
              </h3>
              <div className="space-y-4">
                {candidateProcess.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold">{item.title}</div>
                      <div className="text-sm text-primary-foreground/60">{item.desc}</div>
                    </div>
                    <span className="text-secondary font-bold text-lg">{item.step}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
