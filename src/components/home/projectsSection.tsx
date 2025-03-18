"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useThemeContext } from "@/app/providers";
import { Project, ProjectType } from "@/lib/types";
import { projects } from "@/lib/projects";
import FilterBar from "@/components/realisations/FilterBar";

export default function Projects() {
  const [selectedType, setSelectedType] = useState<ProjectType>("tous");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;
  const { mounted } = useThemeContext();

  useEffect(() => {
    if (selectedType === "tous") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.type === selectedType)
      );
    }
    setCurrentPage(1); // Réinitialiser la page lors du changement de filtre
  }, [selectedType]);

  // Calcul des indices pour la pagination
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  // Fonction pour changer de page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (!mounted) {
    return (
      <div className="flex flex-col space-y-8">
        <div className="text-center space-y-4">
          <div className="h-6 w-36 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="h-12 w-full max-w-md bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="h-20 w-full max-w-2xl bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col space-y-8">
      <div className="text-center space-y-4">
        <span className="dark:text-yellow-dark light:text-blue-dark font-medium">
          Nos réalisations
        </span>
        <h2 className="text-3xl md:text-4xl font-bold">
          Découvrez nos derniers projets
        </h2>
        <p className="dark:text-gray-300 light:text-gray-600 max-w-2xl mx-auto">
          Des solutions sur mesure qui répondent aux besoins spécifiques de nos
          clients.
        </p>
      </div>

      {/* Filtres */}
      <FilterBar
        activeFilter={selectedType}
        setActiveFilter={setSelectedType}
      />

      {/* Grille de projets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProjects.map((project) => (
          <div
            key={project.id}
            className="dark:bg-black-light light:bg-gray-100 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 flex flex-col"
          >
            <div className="relative h-48">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="dark:text-gray-300 light:text-gray-600 mb-4">
                {project.description}
              </p>
              <div className="mt-auto flex justify-between items-center">
                <span className="inline-block px-3 py-1 dark:bg-yellow-dark light:bg-blue-dark dark:text-black light:text-white rounded-full text-sm">
                  {project.type === "site-internet"
                    ? "Site Internet"
                    : project.type === "application-web"
                    ? "Application Web"
                    : project.type === "application-mobile"
                    ? "Application Mobile"
                    : "Marketing"}
                </span>
                {project.link && (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dark:text-gray-300 light:text-gray-600 dark:hover:text-yellow-dark light:hover:text-blue-dark flex items-center transition-colors group"
                  >
                    <span className="border-b border-transparent dark:group-hover:border-yellow-dark light:group-hover:border-blue-dark">
                      Voir le projet
                    </span>
                    <svg
                      className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-4 mt-6">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-full ${
              currentPage === 1
                ? "bg-gray-200 cursor-not-allowed text-gray-500"
                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
            }`}
          >
            Précédent
          </button>

          <div className="flex space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (number) => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`w-8 h-8 rounded-full ${
                    currentPage === number
                      ? "dark:bg-yellow-dark light:bg-blue-dark dark:text-black light:text-white"
                      : "dark:bg-gray-100 light:bg-gray-200 text-gray-700"
                  }`}
                >
                  {number}
                </button>
              )
            )}
          </div>

          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-full ${
              currentPage === totalPages
                ? "bg-gray-200 cursor-not-allowed text-gray-500"
                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
            }`}
          >
            Suivant
          </button>
        </div>
      )}
    </div>
  );
}
