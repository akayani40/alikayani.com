"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { Spotlight } from "@/components/ui/spotlight-new";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail, ExternalLink } from "lucide-react";

// Interactive floating code elements
const FloatingCodeElements = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 });

  useEffect(() => {
    setIsClient(true);
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Don't render until client-side
  if (!isClient) {
    return null;
  }

  const codeSnippets = [
    "const ai = 'future'",
    "npm run build",
    "git push origin main",
    "console.log('hello')",
    "import React from 'react'",
    "function solve()",
    "SELECT * FROM dreams",
    "python main.py"
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {codeSnippets.map((code, i) => (
        <motion.div
          key={i}
          className="absolute text-xs font-mono text-green-400/30 whitespace-nowrap"
          initial={{
            x: Math.random() * windowSize.width,
            y: Math.random() * windowSize.height,
            opacity: 0,
          }}
          animate={{
            x: Math.random() * windowSize.width + (mousePosition.x - 0.5) * 100,
            y: Math.random() * windowSize.height + (mousePosition.y - 0.5) * 50,
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.5,
          }}
        >
          {code}
        </motion.div>
      ))}
    </div>
  );
};

export default function ModernHeroWithGradients() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Effects */}
      <BackgroundGradientAnimation>
        <div className="absolute inset-0 bg-black/90" />
      </BackgroundGradientAnimation>
      
      <Spotlight
        className="absolute inset-0"
        fill="white"
      />

      {/* Floating Code Elements */}
      <FloatingCodeElements />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-red-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="font-bold text-xl text-white"
            >
              Ali Kayani
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:flex items-center space-x-8"
            >
              <a href="#about" className="text-gray-300 hover:text-red-400 transition-colors font-medium">
                About
              </a>
              <a href="#projects" className="text-gray-300 hover:text-red-400 transition-colors font-medium">
                Projects
              </a>
              <a href="#education" className="text-gray-300 hover:text-red-400 transition-colors font-medium">
                Education
              </a>
              <a href="#contact" className="text-gray-300 hover:text-red-400 transition-colors font-medium">
                Contact
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-3"
            >
              <a
                href="https://github.com/akayani40"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/ali-kayani"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 font-inter leading-tight">
              Software Engineer &{" "}
              <span className="bg-gradient-to-r from-red-400 to-green-400 bg-clip-text text-transparent">
                AI Enthusiast
              </span>
            </h1>
            
            <h2 className="text-3xl md:text-4xl font-medium text-gray-200 mb-6">
              Ali Kayani
            </h2>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-4">
              Informatics Student | Building the Future Through Code & Intelligence
            </p>
            
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
              SWE Intern passionate about AI, full-stack development, and building scalable tools. 
              Equally excited by opportunities in Cloud, QA, and PM.
            </p>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <span className="px-4 py-2 bg-red-500/20 text-red-300 rounded-full text-sm border border-red-500/30">
                UC Irvine • B.S. Informatics (HCI)
              </span>
              <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30">
                Actively seeking Summer & Fall 2025 Internships
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button
              variant="outline"
              size="lg"
              className="border-red-600/50 bg-red-900/20 text-red-300 hover:bg-red-800/30 hover:text-red-200 hover:border-red-500 px-8 py-4 text-lg font-semibold transition-all duration-300"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 flex justify-center items-center gap-8"
          >
            <div className="flex items-center gap-4 text-gray-400">
              <Mail className="w-5 h-5" />
              <a href="mailto:ali@alikayani.com" className="hover:text-white transition-colors">
                ali@alikayani.com
              </a>
            </div>
            <div className="text-gray-600">•</div>
            <div className="flex items-center gap-4 text-gray-400">
              <ExternalLink className="w-5 h-5" />
              <a href="https://alikayani.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                alikayani.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Geometric Accent Elements - Gotham Style */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-red-500/20 rounded-full animate-pulse" />
      <div className="absolute bottom-40 left-20 w-24 h-24 border border-green-500/20 rotate-45" />
      <div className="absolute top-1/2 right-10 w-16 h-16 bg-gradient-to-r from-red-500/10 to-green-500/10 rounded-lg rotate-12" />
    </div>
  );
}