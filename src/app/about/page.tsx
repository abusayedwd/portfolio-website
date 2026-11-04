import type { Metadata } from "next";
import { PageHeader } from "@/components/common/page-header";
import { About } from "@/components/sections/about";
import { Education } from "@/components/sections/education";
import { Stats } from "@/components/sections/stats";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about my journey from freelancer to senior full stack engineer — my values, experience, and what drives me.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Me"
        title="The person behind the pixels"
        description="Seven years of shipping products, growing teams, and chasing that perfect balance of craft and speed."
      />
      <About />
      <Stats />
      <Education />
    </>
  );
}
