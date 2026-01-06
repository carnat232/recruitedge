import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, Globe, Users, Award, ArrowRight } from "lucide-react";

const trustIndicators = [
  { icon: Shield, text: "Confidential Recruitment" },
  { icon: Globe, text: "Global Talent Network" },
  { icon: Users, text: "Industry-Specialist Recruiters" },
  { icon: Award, text: "Ethical Hiring Standards" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90" />
      
      {/* Floating Orbs */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-secondary/40 to-secondary/20 blur-[100px]"
      />
      <motion.div
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-[5%] w-[600px] h-[600px] rounded-full bg-gradient-to-r from-accent/30 to-accent/10 blur-[120px]"
      />
      <motion.div
        animate={{ 
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full bg-secondary/20 blur-[80px]"
      />

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

      <div className="container mx-auto px-4 py-32 relative z-10 text-center flex flex-col items-center">
        <div className="max-w-4xl flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-secondary/30 to-secondary/10 border border-secondary/30 text-secondary text-sm font-medium mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Global Recruitment Excellence
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6"
          >
            Your Competitive Edge in{" "}
            <span className="relative">
              <span className="text-gradient-gold">Global Recruitment</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent/50 rounded-full origin-left"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-primary-foreground/80 mb-10 max-w-2xl leading-relaxed mx-auto"
          >
            RecruiteEdgeGlobal connects trusted employers with top-tier talent worldwide through structured, confidential, and results-driven recruitment solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-14 justify-center"
          >
            <Link to="/employers">
              <Button variant="gold" size="xl" className="group gap-2 shadow-lg shadow-accent/25">
                Hire Talent
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/candidates">
              <Button variant="outline-light" size="xl" className="backdrop-blur-sm bg-primary-foreground/5 hover:bg-primary-foreground/10">
                Find a Job
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3"
          >
            {trustIndicators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-3 px-4 py-4 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-md hover:bg-primary-foreground/10 hover:border-secondary/30 transition-all cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <span className="text-sm font-medium text-primary-foreground/90">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-7 h-12 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2 backdrop-blur-sm bg-primary-foreground/5"
        >
          <motion.div 
            animate={{ opacity: [0.5, 1, 0.5], y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 rounded-full bg-accent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
