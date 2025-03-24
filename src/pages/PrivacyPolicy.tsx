import React from "react";
import EnhancedImageSlider from "../components/ImageSlider";
import privacy1 from "../assets/images/privacy1.png";
import { Fade } from "react-awesome-reveal";

const PrivacyPolicy = () => {
  const sliderImages = [privacy1, privacy1, privacy1];

  return (
    <div className="bg-white min-h-screen">
      {/* Slider section */}
      <EnhancedImageSlider
        images={sliderImages}
        title="Privacy policy for HA Group"
      />

      {/* Main content with all sections */}
      <div className="flex justify-center max-w-5xl mx-auto">
          <Fade triggerOnce direction="left" cascade damping={0.1}>
        <div className=" w-full px-4 md:px-8 py-16">
          {/* First section - Privacy Policy Intro */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Privacy Policy for
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-12">
            HA Group Business Setup Services
          </h2>

          <p className="mb-8 text-sm md:text-md leading-relaxed">
            At HA Group, accessible from{" "}
            <a href="https://hagroup.ae" className="text-blue-400">
              hagroup.ae
            </a>
            , one of our main priorities is the privacy of our visitors. This
            Privacy Policy document contains types of information that is
            collected and recorded by HA Group and how we use it.
          </p>

          <p className="mb-8 text-sm md:text-md leading-relaxed">
            If you have additional questions or require more information about
            our Privacy Policy, do not hesitate to contact us.
          </p>

          <p className="mb-16 text-sm md:text-md leading-relaxed">
            This Privacy Policy applies only to our online activities and is
            valid for visitors to our website with regards to the information
            that they shared and/or collect in HA Group. This policy is not
            applicable to any information collected offline or via channels
            other than this website. Our Privacy Policy was created with the
            help of the...
          </p>

          {/* Government section */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Government</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-12">
            Approved Entity
          </h2>

          <p className="mb-8 text-sm md:text-md leading-relaxed">
            We operate as a duly licensed and authorised by a government
            company, specializing in the provision of comprehensive business
            setup, visa assistance, and licensing consultancy services within
            the United Arab Emirates (UAE).
          </p>

          <p className="mb-8 text-sm md:text-md leading-relaxed">
            Our commitment to regulatory compliance and adherence to the highest
            industry standards is reflected in our official endorsements from
            esteemed government authorities, including ejari.gov.ae and
            services.dubailand.gov.ae. Through our established collaborations
            with reputable government authorities such as Dubai Economy, Dubai
            Chamber, Dubai Courts, Dubai Municipality, and others, we have
            cultivated a track record of excellence and reliability.
          </p>

          <p className="mb-8 text-sm md:text-md leading-relaxed">
            This not only underscores our dedication to facilitating seamless
            business solutions but also ensures that our operations are
            conducted in full alignment with the legal frameworks and
            regulations set forth by the UAE government.
          </p>

          {/* Consent Section */}
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Consent</h2>

          <p className="mb-16 text-sm md:text-md leading-relaxed">
            By using our website, you hereby consent to our Privacy Policy and
            agree to its terms.
          </p>

          {/* Information we collect */}
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Information <span className="text-blue-400">we collect</span>
          </h2>

          <p className="mb-8 text-sm md:text-md leading-relaxed">
            The personal information that you are asked to provide, and the
            reasons why you are asked to provide it, will be made clear to you
            at the point we ask you to provide your personal information.
          </p>

          <p className="mb-16 text-sm md:text-md leading-relaxed">
            If you contact us directly, we may receive additional information
            about you such as your name, email address, phone number, the
            contents of the message and/or attachments you may send us, and any
            other information you may choose to provide. When you register for
            an Account, we may ask for your contact information, including items
            such as name, company name, address, email address, and telephone
            number.
          </p>

          {/* How we use your we collect */}
          <h2 className="text-3xl md:text-4xl font-bold mb-2">How we use</h2>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-8">
            your information
          </h2>

          <p className="mb-6 text-sm md:text-md leading-relaxed">
            We use the information we collect in various ways, including to:
          </p>

          <ul className="list-disc pl-8 mb-16 text-sm md:text-md">
            <li className="mb-4">Provide, operate, and maintain our website</li>
            <li className="mb-4">
              Improve, personalize, and expand our website
            </li>
            <li className="mb-4">
              Understand and analyze how you use our website
            </li>
            <li className="mb-4">
              Develop new products, services, features, and functionality
            </li>
            <li className="mb-4">
              Communicate with you, either directly or through one of our
              partners, including for customer service, to provide you with
              updates and other information relating to the website, and for
              marketing and promotional purposes
            </li>
            <li className="mb-4">Send you emails</li>
            <li className="mb-4">Find and prevent fraud</li>
          </ul>

          {/* Log Files */}
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Log <span className="text-blue-400">Files</span>
          </h2>

          <p className="mb-8 text-sm md:text-md leading-relaxed">
            HA Group follows a standard procedure of using log files. These
            files log visitors when they visit websites. All hosting companies
            do this and a part of hosting services' analytics.
          </p>

          <p className="mb-8 text-sm md:text-md leading-relaxed">
            The information collected by log files include internet protocol
            (IP) addresses, browser type, Internet Service Provider (ISP), date
            and time stamp, referring/exit pages, and possibly the number of
            clicks. These are not linked to any information that is personally
            identifiable.
          </p>

          <p className="mb-16 text-sm md:text-md leading-relaxed">
            The purpose of the information is for analyzing trends,
            administering the site, tracking users' movement on the website, and
            gathering demographic information.
          </p>

          {/* Cookies and Web Beacons */}
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Cookies and</h2>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-8">
            Web Beacons
          </h2>

          <p className="mb-8 text-sm md:text-md leading-relaxed">
            Like any other website, HA Group uses 'cookies'. These cookies are
            used to store information including visitors' preferences, and the
            pages on the website that the visitor accessed or visited.
          </p>

          <p className="mb-16 text-sm md:text-md leading-relaxed">
            The information is used to optimize the users' experience by
            customizing our web page content based on visitors' browser type
            and/or other information.
          </p>

          {/* Google Double Click */}
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Google Double Click
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-8">
            Dart Cookie
          </h2>

          <p className="mb-8 text-sm md:text-md leading-relaxed">
            Google is one of a third-party vendor on our site. It also uses
            cookies, known as DART cookies, to serve ads to our site visitors
            based upon their visit to www.website.com and other sites on the
            internet.
          </p>

          <p className="mb-16 text-sm md:text-md leading-relaxed">
            However, visitors may choose to decline the use of DART cookies by
            visiting the Google ad and content network Privacy Policy at the
            following URL —{" "}
            <a
              href="https://policies.google.com/technologies/ads"
              className="text-blue-400"
            >
              https://policies.google.com/technologies/ads
            </a>
          </p>

          {/* Our Advertising Partners */}
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Our Advertising <span className="text-blue-400">Partners</span>
          </h2>

          <p className="mb-8 text-sm md:text-md leading-relaxed">
            Some of advertisers on our site may use cookies and web beacons. Our
            advertising partners are listed below. Each of our advertising
            partners has their own Privacy Policy for their policies on user
            data. For easier access, we hyperlinked to their Privacy Policies
            below.
          </p>

          <ul className="list-disc pl-8 mb-16 text-sm md:text-md">
            <li className="mb-4">
              Google{" "}
              <a
                href="https://policies.google.com/technologies/ads"
                className="text-blue-400"
              >
                https://policies.google.com/technologies/ads
              </a>
            </li>
          </ul>

          {/* Advertising Partners Privacy Policies */}
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Advertising Partners
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-8">
            Privacy Policies
          </h2>

          <p className="mb-8 text-sm md:text-md leading-relaxed">
            You may consult this list to find the Privacy Policy for each of the
            advertising partners of HA Group. Third-party ad servers or ad
            networks uses technologies like cookies, JavaScript, or Web Beacons
            that are used in their respective advertisements and links that
            appear on HA Group, which are sent directly to users' browser. They
            automatically receive your IP address when this occurs.
          </p>

          <p className="mb-16 text-sm md:text-md leading-relaxed">
            These technologies are used to measure the effectiveness of their
            advertising campaigns and/or to personalize the advertising content
            that you see on websites that you visit. Note that HA Group has no
            access to or control over these cookies that are used by third-party
            advertisers.
          </p>

          {/* Third Party Privacy Policies */}
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Third Party</h2>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-8">
            Privacy Policies
          </h2>

          <p className="mb-8 text-sm md:text-md leading-relaxed">
            HA Group's Privacy Policy does not apply to other advertisers or
            websites. Thus, we are advising you to consult the respective
            Privacy Policies of these third-party ad servers for more detailed
            information.
          </p>

          <p className="mb-16 text-sm md:text-md leading-relaxed">
            It may include their practices and instructions about how to opt-out
            of certain options. You can choose to disable cookies through your
            individual browser options. To know more detailed information about
            cookie management with specific web browsers, it can be found at the
            browsers' respective websites.
          </p>

          {/* CCPA Privacy Rights */}
          <h2 className="text-3xl md:text-4xl font-bold mb-2">CCPA</h2>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-8">
            Privacy Rights
          </h2>

          <p className="mb-8 text-sm md:text-md leading-relaxed">
            Under the CCPA, among other rights, California consumers have the
            right to Request that a business that collects a consumer's personal
            data disclose the categories and specific pieces of personal data
            that a business has collected about consumers.
          </p>

          <p className="mb-8 text-sm md:text-md leading-relaxed">
            Request that a business delete any personal data about the consumer
            that a business has collected. Request that a business that sells a
            consumer's personal data, not sell the consumer's personal data. If
            you make a request, we have one month to respond to you. If you
            would like to exercise any of these rights, please contact us.
          </p>

          <p className="mb-8 text-sm md:text-md leading-relaxed">
            We would like to make sure you are fully aware of all of your data
            protection rights. Every user is entitled to the following:
          </p>

          <p className="mb-4 text-sm md:text-md leading-relaxed">
            <strong>The right to access</strong> - You have the right to request
            copies of your personal data. We may charge you a small fee for this
            service.
          </p>

          <p className="mb-4 text-sm md:text-md leading-relaxed">
            <strong>The right to rectification</strong> - You have the right to
            request that we correct any information you believe is inaccurate.
            You also have the right to request that we complete the information
            you believe is incomplete.
          </p>

          <p className="mb-4 text-sm md:text-md leading-relaxed">
            <strong>The right to erasure</strong> - You have the right to
            request that we erase your personal data, under certain conditions.
          </p>

          <p className="mb-4 text-sm md:text-md leading-relaxed">
            <strong>The right to restrict processing</strong> - You have the
            right to request that we restrict the processing of your personal
            data, under certain conditions.
          </p>

          <p className="mb-4 text-sm md:text-md leading-relaxed">
            <strong>The right to object to processing</strong> - You have the
            right to object to our processing of your personal data, under
            certain conditions.
          </p>

          <p className="mb-8 text-sm md:text-md leading-relaxed">
            <strong>The right to data portability</strong> - You have the right
            to request that we transfer the data that we have collected to
            another organization, or directly to you, under certain conditions.
          </p>

          <p className="mb-16 text-sm md:text-md leading-relaxed">
            If you make a request, we have one month to respond to you. If you
            would like to exercise any of these rights, please contact us.
          </p>

          {/* Children's Information */}
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Children's</h2>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-8">
            Information
          </h2>

          <p className="mb-8 text-sm md:text-md leading-relaxed">
            Another part of our priority is adding protection for children while
            using the internet. We encourage parents and guardians to observe,
            participate in, and/or monitor and guide their online activity.
          </p>

          <p className="mb-16 text-sm md:text-md leading-relaxed">
            HA Group does not knowingly collect any Personal Identifiable
            Information from children under the age of 13. If you think that
            your child provided this kind of information on our website, we
            strongly encourage you to contact us immediately and we will do our
            best efforts to promptly remove such information from our records.
          </p>
        </div>
        </Fade>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
