"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/devweb", label: "Développement web" },
    { href: "/devmobile", label: "Développement mobile" },
    { href: "/marketing", label: "Marketing Ops" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <header className={`sticky top-0 z-50 bg-black-light transition-shadow duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/SVG/logo_darkmode.svg"
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
                className={`text-white hover:text-yellow-dark transition-colors duration-200 font-medium ${
                  pathname === link.href ? 'text-yellow-dark' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Bouton Contact (visible uniquement sur desktop) */}
          <div className="hidden md:block">
            <Link href="/contact">
              <button className="bg-yellow-dark hover:bg-yellow-light text-black font-medium py-2 px-4 rounded-md transition-colors duration-200 cursor-pointer">
                Nous contacter
              </button>
            </Link>
          </div>

          {/* Bouton Menu Mobile */}
          <button 
            className="md:hidden text-white focus:outline-none"
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

      {/* Menu Mobile */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4 border-t border-gray-700">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-white hover:text-yellow-dark transition-colors duration-200 ${
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
