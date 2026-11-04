"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { certificates } from "@/data/certificates";
import { SectionHeading } from "@/components/common/section-heading";
import { staggerContainer, staggerItem, VIEWPORT } from "@/lib/motion";

const CERT_GRADIENTS = [
  "from-orange-500/20 to-amber-500/20",
  "from-blue-500/20 to-indigo-500/20",
  "from-red-500/20 to-rose-500/20",
  "from-violet-500/20 to-purple-500/20",
  "from-emerald-500/20 to-teal-500/20",
  "from-cyan-500/20 to-sky-500/20",
];

export function Certificates() {
  return (
    <section id="certificates" className="section-padding relative" aria-label="Certificates">
      <div className="container-page">
        <SectionHeading
          eyebrow="Certificates"
          title="Credentials that back the craft"
          description="Industry certifications and deep-dive courses I've completed to stay sharp."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {certificates.map((certificate, index) => (
            <motion.a
              key={certificate.id}
              variants={staggerItem}
              href={certificate.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${certificate.title} — view credential`}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div
                className={`relative flex h-36 items-center justify-center bg-gradient-to-br ${CERT_GRADIENTS[index % CERT_GRADIENTS.length]}`}
              >
                <div className="bg-grid absolute inset-0 opacity-40" />
                <Award
                  className="relative size-12 text-foreground/70 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                  aria-hidden
                />
                <span className="glass absolute right-3 top-3 rounded-full px-2.5 py-1 font-mono text-xs font-semibold">
                  {certificate.year}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-sm font-semibold leading-snug tracking-tight transition-colors group-hover:text-primary">
                  {certificate.title}
                </h3>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-xs text-muted-foreground">{certificate.issuer}</p>
                  <ExternalLink
                    className="size-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                    aria-hidden
                  />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
