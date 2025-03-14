
import React, { useState, useEffect } from 'react';
import { X, AlertTriangle } from 'lucide-react';

interface DisclaimerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DisclaimerModal: React.FC<DisclaimerModalProps> = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(isOpen);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen && !isVisible) {
      setIsVisible(true);
      setTimeout(() => setIsAnimating(true), 10);
    } else if (!isOpen && isVisible) {
      setIsAnimating(false);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen, isVisible]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}>
      <div className="absolute inset-0 bg-cyber-dark/90 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className={`relative w-full max-w-md cyber-card border-cyber-orange/50 transition-transform duration-300 ${isAnimating ? 'scale-100' : 'scale-95'}`}>
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-cyber-gray hover:text-cyber-blue transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>
        
        <div className="flex items-center mb-4">
          <AlertTriangle size={24} className="text-cyber-orange mr-2" />
          <h2 className="text-xl font-cyber font-bold">Disclaimer</h2>
        </div>
        
        <p className="text-cyber-gray mb-6">
          Historical Headlines GPT is designed for educational and entertainment purposes only. Content may reflect historical perspectives, including outdated or offensive viewpoints, to maintain historical accuracy. Generated articles should not be considered primary historical sources and should be verified with reputable references.
        </p>
        
        <div className="flex justify-center">
          <button 
            onClick={onClose}
            className="cyber-button"
          >
            I Agree
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal;
