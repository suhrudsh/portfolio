import Image from "next/image";

export function Project({ link, imgSrc, imgAlt, title, children }) {
  return (
    <a
      href={link}
      target="_blank"
      className="group relative grid h-[calc(100svh-7.5rem)] w-full snap-start snap-always grid-cols-12 grid-rows-3"
    >
      <svg
        width="46"
        height="47"
        viewBox="0 0 46 47"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -top-20 right-28 opacity-0 transition duration-300 ease-in-out group-hover:translate-x-4 group-hover:-translate-y-4 group-hover:opacity-100"
      >
        <path
          d="M5 5.5V5.5C24.8823 5.5 41 21.6177 41 41.5V41.5"
          stroke="#E60012"
          strokeWidth="10"
          strokeLinecap="round"
        />
      </svg>

      <Image
        src={imgSrc}
        alt={imgAlt}
        width={1920}
        height={1080}
        className="col-span-6 col-start-5 row-span-2 rounded-2xl object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
      />
      <h3 className="group-hover:text-accent col-span-4 col-start-3 row-start-3 text-8xl font-black transition-colors duration-300 ease-in-out">
        {title}
      </h3>
      <p className="col-span-3 col-start-9 row-start-3 text-pretty">
        {children}
        {children && (
          <>
            <br />
            <span className="text-primary inline">Tap to visit →</span>
          </>
        )}
      </p>
    </a>
  );
}
