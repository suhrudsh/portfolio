"use client";
import { CTA } from "@/components/CTA";
import { NavItem } from "@/components/NavItem";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-background fixed top-0 left-0 z-10 flex w-full items-center justify-between px-24 py-4 shadow-sm">
      <Link href="/" className="text-xl font-bold">
        Suhrud Shringarputale
      </Link>
      <CTA primary navbar>
        Get in touch
      </CTA>
    </nav>
  );
}
