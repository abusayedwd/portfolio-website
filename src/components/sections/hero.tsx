"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, FileDown, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/constants";
import { socialLinks } from "@/data/social";
import { useTypingEffect } from "@/hooks/use-typing-effect";
import { AuroraBackground } from "@/components/common/aurora-background";
import { staggerContainer, staggerItem } from "@/lib/motion";

export function Hero() {
  const typedRole = useTypingEffect(SITE_CONFIG.roles);

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-16"
      aria-label="Introduction"
    >
      <AuroraBackground />

      <div className="container-page relative z-10 py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <motion.div variants={staggerItem} className="mb-7">
            <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-500 p-[3px] shadow-xl shadow-indigo-500/20">
              <div className="flex size-full items-center justify-center rounded-full bg-background">
                <span
                  role="img"
                  aria-label={`${SITE_CONFIG.name} monogram`}
                  className="gradient-text select-none font-mono text-2xl font-bold"
                >
                  {SITE_CONFIG.initials}
                </span>
              </div>
            </div>
          </motion.div>

          <motion.p
            variants={staggerItem}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/5 px-4 py-1.5 text-sm text-emerald-600 dark:text-emerald-400"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            {SITE_CONFIG.availability}
          </motion.p>

          <motion.h1
            variants={staggerItem}
            className="text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m <span className="gradient-text">{SITE_CONFIG.name}</span>
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="mt-4 h-8 font-mono text-base text-muted-foreground sm:text-lg"
            aria-label={SITE_CONFIG.role}
          >
            <span aria-hidden>
              {typedRole}
              <span className="ml-0.5 inline-block h-5 w-[2px] translate-y-1 animate-pulse bg-primary" />
            </span>
          </motion.p>

          <motion.p
            variants={staggerItem}
            className="mt-6 max-w-2xl text-balance leading-relaxed text-muted-foreground"
          >
            {SITE_CONFIG.yearsOfExperience}+ years of experience delivering
            polished, high-performance web products with React, Next.js, and
            TypeScript for startups, product teams, and fast-moving platforms.
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              href="/projects"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 px-7 text-sm font-medium text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-indigo-500/40"
            >
              View Selected Work
              <ArrowRight className="size-4" aria-hidden />
            </Link>
            <a
              href={SITE_CONFIG.resumeUrl}
              download
              className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-card px-7 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:bg-muted"
            >
              <FileDown className="size-4" aria-hidden />
              Download CV
            </a>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-1.5">
              <MapPin className="size-4" aria-hidden />
              {SITE_CONFIG.location} · Remote
            </span>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="transition-colors hover:text-primary"
            >
              {SITE_CONFIG.email}
            </a>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="mt-8 flex items-center justify-center gap-2"
          >
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:text-primary"
              >
                <social.icon className="size-4" aria-hidden />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#projects"
        aria-label="Scroll to projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground"
        >
          <ArrowDown className="size-4" aria-hidden />
        </motion.span>
      </motion.a>
    </section>
  );
}
