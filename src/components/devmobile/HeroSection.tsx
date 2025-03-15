"use client";

import { useThemeContext } from "@/app/providers";
import { Smartphone, Code, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function HeroSection() {
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Développement d'applications mobiles{" "}
            <span className={isDark ? "text-yellow-dark" : "text-blue-dark"}>
              sur mesure
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
            Transformez vos idées en applications mobiles performantes et
            intuitives avec nos solutions de développement sur mesure en React
            Native et Flutter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/contact"
              className={`px-6 py-3 rounded-lg font-medium text-lg transition-all duration-300 ${
                isDark
                  ? "bg-yellow-dark text-black hover:bg-yellow-light"
                  : "bg-blue-dark text-white hover:bg-blue-light hover:text-black"
              }`}
            >
              Discuter de votre projet
            </Link>
            <a
              href="#expertise"
              className={`px-6 py-3 rounded-lg font-medium text-lg transition-all duration-300 ${
                isDark
                  ? "border border-yellow-dark text-yellow-dark hover:bg-yellow-dark hover:text-black"
                  : "border border-blue-dark text-blue-dark hover:bg-blue-dark hover:text-white"
              }`}
            >
              Découvrir notre expertise
            </a>
          </div>
        </div>
        <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl">
          <Image
            src="/images/pages/devmobile/hero.jpg"
            alt="Développement d'applications mobiles"
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
                <Smartphone
                  size={24}
                  className={isDark ? "text-black" : "text-white"}
                />
              </div>
              <div
                className={`p-3 rounded-full ${
                  isDark ? "bg-yellow-dark" : "bg-blue-dark"
                }`}
              >
                <Code
                  size={24}
                  className={isDark ? "text-black" : "text-white"}
                />
              </div>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
