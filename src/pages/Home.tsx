import { BlogsSection } from "../components/BlogsSection";
import FAQAccordion from "../components/Faq";
import MainServices, {
  AboutCompanySection,
  CaseStudies,
  LeadershipTeamSection,
  PartnersSection,
  WhyUs,
  Testimonials,
  ValueAddedServices,
  VideoSection,
} from "../components/LandingPageComponents";
import { Fade, Zoom } from "react-awesome-reveal";

const HeroSection = () => {

  return (
    <>
      <Fade triggerOnce direction="up">
        <VideoSection />
      </Fade>
      <Fade triggerOnce direction="up">
        <PartnersSection />
      </Fade>
      <Fade triggerOnce direction="up" cascade damping={0.1}>
        <MainServices />
        <Testimonials />
        <ValueAddedServices />
      </Fade>
      <Zoom cascade triggerOnce damping={0.1}>
        <CaseStudies />
        <WhyUs />
        <AboutCompanySection />
      </Zoom>
      <LeadershipTeamSection />
      {/* <ClientsSpeak /> */}
      <BlogsSection />
      {/* <NewsEventsSection/> */}
      <FAQAccordion />
    </>
  );
};

export default HeroSection;
