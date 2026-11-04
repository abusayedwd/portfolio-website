import type { Metadata } from "next";
import { PageHeader } from "@/components/common/page-header";
import { About } from "@/components/sections/about";
import { Education } from "@/components/sections/education";
import { Stats } from "@/components/sections/stats";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about my journey from frontend developer to full-stack developer — my experience, education, and what drives me.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Me"
        title="The person behind the pixels"
        description="Two years of building responsive web applications across the frontend and backend."
      />
      <About />
      <Stats />
      <Education />
    </>
  );
}
