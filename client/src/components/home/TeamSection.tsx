import TeamMemberCard from "@/components/ui/TeamMemberCard";
import { teamMembers } from "@/lib/data";
import { useEffect, useState, useRef } from "react";

const TeamSection = () => {
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
    <section id="team" className="py-16 md:py-24 bg-neutral-50" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Nos Experts</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
            Nos experts vous accompagnent à chaque étape de la mise en place et de l'optimisation de vos
            solutions, offrant un soutien personnalisé pour chaque domaine grâce à leurs compétences
            spécifiques.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={member.id} className={isVisible ? 'opacity-100' : 'opacity-0'}>
              <TeamMemberCard 
                member={member} 
                index={index}
              />
            </div>
          ))}
        </div>
        
        <div className={`mt-16 text-center ${isVisible ? 'animate-fade-in animate-delay-500' : 'opacity-0'}`}>
          <p className="text-lg text-neutral-700 max-w-3xl mx-auto italic">
            "Notre passion est de transformer les défis numériques en opportunités de croissance pour votre entreprise."
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
