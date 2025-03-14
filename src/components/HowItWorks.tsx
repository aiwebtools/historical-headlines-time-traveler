
import React from 'react';
import { Calendar, User, PenTool, Newspaper } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Calendar className="text-cyber-blue" size={32} />,
      title: "Select Historical Event",
      description: "Choose any historical event like 'The Fall of Constantinople' or 'The Moon Landing'."
    },
    {
      icon: <User className="text-cyber-blue" size={32} />,
      title: "Choose Perspective",
      description: "Select a viewpoint such as 'A Byzantine noble' or 'A NASA scientist'."
    },
    {
      icon: <PenTool className="text-cyber-blue" size={32} />,
      title: "Set Tone & Style",
      description: "Pick from formal, investigative, propaganda, or satirical styles."
    },
    {
      icon: <Newspaper className="text-cyber-blue" size={32} />,
      title: "Generate Article",
      description: "Receive a historically accurate news article written in the authentic style of the era."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyber-blue/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-cyber-purple/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="font-cyber text-sm text-cyber-blue">User Guide</span>
          <h2 className="text-4xl font-bold mt-2 mb-6 font-news">How It Works</h2>
          <p className="max-w-2xl mx-auto text-cyber-gray text-lg">
            Transform into a time-traveling reporter in just a few simple steps. Create historically accurate news articles with authentic period language and formatting.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="cyber-card relative group">
              {/* Step number indicator */}
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-cyber-blue/90 flex items-center justify-center font-cyber font-bold text-cyber-dark z-10">
                {index + 1}
              </div>
              
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-cyber-blue to-transparent z-0" />
              )}
              
              <div className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <h3 className="text-xl font-cyber font-bold mb-3">{step.title}</h3>
                <p className="text-cyber-gray">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://chatgpt.com/g/g-67d47764b4488191aa3716588871b65a-historical-headlines-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="cyber-button mx-auto"
          >
            Try Historical Headlines GPT
          </a>
        </div>
        
        {/* Example Articles Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-news font-bold text-center mb-8">Example Article Formats by Era</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="news-paper p-6 rounded shadow-lg transform rotate-[-1deg] text-black">
              <div className="border-b border-black pb-2 mb-3">
                <h4 className="font-news text-xl font-bold">ROMAN TIMES</h4>
                <p className="font-news text-xs">~50 BC</p>
              </div>
              <p className="font-news text-sm">Imperial decree or scroll-recorded dispatch, conveying Caesar's victories...</p>
            </div>
            
            <div className="news-paper p-6 rounded shadow-lg transform rotate-[1deg] text-black">
              <div className="border-b border-black pb-2 mb-3">
                <h4 className="font-news text-xl font-bold">MEDIEVAL CHRONICLE</h4>
                <p className="font-news text-xs">~1200 AD</p>
              </div>
              <p className="font-news text-sm">Town crier's bulletin or monastic chronicle, recounting tales of brave knights...</p>
            </div>
            
            <div className="news-paper p-6 rounded shadow-lg transform rotate-[-0.5deg] text-black">
              <div className="border-b border-black pb-2 mb-3">
                <h4 className="font-news text-xl font-bold">THE WARTIME HERALD</h4>
                <p className="font-news text-xs">~1940s</p>
              </div>
              <p className="font-news text-sm">Wartime propaganda piece reporting on the brave efforts of Allied forces...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
