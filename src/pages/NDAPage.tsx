import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";

const NDAPage = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20 bg-gradient-navy text-primary-foreground">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Candidate NDA / Confidentiality Agreement</h1>
            <p className="text-xl text-primary-foreground/70">
              Last updated: January 2026
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <AnimatedSection>
              <div className="bg-card rounded-2xl p-8 shadow-md border border-border space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Confidentiality Commitment</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    All candidate information submitted to RecruiteEdgeGlobal is treated as strictly confidential. By submitting your CV, you authorize RecruiteEdgeGlobal to store and share your information only with potential employers for recruitment purposes.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Data Protection</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Your data will never be sold or disclosed without consent. We implement industry-standard security measures to protect your personal information from unauthorized access.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Information Sharing</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Your CV and personal information will only be shared with potential employers who have relevant opportunities matching your profile. We will always seek your consent before submitting your details to any specific employer.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Retention Period</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We retain candidate information for up to 2 years from the date of submission, unless you request earlier deletion. You may request removal of your data at any time by contacting us.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    You have the right to access, update, or delete your personal information at any time. You may also withdraw your consent for us to process your data. Contact us at privacy@recruiteedgeglobal.com to exercise your rights.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Agreement</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By submitting your CV through our website, you acknowledge that you have read, understood, and agree to this Confidentiality Agreement.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NDAPage;
