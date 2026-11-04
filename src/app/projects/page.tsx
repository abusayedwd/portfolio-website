import type { Metadata } from "next";
import { PageHeader } from "@/components/common/page-header";
import { Projects } from "@/components/sections/projects";
import { GithubSection } from "@/components/sections/github";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A portfolio of products, open-source libraries, and experiments — filterable by frontend, full stack, open source, UI, and animation work.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Projects & open source"
        description="Every project here shipped to real users. Filter by category to explore."
      />
      <Projects />
      <GithubSection />
    </>
  );
}
