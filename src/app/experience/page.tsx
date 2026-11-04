import type { Metadata } from "next";
import { PageHeader } from "@/components/common/page-header";
import { Experience } from "@/components/sections/experience";
import { Education } from "@/components/sections/education";
import { Testimonials } from "@/components/sections/testimonials";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "My professional journey — from award-winning agency work to senior engineering at venture-backed startups and platform teams.",
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Career"
        title="Experience & education"
        description="The roles, teams, and milestones that shaped how I build software."
      />
      <Experience />
      <Education />
      <Testimonials />
    </>
  );
}
