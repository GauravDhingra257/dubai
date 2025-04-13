import { Fade } from "react-awesome-reveal";
import {
  AboutSection,
  ApplyNowSection,
  CompanySection,
  TeamSection,
  WhyHAGroupSection,
} from "../components/AboutUs";
import { LeadershipTeamSection } from "../components/LandingPageComponents";

const AboutPage = () => {
  return (
    <>
      <Fade triggerOnce direction="up">
        <AboutSection />
      </Fade>
      <WhyHAGroupSection />

      <ApplyNowSection />
      <LeadershipTeamSection />
      <CompanySection />
    </>
  );
};

export default AboutPage;
