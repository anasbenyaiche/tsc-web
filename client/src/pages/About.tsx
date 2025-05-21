import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import AboutSection from "@/components/home/AboutSection";
import TeamSection from "@/components/home/TeamSection";
import CTASection from "@/components/home/CTASection";

const About = () => {
  return (
    <>
      <Helmet>
        <title>À propos de ALTAQA - Notre mission et notre équipe</title>
        <meta 
          name="description" 
          content="Découvrez l'équipe d'ALTAQA et notre mission d'aider les entreprises à prospérer dans l'ère numérique grâce à des solutions de digitalisation innovantes."
        />
      </Helmet>
      
      <div className="pt-28 pb-12 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">À propos de nous</h1>
            <p className="text-lg md:text-xl mb-6">
              Découvrez notre histoire, notre mission et l'équipe qui travaille à aider votre entreprise à réussir sa transformation digitale.
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
                    <span>À propos</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      
      <AboutSection />
      
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">Notre Mission</h2>
            <p className="text-lg text-neutral-700 mb-8">
              Chez ALTAQA, notre mission est de transformer les défis numériques en opportunités de croissance. 
              Nous croyons que chaque entreprise, quelle que soit sa taille, mérite d'avoir accès aux meilleures 
              technologies et stratégies digitales pour rester compétitive dans un monde en constante évolution.
            </p>
            
            <h2 className="text-3xl font-bold text-primary mb-6 mt-12">Notre Vision</h2>
            <p className="text-lg text-neutral-700 mb-8">
              Nous aspirons à devenir le partenaire de référence en matière de transformation digitale, 
              en fournissant des solutions sur mesure qui permettent à nos clients de prospérer dans 
              l'économie numérique d'aujourd'hui et de demain.
            </p>
            
            <h2 className="text-3xl font-bold text-primary mb-6 mt-12">Nos Valeurs</h2>
            <ul className="space-y-4 text-lg text-neutral-700">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                <span><strong>Excellence</strong> - Nous nous engageons à fournir des services de la plus haute qualité, en nous efforçant constamment de dépasser les attentes.</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                <span><strong>Innovation</strong> - Nous cherchons continuellement de nouvelles façons d'améliorer et d'optimiser les processus, en restant à la pointe des technologies émergentes.</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                <span><strong>Intégrité</strong> - Nous agissons avec honnêteté et transparence dans toutes nos interactions, en construisant des relations de confiance durables avec nos clients.</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                <span><strong>Collaboration</strong> - Nous croyons au pouvoir du travail d'équipe et de la coopération pour créer des solutions qui répondent véritablement aux besoins de nos clients.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <TeamSection />
      <CTASection />
    </>
  );
};

export default About;
