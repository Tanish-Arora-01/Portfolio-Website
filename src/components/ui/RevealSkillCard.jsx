import React, { forwardRef, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

/* ─── Skill Card Body (renders in both plain & accented modes) ─── */
const SkillCardBody = forwardRef(
  ({ title, icon, skills, scheme = "plain", className, ...rest }, ref) => {
    const isAccent = scheme === "accented";

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col p-8 h-full rounded-3xl",
          isAccent
            ? "text-white"
            : "bg-white/40 backdrop-blur-md border border-black/10 text-slate-700 shadow-lg shadow-black/5",
          className
        )}
        style={
          isAccent
            ? { backgroundColor: "var(--accent-color)" }
            : undefined
        }
        {...rest}
      >
        {/* ── Header ── */}
        <div
          className={cn(
            "flex items-center gap-4 pb-5 mb-5 border-b",
            isAccent ? "border-white/20" : "border-black/10"
          )}
        >
          <span
            className={cn(
              "w-14 h-14 flex items-center justify-center rounded-full shrink-0 text-lg",
              isAccent
                ? "bg-white/20 text-white border border-white/25"
                : "bg-white text-slate-600 border border-slate-200 shadow-sm"
            )}
          >
            {icon}
          </span>
          <h3
            className={cn(
              "text-xl font-semibold tracking-tight",
              isAccent ? "text-white" : "text-slate-900"
            )}
          >
            {title}
          </h3>
        </div>

        {/* ── Skill Tags ── */}
        <div className="flex flex-wrap gap-2.5">
          {skills.map((skill) => (
            <span
              key={skill}
              className={cn(
                "px-3.5 py-1.5 rounded-full text-sm font-normal transition-colors duration-200 cursor-default select-none",
                isAccent
                  ? "bg-white/15 text-white/90 border border-white/20 hover:bg-white/25"
                  : "bg-white/70 text-slate-600 border border-slate-200/80 hover:bg-white hover:text-slate-900 hover:border-slate-300"
              )}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    );
  }
);
SkillCardBody.displayName = "SkillCardBody";


/* ─── Reveal Card Container (GSAP clip-path animation) ─── */
export const RevealSkillCard = forwardRef(
  (
    {
      title,
      icon,
      skills,
      accent = "#6366f1",
      textOnAccent = "#ffffff",
      className,
      ...rest
    },
    ref
  ) => {
    const holderRef = useRef(null);
    const overlayRef = useRef(null);

    const assignRef = useCallback(
      (el) => {
        holderRef.current = el;
        if (typeof ref === "function") ref(el);
        else if (ref) ref.current = el;
      },
      [ref]
    );

    /*
     * p-8 = 32px padding. Icon is w-14 = 56px. 
     * Center of icon circle: x = 32 + 28 = 60px, y = 32 + 20(pb-5 top offset) + 28 = ~60px
     * Start radius = 36px → forms a colored halo ring around the icon (28px radius)
     */
    const startClip = "circle(36px at 60px 60px)";
    const expandClip = "circle(150% at 60px 60px)";

    useGSAP(
      () => {
        gsap.set(overlayRef.current, { clipPath: startClip });
      },
      { scope: holderRef }
    );

    const reveal = () => {
      gsap.killTweensOf(overlayRef.current);
      gsap.to(overlayRef.current, {
        clipPath: expandClip,
        duration: 0.8,
        ease: "sine.inOut",
      });
    };

    const conceal = () => {
      gsap.killTweensOf(overlayRef.current);
      gsap.to(overlayRef.current, {
        clipPath: startClip,
        duration: 0.65,
        ease: "sine.inOut",
      });
    };

    return (
      <div
        ref={assignRef}
        onMouseEnter={reveal}
        onMouseLeave={conceal}
        style={{
          "--accent-color": accent,
          "--on-accent-foreground": textOnAccent,
        }}
        className={cn(
          "relative overflow-hidden rounded-3xl h-full transform-gpu",
          className
        )}
        {...rest}
      >
        {/* Base layer */}
        <div className="h-full">
          <SkillCardBody
            title={title}
            icon={icon}
            skills={skills}
            scheme="plain"
          />
        </div>

        {/* Accent overlay (clip-path animated) */}
        <div
          ref={overlayRef}
          className="absolute inset-0 h-full w-full z-10"
        >
          <SkillCardBody
            title={title}
            icon={icon}
            skills={skills}
            scheme="accented"
          />
        </div>
      </div>
    );
  }
);

RevealSkillCard.displayName = "RevealSkillCard";
export default RevealSkillCard;
