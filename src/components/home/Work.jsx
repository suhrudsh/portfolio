"use client";

import { Project } from "@/components/home/Project";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function Work() {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Sync isMobile on mount + resizes
  useEffect(() => {
    function onResize() {
      setIsMobile(window.innerWidth <= 1024);
    }
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.5", "end start"],
  });

  const headingScaleRaw = useTransform(
    scrollYProgress,
    [0, 0.1],
    isMobile ? [1, 1] : [3, 1],
  );
  const headingScale = useSpring(headingScaleRaw, {
    stiffness: 100,
    damping: 20,
  });

  const headingWeightRaw = useTransform(
    scrollYProgress,
    [0, 0.1],
    isMobile ? ["700", "700"] : ["900", "700"],
  );
  const headingWeight = useSpring(headingWeightRaw, {
    stiffness: 100,
    damping: 20,
  });

  const imageOpacityRaw = useTransform(
    scrollYProgress,
    [0.1, 0.15],
    isMobile ? [1, 1] : [0, 1],
  );
  const imageOpacity = useSpring(imageOpacityRaw, {
    stiffness: 100,
    damping: 20,
  });

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col gap-8 lg:flex-row"
    >
      <motion.h2
        style={{
          scale: headingScale,
          fontWeight: headingWeight,
        }}
        className="shrink-0 origin-top-left text-3xl leading-7 font-black tracking-tight lg:sticky lg:top-30 lg:h-[50svh] lg:text-2xl lg:leading-6 lg:font-normal xl:text-3xl xl:leading-7"
      >
        Here's some of <br /> the good things <br /> I've made
        <span className="text-accent">:</span>
      </motion.h2>
      <motion.div
        style={{ opacity: imageOpacity }}
        className="flex snap-y snap-mandatory flex-col gap-8 lg:mt-120 lg:gap-8 xl:gap-24"
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
