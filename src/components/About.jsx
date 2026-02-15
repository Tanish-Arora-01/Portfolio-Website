import React from "react";
import SpotlightCard from "./SpotlightCard";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-[var(--app-height)] text-text py-20 relative overflow-hidden flex flex-col justify-center"
    >
      {/* subtle glow background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-24 right-10 w-72 h-72 bg-accent/15 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-16 left-10 w-80 h-80 bg-purple-700/15 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        {/* Header */}
        <div className="pb-10">
          <h2 className="text-4xl font-bold inline text-white relative">
            About Me
            <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-accent/70 blur-[1px]" />
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT — MAIN TEXT */}
          <div className="text-lg leading-relaxed text-gray-200 space-y-6">
            <p>
              I’m a{" "}
              <span className="text-white font-bold">
                Computer Science Engineering student
              </span>{" "}
              at <span className="text-white font-bold">VIT Chennai</span>{" "}
              (2023–2027) with a current{" "}
              <span className="text-accent font-extrabold text-xl">
                CGPA of 8.69
              </span>
              . I build production-ready full-stack applications and focus on
              writing scalable, maintainable systems.
            </p>

            <p>
              My core work is centered around{" "}
              <span className="text-white font-bold">
                React, Node.js, Express, MongoDB, and REST APIs
              </span>
              , supported by strong fundamentals in{" "}
              <span className="text-white font-bold">
                Data Structures, Databases, Operating Systems, and Networking
              </span>
              .
            </p>

            <p>
              I’ve built systems including a{" "}
              <span className="text-white font-bold">
                privacy-focused document redaction engine
              </span>{" "}
              using Python + OpenCV, a{" "}
              <span className="text-white font-bold">
                containerized full-stack marketplace platform
              </span>{" "}
              with CI/CD pipelines, and a{" "}
              <span className="text-white font-bold">
                real-time sports update application
              </span>{" "}
              powered by REST APIs and live data flows.
            </p>

            <p>
              I actively work with{" "}
              <span className="text-white font-bold">
                AWS, Docker, Linux, and GitHub Actions
              </span>{" "}
              to understand how applications move from development to
              deployment. My long-term focus is at the intersection of{" "}
              <span className="text-white font-bold">
                Full-Stack Engineering, Cloud Infrastructure, and DevOps.
              </span>
            </p>
          </div>

          {/* RIGHT — INFO CARDS */}
          <div className="space-y-6">
            {/* Education / Focus */}
            <SpotlightCard className="p-6 backdrop-blur-sm bg-white/5 border-white/15">
              <h3 className="text-white font-bold text-xl mb-4 text-center">
                Education & Focus
              </h3>

              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Degree</span>
                  <span className="text-accent text-right font-semibold">
                    B.Tech CSE
                  </span>
                </li>

                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>University</span>
                  <span className="text-accent text-right font-semibold">
                    VIT Chennai
                  </span>
                </li>

                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>CGPA</span>
                  <span className="text-accent font-extrabold">8.69</span>
                </li>

                <li className="flex justify-between">
                  <span>Primary Track</span>
                  <span className="text-accent text-right font-semibold">
                    Full Stack + DevOps
                  </span>
                </li>
              </ul>
            </SpotlightCard>

            {/* Skills */}
            <SpotlightCard className="p-6 backdrop-blur-sm bg-white/5 border-white/15">
              <h3 className="text-white font-bold text-xl mb-4">
                Technical Skills
              </h3>

              <div className="flex flex-wrap gap-2">
                {[
                  "C++",
                  "Python",
                  "JavaScript",
                  "TypeScript",
                  "SQL",
                  "Bash",
                  "React",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "REST APIs",
                  "Tailwind",
                  "AWS",
                  "Docker",
                  "Linux",
                  "GitHub Actions",
                  "Git",
                  "Postman",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/15 text-gray-100 font-semibold hover:text-white hover:border-accent/60 hover:bg-accent/10 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </SpotlightCard>

            {/* Coursework */}
            <SpotlightCard className="p-6 backdrop-blur-sm bg-white/5 border-white/15">
              <h3 className="text-white font-bold text-xl mb-4">
                Core Coursework
              </h3>

              <div className="grid grid-cols-2 gap-3 text-sm text-gray-300 font-medium">
                <span>Data Structures</span>
                <span>OOP</span>
                <span>DBMS</span>
                <span>Operating Systems</span>
                <span>Computer Networks</span>
                <span>Cloud Computing</span>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
