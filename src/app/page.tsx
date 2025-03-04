import Hero from "@/components/home/heroSection";
import Why from "@/components/home/whySection";
import Services from "@/components/home/servicesSection";
import Projects from "@/components/home/projectsSection";
import Reviews from "@/components/home/reviewsSection";
import FormSection from "@/components/home/formSection";
export default function Home() {
  return (
    <>
      <main className="p-8 space-y-4">
        <Hero />
        <Why />
        <Services />
        <Projects />
        <Reviews />
        <FormSection />
      </main>
    </>
  );
}
