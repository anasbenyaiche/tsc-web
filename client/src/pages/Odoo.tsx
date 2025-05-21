import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { erpFeatures, erpModules } from "@/lib/data";
import CTASection from "@/components/home/CTASection";

const Odoo = () => {
  return (
    <>
      <Helmet>
        <title>ODOO ERP - Solutions de gestion pour votre entreprise | ALTAQA</title>
        <meta 
          name="description" 
          content="Découvrez notre solution ODOO ERP tout-en-un et personnalisable pour gérer efficacement tous les processus de votre entreprise."
        />
      </Helmet>
      
      <div className="pt-28 pb-12 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">ODOO ERP</h1>
            <p className="text-lg md:text-xl mb-6">
              Une solution de gestion complète et intégrée pour optimiser les opérations de votre entreprise.
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
                    <span>ODOO ERP</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Un ERP complet pour votre entreprise</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="text-lg text-neutral-700">
              Odoo est un système ERP (Enterprise Resource Planning) utilisé à l'échelle de l'entreprise pour la gestion des
              processus métier. Odoo propose des applications métiers fonctionnelles parfaitement intégrées, formant une solution ERP complète
              une fois combinées.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="ODOO ERP Dashboard" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6">Pourquoi choisir ODOO?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white">
                      <i className="fas fa-check"></i>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-medium text-neutral-800 mb-2">Solution tout-en-un</h4>
                    <p className="text-neutral-600">Un système unique qui couvre tous vos besoins d'entreprise, de la comptabilité aux ventes, en passant par la production et les RH.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white">
                      <i className="fas fa-cogs"></i>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-medium text-neutral-800 mb-2">Personnalisable</h4>
                    <p className="text-neutral-600">Adaptez ODOO à vos besoins spécifiques, ajoutez uniquement les modules qui vous sont utiles.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white">
                      <i className="fas fa-chart-line"></i>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-medium text-neutral-800 mb-2">Visibilité et analytics</h4>
                    <p className="text-neutral-600">Accédez à des tableaux de bord et à des rapports en temps réel pour prendre des décisions éclairées.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-neutral-50 rounded-2xl p-8 md:p-12 mb-20">
            <h3 className="text-2xl font-semibold text-primary mb-8 text-center">Les modules principaux</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {erpModules.map((module) => (
                <div key={module.id} className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                  <i className={`${module.icon} text-primary text-3xl mb-4`}></i>
                  <p className="font-medium">{module.name}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-primary mb-8 text-center">Fonctionnalités clés</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {erpFeatures.map((feature) => (
                <div key={feature.id} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      <i className={feature.icon}></i>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-medium text-neutral-800 mb-2">{feature.title}</h4>
                    <p className="text-neutral-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <div className="bg-neutral-100 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-8">Comment nous implémentons ODOO ERP</h2>
            <p className="text-lg text-neutral-700 mb-12">
              Notre équipe d'experts vous accompagne tout au long du processus d'implémentation pour assurer une transition fluide et efficace.
            </p>
            
            <div className="flex flex-col md:flex-row justify-between relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-secondary -translate-y-1/2 z-0"></div>
              
              {[
                { step: 1, title: "Analyse", description: "Évaluation de vos besoins" },
                { step: 2, title: "Configuration", description: "Paramétrage personnalisé" },
                { step: 3, title: "Migration", description: "Transfert de données" },
                { step: 4, title: "Formation", description: "Formation de vos équipes" },
                { step: 5, title: "Support", description: "Assistance continue" }
              ].map((item) => (
                <div key={item.step} className="md:w-1/5 mb-8 md:mb-0 z-10 flex flex-col items-center">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                    {item.step}
                  </div>
                  <h4 className="font-semibold text-neutral-800 mb-1">{item.title}</h4>
                  <p className="text-sm text-neutral-600 text-center">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <CTASection />
    </>
  );
};

export default Odoo;
