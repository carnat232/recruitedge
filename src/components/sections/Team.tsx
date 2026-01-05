import { AnimatedSection } from "@/components/AnimatedSection";
import { Linkedin, Mail } from "lucide-react";

const team = [
  {
    name: "Michael Grant",
    role: "Managing Director",
    bio: "15+ years in global recruitment and executive hiring.",
    initials: "MG",
    color: "bg-gradient-navy",
  },
  {
    name: "Olivia Bennett",
    role: "Head of Talent Solutions",
    bio: "Specialist in employer partnerships and workforce strategy.",
    initials: "OB",
    color: "bg-gradient-teal",
  },
  {
    name: "Samuel Adeyemi",
    role: "Senior Recruitment Consultant",
    bio: "Expert in candidate sourcing and placement success.",
    initials: "SA",
    color: "bg-gradient-gold",
  },
  {
    name: "Laura Chen",
    role: "Client & Candidate Success Manager",
    bio: "Ensures seamless recruitment experiences.",
    initials: "LC",
    color: "bg-secondary",
  },
];

export function Team() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Our Leadership
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experienced professionals dedicated to your recruitment success.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="bg-card rounded-2xl p-6 shadow-md border border-border text-center group hover:shadow-xl transition-all duration-300">
                <div className={`w-24 h-24 rounded-2xl ${member.color} flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-primary-foreground font-bold text-2xl">{member.initials}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-secondary font-medium text-sm mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                <div className="flex justify-center gap-3">
                  <a
                    href="#"
                    className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
