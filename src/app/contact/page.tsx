import { Metadata } from 'next';
import HeroSection from '@/components/contact/HeroSection';
import FormSection from '@/components/contact/FormSection';
import ContactInfoSection from '@/components/contact/ContactInfoSection';
import FAQSection from '@/components/contact/FAQSection';

export const metadata: Metadata = {
    title: "WebSmith - Contactez-nous",
    description: "Contactez notre équipe pour discuter de votre projet de développement web, mobile ou marketing.",
}

export default function Contact() {
    return (
        <main className="container mx-auto px-4 sm:px-6 lg:px-8">
            <HeroSection />
            <FormSection />
            <ContactInfoSection />
            <FAQSection />
        </main>
    );
}
