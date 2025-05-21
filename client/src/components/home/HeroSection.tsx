import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import VideoBackground from "@/components/ui/VideoBackground";

const HeroSection = () => {
  const [contentLoaded, setContentLoaded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  // URL vidéo de fond (utilisant une vidéo libre de droits)
  const videoUrl = "/assets/videos/TSC-herosection.mp4";
 
  useEffect(() => {
    const timer = setTimeout(() => {
      setContentLoaded(true);
    }, 100);
    
    // Fonction pour détecter le défilement
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Montrer les boutons après avoir défilé de 100px
      setIsScrolled(scrollPosition > 100);
    };

    // Ajouter l'écouteur de défilement
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen overflow-hidden text-white"
    >
      {/* Video Background */}
      <VideoBackground
        src={videoUrl}
        fallbackImage="/logo.jpeg"
        className="absolute inset-0 w-full h-full"
        overlayOpacity={40}
      />

      {/* Centered Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
        <div className="max-w-2xl text-center">
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight animate-slide-left ${
              contentLoaded ? "opacity-100" : "opacity-0"
            }`}
          >
            Solutions Digitales Innovantes
          </h1>
          <p
            className={`text-xl mb-8 text-neutral-100 animate-slide-left animate-delay-200 ${
              contentLoaded ? "opacity-100" : "opacity-0"
            }`}
          >
            Transformation numérique pour propulser votre entreprise vers le
            succès.
          </p>

          {/* Buttons */}
          <div
            className={`flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4
              ${
                isScrolled
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }
              transition-all duration-700 ease-in-out`}
          >
            <Link
              to="/services"
              className="bg-secondary hover:bg-secondary-dark text-white font-medium px-6 py-3 rounded-lg transition-colors duration-300 text-center"
            >
              Découvrir nos services
            </Link>
            <Link
              to="/contact"
              className="bg-white hover:bg-neutral-100 text-primary font-medium px-6 py-3 rounded-lg transition-colors duration-300 text-center"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20 ${
          isScrolled ? "opacity-0" : "opacity-100"
        } transition-opacity duration-300`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 80"
          className="w-full h-auto"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L120,58.7C240,53,480,43,720,42.7C960,43,1200,53,1320,58.7L1440,64L1440,80L1320,80C1200,80,960,80,720,80C480,80,240,80,120,80L0,80Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};
export default HeroSection;
