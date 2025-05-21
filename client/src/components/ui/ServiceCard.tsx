import { ServiceType } from "@/lib/types";
import { useState } from "react";

interface ServiceCardProps {
  service: ServiceType;
  index?: number;
}

const ServiceCard = ({ service, index = 0 }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Calculate animation delay based on card index (100ms, 200ms, 300ms, etc.)
  const animationDelay = `animate-delay-${(index % 5 + 1) * 100}`;

  return (
    <div 
      className={`bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg animate-fade-in ${animationDelay} service-card-equal-height`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <div 
        className={`w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto transition-all duration-300 ${isHovered ? 'bg-primary text-white scale-110' : 'text-primary'}`}
      >
        <i className={`${service.icon} text-2xl`}></i>
      </div>
      <h3 className="text-xl font-semibold text-primary text-center mb-4">
        {service.title}
      </h3>
      <ul className="space-y-3 text-neutral-600 service-card-features">
        {service.features.map((feature, idx) => (
          <li 
            key={idx} 
            className={`flex items-start transition-transform duration-300 ${isHovered ? 'transform translate-x-1' : ''}`} 
            style={{ transitionDelay: `${idx * 50}ms` }}
          >
            <i className="fas fa-check-circle text-secondary mt-1 mr-2"></i>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
