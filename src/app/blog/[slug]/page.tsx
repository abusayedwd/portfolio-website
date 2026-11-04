import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { formatDate } from "@/lib/utils";
import { SITE_CONFIG } from "@/constants";
import { Badge } from "@/components/ui/badge";
import { AuroraBackground } from "@/components/common/aurora-background";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [SITE_CONFIG.name],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Person", name: SITE_CONFIG.name, url: SITE_CONFIG.url },
    keywords: post.tags.join(", "),
  };

  return (
    <article className="relative overflow-hidden pb-24 pt-36">
      <AuroraBackground />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <div className="container-page relative z-10 mx-auto max-w-3xl">
        <Link
          href="/blog"
          className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-4" aria-hidden />
          All articles
        </Link>

        <header className="mb-12">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <Badge>{post.category}</Badge>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock className="size-3" aria-hidden />
              {post.readingTime}
            </span>
            <time dateTime={post.date} className="font-mono text-xs text-muted-foreground">
              {formatDate(post.date)}
            </time>
          </div>
          <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-balance text-lg leading-relaxed text-muted-foreground">
            {post.excerpt}
          </p>
        </header>

        <div className="space-y-6">
          {post.content.map((paragraph, index) => (
            <p
              key={index}
              className="text-base leading-[1.85] text-foreground/85 sm:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <footer className="mt-14 border-t border-border pt-8">
          <div className="mb-8 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                #{tag}
              </Badge>
            ))}
          </div>

          <div className="glass flex flex-col items-start gap-4 rounded-3xl p-7 sm:flex-row sm:items-center">
            <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 font-mono text-lg font-bold text-white">
              {SITE_CONFIG.initials}
            </span>
            <div>
              <div className="font-semibold">{SITE_CONFIG.name}</div>
              <p className="mt-1 text-sm text-muted-foreground">
                {SITE_CONFIG.role} writing about React, performance, and design
                systems.{" "}
                <Link href="/contact" className="text-primary hover:underline">
                  Get in touch
                </Link>
                .
              </p>
            </div>
          </div>
        </footer>
      </div>
    </article>
  );
}
