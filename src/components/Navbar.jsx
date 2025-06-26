"use client";
import { useEffect, useRef, useState } from "react";
import { CTA } from "@/components/CTA";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [show, setShow] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setShow(false); // Scrolling down
      } else {
        setShow(true); // Scrolling up
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-background fixed top-0 left-0 z-10 flex w-full items-center justify-between px-6 py-4 shadow-sm transition-transform duration-300 lg:px-16 xl:px-24 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Link href="/" className="w-1/2 text-xl font-bold">
        Suhrud Shringarputale
      </Link>
      <CTA href={"mailto:suhrudsh@gmail.com"} primary navbar>
        Get in touch
      </CTA>
    </nav>
  );
}
