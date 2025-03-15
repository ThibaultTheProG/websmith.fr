import Hero from "@/components/home/heroSection";
import Why from "@/components/home/whySection";
import Services from "@/components/home/servicesSection";
import Projects from "@/components/home/projectsSection";
import Reviews from "@/components/home/reviewsSection";
import FormSection from "@/components/home/formSection";

export default function Home() {


  return (
    <>
      <main className="container mx-auto sm:px-2 lg:px-4">
        <section className="py-12 md:py-16">
          <Hero />
        </section>
        
        <section className="py-12 md:py-16">
          <Why />
        </section>
        
        <section className="py-12 md:py-16">
          <Services />
        </section>
        
        <section className="py-12 md:py-16">
          <Projects />
        </section>
        
        <section className="py-12 md:py-16">
          <Reviews />
        </section>
        
        <section className="py-12 md:py-16">
          <FormSection />
        </section>
      </main>
    </>
  );
}
