"use client";

import Image from "next/image";
import Link from "next/link";
import { useThemeContext } from "@/app/providers";
import Button from "../ui/button";
export default function Services() {
  const { mounted, isDark } = useThemeContext();

  if (!mounted) {
    return (
      <div className="flex flex-col space-y-8">
        <div className="text-center space-y-4">
          <div className="h-6 w-36 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="h-12 w-full max-w-md bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="h-20 w-full max-w-2xl bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-200 dark:bg-gray-700 p-6 rounded-lg h-80"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col space-y-8">
      <div className="text-center space-y-4">
        <span className="dark:text-yellow-dark light:text-blue-dark font-medium">Nos services</span>
        <h2 className="text-3xl md:text-4xl font-bold">
          Nous concevons, développons et propulsons vos idées
        </h2>
        <p className="dark:text-gray-300 light:text-gray-600 max-w-2xl mx-auto">
          Des solutions digitales complètes pour répondre à tous vos besoins en ligne.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className={`${isDark ? 'bg-black-light' : 'bg-gray-100'} p-6 rounded-lg flex flex-col space-y-4`}>
          <div className="relative h-60">
            <Image
              src={isDark ? "/images/SVG/b_devweb.svg" : "/images/SVG/l_devweb.svg"}
              alt="Développement web"
              fill
              style={{ objectFit: "contain" }}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <h3 className="text-xl font-bold">Développement web</h3>
          <p className="dark:text-gray-300 light:text-gray-600">
            Création de sites web sur mesure, e-commerce, applications web et intranets. 
            Nous utilisons les technologies les plus récentes pour des performances optimales.
          </p>
          <Link href="/devweb" className="mt-auto">
            <Button variant={isDark ? "primary" : "primaryLight"} size="md">En savoir plus</Button>
          </Link>
        </div>

        <div className={`${isDark ? 'bg-black-light' : 'bg-gray-100'} p-6 rounded-lg flex flex-col space-y-4`}>
          <div className="relative h-60">
            <Image
              src={isDark ? "/images/SVG/b_mobile.svg" : "/images/SVG/l_mobile.svg"}
              alt="Développement mobile"
              fill
              style={{ objectFit: "contain" }}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <h3 className="text-xl font-bold">Développement mobile</h3>
          <p className="dark:text-gray-300 light:text-gray-600">
            Applications mobiles natives et hybrides pour iOS et Android.
            Une expérience utilisateur fluide sur tous les appareils.
          </p>
          <Link href="/devmobile" className="mt-auto">
            <Button variant={isDark ? "primary" : "primaryLight"} size="md">En savoir plus</Button>
          </Link>
        </div>

        <div className={`${isDark ? 'bg-black-light' : 'bg-gray-100'} p-6 rounded-lg flex flex-col space-y-4`}>
          <div className="relative h-60">
            <Image
              src={isDark ? "/images/SVG/b_marketing.svg" : "/images/SVG/l_marketing.svg"}
              alt="Marketing digital"
              fill
              style={{ objectFit: "contain" }}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <h3 className="text-xl font-bold">Marketing digital</h3>
          <p className="dark:text-gray-300 light:text-gray-600">
            Stratégies SEO, campagnes publicitaires, réseaux sociaux et analyse de données.
            Augmentez votre visibilité et convertissez plus de visiteurs.
          </p>
          <Link href="/marketing" className="mt-auto">
            <Button variant={isDark ? "primary" : "primaryLight"} size="md">En savoir plus</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
