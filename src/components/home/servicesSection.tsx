import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <div className="flex flex-col space-y-8 py-12">
      <div className="text-center space-y-4">
        <span className="text-yellow-dark">Nos services</span>
        <h2 className="text-3xl font-bold">
          Nous concevons, déveleppons et propulsons vos idées
        </h2>
      </div>
      <div className="bg-black-light p-4 rounded-md space-y-2">
        <Image
          width={200}
          height={200}
          src={"./images/SVG/b_devweb.svg"}
          alt="Développement web"
        />
        <h3 className="text-lg font-bold">Développement web</h3>
        <p>
          Nous vous accompagnons à chaque étape de votre projet, de la
          conception à la réalisation, et assurons un support continu pour
          garantir votre satisfaction.
        </p>
        <Link href="/">
          <button className="p-2 bg-yellow-dark rounded-md text-black hover:bg-yellow-light cursor-pointer">
            En savoir plus
          </button>
        </Link>
      </div>
      <div className="bg-black-light p-4 rounded-md space-y-2">
        <Image
          width={200}
          height={200}
          src={"./images/SVG/b_devweb.svg"}
          alt="Développement web"
        />
        <h3 className="text-lg font-bold">Développement mobile</h3>
        <p>
          Nous vous accompagnons à chaque étape de votre projet, de la
          conception à la réalisation, et assurons un support continu pour
          garantir votre satisfaction.
        </p>
        <Link href="/">
          <button className="p-2 bg-yellow-dark rounded-md text-black hover:bg-yellow-light cursor-pointer">
            En savoir plus
          </button>
        </Link>
      </div>
      <div className="bg-black-light p-4 rounded-md space-y-2">
        <Image
          width={200}
          height={200}
          src={"./images/SVG/b_devweb.svg"}
          alt="Développement web"
        />
        <h3 className="text-lg font-bold">Marketing digital</h3>
        <p>
          Nous vous accompagnons à chaque étape de votre projet, de la
          conception à la réalisation, et assurons un support continu pour
          garantir votre satisfaction.
        </p>
        <Link href="/">
          <button className="p-2 bg-yellow-dark rounded-md text-black hover:bg-yellow-light cursor-pointer">
            En savoir plus
          </button>
        </Link>
      </div>
    </div>
  );
}
