"use client";

import Image from "next/image";
import { useThemeContext } from "@/app/providers";
interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-2">{question}</h3>
      <p className="text-gray-600 dark:text-gray-300">{answer}</p>
    </div>
  );
}

export default function FAQSection() {
  const { isDark, mounted } = useThemeContext();
  const faqItems = [
    {
      question: "Quel est votre délai de réponse ?",
      answer:
        "Nous nous engageons à répondre à toutes les demandes dans un délai de 24 à 48 heures ouvrées.",
    },
    {
      question: "Comment se déroule la première consultation ?",
      answer:
        "Après votre prise de contact, nous organisons un premier appel ou une visioconférence pour discuter de votre projet en détail, comprendre vos besoins et vous proposer des solutions adaptées.",
    },
    {
      question: "Proposez-vous un devis gratuit ?",
      answer:
        "Oui, nous proposons un devis détaillé et gratuit après notre première consultation, une fois que nous avons bien compris les spécificités de votre projet.",
    },
    {
      question: "Quels types de projets acceptez-vous ?",
      answer:
        "Nous travaillons sur une variété de projets web et mobiles, des sites vitrines aux applications complexes, en passant par les e-commerces et les solutions SaaS. N&apos;hésitez pas à nous contacter même si votre projet sort des sentiers battus !",
    },
  ];
  

  if (!mounted) return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-10 h-10 bg-blue-light dark:bg-black-light-2 rounded-full"></div>
    </div>
  )

  return (
    <section className="py-16 bg-gray-50 dark:bg-black-light rounded-lg mb-16">
      <div className="grid md:grid-cols-2 gap-8 px-12">
        <div className="flex items-center justify-center">
          <Image
            src={isDark ? "/images/SVG/contact/b_faq.svg" : "/images/SVG/contact/l_faq.svg"}
            alt="FAQ"
            width={400}
            height={100}
          />
        </div>
        <div className="space-y-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Questions fréquentes
          </h2>
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
