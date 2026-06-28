import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "./ui/badge";
import { cn } from "../lib/utils";

const experiences = [
  {
    id: 1,
    company: "Sahii.in",
    role: "Full Stack Developer Intern",
    duration: "May 2026 – Present",
    description:
      "Engineered new full-stack features while modernizing architecture to drastically improve scalability, SEO, and overall user experience.",
    points: [
      "Migrated the primary database to the cloud to significantly improve system scalability and reliability for a high-traffic e-commerce platform.",
      "Configured Cloudflare for robust DNS management and implemented R2/E2 object storage for optimized asset delivery.",
      "Engineered secure payment controller integrations using Razorpay for seamless and reliable transaction processing.",
      "Patched critical security vulnerabilities in the legacy codebase to ensure safe user data handling.",
      "Modernized the frontend architecture using EJS, Node.js, and MongoDB, implementing targeted UI changes for better UX.",
      "Optimized the application for maximum speed, SEO, and Core Web Vitals to enhance platform reach.",
      "Developed responsive, high-performance UI components and seamlessly integrated them with backend infrastructure."
    ],
  },
  {
    id: 2,
    company: "HCLTech",
    role: "AI & GenAI Intern",
    duration: "May 2026 – Expected Jul 2026",
    description:
      "Researching and contributing to advanced Artificial Intelligence and Generative AI initiatives.",
    points: [
      "Building, optimizing, and evaluating AI-driven applications and learning models under expert mentorship.",
      "Selected for a specialized program to research and contribute to advanced Artificial Intelligence and Generative AI initiatives."
    ],
  }
];

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const scrollRef = useRef(null);
  const [canScroll, setCanScroll] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  return (
    <section
      name="experience"
      className="relative min-h-svh overflow-hidden px-6 py-24 lg:py-32 flex flex-col justify-center"
    >
      <div className="mx-auto max-w-screen-xl w-full">
        <div className="mb-12 text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold inline border-b-4 border-primary"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500">
              Experience
            </span>
          </motion.h2>
          <p className="py-6 text-muted-foreground text-lg max-w-2xl">
            My professional journey and internships in Software Development.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 relative">
          {/* Timeline - Left Column */}
          <div className="lg:w-1/3 relative">
            {/* The Line Track (Background) */}
            <div className="absolute top-[17px] left-0 right-0 h-[2px] bg-border/30 lg:top-0 lg:bottom-0 lg:left-[17px] lg:right-auto lg:w-[2px] lg:h-auto" />
            
            {/* Desktop Animated Line (Vertical) */}
            <motion.div 
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:block absolute top-0 bottom-0 left-[17px] w-[2px] bg-gradient-to-b from-indigo-500 via-indigo-500/50 to-transparent origin-top"
            />

            {/* Mobile Animated Line (Horizontal) */}
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
              className="block lg:hidden absolute top-[17px] left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 via-indigo-500/50 to-transparent origin-left"
            />

            <div className="flex flex-row lg:flex-col gap-4 lg:gap-8 relative z-10 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden">
              {experiences.map((exp, index) => {
                const isActive = index === activeIndex;
                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: -25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: 0.3 + (index * 0.4), duration: 0.8, type: "spring", stiffness: 70, damping: 15 }}
                    className={cn(
                      "flex flex-col lg:flex-row items-center lg:items-start gap-3 lg:gap-6 cursor-pointer group transition-opacity shrink-0 w-48 lg:w-auto snap-start",
                      isActive ? "opacity-100" : "opacity-50 hover:opacity-100"
                    )}
                    onClick={() => {
                      setActiveIndex(index);
                      setIsLocked(true);
                      setHasScrolled(false); // Reset on click
                    }}
                    onMouseEnter={() => {
                      if (!isLocked && index !== activeIndex) {
                        setActiveIndex(index);
                        setHasScrolled(false); // Reset on hover switch
                      }
                    }}
                  >
                    {/* Timeline Dot Wrapper */}
                    <div className="h-[36px] w-[36px] flex items-center justify-center shrink-0 lg:h-auto lg:w-auto lg:mt-1.5 lg:ml-[12px]">
                      <div
                        className={cn(
                          "h-3 w-3 rounded-full border-2 transition-all duration-300 relative z-10",
                          isActive
                            ? "border-indigo-600 bg-indigo-600 scale-125 shadow-[0_0_10px_rgba(79,70,229,0.5)]"
                            : "border-muted-foreground bg-background group-hover:border-indigo-400"
                        )}
                      />
                    </div>

                    {/* Timeline Summary Item */}
                    <div className="flex flex-col gap-1 text-center lg:text-left w-full px-2 lg:px-0">
                      <h3
                        className={cn(
                          "text-lg lg:text-xl font-bold transition-colors line-clamp-1",
                          isActive ? "text-indigo-600" : "text-foreground"
                        )}
                      >
                        {exp.company}
                      </h3>
                      <p className="text-sm font-medium text-foreground/80 line-clamp-1">
                        {exp.role}
                      </p>
                      <p className="text-xs text-muted-foreground font-mono mt-1">
                        {exp.duration}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Details - Right Column */}
          <div className="lg:w-2/3 relative">
            <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-background/45 p-6 backdrop-blur-2xl md:p-10 shadow-xl shadow-black/5 h-[500px] md:h-[600px] flex flex-col">

              <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.03] via-transparent to-transparent pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  ref={scrollRef}
                  initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                  transition={{ duration: 0.3 }}
                  className="relative h-full flex flex-col overflow-y-auto pr-2 md:pr-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                  onAnimationComplete={() => {
                    if (scrollRef.current) {
                      setCanScroll(scrollRef.current.scrollHeight > scrollRef.current.clientHeight);
                    }
                  }}
                  onScroll={(e) => {
                    if (e.target.scrollTop > 5) {
                      setHasScrolled(true);
                    }
                  }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-3xl font-bold text-foreground mb-2">
                        {experiences[activeIndex].role}
                      </h3>
                      <div className="flex items-center gap-3">
                        <span className="text-lg font-semibold text-indigo-600">
                          @ {experiences[activeIndex].company}
                        </span>
                        <Badge variant="outline" className="text-xs bg-background/50 backdrop-blur-sm">
                          {experiences[activeIndex].duration}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <p className="text-base text-foreground/80 mb-8 leading-relaxed">
                    {experiences[activeIndex].description}
                  </p>

                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      Key Responsibilities & Achievements
                    </h4>
                    <ul className="flex flex-col gap-3">
                      {experiences[activeIndex].points.map((point, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1, duration: 0.3 }}
                          className="flex items-start gap-3"
                        >
                          <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
                          <span className="text-[15px] leading-relaxed text-foreground/75">
                            {point}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Scroll Indicator */}
            <AnimatePresence>
              {canScroll && !hasScrolled && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1"
                >
                  <motion.button
                    animate={{ y: [0, -8, 0] }}
                    transition={{ 
                      duration: 0.6, 
                      repeat: 3, 
                      repeatType: "loop",
                      ease: "easeInOut"
                    }}
                    onClick={() => {
                      if (scrollRef.current) {
                        scrollRef.current.scrollBy({ top: 150, behavior: "smooth" });
                      }
                    }}
                    className="bg-indigo-600 text-white rounded-full p-2 shadow-lg shadow-indigo-500/30 border border-white/20 backdrop-blur-md cursor-pointer hover:bg-indigo-500 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </motion.button>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-700 bg-indigo-100/90 px-3 py-1 rounded-full shadow-sm backdrop-blur-md border border-indigo-200/50">
                    Scroll me
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
