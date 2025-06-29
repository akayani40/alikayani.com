"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { GraduationCap, Award, BookOpen, TrendingUp, Calendar, MapPin, Target, HardHat } from "lucide-react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

interface CourseCard {
  title: string;
  description: string;
  grade: string;
  projects: string[];
  semester: string;
}

interface AcademicProject {
  title: string;
  description: string;
  skills: string[];
  type: string;
}

const EducationBackground = () => {
  const [hoveredCourse, setHoveredCourse] = useState<number | null>(null);

  const timelineData: TimelineEntry[] = [
    {
      title: "2025",
      content: (
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
              <Target className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                Final Year - Graduation & Career Launch
              </h4>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Expected graduation in December 2025 with B.S. in Informatics, specialization in Human-Computer Interaction. 
                Actively seeking Summer & Fall 2025 internships to launch career in software engineering and AI.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm">
                  Expected Dec 2025
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                  Seeking Internships
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                Professional Experience & Advanced Coursework
              </h4>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Gained hands-on experience as Software Engineer Intern at ForOurLastNames, focusing on mobile app development 
                and AI integration. Simultaneously pursuing advanced coursework in HCI and software systems.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Software Engineer Intern - ForOurLastNames
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    NASA L'SPACE Engineering Intern
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center">
              <HardHat className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                Construction Project Management & Core Development
              </h4>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Gained valuable project management experience as an intern at All State Restoration in Brooklyn, 
                coordinating permits, documentation, and team schedules while advancing through core Informatics curriculum.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <HardHat className="w-4 h-4 text-orange-500" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Project Management Intern - All State Restoration
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-blue-500" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Advanced Python & Software Design Coursework
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const courseCards: CourseCard[] = [
    {
      title: "Advanced Python",
      description: "Deep dive into Python programming, focusing on advanced features, data structures, and application development for real-world projects.",
      grade: "A",
      projects: ["AI Resume Analyzer Backend", "Data Processing Scripts", "Automation Tools"],
      semester: "Fall 2024"
    },
    {
      title: "Software Design",
      description: "Comprehensive study of software architecture patterns, design principles, and best practices for scalable application development.",
      grade: "A-",
      projects: ["Mobile App Architecture", "System Design Documentation", "Design Pattern Implementation"],
      semester: "Spring 2024"
    },
    {
      title: "Project Management",
      description: "Modern project management methodologies including Agile, Scrum, and SAFe frameworks with practical application to software projects.",
      grade: "A",
      projects: ["NASA Mars Rover Project", "Construction Project Coordination", "Agile Sprint Planning"],
      semester: "Fall 2023"
    },
    {
      title: "Human Computer Interaction",
      description: "Study of user-centered design principles, usability testing, and interface design for creating intuitive user experiences.",
      grade: "A+",
      projects: ["Mobile App UI/UX Design", "User Research Studies", "Accessibility Compliance"],
      semester: "Spring 2024"
    },
    {
      title: "System Design",
      description: "Large-scale system architecture, distributed computing concepts, and scalable software design principles.",
      grade: "A",
      projects: ["Distributed System Prototype", "Load Balancing Implementation", "Database Optimization"],
      semester: "Fall 2024"
    },
    {
      title: "Ubiquitous Computing",
      description: "Exploration of pervasive computing environments, IoT systems, and context-aware application development.",
      grade: "A-",
      projects: ["IoT Sensor Network", "Context-Aware Mobile App", "Smart Environment Design"],
      semester: "Spring 2023"
    }
  ];

  const academicProjects: AcademicProject[] = [
    {
      title: "NASA Mars Rover CDH System Design",
      description: "Led Command and Data Handling subsystem design for conceptual Mars rover mission, directing 8 engineers to deliver comprehensive 219-page design review meeting NASA standards.",
      skills: ["Systems Architecture", "Team Leadership", "Technical Documentation", "NASA Standards", "Project Management"],
      type: "NASA L'SPACE Program"
    },
    {
      title: "Mobile App Accessibility Compliance Study",
      description: "Professional internship project analyzing Section 508 compliance standards for mobile applications, developing implementation strategies achieving 100% accessibility compliance.",
      skills: ["Accessibility Standards", "Mobile Development", "User Testing", "Compliance Auditing", "Professional Development"],
      type: "Software Engineering Internship"
    }
  ];

  const CourseCard = ({ card, index, hovered, setHovered }: {
    card: CourseCard;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <motion.div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 border border-slate-200 dark:border-slate-700"
      whileHover={{ y: -5 }}
    >
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            {card.title}
          </h3>
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded text-sm font-medium">
              {card.grade}
            </span>
          </div>
        </div>
        
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
          {card.description}
        </p>
        
        <div className="mb-4">
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">
            {card.semester}
          </span>
        </div>

        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: hovered === index ? "auto" : 0,
            opacity: hovered === index ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
            <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100 mb-2">
              Key Projects:
            </h4>
            <ul className="space-y-1">
              {card.projects.map((project, idx) => (
                <li key={idx} className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-2">
                  <div className="w-1 h-1 bg-indigo-500 rounded-full" />
                  {project}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-cyan-500/5"
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered === index ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );

  return (
    <section id="education" className="relative py-20 bg-white dark:bg-slate-950 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Academic Foundation
          </motion.h2>
          <motion.p 
            className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            University of California, Irvine - B.S. Informatics with specialization in Human-Computer Interaction. 
            Combining rigorous academic training with hands-on professional experience.
          </motion.p>
        </div>

        {/* University Info Banner */}
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-6 bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-indigo-950 dark:to-cyan-950 rounded-2xl p-8 border border-indigo-100 dark:border-indigo-800">
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">
                  UC Irvine
                </div>
                <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  University of California
                </div>
              </div>
            </div>
            <div className="w-px h-12 bg-slate-300 dark:bg-slate-600" />
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400 mb-1">
                B.S. Informatics
              </div>
              <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
                Specialization in HCI
              </div>
            </div>
            <div className="w-px h-12 bg-slate-300 dark:bg-slate-600" />
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">
                Dec 2025
              </div>
              <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
                Expected Graduation
              </div>
            </div>
          </div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            {timelineData.map((item, index) => (
              <div key={index} className="flex justify-start pt-10 md:pt-16 md:gap-10">
                <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                  <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-slate-950 flex items-center justify-center border-2 border-indigo-200 dark:border-indigo-800">
                    <div className="h-4 w-4 rounded-full bg-indigo-500" />
                  </div>
                  <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold text-indigo-600 dark:text-indigo-400">
                    {item.title}
                  </h3>
                </div>

                <div className="relative pl-20 pr-4 md:pl-4 w-full">
                  <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-indigo-600 dark:text-indigo-400">
                    {item.title}
                  </h3>
                  {item.content}
                </div>
              </div>
            ))}

            {/* Timeline Line */}
            <div className="absolute md:left-8 left-8 top-0 w-[2px] h-full bg-gradient-to-b from-transparent via-indigo-200 dark:via-indigo-800 to-transparent" />
          </div>
        </motion.div>

        {/* Course Cards Grid */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Relevant Coursework
            </h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Comprehensive curriculum covering software development, human-computer interaction, 
              and modern technology systems with practical project applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseCards.map((card, index) => (
              <CourseCard
                key={index}
                card={card}
                index={index}
                hovered={hoveredCourse}
                setHovered={setHoveredCourse}
              />
            ))}
          </div>
        </motion.div>

        {/* Academic Projects */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Academic & Professional Projects
            </h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Major academic and internship projects that demonstrate applied learning, 
              professional development, and real-world problem-solving capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {academicProjects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-700"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="mb-4">
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium">
                    {project.type}
                  </span>
                </div>
                
                <h4 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
                  {project.title}
                </h4>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationBackground;