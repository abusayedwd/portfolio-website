import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/hero";

// Below-the-fold sections are code-split to keep the initial bundle lean.
const Projects = dynamic(() =>
  import("@/components/sections/projects").then((mod) => mod.Projects)
);
const Experience = dynamic(() =>
  import("@/components/sections/experience").then((mod) => mod.Experience)
);
const TechOverview = dynamic(() =>
  import("@/components/sections/tech-overview").then((mod) => mod.TechOverview)
);
const ContactCta = dynamic(() =>
  import("@/components/sections/contact-cta").then((mod) => mod.ContactCta)
);

export default function HomePage() {
  return (
    <>
      <Hero />
      <Projects limit={3} featuredOnly showFilters={false} showViewAll />
      <Experience />
      <TechOverview />
      <ContactCta />
    </>
  );
}
