"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { GitFork, Star, Users, GitCommitHorizontal } from "lucide-react";
import { githubStats } from "@/data/stats";
import { SITE_CONFIG } from "@/constants";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";
import { SpotlightCard } from "@/components/common/spotlight-card";
import { EASE, staggerContainer, staggerItem, VIEWPORT } from "@/lib/motion";

const STAT_CARDS = [
  { label: "Public Repos", value: githubStats.repos, icon: GitFork },
  { label: "Total Stars", value: githubStats.stars, icon: Star },
  { label: "Contributions", value: githubStats.contributions, icon: GitCommitHorizontal },
  { label: "Followers", value: githubStats.followers, icon: Users },
];

/** Deterministic pseudo-random cells so server & client render identically. */
function contributionLevel(index: number): number {
  const seed = Math.sin(index * 127.1 + 311.7) * 43758.5453;
  const value = seed - Math.floor(seed);
  if (value > 0.82) return 4;
  if (value > 0.62) return 3;
  if (value > 0.42) return 2;
  if (value > 0.22) return 1;
  return 0;
}

const LEVEL_CLASSES = [
  "bg-muted",
  "bg-indigo-500/25",
  "bg-indigo-500/45",
  "bg-indigo-500/70",
  "bg-indigo-400",
];

export function GithubSection() {
  return (
    <section id="github" className="section-padding relative" aria-label="GitHub activity">
      <div className="container-page">
        <SectionHeading
          eyebrow="Open Source"
          title="Building in public"
          description="A snapshot of my GitHub activity — libraries, contributions, and community."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SpotlightCard className="h-full p-7">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/25">
                  <FaGithub className="size-7" aria-hidden />
                </div>
                <div>
                  <h3 className="font-semibold">@{SITE_CONFIG.githubUsername}</h3>
                  <p className="text-sm text-muted-foreground">
                    Open source contributor since 2019
                  </p>
                </div>
                <a
                  href={`https://github.com/${SITE_CONFIG.githubUsername}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto rounded-full border border-border px-4 py-1.5 text-xs font-medium transition-colors hover:border-primary/40 hover:text-primary"
                >
                  Follow
                </a>
              </div>

              <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Top Languages
              </h4>
              <div className="mb-3 flex h-2.5 overflow-hidden rounded-full">
                {githubStats.topLanguages.map((language) => (
                  <motion.div
                    key={language.name}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${language.percentage}%` }}
                    viewport={VIEWPORT}
                    transition={{ duration: 1, ease: EASE }}
                    style={{ backgroundColor: language.color }}
                  />
                ))}
              </div>
              <ul className="flex flex-wrap gap-x-5 gap-y-2">
                {githubStats.topLanguages.map((language) => (
                  <li key={language.name} className="flex items-center gap-1.5 text-xs">
                    <span
                      aria-hidden
                      className="size-2 rounded-full"
                      style={{ backgroundColor: language.color }}
                    />
                    <span className="text-muted-foreground">
                      {language.name}{" "}
                      <span className="font-mono">{language.percentage}%</span>
                    </span>
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </Reveal>

          <div className="flex flex-col gap-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              className="grid grid-cols-2 gap-4 sm:grid-cols-4"
            >
              {STAT_CARDS.map((card) => (
                <motion.div
                  key={card.label}
                  variants={staggerItem}
                  className="rounded-2xl border border-border bg-card p-4 text-center transition-colors hover:border-primary/30"
                >
                  <card.icon className="mx-auto mb-2 size-4 text-primary" aria-hidden />
                  <div className="font-mono text-xl font-bold">
                    {card.value.toLocaleString()}
                  </div>
                  <div className="mt-0.5 text-[11px] text-muted-foreground">
                    {card.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-border bg-card p-6">
                <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  Contribution Activity
                </h4>
                <div
                  aria-label="GitHub contribution graph illustration"
                  role="img"
                  className="grid grid-flow-col grid-rows-7 gap-1 overflow-hidden"
                >
                  {Array.from({ length: 7 * 26 }, (_, index) => (
                    <span
                      key={index}
                      className={`size-2.5 rounded-[3px] sm:size-3 ${LEVEL_CLASSES[contributionLevel(index)]}`}
                    />
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-end gap-1.5 text-[11px] text-muted-foreground">
                  Less
                  {LEVEL_CLASSES.map((levelClass) => (
                    <span key={levelClass} className={`size-2.5 rounded-[3px] ${levelClass}`} />
                  ))}
                  More
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
