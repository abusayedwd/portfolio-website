import type { Metadata } from "next";
import { PageHeader } from "@/components/common/page-header";
import { Certificates } from "@/components/sections/certificates";

export const metadata: Metadata = {
  title: "Certificates",
  description:
    "Industry certifications and professional courses — AWS, Google Cloud, Meta, accessibility, and advanced React training.",
  alternates: { canonical: "/certificates" },
};

export default function CertificatesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Credentials"
        title="Certificates & training"
        description="Continuous learning, verified. Click any card to view the credential."
      />
      <Certificates />
    </>
  );
}
