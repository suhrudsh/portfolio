"use client";

import { AnimatedSectionHeading } from "@/components/home/AnimatedSectionHeading";
import { useIsMobile } from "@/hooks/useIsMobile";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const HEADINGS = [
  {
    word: "Connection",
    range: [0, 0.28],
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

function getActiveHeadingIndex(progress) {
  if (progress < HEADINGS[0].range[1]) {
    return -1;
  }

  for (let index = 0; index < HEADINGS.length - 1; index += 1) {
    if (progress < HEADINGS[index + 1].range[1]) {
      return index;
    }
  }

  return HEADINGS.length - 1;
}

export function Philosophy() {
  const isBelowLg = useIsMobile(1024);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const connectionY = useTransform(scrollYProgress, HEADINGS[0].range, [
    "100vh",
    "0vh",
  ]);
  const intentionY = useTransform(scrollYProgress, HEADINGS[1].range, [
    "100vh",
    "0vh",
  ]);
  const contributionY = useTransform(scrollYProgress, HEADINGS[2].range, [
    "100vh",
    "0vh",
  ]);
  const headingOffsets = [connectionY, intentionY, contributionY];

  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (val) => {
      setActiveIndex(getActiveHeadingIndex(val));
    });
    return () => unsub();
  }, [scrollYProgress]);

  return (
    <section
      ref={sectionRef}
      className={`relative ${isBelowLg ? "mt-24" : "h-[800svh]"}`}
    >
      {isBelowLg ? (
        <div className="flex flex-col gap-10">
          <AnimatedSectionHeading
            scrollYProgress={scrollYProgress}
            sticky={false}
            className="mb-2"
          >
            What makes good
            <br />
            things take time?
          </AnimatedSectionHeading>

          <div className="flex flex-col gap-8">
            {HEADINGS.map(({ word, paragraph }) => (
              <div key={word} className="flex flex-col gap-3">
                <h3 className="text-4xl font-black tracking-tight md:text-6xl">
                  {word}
                </h3>
                <div className="max-w-[34ch] text-lg leading-relaxed text-pretty md:text-xl">
                  <p>{paragraph}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="sticky top-0 grid h-screen grid-cols-12 grid-rows-6 pt-24">
          <div className="col-span-full row-span-3 flex flex-col">
            <AnimatedSectionHeading
              scrollYProgress={scrollYProgress}
              sticky={false}
              className="mb-4"
            >
              What makes good
              <br />
              things take time?
            </AnimatedSectionHeading>
            {HEADINGS.map(({ word }, index) => (
              <motion.h3
                key={word}
                animate={{
                  color:
                    activeIndex === index
                      ? "var(--color-accent)"
                      : "var(--color-text)",
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                style={{ y: headingOffsets[index] }}
                className="w-full text-7xl font-black tracking-tight xl:text-8xl"
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
