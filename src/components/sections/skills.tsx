"use client";

import { motion } from "framer-motion";
import { skills, circularSkills } from "@/data/skills";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";
import { EASE, VIEWPORT } from "@/lib/motion";
import type { Skill } from "@/types";

function ProgressBar({ skill, index }: { skill: Skill; index: number }) {
  return (
    <div className="group">
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-medium transition-colors group-hover:text-primary">
          {skill.name}
        </span>
        <span className="font-mono text-xs text-muted-foreground">
          {skill.percentage}%
        </span>
      </div>
      <div
        role="progressbar"
        aria-valuenow={skill.percentage}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${skill.name} proficiency`}
        className="h-2 overflow-hidden rounded-full bg-muted"
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.percentage}%` }}
          viewport={VIEWPORT}
          transition={{ duration: 1.1, delay: index * 0.06, ease: EASE }}
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400"
        />
      </div>
    </div>
  );
}

function CircularIndicator({ skill, index }: { skill: Skill; index: number }) {
  const radius = 44;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative size-28">
        <svg viewBox="0 0 100 100" className="size-full -rotate-90">
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            strokeWidth="7"
            className="stroke-muted"
          />
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            strokeWidth="7"
            strokeLinecap="round"
            stroke="url(#skill-gradient)"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{
              strokeDashoffset: circumference * (1 - skill.percentage / 100),
            }}
            viewport={VIEWPORT}
            transition={{ duration: 1.4, delay: index * 0.12, ease: EASE }}
          />
          <defs>
            <linearGradient id="skill-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#818cf8" />
              <stop offset="50%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
        </svg>
        <span className="absolute inset-0 flex items-center justify-center font-mono text-lg font-bold">
          {skill.percentage}%
        </span>
      </div>
      <span className="text-sm font-medium text-muted-foreground">{skill.name}</span>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section-padding relative" aria-label="Skills">
      <div className="container-page">
        <SectionHeading
          eyebrow="Skills"
          title="Depth where it counts"
          description="Honest self-assessment across the disciplines that make products succeed."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_auto]">
          <Reveal>
            <div className="grid gap-x-10 gap-y-6 rounded-3xl border border-border bg-card p-8 sm:grid-cols-2">
              {skills.map((skill, index) => (
                <ProgressBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.15}>
            <div className="grid h-full grid-cols-2 place-content-center gap-8 rounded-3xl border border-border bg-card p-8 lg:grid-cols-2">
              {circularSkills.map((skill, index) => (
                <CircularIndicator key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
