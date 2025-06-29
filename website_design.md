<high_level_design>
**Creative Direction:** A sophisticated, technology-forward portfolio that balances academic rigor with cutting-edge innovation. The design emphasizes technical excellence through clean geometric layouts, subtle interactive elements, and a professional dark theme that reflects the modern software engineering landscape. The aesthetic draws inspiration from developer tools, AI interfaces, and premium tech products, creating a memorable yet professional impression that stands out to recruiters and hiring managers.

**Project Type:** Personal portfolio website for an informatics student targeting software engineering and AI engineering roles. The design prioritizes professional credibility, technical skill showcase, and conversion optimization for job applications.

**Color Palettes:**
| Token | Light Mode | Dark Mode | Usage |
|-------|------------|-----------|--------|
| Primary | #6366f1 (Indigo-500) | #818cf8 (Indigo-400) | CTAs, links, accent elements |
| Secondary | #06b6d4 (Cyan-500) | #22d3ee (Cyan-400) | Secondary actions, highlights |
| Background | #ffffff | #0f0f23 (Deep navy) | Main backgrounds |
| Surface | #f8fafc (Slate-50) | #1a1a2e (Dark slate) | Cards, containers |
| Border | #e2e8f0 (Slate-200) | #334155 (Slate-700) | Dividers, outlines |
| Text Primary | #0f172a (Slate-900) | #f1f5f9 (Slate-100) | Headings, primary text |
| Text Secondary | #475569 (Slate-600) | #94a3b8 (Slate-400) | Body text, descriptions |
| Text Muted | #64748b (Slate-500) | #64748b (Slate-500) | Captions, meta text |

**Typography:**
- Display: Inter (700-900 weights) - Modern, technical, highly legible
- Body: Inter (400-600 weights) - Consistent, professional, optimized for reading
- Mono: JetBrains Mono - Code snippets, technical details
- Scale: 12px/14px/16px/18px/24px/32px/48px/64px

**Layout Structure:**
1. Hero Section with Navigation
2. About & Skills Section  
3. Projects Showcase
4. Academic Background
5. Contact Section
6. Footer
</high_level_design>

<sections>

<edit_section>
<file_path>src/components/blocks/heros/modern-hero-with-gradients.tsx</file_path>
<design_instructions>Transform this into a compelling introduction that immediately establishes credibility and technical expertise. The hero features a clean, gradient-enhanced layout with the headline "Software Engineer & AI Enthusiast" in Inter Bold 64px, followed by the student's name in Inter Medium 32px. The subheading reads "Informatics Student | Building the Future Through Code & Intelligence" in Inter Regular 18px with subtle cyan accent color.

The navigation bar uses a glassmorphism effect with backdrop blur, featuring links for "About", "Projects", "Education", and "Contact" in Inter Medium 16px. The primary CTA button says "View My Work" with the signature indigo gradient background and smooth hover animations. A secondary ghost button reads "Download Resume" with a subtle border glow effect.

