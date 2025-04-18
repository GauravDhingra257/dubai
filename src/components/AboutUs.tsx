import React from "react";
import haVideo from "../assets/video/main.mp4";
import ourMission from "../assets/images/about/OurMission.png";
import OurPhilosophy from "../assets/images/about/OurPhilosophy.png";
import { Fade, Zoom } from "react-awesome-reveal";
import SliderTriangle from "../assets/images/triangles/SliderTriangle.png";
// Component 1: Hero Section with About Us
export const AboutSection = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white drop-shadow-lg p-4 md:p-6 items-center relative">
      <img
        loading="lazy"
        src={SliderTriangle}
        className="hidden md:block md:absolute md:top-1/2 -translate-y-1/2 md:left-0 md:h-72"
      />
      <div className="max-w-4xl flex flex-col items-center mx-auto md:flex-row">
        <div className="relative w-full md:w-1/2 mb-4 md:mb-0">
          <div className="w-full h-48 md:h-64 bg-gray-300 relative">
            <div className="absolute inset-0 bg-gray-700 opacity-50"></div>
            <video
              autoPlay
              loop
              controls
              playsInline
              muted
              className="w-full h-full object-cover"
            >
              <source src={haVideo} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:pl-8">
          <h2 className="text-3xl font-bold mb-4">About us</h2>
          <p className="text-gray-800">
            At HA Group, we are more than just engineers; we are visionary
            creators on a mission. Our purpose extends beyond the realm of
            technology—it's about serving humanity and unlocking its limitless
            potential. With a profound commitment to innovation, we transform
            entrepreneurial dreams into tangible realities.
          </p>
        </div>
      </div>
    </div>
  );
};

