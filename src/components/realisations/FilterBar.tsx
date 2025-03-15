"use client";

import React from "react";
import { useThemeContext } from "@/app/providers";
import { ProjectType } from "@/lib/types";
import { Code, Briefcase, Smartphone, BarChart, LayoutGrid } from "lucide-react";

interface FilterBarProps {
  activeFilter: ProjectType;
  setActiveFilter: (filter: ProjectType) => void;
}

export default function FilterBar({ activeFilter, setActiveFilter }: FilterBarProps) {
  const { isDark, mounted } = useThemeContext();

  if (!mounted) {
    return <div className="h-16"></div>;
  }

  const filters: { type: ProjectType; label: string; icon: React.ReactNode }[] = [
    {
      type: "tous",
      label: "Tous les projets",
      icon: <LayoutGrid size={20} />,
    },
    {
      type: "site-internet",
      label: "Sites Internet",
      icon: <Code size={20} />,
    },
    {
      type: "application-web",
      label: "Applications Web",
      icon: <Briefcase size={20} />,
    },
    {
      type: "application-mobile",
      label: "Applications Mobile",
      icon: <Smartphone size={20} />,
    },
    {
      type: "marketing",
      label: "Marketing",
      icon: <BarChart size={20} />,
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {filters.map((filter) => (
        <button
          key={filter.type}
          onClick={() => setActiveFilter(filter.type)}
          className={`cursor-pointer flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
            activeFilter === filter.type
              ? isDark
                ? "bg-yellow-dark text-black"
                : "bg-blue-dark text-white"
              : isDark
              ? "bg-black-light-2 text-white hover:bg-yellow-dark hover:text-black"
              : "bg-gray-100 text-gray-700 hover:bg-blue-dark hover:text-white"
          }`}
        >
          {filter.icon}
          <span>{filter.label}</span>
        </button>
      ))}
    </div>
  );
} 