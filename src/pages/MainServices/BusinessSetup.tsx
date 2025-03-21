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
const BuisnessService = () => {
  const navigate = useNavigate();
  return (
    <>
      <BusinessSetupHero
        title="Business"
        highlightText="Setup"
        description="Whether you're looking to establish your venture on the mainland, leverage the advantages of Freezones, or explore the benefits of an offshore jurisdiction, we have you covered."
        imagePath={BusinessSetup}
        imageAlt="Business Services Illustration"
      />

      <div className="flex items-center justify-center h-[60vh] bg-gray-50 px-4">
        <div className="text-center max-w-2xl">
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            How Much Does Business Setup In Dubai Cost?
          </h1>

          {/* Description */}
          <p className="text-gray-700 mb-6 leading-relaxed text-sm md:text-base">
            That depends. What is your business activity? Free zone or mainland?
            How many visas or shareholders? From our experience with business
            setup in Dubai for over{" "}
            <span className="font-semibold">80,000 entrepreneurs</span>, we have
            created the Business Setup Cost Calculator to give you the answer.
          </p>

          {/* Button */}
          <button
            className="bg-red-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-red-700 transition"
            onClick={() => navigate("/calculate")}
          >
            Calculate Now
          </button>
        </div>
      </div>
      <HeroSection
        title="Free"
        highlightText="Zone"
        description="The Free Zone is a new idea located in the heart of the United Arab Emirates. It represents not only a geographical place but it is a land where you can prosper and enjoy at the same time. This dynamic platform has become a lighthouse for global visionaries, offering them a canvas on which to paint their ambitions free from all the potential hurdles. By starting a business setup in a Free Zone you can have an experience that is the fusion of creativity and entrepreneurial spirit."
        imagePath={FreeZone}
        imageAlt="Business Services Illustration"
        imageMaxHeight={700}
        triangleImage={ServiceRightTriangle}
      />
      <HeroSection
        title="Visa"
        highlightText="Services"
        description="Everybody dreams of visiting Dubai, but not everyone gets there. Why? The visa procedures can be quite complex. Don't worry, we're the experts, and we'll take care of it for you. We provide a variety of visa services in Dubai, helping individuals and businesses across the Emirates with documentation and issuance. Our commitment is to provide guidance and support during the visa and documentation process, prioritizing your convenience and peace of mind. Explore our services for a hassle-free visa experience."
        imagePath={VisaServicespng}
        imageAlt="Business Services Illustration"
        imageMaxHeight={700}
        imageFirst={false}
        triangleImage={ServiceLeftTriangle}
      />
      <HeroSection
        title="Off"
        highlightText="Shore"
        description="Are you thinking about forming an offshore company? Then you have landed at the right place. Dive into the complexities of Offshore Company Formation in Dubai, a decision that opens unlimited opportunities. HA Group reveals the distinctive characteristics of UAE Offshore Companies, with a focus on Dubai's effectiveness as a worldwide commercial hub. We will guide you and clear your doubts by providing all the information."
        imagePath={OffShore}
        imageAlt="Business Services Illustration"
        imageMaxHeight={700}
        triangleImage={ServiceRightTriangle2}
      />
    </>
  );
};

export default BuisnessService;
