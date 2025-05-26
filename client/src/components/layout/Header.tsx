import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const headerRef = useRef<HTMLElement>(null);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // If we're at the top, remove scroll class
      if (currentScrollY < 10) {
        setScrolled(false);
        if (headerRef.current) {
          headerRef.current.style.transform = "translateY(0)";
        }
        prevScrollY.current = currentScrollY;
        return;
      }
      
      // If we've scrolled more than 10px, add shadow
      setScrolled(true);
      
      // Hide header on scroll down, show on scroll up
      if (currentScrollY > prevScrollY.current && currentScrollY > 100) {
        // Scrolling down
        if (headerRef.current) {
          headerRef.current.style.transform = "translateY(-100%)";
        }
      } else {
        // Scrolling up
        if (headerRef.current) {
          headerRef.current.style.transform = "translateY(0)";
        }
      }
      
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Handle keyboard escape key to close menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header 
      ref={headerRef}
      className={`bg-white fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center z-20">
            <Link to="/" className="text-2xl font-bold flex items-center" aria-label="ALTAQA - Retour à l'accueil">
              <img 
                src="/assets/logo.jpeg" 
                alt="Logo ALTAQA" 
                className="h-10 w-auto mr-2 rounded"
                width="40"
                height="40"
              />
              <span>
                <span className="text-secondary font-bold">ALTA</span>
                <span className="text-primary font-bold">QA</span>
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/" label="Accueil" />
            <NavLink to="/about" label="À propos" />
            <NavLink to="/services" label="Services" />
            <NavLink to="/odoo" label="ODOO ERP" />
            <NavLink to="/team" label="Notre équipe" />
            {/* <NavLink to="/blog" label="Blog" /> */}
            <NavLink to="/contact" label="Contact" />
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <div className="md:hidden z-20">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className={`p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
                mobileMenuOpen ? 'bg-primary text-white' : 'text-neutral-700'
              }`}
              aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={mobileMenuOpen}
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div 
          className={`fixed md:hidden inset-0 bg-white z-10 transition-transform transform duration-300 pt-24 px-6 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav className="flex flex-col space-y-6">
            <MobileNavLink to="/" label="Accueil" icon="fa-home" />
            <MobileNavLink to="/about" label="À propos" icon="fa-info-circle" />
            <MobileNavLink to="/services" label="Services" icon="fa-cogs" />
            <MobileNavLink to="/odoo" label="ODOO ERP" icon="fa-database" />
            <MobileNavLink to="/team" label="Notre équipe" icon="fa-users" />
            {/* <MobileNavLink to="/blog" label="Blog" icon="fa-blog" /> */}
            <MobileNavLink to="/contact" label="Contact" icon="fa-envelope" />
          </nav>
          
          <div className="absolute bottom-10 left-0 right-0 p-6">
            <div className="flex flex-col items-center space-y-4">
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/profile.php?id=100086968802037" aria-label="Facebook" className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white hover:bg-primary-light transition-colors">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.linkedin.com/company/al-taqa-strategy-consulting/" aria-label="LinkedIn" className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white hover:bg-primary-light transition-colors">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" aria-label="Twitter" className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white hover:bg-primary-light transition-colors">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
              <p className="text-sm text-neutral-500">© {new Date().getFullYear()} ALTAQA</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

// Desktop Navigation Link
const NavLink = ({ to, label }: { to: string; label: string }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={`nav-link text-neutral-800 font-medium relative ${isActive ? 'font-semibold' : ''} hover:text-primary transition-colors`}
      aria-current={isActive ? 'page' : undefined}
    >
      {label}
      <span 
        className={`absolute bottom-[-2px] left-0 h-[2px] bg-secondary transition-all duration-300 ${isActive ? 'w-full' : 'w-0'}`} 
        style={{ 
          transformOrigin: 'left'
        }}
      />
    </Link>
  );
};

// Mobile Navigation Link
const MobileNavLink = ({ to, label, icon }: { to: string; label: string; icon: string }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={`flex items-center text-xl py-2 px-4 rounded-lg transition-all duration-200 ${
        isActive 
          ? 'bg-primary/10 text-primary font-semibold' 
          : 'text-neutral-800 hover:bg-neutral-100'
      }`}
      aria-current={isActive ? 'page' : undefined}
    >
      <i className={`fas ${icon} w-8`}></i>
      <span>{label}</span>
    </Link>
  );
};

export default Header;
