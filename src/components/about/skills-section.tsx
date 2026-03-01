"use client";

import { motion } from "framer-motion";
import { skills, type Skill } from "@/lib/data";

const categoryLabels: Record<Skill["category"], string> = {
  frontend: "Frontend",
  backend: "Backend",
  tools: "Tools",
  other: "Other",
};

export function SkillsSection() {
  const groupedSkills = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<Skill["category"], Skill[]>
  );

  return (
    <section className="py-16 border-t border-border/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <p className="text-sm text-muted-foreground font-mono mb-2">Expertise</p>
        <h2 className="text-2xl sm:text-3xl">
          Skills &amp; Technologies
        </h2>
      </motion.div>

      <div className="space-y-8">
        {(Object.keys(groupedSkills) as Skill["category"][]).map((category, categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: categoryIndex * 0.12 }}
          >
            <h3 className="text-sm font-medium text-muted-foreground mb-4">
              {categoryLabels[category]}
            </h3>
            <div className="flex flex-wrap gap-2">
              {groupedSkills[category].map((skill, skillIndex) => (
                <motion.span
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: categoryIndex * 0.1 + skillIndex * 0.04,
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="px-4 py-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors text-sm font-medium cursor-default"
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
