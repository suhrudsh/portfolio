import { Hero } from "@/components/home/Hero";
import ProjectsList from "@/components/home/ProjectsList";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
export const metadata = {
  title: "Home | Suhrud",
  description: "Multidisciplinary designer portfolio.",
};

export default async function HomePage() {
  const username = "suhrudsh";
  const excludedRepos = ["miragefx-website", "streamsync", "lemons-404"];

  const res = await fetch(`https://api.github.com/users/${username}/repos`, {
    next: { revalidate: 60 * 60 * 24 * 7 }, // Revalidate once a week
  });

  if (!res.ok) {
    console.error("Failed to fetch GitHub repos");
    return null;
  }

  const repos = await res.json();

  const filteredRepos = repos.filter(
    (repo) =>
      repo.has_pages &&
      !repo.name.includes(username) &&
      !excludedRepos.includes(repo.name),
  );

  return (
    <>
      <Hero />
      <FeaturedProjects />
      <ProjectsList filteredRepos={filteredRepos} />
    </>
  );
}
