"use client";

import { AnimatedSectionHeading } from "@/components/home/AnimatedSectionHeading";
import { PhilosophyMobile } from "@/components/home/PhilosophyMobile";
import { useIsMobile } from "@/hooks/useIsMobile";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const HEADINGS = [
  {
    word: "Connection",
    range: [0, 0.28],
    mobileStop: { sm: "0rem", md: "0rem" },
    paragraph: (
      <>
        I’ve found I can’t design for something I don’t understand.
        <br />
        So I start by listening — to the people, the problem, the messy context
        around it.
        <br />
        I ask questions. I dig. I try to understand what’s really going on.
        <br />
        And somewhere in all that… a connection forms.
        <br />
        Not just with the project, but with the people it’s for.
        <br />
        That’s when I grow passionate about the problem.
        <br />
        And that passion makes me want to get the solution right.
      </>
    ),
  },
  {
    word: "Intention",
    range: [0.28, 0.56],
    mobileRange: [0, 0.3],
    mobileStop: { sm: "3.25rem", md: "4.5rem" },
    paragraph: (
      <>
        Once the work feels meaningful, I can’t help but slow down.
        <br />
        I start obsessing over the details — every line, every interaction,
        every choice.
        <br />
        Each part needs to serve the core idea.
        <br />
        That’s what intention means to me:
        <br />
        Taking the time to make sure nothing is wasted.
        <br />
        That every decision holds meaning.
        <br />
        That what I make actually matters.
      </>
    ),
  },
  {
    word: "Contribution",
    range: [0.56, 0.84],
    mobileRange: [0.3, 0.6],
    mobileStop: { sm: "6.5rem", md: "9rem" },
    paragraph: (
      <>
        So, what makes good things take time?
        <br />
        For me, it’s the desire to contribute — to create something that doesn’t
        just look good, but gives something back.
        <br />
        When I feel connected to the people and the problem, I want to make work
        that helps — in quiet, practical ways.
        <br />
        Smoothing friction, supporting goals, bringing clarity.
        <br />
        That’s what contribution looks like to me.
        <br />
        Passion and intention.
      </>
    ),
  },
];

function getActiveHeadingIndex(progress, rangeKey) {
  if (progress < HEADINGS[0][rangeKey][1]) {
    return rangeKey === "mobileRange" ? 0 : -1;
  }

  for (let index = 0; index < HEADINGS.length - 1; index += 1) {
    if (progress < HEADINGS[index + 1][rangeKey][1]) {
      return index;
    }
  }

  return HEADINGS.length - 1;
}

function getMobileActiveHeadingIndex(progress) {
  if (progress < HEADINGS[1].mobileRange[1]) {
    return 0;
  }

  if (progress < HEADINGS[2].mobileRange[1]) {
    return 1;
  }

  return 2;
}

export function Philosophy() {
  const isBelowMd = useIsMobile();
  const isBelowLg = useIsMobile(1024);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const desktopHeadingOffsets = HEADINGS.map((heading) =>
    useTransform(scrollYProgress, heading.range, ["100vh", "0vh"]),
  );

  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (val) => {
      setActiveIndex(
        isBelowLg
          ? getMobileActiveHeadingIndex(val)
          : getActiveHeadingIndex(val, "range"),
      );
    });
    return () => unsub();
  }, [isBelowLg, scrollYProgress]);

  return (
    <section
      ref={sectionRef}
      className={`relative ${isBelowLg ? "h-[380svh] md:h-[420svh]" : "h-[800svh]"}`}
    >
      {isBelowLg ? (
        <PhilosophyMobile
          headings={HEADINGS}
          scrollYProgress={scrollYProgress}
          activeIndex={activeIndex}
          isBelowMd={isBelowMd}
        />
      ) : (
        <div className="sticky top-0 grid h-dvh grid-cols-12 grid-rows-6 pt-24">
          <div className="col-span-full row-span-3 flex flex-col gap-4">
            <AnimatedSectionHeading
              scrollYProgress={scrollYProgress}
              sticky={false}
            >
              What makes good
              <br />
              things take time?
            </AnimatedSectionHeading>
            {HEADINGS.map(({ word }, index) => (
              <motion.h3
                key={word}
                style={{ y: desktopHeadingOffsets[index] }}
                className={`w-full text-7xl font-black tracking-tight transition-colors duration-200 xl:text-8xl ${
                  activeIndex === index ? "text-accent" : "text-text"
                }`}
              >
                {word}
              </motion.h3>
            ))}
          </div>

          <div className="col-span-full col-start-7 row-span-full row-start-4 flex h-full max-w-[38ch] items-center text-xl leading-relaxed text-pretty xl:col-start-7 xl:text-2xl">
            {activeIndex >= 0 && (
              <motion.div
                key={HEADINGS[activeIndex].word}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                <p>{HEADINGS[activeIndex].paragraph}</p>
              </motion.div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
