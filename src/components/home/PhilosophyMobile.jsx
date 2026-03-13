"use client";

import { AnimatedSectionHeading } from "@/components/home/AnimatedSectionHeading";
import { motion, useTransform } from "framer-motion";

export function PhilosophyMobile({
  headings,
  scrollYProgress,
  activeIndex,
  isBelowMd,
}) {
  const mobileHeadingOffsets = [
    null,
    useTransform(scrollYProgress, headings[1].mobileRange, [
      "100%",
      isBelowMd ? headings[1].mobileStop.sm : headings[1].mobileStop.md,
    ]),
    useTransform(scrollYProgress, headings[2].mobileRange, [
      "100%",
      isBelowMd ? headings[2].mobileStop.sm : headings[2].mobileStop.md,
    ]),
  ];

  return (
    <div className="sticky top-0 flex h-svh flex-col gap-4 pt-24">
      <AnimatedSectionHeading scrollYProgress={scrollYProgress} sticky={false}>
        What makes good
        <br />
        things take time?
      </AnimatedSectionHeading>

      <div className="relative min-h-0 flex-1">
        {headings.map(({ word, paragraph }, index) => {
          const content = (
            <div
              className={`bg-background flex flex-col gap-3 ${
                index === 1 ? "min-h-full" : "h-full"
              }`}
            >
              <h3
                className={`text-4xl font-black tracking-tight transition-colors duration-200 md:text-6xl ${
                  activeIndex === index ? "text-accent" : "text-text"
                }`}
              >
                {word}
              </h3>
              <div className="max-w-[34ch] text-lg leading-relaxed text-pretty md:text-xl">
                <p>{paragraph}</p>
              </div>
            </div>
          );

          if (index === 0) {
            return (
              <div key={word} className="bg-background absolute inset-0">
                {content}
              </div>
            );
          }

          return (
            <motion.div
              key={word}
              style={{ y: mobileHeadingOffsets[index] }}
              className="bg-background absolute inset-0"
            >
              {content}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
