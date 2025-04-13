import React from "react";
import { HeroSection, ContentSection } from "../../components/Component1";

import LoadImage from "../../assets/images/buisness/load.png";
import AccountImage from "../../assets/images/buisness/calculator.jpg";
import TaxImage from "../../assets/images/buisness/tax.png";
import TaxReturnImage from "../../assets/images/buisness/tax2.jpg";
import MarketingImage from "../../assets/images/buisness/load.png";
import DevelopmentImage from "../../assets/images/buisness/code.jpg";
import BusinessSetupHero from "../Component2";
import ServiceLeftTriangle from "../../assets/images/triangles/ServiceLeftTriangle.png";
import ServiceRightTriangle from "../../assets/images/triangles/ServiceRightTriangle.png";
import ServiceRightTriangle2 from "../../assets/images/triangles/ServiceRightTriangle2.png";
import businessServiceImg from "../../assets/images/buisness/HA-Group-Clients/Layer_1.png";
import accountandbook from "../../assets/images/buisness/HA-Group-Clients/Layer_1-1.png";
import accounting from "../../assets/images/buisness/HA-Group-Clients/Group 1597886757.png";
import property from "../../assets/images/buisness/HA-Group-Clients/Layer_1-2.png";
import powerofattorney from "../../assets/images/buisness/HA-Group-Clients/Group 1597886760.png";
import nominee from "../../assets/images/buisness/HA-Group-Clients/Layer_1-3.png";
import mortage from "../../assets/images/buisness/HA-Group-Clients/Group 1597886772.png";
import insurance from "../../assets/images/buisness/HA-Group-Clients/Group 1597886775.png";
import { useNavigate } from "react-router-dom";
import liquidation from "../../assets/images/liquidation.png";
import visaimage from "../../assets/images/buisness/VisaServices.png";
import branding from "../../assets/images/ValueAddedServices/Branding&Marketing.png";
import attorneyimage from "../../assets/images/buisness/HA-Group-Clients/Group 1597886772.png";
const MainServices = () => {
  return (
    <div className="mb-16">
      {/* Business Services Section */}
      <BusinessSetupHero
        title="Bank Account"
        highlightText="Services in Dubai"
        description="Your Business Needs a Bank Account—We Make It Happen
Opening a bank account in Dubai can be complicated, with strict requirements and varying approval times. With 5+ years of
experience and 1,500+ corporate accounts opened, we know the process inside out. Whether you need a corporate or personal account, we’ll handle the paperwork and get it done—without the hassle."
        imagePath={businessServiceImg}
        imageAlt="Business Services Illustration"

        // imageMaxHeight={700}
      />

      {/* Account and Bookkeeping Section */}
      <HeroSection
        title="Bank Account "
        highlightText="Services in Dubai"
        description="our Business Needs a Bank Account—We Make It Happen
Opening a bank account in Dubai can be complicated, with strict requirements and varying approval times. With 5+ years of
experience and 1,500+ corporate accounts opened, we know the process inside out. Whether you need a corporate or personal account, we’ll handle the paperwork and get it done—without the hassle."
        imagePath={accountandbook}
        imageAlt="Account and Bookkeeping Illustration"
        buttontext="Open Your Account Today"
        imageMaxHeight={550}
      />

      {/* Tax Registration Section */}
      <ContentSection
        title="Visa Services"
        description="Seamless, Reliable, and Hassle-Free
Getting a visa in the UAE doesn’t have to be complicated. Whether you’re an entrepreneur, investor, or professional, we simplify
the process so you can focus on what matters.
From paperwork to approvals, we make the UAE visa process simple and stress-free"
        imagePath={visaimage}
        imageAlt="Tax Registration"
        imageFirst={false}
        hasBgColor={false}
        triangleImage={ServiceRightTriangle}
        buttontext="Talk to a Visa Expert Now"
      />

      {/* Tax Return Filing Section */}
      <ContentSection
        title="Company Liquidation in Dubai"
        description="Closing Your Business? We’ll Handle It.
Shutting down a company in Dubai isn’t as simple as stopping operations. It involves legal procedures, debt settlements, and
approvals from multiple authorities. With 5+ years of experience and 3,500+ businesses set up, we know how to close a company
the right way—legally, efficiently, and with minimal hassle."
        imagePath={liquidation}
        imageAlt="Tax Return Filing"
        imageFirst={true}
        hasBgColor={true}
        triangleImage={ServiceLeftTriangle}
        buttontext="Start Your Liquidation Process"
      />
      <ContentSection
        title="Accounting & Bookkeeping Services in Dubai"
        description=" Stay Focused on Growth – We’ll Handle the Numbers
Running a business is exciting—but managing finances? Not so much. As your business grows, so do its financial responsibilities.
From tracking expenses to ensuring VAT compliance, keeping up can be overwhelming. That’s where we come in.
With 5+ years of experience and 3,500+ businesses set up, HA Group simplifies your accounting so you can focus on what
matters—growing your business."
        imagePath={accounting}
        imageAlt=" Website Development"
        imageFirst={false}
        hasBgColor={false}
        triangleImage={ServiceRightTriangle2}
        buttontext=" Need accounting support? Let’s talk "
      />

      <ContentSection
        title=" Branding & Marketing Services"
        description=" Get Noticed. Build Trust. Grow Your Business.
Your brand is more than just a logo—it’s how people see you, trust you, and remember you. Whether you’re launching a new
business or refining your image, we create brands that stand out and get results. With 300+ successful branding campaigns,
we’ve helped businesses make an impact across industries.
From sleek websites to social media buzz, press coverage to personal branding—we have everything you need to build a brand
that works for you."
        imagePath={branding}
        imageAlt="  Social Media Marketing"
        imageFirst={true}
        hasBgColor={false}
        triangleImage={ServiceLeftTriangle}
        buttontext="Let’s bring your brand to life"
      />

      <ContentSection
        title="Property Conveyancing Made Simple"
        description="Smooth, Secure & Hassle-Free Property Transfers
Buying or selling property in Dubai? We handle all the legal paperwork, so you don’t have to. With 200+ real estate transactions
completed, we ensure fast, secure, and stress-free transfers—whether you're an investor, buyer, or seller."
        imagePath={property}
        imageAlt="  Social Media Marketing"
        imageFirst={false}
        hasBgColor={false}
        triangleImage={ServiceRightTriangle2}
        buttontext="Let’s get your deal done "
      />

      <ContentSection
        title="Power of Attorney Services"
        description="Authorize. Delegate. Focus on Growth.
Running a business in the UAE comes with countless responsibilities. A Power of Attorney (POA) lets you delegate legal and
financial tasks to a trusted representative—so you can focus on scaling your business without getting caught up in paperwork.
Need someone to handle approvals, contracts, or business transactions on your behalf? Let us take care of the formalities while
you focus on success."
        imagePath={attorneyimage}
        imageAlt="Social Media Marketing"
        imageFirst={true}
        hasBgColor={false}
        triangleImage={ServiceLeftTriangle}
        buttontext="Get in touch today!"
      />

      <HeroSection
        title="Nominee "
        highlightText="Director Services"
        description="Stay Compliant. Stay in Control. Grow with Confidence.
Looking for a local director for your UAE business? Our Nominee Director Services help you meet legal requirements while you
stay in full control. We provide a trusted representative so you can focus on running your business without the hassle."
        imagePath={property}
        imageAlt="Business Services Illustration"
        imageMaxHeight={700}
        buttontext="Need a nominee director? Let’s take care of it. Call us today!"
      />

      <HeroSection
        title=" Mortgage "
        highlightText="Financing"
        description="Protect What Matters Most
We help businesses and individuals find the right insurance solutions for complete peace of mind. Whether it's health, property,
or business coverage, our experts guide you to reliable providers with tailored plans that fit your needs."
        imagePath={powerofattorney}
        imageAlt="Business Services Illustration"
        imageMaxHeight={700}
        buttontext="Get in touch today to explore your options"
      />

      <HeroSection
        title="Insurance "
        highlightText="Services"
        description="Protect What Matters Most
We help businesses and individuals find the right insurance solutions for complete peace of mind. Whether it's health, property,
or business coverage, our experts guide you to reliable providers with tailored plans that fit your needs.."
        imagePath={nominee}
        imageAlt="Business Services Illustration"
        imageMaxHeight={700}
        buttontext="Get in touch today to explore your options"
      />

      <HeroSection
        title="HR Solutions Tailored for Business Success "
        highlightText="Optimize Your Workforce with HA Group"
        description="At HA Group, we help businesses build strong, efficient, and future-ready teams. From hiring the right talent to employee
engagement, our HR solutions are designed to simplify processes and drive business growth.
Let’s Build Your Dream Team
Partner with HA Group for expert HR solutions tailored to your business needs."
        imagePath={mortage}
        imageAlt="Business Services Illustration"
        imageMaxHeight={700}
        buttontext=" Get in touch today to explore your options"
      />

      <HeroSection
        title="HR Solutions Tailored for Business Success "
        highlightText="Optimize Your Workforce with HA Group"
        description="At HA Group, we help businesses build strong, efficient, and future-ready teams. From hiring the right talent to employee
engagement, our HR solutions are designed to simplify processes and drive business growth.
Let’s Build Your Dream Team
Partner with HA Group for expert HR solutions tailored to your business needs."
        imagePath={insurance}
        imageAlt="Business Services Illustration"
        imageMaxHeight={700}
        buttontext=" Get in touch today to explore your options"
      />
    </div>
  );
};

export default MainServices;
