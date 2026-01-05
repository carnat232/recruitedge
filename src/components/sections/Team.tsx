import { AnimatedSection } from "@/components/AnimatedSection";

import catherineBailey from "@/assets/team/catherine-bailey.jpg";
import marthaKruger from "@/assets/team/martha-kruger.jpg";
import nancyJones from "@/assets/team/nancy-jones.jpg";
import douglasEure from "@/assets/team/douglas-eure.jpg";

const team = [
  {
    name: "Catherine J. Bailey",
    role: "Founder & Managing Director",
    bio: "Strategic recruitment leader with 10+ years in executive hiring, talent consulting, and workforce strategy.",
    image: catherineBailey,
  },
  {
    name: "Martha H. Kruger",
    role: "Senior Talent Consultant",
    bio: "Specialist in global hiring, candidate experience, and employer advisory services.",
    image: marthaKruger,
  },
  {
    name: "Nancy J. Jones",
    role: "Lead Recruitment Strategist",
    bio: "Expert in HR operations, senior role matching, and candidate lifecycle design.",
    image: nancyJones,
  },
  {
    name: "Douglas G. Eure",
    role: "Head of Employer Partnerships",
    bio: "Drives key relationships with global employers and oversees recruitment quality.",
    image: douglasEure,
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
                <div className="w-32 h-32 rounded-2xl overflow-hidden mx-auto mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-secondary font-medium text-sm mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
