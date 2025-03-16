"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useThemeContext } from "@/app/providers";
export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { isDark, mounted } = useThemeContext();

  if (!mounted) {
    return (
      <div className="flex flex-col space-y-8">
        <div className="text-center space-y-4">
          <div className="h-6 w-36 bg-gray-200 dark:bg-gray-700 rounded mx-auto"></div>
        </div>  
      </div>
    );
  }

  return (
    <footer className="dark:bg-black-light light:bg-gray-100 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et Description */}
          <div className="space-y-4">
            <div className="relative h-12 w-40">
              <Image
                src={isDark ? "/images/SVG/logo_darkmode.svg" : "/images/SVG/logo_lightmode.svg"}
                alt="WebSmith Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="dark:text-gray-400 light:text-gray-600">
              Votre partenaire digital pour des solutions web sur mesure.
            </p>
          </div>

          {/* Coordonnées */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold dark:text-yellow-dark light:text-blue-dark">Contact</h3>
            <ul className="space-y-2 dark:text-gray-400 light:text-gray-600">
              <li className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:contact@websmith.fr" className="dark:hover:text-yellow-dark light:hover:text-blue-dark transition-colors">
                  contact@websmith.fr
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:+33637160637" className="dark:hover:text-yellow-dark light:hover:text-blue-dark transition-colors">
                  06 37 16 06 37
                </a>
              </li>
            </ul>
          </div>

          {/* Liens Rapides */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold dark:text-yellow-dark light:text-blue-dark">Liens Rapides</h3>
            <ul className="space-y-2 dark:text-gray-400 light:text-gray-600">
              <li>
                <Link href="/devweb" className="dark:hover:text-yellow-dark light:hover:text-blue-dark transition-colors">
                  Développement web
                </Link>
              </li>
              <li>
                <Link href="/devmobile" className="dark:hover:text-yellow-dark light:hover:text-blue-dark transition-colors">
                  Développement mobile
                </Link>
              </li>
              <li>
                <Link href="/marketing" className="dark:hover:text-yellow-dark light:hover:text-blue-dark transition-colors">
                  Marketing Ops
                </Link>
              </li>
              <li>
                <Link href="/realisations" className="dark:hover:text-yellow-dark light:hover:text-blue-dark transition-colors">
                  Nos Réalisations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="dark:hover:text-yellow-dark light:hover:text-blue-dark transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Réseaux Sociaux */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold dark:text-yellow-dark light:text-blue-dark">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-gray-400 light:text-gray-600 dark:hover:text-yellow-dark light:hover:text-blue-dark transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Barre de séparation */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-sm dark:text-gray-400 light:text-gray-600">
              © {currentYear} WebSmith. Tous droits réservés.
            </p>

            {/* Mentions légales */}
            <div className="flex space-x-6 text-sm dark:text-gray-400 light:text-gray-600">
              <Link href="/mentions-legales" className="dark:hover:text-yellow-dark light:hover:text-blue-dark transition-colors">
                Mentions Légales
              </Link>
              <Link href="/politique-confidentialite" className="dark:hover:text-yellow-dark light:hover:text-blue-dark transition-colors">
                Politique de Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
