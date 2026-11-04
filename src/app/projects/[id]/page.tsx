import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Calendar } from "lucide-react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { projects } from "@/data/projects";
import { formatMonthYear } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { AuroraBackground } from "@/components/common/aurora-background";
import type { ProjectStatus } from "@/types";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

const STATUS_VARIANT: Record<ProjectStatus, "success" | "warning" | "accent"> = {
  Completed: "success",
  "In Progress": "warning",
  Maintained: "accent",
};

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((entry) => entry.id === id);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/projects/${project.id}` },
  };
}

function TechChips({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((tech) => (
        <span
          key={tech}
          className="rounded-md bg-muted px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

function LinkButton({
  href,
  label,
  variant,
}: {
  href: string;
  label: string;
  variant: "outline" | "primary";
}) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all";
  const style =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:opacity-90"
      : "border border-border text-foreground hover:border-primary/40 hover:text-primary";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${style}`}
    >
      {variant === "outline" && <FaGithub className="size-4" aria-hidden />}
      {label}
      {variant === "primary" && <ArrowUpRight className="size-4" aria-hidden />}
    </a>
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((entry) => entry.id === id);
  if (!project) notFound();

  return (
    <article className="relative overflow-hidden pb-24 pt-36">
      <AuroraBackground />

      <div className="container-page relative z-10 max-w-4xl">
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" aria-hidden />
          All projects
        </Link>

        <header className="mb-10">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <Badge variant={STATUS_VARIANT[project.status]}>{project.status}</Badge>
            <span className="flex items-center gap-1 font-mono text-xs text-muted-foreground">
              <Calendar className="size-3" aria-hidden />
              {formatMonthYear(project.date)}
            </span>
          </div>
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.demo && (
              <LinkButton href={project.demo} label="Live demo" variant="primary" />
            )}
            {project.github && (
              <LinkButton href={project.github} label="GitHub" variant="outline" />
            )}
          </div>
        </header>

        {project.image && (
          <div className="relative mb-10 aspect-video overflow-hidden rounded-3xl border border-border bg-muted">
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              sizes="(min-width: 896px) 896px, 100vw"
              priority
              className="object-cover object-top"
            />
          </div>
        )}

        {project.details && (
          <section className="mb-10">
            <h2 className="mb-3 text-lg font-semibold">About the project</h2>
            <p className="leading-relaxed text-muted-foreground">{project.details}</p>
          </section>
        )}

        <section className="mb-10">
          <h2 className="mb-3 text-lg font-semibold">Key features</h2>
          <ul className="grid gap-2 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 rounded-xl border border-border bg-muted/40 px-4 py-3 text-sm text-muted-foreground"
              >
                <span aria-hidden className="mt-1.5 size-1 shrink-0 rounded-full bg-primary" />
                {feature}
              </li>
            ))}
          </ul>
        </section>

        {project.parts && project.parts.length > 0 && (
          <section className="mb-10">
            <h2 className="mb-3 text-lg font-semibold">Repositories & live links</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {project.parts.map((part) => (
                <div
                  key={part.name}
                  className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-5"
                >
                  <h3 className="font-semibold">{part.name}</h3>
                  {part.image && (
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-border bg-muted">
                      <Image
                        src={part.image}
                        alt={`${project.title} ${part.name} screenshot`}
                        fill
                        sizes="(min-width: 640px) 50vw, 100vw"
                        className="object-cover object-top"
                      />
                    </div>
                  )}
                  {part.description && (
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {part.description}
                    </p>
                  )}
                  {part.features && part.features.length > 0 && (
                    <ul className="space-y-1.5">
                      {part.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span aria-hidden className="mt-1.5 size-1 shrink-0 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                  {part.tech.length > 0 && <TechChips items={part.tech} />}
                  <div className="mt-auto flex flex-wrap gap-2 pt-2">
                    {part.github && (
                      <LinkButton href={part.github} label="GitHub" variant="outline" />
                    )}
                    {part.live && (
                      <LinkButton href={part.live} label="Live" variant="primary" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <section>
          <h2 className="mb-3 text-lg font-semibold">Tech stack</h2>
          <TechChips items={project.techStack} />
        </section>
      </div>
    </article>
  );
}
