"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  Mail, 
  Github, 
  Linkedin, 
  MapPin, 
  Calendar, 
  Briefcase, 
  Send
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// Configuration for easy editing
const CONTACT_CONFIG = {
  title: "Let's Connect",
  subtitle: "I'm currently seeking Summer & Fall 2025 internship opportunities. Let's discuss how I can contribute to your team.",
  form: {
    title: "Send a Message",
    placeholders: {
      name: "Your name",
      email: "your.email@company.com",
      company: "Your company",
      message: "Tell me about the opportunity or how we can work together..."
    }
  },
  contactMethods: [
    {
      icon: Mail,
      title: "Email",
      subtitle: "ali@alikayani.com",
      href: "mailto:ali@alikayani.com"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      subtitle: "Professional network",
      href: "https://linkedin.com/in/ali-kayani"
    },
    {
      icon: Github,
      title: "GitHub",
      subtitle: "Code repositories",
      href: "https://github.com/akayani40"
    }
  ],
  currentStatus: [
    {
      icon: MapPin,
      title: "Location",
      value: "Irvine, CA"
    },
    {
      icon: Calendar,
      title: "Graduation",
      value: "December 2025"
    },
    {
      icon: Briefcase,
      title: "Availability",
      value: "Seeking 2025 internships",
      highlight: true
    }
  ]
};

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Reset form
    setFormData({ name: "", email: "", company: "", message: "" });
    setIsSubmitting(false);
    
    alert("Thank you for your message! I'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-12 sm:py-16 bg-secondary/30">
      <div className="max-width">
        {/* Header with improved mobile spacing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="apple-title text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4 sm:mb-6">
            {CONTACT_CONFIG.title}
          </h2>
          <p className="apple-body text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            {CONTACT_CONFIG.subtitle}
          </p>
        </motion.div>

        {/* Responsive layout - stacks on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 order-2 lg:order-1"
          >
            <div className="product-card">
              <h3 className="apple-body text-lg sm:text-xl font-semibold text-foreground mb-6">
                {CONTACT_CONFIG.form.title}
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* Name and Email - responsive grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="apple-body text-sm font-medium text-foreground">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="apple-body bg-background border-border focus:border-primary focus:ring-primary/20 text-sm sm:text-base"
                      placeholder={CONTACT_CONFIG.form.placeholders.name}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="apple-body text-sm font-medium text-foreground">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="apple-body bg-background border-border focus:border-primary focus:ring-primary/20 text-sm sm:text-base"
                      placeholder={CONTACT_CONFIG.form.placeholders.email}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company" className="apple-body text-sm font-medium text-foreground">
                    Company/Organization
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="apple-body bg-background border-border focus:border-primary focus:ring-primary/20 text-sm sm:text-base"
                    placeholder={CONTACT_CONFIG.form.placeholders.company}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="apple-body text-sm font-medium text-foreground">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="apple-body bg-background border-border focus:border-primary focus:ring-primary/20 resize-none text-sm sm:text-base"
                    placeholder={CONTACT_CONFIG.form.placeholders.message}
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 apple-body font-medium minimal-hover text-sm sm:text-base"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Send Message
                    </div>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6 order-1 lg:order-2"
          >
            {/* Contact Methods */}
            <div className="product-card">
              <h4 className="apple-body text-base sm:text-lg font-semibold text-foreground mb-4 sm:mb-6">
                Get in Touch
              </h4>
              
              <div className="space-y-3 sm:space-y-4">
                {CONTACT_CONFIG.contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <a
                      key={index}
                      href={method.href}
                      target={method.href.startsWith('http') ? "_blank" : undefined}
                      rel={method.href.startsWith('http') ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-background border border-border minimal-hover group"
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                      <div className="min-w-0 flex-1">
                        <div className="apple-body font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base break-words">
                          {method.title}
                        </div>
                        <div className="apple-body text-xs sm:text-sm text-muted-foreground break-words">
                          {method.subtitle}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Current Status */}
            <div className="product-card">
              <h4 className="apple-body text-base sm:text-lg font-semibold text-foreground mb-4 sm:mb-6">
                Current Status
              </h4>
              <div className="space-y-3 sm:space-y-4">
                {CONTACT_CONFIG.currentStatus.map((status, index) => {
                  const Icon = status.icon;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground flex-shrink-0" />
                      <div className="min-w-0 flex-1">
                        <div className="apple-body text-xs sm:text-sm font-medium text-foreground break-words">
                          {status.title}
                        </div>
                        <div className={`apple-body text-xs break-words ${
                          status.highlight 
                            ? 'text-primary font-medium' 
                            : 'text-muted-foreground'
                        }`}>
                          {status.value}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}