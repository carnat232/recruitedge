import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CookieConsent } from "@/components/CookieConsent";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Header />
      <main className="flex-1 w-full max-w-[1920px] mx-auto">{children}</main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
