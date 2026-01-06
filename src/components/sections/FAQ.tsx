import { AnimatedSection } from "@/components/AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What industries do you recruit for?",
    answer: "We recruit across a wide range of industries including technology, finance, healthcare, manufacturing, engineering, and professional services. Our specialist recruiters have deep expertise in their respective sectors.",
  },
  {
    question: "Is my CV kept confidential?",
    answer: "Absolutely. We adhere to strict confidentiality protocols. Your CV and personal information are only shared with potential employers with your explicit consent. We are fully compliant with data protection regulations.",
  },
  {
    question: "Do you recruit internationally?",
    answer: "Yes, we operate globally across 50+ countries. Whether you're seeking international talent or looking for opportunities abroad, we have the network and expertise to support cross-border recruitment.",
  },
  {
    question: "How long does the recruitment process take?",
    answer: "Timeline varies based on role complexity and seniority. Typically, we present qualified candidates within 2-3 weeks. Executive searches may take 4-8 weeks. We provide regular updates throughout the process.",
  },
  {
    question: "Are your services free for candidates?",
    answer: "Yes, all our candidate services are completely free. We are compensated by employers upon successful placement. You receive full access to job matching, CV optimization, and career guidance at no cost.",
  },
  {
    question: "How do employers get started?",
    answer: "Simply contact us through our website or call our team. We'll schedule a consultation to understand your hiring needs, company culture, and role requirements. From there, we develop a tailored recruitment strategy.",
  },
  {
    question: "Do you offer remote hiring support?",
    answer: "Yes, we specialize in remote and hybrid workforce solutions. We can help you source, vet, and onboard remote talent from anywhere in the world, ensuring compliance with local employment regulations.",
  },
  {
    question: "How are candidates screened?",
    answer: "Our screening process includes CV review, skills assessment, structured interviews, reference checks, and where applicable, technical evaluations. We ensure candidates match both role requirements and cultural fit.",
  },
  {
    question: "Can I apply for multiple roles?",
    answer: "Yes, you can express interest in multiple opportunities. Our team will evaluate your profile against each role and provide guidance on the best matches for your skills and career objectives.",
  },
  {
    question: "How can I contact a recruiter?",
    answer: "You can reach us through our contact form, email at info@recruitedgeglobal.com, or call our office directly. We aim to respond to all inquiries within 24 business hours.",
  },
];

export function FAQ() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find answers to common questions about our services.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-xl border border-border px-6 shadow-sm"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-secondary py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
