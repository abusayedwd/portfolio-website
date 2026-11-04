"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { services } from "@/data/services";
import { SectionHeading } from "@/components/common/section-heading";
import { SpotlightCard } from "@/components/common/spotlight-card";
import { staggerContainer, staggerItem, VIEWPORT } from "@/lib/motion";

export function Services() {
  return (
    <section id="services" className="section-padding relative" aria-label="Services">
      <div className="container-page">
        <SectionHeading
          eyebrow="Services"
          title="How I can help your team"
          description="From greenfield builds to performance rescues — engagements sized to your needs."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={staggerItem} className="h-full">
              <SpotlightCard className="h-full">
                <div className="flex h-full flex-col p-7">
                  <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/15 via-violet-500/15 to-cyan-500/15 transition-transform duration-300 group-hover:scale-110">
                    <service.icon className="size-6 text-primary" aria-hidden />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-auto space-y-2">
                    {service.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-center gap-2 text-xs text-muted-foreground"
                      >
                        <Check className="size-3.5 text-emerald-500" aria-hidden />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
