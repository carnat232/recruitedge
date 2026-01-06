import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";

const PrivacyPage = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20 bg-gradient-navy text-primary-foreground">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
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
                  <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    RecruitEdgeGlobal collects and processes personal data solely for recruitment purposes. We follow strict data-protection standards to ensure security, transparency, and lawful processing of information.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">2. Data We Collect</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We collect personal information that you provide directly, including your name, email address, phone number, CV/resume, work history, educational background, and any other information you choose to share with us.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Data</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Your data is used exclusively for recruitment purposes, including matching you with suitable job opportunities, communicating with you about positions, and sharing your profile with potential employers with your consent.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Protection</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement robust security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. All data is encrypted and stored securely.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">5. Your Rights</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    You have the right to access, correct, or delete your personal data at any time. You may also withdraw your consent for data processing. Contact us at privacy@recruiteedgeglobal.com to exercise your rights.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">6. Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    For questions about this Privacy Policy or our data practices, please contact us at privacy@recruiteedgeglobal.com.
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

export default PrivacyPage;
