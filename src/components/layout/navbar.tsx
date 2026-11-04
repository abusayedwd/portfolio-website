"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, FileDown } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/constants";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const scrolled = useScrollPosition(24);
  const [open, setOpen] = useState(false);

  // Close the menu whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
          open
            ? "bg-background"
            : scrolled
              ? "border-b border-border bg-background/85 shadow-sm backdrop-blur-xl"
              : "bg-transparent"
        )}
      >
        <nav
          aria-label="Main navigation"
          className="container-page flex h-16 items-center justify-between gap-3"
        >
          <Link
            href="/"
            aria-label={`${SITE_CONFIG.name} — home`}
            className="group flex min-w-0 items-center gap-2.5"
          >
            <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 font-mono text-sm font-bold text-white shadow-lg shadow-indigo-500/25 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
              {SITE_CONFIG.initials}
            </span>
            <span className="truncate text-sm font-semibold tracking-tight">
              {SITE_CONFIG.name}
            </span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={cn(
                    "relative rounded-full px-3.5 py-2 text-sm transition-colors",
                    isActive(link.href)
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {isActive(link.href) && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-muted"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex shrink-0 items-center gap-2">
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            <a
              href={SITE_CONFIG.resumeUrl}
              download
              className="hidden h-9 items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 px-4 text-xs font-medium text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-indigo-500/40 lg:inline-flex"
            >
              <FileDown className="size-3.5" aria-hidden />
              Resume
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-muted lg:hidden"
            >
              {open ? (
                <X className="size-5" aria-hidden />
              ) : (
                <Menu className="size-5" aria-hidden />
              )}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-menu"
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-b border-border bg-background lg:hidden"
            >
              <div className="container-page flex max-h-[calc(100dvh-4rem)] flex-col overflow-y-auto pb-6 pt-2">
                <ul>
                  {NAV_LINKS.map((link, index) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.03 * index, duration: 0.25 }}
                      className="border-b border-border/60 last:border-b-0"
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        aria-current={isActive(link.href) ? "page" : undefined}
                        className={cn(
                          "flex items-center justify-between px-1 py-3.5 text-[15px] transition-colors",
                          isActive(link.href)
                            ? "font-semibold text-foreground"
                            : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        {link.label}
                        {isActive(link.href) && (
                          <span
                            aria-hidden
                            className="size-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
                          />
                        )}
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.25 }}
                  className="mt-5 flex items-center gap-3"
                >
                  <a
                    href={SITE_CONFIG.resumeUrl}
                    download
                    className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 text-sm font-medium text-white shadow-lg shadow-indigo-500/25"
                  >
                    <FileDown className="size-4" aria-hidden />
                    Download Resume
                  </a>
                  <div className="md:hidden">
                    <ThemeToggle />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Dimmed backdrop behind the open mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpen(false)}
            aria-hidden
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
