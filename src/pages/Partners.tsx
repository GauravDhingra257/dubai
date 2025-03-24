import React from "react";
import EnhancedImageSlider from "../components/ImageSlider";
import partners from "../assets/images/partners/partners.png";
import partner1 from "../assets/images/partners/sultan.png";
import partner2 from "../assets/images/partners/sultan2.png";
import partner3 from "../assets/images/partners/bassma.png";
import partner4 from "../assets/images/partners/sultan3.png";
import partner5 from "../assets/images/partners/wesam.png";
import { Fade } from "react-awesome-reveal";

const Partners = () => {
  const sliderImages = [partners, partners, partners];
  const leaders = [
    {
      name: "Sultan Almuheisen",
      title: "Chairman",
      image: partner1,
    },
    {
      name: "Wesam Kattan",
      title: "CEO",
      image: partner2,
    },
    {
      name: "Bassma El Afghani",
      title: "President",
      image: partner3,
    },
  ];

  const teamMembers = [
    {
      name: "Sultan Almuheisen",
      department: "Development",
      image: partner4,
    },
    {
      name: "Sultan Almuheisen",
      department: "Development",
      image: partner5,
    },
    {
      name: "Noha Saadi",
      department: "Story",
      image: partner1,
    },
    {
      name: "Maria Chin",
      department: "HR & Admin",
      image: partner2,
    },
    {
      name: "Fadi Jishy",
      department: "Finance",
      image: partner3,
    },
    {
      name: "Brent Emery",
      department: "International Film",
      image: partner4,
    },
    {
      name: "Ron Cohen",
      department: "HR & Admin",
      image: partner5,
    },
    {
      name: "Deana Nassar",
      department: "Talent",
      image: partner1,
    },
  ];
  return (
    <>
      <EnhancedImageSlider
        subtitle="Our Team"
        images={sliderImages}
        title="The Team 
Behind The Craft"
      />
      <div className="px-4 sm:px-6 md:px-8 py-6">
      <Fade triggerOnce direction="left" cascade damping={0.1} >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">

          <span className="text-black">Our </span>
          <span className="text-blue-400">Leaders</span>
        </h2>



        <div className="flex flex-wrap">
          {leaders.map((leader, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 px-2 mb-6">
              <div className="w-full mb-2">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full rounded-md"
                />
              </div>
              <Fade triggerOnce direction="up">
              <div className="text-center">
                <h3 className="text-md font-bold">{leader.name}</h3>
                <p className="text-blue-400 text-sm">{leader.title}</p>
              </div>
              </Fade>
           </div>
          ))}
        </div>
        </Fade>
      {/* </div> */}

      {/* Team Section */}
      <Fade triggerOnce direction="right" cascade damping={0.1}>

      <div className="px-4 sm:px-6 md:px-8 py-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
          <span className="text-black">Our </span>
          <span className="text-blue-400">Team</span>
        </h2>
      </div>

        <div className="flex flex-wrap -mx-2">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-1/2 sm:w-1/3 md:w-1/4  px-2 mb-6">
              <div className="w-full mb-1">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full rounded-md"
                />
              </div>
              <Fade triggerOnce direction="up">
              <div className="text-center">
                

                <h3 className="text-sm font-bold">{member.name}</h3>
                <p className="text-blue-400 text-xs">{member.department}</p>
              </div>
              </Fade>
            </div>
          ))}
        </div>
        </Fade>
      </div>
    </>
  );
};

export default Partners;
