import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="animate-fade-in">
            <div className="flex items-center mb-6">
              <img 
                src="/assets/logo.jpeg" 
                alt="Logo ALTAQA" 
                className="h-10 w-auto mr-2 rounded"
                width="40"
                height="40"
                loading="lazy"
              />
              <h3 className="text-xl font-bold">
                <span className="text-secondary">ALTA</span>
                <span className="text-white">QA</span>
              </h3>
            </div>
            <p className="text-neutral-300 mb-6">
              Chez ALTAQA, nous sommes dédiés à aider les entreprises à prospérer dans l'ère numérique en transformant leurs opérations traditionnelles.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon="fab fa-facebook-f" label="Facebook" />
              <SocialLink href="#" icon="fab fa-linkedin-in" label="LinkedIn" />
              <SocialLink href="#" icon="fab fa-twitter" label="Twitter" />
              <SocialLink href="#" icon="fab fa-instagram" label="Instagram" />
            </div>
          </div>
          
          <div className="animate-fade-in animate-delay-100">
            <h4 className="text-lg font-semibold mb-6 relative inline-block">
              Liens rapides
              <span className="absolute bottom-[-4px] left-0 w-10 h-[2px] bg-secondary"></span>
            </h4>
            <ul className="space-y-3">
              <FooterLink to="/" label="Accueil" />
              <FooterLink to="/about" label="À propos" />
              <FooterLink to="/services" label="Services" />
              <FooterLink to="/odoo" label="ODOO ERP" />
              <FooterLink to="/team" label="Notre équipe" />
              <FooterLink to="/contact" label="Contact" />
            </ul>
          </div>
          
          <div className="animate-fade-in animate-delay-200">
            <h4 className="text-lg font-semibold mb-6 relative inline-block">
              Services
              <span className="absolute bottom-[-4px] left-0 w-10 h-[2px] bg-secondary"></span>
            </h4>
            <ul className="space-y-3">
              <FooterLink to="/services" label="Accompagnement d'entreprise" />
              <FooterLink to="/services" label="Digitalisation des services" />
              <FooterLink to="/services" label="Énergie & climat" />
              <FooterLink to="/services" label="Data Warehouse" />
              <FooterLink to="/services" label="Data Science" />
              <FooterLink to="/services" label="Data Analysis" />
            </ul>
          </div>
          
          <div className="animate-fade-in animate-delay-300">
            <h4 className="text-lg font-semibold mb-6 relative inline-block">
              Contact
              <span className="absolute bottom-[-4px] left-0 w-10 h-[2px] bg-secondary"></span>
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start group hover-lift">
                <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center mt-1 mr-3 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div>
                  <span className="text-neutral-300 block">Téléphone</span>
                  <a href="tel:+21697624612" className="text-white hover:text-secondary transition-colors">+216 97 624 612</a>
                </div>
              </li>
              <li className="flex items-start group hover-lift">
                <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center mt-1 mr-3 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <span className="text-neutral-300 block">Email</span>
                  <a href="mailto:altaqa.strategy@gmail.com" className="text-white hover:text-secondary transition-colors break-all">altaqa.strategy@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start group hover-lift">
                <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center mt-1 mr-3 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                  <i className="fas fa-clock"></i>
                </div>
                <div>
                  <span className="text-neutral-300 block">Horaires</span>
                  <span className="text-white">Lun - Ven: 9h00 - 18h00</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-700 pt-8 text-center text-neutral-400 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {currentYear} ALTAQA. Tous droits réservés.</p>
            <div className="mt-4 md:mt-0">
              <Link to="/terms" className="px-2 hover:text-white transition-colors">Conditions d'utilisation</Link>
              <Link to="/privacy" className="px-2 border-l border-neutral-700 hover:text-white transition-colors">Politique de confidentialité</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon, label }: { href: string; icon: string; label: string }) => (
  <a 
    href={href} 
    aria-label={label}
    className="w-10 h-10 bg-neutral-700 rounded-full flex items-center justify-center hover:bg-secondary transition-colors duration-300"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className={icon}></i>
  </a>
);

const FooterLink = ({ to, label }: { to: string; label: string }) => (
  <li>
    <Link 
      to={to} 
      className="text-neutral-300 hover:text-white transition-colors duration-300 hover:pl-1 inline-block"
    >
      <i className="fas fa-chevron-right text-xs mr-2 text-secondary"></i>
      {label}
    </Link>
  </li>
);

export default Footer;
