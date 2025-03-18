import { BlogsSection } from "../components/BlogsSection";
import FAQAccordion from "../components/Faq";
import NewsEventsSection from "../components/NewsSection";
import ServicesSection, { PartnersSection, Testimonials, ValueAddedServices, VideoSection } from "../components/ServiceSection";


    
const HeroSection = () => {
  return (
    <>
      <VideoSection />
      <PartnersSection />
      <ServicesSection />
      <Testimonials />
      <ValueAddedServices />
      <BlogsSection/>
      <NewsEventsSection/>
      <FAQAccordion/>
    </>
  );
};

export default HeroSection;