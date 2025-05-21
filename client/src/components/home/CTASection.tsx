import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-16 md:py-20 bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à transformer votre entreprise?</h2>
          <p className="text-lg md:text-xl mb-10 text-neutral-100">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins en digitalisation et découvrir comment nous pouvons vous aider à atteindre vos objectifs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link 
              to="/contact" 
              className="bg-secondary hover:bg-secondary-dark text-white font-medium px-8 py-4 rounded-lg transition-colors duration-300 text-lg"
            >
              Nous contacter
            </Link>
            <Link 
              to="/services" 
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-medium px-8 py-4 rounded-lg transition-colors duration-300 text-lg"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
