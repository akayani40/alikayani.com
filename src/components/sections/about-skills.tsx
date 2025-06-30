"use client";
import React from "react";
import { motion } from "motion/react";

// Configuration object for easy editing
const ABOUT_CONFIG = {
  title: "About",
  paragraphs: [
    "I'm an Informatics student at UC Irvine with a passion for creating technology that genuinely improves people's lives. My focus is on full-stack development and AI integration.",
    "Currently, I'm working on projects that span from AI-powered platforms like ParsePro.dev to leading engineering teams at NASA L'SPACE. I believe in building solutions that are both technically excellent and human-centered.",
    "When I'm not coding, you'll find me exploring the world, eating new foods and doing my best to be better everyday!"
  ],
  technicalSkills: {
    languages: ["JavaScript", "Python", "TypeScript", "Java", "HTML/CSS", "SQL"],
    frameworks: ["React", "Node.js", "Next.js", "Express", "TensorFlow", "PyTorch"],
    tools: ["Git", "Docker", "AWS", "MongoDB", "PostgreSQL", "Figma"],
    specializations: ["Full-Stack Development", "AI Integration", "Human-Computer Interaction", "Project Management"]
  },
  experiences: [
    {
      company: "ForOurLastNames",
      role: "Software Engineer Intern",
      description: "Led accessibility compliance across mobile platforms, improving efficiency by 40%"
    },
    {
      company: "NASA L'SPACE",
      role: "Engineering Intern",
      description: "Led 8-person team for Mars rover CDH subsystem design, delivering 219-page technical specification"
    }
  ]
};

// Animated Progress Bar Component
const AnimatedProgressBar = ({ skill, index }: { skill: { name: string; level: number }; index: number }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(skill.level);
    }, index * 100 + 500); // Staggered animation

    return () => clearTimeout(timer);
  }, [skill.level, index]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="apple-body text-sm font-medium text-foreground">
          {skill.name}
        </span>
        <span className="apple-body text-xs text-muted-foreground">
          {skill.level}%
        </span>
      </div>
      <Progress value={progress} className="h-2" />
    </motion.div>
  );
};

export default function AboutSkills() {
  return (
    <section id="about" className="section-padding bg-background">
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
            {ABOUT_CONFIG.title}
          </h2>
        </motion.div>

        {/* Responsive Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start lg:items-center">
          {/* About Text - Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="space-y-4 sm:space-y-6 apple-body text-base sm:text-lg text-muted-foreground leading-relaxed">
              {ABOUT_CONFIG.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          {/* Skills - Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="product-card">
              <h3 className="apple-body text-lg sm:text-xl font-semibold text-foreground mb-6 sm:mb-8">
                Technical Skills
              </h3>
              
              <div className="space-y-6">
                {/* Languages */}
                <div>
                  <h4 className="apple-body font-medium text-foreground mb-3 text-sm sm:text-base">
                    Languages
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {ABOUT_CONFIG.technicalSkills.languages.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-secondary/10 text-foreground rounded-md text-xs sm:text-sm apple-body"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Frameworks */}
                <div>
                  <h4 className="apple-body font-medium text-foreground mb-3 text-sm sm:text-base">
                    Frameworks & Libraries
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {ABOUT_CONFIG.technicalSkills.frameworks.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-secondary/10 text-foreground rounded-md text-xs sm:text-sm apple-body"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div>
                  <h4 className="apple-body font-medium text-foreground mb-3 text-sm sm:text-base">
                    Tools & Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {ABOUT_CONFIG.technicalSkills.tools.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-secondary/10 text-foreground rounded-md text-xs sm:text-sm apple-body"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Specializations */}
                <div className="pt-4 border-t border-border">
                  <h4 className="apple-body font-medium text-foreground mb-3 text-sm sm:text-base">
                    Specializations
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {ABOUT_CONFIG.technicalSkills.specializations.map((spec, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-md text-xs sm:text-sm apple-body font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Experience Highlights with improved mobile layout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 lg:mt-24"
        >
          <h3 className="apple-title text-2xl sm:text-3xl text-foreground text-center mb-8 sm:mb-12">
            Experience Highlights
          </h3>
          
          {/* Responsive grid with better mobile spacing */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {ABOUT_CONFIG.experiences.map((exp, index) => (
              <motion.div 
                key={index} 
                className="product-card text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-primary apple-body font-semibold text-base sm:text-lg mb-2">
                  {exp.company}
                </div>
                <div className="apple-body text-foreground font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                  {exp.role}
                </div>
                <div className="apple-body text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {exp.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}