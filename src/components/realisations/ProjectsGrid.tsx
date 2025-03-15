"use client";

import { useState } from "react";
import { Project, ProjectType } from "@/lib/types";
import FilterBar from "./FilterBar";
import ProjectCard from "./ProjectCard";
import { useThemeContext } from "@/app/providers";

// Données de démonstration pour les projets
const demoProjects: Project[] = [
  {
    id: 1,
    title: "Site vitrine pour cabinet d'avocats",
    description: "Conception et développement d'un site vitrine moderne pour un cabinet d'avocats spécialisé en droit des affaires. Le site inclut une présentation de l'équipe, des domaines d'expertise et un formulaire de contact.",
    type: "site-internet",
    imageUrl: "/images/pages/realisations/projet-1.jpg",
    link: "#",
    technologies: ["Next.js", "Tailwind CSS", "Vercel"],
    client: "Cabinet Juridique XYZ",
  },
  {
    id: 2,
    title: "Application de gestion de projets",
    description: "Développement d'une application web complète pour la gestion de projets, incluant la planification, le suivi des tâches, la gestion des ressources et la génération de rapports.",
    type: "application-web",
    imageUrl: "/images/pages/realisations/projet-2.jpg",
    link: "#",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    client: "Entreprise ABC",
  },
  {
    id: 3,
    title: "Application mobile de livraison",
    description: "Création d'une application mobile pour un service de livraison de repas, avec géolocalisation, paiement intégré et suivi en temps réel des commandes.",
    type: "application-mobile",
    imageUrl: "/images/pages/realisations/projet-3.jpg",
    link: "#",
    technologies: ["React Native", "Firebase", "Stripe"],
    client: "FoodDelivery Inc.",
  },
  {
    id: 4,
    title: "Campagne d'acquisition pour e-commerce",
    description: "Mise en place d'une stratégie d'acquisition complète pour une boutique en ligne, incluant SEO, publicités payantes, email marketing et optimisation des conversions.",
    type: "marketing",
    imageUrl: "/images/pages/realisations/projet-4.jpg",
    technologies: ["Google Ads", "Facebook Ads", "Mailchimp", "Google Analytics"],
    client: "Fashion Store",
  },
  {
    id: 5,
    title: "Site e-commerce de produits artisanaux",
    description: "Conception et développement d'une boutique en ligne pour des produits artisanaux, avec système de paiement sécurisé, gestion des stocks et programme de fidélité.",
    type: "site-internet",
    imageUrl: "/images/pages/realisations/projet-5.jpg",
    link: "#",
    technologies: ["Shopify", "Liquid", "JavaScript"],
    client: "Artisanat Local",
  },
  {
    id: 6,
    title: "Dashboard analytique pour SaaS",
    description: "Développement d'un tableau de bord analytique avancé pour une application SaaS, permettant la visualisation des données utilisateurs et des performances commerciales.",
    type: "application-web",
    imageUrl: "/images/pages/realisations/projet-6.jpg",
    link: "#",
    technologies: ["Vue.js", "D3.js", "Python", "Flask"],
    client: "SaaS Solutions",
  },
  {
    id: 7,
    title: "Application mobile de fitness",
    description: "Création d'une application mobile de fitness avec suivi des entraînements, plans personnalisés et intégration avec des appareils connectés.",
    type: "application-mobile",
    imageUrl: "/images/pages/realisations/projet-7.jpg",
    link: "#",
    technologies: ["Flutter", "Firebase", "HealthKit", "Google Fit"],
    client: "FitLife",
  },
  {
    id: 8,
    title: "Automatisation marketing pour startup",
    description: "Mise en place d'un système d'automatisation marketing complet pour une startup B2B, incluant lead scoring, nurturing et analytics avancé.",
    type: "marketing",
    imageUrl: "/images/pages/realisations/projet-8.jpg",
    technologies: ["HubSpot", "Zapier", "Google Analytics", "Hotjar"],
    client: "Tech Startup",
  },
];

export default function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState<ProjectType>("tous");
  const { mounted } = useThemeContext();

  if (!mounted) {
    return (
      <div className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-pulse">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-80 bg-gray-200 dark:bg-gray-800 rounded-xl"></div>
          ))}
        </div>
      </div>
    );
  }

  const filteredProjects =
    activeFilter === "tous"
      ? demoProjects
      : demoProjects.filter((project) => project.type === activeFilter);

  return (
    <section className="py-8">
      <FilterBar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      
      {filteredProjects.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-xl text-gray-500 dark:text-gray-400">
            Aucun projet ne correspond à ce filtre pour le moment.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </section>
  );
} 