"use client";

import { useThemeContext } from "@/app/providers";
import { Project } from "@/lib/types";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { isDark, mounted } = useThemeContext();

  if (!mounted) {
    return <div className="h-80 bg-gray-200 dark:bg-gray-800 rounded-xl animate-pulse"></div>;
  }

  return (
    <div className="group bg-white dark:bg-black-light-2 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            {project.technologies && (
              <div className="flex flex-wrap gap-2 mb-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className={`text-xs px-2 py-1 rounded-full ${
                      isDark
                        ? "bg-yellow-dark/80 text-black"
                        : "bg-blue-dark/80 text-white"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
            {project.link && (
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1 text-sm px-3 py-1 rounded-lg ${
                  isDark
                    ? "bg-yellow-dark text-black hover:bg-yellow-light"
                    : "bg-blue-dark text-white hover:bg-blue-light hover:text-black"
                }`}
              >
                Voir le projet
                <ExternalLink size={14} />
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <span
            className={`text-xs p-2 text-center rounded-full ${
              isDark
                ? "bg-yellow-dark/20 text-yellow-dark"
                : "bg-blue-dark/20 text-blue-dark"
            }`}
          >
            {project.type === "site-internet"
              ? "Site Internet"
              : project.type === "application-web"
              ? "Application Web"
              : project.type === "application-mobile"
              ? "Application Mobile"
              : "Marketing"}
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
          {project.description}
        </p>
      </div>
    </div>
  );
} 