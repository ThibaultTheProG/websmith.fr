"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Project, ProjectType } from '@/lib/types';


const projects: Project[] = [
  {
    id: 1,
    title: "Site Poème Paris",
    description: "Mise en place de la confirmité RGPD et du tracking",
    type: "marketing",
    imageUrl: "/images/projects/poemeParis.png"
  },
  {
    id: 2,
    title: "Site Youlive Immobilier",
    description: "Refonte du site de Youlive Immobilier",
    type: "web",
    imageUrl: "/images/projects/youliveSite.png"
  },
  {
    id: 3,
    title: "Développement du site de Ares Motors",
    description: "Développement du site de Ares Motors",
    type: "web",
    imageUrl: "/images/projects/aresMotors.png"
  },
  {
    id: 4,
    title: "Développement du site de Ares Motors",
    description: "Développement du site de Ares Motors",
    type: "web",
    imageUrl: "/images/projects/aresMotors.png"
  }
];

export default function Projects() {
  const [selectedType, setSelectedType] = useState<string>('tous');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  const projectTypes: ProjectType[] = ['tous', 'web', 'mobile','marketing', 'autre', ];

  useEffect(() => {
    if (selectedType === 'tous') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.type === selectedType));
    }
    setCurrentPage(1); // Réinitialiser la page lors du changement de filtre
  }, [selectedType]);

  // Calcul des indices pour la pagination
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  // Fonction pour changer de page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="flex flex-col space-y-8 py-12">
      <div className="text-center space-y-4">
        <span className="text-yellow-dark">Nos derniers projets</span>
        <h2 className="text-3xl font-bold">
          Découvrez nos réalisations
        </h2>
      </div>

      {/* Filtres */}
      <div className="flex justify-center space-x-4">
        {projectTypes.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-4 py-2 rounded-full transition-colors ${
              selectedType === type
                ? 'bg-yellow-dark text-black'
                : 'bg-yellow-light hover:bg-yellow-dark text-black'
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Grille de projets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-white">
        {currentProjects.map((project) => (
          <div
            key={project.id}
            className="bg-black-light rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
          >
            <div className="relative h-48">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="">{project.description}</p>
              <span className="inline-block mt-2 px-3 py-1 bg-yellow-dark rounded-full text-sm">
                {project.type}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-4 mt-8">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-full text-black ${
              currentPage === 1
                ? 'bg-gray-200 cursor-not-allowed'
                : 'bg-yellow-light hover:bg-yellow-dark'
            }`}
          >
            Précédent
          </button>
          
          <div className="flex space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
              <button
                key={number}
                onClick={() => paginate(number)}
                className={`w-8 h-8 rounded-full ${
                  currentPage === number
                    ? 'bg-yellow-dark text-black'
                    : 'bg-yellow-light hover:bg-yellow-dark text-black'
                }`}
              >
                {number}
              </button>
            ))}
          </div>

          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-full ${
              currentPage === totalPages
                ? 'bg-gray-200 cursor-not-allowed'
                : 'bg-yellow-light hover:bg-yellow-dark text-black'
            }`}
          >
            Suivant
          </button>
        </div>
      )}
    </div>
  );
}
