import { Link } from "react-router-dom";
import { erpFeatures, erpModules } from "@/lib/data";

const ERP_Section = () => {
  return (
    <section id="odoo" className="py-16 md:py-24 bg-neutral-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">ODOO ERP</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
            Odoo est un système ERP (Enterprise Resource Planning) utilisé à l'échelle de l'entreprise pour la gestion des
            processus métier. Odoo propose des applications métiers fonctionnelles parfaitement intégrées, formant une solution ERP complète.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6">Un ERP tout-en-un et personnalisable</h3>
            <p className="text-neutral-600 mb-8">
              Odoo propose un ERP de gestion commerciale tout-en-un et personnalisable. Il permet de couvrir toutes les
              fonctions clés des entreprises, offrant une visibilité à long terme et une gestion optimisée.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {erpFeatures.map((feature) => (
                <div key={feature.id} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      <i className={feature.icon}></i>
                    </div>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium text-neutral-800">{feature.title}</h4>
                    <p className="text-sm text-neutral-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6">
              <Link 
                to="/odoo" 
                className="inline-block bg-primary hover:bg-primary-light text-white font-medium px-6 py-3 rounded-lg transition-colors duration-300"
              >
                Découvrir Odoo ERP
              </Link>
            </div>
          </div>
          
          <div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="ODOO ERP Dashboard" 
                className="rounded-lg w-full h-auto"
              />
              
              <div className="mt-8">
                <h4 className="text-xl font-semibold text-primary mb-4 text-center">Modules ODOO</h4>
                <div className="grid grid-cols-3 gap-4">
                  {erpModules.map((module) => (
                    <div key={module.id} className="bg-neutral-100 p-4 rounded-lg text-center">
                      <i className={`${module.icon} text-primary text-xl mb-2`}></i>
                      <p className="text-sm font-medium">{module.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ERP_Section;
