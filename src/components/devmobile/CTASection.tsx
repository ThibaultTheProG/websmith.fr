"use client";

import { useThemeContext } from "@/app/providers";
import { ArrowRight} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
export default function CTASection() {
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
              Prêt à transformer votre{" "}
              <span className={isDark ? "text-yellow-dark" : "text-blue-dark"}>
                idée
              </span>{" "}
              en application mobile ?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              {"Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir comment nous pouvons vous aider à créer une application mobile sur mesure qui répond parfaitement à vos besoins."}
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
            <Image src={isDark ? "/images/SVG/devMobile/b_ideaCTA.svg" : "/images/SVG/devMobile/l_ideaCTA.svg"} alt="CTA" width={500} height={500} />
          </div>
        </div>
      </div>
    </section>
  );
} 