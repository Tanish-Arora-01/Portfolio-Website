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

export function GlassProjectCard({
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
}) {
  return (
    <Dialog>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className={cn("w-full max-w-[450px] mx-auto", className)}
      >
        <Card className="group relative h-full flex flex-col overflow-hidden rounded-2xl border-border/50 bg-card/30 backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 p-0 m-0">
          {/* Image Section */}
          <div className="relative w-full aspect-video overflow-hidden shrink-0 bg-muted">
            <motion.img
              src={image}
              alt={title}
              className="absolute inset-0 h-full w-full object-cover m-0 p-0 transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-60 pointer-events-none" />

            {/* Tags (Bottom Left) */}
            <div className="absolute bottom-3 left-3 flex flex-wrap gap-2 pr-3 pointer-events-none">
              {tags?.slice(0, 3).map((tag, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-background/50 backdrop-blur-sm text-xs"
                >
                  {tag}
                </Badge>
              ))}
              {tags?.length > 3 && (
                <Badge
                  variant="secondary"
                  className="bg-background/50 backdrop-blur-sm text-xs"
                >
                  +{tags.length - 3}
                </Badge>
              )}
            </div>

            {/* Hover Overlay Actions (Now with 3 Buttons) */}
            <div className="absolute inset-0 flex items-center justify-center gap-3 bg-background/60 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {/* 1. Details Button (Triggers Dialog) */}
              <DialogTrigger asChild>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-3 py-2 text-xs font-medium text-foreground shadow-lg hover:bg-white/20 transition-colors"
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
                    className="flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-3 py-2 text-xs font-medium text-foreground shadow-lg hover:bg-white/20 transition-colors"
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
          <div className="flex flex-col gap-4 p-5 grow">
            <div className="space-y-2 grow">
              <h3 className="text-xl font-semibold leading-tight tracking-tight text-foreground transition-colors group-hover:text-primary">
                {title}
              </h3>
              {/* line-clamp-3 keeps the grid uniform */}
              <p className="line-clamp-3 text-sm text-muted-foreground leading-relaxed">
                {excerpt}
              </p>
            </div>

            {/* Author/Date Footer */}
            <div className="flex items-center justify-between border-t border-border/50 pt-4 mt-auto">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8 border border-border/50">
                  <AvatarImage src={author.avatar} alt={author.name} />
                  <AvatarFallback>{author.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col text-xs">
                  <span className="font-medium text-foreground">
                    {author.name}
                  </span>
                  <span className="text-muted-foreground">{date}</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* ========================================== */}
      {/* THE POP-UP (DIALOG) MODAL                  */}
      {/* ========================================== */}
      <DialogContent className="sm:max-w-[600px] bg-background/60 backdrop-blur-2xl border-border/50 shadow-2xl overflow-hidden p-0 gap-0">
        <div className="w-full aspect-video relative">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-90" />
        </div>

        <div className="p-6 pt-0 relative z-10 flex flex-col gap-6">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold leading-tight">
              {title}
            </DialogTitle>
          </DialogHeader>

          {/* Full, un-clamped description */}
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            {excerpt}
          </p>

          {/* All Tech Tags */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {tags?.map((tag, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Modal Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border/50">
            {!disableGithub && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="flex-1"
              >
                <button className="w-full flex items-center justify-center gap-2 rounded-xl bg-secondary/50 backdrop-blur-md px-4 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition-colors">
                  <Github className="h-5 w-5" />
                  View Source Code
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
                <button className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors">
                  <ExternalLink className="h-5 w-5" />
                  Visit Live Demo
                </button>
              </a>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
