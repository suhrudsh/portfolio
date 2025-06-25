import Link from "next/link";

export function NavItem({ href, pathname, children }) {
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`hover:underline ${isActive ? "text-primary-500 font-semibold" : ""}`}
    >
      {children}
    </Link>
  );
}
