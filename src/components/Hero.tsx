
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Clock, BookOpen, FileText } from 'lucide-react';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Simple animation for the header text
    const chars = titleRef.current?.querySelectorAll('.char');
    if (!chars) return;
    
    chars.forEach((char, index) => {
      setTimeout(() => {
        char.classList.add('show');
      }, 100 * index);
    });
  }, []);

  const headline = "Breaking News Through Time";
  const headlineArray = headline.split('').map((char, index) => (
    <span key={index} className={`char opacity-0 transition-opacity duration-300 ${char === ' ' ? 'mr-2' : ''}`} style={{transitionDelay: `${index * 100}ms`}}>
      {char}
    </span>
  ));

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 pb-10 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <div className="absolute inset-0 bg-news-texture opacity-5" />
      
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-cyber-blue/5 to-cyber-purple/5 blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
            <div className="inline-block px-4 py-1 mb-6 border border-cyber-blue/30 rounded-full bg-cyber-dark-blue/50 backdrop-blur-sm">
              <span className="font-cyber text-sm text-cyber-gray">Time-Travel Journalism AI</span>
            </div>
            
            <h1 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 font-news leading-tight">
              {headlineArray}
              <span className="block mt-2 text-cyber-blue animate-text-flicker">Historical Headlines GPT</span>
            </h1>
            
            <p className="text-lg md:text-xl text-cyber-gray mb-8 max-w-2xl">
              Transform into a time-traveling reporter. Create historically accurate news articles that capture the authentic language, style, and perspective of any era in history.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="https://chatgpt.com/g/g-67d47764b4488191aa3716588871b65a-historical-headlines-gpt" 
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-button group"
              >
                Experience Now
                <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
              </a>
              
              <a 
                href="#how-it-works" 
                className="px-6 py-2 font-cyber font-bold text-white bg-transparent border-2 border-cyber-purple hover:bg-cyber-purple/20 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 px-6">
            <div className="relative max-w-md mx-auto">
              {/* Newspaper effect */}
              <div className="relative news-paper p-8 rounded shadow-xl transform rotate-1 z-20">
                <div className="border-b-2 border-black pb-2 mb-4">
                  <h2 className="font-news text-black text-2xl font-bold text-center">THE HISTORICAL TIMES</h2>
                  <p className="font-news text-black text-sm text-center">July 20, 1969</p>
                </div>
                <h3 className="font-news text-black text-3xl font-bold mb-3">MAN WALKS ON MOON</h3>
                <h4 className="font-news text-black text-xl mb-3">Neil Armstrong Steps onto Lunar Surface</h4>
                <p className="font-news text-black">Astronaut Neil Armstrong took "one small step for a man, one giant leap for mankind" as he became the first human to set foot on the lunar surface today...</p>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 -mr-4 -mt-4 bg-cyber-blue/20 w-full h-full rounded blur-md -z-10 transform -rotate-3"></div>
              <div className="absolute -bottom-4 -left-4 bg-cyber-purple/10 w-full h-full rounded-lg blur-lg -z-10 transform rotate-6"></div>
            </div>
          </div>
        </div>
        
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="cyber-card">
            <Clock className="text-cyber-blue mb-4" size={28} />
            <h3 className="text-xl font-bold font-cyber mb-2">Authentic Period Language</h3>
            <p className="text-cyber-gray">Experience history with vocabulary, syntax, and journalistic conventions that match any selected era.</p>
          </div>
          
          <div className="cyber-card">
            <BookOpen className="text-cyber-blue mb-4" size={28} />
            <h3 className="text-xl font-bold font-cyber mb-2">Historical Accuracy</h3>
            <p className="text-cyber-gray">Every report reflects real historical records with no fabrications or modern interpretations.</p>
          </div>
          
          <div className="cyber-card">
            <FileText className="text-cyber-blue mb-4" size={28} />
            <h3 className="text-xl font-bold font-cyber mb-2">Immersive Formatting</h3>
            <p className="text-cyber-gray">Articles are structured according to the standards of the time, from ancient scrolls to wartime bulletins.</p>
          </div>
        </div>
      </div>
      
      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-cyber-dark to-transparent" />
    </section>
  );
};

export default Hero;
