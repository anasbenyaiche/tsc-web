import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { services } from "@/lib/data";
import CTASection from "@/components/home/CTASection";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Nos Services - ALTAQA</title>
        <meta 
          name="description" 
          content="Découvrez nos services de digitalisation, accompagnement d'entreprise, énergie et climat, et data science qui propulseront votre entreprise vers le succès."
        />
      </Helmet>
      
      <div className="pt-28 pb-12 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Nos Services</h1>
            <p className="text-lg md:text-xl mb-6">
              Découvrez notre gamme complète de services conçus pour propulser votre entreprise vers le succès digital.
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
                    <span>Services</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}
            >
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                  <div className="lg:w-1/2">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                      <i className={`${service.icon} text-4xl text-primary`}></i>
                    </div>
                    <h2 className="text-3xl font-bold text-primary mb-6">{service.title}</h2>
                    <div className="mb-8">
                      <div className="w-20 h-1 bg-secondary"></div>
                    </div>
                    <ul className="space-y-4 text-lg text-neutral-700">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <Link 
                        to="/contact" 
                        className="inline-block bg-primary hover:bg-primary-light text-white font-medium px-6 py-3 rounded-lg transition-colors duration-300"
                      >
                        Demander plus d'informations
                      </Link>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <img 
                      src={service.image}
                      alt={service.title} 
                      className="rounded-lg shadow-lg w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <CTASection />
    </>
  );
};

export default Services;
