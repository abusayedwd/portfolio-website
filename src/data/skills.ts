import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiFramer,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiPrisma,
  SiGit,
  SiDocker,
  SiFigma,
  SiJest,
  SiVitest,
  SiStorybook,
  SiPython,
  SiGo,
  SiVercel,
  SiGithubactions,
  SiKubernetes,
  SiGreensock,
  SiThreedotjs,
  SiHtml5,
  SiCss,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { VscCode } from "react-icons/vsc";
import type { Skill, TechCategory } from "@/types";

export const techCategories: TechCategory[] = [
  {
    title: "Frontend",
    items: [
      { name: "React", icon: SiReact, level: "Expert", color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, level: "Expert", color: "#ffffff" },
      { name: "TypeScript", icon: SiTypescript, level: "Expert", color: "#3178C6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: "Expert", color: "#06B6D4" },
      { name: "Redux", icon: SiRedux, level: "Advanced", color: "#764ABC" },
      { name: "HTML5", icon: SiHtml5, level: "Expert", color: "#E34F26" },
      { name: "CSS3", icon: SiCss, level: "Expert", color: "#663399" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs, level: "Expert", color: "#339933" },
      { name: "Express", icon: SiExpress, level: "Expert", color: "#ffffff" },
      { name: "NestJS", icon: SiNestjs, level: "Advanced", color: "#E0234E" },
      { name: "GraphQL", icon: SiGraphql, level: "Advanced", color: "#E10098" },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql, level: "Advanced", color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, level: "Advanced", color: "#47A248" },
      { name: "Redis", icon: SiRedis, level: "Proficient", color: "#FF4438" },
      { name: "Prisma", icon: SiPrisma, level: "Advanced", color: "#2D3748" },
    ],
  },
  {
    title: "Languages",
    items: [
      { name: "JavaScript", icon: SiJavascript, level: "Expert", color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, level: "Expert", color: "#3178C6" },
      { name: "Python", icon: SiPython, level: "Proficient", color: "#3776AB" },
      { name: "Go", icon: SiGo, level: "Familiar", color: "#00ADD8" },
    ],
  },
  {
    title: "Libraries",
    items: [
      { name: "Framer Motion", icon: SiFramer, level: "Expert", color: "#ffffff" },
      { name: "GSAP", icon: SiGreensock, level: "Advanced", color: "#88CE02" },
      { name: "Three.js", icon: SiThreedotjs, level: "Proficient", color: "#ffffff" },
      { name: "Jest", icon: SiJest, level: "Advanced", color: "#C21325" },
      { name: "Vitest", icon: SiVitest, level: "Advanced", color: "#6E9F18" },
      { name: "Storybook", icon: SiStorybook, level: "Advanced", color: "#FF4785" },
    ],
  },
  {
    title: "DevOps",
    items: [
      { name: "Docker", icon: SiDocker, level: "Advanced", color: "#2496ED" },
      { name: "AWS", icon: FaAws, level: "Proficient", color: "#FF9900" },
      { name: "Vercel", icon: SiVercel, level: "Expert", color: "#ffffff" },
      { name: "GitHub Actions", icon: SiGithubactions, level: "Advanced", color: "#2088FF" },
      { name: "Kubernetes", icon: SiKubernetes, level: "Familiar", color: "#326CE5" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: SiGit, level: "Expert", color: "#F05032" },
      { name: "Figma", icon: SiFigma, level: "Advanced", color: "#F24E1E" },
      { name: "VS Code", icon: VscCode, level: "Expert", color: "#3B82F6" },
    ],
  },
];

export const skills: Skill[] = [
  { name: "React / Next.js", percentage: 96, category: "Frontend" },
  { name: "TypeScript", percentage: 94, category: "Frontend" },
  { name: "CSS / Tailwind", percentage: 95, category: "Frontend" },
  { name: "Animation (Motion / GSAP)", percentage: 90, category: "Frontend" },
  { name: "Node.js / APIs", percentage: 88, category: "Backend" },
  { name: "Database Design", percentage: 84, category: "Backend" },
  { name: "System Architecture", percentage: 82, category: "Backend" },
  { name: "Testing & CI/CD", percentage: 86, category: "Engineering" },
  { name: "Performance Optimization", percentage: 91, category: "Engineering" },
  { name: "Accessibility (a11y)", percentage: 89, category: "Engineering" },
];

export const circularSkills: Skill[] = [
  { name: "Frontend", percentage: 95, category: "core" },
  { name: "Backend", percentage: 86, category: "core" },
  { name: "UI / UX", percentage: 90, category: "core" },
  { name: "DevOps", percentage: 78, category: "core" },
];
