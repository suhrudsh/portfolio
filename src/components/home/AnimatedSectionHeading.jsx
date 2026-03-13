"use client";

import { useIsMobile } from "@/hooks/useIsMobile";
import { motion, useSpring, useTransform } from "framer-motion";

export function AnimatedSectionHeading({
  scrollYProgress,
  className = "",
  sticky = true,
  children,
}) {
  const isBelowLg = useIsMobile(1024);

  const fromSize = isBelowLg ? "1.875rem" : "6rem";
  const toSize = isBelowLg ? "1.875rem" : "2.25rem";

  const headingSizeRaw = useTransform(
    scrollYProgress,
    [0, 0.1],
    [fromSize, toSize],
  );
  const headingSize = useSpring(headingSizeRaw, {
    stiffness: 100,
    damping: 20,
  });

  const fromLeading = isBelowLg ? "1.875rem" : "6rem";
  const toLeading = isBelowLg ? "1.875rem" : "2.25rem";

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
    isBelowLg ? ["700", "700"] : ["900", "700"],
  );
  const headingWeight = useSpring(headingWeightRaw, {
    stiffness: 100,
    damping: 20,
  });

  return (
    <motion.h2
      style={{
        fontSize: headingSize,
        fontWeight: headingWeight,
        lineHeight: headingLeading,
      }}
      className={`shrink-0 origin-top-left text-3xl leading-7 font-black tracking-tight ${sticky ? "lg:sticky lg:top-30 lg:h-[80svh]" : ""} ${className}`}
    >
      {children}
    </motion.h2>
  );
}
