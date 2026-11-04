"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/stats";
import { useCountUp } from "@/hooks/use-count-up";
import { staggerContainer, staggerItem, VIEWPORT } from "@/lib/motion";
import type { StatItem } from "@/types";

function StatCounter({ stat }: { stat: StatItem }) {
  const { ref, value } = useCountUp(stat.value);

  return (
    <motion.div
      variants={staggerItem}
      className="group flex flex-col items-center gap-1.5 text-center"
    >
      <span
        ref={ref}
        className="gradient-text text-4xl font-bold tabular-nums tracking-tight sm:text-5xl"
      >
        {value}
        {stat.suffix}
      </span>
      <span className="text-xs uppercase tracking-widest text-muted-foreground sm:text-sm">
        {stat.label}
      </span>
    </motion.div>
  );
}

export function Stats() {
  return (
    <section id="stats" aria-label="Career statistics" className="relative">
      <div className="container-page">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="glass grid grid-cols-2 gap-x-4 gap-y-10 rounded-3xl px-6 py-12 sm:grid-cols-3 lg:grid-cols-5"
        >
          {stats.map((stat) => (
            <StatCounter key={stat.label} stat={stat} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
