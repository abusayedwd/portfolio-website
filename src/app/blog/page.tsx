import type { Metadata } from "next";
import { PageHeader } from "@/components/common/page-header";
import { BlogList } from "@/components/sections/blog-list";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles on React, TypeScript, performance, animation, accessibility, and building better web products.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Writing"
        title="Notes from the trenches"
        description="Lessons learned shipping production software — written for developers who care about craft."
      />
      <BlogList />
    </>
  );
}
