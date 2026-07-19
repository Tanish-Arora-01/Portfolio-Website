import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check, MoveUpRight } from "lucide-react";
import { cn } from "../lib/utils";

const experiences = [
  {
    id: "01",
    company: "Sahii.in",
    role: "Full Stack Developer Intern",
    duration: "APR — MAY 2026",
    location: "E-commerce Platform",
    description:
      "Engineered new full-stack features while modernizing architecture to improve scalability, SEO, and the overall shopping experience for a high-traffic e-commerce platform.",
    points: [
      "Migrated the primary database to the cloud and configured Cloudflare DNS with R2/E2 object storage for more reliable asset delivery.",
      "Built secure Razorpay payment controller integrations and patched critical vulnerabilities in the legacy codebase.",
      "Modernized the EJS, Node.js, and MongoDB frontend architecture with targeted UX changes and responsive components.",
      "Optimized the application for speed, SEO, and Core Web Vitals to improve reach and real-world performance.",
    ],
    stack: "EJS · Node.js · MongoDB · Cloudflare · Razorpay",
  },
  {
    id: "02",
    company: "HCLTech",
    role: "Gen AI Engineer Intern",
    duration: "MAY — JUL 2026",
    location: "Engineering Internship",
    description:
      "Built AI-driven EEG signal analysis workflows, turning biomedical time-series data into reliable model pipelines under expert mentorship.",
    points: [
      "Worked with Transformer architectures and Kolmogorov-Arnold Networks (KANs) to engineer intelligent operations on EEG time-series data.",
      "Developed preprocessing pipelines and performed feature extraction to improve classification performance and system reliability.",
      "Evaluated deep-learning models for biomedical signal processing, focusing on accuracy, robustness, and practical engineering fit.",
    ],
    stack: "Python · Transformers · KANs · Time-Series · Signal Processing",
  },
];

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeExperience = experiences[activeIndex];

  return (
    <section
      name="experience"
      className="relative flex min-h-svh w-full items-center overflow-hidden px-6 py-24 text-foreground lg:py-32"
    >
      <div className="pointer-events-none absolute -right-36 top-1/4 h-[34rem] w-[34rem] rounded-full bg-indigo-400/10 blur-3xl" />
      <div className="relative z-10 mx-auto w-full max-w-screen-xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mb-16 flex items-end justify-between border-b border-slate-900/15 pb-4"
        >
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs font-semibold tracking-[0.3em] text-indigo-600">
              02 / 04
            </span>
            <span className="h-px w-10 bg-indigo-500" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Experience
            </span>
          </div>
          <span className="hidden font-mono text-xs text-slate-400 sm:block">
            SELECTED WORK
          </span>
        </motion.div>

        <div className="grid gap-14 lg:min-h-[560px] lg:grid-cols-[0.38fr_0.62fr] lg:gap-24">
          {/* Timeline rail */}
          <div className="relative">
            <div className="absolute bottom-5 left-[9px] top-5 w-px bg-slate-900/15" />
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-[9px] top-5 h-[calc(100%-2.5rem)] w-px origin-top bg-indigo-600"
            />

            <div className="relative flex flex-col gap-10">
              {experiences.map((experience, index) => {
                const active = index === activeIndex;
                return (
                  <motion.button
                    key={experience.id}
                    type="button"
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.12 }}
                    onClick={() => setActiveIndex(index)}
                    className="group flex w-full cursor-pointer items-start gap-7 text-left"
                  >
                    <span
                      className={cn(
                        "relative z-10 mt-1 flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full border-2 bg-white transition-all duration-300",
                        active
                          ? "border-indigo-600 shadow-[0_0_0_6px_rgba(99,102,241,0.12)]"
                          : "border-slate-400 group-hover:border-indigo-500",
                      )}
                    >
                      <span
                        className={cn(
                          "h-1.5 w-1.5 rounded-full transition-colors",
                          active ? "bg-indigo-600" : "bg-transparent group-hover:bg-indigo-400",
                        )}
                      />
                    </span>
                    <span className={cn("min-w-0 transition-opacity", active ? "opacity-100" : "opacity-45 group-hover:opacity-100")}>
                      <span className="mb-3 block font-mono text-xs tracking-[0.2em] text-indigo-600">
                        {experience.duration}
                      </span>
                      <span className="block text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                        {experience.company}
                      </span>
                      <span className="mt-1 block text-sm text-slate-500">
                        {experience.role}
                      </span>
                    </span>
                  </motion.button>
                );
              })}
            </div>

            <div className="mt-16 hidden items-center gap-3 text-slate-400 lg:flex">
              <ArrowUpRight className="h-5 w-5" />
              <span className="font-mono text-[10px] uppercase tracking-[0.22em]">
                Tap an entry to explore
              </span>
            </div>
          </div>

          {/* Active role */}
          <div className="relative min-h-[32rem] lg:h-[560px]">
            <div className="absolute -left-7 top-0 hidden font-mono text-[10rem] font-semibold leading-none tracking-[-0.12em] text-indigo-600/[0.07] lg:block">
              {activeExperience.id}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeExperience.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="relative flex h-full flex-col"
              >
                <div className="flex flex-wrap items-start justify-between gap-5 border-b-2 border-slate-900 pb-7">
                  <div>
                    <p className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-indigo-600">
                      {activeExperience.id} / Internship
                    </p>
                    <h3 className="max-w-xl text-4xl font-semibold leading-[0.95] tracking-[-0.045em] text-slate-900 sm:text-6xl">
                      {activeExperience.role}
                    </h3>
                  </div>
                  <MoveUpRight className="h-8 w-8 shrink-0 text-indigo-600" />
                </div>

                <div className="grid min-h-0 flex-1 gap-10 overflow-y-auto py-8 pr-1 [scrollbar-width:none] sm:grid-cols-[0.8fr_1.2fr] sm:gap-14 [&::-webkit-scrollbar]:hidden">
                  <div className="self-start">
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
                      {activeExperience.duration}
                    </p>
                    <p className="mt-2 text-sm font-medium text-slate-600">
                      {activeExperience.location}
                    </p>
                    <p className="mt-8 border-l-2 border-indigo-500 pl-4 text-base font-medium leading-relaxed text-slate-700">
                      {activeExperience.description}
                    </p>
                  </div>

                  <div className="self-start">
                    <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
                      What I worked on
                    </p>
                    <ul className="space-y-5">
                      {activeExperience.points.map((point, index) => (
                        <motion.li
                          key={point}
                          initial={{ opacity: 0, x: 8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.07 }}
                          className="flex gap-3 text-sm leading-relaxed text-slate-600 sm:text-base"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600" />
                          <span>{point}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-slate-900/15 pt-5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
                    Stack
                  </span>
                  <span className="text-right text-xs font-semibold text-slate-700 sm:text-sm">
                    {activeExperience.stack}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-20 flex items-center justify-between border-t border-slate-900/15 pt-5">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-slate-400">
            Built through curiosity
          </span>
          <span className="hidden items-center gap-2 text-xs font-medium text-slate-500 sm:flex">
            More chapters loading <ArrowUpRight className="h-4 w-4 text-indigo-600" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Experience;
