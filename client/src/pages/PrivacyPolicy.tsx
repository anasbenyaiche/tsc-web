import { Helmet } from "react-helmet";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Politique de confidentialité | ALTAQA</title>
        <meta name="description" content="Découvrez comment ALTAQA protège vos données personnelles. Notre politique de confidentialité explique les informations que nous collectons et comment nous les utilisons." />
      </Helmet>
      
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">Politique de confidentialité</h1>
          
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="prose prose-lg max-w-none">
              <p className="text-sm text-neutral-500 mb-6">Dernière mise à jour : {new Date().toLocaleDateString()}</p>
              
              <h2>1. Introduction</h2>
              <p>ALTAQA ("nous", "notre", "nos") s'engage à protéger votre vie privée. Cette politique de confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations lorsque vous visitez notre site web ou utilisez nos services.</p>
              
              <h2>2. Informations que nous collectons</h2>
              <h3>2.1 Informations personnelles</h3>
              <p>Nous pouvons collecter les informations personnelles suivantes lorsque vous utilisez notre site web ou nos services :</p>
              <ul>
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Nom de l'entreprise</li>
                <li>Informations de contact professionnel</li>
              </ul>
              
              <h3>2.2 Informations de navigation</h3>
              <p>Lorsque vous visitez notre site web, nous pouvons automatiquement collecter certaines informations sur votre appareil, notamment :</p>
              <ul>
                <li>Adresse IP</li>
                <li>Type de navigateur</li>
                <li>Pages visitées</li>
                <li>Heure et date de visite</li>
                <li>Temps passé sur chaque page</li>
              </ul>
              
              <h2>3. Comment nous utilisons vos informations</h2>
              <p>Nous utilisons les informations que nous collectons pour :</p>
              <ul>
                <li>Fournir, exploiter et maintenir notre site web</li>
                <li>Répondre à vos demandes et questions</li>
                <li>Traiter vos transactions commerciales</li>
                <li>Vous envoyer des communications marketing (avec votre consentement)</li>
                <li>Améliorer et analyser notre site web</li>
                <li>Identifier et prévenir la fraude</li>
                <li>Se conformer aux obligations légales</li>
              </ul>
              
              <h2>4. Partage de vos informations</h2>
              <p>Nous ne vendons pas, n'échangeons pas ou ne transférons pas vos informations personnelles à des tiers sans votre consentement, sauf dans les circonstances suivantes :</p>
              <ul>
                <li>Avec des prestataires de services qui nous aident à exploiter notre site web et à fournir nos services</li>
                <li>Pour se conformer à la loi ou répondre à un processus judiciaire</li>
                <li>Pour protéger nos droits, notre propriété ou notre sécurité</li>
                <li>En cas de fusion, acquisition ou vente d'actifs (les utilisateurs seront informés)</li>
              </ul>
              
              <h2>5. Cookies et technologies similaires</h2>
              <p>Nous utilisons des cookies et des technologies similaires pour collecter des informations sur vos activités sur notre site et pour mémoriser vos préférences. Vous pouvez configurer votre navigateur pour refuser tous les cookies ou pour indiquer quand un cookie est envoyé.</p>
              
              <h2>6. Protection de vos informations</h2>
              <p>Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos informations personnelles contre l'accès non autorisé, l'altération, la divulgation ou la destruction. Cependant, aucune méthode de transmission sur Internet ou de stockage électronique n'est 100% sécurisée.</p>
              
              <h2>7. Droits relatifs à vos données</h2>
              <p>Selon votre lieu de résidence, vous pouvez avoir certains droits concernant vos données personnelles, notamment :</p>
              <ul>
                <li>Droit d'accès à vos données personnelles</li>
                <li>Droit de rectification des données inexactes</li>
                <li>Droit de suppression de vos données</li>
                <li>Droit de restreindre le traitement de vos données</li>
                <li>Droit à la portabilité des données</li>
                <li>Droit d'opposition au traitement de vos données</li>
              </ul>
              <p>Pour exercer ces droits, veuillez nous contacter à l'adresse indiquée ci-dessous.</p>
              
              <h2>8. Modifications de notre politique de confidentialité</h2>
              <p>Nous pouvons mettre à jour notre politique de confidentialité de temps à autre. Nous vous informerons de tout changement en publiant la nouvelle politique de confidentialité sur cette page et en mettant à jour la date de "dernière mise à jour".</p>
              
              <h2>9. Nous contacter</h2>
              <p>Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter à :</p>
              <p>Email : <a href="mailto:altaqa.strategy@gmail.com" className="text-primary hover:underline">altaqa.strategy@gmail.com</a></p>
              <p>Téléphone : <a href="tel:+21697624612" className="text-primary hover:underline">+216 97 624 612</a></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;