import { Project } from "./types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Po&me Paris",
    description:
      "Mise en place de la conformité RGPD et du tracking serveur side.",
    type: "marketing",
    imageUrl: "/images/projects/poemeParis.jpg",
    link: "https://poemeparis.fr/",
    technologies: ["Google Tag Manager", "Google Analytics", "Stape", "Prestashop"],
    
  },
  {
    id: 2,
    title: "Youlive Immobilier",
    description:
      "Refonte du site de Youlive Immobilier avec automatisation de la récupération multiple des données des biens immobiliers.",
    type: "site-internet",
    imageUrl: "/images/projects/youliveSite.png",
    link: "https://youlive-immobilier.fr/",
    technologies: ["WordPress", "API Rest", "PHP", "Cron job"],
    
  },
  {
    id: 3,
    title: "Ares Motors",
    description:
      "Développement du site de Ares Motors avec connexion au logiciel de gestion de la société.",
    type: "site-internet",
    imageUrl: "/images/projects/aresMotors.png",
    link: "https://aresmotors.fr/",
    technologies: ["WordPress", "API Rest", "PHP", "Cron job"],
    
  },
  {
    id: 4,
    title: "Héla Sérénité",
    description: "Développement du site internet.",
    type: "site-internet",
    imageUrl: "/images/projects/helaSerenite.png",
    link: "hela-serenite.fr",
    technologies: ["WordPress", "PHP", "CSS", "JavaScript"],
    
  },
  {
    id: 5,
    title: "Youlive Immobilier",
    description: "Développement d'une application métier de facturation.",
    type: "application-web",
    imageUrl: "/images/projects/youliveFacturation.png",
    link: "",
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel", "TypeScript"],
  },
  {
    id: 6,
    title: "Ab Coaching",
    description:
      "Développement d'une application multi services : CRM, suivi sportif, gestion de contenu, etc.",
    type: "application-web",
    imageUrl: "/images/projects/abCoaching.png",
    link: "",
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel", "TypeScript"],
  },
];
