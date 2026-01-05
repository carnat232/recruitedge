import { AnimatedSection } from "@/components/AnimatedSection";
import { Quote, Building2, User } from "lucide-react";

const testimonials = [
  {
    quote: "RecruiteEdgeGlobal delivered high-quality candidates efficiently. A truly professional recruitment partner that understands our industry and delivers results consistently.",
    author: "Sarah Mitchell",
    role: "HR Director",
    company: "TechCorp International",
    type: "employer",
  },
  {
    quote: "They helped me secure the right role with excellent support and confidentiality. The team was professional, responsive, and genuinely cared about my career goals.",
    author: "James Rodriguez",
    role: "Senior Software Engineer",
    company: "Placed at Fortune 500",
    type: "candidate",
  },
  {
    quote: "Outstanding service from start to finish. Their market insights and candidate quality exceeded our expectations. We've partnered with them for all our executive hiring.",
    author: "David Chen",
    role: "CEO",
    company: "GlobalFinance Ltd",
    type: "employer",
  },
  {
    quote: "The interview coaching and career guidance were invaluable. I landed my dream job within weeks of submitting my CV. Highly recommend their candidate services.",
    author: "Emily Thompson",
    role: "Marketing Director",
    company: "Now at Leading Agency",
    type: "candidate",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Success stories from employers and candidates worldwide.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="bg-card rounded-2xl p-8 shadow-md border border-border h-full relative">
                <Quote className="w-10 h-10 text-secondary/20 absolute top-6 right-6" />
                <div className="flex items-center gap-2 mb-4">
                  {testimonial.type === "employer" ? (
                    <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      <Building2 className="w-3 h-3" /> Employer
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-medium">
                      <User className="w-3 h-3" /> Candidate
                    </span>
                  )}
                </div>
                <p className="text-foreground leading-relaxed mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                    <span className="font-bold text-muted-foreground">
                      {testimonial.author.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-secondary">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
