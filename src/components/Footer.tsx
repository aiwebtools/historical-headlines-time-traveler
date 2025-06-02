
import React from 'react';
import { Phone, Mail, ExternalLink } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { label: 'USE Historical Headlines GPT', url: 'https://chatgpt.com/g/g-67d47764b4488191aa3716588871b65a-historical-headlines-gpt' },
    { label: 'You may also like Talk To History GPT', url: 'https://talk-to-history-gpt.lovable.app/' },
    { label: 'Check out TIME MACHINE GPT', url: 'https://time-machine-gpt.lovable.app/' },
    { label: 'FAQ', url: '#faq' },
    { label: 'Disclaimer', url: '#disclaimer' },
    { label: 'More AI Tools', url: 'https://www.aiwebtools.ai' },
  ];

  return (
    <footer className="bg-cyber-dark-blue relative pt-16 pb-8">
      {/* Top decorative border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-orange" />
      
      <div className="container mx-auto px-4">
        {/* Small disclaimer notice */}
        <div className="text-center mb-8 p-4 bg-cyber-blue/10 rounded-lg border border-cyber-blue/20">
          <p className="text-cyber-gray text-sm">
            <strong className="text-cyber-blue">Notice:</strong> This tool is for informational, educational, and research purposes only.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <Logo size="lg" className="mb-4" />
            <p className="text-cyber-gray mt-4 max-w-sm">
              Experience history as it happened with Historical Headlines GPT. Create historically accurate news articles from any era with authentic period language and formatting.
            </p>
            <div className="mt-6 flex flex-col space-y-2">
              <a 
                href="tel:+14758008096" 
                className="flex items-center text-cyber-gray hover:text-cyber-blue transition-colors"
              >
                <Phone size={16} className="mr-2" />
                (475) 800-8096
              </a>
              <a 
                href="mailto:Contact@ai-webtools.com" 
                className="flex items-center text-cyber-gray hover:text-cyber-blue transition-colors"
              >
                <Mail size={16} className="mr-2" />
                Contact@ai-webtools.com
              </a>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-xl font-cyber font-bold mb-6 text-white">Quick Links</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {footerLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url} 
                  className="flex items-center text-cyber-gray hover:text-cyber-blue transition-colors"
                  target={link.url.startsWith('http') ? "_blank" : "_self"}
                  rel={link.url.startsWith('http') ? "noopener noreferrer" : ""}
                >
                  <span className="text-cyber-blue mr-2">→</span>
                  {link.label}
                  {link.url.startsWith('http') && (
                    <ExternalLink size={14} className="ml-1 opacity-70" />
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-cyber-blue/20 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-cyber-gray text-sm mb-4 md:mb-0">
            © {currentYear} <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="text-cyber-blue hover:text-cyber-blue-dark transition-colors">AI WEB TOOLS LLC</a> All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            <a href="https://openai.com/policies/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-cyber-gray hover:text-cyber-blue transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="https://aiwebtools.lovable.app/disclaimers" target="_blank" rel="noopener noreferrer" className="text-cyber-gray hover:text-cyber-blue transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
        
        {/* More AI Tools Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <a 
            href="https://www.aiwebtools.ai" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <span className="font-cyber font-bold text-sm">More AI Tools</span>
            <div className="ml-2 w-5 h-5 rounded-full bg-white flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-300">
              <ExternalLink size={12} className="text-cyber-purple" />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
