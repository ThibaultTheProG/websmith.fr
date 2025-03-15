import HeroSection from '@/components/devmobile/HeroSection';
import ExpertiseFrameworks from '@/components/devmobile/ExpertiseFrameworks';
import DevSurMesure from '@/components/devmobile/DevSurMesure';
import Methodologie from '@/components/devmobile/Methodologie';
import TypesProjets from '@/components/devmobile/TypesProjets';
import CTASection from '@/components/devmobile/CTASection';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "WebSmith - Développement d'applications mobiles sur mesure",
    description: "Développement d'applications mobiles sur mesure avec React Native et Flutter pour iOS et Android. Applications performantes, intuitives et évolutives.",
}

export default function DevMobile(){
    return (
        <>
        <main className="container mx-auto px-4 sm:px-6 lg:px-8">
            <HeroSection />
            <ExpertiseFrameworks />
            <DevSurMesure />
            <Methodologie />
            <TypesProjets />
            <CTASection />
        </main>
        </>
    )
}