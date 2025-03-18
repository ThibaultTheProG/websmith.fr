"use client";

import { useThemeContext } from "@/app/providers";
import { CheckCircle, Smartphone, Rocket, Users, BarChart } from "lucide-react";

export default function DevSurMesure() {
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

  const avantages = [
    {
      icon: <Smartphone size={24} />,
      title: "Applications sur mesure",
      description:
        "Des applications conçues spécifiquement pour répondre à vos besoins uniques, avec une expérience utilisateur optimisée.",
    },
    {
      icon: <Rocket size={24} />,
      title: "Performance optimale",
      description:
        "Des applications rapides et réactives, optimisées pour offrir une expérience fluide sur tous les appareils.",
    },
    {
      icon: <Users size={24} />,
      title: "Expérience utilisateur exceptionnelle",
      description:
        "Des interfaces intuitives et attrayantes qui engagent vos utilisateurs et les fidélisent.",
    },
    {
      icon: <BarChart size={24} />,
      title: "Évolutivité garantie",
      description:
        "Des applications conçues pour évoluer avec votre entreprise, facilement adaptables aux nouvelles fonctionnalités.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-black-light rounded-3xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pourquoi choisir le{" "}
            <span className={isDark ? "text-yellow-dark" : "text-blue-dark"}>
              développement sur mesure ?
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {
              "Le développement d'applications mobiles sur mesure vous offre un contrôle total sur les fonctionnalités, l'expérience utilisateur et l'évolutivité de votre application."
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {avantages.map((avantage, index) => (
            <div
              key={index}
              className="bg-white dark:bg-black-light-2 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div
                className={`p-3 rounded-full inline-flex mb-4 ${
                  isDark ? "bg-yellow-dark" : "bg-blue-dark"
                }`}
              >
                <span className={isDark ? "text-black" : "text-white"}>
                  {avantage.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">{avantage.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {avantage.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white dark:bg-black-light-2 p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Ce que vous obtenez avec nos{" "}
            <span className={isDark ? "text-yellow-dark" : "text-blue-dark"}>
              applications sur mesure
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {[
                "Applications natives performantes pour iOS et Android",
                "Interfaces utilisateur intuitives et attrayantes",
                "Fonctionnalités personnalisées selon vos besoins",
                "Intégration avec vos systèmes existants",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle
                    size={20}
                    className={isDark ? "text-yellow-dark" : "text-blue-dark"}
                  />
                  <p className="text-gray-600 dark:text-gray-300">{item}</p>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {[
                "Optimisation pour les performances et la consommation de batterie",
                "Support et maintenance continue",
                "Mises à jour régulières pour suivre l'évolution des plateformes",
                "Analyses et rapports sur l'utilisation de l'application",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle
                    size={20}
                    className={isDark ? "text-yellow-dark" : "text-blue-dark"}
                  />
                  <p className="text-gray-600 dark:text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
