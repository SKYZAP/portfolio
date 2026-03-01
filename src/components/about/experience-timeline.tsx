"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";

export function ExperienceTimeline() {
  return (
    <section className="py-16 border-t border-border/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <p className="text-sm text-muted-foreground font-mono mb-2">Career</p>
        <h2 className="text-2xl sm:text-3xl font-bold">
          Work Experience
        </h2>
      </motion.div>

      {/* Left-aligned timeline */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative pl-8"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-primary -translate-x-[3px]" />
              
              {/* Date badge */}
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="text-sm font-mono text-muted-foreground">
                  {exp.startDate} — {exp.endDate}
                </span>
                {exp.endDate === "Present" && (
                  <span className="px-2 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary">
                    Current
                  </span>
                )}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-1">
                {exp.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {exp.company} · {exp.location}
              </p>

              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                    <span className="text-primary mt-1">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
