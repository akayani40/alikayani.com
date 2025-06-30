"use client";

import React from "react";
import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

// Configuration for easy editing
interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  status: "Live" | "Completed";
  links: {
    demo?: string;
    github?: string;
  };
  period: string;
  impact: string;
}

const PROJECTS_CONFIG = {
  title: "Featured Projects",
  subtitle: "A selection of recent projects showcasing full-stack development, AI integration, and engineering leadership.",
  ctaTitle: "View More Work",
  ctaDescription: "Explore additional projects and code samples on GitHub.",
  githubUrl: "https://github.com/akayani40",
  projects: [
    {
      id: "parsepro",
      title: "ParsePro.dev",
      description: "AI-powered resume parsing platform that analyzes resumes and provides recruiter-style feedback using OpenAI's GPT. Built as a solo project with Node.js, validated on 50+ real-world resumes.",
      tech: ["Node.js", "OpenAI GPT", "JavaScript", "RESTful API"],
      status: "Live" as const,
      links: {
        demo: "https://parsepro.dev",
        github: "https://github.com/akayani40/parsepro"
      },
      period: "May 2024 - Present",
      impact: "Active platform serving users with AI-powered resume analysis"
    },
    {
      id: "nasa-mars",
      title: "NASA Mars Rover CDH",
      description: "Spearheaded Command and Data Handling subsystem design for conceptual Mars rover mission. Led 8 cross-functional engineers and delivered comprehensive technical specification to NASA staff.",
      tech: ["Systems Architecture", "NASA Standards", "Technical Documentation", "Team Leadership"],
      status: "Completed" as const,
      links: {},
      period: "Jan 2024 - Apr 2024",
      impact: "219-page design review presented to NASA staff as foundational spec"
    }
  ]
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      className="product-card group h-full"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      {/* Header with improved mobile layout */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 sm:mb-6 gap-3">
        <div className="flex-1 min-w-0">
          <h3 className="apple-body text-lg sm:text-xl font-semibold text-foreground mb-2 break-words">
            {project.title}
          </h3>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs sm:text-sm apple-body font-medium w-fit">
              {project.status}
            </span>
            <span className="apple-body text-xs sm:text-sm text-muted-foreground">
              {project.period}
            </span>
          </div>
        </div>
        
        {/* Action buttons - always visible on mobile for better UX */}
        <div className="flex gap-2 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200">
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary minimal-hover rounded-lg border border-border sm:border-transparent hover:border-border"
              aria-label={`View ${project.title} demo`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary minimal-hover rounded-lg border border-border sm:border-transparent hover:border-border"
              aria-label={`View ${project.title} source code`}
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="apple-body text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
        {project.description}
      </p>

      {/* Impact */}
      <div className="mb-4 sm:mb-6">
        <div className="apple-body text-xs sm:text-sm font-medium text-foreground mb-2">Impact</div>
        <div className="apple-body text-xs sm:text-sm text-muted-foreground leading-relaxed">
          {project.impact}
        </div>
      </div>

      {/* Tech Stack with improved mobile wrapping */}
      <div>
        <div className="apple-body text-xs sm:text-sm font-medium text-foreground mb-3">Technologies</div>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-2 sm:px-3 py-1 bg-secondary text-foreground rounded-full text-xs apple-body"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function ProjectsShowcase() {
  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="max-width">
        {/* Header with improved mobile spacing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="apple-title text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4 sm:mb-6">
            {PROJECTS_CONFIG.title}
          </h2>
          <p className="apple-body text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            {PROJECTS_CONFIG.subtitle}
          </p>
        </motion.div>

        {/* Projects Grid with improved mobile layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {PROJECTS_CONFIG.projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action with better mobile presentation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="product-card max-w-lg mx-auto">
            <h3 className="apple-body text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">
              {PROJECTS_CONFIG.ctaTitle}
            </h3>
            <p className="apple-body text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
              {PROJECTS_CONFIG.ctaDescription}
            </p>
            <a
              href={PROJECTS_CONFIG.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-primary text-primary-foreground rounded-lg apple-body font-medium minimal-hover text-sm sm:text-base"
            >
              <Github className="w-4 h-4" />
              GitHub Profile
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}