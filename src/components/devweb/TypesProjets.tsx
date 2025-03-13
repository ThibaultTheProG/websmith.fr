"use client";

import Image from "next/image";
import { useThemeContext } from "@/app/providers";

interface ProjectTypeProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function ProjectType({ title, description, icon }: ProjectTypeProps) {
  return (
    <div className="flex">
      <div className="mr-4">{icon}</div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
}

export default function TypesProjets() {
  const { isDark, mounted } = useThemeContext();
  const projectTypes = [
    {
      title: "CRM",
      description:
        "Développement de solutions de gestion de relation client personnalisées pour optimiser vos processus commerciaux et améliorer le suivi client.",
      icon: (
        <Image
          src={`/images/SVG/devWeb/${
            isDark ? "b_crm.svg" : "l_crm.svg"
          }`}
          alt="CRM"
          width={200}
          height={100}
        />
      ),
    },
    {
      title: "SaaS métier",
      description:
        "Conception de solutions logicielles en ligne adaptées à des secteurs spécifiques avec des fonctionnalités dédiées à votre domaine d'activité.",
      icon: (
        <Image
          src={`/images/SVG/devWeb/${
            isDark ? "b_saasMetier.svg" : "l_saasMetier.svg"
          }`}
          alt="SaaS métier"
          width={200}
          height={100}
        />
      ),
    },
    {
      title: "SaaS générique",
      description:
        "Développement de plateformes cloud évolutives offrant des services accessibles en ligne avec une architecture scalable et sécurisée.",
      icon: (
        <Image
          src={`/images/SVG/devWeb/${
            isDark ? "b_saasGenerique.svg" : "l_saasGenerique.svg"
          }`}
          alt="SaaS générique"
          width={200}
          height={100}
        />
      ),
    },
    {
      title: "Sites internet",
      description:
        "Création de sites vitrines, e-commerce et portails web avec une expérience utilisateur optimisée et un design adapté à votre image de marque.",
      icon: (
        <Image
          src={`/images/SVG/devWeb/${
            isDark ? "b_siteInternet.svg" : "l_siteInternet.svg"
          }`}
          alt="Site internet"
          width={200}
          height={100}
        />
      ),
    },
  ];

  if (!mounted)
    return (
      <section className="py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Types de projets</h2>
        </div>
      </section>
    );

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Types de projets
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projectTypes.map((project, index) => (
            <ProjectType
              key={index}
              title={project.title}
              description={project.description}
              icon={project.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
