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

const MainServices = () => {
  const navigate = useNavigate()
  return (
    <div className="py-10 px-6">
      {/* Services Section */}
      <h2 className="text-5xl font-normal  text-center">
        Main <span className="text-blue-400 font-semibold">Services</span>
      </h2>
      <div className="mt-8 grid grid-cols-1  px-4  md:grid-cols-4 gap-6 max-w-6xl md:max-h-[600px] mx-auto">
      {/* <div className="mt-8  max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-6 justify-items-center mx-auto "> */}

                {services.map((service, index) => (
          <div
            key={index}
            className="relative group rounded-lg overflow-hidden row-span-2 
      transform transition-all duration-300 hover:scale-105 hover:shadow-xl max-h-108 md:min-h-96"
      onClick={() => navigate(service.path)}
          >
            {/* Image */}
            <img
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
          What our <span className="text-blue-400 font-semibold">Clients Say</span>
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
        Value Added <span className="text-blue-400 font-semibold">Services</span>
      </h2>

      {/* Services Grid */}
      <div className="mt-8 grid grid-cols-1 grid-rows-12 md:grid-rows-3 px-4  md:grid-cols-4 gap-6 max-w-6xl md:max-h-[600px] mx-auto">
        {ValueAddedService.map((service, index) => (
          <div
            key={index}
            className="relative group rounded-lg overflow-hidden row-span-2 
      transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            {/* Image */}
            <img
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
                  key={`row1-${index}`}
                  src={`${partner}`}
                  alt={`Partner ${index + 1}`}
                  className="h-20 mx-4 grayscale flex-shrink-0"
                />
              ))}
              {/* Duplicate images for seamless loop */}
              {patners.map((partner, index) => (
                <img
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
                  key={`row2-${index}`}
                  src={`${partner}`}
                  alt={`Partner ${index + 1}`}
                  className="h-20 mx-4 grayscale flex-shrink-0"
                />
              ))}
              {/* Duplicate images for seamless loop */}
              {patners.map((partner, index) => (
                <img
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
            <h1 className="text-3xl md:text-5xl font-normal text-black">
              HAGroup <span className="font-semibold">Transforming</span> 
              <br />
              <span className="font-semibold">Visions into</span> {" "}
              <span >Ventures</span>
            </h1>

            <div className="mt-4 flex gap-4">
              <button className="px-8 py-2 text-white rounded-lg bg-gradient-to-r from-[#2CAFF3] to-[#1975BB] hover:cursor-pointer">
                Get Started
              </button>
              <button className="px-6 py-2 bg-white text-blue-400 border border-blue-400 rounded-lg hover:cursor-pointer">
                Connect over a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const CaseStudiesCarousel = ({ caseStudies }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div className="bg-gray-100 py-6 relative">
      <div
        className="absolute top-0 left-0 w-full h-24 bg-white"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
      ></div>
      <img
        src={caseStudyTriangle}
        className="hidden md:block md:absolute md:top-0 md:left-0 md:-translate-y-1/2 md:h-72"
      />
      <img
        src={caseStudyTriangle2}
        className="hidden md:block md:absolute md:bottom-0 md:right-0 md:h-48 -mb-6 -pb-6)"
      />
      {/* Diagonal cut at the top */}

      <div className="container mx-auto px-4 py-8 pt-24">
        <div className="mb-8">
          <h2 className="text-5xl font-normal">
            Featured
            <span className="text-blue-400 block font-semibold">Case Studies</span>
          </h2>
        </div>

        <div
          ref={carouselRef}
          className="flex overflow-x-auto scrollbar-hide select-none"
          style={{
            cursor: isDragging ? "grabbing" : "grab",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUp}
        >
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="max-w-xl min-w-sm mr-4 flex p-2"
            >
              <div className="bg-white rounded shadow-md overflow">
                <div className=" h-72 overflow-hidden">
                  <img
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
  return (
    <div className="bg-white py-12 relative min-h-[600px] flex">
      {/* Blue triangles can be added here if needed */}

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center z-10">
        {/* Text content */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h2 className="text-5xl font-bold mb-3">
            Innovators, Leaders and passionate collaborators
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            A team dedicated to making significant impact.
          </p>
          <div className="flex space-x-4">
            <a
              href="#careers"
              className="px-4 md:px-12 py-2 text-center text-xl bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
            >
              Career
            </a>
            <a
              href="#postings"
              className="px-4 md:px-12 py-2 border text-xl border-gray-300 rounded-md text-red-500 hover:bg-gray-50 transition duration-300 decoration-none"
            >
              Latest posting
            </a>
          </div>
        </div>

        {/* Image collage */}
        <div className="w-full md:w-1/2 relative">
          <div className="grid grid-cols-2 gap-2 md:gap-3">
            <div className="grid gap-4 grid-rows-5">
              {/* Top left image */}
              <div className="row-start-2 row-span-2 overflow-hidden rounded-md">
                <img
                  src="https://s3-alpha-sig.figma.com/img/fbba/ec12/ca9017a79b2d59252744f9d5aea04d97?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jaja1EUxCBQTsv-en62sj3RZiA3R5HUiO8~iQeGpEgQDo0vSUwSOy1EWBVK8IL45rubqgkhJMPzbBeprqWzXGxnjMsN57NBucYK7hn7UU4rySOIoIH8lk1l~wmVvcPpl94dmWWnf5tfzzowUWyFqaAgebmPfmgqMJI3rIcnfNc~5VaryDSJvXJasYZb3kuqoD0T3dZdeYapejZVX-f6eVCcKo~R2wsCAp9qhdlNN6w9i3TYBl68pG-mWQpz3vY5CXpUHUxZbmcxToB6hs-r0MPEal8hgBpGq3xIZFJupM-pDIKerOVFWMLTBc8pKmulDRCU0IYBz~4~J49BkV4Ub-w__"
                  alt="Team meeting"
                  className="w-full h-full min-h-56 max-h-72 object-cover"
                />
              </div>
              {/* Top right image */}
              <div className="overflow-hidden row-span-2 rounded-md">
                <img
                  src="https://s3-alpha-sig.figma.com/img/467e/aa46/3d71ebf2cc48e8bb50282e6a759c5483?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=a3Pitw5mdDJS-v6yTol-kmq0SZMXXmHUnNLZUlfuTPwpVHaOfr~G38vxblRRQeBrJce6Dge9JPKsHtAFPqtOOPNaJtRmsJpIsZ4i2I5Zgp13zBJ6ykyizKqWdKEUqZG4rzy0LikV1wb24QE7-ibaNf3wmRUxqT0c745A5Ke6GfYNy23PF~30SQp4GILo9Uoc2EHKuCtTyW8WizwQIG8C1MXvf4vdnI5wRvcM92ts6Ts00G8tu-I27JFvzC5L3YvJhick0eW9HkrEsWhmIfnR-pin5CxSqMzMY2nodL3lMHJ7RKzXYFYG7ieaJ0nmRNFPc~99Fvo0bHtIoaGecqEowA__"
                  alt="Office space"
                  className="w-full min-h-56 max-h-72 object-cover"
                />
              </div>
            </div>
            <div className="grid gap-4 grid-rows-5">
              {/* Bottom left - taller image */}
              <div className=" overflow-hidden rounded-md row-span-2">
                <img
                  src="https://s3-alpha-sig.figma.com/img/84c6/54e3/7f1d7ac6d301b29f050732396f3e9740?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=oHrzKt8o-37H3zQLPaQxmh5-OIqDiLP2JO7qTvkemhGplxoP-BW-SlcDvCp9YqyoM9i0XzRBRWvnEgGtWE-AGnJEQmS0QoewKqRKQcfwzmh5c~olkuXXbkEOl3XPUcxEGt4m2V-bwbv6D1wLEjO7dh4pU0ywFgFGtvn8P0xXhc86E40Qe9qllziqGPJdQon7mZv0hlwLsgXXBcBidZOA3uyso8UWiYHTMUCZ~7qXdGevACZBSlev8kDyqd-bWpF6TKjfUe5tyJyS6aMF3-HXDpiOsQXmPNnPA5XiOPM2-ScpDtrE4B2Ug7pvAXwdvWlcIj~hv7CFU28w8JOIWSW6Xw__"
                  alt="Team collaboration"
                  className="w-full min-h-56 max-h-72 object-cover"
                />
              </div>

              {/* Bottom right image */}
              <div className=" overflow-hidden rounded-md row-span-2">
                <img
                  src="https://s3-alpha-sig.figma.com/img/c4d8/da93/0e37a49e8a5bcedcc1d0c166ed415232?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=OvAmNcY~cTXmQB9ntFcqIGLUuONFRwql0R4OsdUKc7X~RIQk0rU5vzks9WMf7EzZ1nJMEpr7oQwJR2~zrLpgrHzkZAKHs12QEc8RIu4KOtPDJGvFcjWYwfKGy6WUHGstOrfRa6CIkp4KQzRrav7BIgZr7z9GR1j9gOMw0AI0QAjQHoslQbrz9x9I-iS0~MpQ4lTGuEEpFwwejsPxQBLoETEeQz9mAaI6hI5pjKSR1ZesOesfHePbhNw897Jdnp~nTa1cgDg5eWeFBmUFASKpixFnMUyzOn1~iNOEL7UiLBjMev9~TY0yQApwaUkQFCjisieA5CDUuO1uWRBGJLDFbg__"
                  alt="Conference room"
                  className="w-full min-h-56 max-h-72 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src={InnovationTriangle2}
        className="hidden md:block md:absolute md:bottom-0 md:left-0  md:h-72"
      />
      <img
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
        src={AboutSectionTriangle}
        className="hidden md:block md:absolute md:bottom-0 md:left-0  md:h-108 lg:h-156 z-20"
      />
      <img
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
          src={main}
          alt="City skyline"
          className="w-full h-160 object-cover rounded-4xl"
        />

        {/* Glass effect card overlay */}
        <div className="absolute bottom-0 right-0 m-0 w-full md:m-6 p-6 rounded-xl md:translate-x-1/3 bg-white/60  backdrop-filter backdrop-blur-md shadow-lg md:max-w-96">
          <h2 className="text-xl font-medium mb-2">
            About <span className="text-blue-400 font-semibold">Company</span>
          </h2>
          <p className="text-gray-700 text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et magna aliqua. Integer
            feugiat.
          </p>
          <button className="bg-red-600 text-white px-4 py-2 text-sm rounded hover:bg-red-700 transition duration-300">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export const LeadershipTeamSection = () => {
  return (
    <div className="bg-white py-12 relative">
      <img
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

        {/* Leadership cards grid */}
        <div className="flex flex-row flex-wrap gap-8 justify-around ">
          {leaders.map((leader, index) => (
            <div key={index} className="flex flex-col">
              {/* Leader image */}
              <div className="bg-gray-200 h-64 w-64 rounded-lg overflow-hidden mb-2">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-64 h-64 object-cover object-top"
                />
              </div>
              <div className="col-span-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent my-2"></div>

              {/* Leader info */}
              <h3 className="font-medium text-base">{leader.name}</h3>
              {leader.position && (
                <p className="text-gray-600 text-sm">{leader.position}</p>
              )}
            </div>
          ))}
        </div>

        {/* Description text */}
        <div className="mt-6">
          <p className="text-gray-600 text-sm leading-relaxed">
            Sultan Almuheisen has 25+ years of experience as a distinguished
            industry executive and general manager for high-tech corporations in
            compute, communications. As an executive, he has navigated companies
            to key strategic inflections in areas of cloud computing, machine
            learning, and 5G. As Vice President at Qualcomm, Vinay played an
            integral part in the establishment of its Data Center server and
            Machine-Learning technology, and drove their advanced mobile
            software product management. He obtained a Masters of Science from
            Georgia Institute of Technology, a Bachelors of Engineering at City
            University of New York, and holds 12 US patents.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export const ClientsSpeak = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 relative">
            <img
        src={ClientTriangle}
        className="hidden md:block md:absolute md:top-0 md:left-0 translate-y-1/6 md:h-72 z-10"
      />
      <div
        className="absolute top-0 left-0 w-full h-24 bg-white"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
      ></div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 pt-24 z-20 relative">
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
        <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
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
        </div>
      </div>
    </section>
  );
};
