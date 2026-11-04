import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { AuroraBackground } from "@/components/common/aurora-background";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      <AuroraBackground />
      <div className="container-page relative z-10 text-center">
        <p className="gradient-text font-mono text-8xl font-bold sm:text-9xl">404</p>
        <h1 className="mt-6 text-2xl font-bold tracking-tight sm:text-3xl">
          This page took a wrong turn
        </h1>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 px-7 text-sm font-medium text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-indigo-500/50"
          >
            <Home className="size-4" aria-hidden />
            Back to Home
          </Link>
          <Link
            href="/projects"
            className="glass inline-flex h-12 items-center gap-2 rounded-full px-7 text-sm font-medium transition-colors hover:bg-muted"
          >
            <ArrowLeft className="size-4" aria-hidden />
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
