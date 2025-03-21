import { HeroSection } from "../../components/Component1";
import BusinessSetupHero from "../../components/Component2";
import ServiceLeftTriangle from "../../assets/images/triangles/ServiceLeftTriangle.png";
import ServiceRightTriangle from "../../assets/images/triangles/ServiceRightTriangle.png";
import BankImage from "../../assets/images/buisness/bank.png";
import BankPeople from "../../assets/images/buisness/bankPeople.png";
import BankWomen from "../../assets/images/buisness/bankwomen.png";
const BankServices = () => {
  return (
    <>
      <BusinessSetupHero
        title="Bank"
        highlightText="Account"
        description="Whether you're looking to establish your venture on the mainland, leverage the advantages of Freezones, or explore the benefits of an offshore jurisdiction, we have you covered."
        imagePath={BankImage}
        imageAlt="Bank Account Illustration"
      />

      <HeroSection
        title="Cooperate"
        highlightText="BA"
        description="The Free Zone is a new idea located in the heart of the United Arab Emirates. It represents not only a geographical place but it is a land where you can prosper and enjoy at the same time. This dynamic platform has become a lighthouse for global visionaries, offering them a canvas on which to paint their ambitions free from all the potential hurdles. By starting a business setup in a Free Zone you can have an experience that is the fusion of creativity and entrepreneurial spirit."
        imagePath={BankPeople}
        imageAlt="Cooperate BA Illustration"
        imageMaxHeight={700}
        triangleImage={ServiceRightTriangle}
      />

      <HeroSection
        title="Personal"
        highlightText="BA"
        description="Everybody dreams of visiting Dubai, but not everyone gets there. Why? The visa procedures can be quite complex. Don't worry, we're the experts, and we'll take care of it for you. We provide a variety of visa services in Dubai, helping individuals and businesses across the Emirates with documentation and issuance. Our commitment is to provide guidance and support during the visa and documentation process, prioritizing your convenience and peace of mind. Explore our services for a hassle-free visa experience."
        imagePath={BankWomen}
        imageAlt="Personal BA Illustration"
        imageMaxHeight={700}
        imageFirst={false}
        triangleImage={ServiceLeftTriangle}
      />
    </>
  );
};

export default BankServices;
