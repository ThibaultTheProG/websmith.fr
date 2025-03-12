interface TechCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

function TechCard({ title, description, icon }: TechCardProps) {
    return (
        <div className="bg-gray-50 dark:bg-black-light-2 p-8 rounded-lg">
            <div className="flex items-center mb-4">
                {icon}
                <h3 className="text-xl font-semibold">{title}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </div>
    );
}

export default function DevSurMesure() {
    const techItems = [
        {
            title: "React",
            description: "Développement d&apos;applications web dynamiques et interactives avec une architecture modulaire et des performances optimales.",
            icon: (
                <svg className="w-8 h-8 text-blue-500 dark:text-yellow-dark mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 1.5l-8 4v5c0 5.23 3.34 10.12 8 11.5 4.66-1.38 8-6.27 8-11.5v-5l-8-4zm0 10.5h6c0 3.96-2.5 7.5-6 8.83-3.5-1.33-6-4.87-6-8.83h6z"></path>
                </svg>
            )
        },
        {
            title: "Next.js",
            description: "Création de sites web performants et SEO-friendly avec rendu côté serveur et génération statique pour une expérience utilisateur optimale.",
            icon: (
                <svg className="w-8 h-8 text-blue-500 dark:text-yellow-dark mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path>
                </svg>
            )
        },
        {
            title: "TypeScript",
            description: "Développement de code robuste et maintenable avec un typage fort pour réduire les erreurs et faciliter la maintenance à long terme.",
            icon: (
                <svg className="w-8 h-8 text-blue-500 dark:text-yellow-dark mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3h18v18H3V3zm16.5 1.5h-15v15h15v-15z"></path>
                    <path d="M10.5 9h3v6h-3z"></path>
                </svg>
            )
        }
    ];

    return (
        <section className="py-16">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center">Développement sur mesure</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {techItems.map((item, index) => (
                        <TechCard 
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