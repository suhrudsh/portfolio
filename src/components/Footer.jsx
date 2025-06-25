import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Footer() {
  return (
    <footer className="bg-text mt-12 px-6 py-24 text-white lg:px-24">
      <div className="flex flex-col gap-16 md:flex-row md:items-end md:justify-between md:text-left">
        <p className="max-w-xl text-4xl leading-tight font-normal tracking-tight">
          Let’s make good things together. <br />
          <a
            href="mailto:suhrudsh@gmail.com"
            className="hover:text-text-200 underline underline-offset-4 transition-colors duration-300 ease-in-out"
          >
            Get in touch
          </a>
          .
        </p>

        <div className="flex flex-col gap-6 md:items-end">
          <div className="flex gap-8">
            <a
              href="https://github.com/suhrudsh"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 ease-in-out hover:scale-110"
            >
              <FontAwesomeIcon icon={faGithub} className="size-7" />
            </a>
            <a
              href="https://linkedin.com/in/suhrudshringarputale"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 ease-in-out hover:scale-110"
            >
              <FontAwesomeIcon icon={faLinkedin} className="size-7" />
            </a>
            <a
              href="mailto:suhrudsh@gmail.com"
              className="transition-transform duration-300 ease-in-out hover:scale-110"
            >
              <FontAwesomeIcon icon={faEnvelope} className="size-7" />
            </a>
          </div>
          <p className="text-muted-foreground text-base">
            &copy; {new Date().getFullYear()} Suhrud Shringarputale
          </p>
        </div>
      </div>
    </footer>
  );
}
