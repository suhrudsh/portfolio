export function CTA({ children, href, primary, secondary, navbar }) {
  return (
    <a
      href={href || "#"}
      className={`${primary && "bg-primary text-background hover:bg-primary-600"} ${secondary && "border-secondary hover:bg-secondary hover:text-background border-3"} flex items-center justify-center ${navbar ? "rounded-xl px-4 py-2 lg:text-lg" : "rounded-xl px-4 py-2 md:p-4 md:text-xl lg:rounded-2xl xl:text-2xl"} font-bold tracking-wide transition duration-300 ease-in-out active:scale-95`}
    >
      {children}
    </a>
  );
}
