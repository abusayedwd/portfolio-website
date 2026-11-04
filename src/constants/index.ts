import type { NavLink } from "@/types";

export const SITE_CONFIG = {
  name: "Abu Sayed",
  initials: "AS",
  role: "Full-Stack Developer",
  roles: [
    "Full-Stack Developer",
    "Frontend Developer",
    "React.js Developer",
    "Next.js Developer",
  ],
  tagline:
    "I build responsive web applications and REST API integrations with React, Next.js, and Node.js.",
  email: "abusayednalita1234@gmail.com",
  location: "Dhaka, Bangladesh",
  availability: "Open to Full-Stack / Frontend opportunities",
  url: "https://adnansayed.dev",
  resumeUrl: "/resume.pdf",
  yearsOfExperience: 2,
  githubUsername: "abusayedwd",
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LINKS: NavLink[] = [
  ...NAV_LINKS,
  { label: "Skills", href: "/skills" },
  { label: "Services", href: "/services" },
  { label: "Certificates", href: "/certificates" },
];

export const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";
