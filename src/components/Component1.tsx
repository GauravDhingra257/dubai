import React from "react";

// Define the animation styles as a separate component
const AnimationStyles = () => (
  <style
    dangerouslySetInnerHTML={{
      __html: `
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }
      
      @keyframes fade-in {
        from { opacity: 0.7; }
        to { opacity: 1; }
      }
      
      @keyframes fade-in-up {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      @keyframes slide-in {
        from { opacity: 0; transform: translateX(-20px); }
        to { opacity: 1; transform: translateX(0); }
      }
      
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
      
      .animate-fade-in {
        animation: fade-in 1.5s ease-out;
      }
      
      .animate-fade-in-up {
        animation: fade-in-up 1s ease-out;
      }
      
      .animate-slide-in {
        animation: slide-in 1s ease-out;
      }
    `,
    }}
  />
);

/**
 * Props for the HeroSection component
 */
interface HeroSectionProps {
  title: string;
  highlightText: string;
  description: string;
  imagePath: string;
  imageAlt: string;
  imageFirst?: boolean;
  imageMaxHeight?: number;
}

/**
 * HeroSection Component
 * Used for large headline sections with colored text highlight
 */
export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  highlightText,
  description,
  imagePath,
  imageAlt,
  imageFirst = true,
  imageMaxHeight = 700,
}) => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-8 py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <AnimationStyles />

      <div
        className={`flex flex-col ${
          imageFirst ? "md:flex-row" : "md:flex-row-reverse"
        } items-center justify-between gap-8 w-full`}
      >
        <div className="flex-1 space-y-6 transform transition-all duration-500 hover:translate-y-1">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold group">
            <span className="inline-block transition-all duration-300 hover:text-gray-800 hover:scale-105">
              {title}
            </span>{" "}
            <span className="inline-block text-blue-600 transition-all duration-300 hover:text-blue-500 hover:scale-105 relative">
              {highlightText}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-500"></span>
            </span>
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl transition-all duration-300 hover:text-gray-900 animate-fade-in">
            {description}
          </p>
        </div>

        <div className="flex-1 flex justify-center animate-float">
          <div className="overflow-hidden rounded-lg shadow-xl transition-all duration-500 hover:scale-105 hover:rotate-1 relative">
            {/* Light blue shadow effect */}
            <div className="absolute inset-0 -m-2 bg-blue-200 rounded-lg blur-md -z-10 transition-all duration-500 hover:bg-blue-300"></div>
            <img
              src={imagePath}
              alt={imageAlt}
              className="w-full h-auto object-cover transition-all duration-700 hover:brightness-110"
              style={{ maxHeight: `${imageMaxHeight}px` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * Props for the ContentSection component
 */
interface ContentSectionProps {
  title: string;
  description: string;
  imagePath: string;
  imageAlt: string;
  imageFirst?: boolean;
  hasBgColor?: boolean;
}

/**
 * ContentSection Component
 * Used for content sections with the ability to change image position
 */
export const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  description,
  imagePath,
  imageAlt,
  imageFirst = false,
  hasBgColor = false,
}) => {
  return (
    <section className={`py-12 px-4 md:px-8 ${hasBgColor ? "bg-gray-50" : ""}`}>
      <AnimationStyles />
      <div
        className={`flex flex-col ${
          imageFirst ? "md:flex-row" : "md:flex-row-reverse"
        } gap-8 items-center max-w-6xl mx-auto`}
      >
        <div className="flex-1 animate-slide-in">
          <div className="overflow-hidden rounded-lg transition-all duration-500 hover:shadow-2xl hover:brightness-110 relative">
            {/* Light blue shadow effect */}
            <div className="absolute inset-0 -m-2 bg-blue-200 rounded-lg blur-md -z-10 opacity-70 transition-all duration-500 hover:bg-blue-300 hover:opacity-90"></div>
            <img
              src={imagePath}
              alt={imageAlt}
              className="w-full h-64 md:h-80 object-cover transition-all duration-700 hover:scale-105 hover:rotate-1"
            />
          </div>
        </div>

        <div className="flex-1 space-y-4 transform transition-all duration-500 hover:translate-y-1 animate-fade-in-up">
          <h2
            className="text-2xl md:text-3xl font-bold text-gray-800 relative inline-block 
            after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 
            after:bg-blue-500 hover:after:w-full after:transition-all after:duration-500 
            transition-all duration-300 hover:text-blue-700"
          >
            {title}
          </h2>
          <p className="text-sm md:text-base text-gray-600 transition-all duration-300 hover:text-gray-900">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};
