import {
  LuLayoutTemplate,
  LuLayers,
  LuPlug,
  LuPalette,
  LuGauge,
  LuBug,
  LuSmartphone,
} from "react-icons/lu";
import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    description:
      "Pixel-perfect, high-performance interfaces with React, Next.js, and TypeScript that feel effortless to use.",
    icon: LuLayoutTemplate,
    highlights: ["React & Next.js", "Design systems", "State management"],
  },
  {
    id: "fullstack",
    title: "Full Stack Development",
    description:
      "End-to-end product development — from the database schema to deployment pipelines and polished UI.",
    icon: LuLayers,
    highlights: ["API + UI in one hand", "Auth & payments", "Cloud deployment"],
  },
  {
    id: "api",
    title: "API Development",
    description:
      "Well-documented REST and GraphQL APIs with typed contracts, versioning strategy, and predictable error handling.",
    icon: LuPlug,
    highlights: ["REST & GraphQL", "OpenAPI docs", "Rate limiting & caching"],
  },
  {
    id: "ui",
    title: "UI Development",
    description:
      "Custom component libraries and interaction design that translate brand identity into a living interface.",
    icon: LuPalette,
    highlights: ["Component libraries", "Micro-interactions", "Figma to code"],
  },
  {
    id: "performance",
    title: "Performance Optimization",
    description:
      "Core Web Vitals audits and fixes: bundle diet, rendering strategy, image pipelines, and caching layers.",
    icon: LuGauge,
    highlights: ["Lighthouse 95+", "Bundle analysis", "Edge rendering"],
  },
  {
    id: "bugfix",
    title: "Bug Fixing & Refactoring",
    description:
      "Surgical fixes for production issues and structured refactors that leave the codebase healthier than before.",
    icon: LuBug,
    highlights: ["Root-cause analysis", "Regression tests", "Zero-downtime fixes"],
  },
  {
    id: "responsive",
    title: "Responsive Design",
    description:
      "Interfaces that adapt beautifully from ultrawide monitors to the smallest phones — no overflow, no layout shift.",
    icon: LuSmartphone,
    highlights: ["Mobile-first", "Fluid typography", "Touch-friendly UX"],
  },
];
