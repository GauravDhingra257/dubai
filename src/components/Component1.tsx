import React from "react";
import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";

interface HeroSectionProps {
  title: string;
  highlightText: string;
  description: string;
  imagePath: string;
  imageAlt: string;
  imageFirst?: boolean;
  imageMaxHeight?: number;
  triangleImage?: any;
  buttontext?: string;
  buttonlink?: string;
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
  triangleImage,
  buttontext,
  buttonlink,
}) => {
  const navigate = useNavigate();
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center gap-8 py-16 px-4 md:px-8  mx-auto ">
      {/* <AnimationStyles /> */}
      {triangleImage && (
        <img
          src={triangleImage}
          className={`hidden md:block absolute top-0 z-20 ${
            !imageFirst ? "left-0" : "right-0"
          }  h-72`}
        ></img>
      )}
      <div
        className={`flex flex-col-reverse max-w-6xl ${
          imageFirst ? "md:flex-row" : "md:flex-row-reverse"
        } items-center justify-between gap-8`}
      >
        <div className="flex-1 space-y-6 transform transition-all duration-500">
          <Fade triggerOnce direction="up" cascade damping={0.1}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold group">
              <span className="inline-block transition-all duration-300 font-medium font-lora">
                {title}
              </span>{" "}
              <span className="inline-block text-blue-400 transition-all duration-300 relative font-medium font-lora">
                {highlightText}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-500"></span>
              </span>
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl animate-fade-in whitespace-pre-line">
              {description}
            </p>
            <button
              className="px-8 py-2 text-white rounded-lg bg-gradient-to-r from-[#2CAFF3] to-[#1975BB] hover:cursor-pointer mt-4"
              onClick={() => {
                if (buttonlink) {
                  window.open(buttonlink, "_blank");
                } else {
                  navigate("/book-appointment");
                }
              }}
            >
              {buttontext}
            </button>
          </Fade>
        </div>

        <div className="flex-1 flex justify-center">
          <Fade
            triggerOnce
            direction={!imageFirst ? "left" : "right"}
            cascade
            damping={0.1}
          >
            <div className="rounded-lg overflow-hidden ">
              <img
                loading="lazy"
                src={imagePath}
                alt={imageAlt}
                className="w-full md:h-auto object-cover h-108"
                style={{ maxHeight: `${imageMaxHeight}px` }}
              />
            </div>
          </Fade>
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
  triangleImage?: any;
  buttontext?: string;
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
  triangleImage,
  buttontext,
}) => {
  const navigate = useNavigate();
  return (
    <section
      className={`py-12 relative px-4 md:px-8 ${
        hasBgColor ? "bg-gray-50" : ""
      }`}
    >
      {triangleImage && (
        <img
          src={triangleImage}
          className={`hidden md:block absolute top-0 z-20 ${
            imageFirst ? "left-0" : "right-0"
          }  h-72`}
        ></img>
      )}
      {/* <AnimationStyles /> */}
      <div
        className={`flex flex-col ${
          imageFirst ? "md:flex-row" : "md:flex-row-reverse"
        } gap-8 items-center max-w-6xl mx-auto`}
      >
        <div className="flex-1 animate-slide-in">
          <Fade
            triggerOnce
            direction={imageFirst ? "left" : "right"}
            cascade
            damping={0.1}
          >
            <div className="overflow-hidden rounded-lg shadow-md">
              <img
                loading="lazy"
                src={imagePath}
                alt={imageAlt}
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>
          </Fade>
        </div>

        <div className="flex-1 space-y-4 transform transition-all duration-500 animate-fade-in-up">
          <Fade triggerOnce direction="up" cascade damping={0.1}>
            <h2
              className="text-2xl md:text-3xl font-bold text-gray-800 relative inline-block 
            after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 
            after:bg-blue-400 after:transition-all after:duration-500 
            transition-all duration-300"
            >
              {title}
            </h2>
            <p className="text-sm md:text-base text-gray-600">{description}</p>
            <button
              className="px-8 py-2 text-white rounded-lg bg-gradient-to-r from-[#2CAFF3] to-[#1975BB] hover:cursor-pointer mt-4"
              onClick={() => navigate("/book-appointment")}
            >
              {buttontext}
            </button>
          </Fade>
        </div>
      </div>
    </section>
  );
};
