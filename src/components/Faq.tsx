import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";

const FAQAccordion = () => {
  const [activeItem, setActiveItem] = useState("free-zone-company");

  const faqItems = [
    {
      id: "business-licenses",
      question: "What types of business licenses are available in the UAE?",
      answer:
        "The UAE offers several types of business licenses, depending on your industry:\n\nCommercial License – For trading, general business, and retail activities.\n\n Industrial License – For manufacturing and industrial operations.\n\nProfessional License – For service-based businesses like consulting and brokerage.",
    },
    {
      id: "foreigner-ownership",
      question: "Can a foreigner own 100% of a business in the UAE?",
      answer:
        "Yes. The UAE allows 100% foreign ownership in most sectors under the Foreign Direct Investment (FDI) Law. However, certain strategic industries, such as defense and energy, may still require an Emirati partner.",
    },
    {
      id: "free-zone-company",
      question:
        "What is the difference between a free zone company and a mainland company?",
      answer:
        "Free Zone Company – Offers 100% foreign ownership, tax incentives, and streamlined import/export processes. However, direct business within the UAE mainland is restricted unless a local distributor is used.\n\nMainland Company – Can operate anywhere in the UAE, work with government contracts, and engage in the local market. Some industries may still require local sponsorship.",
    },
    {
      id: "setup-time",
      question: "How long does it take to set up a business in the UAE?",
      answer:
        "The setup process can take anywhere from a few days to 4 weeks, depending on the license type and location. Some free zones offer fast-track registration that allows businesses to start operating in as little as 48 hours.",
    },
    {
      id: "physical-office",
      question: "Do I need a physical office to start a business in the UAE?",
      answer:
        "Yes, most businesses need a registered address. However, many free zones offer flexible options such as virtual offices, co-working spaces, and flexi-desks to meet legal requirements at a lower cost.",
    },
    {
      id: "corporate-taxes",
      question: "Are there any corporate taxes in the UAE?",
      answer:
        "Businesses earning over AED 375,000 annually are subject to a 9% corporate tax.\n\nLarge multinational enterprises (MNEs) with global revenues exceeding €750 million are now subject to a 15% Domestic Minimum Top-Up Tax (DMTT) under the OECD global tax framework, effective January 2025.\n\nFree zone companies engaged in qualifying activities may still benefit from tax exemptions under specific incentive programs..",
    },
    {
      id: "setup-cost",
      question: "How much does it cost to start a business in the UAE?",
      answer:
        "The cost varies depending on the license type, location, and visa requirements. On average:\n\nFree zone setup: Starts from AED 5,800 (varies by package and jurisdiction).\n\nMainland setup: Typically ranges from AED 8,000 to AED 50,000+, depending on the business activity and office requirements.",
    },
    {
      id: "benefits",
      question:
        "What are the key benefits of setting up a business in the UAE?",
      answer:
        "100% foreign ownership in most sectors.\n\nLow taxation – no personal income tax and corporate tax exemptions for certain businesses.\n\nStrategic location connecting global markets in the Middle East, Africa, and South Asia.\n\nWorld-class infrastructure and business-friendly policies.\n\nNo foreign exchange controls, allowing seamless international transactions.\n\nExtensive double tax treaties with multiple countries.",
    },
  ];

  const handleClick = (id) => {
    setActiveItem(id === activeItem ? null : id);
  };

  return (
    <div className="bg-white py-16 px-6">
      <Fade triggerOnce direction="up" cascade damping={0.1}>
        <div className="max-w-6xl mx-auto mb-12">
          <h2 className="text-5xl font-normal text-center px-12">
            Frequently Asked{" "}
            <span className="text-blue-400 font-semibold">Question</span>
          </h2>
        </div>
      </Fade>
      <div className="space-y-4 max-w-3xl justify-center mx-auto">
        <Fade triggerOnce direction="up" cascade damping={0.1}>
          {faqItems.map((item) => (
            <div
              key={item.id}
              className={`border rounded-lg overflow-hidden transition-all duration-300 ease-in-out ${
                activeItem === item.id
                  ? "border-l-blue-400 border-0 border-l-8 shadow-xl"
                  : "border-gray-200"
              }`}
            >
              <button
                className="flex justify-between items-center w-full p-4 text-left transition-colors duration-300"
                onClick={() => handleClick(item.id)}
              >
                <span
                  className={`font-medium transition-colors duration-300 ${
                    activeItem === item.id ? "text-blue-400" : "text-gray-800"
                  }`}
                >
                  {item.question}
                </span>
                <span
                  className={`text-xl transform transition-transform duration-300 ${
                    activeItem === item.id ? "rotate-180" : "rotate-0"
                  }`}
                >
                  {activeItem === item.id ? "−" : "+"}
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  activeItem === item.id
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-4 pb-4 text-gray-600">
                    {item.answer.split("\n\n").map((paragraph, idx) => (
                      <p key={idx} className="mb-2">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Fade>
      </div>
    </div>
  );
};

export default FAQAccordion;
