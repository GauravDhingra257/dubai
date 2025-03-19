import React, { useState } from 'react';

const FAQAccordion = () => {
  const [activeItem, setActiveItem] = useState('free-zone-company');
  
  const faqItems = [
    {
      id: 'business-licenses',
      question: 'What are the types of business licenses available in the UAE?',
      answer: 'The UAE offers various business licenses including Commercial License, Industrial License, Professional License, Tourism License, and E-commerce License. Each license type caters to different business activities and comes with specific regulations and benefits.'
    },
    {
      id: 'foreigner-ownership',
      question: 'Can a foreigner own 100% of a business in the UAE?',
      answer: 'Yes, foreigners can own 100% of businesses in the UAE since the implementation of the new Foreign Direct Investment Law in 2020. This applies to businesses in most sectors, though some strategic sectors may still require Emirati partnership.'
    },
    {
      id: 'free-zone-company',
      question: 'What is the difference between a free zone company and a mainland company?',
      answer: 'Free Zone Company: Operates within a specific free zone area, offers 100% foreign ownership, tax benefits, and simplified import/export procedures, but cannot trade directly within the UAE market.\n\nMainland Company: Can conduct business anywhere in the UAE and engage in government contracts but may require local sponsorship depending on the business activity.'
    },
    {
      id: 'setup-time',
      question: 'How long does it take to set up a business in the UAE?',
      answer: 'The timeframe for setting up a business in the UAE typically ranges from 1-4 weeks depending on the type of license, location (free zone vs mainland), and completeness of your documentation. Some free zones offer fast-track options that can expedite the process.'
    },
    {
      id: 'physical-office',
      question: 'Do I need a physical office to start a business in the UAE?',
      answer: 'Yes, most business setups in the UAE require a physical address, though requirements vary. Free zones often offer flexible options like flexi-desks, shared workspaces, or virtual offices that satisfy legal requirements while minimizing costs for startups.'
    },
    {
      id: 'corporate-taxes',
      question: 'Are there any corporate taxes in the UAE?',
      answer: 'The UAE implemented a federal corporate tax of 9% starting June 2023 for businesses with profits above AED 375,000. Free zone companies with qualifying activities can still benefit from tax incentives and exemptions under the free zone tax holiday programs.'
    },
    {
      id: 'setup-cost',
      question: 'What is the cost of setting up a business in the UAE?',
      answer: 'Business setup costs vary widely from AED 15,000 to AED 50,000+ depending on factors like license type, location, visa requirements, and office space. Free zones often have package deals while mainland setups typically involve separate fees for various permits and approvals.'
    },
    {
      id: 'benefits',
      question: 'What are the key benefits of setting up a business in the UAE?',
      answer: 'Key benefits include strategic geographic location, world-class infrastructure, minimal taxation, currency stability, 100% foreign ownership options, no foreign exchange controls, extensive double tax treaties, and access to a diverse consumer market across the Middle East, Africa, and South Asia.'
    }
  ];

  const handleClick = (id) => {
    setActiveItem(id === activeItem ? null : id);
  };

  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto mb-12">
        <h2 className="text-4xl font-bold text-center">
          Frequently Asked <span className="text-blue-400">Question</span>
        </h2>
      </div>
      <div className="space-y-4 max-w-3xl justify-center mx-auto">
        {faqItems.map((item) => (
          <div 
            key={item.id} 
            className={`border rounded-lg overflow-hidden transition-all duration-300 ease-in-out ${
              activeItem === item.id ? 'border-l-blue-400 border-0 border-l-8 shadow-xl' : 'border-gray-200'
            }`}
          >
            <button
              className="flex justify-between items-center w-full p-4 text-left transition-colors duration-300"
              onClick={() => handleClick(item.id)}
            >
              <span className={`font-medium transition-colors duration-300 ${
                activeItem === item.id ? 'text-blue-400' : 'text-gray-800'
              }`}>
                {item.question}
              </span>
              <span className={`text-xl transform transition-transform duration-300 ${
                activeItem === item.id ? 'rotate-180' : 'rotate-0'
              }`}>
                {activeItem === item.id ? '−' : '+'}
              </span>
            </button>
            
            <div className={`grid transition-all duration-300 ease-in-out ${
              activeItem === item.id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
            }`}>
              <div className="overflow-hidden">
                <div className="px-4 pb-4 text-gray-600">
                  {item.answer.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="mb-2">{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;