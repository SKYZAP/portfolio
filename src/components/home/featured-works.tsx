"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/lib/data";

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: 8 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      style={{ perspective: 800 }}
    >
      <div className="group h-full rounded-2xl bg-card/40 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 overflow-hidden">
        {/* Project Visual */}
        <div className="relative h-56 bg-gradient-to-br from-muted to-muted/50 overflow-hidden">
          {/* Abstract visual */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 rotate-12 group-hover:rotate-6 transition-transform duration-500" />
              <div className="absolute top-2 left-2 w-16 h-16 rounded-xl bg-primary/20 -rotate-6 group-hover:rotate-3 transition-transform duration-500" />
            </div>
          </div>
          
          {/* Category */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-mono uppercase tracking-wider">
              {project.category}
            </span>
          </div>

          {/* Link overlay */}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 p-2 rounded-full bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-primary-foreground"
              aria-label={`View ${project.title} live`}
            >
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
            {project.description}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 rounded-md bg-muted text-xs font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function FeaturedWorks() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);
  const desktopProjects = featuredProjects.slice(0, 2);

  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <p className="text-sm text-muted-foreground font-mono mb-2">Selected Work</p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Recent Projects
            </h2>
          </div>
          <Link 
            href="/works" 
            className="hidden md:flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            View all
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Mobile: Horizontal Scroll */}
        <div className="md:hidden -mx-4 px-4">
          <div className="flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className="flex-shrink-0 w-[85vw] snap-start"
              >
                <ProjectCard project={project} index={index} />
              </div>
            ))}
            
            {/* View All Card - Mobile */}
            <div className="flex-shrink-0 w-[150px] snap-start">
              <Link
                href="/works"
                className="flex flex-col items-center justify-center h-full min-h-[360px] rounded-2xl border border-dashed border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all group"
              >
                <ArrowRight className="h-6 w-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all mb-2" />
                <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                  View all
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop: 2-Card Grid */}
        <div className="hidden md:block">
          <div className="grid grid-cols-2 gap-6">
            {desktopProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
