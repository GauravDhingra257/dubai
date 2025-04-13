import React from "react";
import ContactForm from "./ContactForm";
import { Fade } from "react-awesome-reveal";

const BusinessGoalsSection: React.FC = () => {
  const businessGoals = [
    "Digital Transformation / BPO",
    "Modernise Legacy Systems &Technology",
    "Develop Robust Apps & Products",
    "Scale or Building In-House Tech Tearms",
    "Unlock Value With Data & Analyticcs",
    "Create Stunning Digital Experiences",
  ];

  return (
    <div className="bg-white py-12 px-8 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-25">
        {/* Left Side - Business Goals */}
        <div className="w-full md:w-1/2 p-3 ">
        <Fade triggerOnce direction="left" cascade damping={0.1}>
          <h2 className="text-3xl font-bold mb-8">
            What's your immediate business goal
          </h2>

          <div className="space-y-4">
            {businessGoals.map((goal, index) => (
              <div key={index} className="flex items-center p-2">
                <div className="h-6 w-6 rounded-full bg-blue-400 flex items-center justify-center mr-3">
                  <svg
                    className="h-4 w-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <span className="text-lg">{goal}</span>
              </div>
            ))}
          </div>
        </Fade>
        </div>

        {/* Right Side - Contact Form */}
        <div className="w-full md:w-1/2">

          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default BusinessGoalsSection;
