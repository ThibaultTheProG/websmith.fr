"use client";

import Link from "next/link";
import Button from "../ui/button";
import { useThemeContext } from "@/app/providers";

export default function CTASection() {
    const { isDark } = useThemeContext();
    return (
        <section className="py-16 bg-blue-600 dark:bg-yellow-light text-white dark:text-black-light rounded-lg">
            <div className="max-w-4xl mx-auto text-center px-4">
                <h2 className="text-3xl font-bold mb-6">Prêt à concrétiser votre projet web ?</h2>
                <p className="text-xl mb-8">
                    Contactez-nous pour discuter de vos besoins et découvrir comment notre expertise 
                    peut transformer votre vision en réalité.
                </p>
                <Link href="/contact">
                <Button variant={isDark ? "onColor" : "onColorLight"}>Demander un devis gratuit</Button>
                </Link>
            </div>
        </section>
    );
} 