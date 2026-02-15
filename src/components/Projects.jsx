import React from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaBrain,
  FaHeartbeat,
  FaLock,
  FaMapMarkedAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";

const Projects = () => {
  // Global toggle to disable all demos
  const demoDisabled = true;

  const projects = [
    {
      id: 1,
      title: "PulseGrid",
      description:
        "Real-time cognitive load and burnout prediction platform. Uses an event-driven architecture with polyglot persistence to forecast user fatigue before it happens.",
      tech: ["React", "Python (ML)", "Redis", "Cassandra", "Docker"],
      github: "https://github.com/yourusername/pulsegrid",
      demo: "https://pulsegrid.demo",
      color: "from-red-500 to-rose-500",
      icon: <FaHeartbeat size={20} className="text-white" />,
      disableGithub: true,
    },
    {
      id: 2,
      title: "NeuroSense",
      description:
        "AI-powered screening tool for early dementia detection. Analyzes speech patterns and cognitive test data using ML models to generate instant risk assessments.",
      tech: ["React", "Flask", "TensorFlow", "MongoDB"],
      github: "https://github.com/yourusername/neurosense",
      demo: "https://neurosense.demo",
      color: "from-purple-500 to-pink-500",
      icon: <FaBrain size={20} className="text-white" />,
      disableGithub: true,
    },
    {
      id: 3,
      title: "Secure Plus",
      description:
        "Automated document redaction engine. Detects PII (like PAN/Aadhaar) using Computer Vision and processes files securely in isolated AWS containers.",
      tech: ["Node.js", "AWS (ECS)", "OpenCV", "Docker"],
      github: "https://github.com/Tanish-Arora-01/SecurePlus",
      demo: "https://secureplus.demo",
      color: "from-blue-500 to-cyan-500",
      icon: <FaLock size={20} className="text-white" />,
      disableGithub: false,
    },
    {
      id: 4,
      title: "Campingo",
      description:
        "Full-stack travel marketplace. Features interactive geospatial maps, user authentication, and a review system for discovering campgrounds.",
      tech: ["Node.js", "Express", "MongoDB", "Mapbox"],
      github: "https://github.com/Tanish-Arora-01/Campingo",
      demo: "https://campingo.demo",
      color: "from-green-500 to-emerald-500",
      icon: <FaMapMarkedAlt size={20} className="text-white" />,
      disableGithub: false,
    },
  ];

  return (
    <section
      name="projects"
      className="w-full min-h-[calc(var(--vh)*100)] text-text py-20 relative z-10"
    >
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col justify-center h-full">
        {/* Heading */}
        <div className="pb-12">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold inline border-b-4 border-accent"
          >
            Featured Projects
          </motion.h2>
          <p className="py-6 text-gray-200 text-lg">
            Architecting scalable solutions with{" "}
            <span className="text-white font-bold">Polyglot Persistence</span>,{" "}
            <span className="text-white font-bold">AI/ML</span>, and{" "}
            <span className="text-white font-bold">Cloud DevOps</span>.
          </p>
        </div>

        {/* Spotlight Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map(
            ({
              id,
              title,
              description,
              tech,
              github,
              demo,
              color,
              icon,
              disableGithub,
            }) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: id * 0.1 }}
              >
                <SpotlightCard className="h-full group">
                  <div className="flex flex-col h-full p-8">
                    {/* Header */}
                    <div className="mb-6 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div
                          className={`p-3 rounded-xl bg-gradient-to-r ${color} shadow-lg`}
                        >
                          {icon}
                        </div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
                          {title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
                      {description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {tech.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 text-xs font-semibold text-accent bg-accent/5 rounded-full border border-accent/10"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    {/* Links Container */}
                    <div className="flex items-center gap-6 mt-auto border-t border-white/5 pt-6">
                      {disableGithub ? (
                        <div className="flex items-center gap-2 text-gray-600 cursor-not-allowed opacity-50 select-none">
                          <FaGithub size={20} />
                          <span className="font-medium">Private</span>
                        </div>
                      ) : (
                        <a
                          href={github}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                        >
                          <FaGithub size={20} />
                          <span className="font-medium">Source</span>
                        </a>
                      )}

                      {demoDisabled ? (
                        <div className="flex items-center gap-2 text-gray-600 cursor-not-allowed opacity-50 select-none">
                          <FaExternalLinkAlt size={18} />
                          <span className="font-medium">Coming Soon</span>
                        </div>
                      ) : (
                        <a
                          href={demo}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors"
                        >
                          <FaExternalLinkAlt size={18} />
                          <span className="font-medium">Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
