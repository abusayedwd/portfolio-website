"use client";

import { cn } from "@/lib/utils";

interface AuroraBackgroundProps {
  className?: string;
  withGrid?: boolean;
}

export function AuroraBackground({ className, withGrid = true }: AuroraBackgroundProps) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      {withGrid && (
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
      )}
      <div className="animate-aurora absolute -top-1/3 left-1/2 h-[46rem] w-[46rem] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[120px] dark:bg-indigo-500/15" />
      <div className="animate-aurora absolute -top-24 right-[8%] h-[28rem] w-[28rem] rounded-full bg-violet-500/15 blur-[110px] [animation-delay:-5s] dark:bg-violet-500/12" />
      <div className="animate-aurora absolute top-1/4 left-[4%] h-[24rem] w-[24rem] rounded-full bg-cyan-400/12 blur-[100px] [animation-delay:-9s] dark:bg-cyan-400/10" />
    </div>
  );
}
