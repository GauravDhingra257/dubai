import { BlogsSection } from "../components/BlogsSection";
import FAQAccordion from "../components/Faq";
import NewsEventsSection from "../components/NewsSection";
import MainServices, { AboutCompanySection, CaseStudies, ClientsSpeak, LeadershipTeamSection, PartnersSection, TeamSection, Testimonials, ValueAddedServices, VideoSection } from "../components/LandingPageComponents";


    
const HeroSection = () => {
  return (
    <>
      <VideoSection />
      <PartnersSection />
      <MainServices />
      <Testimonials />
      <ValueAddedServices />
      <CaseStudies/>
      <TeamSection/>
      <AboutCompanySection/>
      <LeadershipTeamSection/>
      <ClientsSpeak/>
      <BlogsSection/>
      <NewsEventsSection/>
      <FAQAccordion/>

    </>
  );
};

export default HeroSection;