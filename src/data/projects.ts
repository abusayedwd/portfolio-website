import type { Project, ProjectCategory } from "@/types";

export const PROJECT_FILTERS: ProjectCategory[] = [
  "All",
  "Frontend",
  "Full Stack",
  "Open Source",
  "UI",
  "Animation",
];

export const projects: Project[] = [
  {
    id: "gitgotech-ecommerce",
    title: "GitGoTech E-Commerce",
    description:
      "A full e-commerce storefront with product catalog, cart and checkout, custom order requests, coupons, hot deals, and a customer dashboard with live notifications and messaging.",
    details:
      "Sleeknit is a multi-vendor fashion marketplace. Shoppers browse ready-made pieces across men, women, kids, shoes, sneakers, beauty and home decor, while vendors run their own showrooms. Customers can also commission custom designs and connect directly with tailors. The storefront features sponsored banners, top vendors and products, hot deals, new arrivals, and live notifications. A separate admin panel handles management. Access is split by role (Admin, Manager, Tech). Admins manage users, vendors, drivers, managers, and products, approve requested accounts, and run categories, coupons, careers, and payments. The support team works a ticket queue where tickets can be accepted, escalated, resolved, or moved to the backlog. Store settings are controlled with view and edit permissions.",
    image: "/images/sleeknit.png",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Ant Design",
      "Firebase",
      "Socket.IO",
      "Leaflet",
      "Recharts",
    ],
    features: [
      "Product catalog with categories and new arrivals",
      "Cart, checkout and order tracking",
      "Custom order and design request flows",
      "Coupons, hot deals and live notifications",
    ],
    parts: [
      {
        name: "Frontend",
        image: "/images/sleeknit.png",
        tech: ["Next.js 16", "React 19", "TypeScript", "Ant Design", "Firebase", "Socket.IO client", "Leaflet", "jsPDF"],
        github: "https://github.com/sparktechagency/gitgotech-E-commerce-website",
        live: "https://www.sleeknit.com",
      },
      {
        name: "Dashboard",
        description:
          "The admin panel for the Sleeknit store. Access is split by role (Admin, Manager, Tech), so each team sees only the tools they need.",
        features: [
          "Role-based access control for Admin, Manager and Tech roles",
          "Manage users, vendors, drivers, managers, and products",
          "Approve requested accounts and applications",
          "Manage categories, coupons, careers, and payments",
          "Support ticket queue: accept, escalate, resolve, or backlog tickets",
          "Store settings with view and edit permissions",
        ],
        tech: ["React 19", "Vite", "Ant Design", "Redux Toolkit", "Tailwind CSS", "Recharts", "Firebase"],
        github: "https://github.com/sparktechagency/gitgotech-E-commerce-dashboardd",
      },
    ],
    status: "Maintained",
    github: "https://github.com/sparktechagency/gitgotech-E-commerce-website",
    demo: "https://www.sleeknit.com",
    category: ["Full Stack"],
    date: "2026-11",
    featured: true,
  },
  {
    id: "mynexthome",
    title: "MyNextHome — Real Estate",
    description:
      "A real-estate marketplace for Bangladesh covering renting, buying and listing property across all 64 districts, with real-time owner chat and viewing bookings.",
    details:
      "MyNextHome lets tenants search and save homes, chat with owners in real time, and book viewings. Landlords list and promote properties and track buyer interest. Admins moderate users and listings, review reported posts, and manage banners and static pages. The platform is split into a public website, a REST and WebSocket API, and an admin dashboard.\n\nThe admin panel is where the marketplace is managed. Admins review an earnings overview with a yearly chart, and manage users and landlords, including viewing details and blocking or unblocking accounts. They control every listing by hiding, showing, or deleting it, and work through a review queue for reported listings. They also manage homepage banners, contact information, and static pages. Only accounts with the admin role can sign in.",
    image: "/images/nexthome-web.png",
    techStack: [
      "Next.js",
      "React",
      "Redux Toolkit",
      "Ant Design",
      "Socket.IO",
      "Leaflet",
      "Express",
      "MongoDB",
      "Stripe",
    ],
    features: [
      "Search and save homes across 64 districts",
      "Real-time chat between tenants and owners",
      "Viewing bookings and listing promotion",
      "Admin dashboard for moderation and reports",
    ],
    parts: [
      {
        name: "Frontend",
        image: "/images/nexthome-web.png",
        tech: ["Next.js 15", "React 19", "Redux Toolkit", "Ant Design", "Socket.IO client", "Leaflet", "Swiper"],
        github: "https://github.com/abusayedwd/property-rental-website",
        live: "https://property-rental-website-three.vercel.app",
      },
      {
        name: "Server",
        tech: ["Node.js", "Express", "MongoDB", "Mongoose", "Passport JWT", "Socket.IO", "Stripe", "Cloudinary"],
        github: "https://github.com/abusayedwd/property-rental-serverr",
      },
      {
        name: "Dashboard",
        image: "/images/nexthome-ds.png",
        description:
          "The admin panel for MyNextHome, used to moderate users, listings, and content across the marketplace. Only accounts with the admin role can sign in.",
        features: [
          "Earnings overview with a yearly chart",
          "User and landlord management with detail view, block and unblock",
          "Listing control: hide, show, or delete any property",
          "Review queue for reported listings",
          "Manage homepage banners, contact information, and static pages",
        ],
        tech: ["React 18", "Vite", "Redux Toolkit", "RTK Query", "Ant Design", "Tailwind CSS", "Recharts"],
        github: "https://github.com/abusayedwd/property-rental-dashboard",
        live: "https://property-rental-dashboard-six.vercel.app",
      },
    ],
    status: "Maintained",
    github: "https://github.com/abusayedwd/property-rental-website",
    demo: "https://property-rental-website-three.vercel.app",
    category: ["Full Stack"],
    date: "2026-10",
    featured: true,
  },
  {
    id: "influencer-marketing",
    title: "Influencer Marketing Platform",
    description:
      "A platform connecting influencers and brand owners: collaboration invitations, content approval, and campaign performance reports.",
    details:
      "The Influencer Marketing Platform connects influencers with brand owners. Influencers manage their profiles, accept or reject brand invitations, and submit promotional content for approval. Brand owners send invitations, review content, and track campaign performance. Admins manage users, approve content, and review campaign reports.",
    image: "/images/influencerweb.png",
    techStack: ["Next.js", "React", "Redux Toolkit", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT"],
    features: [
      "Brand invitations accepted or rejected by influencers",
      "Content submission and brand approval workflow",
      "Campaign and performance reporting",
      "Role-based access for influencers, brands and admins",
    ],
    parts: [
      {
        name: "Frontend",
        image: "/images/influencerweb.png",
        description:
          "The public-facing marketing website for the platform, built with Next.js and Redux Toolkit.",
        tech: ["Next.js 15", "React 19", "Redux Toolkit", "React Redux", "Tailwind CSS", "Ant Design", "Framer Motion", "Swiper", "Socket.IO client"],
        live: "https://brand-marketing-website-sigma.vercel.app",
      },
      {
        name: "Dashboard",
        image: "/images/inlfuencer-ds.png",
        description:
          "The dashboard companion to the platform, built with React, Vite, and Redux Toolkit.",
        tech: ["React 18", "Vite", "Redux Toolkit", "Tailwind CSS", "Ant Design", "Recharts", "React Router"],
        live: "https://brand-marketing-ds.vercel.app",
      },
      {
        name: "Server",
        tech: ["Node.js", "Express", "MongoDB", "JWT"],
        github: "https://github.com/abusayedwd/Influencer-Marketing-server",
      },
    ],
    status: "Completed",
    github: "https://github.com/abusayedwd/Influencer-Marketing-server",
    demo: "https://brand-marketing-website-sigma.vercel.app",
    category: ["Full Stack"],
    date: "2025-11",
    featured: true,
  },
  {
    id: "realtime-chat-app",
    title: "Realtime Chat App",
    description:
      "A full-stack real-time messaging platform with OTP email auth, rotating refresh tokens, live presence, typing indicators, read receipts, and WebRTC audio/video calls.",
    details:
      "A production-minded chat platform. Users register with an email OTP, and sessions use short-lived access tokens with rotating refresh tokens stored as HTTP-only cookies. Socket.IO handles messaging, typing, presence and read receipts, and scales horizontally through a Redis adapter. Audio and video calls use WebRTC with Socket.IO as the signaling channel. The repo is a monorepo with a Node backend and a Next.js frontend.",
    image: "/images/chap-web.png",
    techStack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "Socket.IO",
      "MongoDB",
      "Redis",
      "Redux Toolkit",
      "WebRTC",
    ],
    features: [
      "OTP email verification with brute-force lockout",
      "Socket.IO with Redis adapter for horizontal scaling",
      "Text, image, video and file sharing (up to 50 MB)",
      "Audio & video calls over WebRTC signaling",
    ],
    parts: [
      {
        name: "Frontend",
        image: "/images/chap-web.png",
        tech: ["Next.js 14", "Redux Toolkit", "RTK Query", "Tailwind CSS", "Socket.IO client"],
        github: "https://github.com/abusayedwd/realtime-chatApp",
        live: "https://pacpac-chat-frontend.onrender.com",
      },
      {
        name: "Backend",
        tech: ["Node.js", "Express", "TypeScript", "Socket.IO", "MongoDB", "Redis"],
        github: "https://github.com/abusayedwd/realtime-chatApp",
      },
    ],
    status: "Maintained",
    github: "https://github.com/abusayedwd/realtime-chatApp",
    demo: "https://pacpac-chat-frontend.onrender.com",
    category: ["Full Stack"],
    date: "2026-08",
  },
];
