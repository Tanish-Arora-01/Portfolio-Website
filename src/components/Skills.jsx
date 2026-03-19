import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaCloud, FaBrain, FaTools } from "react-icons/fa";
import SpotlightCard from "./SpotlightCard";

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      title: "Languages",
      icon: <FaCode size={24} />,
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
      icon: <FaServer size={24} />,
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
      icon: <FaBrain size={24} />,
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
      icon: <FaServer size={24} />,
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
      icon: <FaCloud size={24} />,
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
      icon: <FaTools size={24} />,
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

        {/* Spotlight Grid */}
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
              <SpotlightCard className="p-8 h-full flex flex-col">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6 border-b border-black/10 pb-4">
                  <span className="text-indigo-600 bg-indigo-500/10 p-3 rounded-xl border border-indigo-500/20">
                    {category.icon}
                  </span>
                  <h3 className="text-2xl font-medium text-slate-900 tracking-wide">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Tags Container */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <div
                      key={skill}
                      className="group relative"
                    >
                      {/* Glow Effect behind tag */}
                      <div className="absolute -inset-0.5 bg-indigo-400/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-300"></div>

                      {/* The Tag Itself */}
                      <div className="relative px-4 py-2 bg-white/50 backdrop-blur-md border border-black/5 rounded-full text-slate-700 text-sm font-light hover:text-slate-900 hover:bg-white/70 hover:border-indigo-400/40 transition duration-300 cursor-default">
                        {skill}
                      </div>
                    </div>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
