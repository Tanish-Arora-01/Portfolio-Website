import React, { useEffect } from "react";
import { motion } from "framer-motion";
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
          {/* Original Text Styles Preserved */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-accent text-lg font-semibold tracking-widest uppercase"
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-5xl sm:text-8xl font-bold text-white leading-tight mb-2 drop-shadow-[0_0_25px_rgba(168,85,247,0.25)]"
          >
            Tanish Arora
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-3xl sm:text-5xl font-bold text-gray-400 mb-6"
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gray-200 py-2 max-w-lg text-lg mb-8 leading-relaxed"
          >
            Computer Science Engineering student at{" "}
            <span className="text-white font-semibold">VIT Chennai</span>.
            Passionate about Development, System Design, DevOps, scalable cloud
            systems, and building high-performance web experiences.
          </motion.p>

          {/* NEW BUTTON FORMAT: Action Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-6 items-start sm:items-center"
          >
            <Link to="projects" smooth duration={600}>
              <SpotlightButton className="px-8 py-4 text-base font-medium">
                View My Work
                <HiArrowNarrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </SpotlightButton>
            </Link>

            {/* Glass Social Dock */}
            <div className="flex gap-4 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <a
                href="https://github.com/Tanish-Arora-01"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://leetcode.com/u/Tanish_1011/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
              >
                <SiLeetcode size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/tanish-arora-1105ta"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
              >
                <FaLinkedin size={22} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* 3D SIDE (Unchanged) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:flex lg:w-1/2 h-[520px] xl:h-full justify-center items-center"
        >
          <Laptop />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