The background features a sophisticated dark navy base (#0f0f23) with subtle animated gradient orbs in indigo and cyan tones, creating depth without distraction. Geometric accent lines in slate-700 add technical precision. The overall composition balances professionalism with innovation, immediately communicating both academic foundation and practical expertise.

Typography hierarchy uses the established Inter font family throughout, with careful attention to line height (1.5 for body text, 1.2 for headings) and letter spacing (-0.025em for headings). All interactive elements include focus states with visible borders for accessibility compliance.</design_instructions>
<references>src/components/blocks/heros/modern-hero-with-gradients.tsx, src/components/ui/background-gradient-animation.tsx, src/components/ui/spotlight-new.tsx</references>
</edit_section>

<create_section>
<file_path>src/components/sections/about-skills.tsx</file_path>
<design_instructions>A sophisticated two-column layout that tells the professional story while showcasing technical capabilities. The left column features a compelling personal narrative with the heading "About Me" in Inter Bold 48px, followed by three well-crafted paragraphs in Inter Regular 16px that highlight the journey from computer science fundamentals to AI specialization, emphasizing problem-solving mindset and continuous learning.

The right column presents a "Technical Arsenal" using an interactive bento grid layout. Skills are organized into categories: "Languages" (Python, JavaScript, Java, C++), "Frameworks" (React, Node.js, TensorFlow, PyTorch), "Tools" (Git, Docker, AWS, MongoDB), and "Specializations" (Machine Learning, Web Development, Data Analysis). Each skill card features subtle hover animations with glowing borders and micro-interactions.

The section uses a clean slate-900 background with geometric accent patterns. Skill cards have glassmorphism effects with backdrop blur and subtle gradients. Progress indicators use the indigo primary color with smooth animated fills. The layout seamlessly adapts to mobile with a single-column stack.

Interactive elements include skill cards that expand on hover to show proficiency levels and recent projects using each technology. Typography maintains the Inter family hierarchy with careful spacing and professional presentation. The section concludes with a subtle call-to-action encouraging deeper exploration of the project portfolio.</design_instructions>
<references>src/components/ui/bento-grid.tsx, src/components/ui/card-hover-effect.tsx, src/components/ui/glowing-effect.tsx, src/components/ui/background-lines.tsx</references>
</create_section>

<create_section>
<file_path>src/components/sections/projects-showcase.tsx</file_path>
<design_instructions>An engaging project gallery that demonstrates practical application of technical skills through real-world solutions. The section opens with "Featured Projects" in Inter Bold 48px, followed by a brief description emphasizing the range from AI applications to full-stack solutions.

Three primary project cards are arranged in a dynamic grid layout. Each card features a sleek design with project screenshots, clean typography, and technical stack indicators. The first project showcases an AI/ML application (e.g., "Intelligent Code Analyzer" built with Python, TensorFlow), the second highlights a full-stack web application (e.g., "Collaborative Study Platform" using React, Node.js, MongoDB), and the third demonstrates systems programming or data engineering expertise.

Each project card includes: project title in Inter Semibold 24px, brief description in Inter Regular 16px, technology stack as pill badges with subtle gradients, and action buttons for "Live Demo" and "Source Code". Cards feature sophisticated hover effects with 3D transforms, glowing borders, and subtle shadow elevation.

The layout incorporates the tracing beam component to create visual flow between projects, with animated connections that highlight the progression of skills and complexity. Interactive elements include expandable project details on click, revealing additional screenshots, challenges overcome, and lessons learned.

Background uses the established dark theme with subtle dot patterns and gradient accents. All text maintains excellent contrast ratios, and interactive elements include proper focus states for accessibility. The section concludes with a link to a full project portfolio or GitHub profile.</design_instructions>
<references>src/components/ui/3d-card.tsx, src/components/ui/tracing-beam.tsx, src/components/ui/background-beams.tsx, src/components/ui/card-spotlight.tsx, src/components/ui/animated-modal.tsx</references>
</create_section>

<create_section>
<file_path>src/components/sections/education-background.tsx</file_path>
<design_instructions>A clean, timeline-based presentation of academic achievements that builds credibility and demonstrates consistent growth. The section headline reads "Academic Foundation" in Inter Bold 48px, emphasizing the solid educational background supporting practical skills.

The timeline component showcases the informatics program with key milestones: current GPA, relevant coursework (Data Structures, Algorithms, Machine Learning, Database Systems, Software Engineering), academic projects, and any honors or recognitions. Each timeline entry features the institution name in Inter Semibold 20px, degree details in Inter Medium 16px, and achievement descriptions in Inter Regular 14px.

Notable coursework is presented as an interactive grid with course cards that reveal project details and grades on hover. Relevant courses include "Advanced Algorithms", "Machine Learning Fundamentals", "Database Design", "Software Architecture", and "AI Ethics". Each course card uses subtle gradients and smooth hover animations.

Academic projects are highlighted with brief descriptions and connections to practical skills. The layout includes GPA presentation with tasteful emphasis (if strong), graduation timeline, and any relevant certifications or online courses that demonstrate continued learning.

The design maintains professional restraint while showcasing academic excellence. Background features subtle geometric patterns with the primary color palette. Typography hierarchy ensures clear information architecture with proper spacing and visual flow. All elements support the narrative of a well-prepared candidate ready for professional challenges.</design_instructions>
<references>src/components/ui/timeline.tsx, src/components/ui/focus-cards.tsx, src/components/ui/background-lines.tsx, src/components/blocks/stats/stats-with-gradient.tsx</references>
</create_section>

<create_section>
<file_path>src/components/sections/contact-section.tsx</file_path>
<design_instructions>A sophisticated contact section that facilitates professional connections while maintaining the established design language. The headline "Let's Build Something Amazing Together" in Inter Bold 48px immediately establishes collaboration mindset, followed by a compelling subheading about availability for opportunities and interesting projects.

The layout features a two-column approach: the left side contains a clean contact form with fields for Name, Email, Company, and Message. Form inputs use the established glassmorphism styling with subtle borders, smooth focus animations, and proper validation states. The submit button features the signature indigo gradient with "Send Message" text and subtle loading animations.

The right column presents alternative contact methods with elegant icon-text combinations: professional email, LinkedIn profile, GitHub portfolio, and potentially a phone number. Each contact method uses hover effects with glowing borders and smooth transitions. A brief call-to-action emphasizes interest in software engineering and AI opportunities.

Background incorporates subtle animated particles or floating elements that enhance the professional aesthetic without distraction. The section includes a tasteful availability indicator (e.g., "Currently seeking internship opportunities" or "Available for full-time roles starting [date]") that provides immediate context for recruiters.

Form validation provides clear, helpful feedback with proper error states. Success states include a thank-you message with expected response timeframe. All interactions maintain accessibility standards with proper focus management and keyboard navigation. The overall tone balances professionalism with approachability, encouraging meaningful connections.</design_instructions>
<references>src/components/blocks/contact-forms/contact-form-grid-with-details.tsx, src/components/ui/input.tsx, src/components/ui/label.tsx, src/components/ui/background-beams-with-collision.tsx, src/components/ui/sparkles.tsx</references>
</create_section>

<edit_section>
<file_path>src/components/blocks/footers/centered-with-logo.tsx</file_path>
<design_instructions>A clean, minimal footer that provides closure while maintaining professional presentation. Center the student's name or personal brand in Inter Semibold 18px, followed by a brief tagline like "Software Engineer & AI Enthusiast" in Inter Regular 14px with muted text color.

Social links include GitHub, LinkedIn, and professional email, each with subtle hover animations and proper accessibility labels. The design incorporates a subtle divider line above the footer content in the established border color.

Copyright notice uses the current year with proper formatting: "© 2024 [Name]. Built with passion for code and innovation." The footer background matches the primary dark theme with subtle texture or gradient elements that complement the overall design system.

Navigation links mirror the main navigation for consistency: About, Projects, Education, Contact. All links include hover states with the primary indigo color and smooth transitions. The layout adapts responsively with center-aligned mobile presentation.

Typography maintains the Inter font family with appropriate sizing and spacing. The footer serves as a professional closure to the portfolio experience while providing additional navigation options and contact accessibility.</design_instructions>
<references>src/components/blocks/footers/centered-with-logo.tsx, src/components/ui/background-gradient.tsx</references>
</edit_section>

</sections>