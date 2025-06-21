"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavItem } from "./NavItem";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 flex w-full items-center justify-between px-24 py-4 shadow-sm">
      <Link href="/" className="text-xl font-bold">
        Suhrud Shringarputale
      </Link>
      <div className="space-x-4">
        <NavItem href="/" pathname={pathname}>
          Home
        </NavItem>
        <NavItem href="/work" pathname={pathname}>
          Work
        </NavItem>
        <NavItem href="/about" pathname={pathname}>
          About
        </NavItem>
      </div>
    </nav>
  );
}
