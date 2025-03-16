"use client";

import { useThemeContext } from "@/app/providers";
import {
  ShoppingBag,
  Briefcase,
  Heart,
  Gamepad,
  Newspaper,
  MessageSquare,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function TypesProjets() {
  const { isDark, mounted } = useThemeContext();

  if (!mounted) {
    return (
      <section className="py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <h1>En cours de développement</h1>
        </div>
      </section>
    );
  }

  const projets = [
    {
      icon: <ShoppingBag size={24} />,
      title: "E-commerce",
      description:
        "Applications de vente en ligne avec paiement intégré, gestion des commandes et fidélisation client.",
    },
    {
      icon: <Briefcase size={24} />,
      title: "Applications d'entreprise",
      description:
        "Solutions mobiles pour optimiser les processus internes et améliorer la productivité de vos équipes.",
    },
    {
      icon: <Heart size={24} />,
      title: "Santé et bien-être",
      description:
        "Applications de suivi de santé, fitness, méditation et autres services liés au bien-être.",
    },
    {
      icon: <Gamepad size={24} />,
      title: "Jeux et divertissement",
      description:
        "Applications ludiques et interactives pour engager et divertir vos utilisateurs.",
    },
    {
      icon: <Newspaper size={24} />,
      title: "Médias et contenu",
      description:
        "Applications de diffusion de contenu, actualités, vidéos et autres médias.",
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Réseaux sociaux",
      description:
        "Plateformes de communication et de partage pour connecter vos utilisateurs.",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Types de{" "}
            <span className={isDark ? "text-yellow-dark" : "text-blue-dark"}>
              projets mobiles
            </span>{" "}
            que nous développons
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            {
              "Nous concevons et développons une large gamme d'applications mobiles pour répondre aux besoins spécifiques de chaque secteur d'activité."
            }
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projets.map((projet, index) => (
              <div
                key={index}
                className="bg-white dark:bg-black-light-2 p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`p-2 rounded-full ${
                      isDark ? "bg-yellow-dark" : "bg-blue-dark"
                    }`}
                  >
                    <span className={isDark ? "text-black" : "text-white"}>
                      {projet.icon}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold">{projet.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {projet.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative h-[600px] rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/images/pages/devmobile/projets.jpg"
              alt="Types de projets mobiles"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                Des applications pour tous les secteurs
              </h3>
              <p className="text-white/80">
                {
                  "Quelle que soit votre industrie, nous avons l'expertise pour créer l'application mobile qui répondra à vos besoins spécifiques."
                }
              </p>
              <div className="mt-4">
                <Link
                  href="/contact"
                  className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 inline-flex items-center ${
                    isDark
                      ? "bg-yellow-dark text-black hover:bg-yellow-light"
                      : "bg-blue-dark text-white hover:bg-blue-light hover:text-black"
                  }`}
                >
                  Démarrer votre projet
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
