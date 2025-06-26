"use client";

import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";

export default function ProjectsList({ filteredRepos }) {
  const [currentPage, setCurrentPage] = useState(0);

  const scrollRef = useRef(null);
  const groupRefs = useRef([]);
  const username = "suhrudsh";

  const formatRepoName = (name) => {
    let formattedName = name.replace(/-/g, " ");
    formattedName = formattedName.replace(
      /\b(Frontend Mentor|Odin|Threejs)\b/gi,
      "$1:",
    );
    formattedName = formattedName
      .split(" ")
      .map((word) => {
        if (["etch", "sketch"].includes(word.toLowerCase())) return word;
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ")
      .replace(/ Etch A Sketch/gi, " Etch-a-Sketch");
    return formattedName;
  };

  const scrollByPage = (dir) => {
    const nextIdx = Math.max(
      0,
      Math.min(chunkedRepos.length - 1, currentPage + dir),
    );
    groupRefs.current[nextIdx]?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
    setCurrentPage(nextIdx);
  };

  // inside your component, below chunkedRepos:
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, offsetWidth } = scrollRef.current;
    // round to nearest page index:
    const newPage = Math.round(scrollLeft / offsetWidth);
    if (newPage !== currentPage) {
      setCurrentPage(newPage);
    }
  };

  const chunkedRepos = [];
  for (let i = 0; i < filteredRepos.length; i += 3) {
    chunkedRepos.push(filteredRepos.slice(i, i + 3));
  }

  return (
    <section className="mt-12 flex w-full flex-col gap-8">
      <h2 className="text-3xl font-bold xl:text-4xl">
        And the rest — <br />
        still good, just smaller<span className="text-accent">.</span>
      </h2>

      <div className="flex items-stretch justify-center">
        {/* Scroll buttons */}
        <button
          onClick={() => scrollByPage(-1)}
          className="bg-background text-text hover:text-accent pointer-events-auto flex cursor-pointer items-center justify-center self-stretch px-4 text-2xl transition-colors"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        {/* Scrollable list */}
        <ul
          ref={scrollRef}
          onScroll={handleScroll}
          className="hide-scrollbar flex snap-x snap-mandatory gap-8 overflow-x-auto py-8"
        >
          {chunkedRepos.map((group, idx) => (
            <li
              key={idx}
              ref={(el) => (groupRefs.current[idx] = el)}
              className="grid w-full shrink-0 snap-start grid-rows-3 flex-col gap-4 lg:grid-cols-3 lg:grid-rows-none"
            >
              {group.map((repo) => {
                const pageUrl =
                  repo.homepage ||
                  `https://${username}.github.io/${repo.name}/`;

                return (
                  <a
                    key={repo.id}
                    href={pageUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="group border-text-300 bg-background text-text flex grow flex-col justify-between rounded-2xl border p-6 shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl"
                  >
                    <span className="group-hover:text-accent text-lg font-medium tracking-tight text-balance transition-colors">
                      {formatRepoName(repo.name)}
                    </span>
                    <span className="text-text-400 group-hover:text-text mt-4 text-sm transition-colors duration-300 ease-in-out">
                      Click to Visit →
                    </span>
                  </a>
                );
              })}
            </li>
          ))}
        </ul>

        <button
          onClick={() => scrollByPage(1)}
          className="bg-background text-text hover:text-accent pointer-events-auto flex cursor-pointer items-center justify-center self-stretch px-4 text-2xl transition-colors"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </section>
  );
}
