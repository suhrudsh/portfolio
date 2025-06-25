import { CTA } from "@/components/CTA";

export function Hero() {
  return (
    <section className="flex h-svh flex-col justify-center gap-16">
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
    </section>
  );
}
