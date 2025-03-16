import { Metadata } from "next";
import HeroSection from "@/components/realisations/HeroSection";
import ProjectsGrid from "@/components/realisations/ProjectsGrid";

export const metadata: Metadata = {
  title: "Nos Réalisations | WebSmith - Marketing et développement web et mobile sur mesure",
  description: "Découvrez nos projets récents en développement web, applications mobiles et stratégies marketing. Sites internet, applications web et mobiles, et campagnes marketing.",
};

export default function Realisations() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <ProjectsGrid />
    </main>
  );
} 