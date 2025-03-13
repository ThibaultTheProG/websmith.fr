"use client";
import React from "react";
import { useThemeContext } from "@/app/providers";
import Button from "../ui/button";
import Link from "next/link";

export default function CTASection() {
    const { isDark, mounted } = useThemeContext();
    
    return (
        <section className="py-16 bg-blue-light dark:bg-yellow-light text-black dark:text-black-light rounded-lg mb-16">
            <div className="max-w-4xl mx-auto text-center px-4">
                <h2 className="text-3xl font-bold mb-6">Prêt à concrétiser votre projet web ?</h2>
                <p className="text-xl mb-8">
                    Contactez-nous pour discuter de vos besoins et découvrir comment notre expertise 
                    peut transformer votre vision en réalité.
                </p>
                {mounted ? (
                    <Link href="/contact">
                        <Button variant={isDark ? "onColor" : "onColorLight"}>Demander un devis gratuit</Button>
                    </Link>
                ) : (
                    <div className="inline-block bg-white text-blue-600 font-medium py-3 px-8 rounded-lg">
                        Demander un devis gratuit
                    </div>
                )}
            </div>
        </section>
    );
} 