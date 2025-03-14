
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { label: 'Historical Headlines GPT', url: 'https://chatgpt.com/g/g-67d47764b4488191aa3716588871b65a-historical-headlines-gpt' },
    { label: 'Talk To History GPT', url: 'https://talk-to-history-gpt.lovable.app/' },
    { label: 'FAQ', url: '#faq' },
    { label: 'Disclaimer', url: '#disclaimer' },
    { label: 'More AI Tools', url: 'https://www.aiwebtools.ai' },
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-cyber-dark-blue/80 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Logo />

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            {navLinks.map((link, index) => (
              <React.Fragment key={index}>
                <a 
                  href={link.url} 
                  className={`px-3 py-2 rounded-md text-sm font-cyber transition-all duration-300
                    ${link.label === 'Talk To History GPT' 
                      ? 'text-cyber-orange font-semibold hover:text-cyber-orange/80' 
                      : 'text-cyber-gray hover:text-cyber-blue'}`}
                  target={link.url.startsWith('http') ? "_blank" : "_self"}
                  rel={link.url.startsWith('http') ? "noopener noreferrer" : ""}
                >
                  {link.label}
                </a>
                {index < navLinks.length - 1 && (
                  <span className="text-cyber-blue/30 self-center">|</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-cyber-blue hover:text-cyber-blue-dark transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute w-full bg-cyber-dark-blue/95 backdrop-filter backdrop-blur-lg transition-all duration-300 ease-in-out border-t border-cyber-blue/30 
          ${isMenuOpen ? 'max-h-[400px] opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden'}`}
      >
        <div className="container mx-auto px-4 space-y-2 pb-4">
          {navLinks.map((link, index) => (
            <a 
              key={index}
              href={link.url} 
              className={`block py-2 px-4 text-center rounded transition-all duration-300
                ${link.label === 'Talk To History GPT' 
                  ? 'text-cyber-orange font-semibold hover:bg-cyber-dark/50' 
                  : 'text-cyber-gray hover:bg-cyber-dark/50 hover:text-cyber-blue'}`}
              onClick={() => setIsMenuOpen(false)}
              target={link.url.startsWith('http') ? "_blank" : "_self"}
              rel={link.url.startsWith('http') ? "noopener noreferrer" : ""}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
