import { InlineWidget } from "react-calendly";
import BookAppointmentTri from "../assets/images/triangles/BookAppointmentTri.png";
import { Fade, Zoom } from "react-awesome-reveal";
import { calendlyUrl } from "../Constants/constant";
import main from "../assets/images/appointment/main.png"
import connect from "../assets/images/appointment/connect.png";
const BusinessBanner = () => {
  return (
    <>
      <section className="relative w-full max-w-6xl mx-auto py-12 px-6">
        <Zoom>
        <div className="relative">
          <img
            loading="lazy"
            src={main}
            alt="Empower Business"
            className="w-full min-h-108 object-cover rounded-4xl"
          />

          <div className="absolute inset-0 flex items-end justify-start bg-black/50  rounded-4xl p-8">
            <div className="text-white max-w-md">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Empower Your <br /> Business Dreams
              </h2>
              <p className="text-lg">
                Schedule a Consultation with Our Experts <br /> and Unlock Your
                Path to Success
              </p>
            </div>
          </div>
        </div>
        </Zoom>
      </section>
      <LetsConnect />
      <Calendly />
      <MeetHAGroup />
    </>
  );
};
export const LetsConnect = () => {
  return (
    <div className="relative">
      <img
        loading="lazy"
        src={BookAppointmentTri}
        className="hidden md:block md:absolute md:top-0 md:right-0 md:h-56)"
      />
      <section className="max-w-6xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <Fade triggerOnce direction="left">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-left leading-snug">
            Let’s <span className="text-blue-400">Connect</span>
          </h2>
          <p className="text-gray-700 mt-4 font-semibold">
            Get in touch with our team to know more!
          </p>
          <p className="text-gray-600 mt-4">
            Need help with setting up your business in the UAE? HA Group is here
            for you! Our team is ready to guide you through the process,
            ensuring a seamless experience from start to finish.
          </p>
          <p className="text-gray-600 mt-4">
            Reach out to us and discover how we can simplify your journey to
            success in the dynamic business environment of the UAE.
          </p>
          <button
            className="mt-6 bg-red-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-red-600"
            onClick={() =>
              window.open(
                calendlyUrl
              )
            }
          >
            Book an appointment
          </button>
        </div>
        </Fade>
        <Fade triggerOnce direction="right">
        <div className="flex justify-center">
          <img
            loading="lazy"
            src={connect}
            alt="Let's Connect"
            className=" h-108 max-w-sm rounded-lg object-cover shadow-xl shadow-blue-500/50"
          />
        </div>
        </Fade>
      </section>
    </div>
  );
};

export const Calendly = () => {
  return (
    <div className="block">
      <InlineWidget
        styles={{
          height: "58rem",
        }}
        url={calendlyUrl}
      />
    </div>
  );
};
export const MeetHAGroup = () => {
  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <Fade triggerOnce direction="up" cascade damping={0.1}>
        <h2 className="text-4xl font-bold text-left">
          Meet <span className="text-blue-400">HA Group</span>
        </h2>
        <h3 className="font-semibold mt-4">
          Why You'll Love Working with HA Group
        </h3>
        <p className="text-gray-700 mt-2">
          Welcome to HA Group, where we’ve blended the best of both
          worlds—traditional business wisdom and fresh, innovative thinking. We
          champion an environment where every idea is valued, diversity
          flourishes, and success stories are a daily event.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {features.map((feature, index) => (
            <div key={index}>
              <h4 className="font-semibold text-lg">{feature.title}</h4>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>

        <button className="mt-6 bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600" onClick={() => window.open(calendlyUrl)}>
          Know more
        </button>
        </Fade>
      </div>
    </section>
  );
};

const features = [
  {
    title: "Networking Opportunities",
    description:
      "Expand your network by connecting with Set Hub’s varied mix of businesses.",
  },
  {
    title: "Diverse Freezone Options",
    description: "Whatever your business type, we’ve got a spot for you.",
  },
  {
    title: "Comprehensive Support",
    description:
      "Access our 300+ tailored services to smoothly launch and run your business.",
  },
  {
    title: "Accelerated Business Setup",
    description:
      "Enjoy quicker setup times through our special partnerships with local authorities.",
  },
  {
    title: "Customer-Centric",
    description:
      "We always aim to be customer-first, reliable, and empowering. We understand the complexity of our industry and would not want anyone to feel alienated.",
  },
  {
    title: "Strategic Office Locations",
    description:
      "Strategically situated for superior access and business leverage.",
  },
];

export default BusinessBanner;
