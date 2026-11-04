"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Trophy } from "lucide-react";
import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/common/section-heading";
import { Badge } from "@/components/ui/badge";
import { EASE, VIEWPORT } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function Experience() {
  return (
    <section id="experience" className="section-padding relative" aria-label="Work experience">
      <div className="container-page">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've made an impact"
          description="From award-winning agency work to venture-backed startups and platform teams."
        />

        <div className="relative mx-auto max-w-3xl">
          <div
            aria-hidden
            className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-indigo-500/60 via-violet-500/40 to-transparent md:left-1/2"
          />

          <ol className="space-y-12">
            {experience.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.7, ease: EASE }}
                  className={cn(
                    "relative pl-12 md:w-1/2 md:pl-0",
                    isEven ? "md:pr-12" : "md:ml-auto md:pl-12"
                  )}
                >
                  <span
                    aria-hidden
                    className={cn(
                      "absolute left-4 top-2 flex size-8 -translate-x-1/2 items-center justify-center rounded-full border border-primary/30 bg-background",
                      isEven ? "md:left-full" : "md:left-0"
                    )}
                  >
                    <Briefcase className="size-3.5 text-primary" />
                  </span>

                  <article className="group rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
                    <div className="mb-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                      <h3 className="text-lg font-semibold tracking-tight">
                        {item.role}
                      </h3>
                    </div>
                    <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                      <span className="font-medium text-primary">{item.company}</span>
                      <span aria-hidden>·</span>
                      <time className="font-mono text-xs">{item.duration}</time>
                      <span className="flex items-center gap-1 text-xs">
                        <MapPin className="size-3" aria-hidden />
                        {item.location}
                      </span>
                    </div>

                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>

                    <ul className="mb-4 space-y-2">
                      {item.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <Trophy
                            className="mt-0.5 size-3.5 shrink-0 text-amber-500"
                            aria-hidden
                          />
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5">
                      {item.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="font-mono text-[11px]">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </article>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
