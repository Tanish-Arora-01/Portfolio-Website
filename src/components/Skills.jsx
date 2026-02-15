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
        "C / C++",
        "Python",
        "JavaScript / TypeScript",
        "React.js",
        "Next.js",
        "HTML5 / Tailwind CSS",
        "Framer Motion",
      ],
    },
    {
      id: 2,
      title: "Backend & Databases",
      icon: <FaServer size={24} />,
      skills: [
        "Node.js",
        "Express",
        "MongoDB",
        "PostgreSQL",
        "Redis",
        "REST APIs",
        "GraphQL",
      ],
    },
    {
      id: 3,
      title: "DevOps & Cloud",
      icon: <FaCloud size={24} />,
      skills: [
        "AWS (EC2, ECS, S3)",
        "Docker",
        "Kubernetes",
        "CI/CD (GitHub Actions)",
        "Linux / Bash",
        "Nginx",
      ],
    },
    {
      id: 4,
      title: "Tools & Core CS",
      icon: <FaTools size={24} />,
      skills: [
        "Git / GitHub",
        "Postman",
        "Data Structures (DSA)",
        "System Design",
        "OOP / OS / DBMS",
        "VS Code / Vim",
      ],
    },
  ];

  return (
    <section
      name="skills"
      className="w-full min-h-[100dvh] text-text py-20 relative z-10 flex flex-col justify-center"
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
            Technical Skills
          </motion.h2>
          <p className="py-6 text-gray-200 text-lg max-w-2xl">
            My technical stack is focused on scalability and performance. I work
            across the board from{" "}
            <span className="text-white font-bold">Low-level Systems</span> to{" "}
            <span className="text-white">Modern Web Infrastructure</span>.
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
              className="h-full"
            >
              <SpotlightCard className="p-8 h-full flex flex-col">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
                  <span className="text-accent bg-accent/10 p-3 rounded-xl border border-accent/20">
                    {category.icon}
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-wide">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Tags Container */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                      className="group relative"
                    >
                      {/* Glow Effect behind tag */}
                      <div className="absolute -inset-0.5 bg-accent/30 rounded-full blur opacity-0 group-hover:opacity-75 transition duration-200"></div>

                      {/* The Tag Itself */}
                      <div className="relative px-4 py-2 bg-gray-900 border border-white/10 rounded-full text-gray-300 text-sm font-medium hover:text-white hover:border-accent/50 transition-colors cursor-default">
                        {skill}
                      </div>
                    </motion.div>
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
