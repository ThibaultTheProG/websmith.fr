"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { useThemeContext } from "./providers";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { setTheme, mounted, isDark } = useThemeContext();
  const pathname = usePathname();

  // Fermer le menu mobile lors du changement de page
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Ajouter une ombre au header lors du défilement
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/devweb", label: "Développement web" },
    { href: "/devmobile", label: "Développement mobile" },
    { href: "/marketing", label: "Marketing Ops" },
  ];

  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 bg-black-light transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Version simplifiée pendant le chargement */}
            <div className="h-10 w-36"></div>
            <div className="hidden md:flex space-x-8">
              {navLinks.map((_, i) => (
                <div key={i} className="h-4 w-24"></div>
              ))}
            </div>
            <div className="md:hidden">
              <div className="h-6 w-6"></div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className={`sticky top-0 z-50 bg-white dark:bg-black-light transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={isDark ? "/images/SVG/logo_darkmode.svg" : "/images/SVG/logo_lightmode.svg"}
              width={150}
              height={40}
              alt="Logo Websmith"
              className="h-auto"
            />
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-gray-800 dark:text-white dark:hover:text-yellow-dark hover:text-blue-dark transition-colors duration-200 font-medium ${
                  pathname === link.href ? 'dark:text-yellow-dark light:text-blue-dark' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Boutons Desktop (Contact + Theme Toggle) */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Bouton Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 cursor-pointer rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label={isDark ? "Passer en mode clair" : "Passer en mode sombre"}
            >
              {isDark ? (
                <Sun size={20} />
              ) : (
                <Moon size={20} />
              )}
            </button>
            
            {/* Bouton Contact */}
            <Link href="/contact">
              <button className="dark:bg-yellow-dark dark:hover:bg-yellow-light bg-blue-dark dark:text-black hover:text-black hover:bg-blue-light text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 cursor-pointer">
                Nous contacter
              </button>
            </Link>
          </div>

          {/* Boutons Mobile (Menu + Theme) */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Bouton Theme Toggle Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-800 dark:text-white"
              aria-label={isDark ? "Passer en mode clair" : "Passer en mode sombre"}
            >
              {isDark ? (
                <Sun size={20} />
              ) : (
                <Moon size={20} />
              )}
            </button>
            
            {/* Bouton Menu Mobile */}
            <button 
              className="text-gray-800 dark:text-white focus:outline-none"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4 border-t border-gray-200 dark:border-gray-700">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-gray-800 dark:text-white hover:text-yellow-dark transition-colors duration-200 ${
                pathname === link.href ? 'text-yellow-dark font-medium' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="mt-4">
            <button className="w-full bg-yellow-dark hover:bg-yellow-light text-black font-medium py-2 px-4 rounded-md transition-colors duration-200">
              Nous contacter
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
