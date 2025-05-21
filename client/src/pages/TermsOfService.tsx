import { Helmet } from "react-helmet";

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Conditions d'utilisation | ALTAQA</title>
        <meta name="description" content="Conditions générales d'utilisation du site web ALTAQA. Consultez nos conditions d'utilisation pour comprendre vos droits et responsabilités." />
      </Helmet>
      
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">Conditions d'utilisation</h1>
          
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="prose prose-lg max-w-none">
              <h2>1. Acceptation des conditions</h2>
              <p>En accédant et en utilisant ce site web, vous acceptez d'être lié par ces conditions d'utilisation, toutes les lois et réglementations applicables, et vous acceptez d'être responsable du respect des lois locales applicables. Si vous n'êtes pas d'accord avec l'une de ces conditions, il vous est interdit d'utiliser ou d'accéder à ce site.</p>
              
              <h2>2. Licence d'utilisation</h2>
              <p>L'autorisation est accordée de télécharger temporairement une copie des documents sur le site web d'ALTAQA pour un affichage personnel, non commercial et transitoire uniquement. Il s'agit de l'octroi d'une licence, et non d'un transfert de titre, et sous cette licence, vous ne pouvez pas :</p>
              <ul>
                <li>Modifier ou copier les documents ;</li>
                <li>Utiliser les documents à des fins commerciales ou pour une présentation publique ;</li>
                <li>Tenter de décompiler ou d'appliquer l'ingénierie inverse de tout logiciel contenu sur le site d'ALTAQA ;</li>
                <li>Supprimer tout droit d'auteur ou autres notations de propriété des documents ; ou</li>
                <li>Transférer les documents à une autre personne ou "refléter" les documents sur un autre serveur.</li>
              </ul>
              
              <h2>3. Exactitude des contenus</h2>
              <p>Les informations fournies sur ce site sont destinées à des fins d'information générale uniquement et ne constituent pas un conseil professionnel. Les matériaux sur ce site ne sont pas garantis comme étant exacts, complets ou à jour. ALTAQA n'assume aucune responsabilité pour les erreurs ou omissions dans le contenu de ce site.</p>
              
              <h2>4. Liens vers d'autres sites</h2>
              <p>ALTAQA n'a pas révisé tous les sites liés à son site et n'est pas responsable du contenu de ces sites. L'inclusion de tout lien n'implique pas l'approbation par ALTAQA du site. L'utilisation d'un tel site web lié se fait aux risques et périls de l'utilisateur.</p>
              
              <h2>5. Limitations</h2>
              <p>En aucun cas, ALTAQA ou ses fournisseurs ne peuvent être tenus responsables de tout dommage (y compris, sans limitation, les dommages pour perte de données ou de profit, ou en raison d'une interruption d'activité) découlant de l'utilisation ou de l'impossibilité d'utiliser les documents sur le site d'ALTAQA, même si ALTAQA ou un représentant autorisé d'ALTAQA a été informé oralement ou par écrit de la possibilité de tels dommages.</p>
              
              <h2>6. Modifications des conditions d'utilisation</h2>
              <p>ALTAQA peut réviser ces conditions d'utilisation de son site web à tout moment sans préavis. En utilisant ce site web, vous acceptez d'être lié par la version alors en vigueur de ces conditions d'utilisation.</p>
              
              <h2>7. Loi applicable</h2>
              <p>Ces conditions d'utilisation sont régies et interprétées conformément aux lois tunisiennes et vous vous soumettez irrévocablement à la juridiction exclusive des tribunaux de cette région.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsOfService;