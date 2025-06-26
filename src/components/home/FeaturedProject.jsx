import Image from "next/image";

export function FeaturedProject({ link, imgSrc, imgAlt, title, children }) {
  return (
    <a
      href={link}
      target="_blank"
      className="group w-full snap-start snap-always grid-cols-12 lg:grid lg:h-[calc(100svh-7.5rem)] lg:grid-rows-2 xl:grid-rows-3"
    >
      <Image
        src={imgSrc}
        alt={imgAlt}
        width={1920}
        height={1080}
        className="rounded-2xl object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 lg:col-span-7 lg:col-start-4 xl:col-span-6 xl:col-start-5 xl:row-span-2"
      />
      <h3 className="group-hover:text-accent mt-6 text-3xl font-black transition-colors duration-300 ease-in-out lg:col-span-4 lg:col-start-2 lg:row-start-2 lg:mt-0 lg:text-5xl xl:col-span-5 xl:col-start-3 xl:row-start-3 xl:text-7xl">
        {title}
      </h3>
      <p className="mt-2 flex flex-col gap-2 text-pretty lg:col-span-5 lg:col-start-7 lg:row-start-2 lg:mt-0 xl:col-span-4 xl:col-start-9 xl:row-start-3">
        {children}
        {children && (
          <>
            <br />
            <span className="text-primary-400 group-hover:text-primary inline transition-colors duration-300 ease-in-out">
              Click to Visit →
            </span>
          </>
        )}
      </p>
    </a>
  );
}
