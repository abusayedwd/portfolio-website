import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_CONFIG.name} — ${SITE_CONFIG.role}`,
    short_name: SITE_CONFIG.name,
    description: SITE_CONFIG.tagline,
    start_url: "/",
    display: "standalone",
    background_color: "#09090b",
    theme_color: "#09090b",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
