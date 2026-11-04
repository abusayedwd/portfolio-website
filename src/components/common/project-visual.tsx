import { cn } from "@/lib/utils";

/**
 * Deterministic gradient artwork per project id — avoids shipping heavy
 * raster images while keeping every card visually distinct.
 */
const PALETTES: Record<string, string> = {
  "nebula-analytics": "from-indigo-600 via-violet-600 to-blue-700",
  "prism-ui": "from-fuchsia-600 via-purple-600 to-indigo-700",
  voyage: "from-cyan-500 via-sky-600 to-indigo-700",
  "motion-craft": "from-violet-600 via-fuchsia-500 to-orange-500",
  ledgerly: "from-emerald-500 via-teal-600 to-cyan-700",
  "glass-kit": "from-sky-500 via-indigo-500 to-violet-600",
  devboard: "from-blue-600 via-indigo-600 to-violet-700",
  "aurora-landing": "from-purple-600 via-violet-500 to-cyan-500",
  "realtime-chat-app": "from-indigo-600 via-blue-600 to-cyan-500",
  "gitgotech-ecommerce": "from-orange-500 via-rose-500 to-fuchsia-600",
  mynexthome: "from-emerald-500 via-teal-600 to-cyan-700",
  "influencer-marketing": "from-pink-500 via-fuchsia-600 to-violet-700",
};

interface ProjectVisualProps {
  projectId: string;
  title: string;
  className?: string;
}

export function ProjectVisual({ projectId, title, className }: ProjectVisualProps) {
  const palette = PALETTES[projectId] ?? "from-indigo-600 to-violet-600";
  const initials = title
    .split(/[\s—-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase())
    .join("");

  return (
    <div
      role="img"
      aria-label={`${title} preview artwork`}
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-gradient-to-br",
        palette,
        className
      )}
    >
      <div className="bg-grid absolute inset-0 opacity-30" />
      <div className="absolute -left-10 -top-10 size-40 rounded-full bg-white/15 blur-2xl" />
      <div className="absolute -bottom-12 -right-8 size-48 rounded-full bg-black/20 blur-2xl" />
      <span className="relative select-none font-mono text-5xl font-bold tracking-tight text-white/85 drop-shadow-lg">
        {initials}
      </span>
    </div>
  );
}
