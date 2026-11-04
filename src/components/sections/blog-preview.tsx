"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { formatDate } from "@/lib/utils";
import { SectionHeading } from "@/components/common/section-heading";
import { Badge } from "@/components/ui/badge";
import { staggerContainer, staggerItem, VIEWPORT } from "@/lib/motion";
import type { BlogPost } from "@/types";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <motion.article variants={staggerItem} className="group h-full">
      <Link
        href={`/blog/${post.slug}`}
        className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10"
      >
        <div className="mb-4 flex items-center justify-between gap-3">
          <Badge>{post.category}</Badge>
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="size-3" aria-hidden />
            {post.readingTime}
          </span>
        </div>

        <h3 className="mb-3 text-balance text-lg font-semibold leading-snug tracking-tight transition-colors group-hover:text-primary">
          {post.title}
        </h3>

        <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>

        <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
          <time dateTime={post.date} className="font-mono text-xs text-muted-foreground">
            {formatDate(post.date)}
          </time>
          <span className="flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
            Read
            <ArrowUpRight className="size-4" aria-hidden />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}

export function BlogPreview() {
  const featured = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="section-padding relative" aria-label="Blog">
      <div className="container-page">
        <SectionHeading
          eyebrow="Blog"
          title="Notes from the trenches"
          description="Long-form writing on React, performance, animation, and building better products."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="grid gap-6 md:grid-cols-3"
        >
          {featured.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="glass inline-flex h-12 items-center gap-2 rounded-full px-7 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:bg-muted"
          >
            Read All Articles
            <ArrowUpRight className="size-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
