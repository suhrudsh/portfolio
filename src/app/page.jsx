import { Hero } from "@/components/home/Hero";
import { Work } from "@/components/home/Work";
export const metadata = {
  title: "Home | Suhrud",
  description: "Multidisciplinary designer portfolio.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Work />
    </>
  );
}
