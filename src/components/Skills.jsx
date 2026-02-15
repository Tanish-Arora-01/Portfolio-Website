import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaCloud, FaTools } from "react-icons/fa";
import SpotlightCard from "./SpotlightCard";

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      title: "Languages & Frontend",
      icon: <FaCode size={24} />,
      skills: [
        { name: "C / C++", level: 90 },
        { name: "Python", level: 85 },
        { name: "JavaScript / TypeScript", level: 85 },
        { name: "React.js", level: 90 },
        { name: "HTML5 / Tailwind", level: 95 },
      ],
    },
    {
      id: 2,
      title: "Backend & Databases",
      icon: <FaServer size={24} />,
      skills: [
        { name: "Node.js / Express", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "SQL (PostgreSQL)", level: 75 },
        { name: "Redis", level: 70 },
        { name: "REST APIs", level: 90 },
      ],
    },
    {
      id: 3,
      title: "DevOps & Cloud",
      icon: <FaCloud size={24} />,
      skills: [
        { name: "AWS (EC2, ECS, ECR)", level: 80 },
        { name: "Docker / Containerization", level: 85 },
        { name: "Linux / Bash Shell", level: 75 },
        { name: "GitHub Actions", level: 70 },
        { name: "Nginx", level: 65 },
      ],
    },
    {
      id: 4,
      title: "Tools & Core CS",
      icon: <FaTools size={24} />,
      skills: [
        { name: "Git / GitHub", level: 90 },
        { name: "Postman", level: 85 },
        { name: "Data Structures (DSA)", level: 80 },
        { name: "OOP / OS / DBMS", level: 85 },
        { name: "VS Code / Jupyter", level: 95 },
      ],
    },
  ];

  return (
    <section name="skills" className="w-full text-text py-20 relative z-10">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col justify-center">
        {/* Heading */}
        <div className="pb-12">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold inline border-b-4 border-accent"
          >
            Technical Skills
          </motion.h2>
          <p className="py-6 text-gray-200 text-lg">
            A comprehensive overview of my technical stack, from{" "}
            <span className="text-white font-bold">Low-level C++</span> to{" "}
            <span className="text-white">Cloud DevOps</span>.
          </p>
        </div>

        {/* Spotlight Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SpotlightCard className="p-8 h-full">
                {/* Category Title */}
                <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
                  <span className="text-accent bg-accent/10 p-2 rounded-lg">
                    {category.icon}
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List with Bars */}
                <div className="space-y-5">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-700/50 rounded-full h-2.5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_0_10px_rgba(56,189,248,0.5)]"
                        />
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
