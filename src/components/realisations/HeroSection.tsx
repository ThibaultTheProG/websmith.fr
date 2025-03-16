"use client";

import { useThemeContext } from "@/app/providers";
import { Briefcase, Code, Smartphone, BarChart } from "lucide-react";

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
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          Nos{" "}
          <span className={isDark ? "text-yellow-dark" : "text-blue-dark"}>
            réalisations
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12">
          Découvrez nos projets récents et comment nous avons aidé nos clients à atteindre leurs objectifs grâce à des solutions sur mesure.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          <div className="flex flex-col items-center">
            <div className={`p-4 rounded-full ${isDark ? "bg-yellow-dark" : "bg-blue-dark"} mb-3`}>
              <Code size={24} className={isDark ? "text-black" : "text-white"} />
            </div>
            <p className="font-medium">Sites Internet</p>
          </div>
          <div className="flex flex-col items-center">
            <div className={`p-4 rounded-full ${isDark ? "bg-yellow-dark" : "bg-blue-dark"} mb-3`}>
              <Briefcase size={24} className={isDark ? "text-black" : "text-white"} />
            </div>
            <p className="font-medium">Applications Web</p>
          </div>
          <div className="flex flex-col items-center">
            <div className={`p-4 rounded-full ${isDark ? "bg-yellow-dark" : "bg-blue-dark"} mb-3`}>
              <Smartphone size={24} className={isDark ? "text-black" : "text-white"} />
            </div>
            <p className="font-medium">Applications Mobile</p>
          </div>
          <div className="flex flex-col items-center">
            <div className={`p-4 rounded-full ${isDark ? "bg-yellow-dark" : "bg-blue-dark"} mb-3`}>
              <BarChart size={24} className={isDark ? "text-black" : "text-white"} />
            </div>
            <p className="font-medium">Marketing</p>
          </div>
        </div>
      </div>
    </section>
  );
} 