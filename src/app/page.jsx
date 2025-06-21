export const metadata = {
  title: "Home | Suhrud",
  description: "Multidisciplinary designer portfolio.",
};

export default function HomePage() {
  return (
    <section className="font-satoshi flex min-h-screen flex-col justify-evenly gap-16">
      <div className="flex flex-col gap-8">
        <h1 className="font-satoshi text-2xl">Hey! I'm Suhrud.</h1>
        <p className="text-8xl uppercase">
          I create thoughtful and interactive experiences
          <span className="text-accent">.</span>
        </p>
        <p className="text-5xl font-bold">Often on the web.</p>
      </div>
      <a
        href="mailto:suhrudsh@gmail.com"
        className="bg-primary text-background self-start rounded-2xl px-8 py-6 text-2xl"
      >
        Get in touch
      </a>
    </section>
  );
}
