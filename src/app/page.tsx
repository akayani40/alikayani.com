"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import ModernHeroWithGradients from "@/components/blocks/heros/modern-hero-with-gradients";
import AboutSkillsSection from "@/components/sections/about-skills";
import ProjectsShowcase from "@/components/sections/projects-showcase";
import EducationBackground from "@/components/sections/education-background";
import ContactSection from "@/components/sections/contact-section";
import CenteredWithLogo from "@/components/blocks/footers/centered-with-logo";

// Sophisticated loading overlay component
const LoadingOverlay = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 bg-background flex items-center justify-center"
        >
          {/* Animated logo/initials */}
          <div className="relative">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.2, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center"
            >
              {/* Large initials with gradient */}
              <motion.h1 
                className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent mb-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                AK
              </motion.h1>
              
              {/* Loading text */}
              <motion.p 
                className="text-muted-foreground text-lg tracking-wider"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                Loading Experience...
              </motion.p>
            </motion.div>

            {/* Animated circles */}
            <motion.div
              className="absolute -inset-20 pointer-events-none"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-40 h-40 border border-primary/20 rounded-full absolute top-0 left-0"></div>
              <div className="w-32 h-32 border border-secondary/30 rounded-full absolute top-4 left-4"></div>
              <div className="w-24 h-24 border border-primary/10 rounded-full absolute top-8 left-8"></div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Stagger animation container for sections
const SectionContainer = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94] // Custom easing for smooth feel
      }}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simulate loading time for dramatic effect
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Small delay before showing content for smooth transition
      setTimeout(() => setShowContent(true), 300);
    }, 2500); // 2.5 seconds of loading animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingOverlay isLoading={isLoading} />
      
      <AnimatePresence>
        {showContent && (
          <motion.div 
            className="flex flex-col min-h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Hero Section - First to appear */}
            <section id="hero">
              <SectionContainer delay={0.1}>
                <ModernHeroWithGradients />
              </SectionContainer>
            </section>

            {/* About & Skills Section */}
            <section id="about">
              <SectionContainer delay={0.3}>
                <AboutSkillsSection />
              </SectionContainer>
            </section>

            {/* Projects Showcase */}
            <section id="projects">
              <SectionContainer delay={0.5}>
                <ProjectsShowcase />
              </SectionContainer>
            </section>

            {/* Education Background */}
            <section id="education">
              <SectionContainer delay={0.7}>
                <EducationBackground />
              </SectionContainer>
            </section>

            {/* Contact Section */}
            <section id="contact">
              <SectionContainer delay={0.9}>
                <ContactSection />
              </SectionContainer>
            </section>

            {/* Footer */}
            <section id="footer">
              <SectionContainer delay={1.1}>
                <CenteredWithLogo />
              </SectionContainer>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}