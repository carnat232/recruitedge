import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/source-sans-3/400.css";
import "@fontsource/source-sans-3/500.css";
import "@fontsource/source-sans-3/600.css";

// Eagerly load the main page for fast initial load
import Index from "./pages/Index";

// Lazy load all other pages
const AboutPage = lazy(() => import("./pages/AboutPage"));
const EmployersPage = lazy(() => import("./pages/EmployersPage"));
const CandidatesPage = lazy(() => import("./pages/CandidatesPage"));
const ProcessPage = lazy(() => import("./pages/ProcessPage"));
const TeamPage = lazy(() => import("./pages/TeamPage"));
const TestimonialsPage = lazy(() => import("./pages/TestimonialsPage"));
const FAQPage = lazy(() => import("./pages/FAQPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const UploadCVPage = lazy(() => import("./pages/UploadCVPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));
const CookiesPage = lazy(() => import("./pages/CookiesPage"));
const NDAPage = lazy(() => import("./pages/NDAPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Minimal loading fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 border-2 border-secondary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/employers" element={<EmployersPage />} />
            <Route path="/candidates" element={<CandidatesPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/upload-cv" element={<UploadCVPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/cookies" element={<CookiesPage />} />
            <Route path="/nda" element={<NDAPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;