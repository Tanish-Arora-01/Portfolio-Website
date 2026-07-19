import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import LogoLoop from "./ui/LogoLoop";

const majorSkills = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg", alt: "C++" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", alt: "JavaScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", alt: "TypeScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", alt: "Python" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", alt: "React" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg", alt: "Node.js" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg", alt: "FastAPI" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", alt: "PostgreSQL" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", alt: "MongoDB" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg", alt: "Redis" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", alt: "AWS" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", alt: "Docker" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg", alt: "Linux" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", alt: "GitHub" },
  { src: "https://cdn.simpleicons.org/leetcode/FFA116", alt: "LeetCode" },
];

const skillGroups = [
  { number: "01", title: "Languages", skills: "C++ / JavaScript / TypeScript / Python / SQL / Bash" },
  { number: "02", title: "Frameworks", skills: "React / Node.js / Express / FastAPI / Tailwind CSS / REST APIs" },
  { number: "03", title: "Data + ML", skills: "FAISS / Scikit-learn / XGBoost / ARIMA / Pandas / NumPy / Transformers" },
  { number: "04", title: "Data Stores", skills: "PostgreSQL / Redis / MongoDB / SQLite" },
  { number: "05", title: "Cloud + DevOps", skills: "AWS (EC2, ECS, ECR, ALB) / Docker / Celery / GitHub Actions / Linux" },
  { number: "06", title: "Engineering", skills: "End-to-End SDLC / CI/CD Automation / System Architecture" },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.45,
  });
  const gridY = useTransform(smoothProgress, [0, 1], [-42, 42]);
  const glowX = useTransform(smoothProgress, [0, 1], [-36, 36]);
  const titleY = useTransform(smoothProgress, [0, 1], [26, -26]);
  const indexX = useTransform(smoothProgress, [0, 1], [14, -14]);

  return (
    <section ref={sectionRef} name="skills" className="relative w-full overflow-hidden px-4 py-20 text-foreground sm:px-6 lg:py-28">
      {/* Desktop composition */}
      <div className="relative mx-auto hidden max-w-screen-xl overflow-hidden rounded-[2rem] border border-slate-900/10 bg-gradient-to-br from-white/75 via-indigo-50/35 to-violet-50/45 px-6 py-8 shadow-xl shadow-indigo-900/5 backdrop-blur-2xl sm:block sm:px-10 sm:py-12 lg:px-14 lg:py-14">
        <motion.div style={{ x: glowX, y: gridY }} className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-indigo-400/10 blur-3xl" />
        <motion.div style={{ x: glowX, y: gridY }} className="pointer-events-none absolute -bottom-56 left-1/3 h-[30rem] w-[30rem] rounded-full bg-violet-400/10 blur-3xl" />
        <motion.div style={{ y: gridY }} className="pointer-events-none absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(15,23,42,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.7)_1px,transparent_1px)] [background-size:48px_48px]" />

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="flex items-end justify-between border-b border-slate-900/15 pb-5"
          >
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs font-semibold tracking-[0.3em] text-indigo-600">03 / 04</span>
              <span className="h-px w-10 bg-indigo-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Technical Skills</span>
            </div>
            <span className="hidden font-mono text-xs text-slate-400 sm:block">SYSTEMS / STACK / TOOLS</span>
          </motion.div>

          <div className="grid gap-10 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20 lg:py-20">
            <motion.div style={{ y: titleY }} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
              <p className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-indigo-600">The working set</p>
              <h2 className="max-w-2xl text-[clamp(3.4rem,8vw,7.8rem)] font-semibold leading-[0.84] tracking-[-0.08em] text-slate-900">
                Built for
                <span className="block text-indigo-600">the whole</span>
                system.
              </h2>
            </motion.div>
            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="max-w-lg border-l-2 border-indigo-500 pl-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              I move between product interfaces, backend systems, data workflows, and the infrastructure that keeps them dependable. The stack is a means to make the experience better.
            </motion.p>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.12 }} className="relative mb-14 overflow-hidden border-y border-slate-900/10 py-7">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white/90 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-violet-50/70 to-transparent" />
            <LogoLoop logos={majorSkills} speed={40} gap={52} logoHeight={44} pauseOnHover={true} scaleOnHover={true} />
          </motion.div>

          <div className="mb-6 flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-slate-400">Capability index</span>
            <span className="hidden items-center gap-2 text-xs font-medium text-slate-500 sm:flex">Fundamentals first <ArrowUpRight className="h-4 w-4 text-indigo-600" /></span>
          </div>

          <motion.div style={{ x: indexX }} className="grid gap-x-12 border-t border-slate-900/20 lg:grid-cols-2">
            {skillGroups.map((group, index) => (
              <motion.div key={group.number} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.4, delay: index * 0.06 }} className="group border-b border-slate-900/15 py-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-mono text-xs text-indigo-600">{group.number}</span>
                  <span className="h-px w-8 bg-slate-900/20 transition-all duration-300 group-hover:w-16 group-hover:bg-indigo-500" />
                </div>
                <h3 className="text-2xl font-semibold tracking-tight text-slate-900 transition-colors group-hover:text-indigo-600 sm:text-3xl">{group.title}</h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">{group.skills}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 flex items-center justify-between border-t border-slate-900/15 pt-5">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-400">Always learning / always shipping</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-indigo-600">01--infinity</span>
          </div>
        </div>
      </div>

      {/* Mobile composition: a vertical index designed for a narrow viewport. */}
      <div className="relative mx-auto w-full max-w-screen-xl sm:hidden">
        <motion.div style={{ x: glowX, y: gridY }} className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-indigo-400/10 blur-3xl" />

        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5 }} className="relative flex items-end justify-between border-b border-slate-900/15 pb-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] font-semibold tracking-[0.25em] text-indigo-600">03 / 04</span>
            <span className="h-px w-7 bg-indigo-500" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">Skills</span>
          </div>
          <span className="font-mono text-[10px] text-slate-400">STACK</span>
        </motion.div>

        <motion.div style={{ y: titleY }} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, delay: 0.08 }} className="relative pt-12">
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-indigo-600">The working set</p>
          <h2 className="max-w-[19rem] text-[4.4rem] font-semibold leading-[0.82] tracking-[-0.09em] text-slate-900">
            Built for
            <span className="block text-indigo-600">the whole</span>
            system.
          </h2>
          <p className="mt-8 max-w-[19rem] border-l-2 border-indigo-500 pl-4 text-[15px] leading-relaxed text-slate-600">Interfaces, APIs, data, and infrastructure -- one connected working set.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }} className="relative -mx-4 my-14 overflow-hidden border-y border-slate-900/10 bg-white/30 py-5">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white/85 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-indigo-50/75 to-transparent" />
          <LogoLoop logos={majorSkills} speed={28} gap={34} logoHeight={30} pauseOnHover={false} scaleOnHover={false} />
        </motion.div>

        <div className="relative">
          <div className="mb-5 flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-slate-400">Capability index</span>
            <ArrowUpRight className="h-4 w-4 text-indigo-600" />
          </div>

          <motion.div style={{ x: indexX }} className="border-t-2 border-slate-900">
            {skillGroups.map((group, index) => (
              <motion.div key={group.number} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ duration: 0.35, delay: index * 0.05 }} className="border-b border-slate-900/15 py-5">
                <div className="mb-2 flex items-center gap-3">
                  <span className="font-mono text-[10px] text-indigo-600">{group.number}</span>
                  <span className="h-px w-5 bg-indigo-500/60" />
                  <h3 className="text-xl font-semibold tracking-tight text-slate-900">{group.title}</h3>
                </div>
                <p className="pl-9 text-[13px] leading-relaxed text-slate-600">{group.skills}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-10 flex items-center justify-between border-t border-slate-900/15 pt-4">
            <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-slate-400">Always learning / shipping</span>
            <span className="font-mono text-[10px] tracking-[0.18em] text-indigo-600">01--infinity</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
