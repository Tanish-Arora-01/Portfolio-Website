import React, { useEffect } from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { HiArrowNarrowRight } from "react-icons/hi";
import Laptop from "./Laptop";
import SpotlightButton from "./SpotlightButton";

const Hero = () => {
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

  return (
    <section
      name="home"
      className="w-full text-text overflow-hidden relative"
      style={{ height: "100dvh" }}
    >
      <div
        className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between relative z-10"
        style={{ height: "100dvh" }}
      >
        {/* TEXT SIDE */}
        <div className="w-full lg:w-1/2 mt-20 md:mt-0">
          {/* Original Text Styles Preserved, Animated via CSS */}
          <p
            style={{ animation: 'fadeSlideUp 0.6s ease forwards' }}
            className="opacity-0 text-lg font-semibold tracking-widest uppercase bg-gradient-to-r from-[#38bdf8] via-[#818cf8] to-[#a855f7] bg-clip-text text-transparent"
          >
            Hi, my name is
          </p>

          <h1
            style={{ animation: 'fadeSlideUp 0.7s ease forwards', animationDelay: '0.15s' }}
            className="opacity-0 text-5xl sm:text-8xl font-bold text-white leading-tight mb-2 drop-shadow-[0_0_25px_rgba(168,85,247,0.25)]"
          >
            Tanish Arora
          </h1>

          <h2
            style={{ animation: 'fadeSlideUp 0.7s ease forwards', animationDelay: '0.3s' }}
            className="opacity-0 text-3xl sm:text-5xl font-bold text-gray-400 mb-6"
          >
            Full Stack Developer
          </h2>

          <p
            style={{ animation: 'fadeSlideUp 0.7s ease forwards', animationDelay: '0.6s' }}
            className="opacity-0 text-gray-200 py-2 max-w-lg text-lg mb-8 leading-relaxed"
          >
            Computer Science Engineering student at{" "}
            <span className="text-white font-semibold">VIT Chennai</span>.
            Passionate about Development, System Design, DevOps, scalable cloud
            systems, and building high-performance web experiences.
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
            <div className="flex gap-4 px-6 py-3 rounded-2xl bg-white/10 border border-white/10">
              <a
                href="https://github.com/Tanish-Arora-01"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white hover:scale-110 transition-[color,transform] duration-300"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://leetcode.com/u/Tanish_1011/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white hover:scale-110 transition-[color,transform] duration-300"
              >
                <SiLeetcode size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/tanish-arora-1105ta"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white hover:scale-110 transition-[color,transform] duration-300"
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
          <Laptop />
        </div>
      </div>
    </section>
  );
};

export default Hero;
