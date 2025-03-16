export default function PolitiqueConfidentialite() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Politique de confidentialité</h1>
            
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1. Collecte des informations</h2>
                <p className="mb-4">
                    Nous recueillons des informations lorsque vous utilisez notre site. Ces informations peuvent inclure :
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Votre adresse IP</li>
                    <li>Les données de navigation</li>
                    <li>Les informations de votre navigateur</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">2. Utilisation des informations</h2>
                <p className="mb-4">
                    Les informations que nous collectons sont utilisées pour :
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Améliorer la qualité de nos services</li>
                    <li>Personnaliser votre expérience utilisateur</li>
                    <li>Analyser l&apos;utilisation de notre site</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">3. Protection des informations</h2>
                <p className="mb-4">
                    Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles. 
                    Nous utilisons un cryptage à la pointe de la technologie pour protéger les informations sensibles transmises en ligne.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4. Cookies</h2>
                <p className="mb-4">
                    Notre site utilise des cookies pour améliorer votre expérience de navigation. Les cookies sont de petits fichiers 
                    qu&apos;un site ou son prestataire de services transfère sur le disque dur de votre ordinateur à travers votre 
                    navigateur Web (si vous l&apos;autorisez).
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">5. Divulgation à des tiers</h2>
                <p className="mb-4">
                    Nous ne vendons, n&apos;échangeons et ne transférons pas vos informations personnelles identifiables à des tiers. 
                    Cela ne comprend pas les tierces parties de confiance qui nous aident à exploiter notre site Web ou à mener nos 
                    affaires, tant que ces parties conviennent de garder ces informations confidentielles.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4">6. Consentement</h2>
                <p className="mb-4">
                    En utilisant notre site, vous consentez à notre politique de confidentialité.
                </p>
            </section>
        </div>
    )
}