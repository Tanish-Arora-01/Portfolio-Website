import React from "react";
import { motion } from "framer-motion";
import { Code2, Server, BrainCircuit, Database, CloudCog, Wrench } from "lucide-react";
import { RevealSkillCard } from "./ui/RevealSkillCard";

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      title: "Languages",
      icon: <Code2 size={24} strokeWidth={1.5} />,
      accent: "#6366f1", // indigo
      skills: [
        "JavaScript",
        "TypeScript",
        "Python",
        "SQL",
        "C / C++",
        "Bash / Shell",
      ],
    },
    {
      id: 2,
      title: "Frameworks & Libraries",
      icon: <Server size={24} strokeWidth={1.5} />,
      accent: "#818cf8", // lighter indigo
      skills: [
        "React",
        "Node.js",
        "Express",
        "FastAPI",
        "Electron.js",
        "Tailwind CSS",
        "REST APIs",
      ],
    },
    {
      id: 3,
      title: "Data & Machine Learning",
      icon: <BrainCircuit size={24} strokeWidth={1.5} />,
      accent: "#8b5cf6", // violet
      skills: [
        "FAISS",
        "Scikit-learn",
        "XGBoost",
        "ARIMA",
        "Pandas",
        "NumPy",
        "Sentence Transformers",
      ],
    },
    {
      id: 4,
      title: "Databases & Cache",
      icon: <Database size={24} strokeWidth={1.5} />,
      accent: "#7c3aed", // deep violet
      skills: [
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "SQLite",
      ],
    },
    {
      id: 5,
      title: "DevOps & Architecture",
      icon: <CloudCog size={24} strokeWidth={1.5} />,
      accent: "#4f46e5", // deep indigo
      skills: [
        "AWS (EC2, ECS, ECR, ALB)",
        "Docker",
        "Celery",
        "GitHub Actions",
        "PyInstaller",
        "Linux",
      ],
    },
    {
      id: 6,
      title: "Developer Tools",
      icon: <Wrench size={24} strokeWidth={1.5} />,
      accent: "#6d28d9", // purple
      skills: [
        "Git / GitHub",
        "VS Code",
        "Postman",
        "Jupyter Lab",
      ],
    },
  ];

  return (
    <section
      name="skills"
      className="w-full min-h-dvh text-foreground py-20 relative z-10 flex flex-col justify-center"
    >
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col justify-center h-full">
        {/* Heading */}
        <div className="pb-12 text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold inline border-b-4 border-primary"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500">Technical Skills</span>
          </motion.h2>
          <p className="py-6 text-muted-foreground text-lg max-w-2xl">
            My technical stack is focused on scalability and performance. I work
            across the board from{" "}
            <span className="text-slate-900 font-bold">Low-level Systems</span> to{" "}
            <span className="text-slate-900 font-bold">Modern Web Infrastructure</span>.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "80px" }}
              transition={{ duration: 0.5, delay: index * 0.12, type: "spring", stiffness: 80, damping: 14 }}
              whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
              className="h-full transform-gpu cursor-pointer"
            >
              <RevealSkillCard 
                title={category.title}
                icon={category.icon}
                skills={category.skills}
                accent={category.accent}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
