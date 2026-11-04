import type { IconType } from "react-icons";

export type ProjectCategory =
  | "All"
  | "Frontend"
  | "Full Stack"
  | "Open Source"
  | "UI"
  | "Animation";

export type ProjectStatus = "Completed" | "In Progress" | "Maintained";

/** One deployable part of a project (frontend, server, dashboard, ...). */
export interface ProjectPart {
  name: string;
  /** Screenshot from public/images shown on the details page. */
  image?: string;
  /** Short write-up about what this part does. */
  description?: string;
  /** What this part offers, e.g. admin capabilities. */
  features?: string[];
  tech: string[];
  github?: string;
  live?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  /** Longer write-up shown on the project details page. */
  details?: string;
  image: string;
  techStack: string[];
  features: string[];
  status: ProjectStatus;
  github: string;
  demo: string;
  /** Repos and live links per part, e.g. Frontend / Server / Dashboard. */
  parts?: ProjectPart[];
  category: Exclude<ProjectCategory, "All">[];
  date: string;
  featured?: boolean;
}

export type SkillLevel = "Expert" | "Advanced" | "Proficient" | "Familiar";

export interface TechItem {
  name: string;
  icon: IconType;
  level: SkillLevel;
  color: string;
}

export interface TechCategory {
  title: string;
  items: TechItem[];
}

export interface Skill {
  name: string;
  percentage: number;
  category: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  description: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  image: string;
  url: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: IconType;
  highlights: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  date: string;
  readingTime: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  initials: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: IconType;
}

export interface StatItem {
  label: string;
  value: number;
  suffix: string;
}

export interface NavLink {
  label: string;
  href: string;
}
