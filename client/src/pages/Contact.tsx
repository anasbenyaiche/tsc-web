import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ContactSection from "@/components/home/ContactSection";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contactez-nous - ALTAQA</title>
        <meta 
          name="description" 
          content="Contactez ALTAQA pour discuter de vos besoins en digitalisation et transformation d'entreprise. Notre équipe d'experts est à votre disposition."
        />
      </Helmet>
      
      <div className="pt-28 pb-12 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Contactez-nous</h1>
            <p className="text-lg md:text-xl mb-6">
              Vous avez des questions ou un projet à discuter? Nous sommes là pour vous aider.
            </p>
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link to="/" className="text-white hover:text-neutral-200 transition-colors">
                    Accueil
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="mx-2">/</span>
                    <span>Contact</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      
      <ContactSection />
      
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Foire aux questions</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-primary mb-2">Comment commencer la transformation digitale de mon entreprise?</h3>
              <p className="text-neutral-700">
                La première étape consiste à réaliser un audit de votre situation actuelle et de vos besoins. Nous proposons une consultation initiale pour évaluer vos objectifs et vous recommander les meilleures solutions adaptées à votre entreprise.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-primary mb-2">Combien coûte l'implémentation d'un système ERP?</h3>
              <p className="text-neutral-700">
                Le coût varie en fonction de la taille de votre entreprise, de vos besoins spécifiques et des modules choisis. Nous proposons des solutions adaptées à différents budgets et vous aidons à maximiser votre retour sur investissement.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-primary mb-2">Combien de temps prend la mise en place d'une solution digitale?</h3>
              <p className="text-neutral-700">
                La durée d'implémentation dépend de la complexité du projet. Une solution simple peut être mise en place en quelques semaines, tandis qu'un projet plus complet peut prendre plusieurs mois. Notre équipe vous fournira un calendrier détaillé lors de la phase de planification.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-primary mb-2">Proposez-vous un support après l'implémentation?</h3>
              <p className="text-neutral-700">
                Absolument! Nous offrons un support continu pour assurer que vos systèmes fonctionnent de manière optimale. Nous proposons différents niveaux de services de maintenance et d'assistance technique selon vos besoins.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
