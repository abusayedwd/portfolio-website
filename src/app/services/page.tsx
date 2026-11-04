import type { Metadata } from "next";
import { PageHeader } from "@/components/common/page-header";
import { Services } from "@/components/sections/services";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Frontend development, full stack builds, API design, performance optimization, and more — services for startups and teams.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="What I can do for you"
        description="Engagements from one-week performance rescues to multi-month product builds."
      />
      <Services />
      <Testimonials />
      <Contact />
    </>
  );
}
