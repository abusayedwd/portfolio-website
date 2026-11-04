import type { EducationItem, ExperienceItem } from "@/types";

export const experience: ExperienceItem[] = [
  {
    id: "sta-fullstack",
    company: "STA",
    role: "Full-Stack Developer",
    duration: "Jul 2025 — Present",
    location: "Bangladesh",
    description:
      "Develop and maintain frontend and backend features for web applications, building responsive interfaces and integrating REST APIs.",
    technologies: ["React.js", "Next.js", "Node.js", "Express.js", "PHP", "REST APIs"],
    achievements: [
      "Develop and maintain frontend and backend features for web applications",
      "Build responsive interfaces, reusable components, and REST API integrations",
    ],
  },
  {
    id: "sta-frontend",
    company: "STA",
    role: "Frontend Developer",
    duration: "Jun 2024 — Jun 2025",
    location: "Bangladesh",
    description:
      "Developed responsive user interfaces and reusable frontend components, and maintained website layouts and frontend functionality.",
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
    achievements: [
      "Developed responsive user interfaces and reusable frontend components",
      "Implemented website layouts and maintained frontend functionality",
    ],
  },
];

export const education: EducationItem[] = [
  {
    id: "bsc",
    institution: "Tongi Government College",
    degree: "Bachelor of Science (B.Sc.)",
    duration: "2018",
    description: "",
  },
];
