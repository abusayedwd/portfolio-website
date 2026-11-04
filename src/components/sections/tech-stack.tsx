"use client";

import { motion } from "framer-motion";
import { techCategories } from "@/data/skills";
import { SectionHeading } from "@/components/common/section-heading";
import { SpotlightCard } from "@/components/common/spotlight-card";
import { Badge } from "@/components/ui/badge";
import { staggerContainer, staggerItem, VIEWPORT } from "@/lib/motion";
import type { SkillLevel } from "@/types";

const LEVEL_VARIANT: Record<SkillLevel, "default" | "accent" | "secondary" | "outline"> = {
  Expert: "default",
  Advanced: "accent",
  Proficient: "secondary",
  Familiar: "outline",
};

export function TechStack() {
  return (
    <section id="tech-stack" className="section-padding relative" aria-label="Tech stack">
      <div className="container-page">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Tools I reach for every day"
          description="The frontend, backend, database, and hosting tools I use to build and ship web applications."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {techCategories.map((category, categoryIndex) => (
            <SpotlightCard
              key={category.title}
              className={categoryIndex === 0 ? "md:col-span-2 xl:col-span-1" : ""}
            >
              <div className="p-6">
                <h3 className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  <span className="size-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400" />
                  {category.title}
                </h3>
                <motion.ul
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={VIEWPORT}
                  className="flex flex-wrap gap-2.5"
                >
                  {category.items.map((tech) => (
                    <motion.li key={tech.name} variants={staggerItem}>
                      <div className="group/tech flex items-center gap-2.5 rounded-2xl border border-border bg-muted/40 px-3.5 py-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-muted hover:shadow-lg hover:shadow-primary/5">
                        <tech.icon
                          aria-hidden
                          className="size-5 shrink-0 transition-transform duration-300 group-hover/tech:scale-110"
                          style={{ color: tech.color }}
                        />
                        <div className="flex flex-col">
                          <span className="text-sm font-medium leading-tight">
                            {tech.name}
                          </span>
                          <Badge
                            variant={LEVEL_VARIANT[tech.level]}
                            className="mt-1 w-fit px-2 py-0 text-[10px]"
                          >
                            {tech.level}
                          </Badge>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
