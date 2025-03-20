import { HeroSection } from "../../components/Component1";
import LoadImage from "../../assets/images/buisness/load.png";
import BusinessSetupHero from "../../components/Component2";

const VisaServices = () => {
  return (
    <>
      <BusinessSetupHero
        title="Employment"
        highlightText="Visa"
        description="The Free Zone is a new idea located in the heart of the United Arab Emirates. It represents not only a geographical place but it is a land where you can prosper and enjoy at the same time. This dynamic platform has become a lighthouse for global visionaries, offering them a canvas on which to paint their ambitions free from all the potential hurdles. By starting a business setup in a Free Zone you can have an experience that is the fusion of creativity and entrepreneurial spirit."
        imagePath={LoadImage}
        imageAlt="Employment Visa Illustration"
      />

      <HeroSection
        title="Family"
        highlightText="Visa"
        description="Everybody dreams of visiting Dubai, but not everyone gets there. Why? The visa procedures can be quite complex. Don't worry, we're the experts, and we'll take care of it for you. We provide a variety of visa services in Dubai, helping individuals and businesses across the Emirates with documentation and issuance. Our commitment is to provide guidance and support during the visa and documentation process, prioritizing your convenience and peace of mind. Explore our services for a hassle-free visa experience."
        imagePath={LoadImage}
        imageAlt="Family Visa Illustration"
        imageMaxHeight={700}
        imageFirst={false}
      />

      <HeroSection
        title="Golden"
        highlightText="Visa"
        description="Are you thinking about forming an offshore company? Then you have landed at the right place. Dive into the complexities of Offshore Company Formation in Dubai, a decision that opens unlimited opportunities. HA Group reveals the distinctive characteristics of UAE Offshore Companies, with a focus on Dubai's effectiveness as a worldwide commercial hub. We will guide you and clear your doubts by providing all the information."
        imagePath={LoadImage}
        imageAlt="Golden Visa Illustration"
        imageMaxHeight={700}
      />

      <HeroSection
        title="Property Investor"
        highlightText="Visa"
        description="Everybody dreams of visiting Dubai, but not everyone gets there. Why? The visa procedures can be quite complex. Don't worry, we're the experts, and we'll take care of it for you. We provide a variety of visa services in Dubai, helping individuals and businesses across the Emirates with documentation and issuance. Our commitment is to provide guidance and support during the visa and documentation process, prioritizing your convenience and peace of mind. Explore our services for a hassle-free visa experience."
        imagePath={LoadImage}
        imageAlt="Investor Visa Illustration"
        imageMaxHeight={700}
        imageFirst={false}
      />

      <HeroSection
        title="Silver"
        highlightText="Visa"
        description="Are you thinking about forming an offshore company? Then you have landed at the right place. Dive into the complexities of Offshore Company Formation in Dubai, a decision that opens unlimited opportunities. HA Group reveals the distinctive characteristics of UAE Offshore Companies, with a focus on Dubai's effectiveness as a worldwide commercial hub. We will guide you and clear your doubts by providing all the information."
        imagePath={LoadImage}
        imageAlt="Silver Visa Illustration"
        imageMaxHeight={700}
      />
    </>
  );
};

export default VisaServices;
