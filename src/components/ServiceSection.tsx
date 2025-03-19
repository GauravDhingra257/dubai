import React, { useEffect, useState } from "react";
import partner1 from "../assets/images/ourPartners/partner1.png";
import partner2 from "../assets/images/ourPartners/partner2.png";
import partner3 from "../assets/images/ourPartners/partner3.png";
import partner4 from "../assets/images/ourPartners/partner4.png";
import partner5 from "../assets/images/ourPartners/partner5.png";
const patners = [partner1, partner2, partner3, partner4, partner5];
import haVideo from "../assets/video/main.mp4";
const services = [
  { title: "Business Setup", image: "https://picsum.photos/400/300?random=1" },
  { title: "Visa Services", image: "https://picsum.photos/400/300?random=2" },
  { title: "Bank Account", image: "https://picsum.photos/400/300?random=3" },
  {
    title: "Company Liquidation",
    image: "https://picsum.photos/400/300?random=4",
  },
];

const ServicesSection = () => {
  return (
    <div className="py-10 px-6">
      {/* Services Section */}
      <h2 className="text-3xl font-semibold text-center">
        Main <span className="text-blue-400">Services</span>
      </h2>

      <div className="mt-8  max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center mx-auto ">
        {services.map((service, index) => (
          <div key={index} className="relative group overflow-hidden">
            {/* Image container with gradient overlay */}
            <div className="relative w-64 h-80">
              <img
                src={service.image}
                alt={service.title}
                className="object-cover w-full h-full rounded-lg"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent rounded-lg" />
            </div>

            {/* Text content */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-white text-xl font-semibold">
                {service.title}
              </h3>
            </div>

            {/* Hover effect */}
            <div className="absolute inset-0 bg-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;

import { useRef } from "react";

const testimonials = [
  {
    name: "GOLDEN SEA Ltd",
    date: "2024-11-12",
    image: "https://picsum.photos/400/300?random=4",
    feedback:
      "Thank you very much Mr. Yasser. The process was so fast... your follow-up was amazing and the cost was very reasonable.",
    rating: 5,
  },
  {
    name: "GOLDEN SEA Ltd",
    date: "2024-11-12",
    image: "https://picsum.photos/400/300?random=4",
    feedback:
      "Fast process and excellent customer service. Highly recommended!",
    rating: 4,
  },
  {
    name: "GOLDEN SEA Ltd",
    date: "2024-11-12",
    image: "https://picsum.photos/400/300?random=4",
    feedback: "Very professional and reliable service. Will use again!",
    rating: 5,
  },
  {
    name: "GOLDEN SEA Ltd",
    date: "2024-11-12",
    image: "https://picsum.photos/400/300?random=4",
    feedback:
      "Fast process and excellent customer service. Highly recommended!",
    rating: 4,
  },
  {
    name: "GOLDEN SEA Ltd",
    date: "2024-11-12",
    image: "https://picsum.photos/400/300?random=4",
    feedback: "Very professional and reliable service. Will use again!",
    rating: 5,
  },
  {
    name: "GOLDEN SEA Ltd",
    date: "2024-11-12",
    image: "https://picsum.photos/400/300?random=4",
    feedback:
      "Fast process and excellent customer service. Highly recommended!",
    rating: 4,
  },
  {
    name: "GOLDEN SEA Ltd",
    date: "2024-11-12",
    image: "https://picsum.photos/400/300?random=4",
    feedback: "Very professional and reliable service. Will use again!",
    rating: 5,
  },
  {
    name: "GOLDEN SEA Ltd",
    date: "2024-11-12",
    image: "https://picsum.photos/400/300?random=4",
    feedback:
      "Fast process and excellent customer service. Highly recommended!",
    rating: 4,
  },
  {
    name: "GOLDEN SEA Ltd",
    date: "2024-11-12",
    image: "https://picsum.photos/400/300?random=4",
    feedback: "Very professional and reliable service. Will use again!",
    rating: 5,
  },
];

export function Testimonials() {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(1); // 1 for right, -1 for left

  // Auto scroll functionality
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const autoScroll = () => {
      if (!isDragging && scrollContainer) {
        const maxScroll =
          scrollContainer.scrollWidth - scrollContainer.clientWidth;

        // Check if we've reached the ends
        if (scrollContainer.scrollLeft >= maxScroll) {
          setScrollDirection(-1); // Change direction to left
        } else if (scrollContainer.scrollLeft <= 0) {
          setScrollDirection(1); // Change direction to right
        }

        // Perform the scroll
        scrollContainer.scrollLeft += 1 * scrollDirection;
      }
    };

    // Set up the interval for smooth scrolling
    const scrollInterval = setInterval(autoScroll, 20);

    // Cleanup
    return () => {
      clearInterval(scrollInterval);
    };
  }, [isDragging, scrollDirection]);

  const startDragging = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current!.offsetLeft);
    setScrollLeft(scrollRef.current!.scrollLeft);
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current!.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current!.scrollLeft = scrollLeft - walk;
  };
  const scrollStyle = {
    msOverflowStyle: "none", // IE and Edge
    scrollbarWidth: "none", // Firefox
    WebkitOverflowScrolling: "touch",
    "&::-webkit-scrollbar": {
      // Chrome, Safari, Opera
      display: "none",
    },
  } as React.CSSProperties;

  return (
    <div className="bg-gray-100 py-16 px-6 mt-10">
      {/* Header in Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto text-center lg:text-left">
        <h2 className="text-3xl font-semibold">
          What our <span className="text-blue-400">Clients Say</span>
        </h2>
        <p className="text-gray-600 col-span-2">
          Golden Visa Dubai allows people to broaden their horizons and become
          UAE residents. The main criteria for eligibility include investors,
          business owners, doctors, engineers, exceptional students, and
          humanitarian pioneers.
        </p>
      </div>

      {/* Scrollable Testimonials */}
      <div
        className="relative mt-8 overflow-x-auto"
        ref={scrollRef}
        style={scrollStyle}
        onMouseDown={startDragging}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
        onMouseMove={handleMouseMove}
      >
        <div className="flex space-x-6 px-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg min-w-[300px] max-w-xs select-none"
            >
              {/* Profile */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.date}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex mt-2 text-yellow-500">
                {"⭐".repeat(testimonial.rating)}
              </div>

              {/* Feedback */}
              <p className="mt-4 text-gray-700">{testimonial.feedback}</p>

              {/* Read More */}
              <a href="#" className="text-blue-400 mt-4 block font-semibold">
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
const ValueAddedService = [
  {
    name: "Account and Bookkeeping",
    image: "https://picsum.photos/300/400?random=1",
  },
  {
    name: "Branding and Marketing",
    image: "https://picsum.photos/300/400?random=2",
  },
  {
    name: "Property Conveyancing",
    image: "https://picsum.photos/300/400?random=3",
  },
  {
    name: "Power of Attorney",
    image: "https://picsum.photos/300/400?random=4",
  },
];
const vas2 = [
  { name: "Nominee Director", image: "https://picsum.photos/300/400?random=5" },
  {
    name: "Mortgage Financing",
    image: "https://picsum.photos/300/400?random=6",
  },
  { name: "Insurance", image: "https://picsum.photos/300/400?random=7" },
  { name: "HR Consultancy", image: "https://picsum.photos/300/400?random=8" },
];

export function ValueAddedServices() {
  return (
    <div className="py-16 px-6">
      {/* Title */}
      <h2 className="text-3xl font-semibold text-center">
        Value Added <span className="text-blue-400">Services</span>
      </h2>

      {/* Services Grid */}
      <div className="mt-8 grid grid-cols-2 grid-rows-3 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl md:max-h-[600px] mx-auto">
        {ValueAddedService.map((service, index) => (
          <div
            key={index}
            className="relative group rounded-lg overflow-hidden  md:row-span-2" // Fixed height for all images
          >
            {/* Image */}
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-full object-cover rounded-lg"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

            {/* Text */}
            <p className="absolute bottom-4 left-4 text-white font-semibold">
              {service.name}
            </p>
          </div>
        ))}
        {vas2.map((service, index) => (
          <div
            key={index}
            className="relative group rounded-lg overflow-hidden md:row-span-1" // Fixed height for all images
          >
            {/* Image */}
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-full object-cover rounded-lg"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

            {/* Text */}
            <p className="absolute bottom-4 left-4 text-white font-semibold">
              {service.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PartnersSection(){
    return(
        <>
                {/* Partners Section */}
                <div className="py-10 text-center">
                <h2 className="text-3xl font-semibold">
                  Our <span className="text-blue-400">Partner</span>
                </h2>
      
                {/* Scrolling Logos */}
                <div className="overflow-hidden mt-6">
                  {/* Row 1: Left to Right */}
                  <marquee direction="left" scrollamount="10" behavior="alternate">
                  <div className="flex gap-6 whitespace-nowrap">
                    {patners.map((partner, index) => (
                      <img
                        key={`row2-${index}`}
                        src={`${partner}`}
                        alt={`Partner ${index + 1}`}
                        className="h-20 mx-4 grayscale"
                      />
                    ))}
                  </div>
                  </marquee>
      
                  {/* Row 2: Right to Left */}
                  <marquee direction="right" scrollamount="10" behavior="alternate">
                  <div className="flex gap-6  whitespace-nowrap mt-4">
                    {patners.map((partner, index) => (
                      <img
                        key={`row2-${index}`}
                        src={`${partner}`}
                        alt={`Partner ${index + 1}`}
                        className="h-20 mx-4 grayscale"
                      />
                    ))}
                  </div>
                  </marquee>
                </div>
              </div>
              </>
    )
}

export const VideoSection=()=>{
    return <>      <div className="mx-8 sm:mx-16">
    {/* Hero Section */}
    <div className="relative w-full mt-6 h-[500px] md:h-[600px] flex items-center justify-center text-center text-white">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover rounded-2xl bg-black bg-blend-overlay"
      >
        <source src={haVideo} type="video/mp4" />
      </video>
      {/* Text Content */}
      <div className="md:absolute z-10 p-8 md:p-12 bottom-10 left-10 rounded-lg max-w-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-black">
          HA<span className="text-blue-400">Group</span> Transforming
          <br />
          <span className="text-blue-400">Visions</span> into{" "}
          <span className="text-blue-400">Ventures</span>
        </h1>

        <div className="mt-4 flex gap-4">
          <button className="px-6 py-2 text-white rounded-lg bg-gradient-to-r from-[#2CAFF3] to-[#1975BB] hover:cursor-pointer">
            Get Started
          </button>
          <button className="px-6 py-2 bg-white text-blue-400 border border-blue-400 rounded-lg hover:cursor-pointer">
            Connect over a Call
          </button>
        </div>
      </div>
    </div>
  </div></>
}