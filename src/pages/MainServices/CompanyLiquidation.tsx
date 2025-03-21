import BusinessSetupHero from "../../components/Component2";
import Liquidation from "../../assets/images/liquidation.png";
import companylaptop from "../../assets/images/companyLaptop.png";
import companypeople from "../../assets/images/companypeople.png";
import companybuilding from "../../assets/images/buildings.png";
import ServiceLeftTriangle from "../../assets/images/triangles/ServiceLeftTriangle.png";
import ServiceRightTriangle from "../../assets/images/triangles/ServiceRightTriangle.png";
import { HeroSection } from "../../components/Component1";
const CompanyLiquidation = () => {
  return (
    <>
      <BusinessSetupHero
        title="Bank"
        highlightText="Account"
        description="Whether you're looking to establish your venture on the mainland, leverage the advantages of Freezones, or explore the benefits of an offshore jurisdiction, we have you covered."
        imagePath={Liquidation}
        imageAlt="Bank Account Illustration"
      />

      <HeroSection
        title="lorem"
        highlightText="ipsum"
        description="The Free Zone is a new idea located in the heart of the United Arab Emirates. It represents not only a geographical place but it is a land where you can prosper and enjoy at the same time. This dynamic platform has become a lighthouse for global visionaries, offering them a canvas on which to paint their ambitions free from all the potential hurdles. By starting a business setup in a Free Zone you can have an experience that is the fusion of creativity and entrepreneurial spirit."
        imagePath={companypeople}
        imageAlt="Cooperate BA Illustration"
        imageMaxHeight={700}
        triangleImage={ServiceRightTriangle}
      />

      <HeroSection
        title="Cras "
        highlightText="molestie"
        description="The Free Zone is a new idea located in the heart of the United Arab Emirates. It represents not only a geographical place but it is a land where you can prosper and enjoy at the same time. This dynamic platform has become a lighthouse for global visionaries, offering them a canvas on which to paint their ambitions free from all the potential hurdles. By starting a business setup in a Free Zone you can have an experience that is the fusion of creativity and entrepreneurial spirit."
        imagePath={companylaptop}
        imageAlt="Cooperate BA Illustration"
        imageMaxHeight={700}
        imageFirst={false}
        triangleImage={ServiceLeftTriangle}
      />
      <HeroSection
        title="Pellentesque  "
        highlightText="facilisis"
        description="The Free Zone is a new idea located in the heart of the United Arab Emirates. It represents not only a geographical place but it is a land where you can prosper and enjoy at the same time. This dynamic platform has become a lighthouse for global visionaries, offering them a canvas on which to paint their ambitions free from all the potential hurdles. By starting a business setup in a Free Zone you can have an experience that is the fusion of creativity and entrepreneurial spirit."
        imagePath={companybuilding}
        imageAlt="Cooperate BA Illustration"
        imageMaxHeight={700}
        triangleImage={ServiceRightTriangle}
      />
    </>
  );
};

export default CompanyLiquidation;
