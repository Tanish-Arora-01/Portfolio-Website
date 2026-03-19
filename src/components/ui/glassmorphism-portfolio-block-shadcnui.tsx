import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Code2,
} from "lucide-react";

type Highlight = {
  title: string;
  description: string;
};

type SocialLink = {
  label: string;
  handle: string;
  href: string;
  icon: LucideIcon;
};

const highlights: Highlight[] = [
  {
    title: "Core Stack",
    description:
      "React, Node.js, Express, MongoDB, REST APIs — supported by strong fundamentals in Data Structures, Databases, OS, and Networking.",
  },
  {
    title: "Notable Builds",
    description:
      "Privacy-focused document redaction engine (Python + OpenCV), containerized marketplace with CI/CD, and real-time sports update app.",
  },
  {
    title: "DevOps & Cloud",
    description:
      "Actively working with AWS, Docker, Linux, and GitHub Actions — focused on the intersection of Full-Stack Engineering and Cloud Infrastructure.",
  },
];

const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    handle: "Tanish-Arora-01",
    href: "https://github.com/Tanish-Arora-01",
    icon: Github,
  },
  {
    label: "LinkedIn",
    handle: "Tanish Arora",
    href: "https://www.linkedin.com/in/tanish-arora-1105ta",
    icon: Linkedin,
  },
  {
    label: "LeetCode",
    handle: "Tanish_1011",
    href: "https://leetcode.com/u/Tanish_1011/",
    icon: Code2,
  },
];

const listVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
    },
  },
};

export function GlassmorphismPortfolioBlock() {
  return (
    <section
      name="about"
      className="relative min-h-dvh overflow-hidden px-6 py-24 lg:py-32 flex flex-col justify-center"
    >
      <div className="mx-auto max-w-screen-xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl border border-border/50 bg-background/45 p-8 backdrop-blur-2xl md:p-12"
        >
          {/* Glass gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.05] via-transparent to-transparent pointer-events-none" />

          <div className="relative grid gap-12 lg:grid-cols-2">
            {/* Left column - Main content */}
            <div className="space-y-8">
              <Badge
                variant="outline"
                className="inline-flex items-center gap-2 rounded-full border-border/50 bg-background/55 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-foreground/70 backdrop-blur transition-colors hover:bg-background/70"
              >
                About Me
              </Badge>

              <div className="space-y-4">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-2xl font-semibold tracking-tight md:text-3xl"
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500">Tanish Arora, Full Stack Developer &amp; Cloud Enthusiast</span>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="max-w-xl text-base leading-relaxed text-foreground/70 md:text-md"
                >
                  Computer Science Engineering student at{" "}
                  <span className="text-foreground font-semibold">
                    VIT Chennai
                  </span>{" "}
                  (2023–2027) with a{" "}
                  <span className="text-indigo-600 font-bold">
                    CGPA of 8.69
                  </span>
                  . Building production-ready full-stack applications with a
                  focus on writing scalable, maintainable systems.
                </motion.p>
              </div>

              {/* Highlights grid */}
              <div className="grid gap-4 sm:grid-cols-1">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.3, ease: "easeOut" } }}
                    className="group relative overflow-hidden rounded-2xl border border-border/40 bg-background/60 p-5 backdrop-blur transition-all hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/5 cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10" />
                    <div className="relative space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-600">
                        {item.title}
                      </p>
                      <p className="text-sm leading-relaxed text-foreground/70">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="grid grid-cols-1 gap-4"
              >
                <Button
                  size="lg"
                  onClick={() => {
                    const el = document.querySelector('[name="projects"]');
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="h-12 w-full gap-2 rounded-full px-8 text-sm uppercase tracking-[0.25em] transition-all hover:shadow-lg sm:w-auto"
                >
                  View Projects
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </motion.div>
            </div>

            {/* Right column - Profile card */}
            <div className="relative">
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-b from-indigo-500/15 via-transparent to-transparent blur-3xl" />
              <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[28px] border border-border/50 bg-background/60 p-8 backdrop-blur-xl">
                <div className="flex flex-col items-center text-center">
                  {/* Avatar with glow */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative mb-6"
                  >
                    <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/20 blur-2xl" />
                    <img
                      src="https://github.com/Tanish-Arora-01.png"
                      alt="Tanish Arora"
                      className="relative h-32 w-32 rounded-full border border-border/40 object-cover"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-1"
                  >
                    <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                      Tanish Arora
                    </h3>
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-foreground/45">
                      Full Stack Developer · Cloud & DevOps
                    </p>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-4 max-w-sm text-sm leading-relaxed text-foreground/70"
                  >
                    Passionate about Development, System Design, DevOps,
                    scalable cloud systems, and building high-performance web
                    experiences.
                  </motion.p>

                  {/* Quick Stats */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-6 grid w-full grid-cols-3 gap-3"
                  >
                    {[
                      { label: "CGPA", value: "8.69" },
                      { label: "University", value: "VIT" },
                      { label: "Year", value: "2027" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-xl border border-border/40 bg-background/50 px-3 py-3 text-center backdrop-blur"
                      >
                        <p className="text-lg font-bold text-indigo-600">
                          {stat.value}
                        </p>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/40">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* Social links */}
                <motion.div
                  variants={listVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  className="mt-8 flex flex-col gap-3"
                >
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        variants={itemVariants}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between rounded-2xl border border-border/40 bg-background/70 px-4 py-3 text-left transition-all hover:-translate-y-1 hover:border-indigo-500/30 hover:bg-background/80 hover:shadow-lg hover:shadow-indigo-500/5"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.985 }}
                      >
                        <div className="flex items-center gap-3">
                          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border/40 bg-background/70 text-foreground/80 transition-all">
                            <Icon className="h-4 w-4" />
                          </span>
                          <div>
                            <p className="text-sm font-semibold text-foreground">
                              {social.label}
                            </p>
                            <p className="text-xs text-foreground/60">
                              {social.handle}
                            </p>
                          </div>
                        </div>
                        <ArrowUpRight className="h-4 w-4 text-foreground/40 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground/70" />
                      </motion.a>
                    );
                  })}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
