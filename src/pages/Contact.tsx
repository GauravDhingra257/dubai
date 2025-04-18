import React, { useRef } from "react";
import person1 from "../assets/images/person1.jpg";
import person2 from "../assets/images/person2.jpg";
import BusinessGoalsSection from "../components/BusinessGoalsSection";
import ContactSection from "../components/ContactUsComponents";
import { Fade } from "react-awesome-reveal";
import { calendlyUrl } from "../Constants/constant";

const ContactPage: React.FC = () => {
  const targetRef = useRef(null);

  const handleScroll = () => {
    targetRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col md:flex-row justify-between max-w-fit mx-auto p-4 md:p-8 lg:p-12 gap-8 md:gap-0">
        {/* Left Section */}
        <div className="w-full md:w-5/12 flex flex-col justify-center">
        <Fade triggerOnce direction="left" > 
          <div className="mb-6 md:mb-10">
            <h3 className="text-orange-500 font-medium text-lg mb-2 md:mb-4">
              Let's Contact
            </h3>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              We'll contact you within a couple of hours to schedule a meeting
              to discuss your goals.
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-5">
            <button
              className="bg-blue-400 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-400 transition w-full sm:w-auto"
 onClick={() => window.open(calendlyUrl)}
            >
              Schedule Now
            </button>
            <button
              className="bg-white text-blue-400 px-8 py-3 rounded-md font-medium border border-gray-300 hover:bg-gray-50 transition w-full sm:w-auto mt-2 sm:mt-0"
              onClick={handleScroll}
            >
              Drop A Message
            </button>
          </div>
        </Fade>
        </div>

        {/* Right Section - Testimonials with offset positioning */}

        <div className="w-full md:w-6/12 mt-10 md:mt-0 relative">
          {/* First Testimonial */}
          <Fade triggerOnce direction="right" className="mb-6 md:mb-0 md:relative z-10">
          <div className="bg-white p-5 rounded-lg border border-gray-100 ">

            <div className="flex items-center mb-3">
              {[1, 2, 3,4,5].map((star) => (
                <svg
                  key={star}
                  className="w-4 h-4 text-orange-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-800 font-medium mb-4 text-sm">
              "Excellent service. Would definitely recommend for any visa related services. Applied golden visa via them. The service was quick and the communication at each step was much appreciated"
            </p>
            <div className="flex items-center">
              <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
                <img
                  loading="lazy"
                  src={person1}
                  alt="Adrian Barak"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="ml-3">
                <p className="font-medium">kartikeya singh</p>
                <p className="text-gray-600 text-sm">Client</p>
              </div>
            </div>
          </div>
          </Fade>
          {/* Second Testimonial - Offset position on desktop */}
          <Fade triggerOnce direction="right" className="md:absolute md:top-20 md:right-0 z-0 md:w-11/12 md:pt-24" >
          <div className="bg-white p-5 rounded-lg border border-gray-100 ">
            <div className="flex items-center mb-3">
              {[1, 2, 3,4].map((star) => (
                <svg
                  key={star}
                  className="w-4 h-4 text-orange-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              {[ 5].map((star) => (
                <svg
                  key={star}
                  className="w-4 h-4 text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-800 font-medium mb-4 text-sm">
              "if looking for business setup in UAE with less amount and trust worthy company should come to HA group, i was being bulled buy so many companies and somebody told me about them, the Owner and management of HA group is way EXECLENT and supportive,. finally because of HA group i got my company running! i highly recommend every 1 for them!"
            </p>
            <div className="flex items-center">
              <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
                <img
                  loading="lazy"
                  src={person2}
                  alt="Adrian Barak"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="ml-3">
                <p className="font-medium">
                Dee Hash</p>
                <p className="text-gray-600 text-sm">Business owner</p>
              </div>
            </div>
          </div>
              </Fade>
        </div>

      </div>
      <div ref={targetRef}>
        <BusinessGoalsSection />
      </div>
    </div>
  );
};

export default ContactPage;

export const ContactUs = () => {
  return (
    <div>
      {/* <ContactSection /> */}
    </div>
  );
};