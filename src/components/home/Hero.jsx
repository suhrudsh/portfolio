import { CTA } from "@/components/CTA";

export function Hero() {
  return (
    <section className="flex min-h-svh flex-col justify-center gap-16">
      <h1 className="flex flex-col gap-4 text-4xl font-normal">
        Hey! I’m Suhrud. I believe good things take time.
        <br />
        <span className="block text-8xl leading-24 font-black tracking-tight">
          Lately, I make good <br /> things on the web
          <span className="text-accent">.</span>
        </span>
      </h1>
      <div className="flex gap-8">
        <CTA primary>Get in touch</CTA>
        {/* <CTA secondary>See my work</CTA> */}
      </div>
    </section>
  );
}
