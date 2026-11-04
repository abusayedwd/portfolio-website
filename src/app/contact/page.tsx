import type { Metadata } from "next";
import { PageHeader } from "@/components/common/page-header";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch for freelance projects, full-time roles, or collaboration. I usually respond within 24 hours.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Say hello"
        description="Whether it's a project brief, a role, or a question about one of my articles — I'd love to hear from you."
      />
      <Contact />
    </>
  );
}
