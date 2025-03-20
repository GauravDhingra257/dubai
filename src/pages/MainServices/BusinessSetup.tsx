import React from "react";
import { HeroSection, ContentSection } from "../../components/Component1";

import LoadImage from "../../assets/images/buisness/load.jpg";
import AccountImage from "../../assets/images/buisness/calculator.jpg";
import TaxImage from "../../assets/images/buisness/tax.png";
import TaxReturnImage from "../../assets/images/buisness/tax2.jpg";

const MainServices = () => {
  return (
    <>
      <HeroSection
        title="Business"
        highlightText="Setup"
        description="Whether you're looking to establish your venture on the mainland, leverage the advantages of Freezones, or explore the benefits of an offshore jurisdiction, we have you covered."
        imagePath={LoadImage}
        imageAlt="Business Services Illustration"
        imageMaxHeight={700}
      />

      <HeroSection
        title="Free"
        highlightText="Zone"
        description="The Free Zone is a new idea located in the heart of the United Arab Emirates. It represents not only a geographical place but it is a land where you can prosper and enjoy at the same time. This dynamic platform has become a lighthouse for global visionaries, offering them a canvas on which to paint their ambitions free from all the potential hurdles. By starting a business setup in a Free Zone you can have an experience that is the fusion of creativity and entrepreneurial spirit."
        imagePath={LoadImage}
        imageAlt="Business Services Illustration"
        imageMaxHeight={700}
      />

      <HeroSection
        title="Visa"
        highlightText="Services"
        description="Everybody dreams of visiting Dubai, but not everyone gets there. Why? The visa procedures can be quite complex. Don't worry, we're the experts, and we'll take care of it for you. We provide a variety of visa services in Dubai, helping individuals and businesses across the Emirates with documentation and issuance. Our commitment is to provide guidance and support during the visa and documentation process, prioritizing your convenience and peace of mind. Explore our services for a hassle-free visa experience."
        imagePath={LoadImage}
        imageAlt="Business Services Illustration"
        imageMaxHeight={700}
        imageFirst={false}
      />
      <HeroSection
        title="Off"
        highlightText="Shore"
        description="Are you thinking about forming an offshore company? Then you have landed at the right place. Dive into the complexities of Offshore Company Formation in Dubai, a decision that opens unlimited opportunities. HA Group reveals the distinctive characteristics of UAE Offshore Companies, with a focus on Dubai's effectiveness as a worldwide commercial hub. We will guide you and clear your doubts by providing all the information."
        imagePath={LoadImage}
        imageAlt="Business Services Illustration"
        imageMaxHeight={700}
      />
    </>
  );
};

export default MainServices;
