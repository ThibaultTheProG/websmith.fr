export default function MentionsLegales() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Mentions légales</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Informations légales</h2>
        <p className="mb-4">
          Ce site est édité par WebSmith, entreprise individuelle.
        </p>
        <ul className="list-none space-y-2 mb-4">
          <li>
            <strong>Siège social :</strong> 4 allée de la Grande Croix, 85300
            Sallertaine
          </li>
          <li>
            <strong>SIRET :</strong> 852 774 553 00030
          </li>
          <li>
            <strong>Responsable de la publication :</strong> Thibault Tuffin
          </li>
          <li>
            <strong>Email :</strong> contact@websmith.fr
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Hébergement</h2>
        <p className="mb-4">Ce site est hébergé par :</p>
        <p className="mb-4">
          Infomaniak
          <br />
          Rue Eugène-Marziano 25, 1227 Genève, Suisse
          <br />
          +41 22 820 35 40
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          3. Propriété intellectuelle
        </h2>
        <p className="mb-4">
          L&apos;ensemble de ce site relève de la législation française et
          internationale sur le droit d&apos;auteur et la propriété
          intellectuelle. Tous les droits de reproduction sont réservés, y
          compris pour les documents téléchargeables et les représentations
          iconographiques et photographiques.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Liens hypertextes</h2>
        <p className="mb-4">
          Le site peut contenir des liens hypertextes vers d&apos;autres sites
          présents sur le réseau Internet. Les liens vers ces autres ressources
          vous font quitter le site. Ces sites peuvent contenir des données non
          conformes à nos attentes. Notre responsabilité ne saurait être engagée
          du fait des informations, opinions et recommandations formulées par
          des tiers.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          5. Protection des données personnelles
        </h2>
        <p className="mb-4">
          Conformément à la loi Informatique et Libertés du 6 janvier 1978
          modifiée, et au Règlement Général sur la Protection des Données
          (RGPD), vous disposez d&apos;un droit d&apos;accès, de rectification
          et de suppression des données vous concernant. Pour l&apos;exercer,
          veuillez nous contacter par email à contact@websmith.fr.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">6. Droit applicable</h2>
        <p className="mb-4">
          Les présentes mentions légales sont soumises au droit français. En cas
          de litige, les tribunaux français seront seuls compétents.
        </p>
      </section>
    </div>
  );
}
