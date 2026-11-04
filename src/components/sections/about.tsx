"use client";

import { motion } from "framer-motion";
import { Heart, Lightbulb, Target, Users } from "lucide-react";
import { SITE_CONFIG } from "@/constants";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";
import { SpotlightCard } from "@/components/common/spotlight-card";
import { staggerContainer, staggerItem, VIEWPORT } from "@/lib/motion";

const VALUES = [
  {
    icon: Target,
    title: "Craftsmanship",
    description: "Every pixel, every millisecond, every edge case matters.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "The best products are built by teams that communicate well.",
  },
  {
    icon: Lightbulb,
    title: "Curiosity",
    description: "I learn something new every week — and share it with others.",
  },
  {
    icon: Heart,
    title: "Empathy",
    description: "Software exists for people. Users come before technology.",
  },
];

const TIMELINE = [
  { year: "2019", event: "Graduated CSE, started freelancing" },
  { year: "2020", event: "Joined PixelWorks — award-winning agency work" },
  { year: "2021", event: "First startup role at Brightflow (Series A)" },
  { year: "2023", event: "Senior engineer at Polygon Labs" },
  { year: "2026", event: "Leading platform frontend for 120k+ devs" },
];

export function About() {
  return (
    <section id="about" className="section-padding relative" aria-label="About me">
      <div className="container-page">
        <SectionHeading
          eyebrow="About"
          title="Building products that are fast, usable, and easy to scale"
          description={`${SITE_CONFIG.yearsOfExperience}+ years turning product ideas into polished digital experiences across agencies, startups, and platform teams.`}
        />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal direction="right">
            <div className="flex h-full flex-col gap-5 rounded-3xl border border-border bg-card p-8">
              <p className="leading-relaxed text-muted-foreground">
                I&apos;m a product-minded engineer who combines strong frontend
                fundamentals with a sharp eye for detail. Over the last seven
                years, I&apos;ve worked across freelance projects, agency teams,
                and high-growth startups to build interfaces that are not only
                beautiful, but dependable under real-world pressure.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                My sweet spot sits at the intersection of engineering rigor and
                user experience. I&apos;ve led design systems, improved Core Web
                Vitals on high-traffic products, and helped teams ship features
                faster without sacrificing quality or accessibility.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Beyond shipping features, I enjoy improving how teams work:
                mentoring engineers, strengthening implementation standards, and
                creating UI systems that scale across products and collaborators.
              </p>

              <div className="mt-auto grid grid-cols-2 gap-3 pt-2">
                {VALUES.map((value) => (
                  <div
                    key={value.title}
                    className="rounded-2xl border border-border bg-muted/50 p-4 transition-colors hover:border-primary/30"
                  >
                    <value.icon className="mb-2 size-5 text-primary" aria-hidden />
                    <h3 className="text-sm font-semibold">{value.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <SpotlightCard className="h-full p-8">
              <h3 className="mb-6 text-lg font-semibold">Career timeline</h3>
              <motion.ol
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT}
                className="relative space-y-7 border-l border-border pl-6"
              >
                {TIMELINE.map((item) => (
                  <motion.li key={item.year} variants={staggerItem} className="relative">
                    <span
                      aria-hidden
                      className="absolute -left-[30.5px] top-1 size-2.5 rounded-full bg-gradient-to-br from-indigo-400 to-violet-500 ring-4 ring-background"
                    />
                    <time className="font-mono text-xs font-semibold text-primary">
                      {item.year}
                    </time>
                    <p className="mt-0.5 text-sm text-muted-foreground">{item.event}</p>
                  </motion.li>
                ))}
              </motion.ol>

              <div className="mt-8 rounded-2xl bg-gradient-to-br from-indigo-500/10 via-violet-500/10 to-cyan-500/10 p-5">
                <p className="text-sm leading-relaxed">
                  <span className="font-semibold">Currently:</span>{" "}
                  <span className="text-muted-foreground">
                    Senior Full Stack Engineer at Polygon Labs, based in{" "}
                    {SITE_CONFIG.location}, working remotely with teams across
                    four time zones.
                  </span>
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
