
import { Fade } from 'react-awesome-reveal'
import { AboutSection, ApplyNowSection, CompanySection, TeamSection, WhyHAGroupSection } from '../components/AboutUs'

const AboutPage = () => {
  return (
    <>
    <Fade triggerOnce direction="up">
        <AboutSection/>
    </Fade>
        <WhyHAGroupSection/>

        <ApplyNowSection/>
        <TeamSection/>
        <CompanySection/>

    </>
  )
}

export default AboutPage