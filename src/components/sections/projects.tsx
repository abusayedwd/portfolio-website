"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { projects, PROJECT_FILTERS } from "@/data/projects";
import { SectionHeading } from "@/components/common/section-heading";
import { ProjectVisual } from "@/components/common/project-visual";
import { Badge } from "@/components/ui/badge";
import { cn, formatMonthYear } from "@/lib/utils";
import { EASE } from "@/lib/motion";
import type { Project, ProjectCategory, ProjectStatus } from "@/types";

const STATUS_VARIANT: Record<ProjectStatus, "success" | "warning" | "accent"> = {
  Completed: "success",
  "In Progress": "warning",
  Maintained: "accent",
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.4, ease: EASE }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10"
    >
      <div className="relative h-48 overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <ProjectVisual
            projectId={project.id}
            title={project.title}
            className="h-full w-full transition-transform duration-700 group-hover:scale-105"
          />
        )}
        <div className="absolute right-4 top-4 flex gap-2">
          <Badge variant={STATUS_VARIANT[project.status]} className="backdrop-blur-md">
            {project.status}
          </Badge>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 flex items-center justify-between gap-2">
          <h3 className="text-lg font-semibold tracking-tight transition-colors group-hover:text-primary">
            {project.title}
          </h3>
          <span className="flex items-center gap-1 whitespace-nowrap font-mono text-xs text-muted-foreground">
            <Calendar className="size-3" aria-hidden />
            {formatMonthYear(project.date)}
          </span>
        </div>

        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <ul className="mb-4 space-y-1.5">
          {project.features.slice(0, 3).map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2 text-xs text-muted-foreground"
            >
              <span
                aria-hidden
                className="mt-1.5 size-1 shrink-0 rounded-full bg-primary"
              />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mb-5 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-muted px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-border pt-4">
          <Link
            href={`/projects/${project.id}`}
            aria-label={`${project.title} details`}
            className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Details
          </Link>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} source code on GitHub`}
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <FaGithub className="size-4" aria-hidden />
              Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-all hover:gap-2"
            >
              Live Demo
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

interface ProjectsProps {
  limit?: number;
  showViewAll?: boolean;
  showFilters?: boolean;
  featuredOnly?: boolean;
}

export function Projects({
  limit,
  showViewAll = false,
  showFilters = true,
  featuredOnly = false,
}: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("All");

  const source = featuredOnly ? projects.filter((project) => project.featured) : projects;
  const filtered = source.filter(
    (project) =>
      activeFilter === "All" ||
      project.category.includes(activeFilter as Exclude<ProjectCategory, "All">)
  );
  const visible = limit ? filtered.slice(0, limit) : filtered;

  return (
    <section
      id="projects"
      className="section-padding relative bg-muted/40 dark:bg-muted/20"
      aria-label="Projects"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work I'm proud of"
          description="Products, open-source libraries, and experiments — each one taught me something new."
        />

        {showFilters && (
          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="mb-10 flex flex-wrap justify-center gap-2"
          >
            {PROJECT_FILTERS.map((filter) => (
              <button
                key={filter}
                role="tab"
                aria-selected={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "relative cursor-pointer rounded-full px-4 py-2 text-sm transition-colors",
                  activeFilter === filter
                    ? "text-white"
                    : "border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                )}
              >
                {activeFilter === filter && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 shadow-lg shadow-indigo-500/25"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{filter}</span>
              </button>
            ))}
          </div>
        )}

        <motion.div layout className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {showViewAll && (
          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="glass inline-flex h-12 items-center gap-2 rounded-full px-7 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:bg-muted"
            >
              View All Projects
              <ArrowUpRight className="size-4" aria-hidden />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
