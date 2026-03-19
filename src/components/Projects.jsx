import React from "react";
import { motion } from "framer-motion";
import { GlassBlogCard } from "./ui/glass-blog-card-shadcnui";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Commons – Real-Time AI Moderation Gateway",
      excerpt:
        "Architected a 4-stage, sub-second moderation pipeline using FastAPI and Node.js, optimizing real-time processing of concurrent, multilingual text and voice streams. Engineered a deterministic Redis pre-filter leveraging sliding-window rate limits and hard/soft keyword sets, successfully intercepting ~70% of invalid traffic in <10ms to drastically reduce LLM inference costs. Integrated FAISS for ultra-low latency (<20ms) semantic search against banned embeddings, cascading complex edge cases to a Groq LLM with strict confidence gating to prevent hallucinated blocks.",
      tech: ["React", "FastAPI", "Node.js", "Redis", "FAISS", "Celery", "PostgreSQL", "Sentence-Transformers"],
      image: "/projects/1.jpg",
      date: "Feb 2026",
      github: "https://github.com/Tanish-Arora-01/Common-Implementation",
      demo: "https://common-i72m.vercel.app/",
      disableGithub: false,
      demoDisabled: false,
    },
    {
      id: 2,
      title: "Secure Plus – Privacy-Focused Document Redaction Tool",
      excerpt:
        "Developed a document processing engine using Python and OpenCV to detect and redact sensitive PII fields including PAN numbers, emails, and dates of birth. Implemented irreversible Gaussian blur masking to protect user-selected regions while preserving original document layout. Designed a scalable architecture where heavy image-processing tasks run inside containerized Python workers deployed on AWS ECS.",
      tech: ["Python", "OpenCV", "Node.js", "AWS ECS", "Docker", "MERN Stack"],
      image: "/projects/4.jpg",
      date: "Dec 2025",
      github: "https://github.com/Tanish-Arora-01/SecurePlus",
      demo: "#",
      disableGithub: false,
      demoDisabled: true,
    },
    {
      id: 3,
      title: "PulseGrid – AI-Powered Cognitive Load Tracking System",
      excerpt:
        "Built a cross-process telemetry system using Electron.js and Node.js to capture high-frequency keystroke and mouse activity stored securely in SQLite. Created a privacy-first offline ML pipeline using Python and XGBoost to analyze behavioral patterns and estimate cognitive fatigue. Applied temporal feature engineering including rolling averages and lag features, and integrated Isotonic Regression for probability calibration with ARIMA for time-series forecasting. Packaged the entire ML system into a standalone executable using PyInstaller for offline deployment.",
      tech: ["Electron", "React", "Node.js", "Python", "XGBoost", "ARIMA", "SQLite", "PyInstaller"],
      image: "/projects/2.jpg",
      date: "Jan 2026",
      github: "https://github.com/Tanish-Arora-01/Pulse-Grid",
      demo: "#",
      disableGithub: false,
      demoDisabled: true,
    },
    {
      id: 4,
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500">Featured Projects</span>
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