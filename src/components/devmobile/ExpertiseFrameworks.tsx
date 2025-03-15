"use client";

import { useThemeContext } from "@/app/providers";
import { Smartphone, Layers, Zap, Globe, Cpu, Shield } from "lucide-react";
import Image from "next/image";

export default function ExpertiseFrameworks() {
  const { isDark, mounted } = useThemeContext();

  if (!mounted){
    return (
      <section id="expertise" className="py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <h1>En cours de développement</h1>
        </div>
      </section>
    )
  }

  return (
    <section id="expertise" className="py-16 md:py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Notre expertise en{" "}
          <span className={isDark ? "text-yellow-dark" : "text-blue-dark"}>
            frameworks mobiles
          </span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Nous maîtrisons les technologies les plus avancées pour créer des applications mobiles performantes, évolutives et adaptées à vos besoins spécifiques.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="bg-white dark:bg-black-light p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className={`p-3 rounded-full ${isDark ? "bg-yellow-dark" : "bg-blue-dark"}`}>
                <Smartphone size={24} className={isDark ? "text-black" : "text-white"} />
              </div>
              <h3 className="text-xl font-bold">React Native</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Développez des applications natives pour iOS et Android à partir d'une base de code unique. React Native permet de créer des interfaces utilisateur fluides et réactives tout en réduisant les coûts de développement.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <Zap size={16} className={isDark ? "text-yellow-dark" : "text-blue-dark"} />
                <span className="text-sm">Performance native</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe size={16} className={isDark ? "text-yellow-dark" : "text-blue-dark"} />
                <span className="text-sm">Code partagé</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu size={16} className={isDark ? "text-yellow-dark" : "text-blue-dark"} />
                <span className="text-sm">Écosystème riche</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield size={16} className={isDark ? "text-yellow-dark" : "text-blue-dark"} />
                <span className="text-sm">Sécurité avancée</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-black-light p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className={`p-3 rounded-full ${isDark ? "bg-yellow-dark" : "bg-blue-dark"}`}>
                <Layers size={24} className={isDark ? "text-black" : "text-white"} />
              </div>
              <h3 className="text-xl font-bold">Flutter</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Créez des applications visuellement attrayantes avec des animations fluides grâce à Flutter. Ce framework de Google permet de développer des interfaces utilisateur cohérentes sur toutes les plateformes.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <Zap size={16} className={isDark ? "text-yellow-dark" : "text-blue-dark"} />
                <span className="text-sm">UI personnalisable</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe size={16} className={isDark ? "text-yellow-dark" : "text-blue-dark"} />
                <span className="text-sm">Multi-plateforme</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu size={16} className={isDark ? "text-yellow-dark" : "text-blue-dark"} />
                <span className="text-sm">Performances élevées</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield size={16} className={isDark ? "text-yellow-dark" : "text-blue-dark"} />
                <span className="text-sm">Hot Reload</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/images/pages/devmobile/framework.jpg"
              alt="Frameworks de développement mobile"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white dark:bg-black-light p-4 rounded-xl shadow-lg">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-full ${isDark ? "bg-yellow-dark" : "bg-blue-dark"}`}>
                <Zap size={20} className={isDark ? "text-black" : "text-white"} />
              </div>
              <div>
                <p className="font-medium">Développement rapide</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Livraison 40% plus rapide</p>
              </div>
            </div>
          </div>
          <div className="absolute -top-6 -right-6 bg-white dark:bg-black-light p-4 rounded-xl shadow-lg">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-full ${isDark ? "bg-yellow-dark" : "bg-blue-dark"}`}>
                <Globe size={20} className={isDark ? "text-black" : "text-white"} />
              </div>
              <div>
                <p className="font-medium">Multi-plateforme</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">iOS, Android & Web</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 