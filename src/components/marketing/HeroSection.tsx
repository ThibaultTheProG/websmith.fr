"use client";

import { useThemeContext } from "@/app/providers";
import { BarChart, Database, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/button";
export default function HeroSection() {
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
        <div className="space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Solutions de{" "}
            <span className={isDark ? "text-yellow-dark" : "text-blue-dark"}>
              Marketing Ops
            </span>{" "}
            avancées
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
            {
              "Optimisez vos opérations marketing grâce à nos solutions sur mesure : automatisation, analyse de données, CRM et stratégies d'acquisition performantes."
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/contact">
              <Button variant={isDark ? "primary" : "primaryLight"} size="lg">
                Discuter de votre projet
              </Button>
            </Link>
            <Link href="#expertise">
              <Button variant={isDark ? "outline" : "outlineLight"} size="lg">
                Découvrir notre expertise
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl">
          <Image
            src="/images/pages/marketing/marketingHero.jpg"
            alt="Marketing Ops et Automatisation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/50 to-transparent flex items-end p-8">
            <div className="flex gap-4">
              <div
                className={`p-3 rounded-full ${
                  isDark ? "bg-yellow-dark" : "bg-blue-dark"
                }`}
              >
                <BarChart
                  size={24}
                  className={isDark ? "text-black" : "text-white"}
                />
              </div>
              <div
                className={`p-3 rounded-full ${
                  isDark ? "bg-yellow-dark" : "bg-blue-dark"
                }`}
              >
                <Database
                  size={24}
                  className={isDark ? "text-black" : "text-white"}
                />
              </div>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
