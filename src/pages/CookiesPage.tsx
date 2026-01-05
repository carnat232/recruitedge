import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";

const CookiesPage = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20 bg-gradient-navy text-primary-foreground">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cookie Policy</h1>
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
                  <h2 className="text-2xl font-bold text-foreground mb-4">What Are Cookies?</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Cookies are small text files stored on your device when you visit a website. They help us improve functionality, analyze usage, and enhance your experience.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Cookies</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We use cookies to improve functionality, analytics, and user experience. This includes remembering your preferences, understanding how you use our site, and improving our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Types of Cookies</h2>
                  <ul className="text-muted-foreground space-y-2">
                    <li><strong>Essential Cookies:</strong> Required for basic website functionality.</li>
                    <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our site.</li>
                    <li><strong>Preference Cookies:</strong> Remember your settings and preferences.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Managing Cookies</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    You may manage cookie preferences via your browser settings. Most browsers allow you to refuse cookies or delete existing ones. Note that disabling cookies may affect website functionality.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Contact</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    For questions about our Cookie Policy, please contact us at privacy@recruiteedgeglobal.com.
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

export default CookiesPage;
