import Image from "next/image";

export default function Why() {
  return (
    <div className="flex flex-col space-y-4">
      <h2 className="text-3xl font-bold text-center">Pourquoi faire appel à nous ?</h2>
      <div className="space-y-4">
        <div className="bg-black-light p-4 rounded-md space-y-2">
          <Image
            src={"./images/SVG/b_personnalisation.svg"}
            width={75}
            height={200}
            alt="Personnalisation"
          />
          <h3 className="text-lg font-bold">Personnalisation</h3>
          <p>
            Chaque projet est unique, et nous nous efforçons de créer des
            solutions sur mesure qui correspondent parfaitement à vos besoins.
          </p>
        </div>
        <div className="bg-black-light p-4 rounded-md space-y-2">
          <Image
            src={"./images/SVG/b_support.svg"}
            width={75}
            height={200}
            alt="Support"
          />
          <h3 className="text-lg font-bold">Support</h3>
          <p>
            Nous vous accompagnons à chaque étape de votre projet, de la
            conception à la réalisation, et assurons un support continu pour
            garantir votre satisfaction.
          </p>
        </div>
        <div className="bg-black-light p-4 rounded-md space-y-2">
          <Image
            src={"./images/SVG/b_expertise.svg"}
            width={75}
            height={200}
            alt="Expertise"
          />
          <h3 className="text-lg font-bold">Expertise</h3>
          <p>
            Avec des années d’expérience dans le marketing digital et
            le développement web, nous maîtrisons les techniques les plus
            avancées pour garantir votre succès en ligne.
          </p>
        </div>
      </div>
    </div>
  );
}
