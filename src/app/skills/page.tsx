import type { Metadata } from "next";
import { PageHeader } from "@/components/common/page-header";
import { TechStack } from "@/components/sections/tech-stack";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "My technical toolkit — frontend, backend, databases, DevOps, and the libraries I use to ship production software.",
  alternates: { canonical: "/skills" },
};

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Skills"
        title="Tools, technologies & depth"
        description="A transparent look at what I use daily and how deep each skill goes."
      />
      <TechStack />
    </>
  );
}
