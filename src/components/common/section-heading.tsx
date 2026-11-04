"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp, VIEWPORT } from "@/lib/motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={fadeUp}
      className={cn(
        "mb-14 max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      <span
        className={cn(
          "mb-4 flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary",
          align === "center" && "justify-center"
        )}
      >
        <span
          aria-hidden
          className="h-px w-6 bg-gradient-to-r from-transparent via-primary/60 to-primary"
        />
        {eyebrow}
        {align === "center" && (
          <span
            aria-hidden
            className="h-px w-6 bg-gradient-to-l from-transparent via-primary/60 to-primary"
          />
        )}
      </span>
      <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
