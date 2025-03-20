import React from "react";

interface HeroSectionProps2 {
  title: string;
  highlightText: string;
  imagePath: string;
  imageAlt?: string;
  description: string;
}

const BusinessSetupHero: React.FC<HeroSectionProps2> = ({
  title,
  highlightText,
  imagePath,
  imageAlt = "Business Services Illustration",
  description,
}) => {
  return (
    <div className="flex flex-col md:flex-row w-full overflow-hidden bg-white  shadow-lg  md:p-8">
      {/* Left content section */}
      <div className="md:w-1/2 w-full p-6 flex flex-col justify-center bg-white bg-opacity-95">
        <h1 className="text-4xl md:text-6xl font-bold mb-5">
          <span className="text-black">{title}</span>{" "}
          <span className="text-blue-400">{highlightText}</span>
        </h1>
        <p className="text-gray-800 text-lg md:text-lg leading-relaxed">
          {description}
        </p>
      </div>

      {/* Right image section with diagonal cut and shadow */}
      <div className="md:w-1/2 w-full relative">
        <div
          className="absolute inset-0 bg-blue-100 shadow-xl clip-polygon
        style={{
      backgroundColor: 'rgba(173, 216, 230, 0.3)',
      zIndex: 1,
    }} "
        ></div>
        <img
          src={imagePath}
          alt={imageAlt}
          className="w-full h-full object-cover clip-polygon"
        />
      </div>

      <style>
        {`
          .clip-polygon {
            clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);
          }
        `}
      </style>
    </div>
  );
};

export default BusinessSetupHero;
