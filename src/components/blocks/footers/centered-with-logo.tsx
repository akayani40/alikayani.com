"use client";

import React from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

// Configuration for easy editing
const FOOTER_CONFIG = {
  name: "Ali Kayani",
  tagline: "Software Engineer & AI Enthusiast",
  navigation: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" }
  ],
  socialLinks: [
    {
      icon: Mail,
      href: "mailto:ali@alikayani.com",
      label: "Email Ali Kayani"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/ali-kayani",
      label: "LinkedIn Profile"
    },
    {
      icon: Github,
      href: "https://github.com/akayani40",
      label: "GitHub Profile"
    },
    {
      icon: ExternalLink,
      href: "https://alikayani.com",
      label: "Portfolio Website"
    }
  ],
  availability: {
    status: "Available for Summer & Fall 2025 Internships",
    active: true
  },
  copyright: {
    year: "2024",
    message: "Built with passion for code and innovation.",
    subtitle: "UC Irvine • B.S. Informatics (HCI) • Expected Dec 2025"
  }
};

export default function CenteredWithLogo() {
  return (
    <footer className="section-padding bg-secondary/30 border-t border-border">
      <div className="max-width">
        {/* Main Footer Content */}
        <div className="text-center space-y-6 sm:space-y-8">
          {/* Name and Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="apple-body text-xl sm:text-2xl font-semibold text-foreground mb-2">
              {FOOTER_CONFIG.name}
            </h2>
            <p className="apple-body text-sm sm:text-base text-muted-foreground">
              {FOOTER_CONFIG.tagline}
            </p>
          </motion.div>

          {/* Navigation Links - responsive flex wrap */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8"
          >
            {FOOTER_CONFIG.navigation.map((item, index) => (
              <a 
                key={index}
                href={item.href} 
                className="apple-body text-sm sm:text-base text-muted-foreground hover:text-foreground minimal-hover px-2 py-1"
              >
                {item.label}
              </a>
            ))}
          </motion.nav>

          {/* Social Links - responsive grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 sm:gap-4"
          >
            {FOOTER_CONFIG.socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? "_blank" : undefined}
                  rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="p-2 sm:p-3 product-card text-muted-foreground hover:text-primary minimal-hover"
                  aria-label={social.label}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Availability Status - responsive display */}
          {FOOTER_CONFIG.availability.active && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 product-card max-w-full"
            >
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse flex-shrink-0" />
              <span className="apple-body text-xs sm:text-sm text-primary font-medium text-center break-words">
                {FOOTER_CONFIG.availability.status}
              </span>
            </motion.div>
          )}

          {/* Copyright - responsive text sizing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="pt-6 sm:pt-8 border-t border-border space-y-2"
          >
            <p className="apple-body text-muted-foreground text-xs sm:text-sm text-center">
              © {FOOTER_CONFIG.copyright.year} {FOOTER_CONFIG.name}. {FOOTER_CONFIG.copyright.message}
            </p>
            <p className="apple-body text-muted-foreground text-xs text-center break-words">
              {FOOTER_CONFIG.copyright.subtitle}
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}