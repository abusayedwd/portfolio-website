import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiMongodb,
  SiSupabase,
  SiHostinger,
  SiLaravel,
  SiNestjs,
  SiDocker,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
} from "react-icons/si";
import { FaAws, FaServer, FaDatabase, FaLayerGroup, FaCode } from "react-icons/fa6";
import { VscCode } from "react-icons/vsc";
import type { Skill, TechCategory } from "@/types";

export const techCategories: TechCategory[] = [
  {
    title: "Frontend",
    items: [
      { name: "React.js", icon: SiReact, level: "Advanced", color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, level: "Advanced", color: "#ffffff" },
      { name: "JavaScript", icon: SiJavascript, level: "Advanced", color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, level: "Advanced", color: "#3178C6" },
      { name: "HTML5", icon: SiHtml5, level: "Advanced", color: "#E34F26" },
      { name: "CSS3", icon: SiCss, level: "Advanced", color: "#663399" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: "Advanced", color: "#06B6D4" },
      { name: "Bootstrap", icon: SiBootstrap, level: "Proficient", color: "#7952B3" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs, level: "Advanced", color: "#339933" },
      { name: "Express.js", icon: SiExpress, level: "Advanced", color: "#ffffff" },
      { name: "PHP", icon: SiPhp, level: "Proficient", color: "#777BB4" },
      { name: "REST APIs", icon: FaCode, level: "Advanced", color: "#38BDF8" },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "MongoDB", icon: SiMongodb, level: "Advanced", color: "#47A248" },
      { name: "Supabase", icon: SiSupabase, level: "Proficient", color: "#3ECF8E" },
    ],
  },
  {
    title: "Deployment & Hosting",
    items: [
      { name: "AWS", icon: FaAws, level: "Proficient", color: "#FF9900" },
      { name: "VPS", icon: FaServer, level: "Proficient", color: "#94A3B8" },
      { name: "Hostinger", icon: SiHostinger, level: "Proficient", color: "#673DE6" },
      { name: "Vercel", icon: SiVercel, level: "Advanced", color: "#ffffff" },
    ],
  },
  {
    title: "Familiar With",
    items: [
      { name: "Laravel", icon: SiLaravel, level: "Familiar", color: "#FF2D20" },
      { name: "NestJS", icon: SiNestjs, level: "Familiar", color: "#E0234E" },
      { name: "Docker", icon: SiDocker, level: "Familiar", color: "#2496ED" },
      { name: "PostgreSQL", icon: SiPostgresql, level: "Familiar", color: "#4169E1" },
      { name: "SQL", icon: SiMysql, level: "Familiar", color: "#4479A1" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: SiGit, level: "Advanced", color: "#F05032" },
      { name: "GitHub", icon: SiGithub, level: "Advanced", color: "#ffffff" },
      { name: "Postman", icon: SiPostman, level: "Advanced", color: "#FF6C37" },
      { name: "VS Code", icon: VscCode, level: "Advanced", color: "#3B82F6" },
    ],
  },
  {
    title: "UI / Design",
    items: [
      { name: "Responsive Web Design", icon: FaLayerGroup, level: "Advanced", color: "#A78BFA" },
      { name: "UI Implementation", icon: FaDatabase, level: "Advanced", color: "#F472B6" },
    ],
  },
];

// Bar values are placeholders; replace them with your own numbers.
export const skills: Skill[] = [
  { name: "React / Next.js", percentage: 90, category: "Frontend" },
  { name: "JavaScript / TypeScript", percentage: 88, category: "Frontend" },
  { name: "Tailwind CSS / Responsive UI", percentage: 90, category: "Frontend" },
  { name: "Node.js / Express / REST APIs", percentage: 85, category: "Backend" },
  { name: "PHP", percentage: 65, category: "Backend" },
  { name: "MongoDB / Supabase", percentage: 82, category: "Backend" },
  { name: "AWS / VPS / Hostinger", percentage: 75, category: "Engineering" },
  { name: "Git / GitHub / Postman", percentage: 88, category: "Engineering" },
];

// Placeholder values, replace with your own numbers.
export const circularSkills: Skill[] = [
  { name: "Frontend", percentage: 90, category: "core" },
  { name: "Backend", percentage: 82, category: "core" },
  { name: "UI / UX", percentage: 85, category: "core" },
  { name: "DevOps", percentage: 72, category: "core" },
];
