import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";

interface ContactFormInputs {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors } 
  } = useForm<ContactFormInputs>();

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
  
  const onSubmit = async (data: ContactFormInputs) => {
    setIsSubmitting(true);
    
    try {
      // In a real application, you would send this data to your backend
      console.log('Form data:', data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message envoyé",
        description: "Nous vous contacterons bientôt!",
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi du message.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="py-16 md:py-24 bg-neutral-50" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Contactez-nous</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
            Vous avez des questions ou souhaitez discuter de votre projet? Nous sommes là pour vous aider. 
            Contactez-nous via le formulaire ci-dessous ou utilisez nos coordonnées directes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className={`${isVisible ? 'animate-slide-right' : 'opacity-0'}`}>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-md space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-group">
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">Nom complet</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fas fa-user text-neutral-400"></i>
                    </div>
                    <input 
                      type="text" 
                      id="name"
                      className={`w-full pl-10 px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-neutral-300'} focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
                      placeholder="Votre nom"
                      {...register("name", { required: "Le nom est requis" })}
                    />
                  </div>
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">Email</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fas fa-envelope text-neutral-400"></i>
                    </div>
                    <input 
                      type="email" 
                      id="email"
                      className={`w-full pl-10 px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-neutral-300'} focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
                      placeholder="votre@email.com"
                      {...register("email", { 
                        required: "L'email est requis",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Adresse email invalide"
                        }
                      })}
                    />
                  </div>
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">Sujet</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-tag text-neutral-400"></i>
                  </div>
                  <input 
                    type="text" 
                    id="subject"
                    className={`w-full pl-10 px-4 py-3 rounded-lg border ${errors.subject ? 'border-red-500' : 'border-neutral-300'} focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
                    placeholder="Sujet de votre message"
                    {...register("subject", { required: "Le sujet est requis" })}
                  />
                </div>
                {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>}
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">Message</label>
                <div className="relative">
                  <textarea 
                    id="message"
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-neutral-300'} focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
                    placeholder="Votre message"
                    {...register("message", { required: "Le message est requis" })}
                  ></textarea>
                </div>
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
              </div>
              
              <div className="form-group">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary-light text-white font-medium px-6 py-4 rounded-lg transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed hover-lift relative overflow-hidden group"
                  aria-label="Envoyer le message"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-circle-notch fa-spin mr-2"></i>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane mr-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                        Envoyer le message
                      </>
                    )}
                  </span>
                  <span className="absolute inset-0 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </button>
              </div>
            </form>
          </div>
          
          <div className={`${isVisible ? 'animate-slide-left' : 'opacity-0'}`}>
            <div className="bg-primary text-white p-8 rounded-lg h-full shadow-md">
              <h3 className="text-2xl font-semibold mb-6 border-b border-white/20 pb-4">Informations de contact</h3>
              
              <div className="space-y-8">
                <div className="flex items-start group transition-all duration-300 hover:translate-x-2">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white group-hover:bg-secondary transition-colors duration-300">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-white opacity-80 mb-1">Téléphone</h4>
                    <a href="tel:+21654624612" className="text-white text-lg hover:text-secondary transition-colors duration-300">c</a>
                  </div>
                </div>
                
                <div className="flex items-start group transition-all duration-300 hover:translate-x-2">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white group-hover:bg-secondary transition-colors duration-300">
                      <i className="fas fa-envelope"></i>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-white opacity-80 mb-1">Email</h4>
                    <a href="mailto:altaqa.strategy@gmail.com" className="text-white text-lg hover:text-secondary transition-colors duration-300 break-all">altaqa.strategy@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start group transition-all duration-300 hover:translate-x-2">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white group-hover:bg-secondary transition-colors duration-300">
                      <i className="fas fa-clock"></i>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-white opacity-80 mb-1">Horaires</h4>
                    <p className="text-white text-lg">Lundi - Vendredi: 9h00 - 18h00</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 border-t border-white/20 pt-6">
                <h4 className="font-medium text-white mb-4">Suivez-nous</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.facebook.com/profile.php?id=100086968802037" 
                    aria-label="Facebook"
                    className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-secondary hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/al-taqa-strategy-consulting/" 
                    aria-label="LinkedIn"
                    className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-secondary hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a 
                    href="#" 
                    aria-label="Twitter"
                    className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-secondary hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a 
                    href="#" 
                    aria-label="Instagram"
                    className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-secondary hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
