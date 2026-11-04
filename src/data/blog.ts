import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "react-server-components-mental-model",
    title: "A Practical Mental Model for React Server Components",
    excerpt:
      "RSC confused me for months until I stopped thinking about 'where code runs' and started thinking about 'when code runs'. Here's the mental model that finally made it click.",
    content: [
      "React Server Components are often explained in terms of location — server code versus client code. But the more useful framing is temporal: server components run at request (or build) time and produce a static description of UI, while client components run in the browser and stay alive to handle interaction.",
      "Once you adopt this framing, the rules stop feeling arbitrary. Server components can't use useState because they finish executing before the user ever sees the page — there is nothing left to hold state. Client components can't be async because the browser render loop is synchronous by design.",
      "The practical workflow I recommend: default every component to a server component. The moment you need an event handler, a browser API, or state, extract the smallest possible island and mark it with 'use client'. Keep the boundary low in the tree — pass server-rendered children through client wrappers rather than converting whole subtrees.",
      "The biggest wins in my projects came from moving data fetching into server components. Waterfalls disappear because fetches co-locate with the components that need the data, and the client bundle shrinks because data-layer code never ships to the browser.",
    ],
    category: "React",
    date: "2026-05-14",
    readingTime: "7 min read",
    tags: ["React", "Next.js", "Architecture"],
  },
  {
    slug: "animations-that-dont-hurt-performance",
    title: "Shipping 60fps Animations Without Wrecking Performance",
    excerpt:
      "Beautiful motion and fast pages are not enemies. A field guide to compositor-friendly animations, based on lessons from three heavily-animated production sites.",
    content: [
      "Every animation on the web falls into one of two buckets: the ones the compositor can handle alone (transform, opacity, filter) and the ones that force layout or paint (width, height, top, left, box-shadow). The first bucket is nearly free. The second bucket is where jank lives.",
      "My rule on production projects is simple: scroll-linked and continuous animations may only touch compositor properties. If a design calls for animating height, I reach for transform: scaleY with a counter-scaled child, or I animate clip-path, which stays on the compositor in modern browsers.",
      "Framer Motion's layout animations are the pragmatic exception — they FLIP-invert layout changes into transforms for you. But measure the cost: layout projection isn't free on large trees. For lists over ~50 items, I switch to manual transforms.",
      "Finally, always gate motion behind prefers-reduced-motion. It's an accessibility requirement, but it's also a free performance win for the users most likely to be on low-end devices.",
    ],
    category: "Performance",
    date: "2026-03-02",
    readingTime: "9 min read",
    tags: ["Animation", "Performance", "CSS"],
  },
  {
    slug: "design-systems-for-small-teams",
    title: "Design Systems for Teams of Two",
    excerpt:
      "You don't need a design ops department to benefit from a design system. Here's the minimum viable system that has paid for itself on every project I've shipped.",
    content: [
      "The phrase 'design system' conjures images of dedicated teams and hundred-page documentation sites. But the core value — consistency through constraint — is available to any team willing to define tokens before components.",
      "Start with exactly four token groups: color (semantic, not literal — 'surface' not 'gray-100'), spacing (a single geometric scale), typography (five sizes maximum), and radius. Resist adding more until something hurts.",
      "Components come second, and only when a pattern appears three times. The third repetition tells you what the API should be — the first two are guesses. I've deleted more prematurely-abstracted components than I've kept.",
      "The payoff compounds: onboarding a new developer takes hours instead of days, dark mode becomes a token swap instead of a rewrite, and design reviews focus on flows instead of pixel disputes.",
    ],
    category: "Design",
    date: "2026-01-18",
    readingTime: "6 min read",
    tags: ["Design Systems", "CSS", "Teamwork"],
  },
  {
    slug: "typescript-tricks-production",
    title: "Five TypeScript Patterns I Use in Every Production Codebase",
    excerpt:
      "Branded types, discriminated unions, satisfies, const assertions, and template literal types — with the real bugs each one has caught for me.",
    content: [
      "TypeScript's value isn't autocomplete — it's making invalid states unrepresentable. These five patterns do the heaviest lifting in my codebases.",
      "Discriminated unions replace boolean soup. Instead of isLoading, isError, and data that might all disagree, a single status field with a union type makes impossible combinations impossible. Every async UI I write starts here.",
      "Branded types catch identifier mix-ups. A UserId and a ProjectId are both strings at runtime, but branding them means passing one where the other is expected becomes a compile error. This caught a genuinely scary bug in a billing integration last year.",
      "The satisfies operator validates without widening. Config objects keep their literal types for downstream inference while still being checked against a schema. Combined with const assertions, entire routing tables become fully type-safe.",
      "Template literal types shine at API boundaries — typing event names like `user:${Action}` means a typo in an event string fails the build instead of silently dropping events in production.",
    ],
    category: "TypeScript",
    date: "2025-11-20",
    readingTime: "8 min read",
    tags: ["TypeScript", "Patterns", "DX"],
  },
  {
    slug: "core-web-vitals-checklist",
    title: "The Core Web Vitals Checklist I Run on Every Launch",
    excerpt:
      "A pre-launch checklist covering LCP, CLS, and INP that has kept every site I've shipped in the green — with the specific fixes for each common failure.",
    content: [
      "Core Web Vitals fail for boring, predictable reasons. This checklist covers the failures I see repeatedly and their fixes.",
      "For LCP: the hero image must be discoverable in the initial HTML — no CSS backgrounds, no client-side rendering, no lazy loading above the fold. Use priority hints, preconnect to image CDNs, and serve AVIF with proper srcset.",
      "For CLS: every image gets explicit dimensions, every ad slot and embed gets a reserved container, and web fonts use size-adjust in @font-face so the fallback occupies identical space. Layout shift from fonts is a solved problem that most sites haven't solved.",
      "For INP: break long tasks with scheduler.yield or startTransition, debounce expensive input handlers, and audit third-party scripts ruthlessly — analytics tags are the top INP offender in every audit I've run.",
      "Measure with real-user data, not just lab runs. Lab Lighthouse on a dev machine tells you almost nothing about a mid-range Android phone on 4G.",
    ],
    category: "Performance",
    date: "2025-09-08",
    readingTime: "10 min read",
    tags: ["Performance", "Web Vitals", "SEO"],
  },
  {
    slug: "accessible-animations-guide",
    title: "Motion Without Motion Sickness: Accessible Animation Patterns",
    excerpt:
      "Vestibular disorders affect more people than color blindness, yet reduced-motion support is an afterthought on most sites. Here's how to design motion that everyone can use.",
    content: [
      "Roughly 35% of adults over 40 experience some form of vestibular dysfunction. For them, parallax scrolling and large-scale zoom transitions aren't delightful — they're physically nauseating. Respecting prefers-reduced-motion isn't optional polish; it's baseline accessibility.",
      "Reduced motion doesn't mean no motion. The guidance is to remove motion that's large, unexpected, or tied to scroll — while keeping small, informative transitions. A 150ms opacity fade communicates state change without triggering symptoms.",
      "My implementation pattern: define animations in terms of intent (enter, exit, emphasize) rather than mechanics (slide, zoom, spin). Then map each intent to two variants — full and reduced — and let a single MotionConfig or CSS media query switch between them globally.",
      "Test it: enable Reduce Motion in your OS settings and use your site for ten minutes. If anything still whooshes, you have work to do.",
    ],
    category: "Accessibility",
    date: "2025-07-15",
    readingTime: "6 min read",
    tags: ["Accessibility", "Animation", "UX"],
  },
];

export const blogCategories = [
  "All",
  ...Array.from(new Set(blogPosts.map((post) => post.category))),
];
