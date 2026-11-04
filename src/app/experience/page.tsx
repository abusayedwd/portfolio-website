import type { Metadata } from "next";
import { PageHeader } from "@/components/common/page-header";
import { Experience } from "@/components/sections/experience";
import { Education } from "@/components/sections/education";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "My professional journey — from frontend developer to full-stack developer at STA, plus my education.",
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
    </>
  );
}
