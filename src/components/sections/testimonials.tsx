"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/common/section-heading";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const paginate = useCallback((dir: number) => {
    setDirection(dir);
    setIndex((current) => (current + dir + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 7000);
    return () => clearInterval(timer);
  }, [paginate, index]);

  const testimonial = testimonials[index];

  return (
    <section id="testimonials" className="section-padding relative" aria-label="Testimonials">
      <div className="container-page">
        <SectionHeading
          eyebrow="Testimonials"
          title="What people say about working with me"
        />

        <div className="relative mx-auto max-w-3xl">
          <div
            aria-hidden
            className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-500/10 blur-2xl"
          />

          <div className="glass relative overflow-hidden rounded-[2rem] p-8 sm:p-12">
            <Quote
              className="absolute right-8 top-8 size-16 text-primary/10"
              aria-hidden
            />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.figure
                key={testimonial.id}
                custom={direction}
                initial={{ opacity: 0, x: direction * 48 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -48 }}
                transition={{ duration: 0.45, ease: EASE }}
              >
                <div
                  className="mb-5 flex gap-1"
                  role="img"
                  aria-label={`${testimonial.rating} out of 5 stars`}
                >
                  {Array.from({ length: testimonial.rating }, (_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="size-4 fill-amber-400 text-amber-400"
                      aria-hidden
                    />
                  ))}
                </div>

                <blockquote className="text-balance text-lg leading-relaxed sm:text-xl">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <figcaption className="mt-8 flex items-center gap-4">
                  <span
                    aria-hidden
                    className="flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-sm font-bold text-white shadow-lg shadow-indigo-500/25"
                  >
                    {testimonial.initials}
                  </span>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => paginate(-1)}
              aria-label="Previous testimonial"
              className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <ChevronLeft className="size-4" aria-hidden />
            </button>

            <div className="flex gap-2" role="tablist" aria-label="Testimonial navigation">
              {testimonials.map((item, dotIndex) => (
                <button
                  key={item.id}
                  role="tab"
                  aria-selected={dotIndex === index}
                  aria-label={`Testimonial from ${item.name}`}
                  onClick={() => {
                    setDirection(dotIndex > index ? 1 : -1);
                    setIndex(dotIndex);
                  }}
                  className={cn(
                    "h-2 cursor-pointer rounded-full transition-all duration-300",
                    dotIndex === index
                      ? "w-8 bg-gradient-to-r from-indigo-500 to-violet-500"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                  )}
                />
              ))}
            </div>

            <button
              onClick={() => paginate(1)}
              aria-label="Next testimonial"
              className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <ChevronRight className="size-4" aria-hidden />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
