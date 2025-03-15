"use client";

import { useThemeContext } from "@/app/providers";
import { ClipboardList, Code, Smartphone, Gauge, Repeat, Lightbulb } from "lucide-react";
import Link from "next/link";
export default function Methodologie() {
  const { isDark, mounted } = useThemeContext();

  if (!mounted){
    return (
      <section className="py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <h1>En cours de développement</h1>
        </div>
      </section>
    )
  }

  const etapes = [
    {
      icon: <Lightbulb size={24} />,
      title: "Analyse et conception",
      description:
        "Nous analysons vos besoins et concevons une architecture adaptée à votre projet mobile.",
    },
    {
      icon: <ClipboardList size={24} />,
      title: "Planification",
      description:
        "Nous établissons un plan de développement détaillé avec des jalons clairs et des livrables définis.",
    },
    {
      icon: <Code size={24} />,
      title: "Développement",
      description:
        "Nous développons votre application en utilisant React Native ou Flutter selon vos besoins spécifiques.",
    },
    {
      icon: <Gauge size={24} />,
      title: "Tests et optimisation",
      description:
        "Nous testons rigoureusement votre application sur différents appareils et optimisons ses performances.",
    },
    {
      icon: <Smartphone size={24} />,
      title: "Déploiement",
      description:
        "Nous déployons votre application sur les stores (App Store, Google Play) et assurons sa mise en ligne.",
    },
    {
      icon: <Repeat size={24} />,
      title: "Maintenance et évolution",
      description:
        "Nous assurons la maintenance de votre application et l'adaptons aux évolutions technologiques.",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Notre{" "}
          <span className={isDark ? "text-yellow-dark" : "text-blue-dark"}>
            méthodologie
          </span>{" "}
          de développement
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Nous suivons une approche agile et structurée pour garantir le succès de votre projet d'application mobile.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {etapes.map((etape, index) => (
          <div
            key={index}
            className="bg-white dark:bg-black-light-2 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
          >
            <div
              className={`absolute top-0 right-0 w-16 h-16 -mt-8 -mr-8 rounded-full ${
                isDark ? "bg-yellow-light" : "bg-blue-light"
              }`}
            ></div>
            <div className="flex items-start gap-4">
              <div
                className={`p-3 rounded-full ${
                  isDark ? "bg-yellow-light" : "bg-blue-light"
                }`}
              >
                <span className="text-black">
                  {etape.icon}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{etape.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {etape.description}
                </p>
              </div>
            </div>
            <div className="absolute bottom-3 right-3">
              <span
                className={`text-3xl font-bold ${
                  isDark ? "text-yellow-light" : "text-blue-light"
                }`}
              >
                {index + 1}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Notre approche agile nous permet de nous adapter rapidement aux changements et d'impliquer nos clients à chaque étape du processus de développement.
        </p>
        <div className="mt-8">
          <Link
            href="/contact"
            className={`px-6 py-3 rounded-lg font-medium text-lg transition-all duration-300 inline-flex items-center ${
              isDark
                ? "bg-yellow-dark text-black hover:bg-yellow-light"
                : "bg-blue-dark text-white hover:bg-blue-light hover:text-black"
            }`}
          >
            Discuter de votre projet
            <Smartphone size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
} 