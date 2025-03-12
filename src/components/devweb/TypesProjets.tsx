interface ProjectTypeProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

function ProjectType({ title, description, icon }: ProjectTypeProps) {
    return (
        <div className="flex">
            <div className="mr-4">
                {icon}
            </div>
            <div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{description}</p>
            </div>
        </div>
    );
}

export default function TypesProjets() {
    const projectTypes = [
        {
            title: "CRM",
            description: "Développement de solutions de gestion de relation client personnalisées pour optimiser vos processus commerciaux et améliorer le suivi client.",
            icon: (
                <svg className="w-12 h-12 text-blue-500 dark:text-yellow-dark" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path>
                </svg>
            )
        },
        {
            title: "SaaS métier",
            description: "Conception de solutions logicielles en ligne adaptées à des secteurs spécifiques avec des fonctionnalités dédiées à votre domaine d&apos;activité.",
            icon: (
                <svg className="w-12 h-12 text-blue-500 dark:text-yellow-dark" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path>
                </svg>
            )
        },
        {
            title: "SaaS générique",
            description: "Développement de plateformes cloud évolutives offrant des services accessibles en ligne avec une architecture scalable et sécurisée.",
            icon: (
                <svg className="w-12 h-12 text-blue-500 dark:text-yellow-dark" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z"></path>
                </svg>
            )
        },
        {
            title: "Sites internet",
            description: "Création de sites vitrines, e-commerce et portails web avec une expérience utilisateur optimisée et un design adapté à votre image de marque.",
            icon: (
                <svg className="w-12 h-12 text-blue-500 dark:text-yellow-dark" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path>
                </svg>
            )
        }
    ];

    return (
        <section className="py-16">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center">Types de projets</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {projectTypes.map((project, index) => (
                        <ProjectType 
                            key={index}
                            title={project.title}
                            description={project.description}
                            icon={project.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
} 