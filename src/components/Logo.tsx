
import React from 'react';
import { Newspaper } from 'lucide-react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", size = "md", showTagline = true }) => {
  const sizes = {
    sm: { icon: 20, text: "text-xl", tagline: "text-xs" },
    md: { icon: 24, text: "text-2xl", tagline: "text-sm" },
    lg: { icon: 32, text: "text-3xl", tagline: "text-base" },
  };

  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative">
        <Newspaper size={sizes[size].icon} className="text-cyber-blue animate-glow" />
        <div className="absolute inset-0 blur-sm opacity-70 bg-cyber-blue rounded-full animate-pulse-slow" style={{ zIndex: -1 }}></div>
      </div>
      <div className="ml-2">
        <div className={`font-cyber font-bold tracking-wider ${sizes[size].text} text-white`}>
          <span className="text-cyber-blue">Historical</span> Headlines <span className="text-cyber-blue">GPT</span>
        </div>
        {showTagline && (
          <div className={`${sizes[size].tagline} font-cyber text-cyber-gray mt-[-4px]`}>
            Presented by <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="text-cyber-blue hover:text-cyber-blue-dark transition-colors">AiWebTools.Ai</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Logo;
