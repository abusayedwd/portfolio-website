"use client";

import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/constants";
import { socialLinks } from "@/data/social";
import { Reveal } from "@/components/common/reveal";

export function ContactCta() {
  return (
    <section className="section-padding relative" aria-label="Contact call to action">
      <div className="container-page">
        <Reveal>
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-[2rem] border border-border bg-card p-10 text-center sm:p-14">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-48 w-2/3 rounded-full bg-indigo-500/15 blur-[80px]"
            />

            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to build something high-impact?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-balance text-muted-foreground">
              Open to senior product engineering roles, collaborative freelance
              work, and thoughtful partnerships. I usually reply within 24 hours.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 px-7 text-sm font-medium text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-indigo-500/40"
              >
                Start a Conversation
                <ArrowRight className="size-4" aria-hidden />
              </Link>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="inline-flex h-12 items-center gap-2 rounded-full border border-border px-7 text-sm font-medium transition-colors hover:bg-muted"
              >
                <Mail className="size-4" aria-hidden />
                {SITE_CONFIG.email}
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
                >
                  <social.icon className="size-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
