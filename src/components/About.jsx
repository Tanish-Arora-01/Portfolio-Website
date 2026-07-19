import React from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, MoveUpRight } from "lucide-react";
import { Link } from "react-scroll";

const principles = [
  {
    number: "01",
    title: "Make complexity feel quiet.",
    description:
      "The best interface is the one that lets the work speak. I care about clear flows, fast feedback, and details that reward a second look.",
  },
  {
    number: "02",
    title: "Stay close to the metal.",
    description:
      "I like understanding what happens underneath the UI — from data models and APIs to deployment, observability, and the last mile of performance.",
  },
  {
    number: "03",
    title: "Ship, then sharpen.",
    description:
      "A working first version creates better questions. I build in small loops, measure what matters, and keep improving the parts users actually feel.",
  },
];

const About = () => {
  return (
    <section
      name="about"
      className="relative flex min-h-svh w-full items-center overflow-hidden px-6 py-24 text-foreground lg:py-32"
    >
      <div className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-indigo-400/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-violet-400/10 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-screen-xl">
        {/* Editorial masthead */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mb-16 flex items-end justify-between border-b border-slate-900/15 pb-4"
        >
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs font-semibold tracking-[0.3em] text-indigo-600">
              01 / 04
            </span>
            <span className="h-px w-10 bg-indigo-500" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              About
            </span>
          </div>
          <span className="hidden font-mono text-xs text-slate-400 sm:block">
            TANISH ARORA — 2026
          </span>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:gap-24">
          {/* Main statement */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <p className="mb-7 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-indigo-600">
              A developer in progress
            </p>
            <h2 className="max-w-3xl text-[clamp(3.4rem,8vw,7.8rem)] font-semibold leading-[0.88] tracking-[-0.075em] text-slate-900">
              I build things
              <span className="block text-indigo-600">that hold up.</span>
            </h2>

            <div className="mt-12 flex max-w-xl gap-5 border-l-2 border-indigo-500 pl-5 sm:pl-7">
              <p className="text-lg leading-relaxed text-slate-600 sm:text-xl">
                I&apos;m Tanish — a Computer Science student at VIT Chennai who
                enjoys turning complicated systems into products that feel
                simple, useful, and unmistakably human.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href="/Tanish_Arora_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 border-b border-slate-900 pb-2 text-sm font-semibold text-slate-900 transition-colors hover:border-indigo-600 hover:text-indigo-600"
              >
                Read the résumé
                <MoveUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <Link
                to="contact"
                smooth
                duration={700}
                className="group inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
              >
                Start a conversation
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>

            <div className="mt-20 hidden items-center gap-4 text-slate-400 lg:flex">
              <ArrowDownRight className="h-5 w-5 animate-bounce" />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em]">
                Keep scrolling
              </span>
            </div>
          </motion.div>

          {/* Principles rail — intentionally open, not card-based */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="self-end"
          >
            <div className="mb-6 flex items-center justify-between border-b border-slate-900/15 pb-3">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-slate-400">
                How I work
              </span>
            </div>

            <div>
              {principles.map((principle, index) => (
                <motion.article
                  key={principle.number}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.18 + index * 0.1 }}
                  className="group grid grid-cols-[2.5rem_1fr] gap-4 border-b border-slate-900/15 py-7 first:pt-2"
                >
                  <span className="pt-1 font-mono text-xs text-indigo-500">
                    {principle.number}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-slate-900 transition-colors group-hover:text-indigo-600 sm:text-2xl">
                      {principle.title}
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-500 sm:text-base">
                      {principle.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>

        {/* A loose status line gives the section an ending, not another panel. */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-20 flex flex-col gap-5 border-t border-slate-900/15 pt-5 text-xs sm:flex-row sm:items-center sm:justify-between"
        >
          <span className="font-mono uppercase tracking-[0.25em] text-slate-400">
            Currently exploring
          </span>
          <div className="flex flex-wrap gap-x-5 gap-y-2 font-medium text-slate-600">
            <span>distributed systems</span>
            <span className="text-indigo-500">✦</span>
            <span>generative AI</span>
            <span className="text-indigo-500">✦</span>
            <span>better interfaces</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
