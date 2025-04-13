import React, { useEffect, useState } from "react";

import main from "../assets/images/Main.png";
import haVideo from "../assets/video/main.mp4";
import { useRef } from "react";
import {
  sampleCaseStudies,
  leaders,
  ClientsSpeaktestimonials,
  patners,
  services,
  testimonials,
  ValueAddedService,
  ValueAddedService2,
  calendlyUrl,
} from "../Constants/constant";
import caseStudyTriangle from "../assets/images/triangles/CaseStudyTriangle.png";
import caseStudyTriangle2 from "../assets/images/triangles/CaseStudyTriangle2.png";
import InnovationTriangle from "../assets/images/triangles/InnovationTriangle.png";
import InnovationTriangle2 from "../assets/images/triangles/InnovationTriangle2.png";
import AboutSectionTriangle from "../assets/images/triangles/AboutSectionTriangle.png";
import AboutSectionRightTriangle from "../assets/images/triangles/AboutSectionRightTriangle.png";
import LeadershipTriangle from "../assets/images/triangles/LeadershipTriangle.png";
import ClientTriangle from "../assets/images/triangles/ClientTriangle.png";
import { useNavigate } from "react-router-dom";
import { Fade, Flip, Hinge, Slide, Zoom } from "react-awesome-reveal";
import {
  IoChevronBack,
  IoChevronForward,
  IoChevronBackOutline,
  IoChevronForwardOutline,
} from "react-icons/io5";
import {
  Award,
  Building,
  FileCheck,
  Home,
  PenTool,
  Handshake,
} from "lucide-react";
const MainServices = () => {
  const navigate = useNavigate();
  const achievements = [
    { icon: <Award />, count: "5+", label: "Years of Excellence" },
    { icon: <Building />, count: "3500+", label: "Businesses Set Up" },
    { icon: <FileCheck />, count: "2,000+", label: "Visas Processed" },
    { icon: <Building />, count: "150+", label: "Corporate Bank Accounts" },
    { icon: <Home />, count: "200+", label: "Real Estate Transactions" },
    { icon: <PenTool />, count: "300+", label: "Branding Campaigns" },
    { icon: <Handshake />, count: "3,000+", label: "Deals Brokered" },
  ];
  return (
    <div className="py-10 px-6">
      {/* Services Section */}
      <h2 className="text-5xl font-normal  text-center">
        Main <span className="text-blue-400 font-semibold">Services</span>
      </h2>
      <div className="mt-8 grid grid-cols-1  px-4  md:grid-cols-4 gap-8 max-w-6xl md:max-h-[600px] mx-auto">
        {/* <div className="mt-8  max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-6 justify-items-center mx-auto "> */}

        {services.map((service, index) => (
          <div
            key={index}
            className="relative group rounded-lg overflow-hidden row-span-2 
      transform transition-all duration-300 hover:scale-105 hover:shadow-xl max-h-108 md:min-h-96 hover:cursor-pointer"
            onClick={() => navigate(service.path)}
          >
            {/* Image */}
            <img
              loading="lazy"
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover rounded-lg 
        transition-transform duration-300 group-hover:scale-110"
            />

            {/* Gradient Overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-black to-transparent 
      transition-opacity duration-300 group-hover:opacity-80"
            ></div>

            {/* Text */}
            <p
              className="absolute bottom-4 left-4 text-white font-nomral text-lg md:text-3xl
      transform transition-all duration-300 
      group-hover:translate-y-[-10px] hover:font-medium px-2"
            >
              {service.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainServices;

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
        <h2 className="text-5xl font-normal">
          What our{" "}
          <span className="text-blue-400 font-semibold">Clients Say</span>
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
                  loading="lazy"
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-blue-400">
                    {testimonial.name}
                  </h4>
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

export function ValueAddedServices() {
  return (
    <div className="pb-36 py-16 px-6 ">
      {/* Title */}
      <h2 className="text-5xl font-nomral text-center">
        Value Added{" "}
        <span className="text-blue-400 font-semibold">Services</span>
      </h2>

      {/* Services Grid */}
      <div className="mt-8 grid grid-cols-1 grid-rows-12 md:grid-rows-3 px-4  md:grid-cols-4 gap-9 max-w-6xl md:max-h-[600px] mx-auto">
        {ValueAddedService.map((service, index) => (
          <div
            key={index}
            className="relative group rounded-lg overflow-hidden row-span-2 
      transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            {/* Image */}
            <img
              loading="lazy"
              src={service.image}
              alt={service.name}
              className="w-full h-full object-cover rounded-lg 
        transition-transform duration-300 group-hover:scale-110"
            />

            {/* Gradient Overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-black to-transparent 
      transition-opacity duration-300 group-hover:opacity-80"
            ></div>

            {/* Text */}
            <p
              className="absolute bottom-4 left-4 text-white font-nomral text-lg md:text-3xl
      transform transition-all duration-300 
      group-hover:translate-y-[-10px] hover:font-medium px-2"
            >
              {service.name}
            </p>
          </div>
        ))}
        {ValueAddedService2.map((service, index) => (
          <div
            key={index}
            className="relative group rounded-lg overflow-hidden row-span-1 md:row-span-1 transform transition-all duration-300 hover:scale-105 hover:shadow-xl" // Fixed height for all images
          >
            {/* Image */}
            <img
              loading="lazy"
              src={service.image}
              alt={service.name}
              className="w-full max-h-56 object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent  transition-opacity duration-300 group-hover:opacity-80"></div>

            {/* Text */}
            <p
              className="absolute bottom-4 left-4 text-white font-nomral md:text-3xl text-lg px-2
      transform transition-all duration-300 
      group-hover:translate-y-[-10px] hover:font-medium"
            >
              {service.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PartnersSection() {
  return (
    <>
      {/* Partners Section */}
      <div className="py-10 text-center">
        <h2 className="text-5xl font-normal">
          Our <span className="font-semibold text-blue-400">Partner</span>
        </h2>

        {/* Scrolling Logos */}
        <div className="mt-6 w-full overflow-hidden">
          {/* Row 1: Left to Right */}
          <div className="flex gap-6  animate-scroll-bounce-left w-[1200px]">
            {patners.map((partner, index) => (
              <img
                loading="lazy"
                key={`row1-${index}`}
                src={`${partner}`}
                alt={`Partner ${index + 1}`}
                className="h-20 mx-4 grayscale flex-shrink-0"
              />
            ))}
            {/* Duplicate images for seamless loop */}
            {patners.map((partner, index) => (
              <img
                loading="lazy"
                key={`row1-dup-${index}`}
                src={`${partner}`}
                alt={`Partner ${index + 1}`}
                className="h-20 mx-4 grayscale flex-shrink-0"
              />
            ))}
          </div>

          {/* Row 2: Right to Left */}
          <div className="flex gap-6 mt-6 animate-scroll-bounce-right w-[1200px]">
            {patners.map((partner, index) => (
              <img
                loading="lazy"
                key={`row2-${index}`}
                src={`${partner}`}
                alt={`Partner ${index + 1}`}
                className="h-20 mx-4 grayscale flex-shrink-0"
              />
            ))}
            {/* Duplicate images for seamless loop */}
            {patners.map((partner, index) => (
              <img
                loading="lazy"
                key={`row2-dup-${index}`}
                src={`${partner}`}
                alt={`Partner ${index + 1}`}
                className="h-20 mx-4 grayscale flex-shrink-0"
              />
            ))}
          </div>

          <style jsx>{`
            @keyframes scroll-bounce-left {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }

            @keyframes scroll-bounce-right {
              0% {
                transform: translateX(-50%);
              }
              100% {
                transform: translateX(0);
              }
            }

            .animate-scroll-bounce-left {
              animation: scroll-bounce-left 20s linear infinite;
            }

            .animate-scroll-bounce-right {
              animation: scroll-bounce-right 20s linear infinite;
            }
          `}</style>
        </div>
      </div>
    </>
  );
}

export const VideoSection = () => {
  const navigate = useNavigate();
  return (
    <>
      {" "}
      <div className="mx-8 sm:mx-16">
        {/* Hero Section */}
        <div className="relative w-full mt-6 h-[500px] md:h-[600px] flex items-center justify-center text-center text-white">
          <video
            playsinline
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover rounded-2xl bg-black bg-blend-overlay"
          >
            <source src={haVideo} type="video/mp4" />
          </video>
          {/* Text Content */}
          <div className="md:absolute z-10 p-8 md:p-12 bottom-10 left-10 rounded-lg max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-normal text-black text-center md:text-left">
              HAGroup <span className="font-semibold">Transforming</span>
              <br />
              <span className="font-semibold">Visions into</span>{" "}
              <span>Ventures</span>
            </h1>

            <div className="mt-4 flex gap-4">
              <button
                className="px-8 py-2 text-white rounded-lg bg-gradient-to-r from-[#2CAFF3] to-[#1975BB] hover:cursor-pointer"
                onClick={() => navigate("/business")}
              >
                Start Your Buisness Today
              </button>
              <button
                className="px-6 py-2 bg-white text-blue-400 border border-blue-400 rounded-lg hover:cursor-pointer"
                onClick={() => window.open(calendlyUrl)}
              >
                Speak To An Expert
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const CaseStudiesCarousel = ({ caseStudies }) => {
  return (
    <div className="bg-gray-100 py-6 relative">
      <div
        className="absolute top-0 left-0 w-full h-24 bg-white"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
      ></div>
      <img
        loading="lazy"
        src={caseStudyTriangle}
        className="hidden md:block md:absolute md:top-0 md:left-0 md:-translate-y-1/2 md:h-72"
      />
      <img
        loading="lazy"
        src={caseStudyTriangle2}
        className="hidden md:block md:absolute md:bottom-0 md:right-0 md:h-48 -mb-6"
      />

      <div className="container mx-auto px-4 py-8 pt-24">
        <div className="mb-8">
          <h2 className="text-5xl font-normal">
            Choose the Right
            <span className="text-blue-400 block font-semibold">
              Business Setup for You
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <div key={index} className="flex">
              <div className="bg-white rounded shadow-md overflow-hidden w-full">
                <div className="h-72 overflow-hidden">
                  <img
                    loading="lazy"
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-md mb-2">{study.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {study.description}
                  </p>
                  <a
                    href={study.link}
                    className="text-blue-400 text-sm hover:underline"
                  >
                    Read Case Study →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Demo component with sample data
export const CaseStudies = () => {
  return (
    <div className="app">
      <CaseStudiesCarousel caseStudies={sampleCaseStudies} />
    </div>
  );
};

export const TeamSection = () => {
  const achievements = [
    { icon: <Award />, count: "5+", label: "Years of Excellence" },
    { icon: <Building />, count: "3500+", label: "Businesses Set Up" },
    { icon: <FileCheck />, count: "2,000+", label: "Visas Processed" },
    { icon: <Building />, count: "150+", label: "Corporate Bank Accounts" },
    { icon: <Home />, count: "200+", label: "Real Estate Transactions" },
    { icon: <PenTool />, count: "300+", label: "Branding Campaigns" },
    { icon: <Handshake />, count: "3,000+", label: "Deals Brokered" },
  ];
  return (
    <div className="bg-white py-12 relative min-h-[600px] flex">
      {/* Blue triangles can be added here if needed */}

      <div className="container mx-auto px-4 py-12">
        <div className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 py-16 px-4 rounded-xl shadow-sm text-center">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Why Us?
          </h2>
          <p className="text-gray-700 mb-12 text-lg max-w-2xl mx-auto">
            Your success, our commitment.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-10">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1"
              >
                <div className="text-indigo-600 mb-4">{item.icon}</div>
                <h3 className="text-4xl font-bold text-gray-800 mb-2">
                  {item.count}
                </h3>
                <p className="text-gray-600 text-center">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <img
        loading="lazy"
        src={InnovationTriangle2}
        className="hidden md:block md:absolute md:bottom-0 md:left-0 md:h-72"
      />
      <img
        loading="lazy"
        src={InnovationTriangle}
        className="hidden md:block md:absolute md:top-10 md:right-0 z-20 h-48"
      />
    </div>
  );
};

export const AboutCompanySection = () => {
  return (
    <div className="bg-gray-100 p-16 flex justify-center items-center relative">
      <img
        loading="lazy"
        src={AboutSectionTriangle}
        className="hidden md:block md:absolute md:bottom-0 md:left-0  md:h-108 lg:h-156 z-20"
      />
      <img
        loading="lazy"
        src={AboutSectionRightTriangle}
        className="hidden md:block md:absolute md:top-10 md:right-0 z-20 h-60"
      />
      <div
        className="absolute top-0 left-0 w-full h-24 bg-white"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
      ></div>
      <div className="relative w-full max-w-3xl overflow-visible pt-24">
        {/* Main background image of buildings/skyline */}
        <img
          loading="lazy"
          src={main}
          alt="City skyline"
          className="w-full h-160 object-cover rounded-4xl"
        />

        {/* Glass effect card overlay */}
        <Slide direction="right" triggerOnce>
          <div className="absolute bottom-0 right-0 m-0 w-full md:m-6 p-6 rounded-xl md:translate-x-1/3 bg-white/60  backdrop-filter backdrop-blur-md shadow-lg md:max-w-96">
            <h2 className="text-xl font-medium mb-2">
              About{" "}
              <span className="text-blue-400 font-semibold">HA Group</span>
            </h2>
            <p className="text-gray-700 text-sm mb-4">
              Starting a business doesn’t have to be complicated. With our
              experience,network, and hands-on support, we make it easy.
            </p>
            <button
              className="bg-red-600 text-white px-4 py-2 text-sm rounded hover:bg-red-700 transition duration-300"
              onClick={() => window.open(calendlyUrl)}
            >
              Let’s talk! Get expert advice today.
            </button>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export const LeadershipTeamSection = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(1); // 1 for right, -1 for left
  const [slidesToShow, setSlidesToShow] = useState(3);

  // Handle responsiveness
  useEffect(() => {
    const handleResize = () => {
      // Set slides to show based on screen width
      if (window.innerWidth < 640) {
        setSlidesToShow(1); // Mobile: 1 slide
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2); // Tablet: 2 slides
      } else {
        setSlidesToShow(3); // Desktop: 3 slides
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const startDragging = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const scrollStyle = {
    msOverflowStyle: "none", // IE and Edge
    scrollbarWidth: "none", // Firefox
    WebkitOverflowScrolling: "touch",
    "&::-webkit-scrollbar": {
      // Chrome, Safari, Opera
      display: "none",
    },
  };

  return (
    <div className="bg-white py-12 relative">
      <img
        loading="lazy"
        src={LeadershipTriangle}
        className="hidden md:block md:absolute md:bottom-1/2 md:left-0 translate-y-1/6 md:h-72 z-10"
      />
      <div className="container mx-auto px-4 max-w-5xl z-20 relative">
        {/* Section heading */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold">
            Our <br />
            <span className="text-blue-400">Leadership Team</span>
          </h2>
        </div>

        {/* Leadership cards with scroll */}
        <div
          className="relative overflow-x-auto"
          ref={scrollRef}
          style={scrollStyle}
          onMouseDown={startDragging}
          onMouseUp={stopDragging}
          onMouseLeave={stopDragging}
          onMouseMove={handleMouseMove}
        >
          <div className="flex space-x-6 px-6">
            {leaders.map((leader, index) => (
              <div
                key={index}
                className="flex-shrink-0"
                style={{
                  width: `${100 / slidesToShow}%`,
                  maxWidth: "350px",
                  minWidth: "280px",
                }}
              >
                <div className="flex flex-col items-center w-full px-2">
                  {/* Leader image */}
                  <div className="bg-gray-200 rounded-lg overflow-hidden mb-2 w-full">
                    <div className="aspect-square">
                      <img
                        loading="lazy"
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent my-2"></div>

                  {/* Leader info */}
                  <h3 className="font-medium text-base text-center">
                    {leader.name}
                  </h3>
                  {leader.position && (
                    <p className="text-gray-600 text-sm text-center">
                      {leader.position}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const ClientsSpeak = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 relative">
      <img
        loading="lazy"
        src={ClientTriangle}
        className="hidden md:block md:absolute md:top-0 md:left-0 translate-y-1/6 md:h-72 z-10"
      />
      <div
        className="absolute top-0 left-0 w-full h-24 bg-white"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
      ></div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 pt-24 z-20 relative">
        <Fade triggerOnce direction="up">
          <div className="col-span-1">
            <h2 className="text-5xl font-medium text-left leading-snug">
              Our <br />{" "}
              <span className="text-blue-400 font-semibold">
                Clients
                <br /> Speak
              </span>
            </h2>
            <p className="text-gray-600 text-left mt-2">
              What clients have to say about Techwards
            </p>
          </div>
        </Fade>

        <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Fade triggerOnce direction="right" cascade damping={0.1}>
            {ClientsSpeaktestimonials.map((testimonial, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                <p className="text-gray-700 mb-4">{testimonial.feedback}</p>
                <div className="flex items-center">
                  <div className="ml-3">
                    <h4 className="text-blue-400 font-semibold">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </section>
  );
};
