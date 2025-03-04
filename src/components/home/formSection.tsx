"use client";

import Form from "@/components/form";
import { useThemeContext } from "@/app/providers";

export default function FormSection() {
  const { mounted, isDark } = useThemeContext();

  if (!mounted) {
    return (
      <div className="flex flex-col space-y-8">
        <div className="text-center space-y-4">
          <div className="h-6 w-36 bg-gray-200 dark:bg-gray-700 rounded mx-auto"></div>
          <div className="h-12 w-full max-w-md bg-gray-200 dark:bg-gray-700 rounded mx-auto"></div>
          <div className="h-20 w-full max-w-2xl bg-gray-200 dark:bg-gray-700 rounded mx-auto"></div>
        </div>
      </div>
    )
  }
  
  return (
    <div className="flex flex-col space-y-12 w-full mx-auto">
      <div className="text-center space-y-4">
        <span className="light:text-blue-dark dark:text-yellow-dark font-medium">Contactez-nous</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Discutons de votre projet
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Parlez-nous de vos besoins et nous vous proposerons une solution adaptée.
        </p>
      </div>

      <div className={`w-full ${isDark ? 'bg-black-light/50' : 'bg-gray-50'} py-12 px-4 sm:px-6 rounded-2xl`}>
        <Form />
      </div>
    </div>
  );
}