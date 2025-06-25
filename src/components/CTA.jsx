export function CTA({ children, primary, secondary, navbar }) {
  return (
    <a
      href="mailto:suhrudsh@gmail.com"
      className={`${primary && "bg-primary text-background hover:bg-primary-600"} ${secondary && "border-secondary hover:bg-secondary hover:text-background border-3"} flex items-center justify-center ${navbar ? "rounded-xl px-4 py-2 text-lg" : "rounded-2xl p-4 text-2xl"} font-bold tracking-wide transition-colors duration-300 ease-in-out`}
    >
      {children}
    </a>
  );
}
