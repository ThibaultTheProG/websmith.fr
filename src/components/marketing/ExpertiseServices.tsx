"use client";

import { useThemeContext } from "@/app/providers";
import { 
  Database, 
  BarChart, 
  Mail, 
  MessageSquare, 
  Workflow, 
  Tag, 
  Bot, 
  Building2 
} from "lucide-react";
import Image from "next/image";

export default function ExpertiseServices() {
  const { isDark, mounted } = useThemeContext();

  if (!mounted) {
    return (
      <section id="expertise" className="py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <h1>En cours de développement</h1>
        </div>
      </section>
    );
  }

  return (
    <section id="expertise" className="py-16 md:py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Notre expertise en{" "}
          <span className={isDark ? "text-yellow-dark" : "text-blue-dark"}>
            Marketing Ops
          </span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Nous proposons des solutions complètes pour optimiser vos opérations marketing et maximiser votre ROI grâce à l'automatisation et l'analyse de données.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="bg-white dark:bg-black-light p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className={`p-3 rounded-full ${isDark ? "bg-yellow-dark" : "bg-blue-dark"}`}>
                <Bot size={24} className={isDark ? "text-black" : "text-white"} />
              </div>
              <h3 className="text-xl font-bold">Scraping de données</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Collectez des données précieuses sur vos marchés cibles grâce à nos solutions de scraping éthique. Identifiez de nouvelles opportunités et enrichissez vos bases de données.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <Database size={16} className={isDark ? "text-yellow-dark" : "text-blue-dark"} />
                <span className="text-sm">Enrichissement de données</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart size={16} className={isDark ? "text-yellow-dark" : "text-blue-dark"} />
                <span className="text-sm">Analyse concurrentielle</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-black-light p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className={`p-3 rounded-full ${isDark ? "bg-yellow-dark" : "bg-blue-dark"}`}>
                <Workflow size={24} className={isDark ? "text-black" : "text-white"} />
              </div>
              <h3 className="text-xl font-bold">Marketing Automation</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Automatisez vos campagnes marketing pour gagner en efficacité et personnaliser l'expérience client à grande échelle. Workflows, triggers, segmentation avancée.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <Mail size={16} className={isDark ? "text-yellow-dark" : "text-blue-dark"} />
                <span className="text-sm">Campagnes automatisées</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare size={16} className={isDark ? "text-yellow-dark" : "text-blue-dark"} />
                <span className="text-sm">Nurturing personnalisé</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-black-light p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className={`p-3 rounded-full ${isDark ? "bg-yellow-dark" : "bg-blue-dark"}`}>
                <Tag size={24} className={isDark ? "text-black" : "text-white"} />
              </div>
              <h3 className="text-xl font-bold">Plan de Taggage</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Implémentez une stratégie de tracking robuste pour mesurer précisément l'efficacité de vos actions marketing et optimiser votre ROI.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <BarChart size={16} className={isDark ? "text-yellow-dark" : "text-blue-dark"} />
                <span className="text-sm">Analytics avancé</span>
              </div>
              <div className="flex items-center gap-2">
                <Database size={16} className={isDark ? "text-yellow-dark" : "text-blue-dark"} />
                <span className="text-sm">Data Layer</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-black-light p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className={`p-3 rounded-full ${isDark ? "bg-yellow-dark" : "bg-blue-dark"}`}>
                <Building2 size={24} className={isDark ? "text-black" : "text-white"} />
              </div>
              <h3 className="text-xl font-bold">Déploiement CRM</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Implémentation et optimisation de solutions CRM (Hubspot, Salesforce) pour centraliser vos données clients et améliorer votre relation client.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <Database size={16} className={isDark ? "text-yellow-dark" : "text-blue-dark"} />
                <span className="text-sm">Centralisation des données</span>
              </div>
              <div className="flex items-center gap-2">
                <Workflow size={16} className={isDark ? "text-yellow-dark" : "text-blue-dark"} />
                <span className="text-sm">Automatisation des process</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative h-[600px] rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/images/pages/marketing/expertise.jpg"
              alt="Expertise en Marketing Ops"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white dark:bg-black-light p-4 rounded-xl shadow-lg">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-full ${isDark ? "bg-yellow-dark" : "bg-blue-dark"}`}>
                <BarChart size={20} className={isDark ? "text-black" : "text-white"} />
              </div>
              <div>
                <p className="font-medium">Analyse de données</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Insights actionnables</p>
              </div>
            </div>
          </div>
          <div className="absolute -top-6 -right-6 bg-white dark:bg-black-light p-4 rounded-xl shadow-lg">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-full ${isDark ? "bg-yellow-dark" : "bg-blue-dark"}`}>
                <Mail size={20} className={isDark ? "text-black" : "text-white"} />
              </div>
              <div>
                <p className="font-medium">Campagnes multicanal</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Email, SMS, Web</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 