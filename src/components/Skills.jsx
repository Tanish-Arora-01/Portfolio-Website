import React from "react";
import { motion } from "framer-motion";
import { Code2, Server, BrainCircuit, Database, CloudCog, Wrench } from "lucide-react";
import { RevealSkillCard } from "./ui/RevealSkillCard";
import LogoLoop from "./ui/LogoLoop";

const majorSkills = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", alt: "Python" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", alt: "JavaScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", alt: "TypeScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", alt: "React" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg", alt: "Node.js" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", alt: "Express" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg", alt: "FastAPI" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", alt: "Tailwind CSS" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", alt: "PostgreSQL" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", alt: "MongoDB" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg", alt: "Redis" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", alt: "AWS" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", alt: "Docker" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg", alt: "Linux" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", alt: "GitHub" },
  { src: "https://cdn.simpleicons.org/leetcode/FFA116", alt: "LeetCode" },
];

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
      className="w-full min-h-svh text-foreground py-20 relative z-10 flex flex-col justify-center overflow-x-hidden"
    >
      <div className="max-w-screen-xl mx-auto px-6 w-full">
        {/* Heading */}
        <div className="pb-8 text-center md:text-left">
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
      </div>

      {/* Logo Loop (Full Width) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mb-12 w-full overflow-hidden mask-fade-edges"
      >
        <LogoLoop 
          logos={majorSkills} 
          speed={40} 
          gap={48} 
          logoHeight={45}
          pauseOnHover={true}
          scaleOnHover={true}
        />
      </motion.div>

      <div className="max-w-screen-xl mx-auto px-6 w-full">
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "50px" }}
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
