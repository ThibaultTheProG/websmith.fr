"use client";

import { useThemeContext } from "@/app/providers";
import { ArrowRight, BarChart, Mail } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
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
      <div
        className={`rounded-3xl p-8 md:p-12 ${
          isDark ? "bg-black-light" : "bg-gray-100"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à{" "}
              <span className={isDark ? "text-yellow-dark" : "text-blue-dark"}>
                optimiser
              </span>{" "}
              vos opérations marketing ?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Contactez-nous dès aujourd'hui pour discuter de vos besoins en marketing ops et découvrir comment nos solutions peuvent vous aider à atteindre vos objectifs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className={`px-6 py-3 rounded-lg font-medium text-lg transition-all duration-300 inline-flex items-center ${
                  isDark
                    ? "bg-yellow-dark text-black hover:bg-yellow-light"
                    : "bg-blue-dark text-white hover:bg-blue-light hover:text-black"
                }`}
              >
                Demander un devis
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link
                href="/realisations"
                className={`px-6 py-3 rounded-lg font-medium text-lg transition-all duration-300 inline-flex items-center ${
                  isDark
                    ? "border border-yellow-dark text-yellow-dark hover:bg-yellow-dark hover:text-black"
                    : "border border-blue-dark text-blue-dark hover:bg-blue-dark hover:text-white"
                }`}
              >
                Voir nos réalisations
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div
              className={`relative w-64 h-64 rounded-full flex items-center justify-center ${
                isDark ? "bg-gray-700" : "bg-white"
              }`}
            >
              <div
                className={`absolute w-full h-full rounded-full animate-pulse opacity-50 ${
                  isDark ? "bg-yellow-dark/20" : "bg-blue-dark/20"
                }`}
              ></div>
              <div
                className={`absolute w-3/4 h-3/4 rounded-full animate-pulse opacity-50 ${
                  isDark ? "bg-yellow-dark/30" : "bg-blue-dark/30"
                }`}
              ></div>
              <div className="relative z-10 flex flex-col items-center">
                <div
                  className={`p-4 rounded-full mb-4 ${
                    isDark ? "bg-yellow-dark" : "bg-blue-dark"
                  }`}
                >
                  <BarChart
                    size={32}
                    className={isDark ? "text-black" : "text-white"}
                  />
                </div>
                <div
                  className={`p-4 rounded-full ${
                    isDark ? "bg-yellow-dark" : "bg-blue-dark"
                  }`}
                >
                  <Mail
                    size={32}
                    className={isDark ? "text-black" : "text-white"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 