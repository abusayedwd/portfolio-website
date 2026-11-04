import type { StatItem } from "@/types";

export const stats: StatItem[] = [
  { label: "Projects Showcased", value: 4, suffix: "" },
  { label: "Years of Experience", value: 2, suffix: "+" },
  { label: "Technologies Mastered", value: 30, suffix: "+" },
  { label: "Happy Clients", value: 26, suffix: "+" },
  { label: "Certifications", value: 6, suffix: "" },
];

export const githubStats = {
  repos: 64,
  stars: 3200,
  contributions: 2847,
  followers: 1250,
  topLanguages: [
    { name: "TypeScript", percentage: 46, color: "#3178C6" },
    { name: "JavaScript", percentage: 22, color: "#F7DF1E" },
    { name: "CSS", percentage: 14, color: "#663399" },
    { name: "Python", percentage: 10, color: "#3776AB" },
    { name: "Go", percentage: 8, color: "#00ADD8" },
  ],
};
