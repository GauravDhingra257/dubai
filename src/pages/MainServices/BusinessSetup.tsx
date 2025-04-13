import { HeroSection } from "../../components/Component1";

import BusinessSetup from "../../assets/images/buisness/BusinessSetup.png";
import FreeZone from "../../assets/images/buisness/FreeZone.png";
import VisaServicespng from "../../assets/images/buisness/VisaServices.png";
import OffShore from "../../assets/images/buisness/OffShore.png";
import BusinessSetupHero from "../../components/Component2";
import ServiceLeftTriangle from "../../assets/images/triangles/ServiceLeftTriangle.png";
import ServiceRightTriangle from "../../assets/images/triangles/ServiceRightTriangle.png";
import ServiceRightTriangle2 from "../../assets/images/triangles/ServiceRightTriangle2.png";
import { useNavigate } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { calendlyUrl } from "../../Constants/constant";
const BuisnessService = () => {
  const navigate = useNavigate();
  return (
    <>
      <BusinessSetupHero
        title="BUSINESS SETUP"
        highlightText="IN DUBAI"
        description="Start Your Business in Just One Week
Thinking of launching a business in Dubai? Whether it's a Mainland, Free Zone, or Offshore setup, choosing the right option is key. We simplify the process and handle everything for you—so you can focus on what matters."
        imagePath={BusinessSetup}
        imageAlt="Business Services Illustration"
        buttontext="Get Started Today"
      />

      <div className="flex items-center justify-center h-[60vh] bg-gray-50 px-4">
        <div className="text-center max-w-2xl">
          {/* Heading */}
          <Fade triggerOnce direction="up" cascade damping={0.1}>
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              How Much Does Business Setup In Dubai Cost?
            </h1>

            {/* Description */}
            <p className="text-gray-700 mb-6 leading-relaxed text-sm md:text-base">
              The cost depends on your business type, location (Free Zone or
              Mainland), number of visas, and shareholders. With 3,500+
              businesses launched, we know what it takes. Our Business Setup
              Cost Calculator gives you a quick, accurate estimate—so you can
              plan with confidence.{" "}
            </p>

            {/* Button */}
            <button
              className="bg-red-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-red-700 transition"
              onClick={() => navigate("/calculate")}
            >
              Find Out Your Business Setup Cost Now
            </button>
          </Fade>
        </div>
      </div>
      <HeroSection
        title="Free Zone "
        highlightText="Business Setup"
        description={`Want 100% ownership, tax benefits, and fast setup? Free Zones are the perfect choice. With over 40 Free Zones in the UAE, each designed for specific industries, picking the right one is crucial. We help you choose, handle the paperwork, and get you licensed — quickly and hassle-free.

          Key benefits:
          - Low taxes and full foreign ownership
          - Fast and easy registration
          - Industry-specific Free Zones to match your business`}
        imagePath={FreeZone}
        imageAlt="Business Services Illustration"
        imageMaxHeight={700}
        triangleImage={ServiceRightTriangle}
        buttontext="Start Your Free Zone Business Today"
      />
      <HeroSection
        title="Visa"
        highlightText="Services"
        description="Need a business visa, investor visa, or family sponsorship? UAE visa rules can be tricky, but we make it simple. We handle applications, approvals, and renewals so you don’t have to.."
        imagePath={VisaServicespng}
        imageAlt="Business Services Illustration"
        imageMaxHeight={700}
        imageFirst={false}
        buttontext="Apply for Your UAE Visa Now"
        buttonlink={calendlyUrl}
        triangleImage={ServiceLeftTriangle}
      />
      <HeroSection
        title="Offshore "
        highlightText="Company Formation"
        description="Looking for global expansion, tax benefits, and privacy? Offshore companies in the UAE offer zero corporate tax, full profit repatriation, and asset protection. Our experts make the setup process smooth and stress-free.
          
            Key benefits:
            - No corporate tax and full profit repatriation
            - Operate globally with complete privacy
            - Protect assets with a simplified company structure"
        imagePath={OffShore}
        buttonlink={calendlyUrl}
        buttontext="Set Up Your Offshore Company Today"
        imageAlt="Business Services Illustration"
        imageMaxHeight={700}
        triangleImage={ServiceRightTriangle2}
      />
      <HeroSection
        title="Mainland  "
        highlightText="Business Setup "
        description="Want full flexibility and access to UAE markets? A Mainland company lets you trade anywhere in the UAE, work with government contracts, and expand without limits. We handle everything—so you can focus on growing your business.
            Key benefits:
            - Operate anywhere in the UAE
            - No restrictions on business activities
            - Eligible for government contracts"
        imagePath={OffShore}
        buttonlink={calendlyUrl}
        buttontext="Launch Your Mainland Business Now"
        imageAlt="Business Services Illustration"
        imageMaxHeight={700}
        triangleImage={ServiceRightTriangle2}
      />
    </>
  );
};

export default BuisnessService;
