"use client";

import { useThemeContext } from "@/app/providers";
import { CheckCircle, BarChart, PieChart, TrendingUp, LineChart } from "lucide-react";

export default function DataAnalytics() {
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
      icon: <BarChart size={24} />,
      title: "Analyse de performance",
      description:
        "Mesurez précisément l'efficacité de vos campagnes marketing et identifiez les leviers d'amélioration.",
    },
    {
      icon: <PieChart size={24} />,
      title: "Segmentation avancée",
      description:
        "Segmentez votre audience avec précision pour des campagnes ciblées et personnalisées.",
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Prédiction et tendances",
      description:
        "Anticipez les comportements futurs grâce à l'analyse prédictive et l'identification des tendances.",
    },
    {
      icon: <LineChart size={24} />,
      title: "Dashboards personnalisés",
      description:
        "Visualisez vos KPIs clés en temps réel grâce à des tableaux de bord sur mesure.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-black-light rounded-3xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {"L'analyse de données au service de votre"}
            <span className={isDark ? "text-yellow-dark" : "text-blue-dark"}>
              stratégie marketing
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Transformez vos données brutes en insights actionnables pour optimiser vos campagnes et maximiser votre ROI.
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
            Notre approche{" "}
            <span className={isDark ? "text-yellow-dark" : "text-blue-dark"}>
              data-driven
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {[
                "Collecte et centralisation des données de toutes vos sources",
                "Nettoyage et structuration pour une analyse fiable",
                "Création de modèles d'attribution multi-touch",
                "Mise en place d'outils de visualisation intuitifs",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle
                    size={20}
                    className={
                      isDark ? "text-yellow-dark" : "text-blue-dark"
                    }
                  />
                  <p className="text-gray-600 dark:text-gray-300">{item}</p>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {[
                "Identification des corrélations et insights clés",
                "Recommandations stratégiques basées sur les données",
                "Optimisation continue des campagnes",
                "Formation de vos équipes à l'analyse de données",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle
                    size={20}
                    className={
                      isDark ? "text-yellow-dark" : "text-blue-dark"
                    }
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