import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { teamMembers } from "@/lib/data";
import TeamMemberCard from "@/components/ui/TeamMemberCard";

const Team = () => {
  return (
    <>
      <Helmet>
        <title>Notre Équipe d'Experts - ALTAQA</title>
        <meta 
          name="description" 
          content="Rencontrez notre équipe d'experts dédiés à votre réussite. Des professionnels qualifiés dans la digitalisation, l'énergie, et le management."
        />
      </Helmet>
      
      <div className="pt-28 pb-12 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Notre Équipe</h1>
            <p className="text-lg md:text-xl mb-6">
              Des experts passionnés dédiés à la réussite de votre transformation digitale.
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
                    <span>Notre Équipe</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Rencontrez Nos Experts</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="text-lg text-neutral-700">
              Nos experts vous accompagnent à chaque étape de la mise en place et de l'optimisation de vos
              solutions, offrant un soutien personnalisé pour chaque domaine grâce à leurs compétences
              spécifiques.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-primary mb-8 text-center">Notre approche collaborative</h3>
            <p className="text-lg text-neutral-700 mb-12 text-center">
              Chez ALTAQA, nous croyons au pouvoir de la collaboration et de l'expertise multidisciplinaire pour offrir des solutions complètes et sur mesure.
            </p>
            
            <div className="bg-neutral-50 p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <i className="fas fa-comments text-2xl text-primary"></i>
                  </div>
                  <h4 className="text-xl font-medium text-neutral-800 mb-2">Communication</h4>
                  <p className="text-neutral-600">Des échanges constants et transparents pour comprendre vos besoins spécifiques.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <i className="fas fa-sitemap text-2xl text-primary"></i>
                  </div>
                  <h4 className="text-xl font-medium text-neutral-800 mb-2">Collaboration</h4>
                  <p className="text-neutral-600">Une approche d'équipe qui mobilise les bonnes expertises au bon moment.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <i className="fas fa-trophy text-2xl text-primary"></i>
                  </div>
                  <h4 className="text-xl font-medium text-neutral-800 mb-2">Excellence</h4>
                  <p className="text-neutral-600">Un engagement inébranlable envers la qualité et les résultats.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="py-16 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Rejoignez notre équipe</h2>
            <p className="text-lg md:text-xl mb-10 text-neutral-100">
              Vous êtes passionné par l'innovation et la transformation digitale? Nous sommes toujours à la recherche de nouveaux talents!
            </p>
            <Link 
              to="/contact" 
              className="bg-white hover:bg-neutral-100 text-primary font-medium px-8 py-4 rounded-lg transition-colors duration-300 text-lg inline-block"
            >
              Contactez-nous
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
