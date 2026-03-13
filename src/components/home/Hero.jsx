import { CTA } from "@/components/CTA";

export function Hero() {
  return (
    <section className="flex h-svh flex-col justify-between py-12">
      <div className="flex flex-1 flex-col justify-center gap-16">
        <h1 className="flex flex-col gap-2 font-normal md:text-2xl lg:gap-4 lg:text-2xl xl:text-4xl">
          Hey! I’m Suhrud. I believe good things take time.
          <br />
          <span className="block text-4xl font-black tracking-tight md:text-6xl lg:text-6xl lg:leading-15 xl:text-8xl xl:leading-24">
            Lately, I make good <br /> things on the web
            <span className="text-accent">.</span>
          </span>
        </h1>
        <div className="flex gap-8">
          <CTA primary href={"mailto:suhrudsh@gmail.com"}>
            Get in touch
          </CTA>
          {/* <CTA secondary>See my work</CTA> */}
        </div>
      </div>

      <div className="text-text-500 flex w-fit items-center gap-2 self-start text-[0.65rem] font-medium tracking-[0.2em] uppercase sm:gap-3 sm:text-xs sm:tracking-[0.24em] lg:text-sm lg:tracking-[0.28em]">
        <span>Scroll to explore</span>
        <span className="border-text-200 text-text-700 flex items-center justify-center">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-3.5 w-3.5 animate-bounce sm:h-4 sm:w-4 lg:h-5 lg:w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14" />
            <path d="m6 13 6 6 6-6" />
          </svg>
        </span>
      </div>
    </section>
  );
}
