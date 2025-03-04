import Image from "next/image";
import Link from "next/link";
import Button from "../ui/button";
export default function Hero() {
  return (
    <div className="flex flex-col items-center space-y-4">
      <span className="uppercase text-lg font-bold text-center">Artisan du web</span>
      <h1 className="text-3xl font-bold text-center text-yellow-dark">
        Agence de développement et de marketing
      </h1>
      <p className="text-center">
        Nous concevons les meilleurs outils et stratégies pour développer votre
        activité.
      </p>
      <div className="flex flex-row space-x-4">
        <Link href={"/"}>
        <Button>Nous contacter</Button>
        </Link>
        <Link href={"/"}>
        <Button>Nos services</Button>
        </Link>
      </div>
      <Image
        src={"./images/svg/b_hero.svg"}
        width={200}
        height={200}
        alt="Image de la section hero"
      />
    </div>
  );
}
