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
const MainServices = () => {
  return (
    <div className="mb-16">
      {/* Business Services Section */}
      <BusinessSetupHero
        title="Business"
        highlightText="Services"
        description="Whether you're looking to establish your venture on the mainland, leverage the advantages of Freezones, or explore the benefits of an offshore jurisdiction, we have you covered."
        imagePath={LoadImage}
        imageAlt="Business Services Illustration"
        // imageMaxHeight={700}
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
        imagePath={"https://s3-alpha-sig.figma.com/img/e895/1934/aab56683464d66cd063446dfc23bca51?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JaYLP6Ibg0D9bxlfRUtqciSrBwin1Cf4mgXTpbWkBudyM7lBD~3j03PWO3uwiNqNoVFDGoHNfLwkX9lTysp1apv6eU00ZGRtajmRiwXRnGuaLBZPb8~63X0zNoSgUUoBh23IJ69AOKOahyUfhgfEyQFNd5WIFWjhDjKNmBpbtPPP2JeMDHXv6C-OyKOEelakMkMNH2nuv-QGn-dVFNxIu94bissy5CeirVS-JeatOljgX2X2uCpzIH1whmB-EhE~4YtvxtXy6dQTh1zmFKr~D0inP6YoL2J4m4Q2f8UnFtvrLxO~NOtYl~UHySrslEsMtfap6oZADO9Sh2VVJvjdKA__"}
        imageAlt="Tax Registration"
        imageFirst={false}
        hasBgColor={false}
        triangleImage={ServiceRightTriangle}
      />

      {/* Tax Return Filing Section */}
      <ContentSection
        title="Tax Return Filing"
        description="Everybody dreams of visiting Dubai, but not everyone gets there. Visa procedures can be complex, but we're the experts and will take care of it for you. Our services include document assistance, ensuring a hassle-free visa experience."
        imagePath={"https://s3-alpha-sig.figma.com/img/df65/992e/ef98fb6965e87099af6f9f911a906cb9?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bWZQLxkopiM22ro74sZ7oMJE2q8GeHR5l4lQzUyaocoCctmlL-NT8trhlcvC588I8wOeZtpo8piAdpLYrSgrXhkWb~lp4r24LGHEQ3AP4FJS4Xj6~nK06kx4PhBWukXkA1Xbx0Ebry1cb1b85dk7qhfixSxq~O608X5gTpuckFYSyRB6jehdg1r41Hk8~0-QSXD7n2kFaHVbvV86AOnGoJ1mmdjfDXoQSsNBGXtNq7mHj3LlG27tUuWauGN2lcj82we-fSblOT-ymHGUzIi~vEUYHQ~tmRZ5SOPP0J0vtPKoHb-phwPQB1GVE4baH1iEku30Yft4zbJikMSaTTkJEA__"}
        imageAlt="Tax Return Filing"
        imageFirst={true}
        hasBgColor={true}
        triangleImage={ServiceLeftTriangle}
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
        imagePath={"https://s3-alpha-sig.figma.com/img/733a/04ec/420483c9bc515758b5b66dc6c4e918ca?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HccZivAMQ~xTUBtPHXvJOklEbojYKDMY0zbjn0T9JdHRa0AYuYU1dGxmsq9LVcy3VA48-tOUSETb7ZJC6NGoP-YhuUx1jEj4lY8AWb0wrjMhptuiKQELylg2NPqWaXgTjtpugZF9WBm2hYMQNUlEMaI7pIpTkxl~wEZS-CrkWBI89VD-xw0bELffJWCN9pyHPHbtdgjYhqHDux2LaHgAuWm5BWrdNgu0l7DBSx8JXCBbnGDw484yLDFYQQhbj6BGGEoonNJZf5xGX153YoSExuVg1KpI6OtCBiKIwq0mJ0Vf9D8zzaqv5aIlgQ1Yfrsl3ZljbjGdLDL28lfTpFOpCQ__"}
        imageAlt=" Website Development"
        imageFirst={false}
        hasBgColor={false}
        triangleImage={ServiceRightTriangle2}
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
        imagePath={"https://s3-alpha-sig.figma.com/img/b1ad/d852/53cf6f243678667cd539d3439a6fde3c?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IKNfvbg1F03b6qKQFGzAaFEmH6HfdQWOrmhQMevfhYuxgJzgDSE6VDoG8-o3CVFBWvnCecn5DEG8p4QHVMtzicwvdmZ1aBsiF-Gn-R0Y-cae-q-cOagGrzSCBR3NNofMYLGLDjoT3Qq1AY3l8ah4yoobsKSJLovV8At6gevJ68NuVFfViLBaTgb6bXmKeZkO4w0DG2bQVzXPYDzOTF5OmQgfmPqOfnOnUhBRlHFGdQITUMkfeibFEBTLUxtA~KeNG7fyeOJkNMcEnJPhKCE2CF~ykOpKl2zI1qEikF2jaELpLf72-N-tvHbbNAFcb5~yeiYm9LXkkAqchygiWZifmQ__"}
        imageAlt="  Social Media Marketing"
        imageFirst={true}
        hasBgColor={false}
        triangleImage={ServiceLeftTriangle}

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
        imagePath={"https://s3-alpha-sig.figma.com/img/b110/b2f3/1d6e0dec6897ab6a0637386b00c8f959?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VnHM-LRBtx8FzdXuvdNj8RtQYErWLpTU0wwy~XFLaZrxNvcqSjGEPaqE1albGDmXY610hYwY~DmtcPTnHSIpn8WV2lmsoOZiGSqjo6VS1DMNsFkERpLoUZZYKw8TgoMHl4rvIaXgkkE4lJg1FjEmMQGSt89P-zHvX43A1nw93Kpf~26zHtFkD3j~6Rpem7Gn2oG8-sNI~bdxrTSV4C8yInEG75A3GATEVId1VeYhwJ9nEOSZ~5JCoVNm28Hj3da3LJ~OON9tv2~7MBxWnCnRx6g~PdZh~i0Q1HpiokDZ5fuCmJKRri76TfVK1kCyy1s0pXjS1GrLK~ZD1sB1jY4eaQ__"}
        imageAlt="  Social Media Marketing"
        imageFirst={false}
        hasBgColor={false}
        triangleImage={ServiceRightTriangle2}
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
        imagePath={"https://s3-alpha-sig.figma.com/img/1875/3905/ca645f7e9258d45374dc766b2df92fed?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LqfLyu4n8mXo-5a0dEQDyBrZybIFDHtPggHywYACE8LDNJXwI2YqyYBXfIXdhyymvSh6Pd53fpE~u7qejdetyfTLJ-ikKtUW1SHYyhKsvsFHTe03261u-3f2KFj5YeB3eM8nVSHVngmWdnmXRBlhgHr0kw09qwipTQBeXJnRTk54dgdt2lNGn~AkEasr-fVRm25alrtby35aRRkQ78XglpOLIA9VmwrSFEQGp7x7zCMJPuIFpo~aGirTlnGiDOuF6TWd3OvmAz~y1LpFyf37riQ2D8eAfELInS9dXfsyfrku2~WtTOq-7FuKifZtdq~LYDvfQGqgTOB01IVKa9DESg__"}
        imageAlt="  Social Media Marketing"
        imageFirst={true}
        hasBgColor={false}
        triangleImage={ServiceLeftTriangle}
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
        imagePath={"https://s3-alpha-sig.figma.com/img/657f/a047/306ae5157af97884fe63dd23fbbc9c3a?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZpJua-mkUAPx7yAaE6tf9uiesnMUstD-xKYfdqtIIq2RrAbOOyIRqMfi2tDASOiOMNn9C7dFb7bOpBMq7OXGDwq-Gor~mgJsq~naZXQ0gU92Z4Lb9PAQbH2wAzUUzXshRe3vQO5rSFHPtuGWEpzcAWKdmxIEz-AZF44xx6SQFeXA2BXh9o0muyn0BpkRQEFOcTDrLtzFNzK0cv~KwHvw8bxIxz-PqF~6fGKlRaMbiPUhgzgFVm~-YpAYja~~MjxUNFB3IDLgWBEaVXIHQqaPP8L9TcwCIG7fqVZ5~-6pH0hBDEYlE1i2cnhlvLSMZawaxg11SPh1EN5S3-0ZOCX5Bw__"}
        imageAlt="General Insurance"
        imageFirst={false}
        hasBgColor={false}
        triangleImage={ServiceRightTriangle2}
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
        imagePath={"https://s3-alpha-sig.figma.com/img/4949/8caf/3fb74e5c83fbafa423bcd03b78a432bd?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=X6CYjWB2Fbqb3CCcVNryMbqvO1utc9fTGmOkejm0xpu4tsc33wBhYo94kCuwdonuI~WaWJA~7UsXZjJTyN0c96trdcmt7G2m7LgYVvFKj9MFzAl-aesFpJ7SdRPnfhtJQBL9HFVxV1RYTDuMNl1dwRmAVZzo4gAKAg0Hu2riz1ctxfYjdlgVMx-3ETeepFMjDU9ELMIAOoKldMV2lTM-w8Fibqt-LIIUD-I1MWFVxjOXTuk1OXKPYBd9ZAa-KIxNxFiOZIh503gtcOZa1iYHqSjPb-EN9t0NFlPSVBH~n3EEhgskmN0RGAOsKFMHiBcbwvLThIPT8GTfdeIZC1oe2w__"}
        imageAlt=" Moto/Auto Insurance"
        imageFirst={true}
        hasBgColor={false}
        triangleImage={ServiceLeftTriangle}
      />
    </div>
  );
};

export default MainServices;
