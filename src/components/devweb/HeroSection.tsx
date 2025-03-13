"use client";

import Link from "next/link";
import Button from "../ui/button";
import { useThemeContext } from "@/app/providers";

export default function HeroSection() {
    const { isDark, mounted } = useThemeContext();
    return (
        <section className="py-16 md:py-24">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Notre expertise en développement web</h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                    Nous concevons et développons des solutions web sur mesure qui répondent parfaitement 
                    aux besoins spécifiques de votre entreprise, en alliant performance technique et expérience utilisateur.
                </p>
                {mounted ? (
                    <Link href="/contact">
                        <Button variant={isDark ? "primary" : "primaryLight"}>
                            Discuter de votre projet
                        </Button>
                    </Link>
                ) : (
                    <div className="inline-block bg-blue-600 text-white font-medium py-3 px-8 rounded-lg">
                        Discuter de votre projet
                    </div>
                )}
            </div>
        </section>
    );
} 