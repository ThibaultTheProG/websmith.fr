import Form from '@/components/form';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "WebSmith - Contactez-nous",
    description: "Contactez notre équipe pour discuter de votre projet de développement web, mobile ou marketing.",
}

export default function Contact() {
    return (
        <main className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <section className="py-16 md:py-24">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Contactez-nous</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                        Vous avez un projet en tête ? Nous sommes là pour vous aider à le concrétiser.
                        Partagez vos idées avec nous et nous vous répondrons dans les plus brefs délais.
                    </p>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-8 md:py-12">
                <div className="max-w-6xl mx-auto bg-white dark:bg-black-light-2 rounded-lg shadow-lg p-8 md:p-12">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Parlez-nous de votre projet</h2>
                    <Form />
                </div>
            </section>

            {/* Contact Info Section */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 dark:bg-yellow-dark rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-blue-600 dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Téléphone</h3>
                            <p className="text-gray-600 dark:text-gray-300">+33 6 12 34 56 78</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 dark:bg-yellow-dark rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-blue-600 dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Email</h3>
                            <p className="text-gray-600 dark:text-gray-300">contact@websmith.fr</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 dark:bg-yellow-dark rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-blue-600 dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Adresse</h3>
                            <p className="text-gray-600 dark:text-gray-300">Paris, France</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-gray-50 dark:bg-black-light rounded-lg mb-16">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">Questions fréquentes</h2>
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Quel est votre délai de réponse ?</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Nous nous engageons à répondre à toutes les demandes dans un délai de 24 à 48 heures ouvrées.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Comment se déroule la première consultation ?</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Après votre prise de contact, nous organisons un premier appel ou une visioconférence pour discuter 
                                de votre projet en détail, comprendre vos besoins et vous proposer des solutions adaptées.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Proposez-vous un devis gratuit ?</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Oui, nous proposons un devis détaillé et gratuit après notre première consultation, 
                                une fois que nous avons bien compris les spécificités de votre projet.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Quels types de projets acceptez-vous ?</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Nous travaillons sur une variété de projets web et mobiles, des sites vitrines aux applications 
                                complexes, en passant par les e-commerces et les solutions SaaS. N&apos;hésitez pas à nous 
                                contacter même si votre projet sort des sentiers battus !
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
