import React from 'react';

interface CMSCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

function CMSCard({ title, description, icon }: CMSCardProps) {
    return (
        <div className="bg-white dark:bg-black-light-2 p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
                {icon}
                <h3 className="text-xl font-semibold">{title}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </div>
    );
}

export default function ExpertiseCMS() {
    const cmsItems = [
        {
            title: "WordPress",
            description: "Création de sites vitrines professionnels, boutiques e-commerce avec WooCommerce et blogs optimisés pour le référencement et la performance.",
            icon: (
                <svg className="w-8 h-8 text-blue-500 dark:text-yellow-dark mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 12c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9 9-4.03 9-9zm-9 7c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"></path>
                    <path d="M12 8v4l3 3 1.5-1.5-2.5-2.5V8z"></path>
                </svg>
            )
        },
        {
            title: "Shopify",
            description: "Développement de solutions e-commerce personnalisées avec une expérience d&apos;achat fluide et des fonctionnalités marketing intégrées.",
            icon: (
                <svg className="w-8 h-8 text-blue-500 dark:text-yellow-dark mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
            )
        },
        {
            title: "PrestaShop",
            description: "Conception de boutiques en ligne performantes avec une gestion avancée des catalogues produits et des processus de commande optimisés.",
            icon: (
                <svg className="w-8 h-8 text-blue-500 dark:text-yellow-dark mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path>
                </svg>
            )
        }
    ];

    return (
        <section className="py-16 bg-gray-50 dark:bg-black-light">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center">Expertise CMS</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {cmsItems.map((item, index) => (
                        <CMSCard 
                            key={index}
                            title={item.title}
                            description={item.description}
                            icon={item.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}