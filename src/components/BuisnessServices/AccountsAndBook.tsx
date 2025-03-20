import React from "react";
import { HeroSection, ContentSection } from "../../components/Component1";

import LoadImage from "../../assets/images/buisness/load.png";
import AccountImage from "../../assets/images/buisness/calculator.jpg";
import TaxImage from "../../assets/images/buisness/tax.png";
import TaxReturnImage from "../../assets/images/buisness/tax2.jpg";
import MarketingImage from "../../assets/images/buisness/load.png";
import DevelopmentImage from "../../assets/images/buisness/code.jpg";

const MainServices = () => {
  return (
    <div>
      {/* Business Services Section */}
      <HeroSection
        title="Business"
        highlightText="Services"
        description="Whether you're looking to establish your venture on the mainland, leverage the advantages of Freezones, or explore the benefits of an offshore jurisdiction, we have you covered."
        imagePath={LoadImage}
        imageAlt="Business Services Illustration"
        imageMaxHeight={700}
      />

      {/* Account and Bookkeeping Section */}
      <HeroSection
        title="Account and"
        highlightText="Bookkeeping"
        description="Whether you're looking to establish your venture on the mainland, leverage the advantages of Freezones, or explore the benefits of an offshore jurisdiction, we have you covered."
        imagePath={AccountImage}
        imageAlt="Account and Bookkeeping Illustration"
        imageMaxHeight={550}
      />

      {/* Tax Registration Section */}
      <ContentSection
        title="Tax Registration"
        description="The Free Zone is a new idea located in the heart of the United Arab Emirates. It represents not only a geographical place but a land where you can prosper and enjoy at the same time. By starting a business setup in a Free Zone, you can experience the fusion of creativity and entrepreneurial spirit."
        imagePath={TaxImage}
        imageAlt="Tax Registration"
        imageFirst={false}
        hasBgColor={false}
      />

      {/* Tax Return Filing Section */}
      <ContentSection
        title="Tax Return Filing"
        description="Everybody dreams of visiting Dubai, but not everyone gets there. Visa procedures can be complex, but we're the experts and will take care of it for you. Our services include document assistance, ensuring a hassle-free visa experience."
        imagePath={TaxReturnImage}
        imageAlt="Tax Return Filing"
        imageFirst={true}
        hasBgColor={true}
      />
      <ContentSection
        title="Website Development"
        description=" Are you thinking about forming an offshore company? Then you have
                   landed at the right place. Dive into the complexities of Offshore
                   Company Formation in Dubai, a decision that opens unlimited
                   opportunities. HA Group reveals the distinctive characteristics of
                   UAE Offshore Companies, with a focus on Dubai's effectiveness as a
                   worldwide commercial hub. We will guide you and clear your doubts by
                   providing all the information."
        imagePath={MarketingImage}
        imageAlt=" Website Development"
        imageFirst={false}
        hasBgColor={false}
      />

      <ContentSection
        title=" Social Media Marketing"
        description=" Everybody dreams of visiting Dubai, but not everyone gets there.
            Why? The visa procedures can be quite complex. Don't worry, we're
           the experts, and we'll take care of it for you. We provide a variety
            of visa services in Dubai, helping individuals and businesses across
            the Emirates with documentation and issuance. Our commitment is to
            provide guidance and support during the visa and documentation
            process, prioritizing your convenience and peace of mind. Explore
            our services for a hassle-free visa experience."
        imagePath={MarketingImage}
        imageAlt="  Social Media Marketing"
        imageFirst={true}
        hasBgColor={false}
      />

      <ContentSection
        title="Press Rlease"
        description=" Are you thinking about forming an offshore company? Then you have
             landed at the right place. Dive into the complexities of Offshore
             Company Formation in Dubai, a decision that opens unlimited
             opportunities. HA Group reveals the distinctive characteristics of
             UAE Offshore Companies, with a focus on Dubai's effectiveness as a
             worldwide commercial hub. We will guide you and clear your doubts by
             providing all the information"
        imagePath={MarketingImage}
        imageAlt="  Social Media Marketing"
        imageFirst={false}
        hasBgColor={false}
      />

      <ContentSection
        title="Personal Branding"
        description=" Everybody dreams of visiting Dubai, but not everyone gets there.
            Why? The visa procedures can be quite complex. Don't worry, we're
            the experts, and we'll take care of it for you. We provide a variety
            of visa services in Dubai, helping individuals and businesses across
            the Emirates with documentation and issuance. Our commitment is to
            provide guidance and support during the visa and documentation
            process, prioritizing your convenience and peace of mind. Explore
            our services for a hassle-free visa experience."
        imagePath={MarketingImage}
        imageAlt="  Social Media Marketing"
        imageFirst={true}
        hasBgColor={false}
      />

      <HeroSection
        title="Property"
        highlightText="Conveyancing Marketing"
        description=" Whether you're looking to establish your venture on the mainland,
             leverage the advantages of Freezones, or explore the benefits of an
            offshore jurisdiction, we have you covered."
        imagePath={MarketingImage}
        imageAlt="Business Services Illustration"
        imageMaxHeight={700}
      />

      <HeroSection
        title=" Power of "
        highlightText="Attorney"
        description=" Whether you're looking to establish your venture on the mainland,
             leverage the advantages of Freezones, or explore the benefits of an
            offshore jurisdiction, we have you covered."
        imagePath={MarketingImage}
        imageAlt="Business Services Illustration"
        imageMaxHeight={700}
      />

      <HeroSection
        title="Nominee Director "
        highlightText="Services"
        description=" Whether you're looking to establish your venture on the mainland,
             leverage the advantages of Freezones, or explore the benefits of an
            offshore jurisdiction, we have you covered."
        imagePath={MarketingImage}
        imageAlt="Business Services Illustration"
        imageMaxHeight={700}
      />

      <HeroSection
        title="Mortgage "
        highlightText="Financing"
        description=" Whether you're looking to establish your venture on the mainland,
             leverage the advantages of Freezones, or explore the benefits of an
            offshore jurisdiction, we have you covered."
        imagePath={MarketingImage}
        imageAlt="Business Services Illustration"
        imageMaxHeight={700}
      />

      <HeroSection
        title="Insurance "
        highlightText="Services"
        description=" Whether you're looking to establish your venture on the mainland,
             leverage the advantages of Freezones, or explore the benefits of an
            offshore jurisdiction, we have you covered."
        imagePath={MarketingImage}
        imageAlt="Business Services Illustration"
        imageMaxHeight={700}
      />

      <ContentSection
        title="General Insurance"
        description="Are you thinking about forming an offshore company? Then you have
             landed at the right place. Dive into the complexities of Offshore
             Company Formation in Dubai, a decision that opens unlimited
             opportunities. HA Group reveals the distinctive characteristics of
             UAE Offshore Companies, with a focus on Dubai's effectiveness as a
            worldwide commercial hub. We will guide you and clear your doubts by
             providing all the information."
        imagePath={MarketingImage}
        imageAlt="General Insurance"
        imageFirst={false}
        hasBgColor={false}
      />
      <ContentSection
        title="Moto/Auto Insurance"
        description=" Everybody dreams of visiting Dubai, but not everyone gets there.
            Why? The visa procedures can be quite complex. Don't worry, we're
            the experts, and we'll take care of it for you. We provide a variety
            of visa services in Dubai, helping individuals and businesses across
            the Emirates with documentation and issuance. Our commitment is to
            provide guidance and support during the visa and documentation
            process, prioritizing your convenience and peace of mind. Explore
            our services for a hassle-free visa experience."
        imagePath={MarketingImage}
        imageAlt=" Moto/Auto Insurance"
        imageFirst={true}
        hasBgColor={false}
      />
    </div>
  );
};

export default MainServices;
