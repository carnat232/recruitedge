import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Upload, CheckCircle2, AlertCircle, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const UploadCVPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });
  const [agreements, setAgreements] = useState({
    nda: false,
    privacy: false,
    terms: false,
  });
  const [errors, setErrors] = useState<string[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      const validTypes = [
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!validTypes.includes(selectedFile.type)) {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF or DOCX file.",
          variant: "destructive",
        });
        return;
      }
      if (selectedFile.size > 10 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Maximum file size is 10MB.",
          variant: "destructive",
        });
        return;
      }
      setFile(selectedFile);
    }
  };

  const validateForm = (): boolean => {
    const newErrors: string[] = [];

    if (!formData.fullName.trim()) newErrors.push("Full name is required");
    if (!formData.email.trim()) newErrors.push("Email is required");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.push("Valid email is required");
    if (!file) newErrors.push("CV file is required");
    if (!agreements.nda) newErrors.push("You must agree to the Candidate NDA");
    if (!agreements.privacy) newErrors.push("You must agree to the Privacy Policy");
    if (!agreements.terms) newErrors.push("You must agree to the Terms of Service");

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: "Please complete all required fields",
        description: "All checkboxes must be checked to submit your CV.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "CV Submitted Successfully!",
      description: "We'll contact you if your profile matches available opportunities.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const allChecked = agreements.nda && agreements.privacy && agreements.terms;

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-teal text-secondary-foreground">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary-foreground/20 text-secondary-foreground text-sm font-medium mb-4">
              Upload Your CV
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Take the First Step in Your <span className="text-accent">Career Journey</span>
            </h1>
            <p className="text-xl text-secondary-foreground/80 leading-relaxed">
              Submit your CV and let our expert recruiters match you with the perfect opportunity.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Upload Form */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <AnimatedSection>
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">CV Submitted!</h3>
                    <p className="text-muted-foreground mb-6">
                      Your CV has been successfully submitted. We'll contact you if your profile matches available opportunities.
                    </p>
                    <Link to="/">
                      <Button variant="outline">Return Home</Button>
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {errors.length > 0 && (
                      <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-4">
                        <div className="flex items-center gap-2 text-destructive mb-2">
                          <AlertCircle className="w-5 h-5" />
                          <span className="font-medium">Please fix the following errors:</span>
                        </div>
                        <ul className="list-disc list-inside text-sm text-destructive space-y-1">
                          {errors.map((error, index) => (
                            <li key={index}>{error}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="h-12"
                      />
                    </div>

                    {/* File Upload */}
                    <div className="space-y-2">
                      <Label>Upload CV * (.pdf or .docx only)</Label>
                      <div className="relative">
                        <input
                          type="file"
                          accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                          onChange={handleFileChange}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        />
                        <div className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${file ? "border-secondary bg-secondary/5" : "border-border hover:border-secondary/50"}`}>
                          {file ? (
                            <div className="flex items-center justify-center gap-3">
                              <FileText className="w-8 h-8 text-secondary" />
                              <div className="text-left">
                                <div className="font-medium text-foreground">{file.name}</div>
                                <div className="text-sm text-muted-foreground">
                                  {(file.size / 1024 / 1024).toFixed(2)} MB
                                </div>
                              </div>
                            </div>
                          ) : (
                            <>
                              <Upload className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
                              <div className="text-foreground font-medium">Click or drag to upload</div>
                              <div className="text-sm text-muted-foreground">PDF or DOCX, max 10MB</div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Required Agreements */}
                    <div className="space-y-4 pt-4 border-t border-border">
                      <h4 className="font-semibold text-foreground">Required Agreements *</h4>
                      <p className="text-sm text-muted-foreground">
                        You must agree to all of the following to submit your CV:
                      </p>

                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <Checkbox
                            id="nda"
                            checked={agreements.nda}
                            onCheckedChange={(checked) =>
                              setAgreements({ ...agreements, nda: checked as boolean })
                            }
                            className="mt-1"
                          />
                          <Label htmlFor="nda" className="text-sm leading-relaxed cursor-pointer">
                            I agree to the{" "}
                            <Link to="/nda" className="text-secondary hover:underline">
                              Candidate NDA / Confidentiality Agreement
                            </Link>
                          </Label>
                        </div>

                        <div className="flex items-start gap-3">
                          <Checkbox
                            id="privacy"
                            checked={agreements.privacy}
                            onCheckedChange={(checked) =>
                              setAgreements({ ...agreements, privacy: checked as boolean })
                            }
                            className="mt-1"
                          />
                          <Label htmlFor="privacy" className="text-sm leading-relaxed cursor-pointer">
                            I agree to the{" "}
                            <Link to="/privacy" className="text-secondary hover:underline">
                              Privacy Policy
                            </Link>
                          </Label>
                        </div>

                        <div className="flex items-start gap-3">
                          <Checkbox
                            id="terms"
                            checked={agreements.terms}
                            onCheckedChange={(checked) =>
                              setAgreements({ ...agreements, terms: checked as boolean })
                            }
                            className="mt-1"
                          />
                          <Label htmlFor="terms" className="text-sm leading-relaxed cursor-pointer">
                            I agree to the{" "}
                            <Link to="/terms" className="text-secondary hover:underline">
                              Terms of Service
                            </Link>
                          </Label>
                        </div>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      variant="gold"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting || !allChecked}
                    >
                      {isSubmitting ? "Submitting..." : "Submit CV"}
                    </Button>

                    {!allChecked && (
                      <p className="text-sm text-center text-muted-foreground">
                        Please agree to all required terms to submit your CV.
                      </p>
                    )}
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UploadCVPage;
