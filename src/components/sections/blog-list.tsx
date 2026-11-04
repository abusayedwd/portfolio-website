"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { blogPosts, blogCategories } from "@/data/blog";
import { BlogCard } from "@/components/sections/blog-preview";
import { staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function BlogList() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <section className="section-padding" aria-label="All articles">
      <div className="container-page">
        <div
          role="tablist"
          aria-label="Filter articles by category"
          className="mb-10 flex flex-wrap justify-center gap-2"
        >
          {blogCategories.map((category) => (
            <button
              key={category}
              role="tab"
              aria-selected={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "relative cursor-pointer rounded-full px-4 py-2 text-sm transition-colors",
                activeCategory === category
                  ? "text-white"
                  : "border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
              )}
            >
              {activeCategory === category && (
                <motion.span
                  layoutId="blog-filter-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 shadow-lg shadow-indigo-500/25"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>

        <motion.div
          key={activeCategory}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {filtered.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
