"use client";

import { FeaturedProject } from "@/components/home/FeaturedProject";
import { AnimatedSectionHeading } from "@/components/home/AnimatedSectionHeading";
import { useIsMobile } from "@/hooks/useIsMobile";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function FeaturedProjects() {
  const isMobile = useIsMobile();
  const sectionRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.5", "end start"],
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
      className="relative mt-36 flex flex-col gap-8 lg:flex-row"
    >
      <AnimatedSectionHeading scrollYProgress={scrollYProgress}>
        Here's some of <br /> the good things <br /> I've made
        <span className="text-accent">:</span>
      </AnimatedSectionHeading>
      <motion.div
        initial={false}
        style={mounted ? { opacity: imageOpacity } : {}}
        className="flex snap-y snap-mandatory flex-col gap-8 lg:mt-120 lg:gap-8 xl:gap-24"
      >
        <FeaturedProject
          link={"https://miragefx.ae"}
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
          link={"https://punedesignfestival.com"}
          imgSrc={"/images/pdf-thumbnail.webp"}
          imgAlt={"Pune Design Festival Thumbnail"}
          title={"Pune Design Festival 2026"}
        >
          Pune Design Festival is an annual event celebrating design organised
          by the Association of Designers of India (ADI). For the 2026 edition,
          I was one of the volunteers that worked on the website using Framer in
          order to highlight the information about the festival, including its
          events and speakers, as well as help boost ticket sales. The theme for
          this year's festival was "India Lens" and we worked together to create
          a website based around that theme using appropriate typography, blurs,
          and animations.
        </FeaturedProject>

        <FeaturedProject
          link={"https://suhrudsh.github.io/auralis-cymbals/"}
          imgSrc={"/images/auralis-cymbals-thumbnail.webp"}
          imgAlt={"Auralis Cymbals Thumbnail"}
          title={"Auralis Cymbals"}
        >
          Auralis Cymbals is a fictional brand of high-end, handcrafted cymbals.
          This landing page concept showcases a sleek, modern design with
          immersive product visuals, interactive elements, and smooth animations
          to highlight the craftsmanship and quality of the brand.
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
          link={"https://nuranest.ai"}
          imgSrc={"/images/nuranest-thumbnail.webp"}
          imgAlt={"Nuranest.ai Thumbnail"}
          title={"Nuranest.ai"}
        >
          Nuranest.ai is an operator-led advisory firm for IT services,
          software, and PE/VC-backed companies. I built a clean,
          executive-focused site designed to signal credibility fast — using
          sharp hierarchy, restrained visuals, and messaging rooted in their
          advisory-first positioning. A tight, trust-driven build delivered
          quickly.
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
