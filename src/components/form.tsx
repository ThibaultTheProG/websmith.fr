"use client";

import { useState } from "react";
import { FormData } from "@/lib/types";

export default function Form() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    projectDescription: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

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

    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = "La description du projet est requise";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Ici, vous pourrez ajouter la logique d'envoi du formulaire
      console.log("Formulaire soumis:", formData);
      // Réinitialiser le formulaire après soumission
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        projectDescription: "",
      });
      setErrors({});
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-6 text-white">
      <div className="space-y-2">
        <label htmlFor="fullName" className="block text-sm font-mediu">
          Prénom & Nom
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-dark focus:border-transparent ${
            errors.fullName ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Jean Dupont"
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm">{errors.fullName}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-dark focus:border-transparent ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="jean.dupont@example.com"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="block text-sm font-medium">
          Téléphone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-dark focus:border-transparent ${
            errors.phone ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="06 12 34 56 78"
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="projectDescription"
          className="block text-sm font-medium"
        >
          Décrivez votre projet
        </label>
        <textarea
          id="projectDescription"
          name="projectDescription"
          value={formData.projectDescription}
          onChange={handleChange}
          rows={5}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-dark focus:border-transparent ${
            errors.projectDescription ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Décrivez votre projet en quelques lignes..."
        />
        {errors.projectDescription && (
          <p className="text-red-500 text-sm">{errors.projectDescription}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-yellow-dark text-black py-3 px-6 rounded-lg hover:bg-yellow-light transition-colors duration-300 font-medium"
      >
        Envoyer
      </button>
    </form>
  );
}
