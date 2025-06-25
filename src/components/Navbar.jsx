"use client";
import { CTA } from "@/components/CTA";
import { NavItem } from "@/components/NavItem";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-background fixed top-0 left-0 z-10 flex w-full items-center justify-between px-6 py-4 shadow-sm lg:px-16 xl:px-24">
      <Link href="/" className="w-1/2 text-xl font-bold">
        Suhrud Shringarputale
      </Link>
      <CTA href={"mailto:suhrudsh@gmail.com"} primary navbar>
        Get in touch
      </CTA>
    </nav>
  );
}
