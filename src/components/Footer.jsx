import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Footer() {
  return (
    <footer className="mt-20 px-6 pb-6 lg:px-24 lg:pb-12">
      <div className="bg-text text-text-50 overflow-hidden rounded-[2rem] px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="border-text-700/70 flex flex-col gap-12 border-t pt-6 sm:pt-8">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-3xl leading-none font-black tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                Let&apos;s make good
                <br />
                things together
                <span className="text-accent">.</span>
              </p>
              <a
                href="mailto:suhrudsh@gmail.com"
                className="text-text-300 hover:text-text-50 mt-6 inline-flex w-fit items-center gap-3 text-sm font-medium tracking-[0.18em] uppercase transition-colors duration-300 ease-in-out sm:text-base"
              >
                Get in touch
                <span className="text-accent" aria-hidden="true">
                  →
                </span>
              </a>
            </div>

            <div className="border-text-700/70 bg-text-900/20 flex flex-col gap-6 rounded-[1.75rem] border px-6 py-5 sm:px-7">
              <div className="flex gap-3">
                <a
                  href="https://github.com/suhrudsh"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="border-text-700 text-text-100 hover:border-text-500 hover:text-accent flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 ease-in-out hover:-translate-y-0.5"
                >
                  <FontAwesomeIcon icon={faGithub} className="text-xl" />
                </a>
                <a
                  href="https://linkedin.com/in/suhrudshringarputale"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="border-text-700 text-text-100 hover:border-text-500 hover:text-accent flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 ease-in-out hover:-translate-y-0.5"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
                </a>
                <a
                  href="mailto:suhrudsh@gmail.com"
                  aria-label="Email"
                  className="border-text-700 text-text-100 hover:border-text-500 hover:text-accent flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 ease-in-out hover:-translate-y-0.5"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
                </a>
              </div>

              <p className="text-text-300 max-w-xs text-sm leading-relaxed text-balance sm:text-base">
                Available for thoughtful web design and development work.
              </p>

              <p className="text-text-400 text-sm">
                &copy; {new Date().getFullYear()} Suhrud Shringarputale
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
