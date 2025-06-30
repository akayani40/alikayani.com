"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function ModernHeroWithGradients() {
  const [nameAnimationComplete, setNameAnimationComplete] = useState(false);

  // Trigger name color change after all initial animations
  useEffect(() => {
    const timer = setTimeout(() => {
      setNameAnimationComplete(true);
    }, 4500); // After page load + hero animations complete

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      {/* Clean Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
        <div className="max-width">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="apple-body font-semibold text-foreground"
            >
              Ali Kayani
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="hidden md:flex items-center space-x-8"
            >
              <a href="#about" className="apple-body text-muted-foreground hover:text-foreground minimal-hover">
                About
              </a>
              <a href="#projects" className="apple-body text-muted-foreground hover:text-foreground minimal-hover">
                Projects
              </a>
              <a href="#education" className="apple-body text-muted-foreground hover:text-foreground minimal-hover">
                Education
              </a>
              <a href="#contact" className="apple-body text-muted-foreground hover:text-foreground minimal-hover">
                Contact
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="flex items-center gap-3"
            >
              <a
                href="https://github.com/akayani40"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary minimal-hover"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/ali-kayani"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary minimal-hover"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="max-width pt-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-16"
          >
            {/* Big Bold Name with Dynamic Color Animation */}
            <motion.h1 
              className={`apple-title text-6xl md:text-8xl lg:text-9xl mb-12 transition-all duration-1000`}
              initial={{ 
                opacity: 0, 
                y: 60,
                scale: 0.8
              }}
              animate={{ 
                opacity: 1, 
                y: 0,
                scale: 1
              }}
              transition={{ 
                duration: 1.2, 
                delay: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              style={{
                background: nameAnimationComplete 
                  ? 'linear-gradient(135deg, #007aff 0%, #0a84ff 25%, #34c759 50%, #ff9500 75%, #af52de 100%)'
                  : 'none',
                backgroundClip: nameAnimationComplete ? 'text' : 'unset',
                WebkitBackgroundClip: nameAnimationComplete ? 'text' : 'unset',
                color: nameAnimationComplete ? 'transparent' : 'hsl(var(--foreground))',
                backgroundSize: nameAnimationComplete ? '200% 200%' : 'auto',
                animation: nameAnimationComplete ? 'gradientShift 3s ease-in-out infinite' : 'none'
              }}
            >
              Ali Kayani
            </motion.h1>
            
            {/* Simple Tagline with proper spacing */}
            <motion.p 
              className="apple-body text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Software Engineer & AI Enthusiast
            </motion.p>
            
            <motion.p 
              className="apple-body text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              Informatics student at UC Irvine passionate about building intuitive technology 
              that makes a difference. Currently seeking internship opportunities for 2025.
            </motion.p>

            {/* Single CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mb-16"
            >
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg apple-body font-medium minimal-hover shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a
                  href="/Ali_Kayani_Resume.pdf"
                  download="Ali_Kayani_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
              </Button>
            </motion.div>

            {/* Clean Contact Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-8 text-sm"
            >
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <a href="mailto:ali@alikayani.com" className="hover:text-primary minimal-hover apple-body">
                  ali@alikayani.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <ExternalLink className="w-4 h-4" />
                <a href="https://alikayani.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary minimal-hover apple-body">
                  alikayani.com
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Simple Status Card */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="max-w-md mx-auto"
          >
            <div className="product-card text-center">
              <div className="text-primary apple-body font-semibold mb-2">
                Available for 2025 Internships
              </div>
              <div className="text-muted-foreground apple-body text-sm">
                B.S. Informatics • UC Irvine • Expected Dec 2025
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}