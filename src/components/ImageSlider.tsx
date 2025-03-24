import React, { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import SliderTriangle from "../assets/images/triangles/SliderTriangle.png";
interface ImageSliderProps {
  subtitle: string;
  images: string[];
  title: string;
}

const EnhancedImageSlider: React.FC<ImageSliderProps> = ({
  subtitle,
  images,
  title,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide functionality
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  // Guard against empty images array
  if (!images || images.length === 0) {
    return <div className="p-4">Please provide images for the slider.</div>;
  }

  return (
    <div className="relative">
      <img loading="lazy" 
        src={SliderTriangle}
        className="hidden md:block md:absolute md:top-1/2 -translate-y-1/2 md:left-0 md:h-72 z-20"
      />

<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto p-6 relative">

      {/* Left side - Image with shadow */}
      <Fade triggerOnce direction="left" >
      <div className="relative h-72 w-full shadow-lg rounded">

        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 h-full w-full transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="h-full w-full object-cover rounded"
            />
          </div>
        ))}
      </div>
      </Fade>

      {/* Right side - Text */}
      <div className="w-full">
        <Fade triggerOnce direction="right" cascade damping={0.1}>
        <p className="text-blue-400 text-center font-medium md:text-left">{subtitle}</p>
        <h1 className="font-lora text-4xl font-bold text-black text-center md:text-left">{title}</h1>

        {/* Slider indicator below the heading that changes with the images */}
        <div className="mt-6 md:mt-36 flex items-center justify-center md:justify-start">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-0.5 w-15 transition-all duration-300 ${
                index === currentIndex ? "bg-blue-400" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
        </Fade>
      </div>
    </div>
    </div>
  );
};

export default EnhancedImageSlider;
