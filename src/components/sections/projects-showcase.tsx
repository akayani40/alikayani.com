"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ExternalLink, Github, Code2, Users, Rocket, HardHat, Calendar, Target, FileText, GitBranch } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "ParsePro.dev - AI Resume Analyzer",
    description: "A comprehensive resume parsing platform built as a solo Software Engineer using Node.js and OpenAI's GPT, validated on 50+ resumes emulating real-world cases to ensure response accuracy and robustness.",
    technologies: ["Node.js", "OpenAI GPT", "JavaScript", "RESTful API", "PDF Processing"],
    category: "AI/Full-Stack",
    icon: Code2,
    liveDemo: "https://parsepro.dev",
    sourceCode: "https://github.com/akayani40/parsepro",
    features: [
      "Drag-and-drop PDF upload functionality",
      "Dynamic form parser with intelligent field extraction",
      "RESTful endpoint simulating production-level resume API integration",
      "Recruiter-style feedback based on 20+ user interviews",
      "Support for both tech and non-tech resume formats"
    ],
    challenges: "Designing a robust parsing system that could handle diverse resume formats while maintaining high accuracy. Integrated extensive user feedback from both technical and non-technical users to create a comprehensive feature roadmap.",
    metrics: {
      accuracy: "95%+",
      resumes: "50+",
      users: "Tech & Non-tech"
    },
    period: "May 2025 - Present",
    status: "Live Production",
    codeStats: {
      lines: "2,500+",
      commits: "85+",
      branches: "12"
    }
  },
  {
    id: 2,
    title: "ForOurLastNames Mobile App",
    description: "Cross-functional team collaboration to design and develop mobile app features, focusing on seamless integration of customer service tools with AI functionalities to enhance user interaction.",
    technologies: ["Mobile Development", "AI Integration", "Customer Service APIs", "Section 508 Compliance"],
    category: "Mobile/AI",
    icon: Users,
    liveDemo: "#",
    sourceCode: "#",
    features: [
      "Seamless customer service tool integration",
      "AI functionalities for enhanced user interaction",
      "100% Section 508 compliance across mobile platforms",
      "End-to-end feature testing with user feedback implementation",
      "40% efficiency improvement in customer support flows"
    ],
    challenges: "Led comprehensive testing and refinement processes based on user feedback while ensuring full accessibility compliance. Developed automation prototypes that structured backend logic and system behavior before engineering implementation.",
    metrics: {
      efficiency: "40% improvement",
      compliance: "100% Section 508",
      testing: "End-to-end"
    },
    period: "September 2024 - December 2024",
    status: "Software Engineer Intern",
    codeStats: {
      features: "15+",
      tests: "200+",
      platforms: "iOS/Android"
    }
  },
  {
    id: 3,
    title: "NASA Mars Rover CDH System",
    description: "Spearheaded the Command and Data Handling (CDH) subsystem of a conceptual Mars rover as Engineering Intern and CDH Subsystem Lead, including telecommunications, data computing, and software architecture subassemblies.",
    technologies: ["Systems Architecture", "Software Design", "Project Management", "NASA Standards"],
    category: "Systems/Leadership",
    icon: Rocket,
    liveDemo: "#",
    sourceCode: "#",
    features: [
      "Complete CDH subsystem design for Mars rover",
      "Software architecture workflows and procurement plans",
      "219-page Preliminary Design Review document",
      "Cross-functional team leadership of 8 engineers",
      "NASA project management standards compliance"
    ],
    challenges: "Directing a diverse team of 8 cross-functional engineers to deliver a comprehensive design review that met NASA's rigorous standards. Created foundational specifications that would guide actual Mars rover architecture development.",
    metrics: {
      team: "8 engineers",
      document: "219 pages",
      standards: "NASA compliant"
    },
    period: "January 2024 - April 2024",
    status: "NASA L'SPACE Program",
    codeStats: {
      docs: "219 pages",
      systems: "5 subsystems",
      timeline: "16 weeks"
    }
  },
  {
    id: 4,
    title: "Project Management at All State Restoration",
    description: "Supported day-to-day operations as Project Management Intern by coordinating city permits, documentation, and team schedules. Gained hands-on experience managing workflow logistics, operating equipment safely, and ensuring productive, safety-focused environment.",
    technologies: ["Project Management", "Team Coordination", "Safety Management", "Documentation", "Workflow Optimization"],
    category: "Construction/Management",
    icon: HardHat,
    liveDemo: "#",
    sourceCode: "#",
    features: [
      "Coordinated city permits and regulatory documentation",
      "Managed team schedules and workflow logistics",
      "Operated construction equipment with safety protocols",
      "Balanced field responsibilities with backend coordination",
      "Delivered timely, client-focused project results"
    ],
    challenges: "Successfully balanced hands-on field work with behind-the-scenes coordination while maintaining strict safety standards. Developed strong organizational and communication skills to ensure projects stayed on track and met client expectations in a fast-paced construction environment.",
    metrics: {
      location: "Brooklyn, NY",
      duration: "4 months",
      focus: "Safety & Efficiency"
    },
    period: "June 2023 - September 2023",
    status: "All State Restoration Intern",
    codeStats: {
      permits: "Multiple",
      teams: "On-site crews",
      duration: "4 months"
    }
  }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const IconComponent = project.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="mb-20"
    >
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card hover:shadow-2xl hover:shadow-red-500/[0.1] dark:bg-black/80 dark:border-red-500/[0.3] border-black/[0.1] w-full h-auto rounded-xl p-6 border backdrop-blur-sm">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white mb-2"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800">
                <IconComponent className="w-5 h-5 text-red-600 dark:text-red-400" />
              </div>
              <div>
                <div className="text-lg">{project.title}</div>
                <div className="text-sm text-neutral-500 dark:text-neutral-400 font-normal">
                  {project.period} • {project.status}
                </div>
              </div>
            </div>
          </CardItem>
          
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 mb-4"
          >
            {project.description}
          </CardItem>
          
          {/* Technical Overview */}
          <CardItem translateZ="100" className="w-full mt-4 mb-6">
            <div className="w-full bg-gradient-to-br from-black via-red-950/30 to-green-950/20 rounded-xl p-6 border border-red-900/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/40" />
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-2 text-red-300 font-semibold text-sm mb-3">
                  <FileText className="w-4 h-4" />
                  Technical Overview
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  {Object.entries(project.codeStats).map(([key, value], i) => (
                    <div key={i} className="bg-black/30 rounded-lg p-3 border border-green-900/20">
                      <div className="text-green-400 font-bold text-lg">{value}</div>
                      <div className="text-gray-400 text-xs capitalize">{key}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center gap-2 text-gray-400 text-xs mt-3">
                  <GitBranch className="w-3 h-3" />
                  <span>Built with modern development practices</span>
                </div>
              </div>
            </div>
          </CardItem>
          
          <CardItem translateZ="80" className="mb-6">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-red-500/10 to-green-500/10 text-red-300 dark:text-red-400 rounded-full border border-red-200 dark:border-red-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </CardItem>
          
          <CardItem
            translateZ="60"
            className="flex justify-between items-center"
          >
            {/* Conditional buttons based on project */}
            {project.title.includes("ParsePro") && (
              <div className="flex gap-3">
                <a
                  href="https://parsepro.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-colors flex items-center gap-2"
                >
                  <ExternalLink className="w-3 h-3" />
                  Live Site
                </a>
                <a
                  href="https://github.com/akayani40/parsepro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl border border-green-600 text-green-400 text-xs hover:bg-green-600/10 transition-colors flex items-center gap-2"
                >
                  <Github className="w-3 h-3" />
                  Source
                </a>
              </div>
            )}
            
            {project.title.includes("ForOurLastNames") && (
              <div className="flex gap-3">
                <a
                  href="https://github.com/akayani40"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl border border-green-600 text-green-400 text-xs hover:bg-green-600/10 transition-colors flex items-center gap-2"
                >
                  <Github className="w-3 h-3" />
                  GitHub
                </a>
              </div>
            )}
            
            {/* No GitHub buttons for NASA Mars Rover and All State Restoration */}
            {(project.title.includes("NASA Mars Rover") || project.title.includes("All State Restoration")) && (
              <div className="flex gap-3">
                <span className="text-xs text-gray-500 dark:text-gray-400 italic">
                  Professional/Academic Project
                </span>
              </div>
            )}
          </CardItem>
        </CardBody>
      </CardContainer>
    </motion.div>
  );
};

export default function ProjectsShowcase() {
  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-black">
      <BackgroundBeams className="absolute inset-0 z-0" />
      
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Featured Projects & Experience
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              From AI-powered applications to NASA space systems and construction project management, 
              showcasing hands-on experience in software engineering, mobile development, systems 
              architecture, and cross-industry leadership. Each project demonstrates technical expertise and real-world impact.
            </p>
          </motion.div>

          <TracingBeam className="px-6">
            <div className="space-y-8">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </TracingBeam>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-16"
          >
            <div className="inline-flex flex-col items-center gap-4 px-8 py-6 bg-gradient-to-r from-red-500/10 to-green-500/10 rounded-2xl border border-red-800/30">
              <span className="text-gray-300 text-lg">
                Explore more projects and contributions
              </span>
              <a
                href="https://github.com/akayani40"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors font-medium"
              >
                <Github className="w-4 h-4" />
                View GitHub Profile
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}