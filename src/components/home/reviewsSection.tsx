"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Review } from "@/lib/types";

const reviews: Review[] = [
  {
    id: 1,
    clientName: "Marie Laurent",
    companyName: "Poème Paris",
    logoUrl: "/images/clients/poemeParis.png",
    content:
      "WebSmith a parfaitement compris nos besoins et a mis en place une solution RGPD efficace tout en optimisant notre tracking marketing. Un vrai plus pour notre activité !",
    rating: 5,
  },
  {
    id: 2,
    clientName: "Thomas Dubois",
    companyName: "Youlive Immobilier",
    logoUrl: "/images/clients/youlive.png",
    content:
      "La refonte de notre site web a été un véritable succès. L'équipe a su moderniser notre image tout en conservant notre identité. Très professionnel !",
    rating: 5,
  },
  {
    id: 3,
    clientName: "Alexandre Martin",
    companyName: "Ares Motors",
    logoUrl: "/images/clients/aresMotors.svg",
    content:
      "Un travail remarquable sur le développement de notre site. L'interface est intuitive et le design est à la hauteur de nos attentes. Je recommande vivement !",
    rating: 5,
  },
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col space-y-8 py-12">
      <div className="text-center space-y-4">
        <span className="text-yellow-dark">Ils nous font confiance</span>
        <h2 className="text-3xl font-bold">Les avis de nos clients</h2>
      </div>

      <div className="relative max-w-4xl mx-auto px-4">
        {/* Boutons de navigation */}
        <button
          onClick={previousReview}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-yellow-light hover:bg-yellow-dark text-black rounded-full p-3 transition-colors"
          aria-label="Avis précédent"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextReview}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-yellow-light hover:bg-yellow-dark text-black rounded-full p-3 transition-colors"
          aria-label="Avis suivant"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Carrousel d'avis */}
        <div className="bg-black-light rounded-xl shadow-lg p-8 transition-all duration-500 text-white">
          <div className="flex flex-col items-center space-y-6">
            {/* Logo client */}
            <div className="relative w-32 h-32 bg-white rounded-full p-4">
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={reviews[currentIndex].logoUrl}
                  alt={reviews[currentIndex].companyName}
                  fill
                  sizes="128px"
                  className="object-contain p-2"
                />
              </div>
            </div>

            {/* Étoiles */}
            <div className="flex space-x-1">
              {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-dark"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Contenu de l'avis */}
            <blockquote className="text-center italic">
              &ldquo;{reviews[currentIndex].content}&rdquo;
            </blockquote>

            {/* Informations client */}
            <div className="text-center">
              <p className="font-semibold">
                {reviews[currentIndex].clientName}
              </p>
              <p>{reviews[currentIndex].companyName}</p>
            </div>
          </div>
        </div>

        {/* Indicateurs de position */}
        <div className="flex justify-center space-x-2 mt-6">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-yellow-dark" : "bg-yellow-light"
              }`}
              aria-label={`Aller à l'avis ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
