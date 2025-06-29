"use client"

import { motion } from "motion/react";
import { useState } from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { BackgroundLines } from "@/components/ui/background-lines";
import { Code, Database, Cpu, Globe, Brain, TrendingUp, Cloud, GitBranch, MonitorSpeaker, Smartphone } from "lucide-react";

interface SkillCategory {
  title: string;
  skills: Array<{
    name: string;
    level: number;
    description: string;
    projects: string[];
  }>;
  icon: React.ReactNode;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: <Code className="w-6 h-6 text-red-400" />,
    skills: [
      {
        name: "JavaScript",
        level: 95,
        description: "Primary language for full-stack development",
        projects: ["ParsePro.dev", "Mobile App Features"]
      },
      {
        name: "Python",
        level: 90,
        description: "AI/ML development and automation",
        projects: ["AI Resume Analyzer", "Automation Prototypes"]
      },
      {
        name: "Java",
        level: 85,
        description: "Enterprise applications & Android development",
        projects: ["Mobile App Development", "System Architecture"]
      },
      {
        name: "C++",
        level: 80,
        description: "Systems programming & performance optimization",
        projects: ["Mars Rover CDH System", "Performance Tools"]
      }
    ]
  },
  {
    title: "Frameworks & Libraries",
    icon: <Globe className="w-6 h-6 text-green-400" />,
    skills: [
      {
        name: "React",
        level: 92,
        description: "Modern UI development with TypeScript",
        projects: ["ParsePro.dev Interface", "Mobile App Components"]
      },
      {
        name: "Node.js",
        level: 90,
        description: "Backend APIs & microservices",
        projects: ["Resume Parser API", "RESTful Endpoints"]
      },
      {
        name: "Angular",
        level: 85,
        description: "Enterprise web applications",
        projects: ["Customer Service Integration", "Mobile App Framework"]
      },
      {
        name: "Express",
        level: 88,
        description: "API development and middleware",
        projects: ["Production-level Resume API", "Backend Services"]
      }
    ]
  },
  {
    title: "Tools & Technologies",
    icon: <Database className="w-6 h-6 text-red-400" />,
    skills: [
      {
        name: "Git",
        level: 95,
        description: "Version control & team collaboration",
        projects: ["Cross-functional team projects", "Open source contributions"]
      },
      {
        name: "Docker",
        level: 88,
        description: "Containerization & deployment",
        projects: ["ParsePro.dev deployment", "Microservices architecture"]
      },
      {
        name: "AWS EC2",
        level: 85,
        description: "Cloud infrastructure & deployment",
        projects: ["Production deployments", "Scalable hosting solutions"]
      },
      {
        name: "Figma",
        level: 90,
        description: "UI/UX design and prototyping",
        projects: ["Mobile app wireframes", "User interface design"]
      }
    ]
  },
  {
    title: "Specializations",
    icon: <Brain className="w-6 h-6 text-green-400" />,
    skills: [
      {
        name: "AI Integration",
        level: 90,
        description: "OpenAI API & intelligent features",
        projects: ["AI Resume Analyzer", "Mobile App AI Features"]
      },
      {
        name: "Full-Stack Development",
        level: 92,
        description: "End-to-end application development",
        projects: ["ParsePro.dev", "Customer Service Tools"]
      },
      {
        name: "Mobile Development",
        level: 88,
        description: "Cross-platform mobile applications",
        projects: ["ForOurLastNames mobile app", "Ionic framework"]
      },
      {
        name: "Testing & QA",
        level: 85,
        description: "Automated testing & quality assurance",
        projects: ["Section 508 compliance", "End-to-end testing"]
      }
    ]
  }
];

const SkillCard = ({ category, index }: { category: SkillCategory; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative group"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => {
        setIsExpanded(false);
        setHoveredSkill(null);
      }}
    >
      <div className="relative overflow-hidden rounded-xl bg-black/70 backdrop-blur-sm border border-red-900/30 p-6 transition-all duration-300 hover:bg-black/80 hover:border-red-500/50">
        <GlowingEffect
          className="absolute inset-0"
          disabled={false}
          variant="default"
          glow={isExpanded}
          proximity={100}
        />
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            {category.icon}
            <h3 className="text-xl font-bold text-gray-100">{category.title}</h3>
          </div>
          
          <div className="space-y-3">
            {category.skills.map((skill) => (
              <div
                key={skill.name}
                className="relative"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-200">{skill.name}</span>
                  <span className="text-xs text-gray-400">{skill.level}%</span>
                </div>
                
                <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-red-500 to-green-400 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.8 }}
                  />
                </div>
                
                {/* Expanded Info */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: hoveredSkill === skill.name ? 1 : 0,
                    height: hoveredSkill === skill.name ? "auto" : 0
                  }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden mt-2"
                >
                  <div className="bg-black/50 rounded-lg p-3 border border-red-600/30">
                    <p className="text-xs text-gray-300 mb-2">{skill.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {skill.projects.map((project) => (
                        <span
                          key={project}
                          className="text-xs bg-red-500/20 text-red-300 px-2 py-1 rounded-full"
                        >
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function AboutSkillsSection() {
  return (
    <section id="about" className="relative min-h-screen bg-black py-20 overflow-hidden">
      <BackgroundLines className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/90" />
      </BackgroundLines>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - About Me */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-5xl font-bold text-gray-100 mb-8 font-inter">
                About Me
              </h2>
              
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  As an Informatics student at UC Irvine specializing in Human-Computer Interaction, 
                  I'm passionate about creating technology that enhances human experiences. My journey 
                  spans from developing AI-powered applications to leading cross-functional engineering 
                  teams on projects like NASA's conceptual Mars rover.
                </p>
                
                <p>
                  Through internships at ForOurLastNames and NASA L'SPACE, I've gained hands-on experience 
                  in mobile app development, AI integration, and systems architecture. I thrive on solving 
                  complex problems, whether it's improving customer support efficiency by 40% through 
                  automation prototypes or ensuring 100% Section 508 compliance across mobile platforms.
                </p>
                
                <p>
                  Currently seeking Summer & Fall 2025 internships, I'm excited about opportunities in 
                  software engineering, AI, cloud computing, QA, and project management. I believe in 
                  building scalable, accessible solutions that make a meaningful impact on users and 
                  organizations alike.
                </p>
              </div>
            </div>
            
            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="pt-8"
            >
              <p className="text-gray-400 text-sm mb-4">
                Ready to collaborate and build something amazing?
              </p>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-green-600 hover:from-red-700 hover:to-green-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-red-500/25"
              >
                <TrendingUp className="w-4 h-4" />
                Explore My Projects
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Technical Arsenal */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-5xl font-bold text-gray-100 mb-8 font-inter">
                Technical Arsenal
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skillCategories.map((category, index) => (
                  <SkillCard key={category.title} category={category} index={index} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Geometric Accent Patterns - Gotham Style */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-red-500/20 rounded-full animate-pulse" />
      <div className="absolute bottom-40 left-20 w-24 h-24 border border-green-500/20 rotate-45" />
      <div className="absolute top-1/2 right-10 w-16 h-16 bg-gradient-to-r from-red-500/10 to-green-500/10 rounded-lg rotate-12" />
    </section>
  );
}