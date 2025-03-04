"use client";

import Image from "next/image";
import { useThemeContext } from "@/app/providers";

export default function Why() {
  const { mounted, isDark } = useThemeContext();

  // Si le composant n'est pas monté, on peut afficher un squelette
  if (!mounted) {
    return (
      <div className="flex flex-col space-y-8">
        <div className="text-center space-y-4">
          <div className="h-6 w-36 bg-gray-200 dark:bg-gray-700 rounded mx-auto"></div>
          <div className="h-10 w-full max-w-md bg-gray-200 dark:bg-gray-700 rounded mx-auto"></div>
          <div className="h-20 w-full max-w-2xl bg-gray-200 dark:bg-gray-700 rounded mx-auto"></div>
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
        <span className="dark:text-yellow-dark light:text-blue-dark font-medium">Pourquoi nous choisir</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Pourquoi faire appel à nous ?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Nous combinons expertise technique et vision stratégique pour vous offrir des solutions digitales performantes.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className={`${isDark ? 'bg-black-light' : 'bg-gray-100'} p-6 rounded-lg space-y-4 flex flex-col`}>
          <div className="relative h-40">
            <Image
              src={isDark ? "/images/SVG/b_personnalisation.svg" : "/images/SVG/l_personnalisation.svg"}
              alt="Personnalisation"
              fill
              style={{ objectFit: "contain" }}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Personnalisation</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Chaque projet est unique, et nous nous efforçons de créer des
            solutions sur mesure qui correspondent parfaitement à vos besoins.
          </p>
        </div>

        <div className={`${isDark ? 'bg-black-light' : 'bg-gray-100'} p-6 rounded-lg space-y-4 flex flex-col`}>
          <div className="relative h-40">
            <Image
              src={isDark ? "/images/SVG/b_support.svg" : "/images/SVG/l_support.svg"}
              alt="Support"
              fill
              style={{ objectFit: "contain" }}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Support</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Nous vous accompagnons à chaque étape de votre projet, de la
            conception à la réalisation, et assurons un support continu pour
            garantir votre satisfaction.
          </p>
        </div>

        <div className={`${isDark ? 'bg-black-light' : 'bg-gray-100'} p-6 rounded-lg space-y-4 flex flex-col`}>
          <div className="relative h-40">
            <Image
              src={isDark ? "/images/SVG/b_expertise.svg" : "/images/SVG/l_expertise.svg"}
              alt="Expertise"
              fill
              style={{ objectFit: "contain" }}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Expertise</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Avec des années d&apos;expérience dans le marketing digital et
            le développement web, nous maîtrisons les techniques les plus
            avancées pour garantir votre succès en ligne.
          </p>
        </div>
      </div>
    </div>
  );
}
