import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, Globe, Users, Award, ArrowRight } from "lucide-react";
import { memo } from "react";

const trustIndicators = [
  { icon: Shield, text: "Confidential Recruitment" },
  { icon: Globe, text: "Global Talent Network" },
  { icon: Users, text: "Industry-Specialist Recruiters" },
  { icon: Award, text: "Ethical Hiring Standards" },
];

export const Hero = memo(function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Static Background Gradient - no animation for better performance */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90" />
      
      {/* Static Orbs - reduced from animated to static with CSS */}
      <div className="absolute top-20 right-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-secondary/40 to-secondary/20 blur-[100px] opacity-40" />
      <div className="absolute bottom-0 left-[5%] w-[600px] h-[600px] rounded-full bg-gradient-to-r from-accent/30 to-accent/10 blur-[120px] opacity-30" />
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full bg-secondary/20 blur-[80px]" />

      {/* Glass Shapes */}
      <div className="absolute top-32 right-[15%] w-72 h-72 border border-primary-foreground/10 rounded-3xl rotate-12 backdrop-blur-sm bg-primary-foreground/5" />
      <div className="absolute bottom-32 left-[10%] w-48 h-48 border border-primary-foreground/10 rounded-2xl -rotate-6 backdrop-blur-sm bg-primary-foreground/5" />

      {/* Dot Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container mx-auto px-4 py-16 md:py-32 relative z-10 text-center flex flex-col items-center">
        <div className="max-w-4xl flex flex-col items-center px-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-gradient-to-r from-secondary/30 to-secondary/10 border border-secondary/30 text-secondary text-xs md:text-sm font-medium mb-4 md:mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Global Recruitment Excellence
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-4 md:mb-6"
          >
            Your Competitive Edge in{" "}
            <span className="relative inline-block">
              <span className="text-gradient-gold">Global Recruitment</span>
              <span className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-gradient-to-r from-accent to-accent/50 rounded-full" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/80 mb-8 md:mb-10 max-w-2xl leading-relaxed mx-auto px-2"
          >
            RecruitEdgeGlobal connects trusted employers with top-tier talent worldwide through structured, confidential, and results-driven recruitment solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-10 md:mb-14 justify-center w-full sm:w-auto"
          >
            <Link to="/employers" className="w-full sm:w-auto">
              <Button variant="gold" size="xl" className="group gap-2 shadow-lg shadow-accent/25 w-full sm:w-auto">
                Hire Talent
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/candidates" className="w-full sm:w-auto">
              <Button variant="outline-light" size="xl" className="backdrop-blur-sm bg-primary-foreground/5 hover:bg-primary-foreground/10 w-full sm:w-auto">
                Find a Job
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 w-full"
          >
            {trustIndicators.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 md:gap-3 px-3 py-3 md:px-4 md:py-4 rounded-xl md:rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-md hover:bg-primary-foreground/10 hover:border-secondary/30 transition-all cursor-default"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                </div>
                <span className="text-xs md:text-sm font-medium text-primary-foreground/90">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Simplified Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-7 h-12 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2 backdrop-blur-sm bg-primary-foreground/5">
          <div className="w-1.5 h-3 rounded-full bg-accent animate-bounce" />
        </div>
      </div>
    </section>
  );
});