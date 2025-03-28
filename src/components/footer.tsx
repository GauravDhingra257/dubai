import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/home/footer_logo.png";
import footer1 from "../assets/images/footer/footer1.png";
import footer2 from "../assets/images/footer/footer2.png";
import footer3 from "../assets/images/footer/footer3.png";
import leftfooterTriangle from "../assets/images/triangles/leftfooterTriangle.png";
import footerRightTriangle from "../assets/images/triangles/footerRightTriangle.png";
import { Link } from "react-router";

// Triangle component that can be reused
const Triangle = ({ className }) => {
  return (
    <div className={`overflow-hidden z-50 ${className}`}>
      <img
        src={leftfooterTriangle}
        className="h-48 w-auto drop-shadow-2xl"
        alt="Left footer triangle"
      />
    </div>
  );
};

const Triangle2 = ({ className }) => {
  return (
    <div className={`z-50 ${className}`}>
      <img
        src={footerRightTriangle}
        className="h-56 w-auto drop-shadow-2xl"
        alt="Right footer triangle"
      />
    </div>
  );
};

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-gray-200 mt-auto">
      <Triangle2 className="hidden md:block md:absolute md:top-0 md:right-0 md:-translate-y-1/2 " />
      {/* Diagonal cut at the top */}
      <div
        className="absolute top-0 left-0 w-full h-24 bg-white"
        style={{ clipPath: "polygon(0 0, 0 100%, 100% 0)" }}
      ></div>

      <div className="container mx-auto px-6 py-16 pt-28">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Logo and Company Info */}
          <div className="mb-8 md:mb-0 md:w-1/4 mx-4">
            <div className="mb-4">
              <div className="flex items-end justify-center md:justify-start">
                <img
                  src={logo}
                  className="h-16 hover:cursor-pointer"
                  alt="Company logo"
                  onClick={() => navigate("/")}
                />
              </div>
            </div>

            <p className="text-gray-600 text-sm mb-4 text-center md:text-left">
              Licensed, Authorized and Approved By Government As 'H N A
              CORPORATE SERVICES PROVIDER'
            </p>

            <div className="flex space-x-3 justify-center md:justify-start">
              <a href="#" className="text-gray-500 hover:text-blue-400">
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-400">
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-400">
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-400">
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
            <div className="mt-4 pt-6">
              <div className="flex justify-start items-center gap-8 flex-wrap md:flex-nowrap ">
                <img
                  src={footer1}
                  className="h-8 md:h-10"
                  alt="Footer image 1"
                />
                <img
                  src={footer2}
                  className="h-8 md:h-10"
                  alt="Footer image 2"
                />
                <img
                  src={footer3}
                  className="h-8 md:h-10"
                  alt="Footer image 3"
                />
              </div>
            </div>
          </div>

          {/* Business Setup */}
          <div className="mb-8 md:mb-0 md:w-1/4">
            <h3 className="text-gray-700 font-semibold mb-4">Business Setup</h3>
            <ul className="space-y-2">
              <li>
                <span
                  className="text-gray-600 hover:text-blue-400 text-sm hover:cursor-pointer"
                  onClick={() => navigate("/business")}
                >
                  Mainland
                </span>
              </li>
              <li>
                <span
                  className="text-gray-600 hover:text-blue-400 text-sm hover:cursor-pointer"
                  onClick={() => navigate("/business")}
                >
                  Freezone
                </span>
              </li>
              <li>
                <span
                  className="text-gray-600 hover:text-blue-400 text-sm hover:cursor-pointer"
                  onClick={() => navigate("/business")}
                >
                  Offshore
                </span>
              </li>
              <li>
                <span
                  className="text-gray-600 hover:text-blue-400 text-sm hover:cursor-pointer"
                  onClick={() => navigate("/business")}
                >
                  Business Trade License
                </span>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="mb-8 md:mb-0 md:w-1/4">
            <h3 className="text-gray-700 font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <span
                  className="text-gray-600 hover:text-blue-400 text-sm hover:cursor-pointer"
                  onClick={() => navigate("/visaservices")}
                >
                  Visa Services in Dubai
                </span>
              </li>
              <li>
                <span
                  className="text-gray-600 hover:text-blue-400 text-sm hover:cursor-pointer"
                  onClick={() => navigate("/visaservices")}
                >
                  Family Visa Assistance
                </span>
              </li>
              <li>
                <span
                  className="text-gray-600 hover:text-blue-400 text-sm hover:cursor-pointer"
                  onClick={() => navigate("/visaservices")}
                >
                  Golden Visa
                </span>
              </li>
              <li>
                <span
                  className="text-gray-600 hover:text-blue-400 text-sm hover:cursor-pointer"
                  onClick={() => navigate("/visaservices")}
                >
                  PRO Services in Dubai
                </span>
              </li>
              <li>
                <span
                  className="text-gray-600 hover:text-blue-400 text-sm hover:cursor-pointer"
                  onClick={() => navigate("/visaservices")}
                >
                  Bank Account Opening in Dubai
                </span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="mb-8 md:mb-0 md:w-1/4">
            <h3 className="text-gray-700 font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="tel:+97148241725"
                  className="text-gray-600 hover:text-blue-400 text-sm"
                >
                  +971 48 241725
                </a>
              </li>
              <li>
                <a
                  href="tel:+97154273740"
                  className="text-gray-600 hover:text-blue-400 text-sm"
                >
                  +971 54 2737405
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@hagroup.ae"
                  className="text-gray-600 hover:text-blue-400 text-sm"
                >
                  info@hagroup.ae
                </a>
              </li>
            </ul>
          </div>
          <div className="md:w-1/4">
            <h3 className="text-gray-700 font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <span
                  className="text-gray-600 hover:text-blue-400 text-sm hover:cursor-pointer"
                  onClick={() => navigate("/aboutUs")}
                >
                  About Us
                </span>
              </li>
              <li>
                <span
                  className="text-gray-600 hover:text-blue-400 text-sm hover:cursor-pointer"
                  onClick={() => navigate("/partners")}
                >
                  Partners
                </span>
              </li>
              <li>
                <span
                  className="text-gray-600 hover:text-blue-400 text-sm hover:cursor-pointer"
                  onClick={() => navigate("/privacypolicy")}
                >
                  Privacy policy
                </span>
              </li>
              <li>
                <span
                  className="text-gray-600 hover:text-blue-400 text-sm hover:cursor-pointer"
                  onClick={() => navigate("/terms")}
                >
                  Terms and Conditions
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Triangle className="-mt-16 hidden md:block" />
    </div>
  );
};

export default Footer;
