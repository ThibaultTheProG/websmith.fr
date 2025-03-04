import Image from "next/image";

export default function Why() {
  return (
    <div className="flex flex-col space-y-8">
      <div className="text-center space-y-4">
        <span className="text-yellow-dark font-medium">Pourquoi nous choisir</span>
        <h2 className="text-3xl md:text-4xl font-bold">
          Pourquoi faire appel à nous ?
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Nous combinons expertise technique et vision stratégique pour vous offrir des solutions digitales performantes.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-black-light p-6 rounded-lg space-y-4 flex flex-col">
          <div className="relative h-40">
            <Image
              src="/images/SVG/b_personnalisation.svg"
              alt="Personnalisation"
              fill
              style={{ objectFit: "contain" }}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <h3 className="text-xl font-bold">Personnalisation</h3>
          <p className="text-gray-300">
            Chaque projet est unique, et nous nous efforçons de créer des
            solutions sur mesure qui correspondent parfaitement à vos besoins.
          </p>
        </div>

        <div className="bg-black-light p-6 rounded-lg space-y-4 flex flex-col">
          <div className="relative h-40">
            <Image
              src="/images/SVG/b_support.svg"
              alt="Support"
              fill
              style={{ objectFit: "contain" }}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <h3 className="text-xl font-bold">Support</h3>
          <p className="text-gray-300">
            Nous vous accompagnons à chaque étape de votre projet, de la
            conception à la réalisation, et assurons un support continu pour
            garantir votre satisfaction.
          </p>
        </div>

        <div className="bg-black-light p-6 rounded-lg space-y-4 flex flex-col">
          <div className="relative h-40">
            <Image
              src="/images/SVG/b_expertise.svg"
              alt="Expertise"
              fill
              style={{ objectFit: "contain" }}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <h3 className="text-xl font-bold">Expertise</h3>
          <p className="text-gray-300">
            Avec des années d&apos;expérience dans le marketing digital et
            le développement web, nous maîtrisons les techniques les plus
            avancées pour garantir votre succès en ligne.
          </p>
        </div>
      </div>
    </div>
  );
}
