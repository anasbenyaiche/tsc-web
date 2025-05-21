import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page non trouvée - ALTAQA</title>
        <meta 
          name="description" 
          content="La page que vous recherchez n'a pas été trouvée. Retournez à l'accueil pour découvrir nos services de digitalisation et d'accompagnement d'entreprise."
        />
      </Helmet>
      
      <section className="py-20 md:py-32 flex items-center min-h-screen bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse md:flex-row items-center justify-center">
            <div className="md:w-1/2 md:pr-8 mt-10 md:mt-0 text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4 animate-slide-left">404</h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-neutral-800 mb-6 animate-slide-left animate-delay-100">
                Page non trouvée
              </h2>
              <p className="text-lg text-neutral-600 mb-8 animate-slide-left animate-delay-200">
                La page que vous recherchez n'existe pas ou a été déplacée.
                Retournez à l'accueil pour continuer votre navigation.
              </p>
              <div className="animate-slide-left animate-delay-300">
                <Link 
                  to="/" 
                  className="bg-primary hover:bg-primary-light text-white font-medium px-6 py-3 rounded-lg transition-colors duration-300 hover-lift inline-flex items-center"
                >
                  <i className="fas fa-home mr-2"></i>
                  Retour à l'accueil
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center animate-slide-right">
              <div className="w-full max-w-md">
                <svg 
                  viewBox="0 0 450 300" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto"
                >
                  <path 
                    d="M314.5 55.5C360.5 70.5 409 151 397 207.5C385 264 313 295 254.5 295C196 295 151 264 123.5 207.5C96 151 86 70.5 123.5 55.5C161 40.5 268.5 40.5 314.5 55.5Z" 
                    fill="#F3F4F6" 
                  />
                  <path 
                    d="M216.5 157C256.4 157 289 146.6 289 133.5C289 120.4 256.4 110 216.5 110C176.6 110 144 120.4 144 133.5C144 146.6 176.6 157 216.5 157Z" 
                    fill="#E5E7EB" 
                  />
                  <path 
                    d="M230 100.5L255 60.5M230 100.5L213 66M230 100.5L243.5 87M230 100.5L216.5 87" 
                    stroke="#1E40AF" 
                    strokeWidth="4" 
                    strokeLinecap="round" 
                  />
                  <path 
                    d="M159 210.328C159 198.466 168.506 189 180.421 189H250.579C262.494 189 272 198.466 272 210.328V210.328C272 222.19 262.494 231.656 250.579 231.656H201.857L190.524 246H180.421C168.506 246 159 236.534 159 224.672V210.328Z" 
                    fill="#FFC107" 
                  />
                  <path 
                    d="M216 211C216 212.657 214.657 214 213 214C211.343 214 210 212.657 210 211C210 209.343 211.343 208 213 208C214.657 208 216 209.343 216 211Z" 
                    fill="black" 
                  />
                  <path 
                    d="M204 211C204 212.657 202.657 214 201 214C199.343 214 198 212.657 198 211C198 209.343 199.343 208 201 208C202.657 208 204 209.343 204 211Z" 
                    fill="black" 
                  />
                  <path 
                    d="M228 211C228 212.657 226.657 214 225 214C223.343 214 222 212.657 222 211C222 209.343 223.343 208 225 208C226.657 208 228 209.343 228 211Z" 
                    fill="black" 
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
