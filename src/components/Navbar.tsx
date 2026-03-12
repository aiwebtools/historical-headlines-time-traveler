
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { Button } from './ui/button';

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
    { label: 'Historical Headlines GPT', url: 'https://chatgpt.com/g/g-67d47764b4488191aa3716588871b65a-historical-headlines-gpt', featured: true },
    { label: 'Talk To History GPT', url: 'https://talk-to-history-gpt.lovable.app/' },
    { label: 'TIME MACHINE GPT', url: 'https://time-machine-gpt.lovable.app/' },
    { label: 'FAQ', url: '#faq' },
    { label: 'Disclaimer', url: '#disclaimer' },
    { label: 'More AI Tools', url: 'https://aiwebtools.lovable.app/?via=aiwebtools' },
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-cyber-dark-blue/80 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-3 sm:py-4'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Logo size="sm" showTagline={false} />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1 pl-4">
            {navLinks.map((link, index) => (
              <React.Fragment key={index}>
                {link.featured ? (
                  <Button 
                    asChild
                    className="bg-cyber-purple hover:bg-cyber-purple/90 text-white font-cyber font-semibold shadow-[0_0_8px_theme(colors.cyber.purple.DEFAULT)/30]"
                  >
                    <a 
                      href={link.url} 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  </Button>
                ) : (
                  <a 
                    href={link.url} 
                    className={`px-3 py-2 rounded-md text-sm font-cyber transition-colors duration-200
                      ${link.label === 'Talk To History GPT' || link.label === 'TIME MACHINE GPT'
                        ? 'text-cyber-orange font-semibold hover:text-cyber-orange/80' 
                        : 'text-cyber-gray hover:text-cyber-blue'}`}
                    target={link.url.startsWith('http') ? "_blank" : "_self"}
                    rel={link.url.startsWith('http') ? "noopener noreferrer" : ""}
                  >
                    {link.label}
                  </a>
                )}
                {index < navLinks.length - 1 && !link.featured && (
                  <span className="text-cyber-blue/30 self-center">|</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu} 
            className="lg:hidden text-cyber-blue hover:text-cyber-blue-dark transition-colors p-2 -mr-2 touch-manipulation"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-x-0 top-[52px] sm:top-[56px] bottom-0 bg-cyber-dark-blue/98 backdrop-blur-lg border-t border-cyber-blue/30 overflow-y-auto overscroll-contain z-50"
        >
          <div className="container mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link, index) => (
              link.featured ? (
                <div key={index} className="py-2">
                  <Button 
                    asChild
                    className="w-full bg-cyber-purple hover:bg-cyber-purple/90 text-white font-cyber font-semibold shadow-[0_0_8px_theme(colors.cyber.purple.DEFAULT)/30] h-12 text-base"
                  >
                    <a 
                      href={link.url} 
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  </Button>
                </div>
              ) : (
                <a 
                  key={index}
                  href={link.url} 
                  className={`block py-3 px-4 text-center rounded-lg transition-colors duration-150 text-base touch-manipulation active:bg-cyber-blue/20
                    ${link.label === 'Talk To History GPT' || link.label === 'TIME MACHINE GPT'
                      ? 'text-cyber-orange font-semibold hover:bg-cyber-dark/50' 
                      : 'text-cyber-gray hover:bg-cyber-dark/50 hover:text-cyber-blue'}`}
                  onClick={() => setIsMenuOpen(false)}
                  target={link.url.startsWith('http') ? "_blank" : "_self"}
                  rel={link.url.startsWith('http') ? "noopener noreferrer" : ""}
                >
                  {link.label}
                </a>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
