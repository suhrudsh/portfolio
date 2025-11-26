import { Hero } from "@/components/home/Hero";
import ProjectsList from "@/components/home/ProjectsList";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";

export default async function HomePage() {
  const username = "suhrudsh";
  const excludedRepos = [
    "miragefx-website",
    "streamsync",
    "lemons-404",
    "auralis-cymbals",
    "nuranest-website",
  ];

  const res = await fetch(`https://api.github.com/users/${username}/repos`, {
    next: { revalidate: 60 * 60 * 24 * 7 }, // Revalidate once a week
  });

  if (!res.ok) {
    console.error("Failed to fetch GitHub repos");
    return null;
  }

  const repos = await res.json();

  const filteredRepos = repos.filter((repo) => {
    const name = repo.name.toLowerCase();

    return (
      repo.has_pages &&
      !repo.name.includes(username) &&
      !excludedRepos.includes(repo.name) &&
      !name.startsWith("odin") &&
      !name.startsWith("frontend-mentor")
    );
  });

  return (
    <>
      <Hero />
      <FeaturedProjects />
      <ProjectsList filteredRepos={filteredRepos} />
    </>
  );
}
