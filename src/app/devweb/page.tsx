import HeroSection from '@/components/devweb/HeroSection';
import ExpertiseCMS from '@/components/devweb/ExpertiseCMS';
import DevSurMesure from '@/components/devweb/DevSurMesure';
import Methodologie from '@/components/devweb/Methodologie';
import TypesProjets from '@/components/devweb/TypesProjets';
import CTASection from '@/components/devweb/CTASection';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "WebSmith - Développement de sites web sur mesure",
    description: "Développement de sites web sur mesure, CMS, CRM, SaaS, e-commerce, applications mobiles, etc.",
}


export default function DevWeb(){
    return (
        <>
        <main className="container mx-auto px-4 sm:px-6 lg:px-8">
            <HeroSection />
            <ExpertiseCMS />
            <DevSurMesure />
            <Methodologie />
            <TypesProjets />
            <CTASection />
        </main>
        </>
    )
}