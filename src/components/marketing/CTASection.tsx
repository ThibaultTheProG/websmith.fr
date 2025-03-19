"use client";

import { useThemeContext } from "@/app/providers";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Button from "../ui/button";
import Image from "next/image";
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
              {
                "Contactez-nous dès aujourd'hui pour discuter de vos besoins en marketing ops et découvrir comment nos solutions peuvent vous aider à atteindre vos objectifs."
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button variant={isDark ? "primary" : "primaryLight"} size="lg">
                  Demander un devis
                  <ArrowRight size={20} className="ml-2" />
                </Button>
              </Link>
              <Link href="/realisations"><Button variant={isDark ? "outline" : "outlineLight"} size="lg">Voir nos réalisations</Button></Link>
            </div>
          </div>
          <div className="flex justify-center">
            <Image src={isDark ? "/images/SVG/marketing/b_optiCTA.svg" : "/images/SVG/marketing/l_optiCTA.svg"} alt="CTA" width={500} height={500} />
          </div>
        </div>
      </div>
    </section>
  );
}
