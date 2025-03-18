"use client";

import { useState } from "react";
import { FormData } from "@/lib/types";
import { useThemeContext } from "@/app/providers";
import { Send, User, Mail, Phone, FileText, CheckCircle, Tag } from "lucide-react";
import config from "@/lib/config";
import { sendGTMEvent } from "@next/third-parties/google";

export default function Form() {
  const { mounted, isDark } = useThemeContext();
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    subject: "Développement web", // Valeur par défaut
    projectDescription: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Le nom est requis";
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "L'email n'est pas valide";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Le téléphone est requis";
    } else if (
      !/^(\+33|0)[1-9](\d{2}){4}$/.test(formData.phone.replace(/\s/g, ""))
    ) {
      newErrors.phone = "Le numéro de téléphone n'est pas valide";
    }

    if (!formData.subject) {
      newErrors.subject = "L'objet de la demande est requis";
    }

    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = "La description du projet est requise";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        // Appel à la fonction Firebase
        const response = await fetch(`${config.firebaseFunctionsBaseUrl}${config.endpoints.contact}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();
        
        if (!response.ok) {
          throw new Error(data.message || 'Une erreur est survenue lors de l\'envoi du formulaire');
        } else {
          sendGTMEvent({event: "contactFormSubmit", value: formData});
        }
        
        // Afficher le message de succès
        setIsSubmitted(true);
        setIsSubmitting(false);
        
        // Réinitialiser le formulaire après quelques secondes
        setTimeout(() => {
          setFormData({
            fullName: "",
            email: "",
            phone: "",
            subject: "Développement web",
            projectDescription: "",
          });
          setErrors({});
          setIsSubmitted(false);
        }, 3000);
      } catch (error) {
        console.error('Erreur lors de l\'envoi du formulaire:', error);
        alert('Une erreur est survenue lors de l\'envoi du formulaire. Veuillez réessayer plus tard.');
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Effacer l'erreur du champ modifié
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  if (!mounted) {
    return (
      <div className="w-full max-w-4xl mx-auto animate-pulse">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="space-y-2">
              <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-12 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  // Message de succès après soumission
  if (isSubmitted) {
    return (
      <div className="w-full max-w-4xl mx-auto text-center py-8">
        <div className="flex flex-col items-center space-y-6">
          <div className={`rounded-full p-4 ${isDark ? 'bg-yellow-dark' : 'bg-blue-dark'}`}>
            <CheckCircle size={56} className={isDark ? 'text-black' : 'text-white'} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Message envoyé !</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
          </p>
        </div>
      </div>
    );
  }
  
  return (
    <form 
      onSubmit={handleSubmit} 
      className="w-full max-w-4xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        <div className="space-y-2">
          <label htmlFor="fullName" className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-200">
            <User size={18} className="mr-2" />
            Prénom & Nom
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg bg-transparent focus:ring-2 focus:outline-none transition-colors duration-200 ${
              isDark 
                ? `border-gray-600 focus:ring-yellow-dark ${errors.fullName ? "border-red-500" : "focus:border-yellow-dark"}` 
                : `border-gray-300 focus:ring-blue-dark ${errors.fullName ? "border-red-500" : "focus:border-blue-dark"}`
            }`}
            placeholder="Jean Dupont"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm flex items-center">
              <span className="ml-1">{errors.fullName}</span>
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-200">
            <Mail size={18} className="mr-2" />
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg bg-transparent focus:ring-2 focus:outline-none transition-colors duration-200 ${
              isDark 
                ? `border-gray-600 focus:ring-yellow-dark ${errors.email ? "border-red-500" : "focus:border-yellow-dark"}` 
                : `border-gray-300 focus:ring-blue-dark ${errors.email ? "border-red-500" : "focus:border-blue-dark"}`
            }`}
            placeholder="jean.dupont@example.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm flex items-center">
              <span className="ml-1">{errors.email}</span>
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-200">
            <Phone size={18} className="mr-2" />
            Téléphone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg bg-transparent focus:ring-2 focus:outline-none transition-colors duration-200 ${
              isDark 
                ? `border-gray-600 focus:ring-yellow-dark ${errors.phone ? "border-red-500" : "focus:border-yellow-dark"}` 
                : `border-gray-300 focus:ring-blue-dark ${errors.phone ? "border-red-500" : "focus:border-blue-dark"}`
            }`}
            placeholder="06 12 34 56 78"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm flex items-center">
              <span className="ml-1">{errors.phone}</span>
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="subject" className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-200">
            <Tag size={18} className="mr-2" />
            Objet de la demande
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg bg-transparent focus:ring-2 focus:outline-none transition-colors duration-200 ${
              isDark 
                ? `border-gray-600 focus:ring-yellow-dark ${errors.subject ? "border-red-500" : "focus:border-yellow-dark"}` 
                : `border-gray-300 focus:ring-blue-dark ${errors.subject ? "border-red-500" : "focus:border-blue-dark"}`
            }`}
          >
            <option value="Développement web">Développement web</option>
            <option value="Développement mobile">Développement mobile</option>
            <option value="Marketing">Marketing</option>
            <option value="Autre">Autre</option>
          </select>
          {errors.subject && (
            <p className="text-red-500 text-sm flex items-center">
              <span className="ml-1">{errors.subject}</span>
            </p>
          )}
        </div>

        <div className="space-y-2 md:col-span-2">
          <label
            htmlFor="projectDescription"
            className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            <FileText size={18} className="mr-2" />
            Décrivez votre projet
          </label>
          <textarea
            id="projectDescription"
            name="projectDescription"
            value={formData.projectDescription}
            onChange={handleChange}
            rows={6}
            className={`w-full px-4 py-3 border rounded-lg bg-transparent focus:ring-2 focus:outline-none transition-colors duration-200 ${
              isDark 
                ? `border-gray-600 focus:ring-yellow-dark ${errors.projectDescription ? "border-red-500" : "focus:border-yellow-dark"}` 
                : `border-gray-300 focus:ring-blue-dark ${errors.projectDescription ? "border-red-500" : "focus:border-blue-dark"}`
            }`}
            placeholder="Décrivez votre projet en quelques lignes..."
          />
          {errors.projectDescription && (
            <p className="text-red-500 text-sm flex items-center">
              <span className="ml-1">{errors.projectDescription}</span>
            </p>
          )}
        </div>

        <div className="md:col-span-2 flex justify-center mt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`flex items-center justify-center px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 ${
              isDark
                ? "bg-yellow-dark text-black hover:bg-yellow-light"
                : "bg-blue-dark text-white hover:bg-blue-light hover:text-black"
            } ${isSubmitting ? "opacity-70 cursor-not-allowed" : "cursor-pointer"}`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Envoi en cours...
              </>
            ) : (
              <>
                Envoyer
                <Send size={20} className="ml-2" />
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
