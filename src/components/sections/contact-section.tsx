"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { SparklesCore } from "@/components/ui/sparkles";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Linkedin, 
  Github, 
  ExternalLink, 
  Send, 
  MapPin, 
  Calendar,
  Target,
  Briefcase
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", company: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="relative min-h-screen bg-slate-950 py-20 overflow-hidden">
      <BackgroundBeamsWithCollision className="absolute inset-0">
        <div className="absolute inset-0 bg-slate-950/80" />
      </BackgroundBeamsWithCollision>
      
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="contact-sparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={50}
          className="w-full h-full opacity-30"
          particleColor="#ffffff"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-white mb-6"
          >
            Let's Build Something Amazing Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            I'm actively seeking Summer & Fall 2025 internship opportunities in software engineering, 
            AI, cloud computing, QA, and project management. Ready to contribute to innovative projects 
            and grow with forward-thinking teams.
          </motion.p>
        </div>

        {/* Availability Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-2xl p-6 border border-green-500/30">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              <Target className="w-5 h-5 text-green-400" />
            </div>
            <div className="text-left">
              <div className="text-lg font-semibold text-green-300 mb-1">
                Available for Internships
              </div>
              <div className="text-sm text-slate-400">
                Summer & Fall 2025 • Software Engineering, AI, Cloud, QA, PM
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Send me a message
              </h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 text-center"
                >
                  <div className="text-green-400 text-lg font-semibold mb-2">
                    Thank you for reaching out!
                  </div>
                  <div className="text-slate-300 text-sm">
                    I'll get back to you within 24 hours.
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-slate-300">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-400 focus:border-indigo-500 focus:ring-indigo-500/20"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-300">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-400 focus:border-indigo-500 focus:ring-indigo-500/20"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-slate-300">
                      Company/Organization
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-400 focus:border-indigo-500 focus:ring-indigo-500/20"
                      placeholder="Your company or organization"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-slate-300">
                      Message *
                    </Label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-3 py-2 bg-slate-800/50 border border-slate-700 rounded-md text-white placeholder:text-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20 resize-none transition-colors"
                      placeholder="Tell me about the opportunity, project, or how we can collaborate..."
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-indigo-500/25 disabled:opacity-50"
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
              )}
            </div>
          </motion.div>

          {/* Right Column - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's connect
              </h3>
              
              <div className="space-y-6">
                {/* Email */}
                <motion.a
                  href="mailto:ali@alikayani.com"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-4 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl transition-all duration-300 hover:bg-slate-800/50 hover:border-indigo-500/50 group"
                >
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-medium group-hover:text-indigo-300 transition-colors">
                      Email
                    </div>
                    <div className="text-slate-400 text-sm">
                      ali@alikayani.com
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition-colors" />
                </motion.a>

                {/* LinkedIn */}
                <motion.a
                  href="https://linkedin.com/in/ali-kayani"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-4 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl transition-all duration-300 hover:bg-slate-800/50 hover:border-cyan-500/50 group"
                >
                  <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-medium group-hover:text-cyan-300 transition-colors">
                      LinkedIn
                    </div>
                    <div className="text-slate-400 text-sm">
                      Professional profile & network
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </motion.a>

                {/* GitHub */}
                <motion.a
                  href="https://github.com/akayani40"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-4 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl transition-all duration-300 hover:bg-slate-800/50 hover:border-purple-500/50 group"
                >
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                    <Github className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-medium group-hover:text-purple-300 transition-colors">
                      GitHub
                    </div>
                    <div className="text-slate-400 text-sm">
                      Code repositories & projects
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-purple-400 transition-colors" />
                </motion.a>

                {/* Portfolio */}
                <motion.a
                  href="https://alikayani.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-4 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl transition-all duration-300 hover:bg-slate-800/50 hover:border-green-500/50 group"
                >
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                    <ExternalLink className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-medium group-hover:text-green-300 transition-colors">
                      Portfolio Website
                    </div>
                    <div className="text-slate-400 text-sm">
                      alikayani.com
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-green-400 transition-colors" />
                </motion.a>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-slate-800/20 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4">
                Current Status
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  <span className="text-slate-300 text-sm">
                    Irvine, CA • Open to relocation
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  <span className="text-slate-300 text-sm">
                    Graduating December 2025
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Briefcase className="w-4 h-4 text-slate-400" />
                  <span className="text-slate-300 text-sm">
                    Seeking 2025 Summer & Fall internships
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}