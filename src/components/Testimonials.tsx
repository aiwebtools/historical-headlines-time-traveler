
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Emily Robinson",
      role: "History Professor",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      quote: "Historical Headlines GPT is a game-changer for my classroom. My students are far more engaged with history when they can read news articles written in the authentic style of the era.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Historical Fiction Writer",
      avatar: "https://randomuser.me/api/portraits/men/46.jpg",
      quote: "This tool has revolutionized my research process. Being able to get a feel for the journalistic style of any period helps me craft more authentic dialogue and scene settings.",
      rating: 5
    },
    {
      name: "James Wilson",
      role: "History Enthusiast",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
      quote: "I've been fascinated by how differently events were reported across various time periods. This tool gives me a new perspective on historical events I thought I knew well.",
      rating: 4
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-cyber-purple/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-cyber-blue/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="font-cyber text-sm text-cyber-blue">User Experiences</span>
          <h2 className="text-4xl font-bold mt-2 mb-6 font-news">What People Are Saying</h2>
          <p className="max-w-2xl mx-auto text-cyber-gray text-lg">
            See how Historical Headlines GPT is transforming the way people explore and understand history.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="cyber-card hover:translate-y-[-5px] transition-transform duration-300">
              <div className="flex items-start mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover border-2 border-cyber-blue"
                  loading="lazy"
                />
                <div className="ml-4">
                  <h3 className="font-cyber font-bold text-white">{testimonial.name}</h3>
                  <p className="text-cyber-gray text-sm">{testimonial.role}</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${i < testimonial.rating ? 'text-cyber-orange fill-cyber-orange' : 'text-cyber-gray'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-cyber-gray italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://chatgpt.com/g/g-67d47764b4488191aa3716588871b65a-historical-headlines-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 font-cyber font-bold text-white bg-gradient-to-r from-cyber-blue to-cyber-purple hover:from-cyber-blue-dark hover:to-cyber-purple transition-all duration-300 shadow-lg"
          >
            Experience Historical Headlines GPT
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
