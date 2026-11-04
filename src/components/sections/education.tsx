"use client";

import { GraduationCap } from "lucide-react";
import { education } from "@/data/experience";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";
import { SpotlightCard } from "@/components/common/spotlight-card";

export function Education() {
  return (
    <section id="education" className="section-padding relative" aria-label="Education">
      <div className="container-page">
        <SectionHeading
          eyebrow="Education"
          title="Foundation & continuous learning"
        />

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {education.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.1}>
              <SpotlightCard className="h-full p-7">
                <div className="mb-4 flex size-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/15 to-violet-500/15">
                  <GraduationCap className="size-5 text-primary" aria-hidden />
                </div>
                <time className="font-mono text-xs font-semibold text-primary">
                  {item.duration}
                </time>
                <h3 className="mt-1.5 text-lg font-semibold leading-snug tracking-tight">
                  {item.degree}
                </h3>
                <p className="mt-1 text-sm font-medium text-muted-foreground">
                  {item.institution}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
