"use client";

import Image from "next/image";
import { useThemeContext } from "@/app/providers";

interface ContactItemProps {
  title: string;
  content: string;
  icon: React.ReactNode;
}

function ContactItem({ title, content, icon }: ContactItemProps) {
  return (
    <div className="text-center">
      <div className="w-32 h-32 bg-blue-light dark:bg-black-light-2 rounded-full mx-auto mb-4 flex items-center justify-center">
        <div className="relative w-20 h-20">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{content}</p>
    </div>
  );
}

export default function ContactInfoSection() {
  const { isDark, mounted } = useThemeContext();
  
  const contactItems = [
    {
      title: "Téléphone",
      content: "+33 6 37 16 06 37",
      icon: (
        mounted ? (
          <Image
            src={isDark ? "/images/SVG/contact/b_phone.svg" : "/images/SVG/contact/l_phone.svg"}
            alt="Téléphone"
            fill
            className="object-contain p-1"
          />
        ) : (
          <div className="w-full h-full bg-blue-300 rounded-full"></div>
        )
      ),
    },
    {
      title: "Email",
      content: "contact@websmith.fr",
      icon: (
        mounted ? (
          <Image
            src={isDark ? "/images/SVG/contact/b_mail.svg" : "/images/SVG/contact/l_mail.svg"}
            alt="Email"
            fill
            className="object-contain p-1"
          />
        ) : (
          <div className="w-full h-full bg-blue-300 rounded-full"></div>
        )
      ),
    },
    {
      title: "Adresse",
      content: "Nantes, France",
      icon: (
        mounted ? (
          <Image
            src={isDark ? "/images/SVG/contact/b_localisation.svg" : "/images/SVG/contact/l_localisation.svg"}
            alt="Adresse"
            fill
            className="object-contain p-1"
          />
        ) : (
          <div className="w-full h-full bg-blue-300 rounded-full"></div>
        )
      ),
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {contactItems.map((item, index) => (
            <ContactItem
              key={index}
              title={item.title}
              content={item.content}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
