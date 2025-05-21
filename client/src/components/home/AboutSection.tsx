import { Link } from "react-router-dom";
import { whyChooseUs } from "@/lib/data";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-neutral-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">À propos de nous</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
            Découvrez comment nous pouvons collaborer pour propulser votre entreprise vers des nouveaux sommets!
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
            <img 
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=550" 
              alt="Notre équipe d'experts en transformation digitale" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-primary mb-6">Pourquoi choisir ALTAQA?</h3>
            
            <div className="space-y-6">
              {whyChooseUs.map((feature) => (
                <div key={feature.id} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white">
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
            
            <div className="mt-8">
              <Link 
                to="/contact" 
                className="inline-block bg-primary hover:bg-primary-light text-white font-medium px-6 py-3 rounded-lg transition-colors duration-300"
              >
                Discuter de votre projet
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
