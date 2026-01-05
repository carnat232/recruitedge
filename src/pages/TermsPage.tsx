import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";

const TermsPage = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20 bg-gradient-navy text-primary-foreground">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
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
                  <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By using this website, you agree to our recruitment practices and policies. RecruiteEdgeGlobal acts as a recruitment intermediary and does not guarantee employment outcomes.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">2. Services Description</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    RecruiteEdgeGlobal provides recruitment and staffing services connecting employers with job candidates. We facilitate introductions and provide recruitment support but do not directly employ candidates placed with client organizations.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">3. User Responsibilities</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    You agree to provide accurate and complete information when using our services. You are responsible for maintaining the confidentiality of your account and for all activities under your account.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">4. No Employment Guarantee</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    While we strive to match candidates with suitable opportunities, we do not guarantee employment or placement. Final hiring decisions rest with our client employers.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">5. Intellectual Property</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    All content on this website, including text, graphics, logos, and software, is the property of RecruiteEdgeGlobal and protected by applicable intellectual property laws.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">6. Limitation of Liability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    RecruiteEdgeGlobal shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or website.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">7. Contact</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    For questions about these Terms, please contact us at legal@recruiteedgeglobal.com.
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

export default TermsPage;
