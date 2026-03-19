import React from "react";
import { motion } from "framer-motion";
import { GlassBlogCard } from "./ui/glass-blog-card-shadcnui";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Commons – AI Moderation Chat Application",
      excerpt:
        "Architected a real-time, sub-second AI moderation chat application. Features a deterministic Redis pre-filter that intercepts 70% of invalid traffic to slash LLM costs, and ultra-fast FAISS semantic search.",
      tech: ["FastAPI", "Node.js", "Redis", "FAISS", "Celery", "PostgreSQL"],
      // Point this to your actual image file name
      image: "/projects/1.jpg",
      date: "Feb 2026",
      github: "https://github.com/Tanish-Arora-01/Common-Implementation",
      demo: "https://common-i72m.vercel.app/",
      disableGithub: false,
      demoDisabled: false,
    },
    {
      id: 2,
      title: "PulseGrid",
      excerpt:
        "A predictive, offline-first machine learning pipeline tracking real-time cognitive load. Captures telemetry via Electron and uses XGBoost and ARIMA models to forecast user burnout.",
      tech: ["Electron", "React", "Python", "XGBoost", "SQLite"],
      image: "/projects/2.jpg",
      date: "Jan 2026",
      github: "https://github.com/Tanish-Arora-01/Pulse-Grid",
      demo: "#",
      disableGithub: false,
      demoDisabled: true,
    },
    {
      id: 3,
      title: "NeuroSense",
      excerpt:
        "AI-powered neurological screening engine for early dementia detection. Analyzes speech patterns using TensorFlow to deliver instant, clinical-grade risk assessments.",
      tech: ["React", "Flask", "TensorFlow", "MongoDB"],
      image: "/projects/3.jpg",
      date: "Nov 2025",
      github: "https://github.com/yourusername/neurosense",
      demo: "#",
      disableGithub: true,
      demoDisabled: true,
    },
    {
      id: 4,
      title: "Secure Plus",
      excerpt:
        "Automated computer vision engine for document redaction. Deploys OpenCV within isolated AWS ECS containers to securely detect and mask PII (PAN/Aadhaar) at scale.",
      tech: ["Node.js", "AWS (ECS)", "OpenCV", "Docker"],
      image: "/projects/4.jpg",
      date: "Dec 2025",
      github: "https://github.com/Tanish-Arora-01/SecurePlus",
      demo: "#",
      disableGithub: false,
      demoDisabled: true,
    },
  ];

  return (
    <section
      name="projects"
      className="w-full min-h-dvh text-foreground py-20 relative z-10 flex flex-col justify-center"
    >
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col justify-center">
        {/* Heading */}
        <div className="pb-12 text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold inline border-b-4 border-primary"
          >
            Featured Projects
          </motion.h2>
          <p className="py-6 text-muted-foreground text-lg max-w-2xl">
            Architecting scalable solutions with <span className="text-foreground font-bold">Polyglot Persistence</span>, <span className="text-foreground font-bold">AI/ML</span>, and <span className="text-foreground font-bold">Cloud DevOps</span>.
          </p>
        </div>

        {/* Project Grid — cards fill the available space */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-4">
          {projects.map((project, index) => (
            <GlassBlogCard key={project.id} {...project} tags={project.tech} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;