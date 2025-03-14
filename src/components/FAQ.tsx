
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-cyber-blue/20 last:border-b-0">
      <button
        className="flex justify-between items-center w-full py-5 px-4 text-left text-white hover:text-cyber-blue transition-colors duration-300"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium">{question}</h3>
        <div className="ml-4">
          {isOpen ? <Minus size={18} className="text-cyber-blue" /> : <Plus size={18} />}
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-4 pt-0 text-cyber-gray">{answer}</div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is Historical Headlines GPT?",
      answer: (
        <p>Historical Headlines GPT is an AI tool that transforms users into time-traveling reporters, creating historically accurate news articles that reflect the journalistic style, language, and perspective of any chosen time period.</p>
      )
    },
    {
      question: "How accurate are the historical articles?",
      answer: (
        <p>Historical Headlines GPT prioritizes historical accuracy above all. Every article reflects real historical records with no fabrications or modern interpretations unless Alternate History Mode is specifically requested.</p>
      )
    },
    {
      question: "What time periods can I choose from?",
      answer: (
        <p>You can select any historical time period from ancient civilizations to the late 20th century. The AI adapts its language, formatting, and perspective to match the era you select.</p>
      )
    },
    {
      question: "Can I specify a particular perspective?",
      answer: (
        <p>Yes! You can choose specific perspectives such as "a Byzantine noble," "a French revolutionary," "a WWII journalist," etc. This allows you to explore historical events from multiple viewpoints.</p>
      )
    },
    {
      question: "What is Alternate History Mode?",
      answer: (
        <p>Alternate History Mode allows you to explore "What If?" scenarios while maintaining historical logic and linguistic accuracy. For example, you could request an article from a Confederate newspaper as if the South had won the Civil War.</p>
      )
    },
    {
      question: "How do I get the best results with Historical Headlines GPT?",
      answer: (
        <div>
          <p>For the best results, provide clear details about:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>The specific historical event you want covered</li>
            <li>The exact date or time period</li>
            <li>The desired perspective (e.g., which side of a conflict, social class, etc.)</li>
            <li>The tone and style you want (formal, investigative, propaganda, satirical)</li>
          </ul>
        </div>
      )
    }
  ];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-cyber-blue/5 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="font-cyber text-sm text-cyber-blue">Questions & Answers</span>
          <h2 className="text-4xl font-bold mt-2 mb-6 font-news">Frequently Asked Questions</h2>
          <p className="max-w-2xl mx-auto text-cyber-gray text-lg">
            Everything you need to know about Historical Headlines GPT and how to get the most out of your time-traveling journalism experience.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto cyber-card">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleItem(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
