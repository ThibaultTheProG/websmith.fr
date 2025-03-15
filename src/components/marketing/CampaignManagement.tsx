"use client";

import { useThemeContext } from "@/app/providers";
import { Mail, MessageSquare, Zap, Users, Target, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CampaignManagement() {
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

  return (
    <section className="py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Gestion de{" "}
            <span className={isDark ? "text-yellow-dark" : "text-blue-dark"}>
              campagnes multicanal
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Nous concevons, déployons et optimisons vos campagnes marketing sur tous les canaux pour maximiser votre impact et votre ROI.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div
                className={`p-3 rounded-full ${
                  isDark ? "bg-yellow-dark" : "bg-blue-dark"
                }`}
              >
                <Mail
                  size={24}
                  className={isDark ? "text-black" : "text-white"}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Campagnes Email</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Conception, déploiement et optimisation de campagnes email performantes avec A/B testing, personnalisation avancée et analyse détaillée des résultats.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div
                className={`p-3 rounded-full ${
                  isDark ? "bg-yellow-dark" : "bg-blue-dark"
                }`}
              >
                <MessageSquare
                  size={24}
                  className={isDark ? "text-black" : "text-white"}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Campagnes SMS</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Mise en place de campagnes SMS ciblées pour des communications directes et efficaces, avec respect des réglementations et optimisation des taux de conversion.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div
                className={`p-3 rounded-full ${
                  isDark ? "bg-yellow-dark" : "bg-blue-dark"
                }`}
              >
                <Zap
                  size={24}
                  className={isDark ? "text-black" : "text-white"}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Automatisation</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Création de workflows automatisés pour vos campagnes, permettant une personnalisation à grande échelle et une réactivité optimale à chaque étape du parcours client.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/contact"
              className={`px-6 py-3 rounded-lg font-medium text-lg transition-all duration-300 inline-flex items-center ${
                isDark
                  ? "bg-yellow-dark text-black hover:bg-yellow-light"
                  : "bg-blue-dark text-white hover:bg-blue-light hover:text-black"
              }`}
            >
              Optimiser vos campagnes
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/images/pages/marketing/campaigns.jpg"
              alt="Gestion de campagnes marketing"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/90 dark:bg-black-light/90 p-4 rounded-lg text-center">
                  <Target
                    size={24}
                    className={`mx-auto mb-2 ${
                      isDark ? "text-yellow-dark" : "text-blue-dark"
                    }`}
                  />
                  <p className="font-bold">Ciblage précis</p>
                </div>
                <div className="bg-white/90 dark:bg-black-light/90 p-4 rounded-lg text-center">
                  <Users
                    size={24}
                    className={`mx-auto mb-2 ${
                      isDark ? "text-yellow-dark" : "text-blue-dark"
                    }`}
                  />
                  <p className="font-bold">Personnalisation</p>
                </div>
                <div className="bg-white/90 dark:bg-black-light/90 p-4 rounded-lg text-center">
                  <Clock
                    size={24}
                    className={`mx-auto mb-2 ${
                      isDark ? "text-yellow-dark" : "text-blue-dark"
                    }`}
                  />
                  <p className="font-bold">Optimisation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 