"use client";

import { useState } from "react";
import { ProjectType } from "@/lib/types";
import FilterBar from "./FilterBar";
import ProjectCard from "./ProjectCard";
import { useThemeContext } from "@/app/providers";
import { projects } from "@/lib/projects";

export default function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState<ProjectType>("tous");
  const { mounted } = useThemeContext();

  if (!mounted) {
    return (
      <div className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-pulse">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-80 bg-gray-200 dark:bg-gray-800 rounded-xl"></div>
          ))}
        </div>
      </div>
    );
  }

  const filteredProjects =
    activeFilter === "tous"
      ? projects
      : projects.filter((project) => project.type === activeFilter);

  return (
    <section className="pb-16 md:pb-24">
      <FilterBar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      
      {filteredProjects.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-xl text-gray-500 dark:text-gray-400">
            Aucun projet ne correspond à ce filtre pour le moment.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </section>
  );
} 