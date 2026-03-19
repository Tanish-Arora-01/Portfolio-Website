import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Badge } from "./badge";
import { Card } from "./card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";
import { ExternalLink, Github, Info } from "lucide-react";

export function GlassBlogCard({
  title,
  excerpt,
  image,
  author = {
    name: "Tanish Arora",
    avatar: "https://github.com/Tanish-Arora-01.png",
  },
  date,
  tags,
  github,
  demo,
  demoDisabled,
  disableGithub,
  className,
  index = 0,
}) {
  return (
    <Dialog>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "100px" }}
        transition={{
          delay: index * 0.15,
          type: "spring",
          stiffness: 80,
          damping: 14,
        }}
        whileHover={{ y: -10, transition: { duration: 0.3, ease: "easeOut" } }}
        className={cn("w-full h-full will-change-[transform,opacity] transform-gpu backface-hidden cursor-pointer", className)}
      >
        <Card className="group relative h-full flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-white/50 backdrop-blur-md shadow-lg shadow-black/5 transition-[border-color,box-shadow,transform] duration-300 hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/15 p-0 m-0">
          {/* Image Section */}
          <div className="relative w-full aspect-video overflow-hidden shrink-0 bg-muted">
            <img
              src={image}
              alt={title}
              fetchPriority="high"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover m-0 p-0 transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-60 pointer-events-none" />

            {/* Tags (Bottom Left) */}
            <div className="absolute bottom-3 left-3 flex flex-wrap gap-2 pr-3 pointer-events-none">
              {tags?.slice(0, 3).map((tag, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-white/70 backdrop-blur-sm text-xs text-slate-700 border border-black/5"
                >
                  {tag}
                </Badge>
              ))}
              {tags?.length > 3 && (
                <Badge
                  variant="secondary"
                  className="bg-white/70 backdrop-blur-sm text-xs text-slate-700 border border-black/5"
                >
                  +{tags.length - 3}
                </Badge>
              )}
            </div>

            {/* Hover Overlay Actions (Now with 3 Buttons) */}
            <div className="absolute inset-0 flex flex-wrap content-center items-center justify-center gap-2 p-2 bg-white/70 backdrop-blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {/* 1. Details Button (Triggers Dialog) */}
              <DialogTrigger asChild>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 rounded-full bg-black/5 backdrop-blur-md border border-black/10 px-3 py-2 text-xs font-medium text-slate-800 shadow-sm hover:bg-black/10 transition-colors"
                >
                  <Info className="h-4 w-4" />
                  Details
                </motion.button>
              </DialogTrigger>

              {/* 2. Code Button */}
              {!disableGithub && (
                <a href={github} target="_blank" rel="noreferrer">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 rounded-full bg-black/5 backdrop-blur-md border border-black/10 px-3 py-2 text-xs font-medium text-slate-800 shadow-sm hover:bg-black/10 transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </motion.button>
                </a>
              )}

              {/* 3. Demo Button */}
              {!demoDisabled && (
                <a href={demo} target="_blank" rel="noreferrer">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 rounded-full bg-primary px-3 py-2 text-xs font-medium text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </motion.button>
                </a>
              )}
            </div>
          </div>

          {/* Content Section (Truncated for Grid) */}
          <div className="flex flex-col gap-3 p-4 grow">
            <div className="space-y-2 grow">
              <h3 className="text-lg font-semibold leading-tight tracking-tight text-slate-900 transition-colors group-hover:text-indigo-700">
                {title}
              </h3>
              {/* line-clamp-3 keeps the grid uniform */}
              <p className="line-clamp-3 text-sm text-slate-600 leading-relaxed">
                {excerpt}
              </p>
            </div>

            {/* Author/Date Footer */}
            <div className="flex items-center justify-between border-t border-black/10 pt-3 mt-auto">
              <span className="text-xs text-slate-500">{date}</span>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* ========================================== */}
      {/* THE POP-UP (DIALOG) MODAL                  */}
      {/* ========================================== */}
      <DialogContent className="sm:max-w-[640px] bg-white backdrop-blur-2xl border border-black/8 shadow-2xl rounded-3xl overflow-hidden p-0 gap-0">
        {/* Hero Image */}
        <div className="w-full aspect-[16/9] relative overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />

          {/* Title overlapping image bottom */}
          <div className="absolute bottom-0 left-0 right-0 px-8 pb-2">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold leading-snug text-slate-900 drop-shadow-sm">
                {title}
              </DialogTitle>
            </DialogHeader>
          </div>
        </div>

        {/* Content body */}
        <div className="px-8 pb-8 pt-4 flex flex-col gap-5">
          {/* Description */}
          <p className="text-[15px] text-slate-600 leading-relaxed">
            {excerpt}
          </p>

          {/* Tech Stack */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {tags?.map((tag, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-indigo-50/80 text-indigo-700 border border-indigo-100 px-3 py-1 text-xs font-medium rounded-lg"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
            {!disableGithub && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="flex-1"
              >
                <button className="w-full flex items-center justify-center gap-2 rounded-xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-200 transition-colors">
                  <Github className="h-4 w-4" />
                  Source Code
                </button>
              </a>
            )}
            {!demoDisabled && (
              <a
                href={demo}
                target="_blank"
                rel="noreferrer"
                className="flex-1"
              >
                <button className="w-full flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-500/20 hover:bg-indigo-700 transition-colors">
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </button>
              </a>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
