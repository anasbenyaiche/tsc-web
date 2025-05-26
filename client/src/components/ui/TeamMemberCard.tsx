import { TeamMemberType } from "@/lib/types";
import LazyImage from "@/components/ui/LazyImage";
import { useState } from "react";

interface TeamMemberCardProps {
  member: TeamMemberType;
  index?: number;
}

const TeamMemberCard = ({ member, index = 0 }: TeamMemberCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Calculate animation delay based on card index
  const animationDelay = `animate-delay-${(index % 5 + 1) * 100}`;

  return (
    <div 
      className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-lg animate-fade-in ${animationDelay}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <div className="h-64 bg-primary/10 relative overflow-hidden">
        <LazyImage 
          src={member.image} 
          alt={member.name} 
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className={`absolute inset-0 bg-primary/70 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-80' : 'opacity-0'}`}>
          <div className="flex space-x-3">
            <a 
              href="https://www.linkedin.com/company/al-taqa-strategy-consulting/" 
              aria-label="LinkedIn"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-colors"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a 
              href="#" 
              aria-label="Email"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-colors"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-primary mb-2">{member.name}</h3>
        <div className="flex items-center mb-4">
          <div className="w-10 h-[2px] bg-secondary mr-3"></div>
          <p className="text-neutral-500 text-sm">{member.title}</p>
        </div>
        <p className="text-neutral-600">
          {member.description}
        </p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
