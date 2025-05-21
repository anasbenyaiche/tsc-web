import { Link } from "react-router-dom";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/lib/data";
import { useEffect, useState, useRef } from "react";

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="services" className="py-16 md:py-24" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Nos Services</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
            Découvrez notre gamme complète de services conçus pour propulser votre entreprise vers le succès digital.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {services.map((service, index) => (
            <div 
              className={`${isVisible ? 'opacity-100' : 'opacity-0'} w-full max-w-sm mx-auto h-full`} 
              key={service.id}
              style={{ transition: `opacity 0.5s ease ${index * 0.1}s` }}
            >
              <ServiceCard 
                service={service} 
                index={index}
              />
            </div>
          ))}
        </div>
        
        <div className={`mt-16 text-center ${isVisible ? 'animate-fade-in animate-delay-500' : 'opacity-0'}`}>
          <Link 
            to="/contact" 
            className="inline-block bg-secondary hover:bg-secondary-dark text-white font-medium px-8 py-4 rounded-lg transition-colors duration-300 text-lg hover-lift"
            aria-label="Demander un devis gratuit"
          >
            Demander un devis gratuit
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
