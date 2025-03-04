import Image from "next/image";
import Link from "next/link";
import Button from "../ui/button";

export default function Hero() {
  return (
    <div className="flex flex-col items-center space-y-8 md:flex-row md:space-y-0 md:space-x-8">
      <div className="flex flex-col space-y-6 text-center md:text-left md:items-start md:basis-1/2">
        <span className="text-yellow-dark uppercase text-lg font-medium">
          Artisan du web
        </span>
        <h1 className="text-4xl md:text-5xl font-bold">
          Agence de développement et de marketing
        </h1>
        <p className="text-gray-300 text-lg max-w-xl">
          Nous concevons les meilleurs outils et stratégies pour développer
          votre activité.
        </p>
        <div className="flex flex-row space-x-4 pt-4">
          <Link href="/contact">
            <Button variant="primary" size="lg">Nous contacter</Button>
          </Link>
          <Link href="/services">
            <Button variant="outline" size="lg">Nos services</Button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:basis-1/2 items-center md:items-end mt-8 md:mt-0">
        <div className="relative w-full max-w-md h-64 md:h-96">
          <Image
            src="/images/SVG/b_hero.svg"
            alt="Illustration de développement web"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
      </div>
    </div>
  );
}
