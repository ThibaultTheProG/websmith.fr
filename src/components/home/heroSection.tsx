"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "../ui/button";
import { useThemeContext } from "@/app/providers";

export default function Hero() {
  const { mounted, isDark } = useThemeContext();

  // Si le composant n'est pas monté, on peut afficher un squelette ou une version par défaut
  if (!mounted) {
    return (
      <div className="flex flex-col items-center space-y-8 md:flex-row md:space-y-0 md:space-x-8">
        <div className="flex flex-col space-y-6 md:basis-1/2">
          <div className="h-6 w-36 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="h-12 w-full max-w-md bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="h-24 w-full max-w-md bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="flex space-x-4">
            <div className="h-10 w-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-10 w-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
        </div>
        <div className="md:basis-1/2 flex justify-center md:justify-end">
          <div className="h-64 w-64 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center space-y-8 md:flex-row md:space-y-0 md:space-x-8">
      <div className="flex flex-col space-y-6 text-center md:text-left md:items-start md:basis-1/2">
        <span className="dark:text-yellow-dark light:text-blue-dark uppercase text-lg font-bold">
          Artisan du web
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Agence de développement et de marketing
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Nous concevons les meilleurs outils et stratégies pour développer
          votre activité.
        </p>
        <div className="flex flex-row space-x-4 pt-4 justify-center md:justify-start">
          <Link href="/contact">
            <Button variant={isDark ? "primary" : "primaryLight"} size="lg">Nous contacter</Button>
          </Link>
          <Link href="#services">
            <Button variant={isDark ? "outline" : "outlineLight"} size="lg">Nos services</Button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col mt-8 items-center md:basis-1/2 md:items-end md:mt-0">
        <div className="relative w-64 h-64 md:h-96 md:w-96">
          <Image
            src={isDark ? "/images/SVG/b_hero.svg" : "/images/SVG/l_hero.svg"}
            alt="Illustration de développement web"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
      </div>
    </div>
  );
}
