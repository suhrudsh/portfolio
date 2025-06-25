"use client";

import { Project } from "@/components/home/Project";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function Work() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.5", "end start"],
  });

  const headingSizeRaw = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["6rem", "2rem"],
  );
  const headingSize = useSpring(headingSizeRaw, {
    stiffness: 100,
    damping: 20,
  });

  const headingLeadingRaw = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["6rem", "2rem"],
  );
  const headingLeading = useSpring(headingLeadingRaw, {
    stiffness: 100,
    damping: 20,
  });

  const headingWeightRaw = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["900", "700"],
  );
  const headingWeight = useSpring(headingWeightRaw, {
    stiffness: 100,
    damping: 20,
  });

  const imageOpacityRaw = useTransform(
    scrollYProgress,
    [0.1, 0.15], // or adjust these numbers based on when you want the image to fade in
    [0, 1],
  );
  const imageOpacity = useSpring(imageOpacityRaw, {
    stiffness: 100,
    damping: 20,
  });

  return (
    <section ref={sectionRef} className="relative flex">
      <motion.h2
        style={{
          fontSize: headingSize,
          lineHeight: headingLeading,
          fontWeight: headingWeight,
        }}
        className="sticky top-30 h-[50svh] shrink-0 leading-24 tracking-tight"
      >
        Here's some of <br /> the good things <br /> I've made
        <span className="text-accent">.</span>
      </motion.h2>
      <motion.div
        style={{ opacity: imageOpacity }}
        className="sna mt-120 flex snap-y snap-mandatory flex-col gap-16"
      >
        <Project
          link={"https://miragefx-website.vercel.app"}
          imgSrc={"/images/miragefx-thumbnail.webp"}
          imgAlt={"MirageFX Thumbnail"}
          title={"MirageFX"}
        >
          MirageFX is a VFX and CGI studio focused on high-impact digital
          visuals. Together, we designed a mobile-first, single-page site that
          puts their work front and center — with minimal typography, a tight
          layout system, and responsive motion tuned for every device.
        </Project>
        <Project
          link={"https://suhrudsh.github.io/streamsync"}
          imgSrc={"/images/streamsync-thumbnail.webp"}
          imgAlt={"StreamSync Thumbnail"}
          title={"StreamSync"}
        >
          A concept landing page for a fictional streaming service, StreamSync.
          I got to explore how to integrate 3D animations and interactive UI
          elements using React and Three.js. The project demonstrates dynamic
          content sections, smooth scroll-based transitions, and a playful,
          modern design that adapts well to all screen sizes.
        </Project>
        <Project
          link={"https://suhrudsh.github.io/lemons-404"}
          imgSrc={"/images/lemons-404-thumbnail.webp"}
          imgAlt={"Lemons 404 Thumbnail"}
          title={"Lemons 404 Page"}
        >
          A whimsical 404 error page concept featuring animated lemons and a
          lighthearted message. This project highlights creative error handling
          and micro-interactions, making even a lost page a memorable
          experience.
        </Project>
      </motion.div>
    </section>
  );
}
