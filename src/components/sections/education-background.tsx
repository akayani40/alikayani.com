"use client";
import React from "react";
import { motion } from "motion/react";
import { MapPin, Calendar, GraduationCap } from "lucide-react";

// Configuration for easy editing
interface Experience {
  title: string;
  organization: string;
  location: string;
  duration: string;
  description: string;
  achievements: string[];
  type: "education" | "experience";
}

const EDUCATION_CONFIG = {
  title: "Education & Experience",
  subtitle: "Academic foundation at UC Irvine combined with hands-on experience at NASA and tech companies.",
  university: {
    name: "University of California, Irvine",
    degree: "B.S. Informatics, Human-Computer Interaction Specialization",
    graduation: "Expected Graduation: December 2025"
  },
  experiences: [
    {
      title: "B.S. Informatics, HCI Specialization",
      organization: "University of California, Irvine",
      location: "Irvine, CA",
      duration: "2021 - Dec 2025",
      description: "Comprehensive program combining computer science fundamentals with human-computer interaction design principles.",
      achievements: [
        "Expected graduation: December 2025",
        "Specialization in Human-Computer Interaction",
        "Relevant coursework: Software Design, System Design, HCI, Project Management"
      ],
      type: "education" as const
    },
    {
      title: "Software Engineer Intern",
      organization: "ForOurLastNames",
      location: "Irvine, CA",
      duration: "Sep 2024 - Dec 2024",
      description: "Cross-functional collaboration on mobile app features with focus on accessibility and AI integration.",
      achievements: [
        "Led end-to-end feature testing and user feedback implementation",
        "Achieved 100% Section 508 compliance across mobile platforms",
        "Improved customer support efficiency by 40% through automation",
        "Integrated AI functionalities for enhanced user interaction"
      ],
      type: "experience" as const
    },
    {
      title: "Engineering Intern - CDH Subsystem Lead",
      organization: "NASA L'SPACE",
      location: "Remote",
      duration: "Jan 2024 - Apr 2024",
      description: "Led Command and Data Handling subsystem design for conceptual Mars rover mission.",
      achievements: [
        "Spearheaded CDH subsystem including telecommunications and software architecture",
        "Directed 8 cross-functional engineers in mission-critical design phases",
        "Delivered 219-page Preliminary Design Review to NASA staff",
        "Aligned with NASA project management standards and milestones"
      ],
      type: "experience" as const
    },
    {
      title: "Project Management Intern",
      organization: "All State Restoration",
      location: "Brooklyn, New York, United States",
      duration: "Jun 2023 - Sep 2023",
      description: "Supported day-to-day operations as a Project Management Intern by coordinating city permits, documentation, and team schedules to keep projects on track.",
      achievements: [
        "Coordinated city permits, documentation, and team schedules to keep projects on track",
        "Worked closely with on-site crews and gained hands-on experience managing workflow logistics",
        "Operated equipment safely and ensured a productive, safety-focused environment",
        "Balanced field responsibilities with behind-the-scenes coordination, developing strong organizational, communication, and problem-solving skills to help deliver timely and client-focused results"
      ],
      type: "experience" as const
    }
  ]
};

const ExperienceCard = ({ experience, index }: { experience: Experience; index: number }) => {
  const isEducation = experience.type === "education";

  return (
    <motion.div
      className="product-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {/* Header with improved mobile layout */}
      <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className={`w-3 h-3 rounded-full flex-shrink-0 mt-1.5 sm:mt-2 ${isEducation ? 'bg-primary' : 'bg-muted-foreground'}`} />
        <div className="flex-1 min-w-0">
          <h3 className="apple-body text-base sm:text-lg font-semibold text-foreground mb-2 break-words">
            {experience.title}
          </h3>
          <div className="apple-body font-medium text-foreground mb-2 text-sm sm:text-base break-words">
            {experience.organization}
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 flex-shrink-0" />
              <span className="break-words">{experience.location}</span>
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3 flex-shrink-0" />
              <span className="break-words">{experience.duration}</span>
            </span>
          </div>
        </div>
      </div>
      
      <p className="apple-body text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
        {experience.description}
      </p>
      
      {/* Achievements with better mobile spacing */}
      <div className="space-y-2 sm:space-y-3">
        {experience.achievements.map((achievement, achievementIndex) => (
          <div key={achievementIndex} className="flex items-start gap-3">
            <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0 mt-2" />
            <span className="apple-body text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {achievement}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default function EducationBackground() {
  return (
    <section id="education" className="section-padding bg-background">
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
            {EDUCATION_CONFIG.title}
          </h2>
          <p className="apple-body text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            {EDUCATION_CONFIG.subtitle}
          </p>
        </motion.div>

        {/* University Stats with improved mobile design */}
        <motion.div 
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="product-card text-center max-w-2xl mx-auto">
            <GraduationCap className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 text-primary" />
            <h3 className="apple-body text-xl sm:text-2xl font-semibold text-foreground mb-3 sm:mb-4 break-words">
              {EDUCATION_CONFIG.university.name}
            </h3>
            <div className="apple-body text-base sm:text-lg text-muted-foreground mb-2 leading-relaxed">
              {EDUCATION_CONFIG.university.degree}
            </div>
            <div className="apple-body text-sm sm:text-base text-primary font-medium">
              {EDUCATION_CONFIG.university.graduation}
            </div>
          </div>
        </motion.div>

        {/* Experience Timeline with improved mobile spacing */}
        <div className="space-y-4 sm:space-y-6">
          {EDUCATION_CONFIG.experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}