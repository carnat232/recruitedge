import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cookie } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleManage = () => {
    localStorage.setItem("cookie-consent", "managed");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="container mx-auto">
            <div className="bg-card rounded-2xl shadow-xl border border-border p-6 flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center gap-3 flex-1">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <Cookie className="w-6 h-6 text-secondary" />
                </div>
                <p className="text-sm text-muted-foreground">
                  We use cookies to enhance your experience. By continuing, you agree to our{" "}
                  <Link to="/cookies" className="text-secondary hover:underline">
                    Cookie Policy
                  </Link>.
                </p>
              </div>
              <div className="flex gap-3 shrink-0">
                <Button variant="outline" size="sm" onClick={handleManage}>
                  Manage Preferences
                </Button>
                <Button variant="secondary" size="sm" onClick={handleAccept}>
                  Accept
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
