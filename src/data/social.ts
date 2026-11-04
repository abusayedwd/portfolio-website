import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";
import type { SocialLink } from "@/types";

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/abusayedwd",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/abu-sayed-6619b127b",
    icon: FaLinkedinIn,
  },
  {
    name: "Email",
    url: "mailto:abusayednalita1234@gmail.com",
    icon: LuMail,
  },
];
