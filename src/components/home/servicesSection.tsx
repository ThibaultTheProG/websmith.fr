import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <div className="flex flex-col space-y-8">
      <div className="text-center space-y-4">
        <span className="text-yellow-dark font-medium">Nos services</span>
        <h2 className="text-3xl md:text-4xl font-bold">
          Nous concevons, développons et propulsons vos idées
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Des solutions digitales complètes pour répondre à tous vos besoins en ligne.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-black-light p-6 rounded-lg flex flex-col space-y-4">
          <div className="relative h-40">
            <Image
              src="/images/SVG/b_devweb.svg"
              alt="Développement web"
              fill
              style={{ objectFit: "contain" }}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <h3 className="text-xl font-bold">Développement web</h3>
          <p className="text-gray-300">
            Création de sites web sur mesure, e-commerce, applications web et intranets. 
            Nous utilisons les technologies les plus récentes pour des performances optimales.
          </p>
          <Link href="/devweb" className="mt-auto">
            <button className="w-full p-2 bg-yellow-dark rounded-md text-black hover:bg-yellow-light transition-colors cursor-pointer">
              En savoir plus
            </button>
          </Link>
        </div>

        <div className="bg-black-light p-6 rounded-lg flex flex-col space-y-4">
          <div className="relative h-40">
            <Image
              src="/images/SVG/b_mobile.svg"
              alt="Développement mobile"
              fill
              style={{ objectFit: "contain" }}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <h3 className="text-xl font-bold">Développement mobile</h3>
          <p className="text-gray-300">
            Applications mobiles natives et hybrides pour iOS et Android.
            Une expérience utilisateur fluide sur tous les appareils.
          </p>
          <Link href="/devmobile" className="mt-auto">
            <button className="w-full p-2 bg-yellow-dark rounded-md text-black hover:bg-yellow-light transition-colors cursor-pointer">
              En savoir plus
            </button>
          </Link>
        </div>

        <div className="bg-black-light p-6 rounded-lg flex flex-col space-y-4">
          <div className="relative h-40">
            <Image
              src="/images/SVG/b_marketing.svg"
              alt="Marketing digital"
              fill
              style={{ objectFit: "contain" }}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <h3 className="text-xl font-bold">Marketing digital</h3>
          <p className="text-gray-300">
            Stratégies SEO, campagnes publicitaires, réseaux sociaux et analyse de données.
            Augmentez votre visibilité et convertissez plus de visiteurs.
          </p>
          <Link href="/marketing" className="mt-auto">
            <button className="w-full p-2 bg-yellow-dark rounded-md text-black hover:bg-yellow-light transition-colors cursor-pointer">
              En savoir plus
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
