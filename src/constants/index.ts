import type { NavLink } from "@/types";

export const SITE_CONFIG = {
  name: "Adnan Sayed",
  initials: "AS",
  role: "Senior Frontend Engineer & Full-Stack Developer",
  roles: [
    "Senior Frontend Engineer",
    "Full-Stack Developer",
    "Product Engineer",
    "UI Engineer",
    "Open Source Contributor",
  ],
  tagline:
    "I build high-performance, accessible web products that feel polished, scale cleanly, and ship with confidence.",
  email: "hello@adnansayed.dev",
  location: "Dhaka, Bangladesh",
  availability: "Open to Senior Frontend / Full-Stack opportunities",
  url: "https://adnansayed.dev",
  resumeUrl: "/resume.pdf",
  yearsOfExperience: 7,
  githubUsername: "adnansayed",
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
