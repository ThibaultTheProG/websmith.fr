"use client";
import React from "react";
import { useThemeContext } from "@/app/providers";
import Image from "next/image";
interface CMSCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function CMSCard({ title, description, icon }: CMSCardProps) {
  return (
    <div className="bg-white dark:bg-black-light-2 p-8 rounded-lg shadow-md">
      <div className="flex items-center mb-4 space-x-4">
        {icon}
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}

export default function ExpertiseCMS() {
  const { isDark, mounted } = useThemeContext();
  
  // Définir une couleur par défaut pour le rendu initial côté serveur
  const iconColor = mounted ? (isDark ? "#fdb827" : "#3232FC") : "currentColor";
  
  const cmsItems = [
    {
      title: "WordPress",
      description:
        "Création de sites vitrines professionnels, boutiques e-commerce avec WooCommerce et blogs optimisés pour le référencement et la performance.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="32"
          height="32"
          viewBox="0,0,256,256"
        >
          <g
            fill={iconColor}
            fillRule="nonzero"
            stroke="none"
            strokeWidth="1"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="10"
            strokeDasharray=""
            strokeDashoffset="0"
            fontFamily="none"
            fontWeight="none"
            fontSize="none"
            textAnchor="none"
          >
            <g transform="scale(8,8)">
              <path d="M16,4c-6.61719,0 -12,5.38281 -12,12c0,6.61719 5.38281,12 12,12c6.61719,0 12,-5.38281 12,-12c0,-6.61719 -5.38281,-12 -12,-12zM16,4.5625c6.3125,0 11.4375,5.125 11.4375,11.4375c0,6.3125 -5.125,11.4375 -11.4375,11.4375c-6.3125,0 -11.4375,-5.125 -11.4375,-11.4375c0,-6.3125 5.125,-11.4375 11.4375,-11.4375zM16,5.71875c-3.59766,0 -6.75391,1.82813 -8.59375,4.625c0.24219,0.00781 0.46094,0 0.65625,0c1.07813,0 2.75,-0.125 2.75,-0.125c0.55469,-0.03125 0.61719,0.77734 0.0625,0.84375c0,0 -0.56641,0.09375 -1.1875,0.125l3.75,11.125l2.25,-6.75l-1.59375,-4.375c-0.55469,-0.03125 -1.09375,-0.125 -1.09375,-0.125c-0.55469,-0.03125 -0.49219,-0.875 0.0625,-0.84375c0,0 1.70703,0.125 2.71875,0.125c1.07813,0 2.75,-0.125 2.75,-0.125c0.55469,-0.03125 0.61719,0.77734 0.0625,0.84375c0,0 -0.57031,0.09375 -1.1875,0.125l3.71875,11.0625l1.03125,-3.4375c0.51953,-1.33594 0.78125,-2.46094 0.78125,-3.34375c0,-1.27344 -0.44922,-2.12891 -0.84375,-2.8125c-0.51953,-0.84766 -1,-1.58984 -1,-2.4375c0,-0.94531 0.70703,-1.8125 1.71875,-1.8125c0.04688,0 0.07813,0 0.125,0c-1.83203,-1.67969 -4.25781,-2.6875 -6.9375,-2.6875zM25.03125,11.0625c0.04688,0.32813 0.0625,0.68359 0.0625,1.0625c0,1.04297 -0.19531,2.21875 -0.78125,3.6875l-3.125,9.09375c3.0625,-1.78516 5.09375,-5.10937 5.09375,-8.90625c0,-1.78906 -0.44531,-3.47266 -1.25,-4.9375zM6.59375,11.8125c-0.57031,1.27734 -0.875,2.69531 -0.875,4.1875c0,4.07422 2.34766,7.58203 5.78125,9.25zM16.1875,16.90625l-3.09375,8.96875c0.92188,0.26953 1.89453,0.40625 2.90625,0.40625c1.19922,0 2.33594,-0.1875 3.40625,-0.5625c-0.02734,-0.04297 -0.04297,-0.10547 -0.0625,-0.15625z"></path>
            </g>
          </g>
        </svg>
      ),
    },
    {
      title: "Shopify",
      description:
        "Développement de solutions e-commerce personnalisées avec une expérience d&apos;achat fluide et des fonctionnalités marketing intégrées.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="32"
          height="32"
          viewBox="0,0,256,256"
        >
          <g
            fill={iconColor}
            fillRule="nonzero"
            stroke="none"
            strokeWidth="1"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="10"
            strokeDasharray=""
            strokeDashoffset="0"
            fontFamily="none"
            fontWeight="none"
            fontSize="none"
            textAnchor="none"
            style={{ mixBlendMode: "normal" }}
          >
            <g transform="scale(8,8)">
              <path d="M12.80078,3c-1.7638,0 -3.17116,2.08328 -3.68555,5.25977l-3.31445,0.93945l-2.40039,17l15.59961,2.80078l9.59961,-1.90039l-3.09961,-20l-2.80078,-0.40039l-2.09961,-1.69922l-1.16797,0.33203c-0.73573,-1.48821 -1.77219,-2.33203 -2.93164,-2.33203c-0.4983,0 -1.2037,0.14539 -1.88672,0.82227c-0.53374,-0.52639 -1.14025,-0.82227 -1.8125,-0.82227zM12.90039,5c0.26557,0 0.84311,0.47349 1.25,1.83008l-2.875,0.81641c0.45198,-1.80354 1.22649,-2.64648 1.625,-2.64648zM16.5,5c0.19148,0 0.54878,0.28542 0.91016,0.9043l-1.37891,0.39258c-0.10865,-0.31642 -0.22623,-0.61407 -0.35352,-0.88867l0.12305,0.0918c0.2,-0.3 0.49922,-0.5 0.69922,-0.5zM19.22656,7.35938l-1.18164,19.46094l-12.3457,-2.32031l1.90039,-13.69922zM21.18945,7.99609l0.61133,0.50391l1.89844,0.30078l2.60156,16.79883l-6.25195,1.19922zM14.5,11.90039c-3,0 -4.5,1.9 -4.5,4c0,2.5 2.40039,2.5 2.40039,4c0,0.4 -0.30039,0.90039 -0.90039,0.90039c-1,0 -2.09961,-1 -2.09961,-1l-0.59961,1.89844c0,0 1.09883,1.30078 3.29883,1.30078c1.8,0 3.09961,-1.4 3.09961,-3.5c0,-2.6 -3,-3.09922 -3,-4.19922c0,-0.2 0.10039,-1 1.40039,-1c0.9,0 1.59961,0.39844 1.59961,0.39844l0.80078,-2.5c0,0 -0.6,-0.29883 -1.5,-0.29883z"></path>
            </g>
          </g>
        </svg>
      ),
    },
    {
      title: "PrestaShop",
      description:
        "Conception de boutiques en ligne performantes avec une gestion avancée des catalogues produits et des processus de commande optimisés.",
      icon: mounted ? (
        <Image src="/images/SVG/prestashop.svg" alt="PrestaShop" width={32} height={32} />
      ) : (
        // Placeholder pour le rendu initial côté serveur
        <div className="w-8 h-8"></div>
      ),
    },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-black-light rounded-md">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Expertise CMS</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {cmsItems.map((item, index) => (
            <CMSCard
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
