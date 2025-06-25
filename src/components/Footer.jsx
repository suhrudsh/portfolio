import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Footer() {
  return (
    <footer className="bg-text flex flex-col gap-4 py-6 text-center text-white">
      <p>
        &copy; {new Date().getFullYear()} Suhrud Shringarputale. All rights
        reserved.
      </p>
      <p className="flex items-center justify-center gap-4 text-lg">
        <a
          href="https://github.com/suhrudsh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="size-8" />
        </a>
        <a
          href="https://linkedin.com/in/suhrudshringarputale"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="size-8" />
        </a>
        <a href="mailto:suhrudsh@gmail.com" className="size-8">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </p>
    </footer>
  );
}
