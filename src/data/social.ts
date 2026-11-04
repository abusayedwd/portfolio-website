import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaDribbble,
} from "react-icons/fa6";
import { LuMail } from "react-icons/lu";
import type { SocialLink } from "@/types";

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/adnansayed",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/adnansayed",
    icon: FaLinkedinIn,
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/adnansayed_dev",
    icon: FaXTwitter,
  },
  {
    name: "Dribbble",
    url: "https://dribbble.com/adnansayed",
    icon: FaDribbble,
  },
  {
    name: "Email",
    url: "mailto:hello@adnansayed.dev",
    icon: LuMail,
  },
];
