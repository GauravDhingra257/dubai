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
 * Modified to match the example image with improved image presentation
 */
export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  highlightText,
  description,
  imagePath,
  imageAlt,
  imageFirst = true,
  imageMaxHeight = 500,
}) => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-8 py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <AnimationStyles />

      <div
        className={`flex flex-col ${
          imageFirst ? "md:flex-row" : "md:flex-row-reverse"
        } items-center justify-between gap-8 w-full`}
      >
        <div className="flex-1 space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="text-gray-900">{title}</span>{" "}
            <span className="text-blue-500">{highlightText}</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl animate-fade-in">
            {description}
          </p>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="rounded-lg overflow-hidden ">
            <img
              src={imagePath}
              alt={imageAlt}
              className="w-full h-auto object-cover"
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
 * Modified to remove excessive shadows and effects
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
          <div className="overflow-hidden rounded-lg shadow-md">
            <img
              src={imagePath}
              alt={imageAlt}
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>
        </div>

        <div className="flex-1 space-y-4 animate-fade-in-up">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            {title}
          </h2>
          <p className="text-sm md:text-base text-gray-600">{description}</p>
        </div>
      </div>
    </section>
  );
};
