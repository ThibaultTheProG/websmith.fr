import { Metadata } from "next";
import HeroSection from "@/components/realisations/HeroSection";
import ProjectsGrid from "@/components/realisations/ProjectsGrid";

export const metadata: Metadata = {
  title: "Nos Réalisations | WebSmith - Agence Web & Marketing",
  description: "Découvrez nos projets récents en développement web, applications mobiles et stratégies marketing. Sites internet, applications web et mobiles, et campagnes marketing.",
};

export default function Realisations() {
  return (
    <main className="flex flex-col items-center justify-center w-full">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <HeroSection />
        <ProjectsGrid />
      </div>
    </main>
  );
} 