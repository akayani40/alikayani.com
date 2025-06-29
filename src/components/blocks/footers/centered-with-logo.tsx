"use client";

import React from "react";
import { motion } from "motion/react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function CenteredWithLogo() {
  return (
    <footer className="relative bg-slate-950 py-16 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <BackgroundGradient className="opacity-20" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-12" />
        
        <div className="text-center space-y-8">
          {/* Name and Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-white mb-2">
              Ali Kayani
            </h2>
            <p className="text-slate-400 text-lg">
              Software Engineer & AI Enthusiast
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8"
          >
            <a 
              href="#about" 
              className="text-slate-300 hover:text-white transition-colors duration-300 font-medium"
            >
              About
            </a>
            <a 
              href="#projects" 
              className="text-slate-300 hover:text-white transition-colors duration-300 font-medium"
            >
              Projects
            </a>
            <a 
              href="#education" 
              className="text-slate-300 hover:text-white transition-colors duration-300 font-medium"
            >
              Education
            </a>
            <a 
              href="#contact" 
              className="text-slate-300 hover:text-white transition-colors duration-300 font-medium"
            >
              Contact
            </a>
          </motion.nav>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center gap-6"
          >
            <motion.a
              href="mailto:ali@alikayani.com"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full text-slate-400 hover:text-white hover:border-indigo-500/50 transition-all duration-300"
              aria-label="Email Ali Kayani"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
            
            <motion.a
              href="https://linkedin.com/in/ali-kayani"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full text-slate-400 hover:text-white hover:border-cyan-500/50 transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            
            <motion.a
              href="https://github.com/akayani40"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full text-slate-400 hover:text-white hover:border-purple-500/50 transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            
            <motion.a
              href="https://alikayani.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full text-slate-400 hover:text-white hover:border-green-500/50 transition-all duration-300"
              aria-label="Portfolio Website"
            >
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* Availability Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-full px-6 py-3 border border-green-500/20"
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-green-300 font-medium">
              Available for Summer & Fall 2025 Internships
            </span>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-slate-800"
          >
            <p className="text-slate-500 text-sm">
              © 2024 Ali Kayani. Built with passion for code and innovation.
            </p>
            <p className="text-slate-600 text-xs mt-2">
              UC Irvine • B.S. Informatics (HCI) • Expected Dec 2025
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Subtle Background Elements */}
      <div className="absolute bottom-10 left-10 w-20 h-20 border border-indigo-500/10 rounded-full" />
      <div className="absolute top-10 right-10 w-16 h-16 border border-cyan-500/10 rotate-45" />
    </footer>
  );
}