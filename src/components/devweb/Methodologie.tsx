interface StepCardProps {
    number: number;
    title: string;
    description: string;
}

function StepCard({ number, title, description }: StepCardProps) {
    return (
        <div className="bg-white dark:bg-black-light-2 p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-blue-100 dark:bg-yellow-dark rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 dark:text-black font-bold text-xl">{number}</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </div>
    );
}

export default function Methodologie() {
    const steps = [
        {
            number: 1,
            title: "Cadrage du projet",
            description: "Définition précise des besoins, élaboration des spécifications fonctionnelles et techniques, et établissement d'une feuille de route claire."
        },
        {
            number: 2,
            title: "Maquettes",
            description: "Création de wireframes et design UI/UX pour visualiser l'interface avant le développement et valider l'expérience utilisateur."
        },
        {
            number: 3,
            title: "Développement itératif",
            description: "Mise en œuvre progressive avec des livraisons régulières permettant d'ajuster le projet en fonction des retours et des priorités."
        },
        {
            number: 4,
            title: "Support continu",
            description: "Maintenance technique, évolutions fonctionnelles et accompagnement pour garantir la pérennité et l'évolution de votre solution."
        }
    ];

    return (
        <section className="py-16 bg-gray-50 dark:bg-black-light">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center">Notre méthodologie</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, index) => (
                        <StepCard 
                            key={index}
                            number={step.number}
                            title={step.title}
                            description={step.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
} 