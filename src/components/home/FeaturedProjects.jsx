"use client";

import { FeaturedProject } from "@/components/home/FeaturedProject";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function FeaturedProjects() {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isLg, setIsLg] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function onResize() {
      const w = window.innerWidth;
      setIsMobile(w <= 1024);
      setIsLg(w > 1024 && w <= 1280);
    }
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.5", "end start"],
  });

  const fromSize = isMobile ? "1.875rem" : isLg ? "3.75rem" : "6rem";
  const toSize = isMobile ? "1.875rem" : isLg ? "2.25rem" : "2.25rem";

  const headingSizeRaw = useTransform(
    scrollYProgress,
    [0, 0.1],
    [fromSize, toSize],
  );
  const headingSize = useSpring(headingSizeRaw, {
    stiffness: 100,
    damping: 20,
  });

  const fromLeading = isMobile ? "1.875rem" : isLg ? "3.75rem" : "6rem";
  const toLeading = isMobile ? "1.875rem" : isLg ? "2.25rem" : "2.25rem";

  const headingLeadingRaw = useTransform(
    scrollYProgress,
    [0, 0.1],
    [fromLeading, toLeading],
  );
  const headingLeading = useSpring(headingLeadingRaw, {
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
          fontSize: headingSize,
          fontWeight: headingWeight,
          lineHeight: headingLeading,
        }}
        className="shrink-0 origin-top-left text-3xl leading-7 font-black tracking-tight lg:sticky lg:top-30 lg:h-[80svh]"
      >
        Here's some of <br /> the good things <br /> I've made
        <span className="text-accent">:</span>
      </motion.h2>
      <motion.div
        initial={false}
        style={mounted ? { opacity: imageOpacity } : {}}
        className="flex snap-y snap-mandatory flex-col gap-8 lg:mt-120 lg:gap-8 xl:gap-24"
      >
        <FeaturedProject
          link={"https://miragefx-website.vercel.app"}
          imgSrc={"/images/miragefx-thumbnail.webp"}
          imgAlt={"MirageFX Thumbnail"}
          title={"MirageFX"}
        >
          MirageFX is a VFX and CGI studio focused on high-impact digital
          visuals. Together, we designed a mobile-first, single-page site that
          puts their work front and center — with minimal typography, a tight
          layout system, and responsive motion tuned for every device.
        </FeaturedProject>
        <FeaturedProject
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
        </FeaturedProject>
        <FeaturedProject
          link={"https://suhrudsh.github.io/lemons-404"}
          imgSrc={"/images/lemons-404-thumbnail.webp"}
          imgAlt={"Lemons 404 Thumbnail"}
          title={"Lemons 404 Page"}
        >
          A whimsical 404 error page concept featuring animated lemons and a
          lighthearted message. This project highlights creative error handling
          and micro-interactions, making even a lost page a memorable
          experience.
        </FeaturedProject>
      </motion.div>
    </section>
  );
}
