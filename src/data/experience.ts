import type { EducationItem, ExperienceItem } from "@/types";

export const experience: ExperienceItem[] = [
  {
    id: "polygon-labs",
    company: "Polygon Labs",
    role: "Senior Full Stack Engineer",
    duration: "Mar 2023 — Present",
    location: "Remote",
    description:
      "Leading frontend architecture for the developer platform used by 120k+ monthly active developers. Own the design system, performance budgets, and release pipeline.",
    technologies: ["Next.js", "TypeScript", "GraphQL", "PostgreSQL", "AWS"],
    achievements: [
      "Cut p75 page load time from 3.2s to 1.1s through code splitting and edge rendering",
      "Built an internal design system adopted by 6 product teams",
      "Mentored 5 engineers; 2 promoted to senior within a year",
    ],
  },
  {
    id: "brightflow",
    company: "Brightflow",
    role: "Full Stack Developer",
    duration: "Jun 2021 — Feb 2023",
    location: "Singapore (Hybrid)",
    description:
      "Built the core financial forecasting product from Series A to Series B, shipping features across the React frontend and Node.js services with a strong focus on reliability and product velocity.",
    technologies: ["React", "Node.js", "NestJS", "Redis", "Docker"],
    achievements: [
      "Shipped the cash-flow forecasting engine generating 30% of new revenue",
      "Reduced API error rate by 70% by introducing typed contracts with tRPC",
      "Led migration from CRA to Next.js with zero downtime",
    ],
  },
  {
    id: "pixelworks",
    company: "PixelWorks Studio",
    role: "Frontend Developer",
    duration: "Jan 2020 — May 2021",
    location: "Dhaka, Bangladesh",
    description:
      "Delivered 15+ marketing sites and web apps for international clients with a strong focus on animation, interaction design, and measurable performance improvements.",
    technologies: ["React", "GSAP", "Framer Motion", "Sanity CMS"],
    achievements: [
      "Won 2 Awwwards Honorable Mentions for interactive campaign sites",
      "Standardized an animation toolkit that cut build time per project by 40%",
      "Maintained 95+ Lighthouse scores across all client deliveries",
    ],
  },
  {
    id: "freelance",
    company: "Freelance",
    role: "Web Developer",
    duration: "Mar 2019 — Dec 2019",
    location: "Remote",
    description:
      "Worked with startups and agencies building responsive websites, dashboards, and e-commerce experiences while completing my degree.",
    technologies: ["JavaScript", "React", "Node.js", "MongoDB"],
    achievements: [
      "Completed 20+ client projects with a 5.0 average rating",
      "Built an e-commerce storefront that processed $200k in first-year sales",
    ],
  },
];

export const education: EducationItem[] = [
  {
    id: "bsc-cse",
    institution: "Bangladesh University of Engineering and Technology",
    degree: "B.Sc. in Computer Science & Engineering",
    duration: "2015 — 2019",
    description:
      "Graduated with distinction. Focused on algorithms, distributed systems, and human-computer interaction. Led the university web development club.",
  },
  {
    id: "meta-cert",
    institution: "Meta (Coursera)",
    degree: "Front-End Developer Professional Certificate",
    duration: "2020",
    description:
      "Completed the 9-course specialization covering advanced React patterns, UX principles, and technical interview preparation.",
  },
];