// Component 2: Why HA Group Section
export const WhyHAGroupSection = () => {
  return (
    <div className="py-12 px-4 md:px-6 bg-white max-w-5xl mx-auto">
      <Fade triggerOnce direction="up" cascade damping={0.1}>
        <h2 className="text-3xl font-bold mb-6">
          Why <span className="text-blue-400">HA Group</span>?
        </h2>
        <p className="mb-8 max-w-3xl">
          We prioritise our people, ensuring they are nurtured at their fullest
          potential to contribute seamlessly to our vision!
        </p>
      </Fade>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
        {/* Vertical Dividers */}
        <div className="hidden md:block absolute left-1/3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
        <div className="hidden md:block absolute left-2/3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
        <Fade triggerOnce direction="down" cascade damping={0.1}>
          {/* Card 1 */}
          <div className="flex flex-col p-3 justify-center items-center">
            <div className="flex items-start mb-2 w-full">
              <div className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="font-bold ">Innovation-First Attitude</h3>
            </div>
            <p className="text-sm text-gray-600">
              Daring to part part of our dictionary, we deliver disruptive tech
              and revolutionary solutions.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col p-3 justify-center items-center">
            <div className="flex items-start mb-2 w-full">
              <div className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="font-bold">Human-Centric Approach</h3>
            </div>
            <p className="text-sm text-gray-600">
              Serving our clients is our goal, but listening to the people in
              our offices and using our intuition.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col p-3 justify-center items-center">
            <div className="flex items-start mb-2 w-full">
              <div className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="font-bold">Obsession With Quality</h3>
            </div>
            <p className="text-sm text-gray-600">
              We ensure quality in every respect - both in the projects we
              deliver and all the way to our deliverables.
            </p>
          </div>
        </Fade>
        {/* Horizontal Divider */}
        <div className="col-span-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-6" />

        {/* Card 4 */}
        <Fade triggerOnce direction="up" cascade damping={0.1}>
          <div className="flex flex-col p-3 justify-center items-center">
            <div className="flex items-start mb-2 w-full">
              <div className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="font-bold">Diversity & Inclusion</h3>
            </div>
            <p className="text-sm text-gray-600">
              Workforce complements our inclusive culture. Their combined
              creativity drives innovation.
            </p>
          </div>

          {/* Card 5 */}
          <div className="flex flex-col p-3 justify-center items-center">
            <div className="flex items-start mb-2 w-full">
              <div className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <h3 className="font-bold">Adaptability As A Priority</h3>
            </div>
            <p className="text-sm text-gray-600">
              Markets change and so do your needs. Infinite flexibility enables
              us to adapt swiftly to the future.
            </p>
          </div>

          {/* Card 6 */}
          <div className="flex flex-col p-3 justify-center items-center">
            <div className="flex items-start mb-2 w-full">
              <div className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="font-bold">Focus In The Feature</h3>
            </div>
            <p className="text-sm text-gray-600">
              We don't stop you when you need help to future-proof your
              solution.
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

// Component 3: Apply Now Section
export const ApplyNowSection = () => {
  return (
    <div className="bg-[radial-gradient(closest-side,#00AEEF,#0076B6,#0563AC)] text-white py-10 px-4 md:px-6">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
        <Fade triggerOnce direction="down" cascade damping={0.1}>
          <h2 className="text-2xl font-bold mb-4 md:mb-0">Apply Now</h2>

          <div className="flex-grow mx-0 md:mx-8 mb-4 md:mb-0">
            <p className="text-sm md:text-base text-center">
              Explore all vacancies below or share your resume at
              careers@techwards.co
            </p>
          </div>

          <button className="bg-red-700 hover:bg-red-800 text-white px-6 py-2 rounded">
            See More
          </button>
        </Fade>
      </div>
    </div>
  );
};

export const TeamMember = ({
  image,
  name,
  position,
  description,
  linkedin,
  isCEO,
}) => {
  return (
    <div className={`mb-8 ${isCEO ? "col-span-full" : ""}`}>
      <div className="flex items-center mb-2">
        <div className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center mr-3">
          <span className="text-white text-xs">
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </span>
        </div>
        <div>
          <h3 className="font-medium">{name}</h3>
          <p className="text-gray-600 text-sm">{position}</p>
        </div>
        {linkedin && (
          <a href="#" className="ml-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-blue-400"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        )}
      </div>
      <p className={`text-sm text-gray-700 ${isCEO ? "text-center" : ""}`}>
        {description}{" "}
        <span className="text-blue-400 cursor-pointer">read more</span>
      </p>
    </div>
  );
};

export const TeamSection = () => {
  const teamMembers = [
    {
      name: "Nabeel Akhter",
      position: "Chief Executive Officer",
      description:
        "Nabeel leads the company utilising his 15+ years of experience of leading teams of up to 100 people for startups and fortune 500 organisations. He brings his international exposure of working with Google and Qualcomm, of successful contribution in the exit of two startups. His diverse background and travelling experiences make him an emphatic leader that his team depends on and trusts.",
      linkedin: true,
      isCEO: true,
    },
    {
      name: "Faiz Amir",
      position: "VP Business Development",
      description:
        "Faiz has 11+ years of experience (12 years in UAE) of Strategic Sales and Enterprise Account Management for Software Service Providers. He is well-versed in business dev...",
      linkedin: true,
      isCEO: false,
    },
    {
      name: "Syed Wahaj Ali",
      position: "Director Engineering",
      description:
        "Wahaj has been working with SaaS, PaaS and IaaS systems for the last 10 years. His international experience and education, and his contributions with startups ...",
      linkedin: true,
      isCEO: false,
    },
    {
      name: "Adeel Ahmed",
      position: "Senior Engineering Manager",
      description:
        "Adeel is a seasoned software engineer with a demonstrated history of working in the computer software industry, skilled in C/C++, Python, Linux, SaltStack, DevOps, AWS ...",
      linkedin: true,
      isCEO: false,
    },
    {
      name: "Kamran Shamim",
      position: "Senior Engineering Manager",
      description:
        "Kamran is a trained software engineer with a demonstrated history of working in the software industry, initially in embedded software and later server-side cloud applications ...",
      linkedin: true,
      isCEO: false,
    },
    {
      name: "Aqil Khan",
      position: "Engineering Manager - Business Development & QA",
      description:
        "Aqil is an experienced engineering manager with 12+ years of experience executing STLC & SDLC. His background spans...",
      linkedin: true,
      isCEO: false,
    },
  ];

  return (
    <div className="bg-gray-50 py-12 px-4 md:px-6 ">
      <div className="max-w-5xl mx-auto">
        <Zoom cascade damping={0.1}>
          <h2 className="text-3xl font-bold mb-10">
            Our <span className="text-blue-400">Team</span>
          </h2>
          <div className=" max-w-4xl mx-auto">
            {/* CEO Section */}
            <div className="mb-8">
              <TeamMember {...teamMembers[0]} isCEO={true} />
            </div>

            {/* Horizontal Divider after CEO */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-8" />

            {/* Rest of the team in 2 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 relative">
              {/* Vertical Divider between columns */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent" />

              {teamMembers.slice(1).map((member, index) => (
                <React.Fragment key={member.name}>
                  <TeamMember {...member} />
                  {index !== teamMembers.length - 2 && index % 2 === 1 && (
                    <div className="col-span-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-4" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export const CompanySection = () => {
  return (
    <div className="max-w-5xl md:px-6 mx-auto px-4 py-12 font-sans">
      {/* Committed To Our Work Section */}

      <div className="mb-12">
        <Fade triggerOnce direction="up" cascade damping={0.1}>
          <h2 className="text-3xl font-bold text-gray-800">Committed To</h2>
          <h2 className="text-3xl font-bold text-blue-400">Our Work</h2>
        </Fade>
      </div>

      {/* Two Columns Section */}
      <div className="flex flex-col md:flex-row justify-between mb-16">
        {/* Mission Column */}

        <div className="flex-1 text-center px-6 pb-8 md:pb-0">
          <Fade triggerOnce direction="left" cascade damping={0.1}>
            <div className="flex justify-center mb-4">
              <div className="relative">
                <img
                  loading="lazy"
                  src={ourMission}
                  alt="Target icon"
                  className="mx-auto h-36"
                />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3">Our Mission</h3>
            <p className="text-sm text-gray-600">
              Technuvus aims to leverage technology to help people live
              meaningfully and purposefully.
            </p>
          </Fade>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block w-px bg-gray-200 mx-4"></div>

        {/* Philosophy Column */}
        <div className="flex-1 text-center px-6">
          <Fade triggerOnce direction="right" cascade damping={0.1}>
            <div className="flex justify-center mb-4">
              <div className="relative">
                <img
                  loading="lazy"
                  src={OurPhilosophy}
                  alt="Lightbulb icon"
                  className="mx-auto h-36"
                />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3">Our Philosophy</h3>
            <p className="text-sm text-gray-600">
              At Technuvus, we want our team to positively contribute towards
              the success of society.
            </p>
          </Fade>
        </div>
      </div>

      {/* CEO Message Section */}
      <div>
        <Fade triggerOnce direction="up" cascade damping={0.1}>
          <h2 className="text-3xl font-bold text-gray-800">Message From</h2>
          <h2 className="text-3xl font-bold text-blue-400 mb-6">Our CEO</h2>

          <div className="text-sm text-gray-600 space-y-4">
            <p>
              I've had the privilege of working with industry giants like
              Google, Qualcomm, Symantec, and pioneering Silicon Valley
              startups. Throughout my career, I've tackled fascinating
              challenges at the forefront of technology. Insights and
              recognition have come my way, but I found something even more
              profound in this journey.
            </p>

            <p>
              What truly stands out is the profound connection people can forge
              between their work and a greater purpose. This very passion now
              fuels the heart of Technuvus. At Technuvus, our mission is clear:
              to generate true value for our users, clients, and, ultimately,
              humanity.
            </p>

            <p>
              We firmly believe that organizations should be conduits for
              positive change in the world. Technuvus aspires to be the trusted
              technology partner2 for each visionary enterprise. Our commitment
              is to harness the power of AI and technology to propel your
              mission and make a meaningful impact on a global scale.
            </p>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-8" />

          <div className="mt-8 text-center">
            <p className="font-medium text-gray-800">Syed Hyder</p>
          </div>
        </Fade>
      </div>
    </div>
  );
};
