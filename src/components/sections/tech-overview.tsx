"use client";

import { motion } from "framer-motion";
import { techCategories } from "@/data/skills";
import { SectionHeading } from "@/components/common/section-heading";
import { staggerContainer, staggerItem, VIEWPORT } from "@/lib/motion";

/** Compact, recruiter-friendly view: category rows with simple technology pills. */
export function TechOverview() {
  return (
    <section
      id="tech"
      className="section-padding relative bg-muted/40 dark:bg-muted/20"
      aria-label="Technologies"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mx-auto max-w-4xl divide-y divide-border rounded-3xl border border-border bg-card"
        >
          {techCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={staggerItem}
              className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:gap-6 sm:px-8"
            >
              <h3 className="w-28 shrink-0 text-sm font-semibold text-muted-foreground">
                {category.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {category.items.map((tech) => (
                  <li
                    key={tech.name}
                    className="flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-3 py-1.5 text-sm transition-colors hover:border-primary/40"
                  >
                    <tech.icon
                      aria-hidden
                      className="size-3.5"
                      style={{ color: tech.color }}
                    />
                    {tech.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
