import type { Certificate } from "@/types";

export const certificates: Certificate[] = [
  {
    id: "aws-saa",
    title: "AWS Certified Solutions Architect — Associate",
    issuer: "Amazon Web Services",
    year: "2025",
    image: "/certificates/aws.svg",
    url: "https://aws.amazon.com/certification/",
  },
  {
    id: "meta-frontend",
    title: "Front-End Developer Professional Certificate",
    issuer: "Meta",
    year: "2020",
    image: "/certificates/meta.svg",
    url: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
  },
  {
    id: "gcp-ace",
    title: "Google Associate Cloud Engineer",
    issuer: "Google Cloud",
    year: "2024",
    image: "/certificates/gcp.svg",
    url: "https://cloud.google.com/learn/certification",
  },
  {
    id: "epic-react",
    title: "Epic React — Advanced Patterns",
    issuer: "Kent C. Dodds",
    year: "2023",
    image: "/certificates/epicreact.svg",
    url: "https://epicreact.dev",
  },
  {
    id: "testing-js",
    title: "Testing JavaScript Applications",
    issuer: "Kent C. Dodds",
    year: "2022",
    image: "/certificates/testingjs.svg",
    url: "https://testingjavascript.com",
  },
  {
    id: "a11y-cert",
    title: "Web Accessibility Specialist (WAS)",
    issuer: "IAAP",
    year: "2024",
    image: "/certificates/iaap.svg",
    url: "https://www.accessibilityassociation.org/",
  },
];
