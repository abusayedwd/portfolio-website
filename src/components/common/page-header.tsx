"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/common/aurora-background";
import { fadeUp } from "@/lib/motion";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden pb-4 pt-36">
      <AuroraBackground />
      <div className="container-page relative z-10 text-center">
        <motion.div variants={fadeUp} initial="hidden" animate="visible">
          <span className="mb-4 flex items-center justify-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <span
              aria-hidden
              className="h-px w-6 bg-gradient-to-r from-transparent via-primary/60 to-primary"
            />
            {eyebrow}
            <span
              aria-hidden
              className="h-px w-6 bg-gradient-to-l from-transparent via-primary/60 to-primary"
            />
          </span>
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mx-auto mt-4 max-w-2xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
