import React, { useState, useEffect } from "react";

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
    <div className="flex flex-row items-center justify-between max-w-5xl mx-auto p-6">
      {/* Left side - Image with shadow */}
      <div className="relative h-72 w-lg shadow-lg rounded">
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

      {/* Right side - Text */}
      <div className="ml-12 w-96 mt-22">
        <p className="text-blue-600 text-center font-medium">{subtitle}</p>
        <h1 className="font-lora text-4xl font-bold text-black">{title}</h1>

        {/* Slider indicator below the heading that changes with the images */}
        <div className="mt-4 flex items-center mt-42">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-0.5  w-15 transition-all duration-300 ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnhancedImageSlider;
