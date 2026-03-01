"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, type Project } from "@/lib/data";
import { ProjectRow } from "./project-card";
import { cn } from "@/lib/utils";

type FilterCategory = "all" | Project["category"];

const categories: { value: FilterCategory; label: string }[] = [
  { value: "all", label: "All" },
  { value: "web", label: "Web" },
  { value: "mobile", label: "Mobile" },
  { value: "opensource", label: "Open Source" },
];

export function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div>
      {/* Filter Tabs - Left aligned, minimal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex gap-1 mb-12 border-b border-border/50"
      >
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => setActiveFilter(category.value)}
            className={cn(
              "px-4 py-3 text-sm font-medium transition-colors relative",
              activeFilter === category.value
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {category.label}
            {activeFilter === category.value && (
              <motion.div
                layoutId="activeFilter"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        ))}
        <div className="ml-auto text-sm text-muted-foreground self-center pr-4">
          {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""}
        </div>
      </motion.div>

      {/* Projects List */}
      <div className="divide-y divide-border/50">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectRow project={project} index={index} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <p className="text-muted-foreground">
            No projects in this category yet.
          </p>
        </motion.div>
      )}
    </div>
  );
}
