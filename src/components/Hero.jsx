import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { HiArrowNarrowRight } from "react-icons/hi";
import Laptop from "./Laptop";
import SpotlightButton from "./SpotlightButton";

const Hero = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const setAppHeight = () => {
      const height = window.visualViewport
        ? window.visualViewport.height
        : window.innerHeight;

      document.documentElement.style.setProperty("--app-height", `${height}px`);
    };

    setAppHeight();

    window.visualViewport?.addEventListener("resize", setAppHeight);
    window.visualViewport?.addEventListener("scroll", setAppHeight);
    window.addEventListener("orientationchange", setAppHeight);

    return () => {
      window.visualViewport?.removeEventListener("resize", setAppHeight);
      window.visualViewport?.removeEventListener("scroll", setAppHeight);
      window.removeEventListener("orientationchange", setAppHeight);
    };
  }, []);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const syncDesktopState = () => setIsDesktop(desktopQuery.matches);

    syncDesktopState();
    desktopQuery.addEventListener("change", syncDesktopState);

    return () => desktopQuery.removeEventListener("change", syncDesktopState);
  }, []);

  return (
    <section
      name="home"
      className="w-full text-text overflow-hidden relative"
      style={{ height: "100svh" }}
    >
      {/* Desktop Hero — kept as-is, including the laptop model. */}
      <div
        className="hidden lg:flex max-w-screen-xl mx-auto px-6 flex-col md:flex-row items-center justify-between relative z-10"
        style={{ height: "100svh" }}
      >
        {/* TEXT SIDE */}
        <div className="w-full lg:w-1/2 mt-20 md:mt-0">
          {/* Original Text Styles Preserved, Animated via CSS */}
          <p
            style={{ animation: 'fadeSlideUp 0.6s ease forwards' }}
            className="opacity-0 text-sm md:text-md font-medium tracking-[0.2em] uppercase text-indigo-600"
          >
            Hi, my name is
          </p>

          <h1
            style={{ animation: 'fadeSlideUp 0.7s ease forwards', animationDelay: '0.15s' }}
            className="opacity-0 text-5xl sm:text-8xl font-semibold tracking-tighter leading-tight mb-2"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2d1b69] via-[#4338ca] to-[#6366f1]">Tanish Arora</span>
          </h1>

          <h2
            style={{ animation: 'fadeSlideUp 0.7s ease forwards', animationDelay: '0.3s' }}
            className="opacity-0 text-2xl sm:text-4xl font-light tracking-tight text-slate-500 mb-6"
          >
            Full Stack Developer
          </h2>

          <p
            style={{ animation: 'fadeSlideUp 0.7s ease forwards', animationDelay: '0.6s' }}
            className="opacity-0 text-slate-600 py-2 max-w-lg text-lg font-light mb-8 leading-relaxed"
          >
            Computer Science Engineering student at{" "}
            <span className="text-slate-900 font-medium">VIT Chennai</span>.
            Passionate about Development, System Design, DevOps, scalable cloud
            systems, and building minimalistic high-performance web experiences.
          </p>

          {/* NEW BUTTON FORMAT: Action Row */}
          <div
            style={{ animation: 'fadeSlideUp 0.7s ease forwards', animationDelay: '0.7s' }}
            className="opacity-0 flex flex-col sm:flex-row gap-6 items-start sm:items-center"
          >
            <Link to="projects" smooth duration={600}>
              <SpotlightButton className="px-8 py-4 text-base font-medium">
                View My Work
                <HiArrowNarrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </SpotlightButton>
            </Link>

            {/* Glass Social Dock */}
            <div className="flex gap-4 px-6 py-3 rounded-2xl bg-black/5 border border-black/10">
              <a
                href="https://github.com/Tanish-Arora-01"
                target="_blank"
                rel="noreferrer"
                className="text-slate-500 hover:text-slate-900 hover:scale-110 transition-[color,transform] duration-300"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://leetcode.com/u/Tanish_1011/"
                target="_blank"
                rel="noreferrer"
                className="text-slate-500 hover:text-slate-900 hover:scale-110 transition-[color,transform] duration-300"
              >
                <SiLeetcode size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/tanish-arora-1105ta"
                target="_blank"
                rel="noreferrer"
                className="text-slate-500 hover:text-slate-900 hover:scale-110 transition-[color,transform] duration-300"
              >
                <FaLinkedin size={22} />
              </a>
            </div>
          </div>
        </div>

        {/* 3D SIDE (Unchanged layout, but CSS animated) */}
        <div
          style={{ animation: 'fadeScaleIn 0.8s ease forwards', animationDelay: '0.4s' }}
          className="opacity-0 hidden lg:flex lg:w-1/2 h-[520px] xl:h-full justify-center items-center"
        >
          {isDesktop && <Laptop />}
        </div>
      </div>

      {/* Tablet Hero — uses the wider iPad canvas without loading the laptop model. */}
      <div className="relative z-10 mx-auto hidden h-full w-full max-w-5xl flex-col px-10 pb-10 pt-28 md:flex lg:hidden">
        <div className="flex items-center justify-between border-b border-slate-900/15 pb-4">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs font-semibold tracking-[0.3em] text-indigo-600">00 / 04</span>
            <span className="h-px w-10 bg-indigo-500" />
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Portfolio</span>
          </div>
          <span className="font-mono text-[10px] text-slate-400">2026 / CHENNAI</span>
        </div>

        <div className="grid min-h-0 flex-1 grid-cols-[1.15fr_0.85fr] items-center gap-8 py-10">
          <div className="relative">
            <p style={{ animation: "fadeSlideUp 0.6s ease forwards" }} className="mb-6 font-mono text-xs font-semibold uppercase tracking-[0.28em] text-indigo-600 opacity-0">
              A developer in progress
            </p>
            <h1 style={{ animation: "fadeSlideUp 0.7s ease forwards", animationDelay: "0.12s" }} className="max-w-2xl text-[clamp(5rem,11vw,8rem)] font-semibold leading-[0.78] tracking-[-0.09em] text-slate-900 opacity-0">
              Tanish
              <span className="block text-indigo-600">Arora.</span>
            </h1>
            <p style={{ animation: "fadeSlideUp 0.7s ease forwards", animationDelay: "0.25s" }} className="mt-8 max-w-lg border-l-2 border-indigo-500 pl-5 text-lg leading-relaxed text-slate-600 opacity-0">
              Full Stack Developer working across interfaces, APIs, data, and the infrastructure that keeps products dependable.
            </p>
          </div>

          <div className="relative flex h-full min-h-[22rem] items-center justify-center">
            <div className="absolute h-[19rem] w-[19rem] rounded-full border border-indigo-500/20" />
            <div className="absolute h-[13rem] w-[13rem] rounded-full border border-indigo-500/20" />
            <div className="absolute h-3 w-3 rounded-full bg-indigo-500 shadow-[0_0_28px_rgba(99,102,241,0.8)]" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 font-mono text-[10px] uppercase tracking-[0.35em] text-slate-400">
              Build / deploy / learn
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
              <span className="block font-mono text-[4.5rem] font-semibold leading-none tracking-[-0.12em] text-indigo-600/10">TA</span>
              <span className="mt-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-slate-400">Systems / web / AI</span>
            </div>
          </div>
        </div>

        <div style={{ animation: "fadeSlideUp 0.7s ease forwards", animationDelay: "0.4s" }} className="flex items-center justify-between border-t border-slate-900/15 pt-5 opacity-0">
          <Link to="projects" smooth duration={700}>
            <SpotlightButton className="px-8 py-4 text-sm font-medium">
              View my work
              <HiArrowNarrowRight className="ml-2" />
            </SpotlightButton>
          </Link>
          <div className="flex items-center gap-5 text-slate-500">
            <a href="https://github.com/Tanish-Arora-01" target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-slate-900"><FaGithub size={20} /></a>
            <a href="https://www.linkedin.com/in/tanish-arora-1105ta" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-slate-900"><FaLinkedin size={20} /></a>
          </div>
        </div>
      </div>

      {/* Phone Hero — a separate composition so the laptop is never loaded into the layout. */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-screen-xl flex-col px-6 pb-7 pt-24 md:hidden">
        <div className="flex items-center justify-between border-b border-slate-900/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] font-semibold tracking-[0.25em] text-indigo-600">
              00
            </span>
            <span className="h-px w-8 bg-indigo-500" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
              Portfolio
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">
            Chennai
          </span>
        </div>

        <div className="relative flex flex-1 flex-col justify-center py-8">
          <p
            style={{ animation: "fadeSlideUp 0.6s ease forwards" }}
            className="mb-6 font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-indigo-600 opacity-0"
          >
            A developer in progress
          </p>

          <h1
            style={{ animation: "fadeSlideUp 0.7s ease forwards", animationDelay: "0.12s" }}
            className="max-w-[20rem] text-[clamp(4.5rem,19vw,6.3rem)] font-semibold leading-[0.82] tracking-[-0.08em] text-slate-900 opacity-0"
          >
            Tanish
            <span className="block text-indigo-600">Arora.</span>
          </h1>

          <p
            style={{ animation: "fadeSlideUp 0.7s ease forwards", animationDelay: "0.24s" }}
            className="mt-8 max-w-[18rem] border-l-2 border-indigo-500 pl-4 text-lg leading-relaxed text-slate-600 opacity-0"
          >
            Full Stack Developer building interfaces, APIs, data flows, and
            cloud-backed systems.
          </p>

          <div
            style={{ animation: "fadeSlideUp 0.7s ease forwards", animationDelay: "0.38s" }}
            className="mt-8 grid grid-cols-3 border-y border-slate-900/10 py-4 font-mono text-[9px] uppercase tracking-[0.2em] text-slate-400 opacity-0"
          >
            <span>Build</span>
            <span className="text-center">Deploy</span>
            <span className="text-right">Learn</span>
          </div>
        </div>

        <div
          style={{ animation: "fadeSlideUp 0.7s ease forwards", animationDelay: "0.5s" }}
          className="grid gap-4 opacity-0"
        >
          <Link to="projects" smooth duration={700}>
            <SpotlightButton className="w-full justify-center px-5 py-4 text-sm font-medium">
              View my work
              <HiArrowNarrowRight className="ml-2" />
            </SpotlightButton>
          </Link>

          <div className="flex items-center justify-between text-slate-400">
            <span className="font-mono text-[9px] uppercase tracking-[0.22em]">
              Scroll to explore
            </span>
            <div className="flex items-center gap-4">
              <a href="https://github.com/Tanish-Arora-01" target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-slate-900">
                <FaGithub size={18} />
              </a>
              <a href="https://www.linkedin.com/in/tanish-arora-1105ta" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-slate-900">
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
