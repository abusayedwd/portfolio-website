# Developer Portfolio — Adnan Sayed

A premium, production-ready portfolio website built with Next.js 15, React 19, TypeScript, Tailwind CSS v4, and Framer Motion. No backend required — all content lives in local TypeScript data files.

## Tech Stack

- **Framework:** Next.js 15 (App Router, Turbopack)
- **UI:** React 19, Tailwind CSS v4, shadcn-style components
- **Animation:** Framer Motion (+ GSAP available where needed)
- **Icons:** Lucide React, React Icons
- **Theming:** next-themes (dark / light / system)
- **Forms:** Web3Forms (frontend-only contact form)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configuration

1. **Personal info** — edit `src/constants/index.ts` (name, role, email, socials, resume URL).
2. **Content** — all content lives in `src/data/`:
   - `projects.ts`, `skills.ts`, `experience.ts`, `services.ts`, `certificates.ts`, `blog.ts`, `social.ts`, `testimonials.ts`, `stats.ts`
3. **Contact form** — create a free access key at [web3forms.com](https://web3forms.com) and add it to `.env.local`:

```bash
NEXT_PUBLIC_WEB3FORMS_KEY=your-access-key
```

4. **Resume** — replace `public/resume.pdf` with your real resume.
5. **OG image** — add a 1200×630 `public/og-image.png` for social sharing cards.

## Project Structure

```
src/
├── app/                # Routes (App Router) + SEO (sitemap, robots, manifest)
├── components/
│   ├── ui/             # Primitives (button, card, badge, input…)
│   ├── layout/         # Navbar, footer, theme provider/toggle
│   ├── sections/       # Page sections (hero, projects, contact…)
│   └── common/         # Shared building blocks (reveal, magnetic, aurora…)
├── hooks/              # Custom hooks (typing effect, count-up, scroll…)
├── lib/                # Utilities & motion variants
├── constants/          # Site config & navigation
├── types/              # Shared TypeScript types
└── data/               # All content (projects, skills, blog…)
```

## Scripts

| Command         | Description                    |
| --------------- | ------------------------------ |
| `npm run dev`   | Start dev server (Turbopack)   |
| `npm run build` | Production build               |
| `npm run start` | Serve the production build     |
| `npm run lint`  | Run ESLint                     |

## Features

- Dark / light / system theme with zero-flash hydration
- Scroll progress bar, cursor glow, aurora backgrounds, magnetic buttons
- Filterable project grid, animated skill bars & circular indicators
- Vertical experience timeline, testimonial slider, animated stat counters
- Local-data blog with categories, reading time, and static generation
- Contact form with validation, success animation, and Web3Forms delivery
- Full SEO: metadata, Open Graph, Twitter cards, JSON-LD, sitemap, robots, manifest
- Accessible: semantic HTML, ARIA labels, keyboard navigation, focus states, reduced-motion support
