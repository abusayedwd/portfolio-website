import Link from "next/link";
import { MapPin, Mail } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/constants";
import { socialLinks } from "@/data/social";
import type { NavLink } from "@/types";

const MORE_LINKS: NavLink[] = [
  { label: "Skills", href: "/skills" },
  { label: "Services", href: "/services" },
  { label: "Certificates", href: "/certificates" },
];

function FooterColumn({ title, links }: { title: string; links: NavLink[] }) {
  return (
    <nav aria-label={`${title} links`}>
      <h3 className="mb-4 text-sm font-semibold">{title}</h3>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/40 dark:bg-muted/20">
      <div className="container-page pb-8 pt-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 font-mono text-sm font-bold text-white">
                {SITE_CONFIG.initials}
              </span>
              <span className="text-sm font-semibold">{SITE_CONFIG.name}</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {SITE_CONFIG.role} crafting fast, accessible, delightful web
              experiences.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex size-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                >
                  <social.icon className="size-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Pages" links={NAV_LINKS} />
          <FooterColumn title="More" links={MORE_LINKS} />

          <div>
            <h3 className="mb-4 text-sm font-semibold">Get in touch</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-2.5 transition-colors hover:text-foreground"
                >
                  <Mail className="size-4 shrink-0 text-primary" aria-hidden />
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="size-4 shrink-0 text-primary" aria-hidden />
                {SITE_CONFIG.location}
              </li>
              <li className="flex items-center gap-2.5">
                <span className="relative ml-0.5 flex size-2.5 shrink-0">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
                </span>
                {SITE_CONFIG.availability}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p>
            Built with{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              Next.js
            </a>{" "}
            &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
