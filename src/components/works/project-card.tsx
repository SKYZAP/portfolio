"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/lib/data";

interface ProjectRowProps {
  project: Project;
  index: number;
}

export function ProjectRow({ project, index }: ProjectRowProps) {
  return (
    <motion.article
      initial={{ opacity: 0, x: -24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
      className="group border-b border-border/50 last:border-b-0"
    >
      <div className="py-8 md:py-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
        {/* Left: Visual */}
        <div className="flex-shrink-0 w-full md:w-48 lg:w-56">
          <div className="relative aspect-[16/10] rounded-xl bg-gradient-to-br from-muted to-muted/50 overflow-hidden group-hover:from-primary/10 group-hover:to-primary/5 transition-colors duration-500">
            {/* Abstract shape */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-lg bg-primary/20 rotate-12 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500" />
            </div>
            {/* Category badge */}
            <div className="absolute bottom-2 left-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-background/80 backdrop-blur-sm">
                {project.category}
              </span>
            </div>
          </div>
        </div>

        {/* Middle: Content */}
        <div className="flex-1 min-w-0">
          <h3 className="text-xl md:text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-2 md:line-clamp-none md:max-w-2xl">
            {project.longDescription || project.description}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md bg-muted text-xs font-mono text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex md:flex-col gap-3 flex-shrink-0">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              View
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary/50 hover:text-primary text-sm font-medium transition-colors"
            >
              <Github className="h-4 w-4" />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
