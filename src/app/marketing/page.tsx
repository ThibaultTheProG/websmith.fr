import HeroSection from '@/components/marketing/HeroSection';
import ExpertiseServices from '@/components/marketing/ExpertiseServices';
import DataAnalytics from '@/components/marketing/DataAnalytics';
import CampaignManagement from '@/components/marketing/CampaignManagement';
import CTASection from '@/components/marketing/CTASection';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "WebSmith - Solutions de Marketing Ops et Automatisation",
    description: "Optimisez vos opérations marketing grâce à nos solutions sur mesure : scraping de données, marketing automation, analyse de données, CRM et gestion de campagnes.",
}

export default function Marketing(){
    return (
        <>
        <main className="container mx-auto px-4 sm:px-6 lg:px-8">
            <HeroSection />
            <ExpertiseServices />
            <DataAnalytics />
            <CampaignManagement />
            <CTASection />
        </main>
        </>
    )
}