import { Fade } from "react-awesome-reveal";
import terms from "../assets/images/terms.png";
import EnhancedImageSlider from "../components/ImageSlider";
import { createGlobalStyle } from "styled-components";

const TermsAndConditions = () => {
  const GlobalStyle = createGlobalStyle`
    p {
        font-weight: 600; /* Adjust the font weight as needed */
    }
`;
  const sliderImages = [terms, terms, terms];
  const tableOfContents = [
    "Agreement To Terms",
    "Intellectual Property Rights",
    "User Representations",
    "Prohibited Activities",
    "User Generated Contributions",
    "Contribution License",
    "Guidelines For Reviews",
    "Submissions",
    "Third-party Website And Content",
    "Advertisers",
    "Site Management",
    "Privacy Policy",
    "Copyright Infringements",
    "Term And Termination",
    "Modifications and Interruptions",
    "Governing Law",
    "Dispute Resolution",
    "Corrections",
    "Disclaimer",
    "Limitations Of Liability",
    "Indemnification",
    "User Data",
    "Electronic Communications, Transactions, And Signatures",
    "California Users And Residents",
    "Miscellaneous",
    "Contact Us",
  ];

  return (
    <>
      <EnhancedImageSlider
        images={sliderImages}
        title="Privacy policy for HA Group"
      />
      <GlobalStyle />
       <Fade triggerOnce direction="left"  cascade damping={0.1}>
      <div className="flex flex-col max-w-5xl justify-center p-14 mx-auto">
        <div className="max-w-5xl px-4 md:px-8 py-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Terms and Conditions
          </h1>

          <p className="mb-8 text-sm md:text-md leading-relaxed font-medium">
            Table Of Contents
          </p>

          <ul className="list-decimal pl-8 space-y-2">
            {tableOfContents.map((item, index) => (
              <li key={index} className="text-sm md:text-md">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Agreement To <span className="text-blue-400">Terms</span>
          </h2>
          <p className="text-sm md:text-md leading-relaxed">
            These Terms of Use constitute a legally binding agreement made
            between you, whether personally or on behalf of an entity (“you”)
            and HA Group, doing business as HA (“HA,” “we,” “us,” or “our”),
            concerning your access to and use of the
            <a href="https://hagroup.ae/" className="text-blue-400 underline">
              {" "}
              https://hagroup.ae/
            </a>{" "}
            website as well as any other media form, media channel, mobile
            website, or mobile application related, linked, or otherwise
            connected thereto (collectively, the “Site”).
          </p>
          <p className="text-sm md:text-md leading-relaxed">
            We are registered in the United Arab Emirates and have our
            registered office at Office 205, Zalfa Tower – Garhoud – Dubai –
            United Arab Emirates, Dubai, UAE 000000. You agree that by accessing
            the Site, you have read, understood, and agreed to be bound by all
            of these Terms of Use. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS
            OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND
            YOU MUST DISCONTINUE USE IMMEDIATELY.
          </p>
          <p className="text-sm md:text-md leading-relaxed">
            Supplemental terms and conditions or documents that may be posted on
            the Site from time to time are hereby expressly incorporated herein
            by reference. We reserve the right, in our sole discretion, to make
            changes or modifications to these Terms of Use at any time. We will
            alert you about any changes by updating the “Last updated” date of
            these Terms of Use, and you waive any right to receive specific
            notice of each such change. Please ensure that you check the
            applicable Terms every time you use our Site so that you understand
            which Terms apply. You will be subject to, and will be deemed to
            have been made aware of and to have accepted, the changes in any
            revised Terms of Use by your continued use of the Site after the
            date such revised Terms of Use are posted.
          </p>
          <p className="text-sm md:text-md leading-relaxed">
            The information provided on the Site is not intended for
            distribution to or use by any person or entity in any jurisdiction
            or country where such distribution or use would be contrary to law
            or regulation or which would subject us to any registration
            requirement within such jurisdiction or country. Accordingly, those
            persons who choose to access the Site from other locations do so on
            their own initiative and are solely responsible for compliance with
            local laws, if and to the extent local laws are applicable.
          </p>
          <p className="text-sm md:text-md leading-relaxed">
            The Site is not tailored to comply with industry-specific
            regulations (Health Insurance Portability and Accountability Act
            (HIPAA), Federal Information Security Management Act (FISMA), etc.),
            so if your interactions would be subjected to such laws, you may not
            use this Site. You may not use the Site in a way that would violate
            the Gramm-Leach-Bliley Act (GLBA).
          </p>
          <p className="text-sm md:text-md leading-relaxed">
            All users who are minors in the jurisdiction in which they reside
            (generally under the age of 18) must have the permission of, and be
            directly supervised by, their parent or guardian to use the Site. If
            you are a minor, you must have your parent or guardian read and
            agree to these Terms of Use prior to you using the Site.
          </p>
        </div>

        <div className="space-y-6 mt-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Power of <span className="text-blue-400">Attorney</span>
          </h2>
          <p className="text-sm md:text-md leading-relaxed">
            By using the Site, you represent and warrant that:
          </p>
          <ul className="list-decimal pl-8 space-y-2 text-sm md:text-md">
            <li>
              You have the legal capacity and you agree to comply with these
              Terms of Use;
            </li>
            <li>
              You are not a minor in the jurisdiction in which you reside, or if
              a minor, you have received parental permission to use the Site;
            </li>
            <li>
              You will not access the Site through automated or non-human means,
              whether through a bot, script, or otherwise;
            </li>
            <li>
              You will not use the Site for any illegal or unauthorized purpose;
              and
            </li>
            <li>
              Your use of the Site will not violate any applicable law or
              regulation.
            </li>
          </ul>
          <p className="text-sm md:text-md leading-relaxed font-semibold">
            If you provide any information that is untrue, inaccurate, not
            current, or incomplete, we have the right to suspend or terminate
            your account and refuse any and all current or future use of the
            Site (or any portion thereof).
          </p>
        </div>

        <div className="space-y-6 mt-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Prohibited <span className="text-blue-400">Activities</span>
          </h2>
          <p className="text-sm md:text-md leading-relaxed">
            You may not access or use the Site for any purpose other than that
            for which we make the Site available. The Site may not be used in
            connection with any commercial endeavors except those that are
            specifically endorsed or approved by us.
          </p>
          <p className="text-sm md:text-md leading-relaxed font-semibold">
            As a user of the Site, you agree not to:
          </p>
          <ul className="list-disc pl-8 space-y-4 text-sm md:text-md">
            <li>
              Systematically retrieve data or other content from the Site to
              create or compile, directly or indirectly, a collection,
              compilation, database, or directory without written permission
              from us.
            </li>
            <li>
              Trick, defraud, or mislead us and other users, especially in any
              attempt to learn sensitive account information such as user
              passwords.
            </li>
            <li>
              Circumvent, disable, or otherwise interfere with security-related
              features of the Site, including features that prevent or restrict
              the use or copying of any Content or enforce limitations on the
              use of the Site and/or the Content contained therein.
            </li>
            <li>
              Disparage, tarnish, or otherwise harm, in our opinion, us and/or
              the Site.
            </li>
            <li>
              Use any information obtained from the Site in order to harass,
              abuse, or harm another person.
            </li>
            <li>
              Make improper use of our support services or submit false reports
              of abuse or misconduct.
            </li>
            <li>
              Use the Site in a manner inconsistent with any applicable laws or
              regulations.
            </li>
            <li>Engage in unauthorized framing of or linking to the Site.</li>
            <li>
              Upload or transmit (or attempt to upload or to transmit) viruses,
              Trojan horses, or other material, including excessive use of
              capital letters and spamming (continuous posting of repetitive
              text), that interferes with any party’s uninterrupted use and
              enjoyment of the Site or modifies, impairs, disrupts, alters, or
              interferes with the use, features, functions, operation, or
              maintenance of the Site.
            </li>
            <li>
              Engage in any automated use of the system, such as using scripts
              to send comments or messages, or using any data mining, robots, or
              similar data gathering and extraction tools.
            </li>
            <li>
              Delete the copyright or other proprietary rights notice from any
              Content.
            </li>
            <li>
              Attempt to impersonate another user or person or use the username
              of another user.
            </li>
            <li>
              Upload or transmit (or attempt to upload or to transmit) any
              material that acts as a passive or active information collection
              or transmission mechanism, including without limitation, clear
              graphics interchange formats (“gifs”), 1×1 pixels, web bugs,
              cookies, or other similar devices (sometimes referred to as
              “spyware” or “passive collection mechanisms” or “pcms”).
            </li>
            <li>
              Interfere with, disrupt, or create an undue burden on the Site or
              the networks or services connected to it.
            </li>
            <li>
              Harass, annoy, intimidate, or threaten any of our employees or
              agents engaged in providing any portion of the Site to you.
            </li>
            <li>
              Attempt to bypass any measures of the Site designed to prevent or
              restrict access to the Site, or any portion of the Site.
            </li>
            <li>
              Copy or adapt the Site’s software, including but not limited to
              Flash, PHP, HTML, JavaScript, or other code.
            </li>
            <li>
              Except as permitted by applicable law, decipher, decompile,
              disassemble, or reverse engineer any of the software comprising or
              in any way making up a part of the Site.
            </li>
            <li>
              Use the Site as part of any effort to compete with us or otherwise
              use the Site and/or the Content for any revenue-generating
              endeavor or commercial enterprise.
            </li>
            <li>
              Use the Site to advertise or offer to sell goods and services.
            </li>
          </ul>
        </div>

        <div className="space-y-6 mt-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            User Generated <span className="text-blue-400">Contributions</span>
          </h2>
          <p className="text-sm md:text-md leading-relaxed">
            The Site may invite you to chat, contribute to, or participate in
            blogs, message boards, online forums, and other functionality, and
            may provide you with the opportunity to create, submit, post,
            display, transmit, perform, publish, distribute, or broadcast
            content and materials to us or on the Site, including but not
            limited to text, writings, video, audio, photographs, graphics,
            comments, suggestions, or personal information or other material
            (collectively, “Contributions”).
          </p>
          <p className="text-sm md:text-md leading-relaxed">
            Contributions may be viewable by other users of the Site and through
            third-party websites. As such, any Contributions you transmit may be
            treated as non-confidential and non-proprietary. When you create or
            make available any Contributions, you thereby represent and warrant
            that:
          </p>
          <ul className="list-disc pl-8 space-y-4 text-sm md:text-md">
            <li>
              The creation, distribution, transmission, public display, or
              performance, and the accessing, downloading, or copying of your
              Contributions do not and will not infringe the proprietary rights,
              including but not limited to the copyright, patent, trademark,
              trade secret, or moral rights of any third party.
            </li>
            <li>
              You are the creator and owner of or have the necessary licenses,
              rights, consents, releases, and permissions to use and to
              authorize us, the Site, and other users of the Site to use your
              Contributions in any manner contemplated by the Site and these
              Terms of Use.
            </li>
            <li>
              You have the written consent, release, and/or permission of each
              and every identifiable individual person in your Contributions to
              use the name or likeness of each and every such identifiable
              individual person to enable inclusion and use of your
              Contributions in any manner contemplated by the Site and these
              Terms of Use.
            </li>
            <li>
              Your Contributions are not false, inaccurate, or misleading.
            </li>
            <li>
              Your Contributions are not unsolicited or unauthorized
              advertising, promotional materials, pyramid schemes, chain
              letters, spam, mass mailings, or other forms of solicitation.
            </li>
            <li>
              Your Contributions are not obscene, lewd, lascivious, filthy,
              violent, harassing, libelous, slanderous, or otherwise
              objectionable (as determined by us). Your Contributions do not
              ridicule, mock, disparage, intimidate, or abuse anyone.
            </li>
            <li>
              Your Contributions are not used to harass or threaten (in the
              legal sense of those terms) any other person and to promote
              violence against a specific person or class of people. Your
              Contributions do not violate any applicable law, regulation, or
              rule.
            </li>
            <li>
              Your Contributions do not violate the privacy or publicity rights
              of any third party.
            </li>
            <li>
              Your Contributions do not violate any applicable law concerning
              child pornography, or otherwise intended to protect the health or
              well-being of minors.
            </li>
            <li>
              Your Contributions do not include any offensive comments that are
              connected to race, national origin, gender, sexual preference, or
              physical handicap.
            </li>
            <li>
              Your Contributions do not otherwise violate, or link to material
              that violates, any provision of these Terms of Use, or any
              applicable law or regulation.
            </li>
          </ul>
        </div>

        <div className="space-y-6 mt-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Contribution <span className="text-blue-400">License</span>
          </h2>
          <p className="text-sm md:text-md leading-relaxed">
            By posting your Contributions to any part of the Site, you
            automatically grant, and you represent and warrant that you have the
            right to grant, to us an unrestricted, unlimited, irrevocable,
            perpetual, non-exclusive, transferable, royalty-free, fully-paid,
            worldwide right, and license to host, use, copy, reproduce,
            disclose, sell, resell, publish, broadcast, retitle, archive, store,
            cache, publicly perform, publicly display, reformat, translate,
            transmit, excerpt (in whole or in part), and distribute such
            Contributions (including, without limitation, your image and voice)
            for any purpose, commercial, advertising, or otherwise, and to
            prepare derivative works of, or incorporate into other works, such
            Contributions, and grant and authorize sublicenses of the foregoing.
            The use and distribution may occur in any media formats and through
            any media channels.
          </p>
          <p className="text-sm md:text-md leading-relaxed">
            This license will apply to any form, media, or technology now known
            or hereafter developed, and includes our use of your name, company
            name, and franchise name, as applicable, and any of the trademarks,
            service marks, trade names, logos, and personal and commercial
            images you provide. You waive all moral rights in your
            Contributions, and you warrant that moral rights have not otherwise
            been asserted in your Contributions.
          </p>
          <p className="text-sm md:text-md leading-relaxed">
            We do not assert any ownership over your Contributions. You retain
            full ownership of all of your Contributions and any intellectual
            property rights or other proprietary rights associated with your
            Contributions. We are not liable for any statements or
            representations in your Contributions provided by you in any area on
            the Site. You are solely responsible for your Contributions to the
            Site and you expressly agree to exonerate us from any and all
            responsibility and to refrain from any legal action against us
            regarding your Contributions.
          </p>
          <p className="text-sm md:text-md leading-relaxed font-semibold">
            We have the right, in our sole and absolute discretion,
          </p>
          <ul className="list-disc pl-8 space-y-4 text-sm md:text-md">
            <li>To edit, redact, or otherwise change any Contributions;</li>
            <li>
              To re-categorize any Contributions to place them in more
              appropriate locations on the Site; and
            </li>
            <li>
              To pre-screen or delete any Contributions at any time and for any
              reason, without notice. We have no obligation to monitor your
              Contributions.
            </li>
          </ul>
        </div>

        <div className="space-y-6 mt-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Guidelines For <span className="text-blue-400">Reviews</span>
          </h2>
          <p className="text-sm md:text-md leading-relaxed">
            We may provide you areas on the Site to leave reviews or ratings.
            When posting a review, you must comply with the following criteria:
          </p>
          <ul className="list-disc pl-8 space-y-4 text-sm md:text-md">
            <li>
              You should have firsthand experience with the person/entity being
              reviewed;
            </li>
            <li>
              Your reviews should not contain offensive profanity, or abusive,
              racist, offensive, or hate language;
            </li>
            <li>
              Your reviews should not contain discriminatory references based on
              religion, race, gender, national origin, age, marital status,
              sexual orientation, or disability;
            </li>
            <li>
              Your reviews should not contain references to illegal activity;
            </li>
            <li>
              You should not be affiliated with competitors if posting negative
              reviews;
            </li>
            <li>
              You should not make any conclusions as to the legality of conduct;
            </li>
            <li>You may not post any false or misleading statements; and</li>
            <li>
              You may not organize a campaign encouraging others to post
              reviews, whether positive or negative.
            </li>
          </ul>
          <p className="text-sm md:text-md leading-relaxed font-semibold">
            We may accept, reject, or remove reviews in our sole discretion. We
            have absolutely no obligation to screen reviews or to delete
            reviews, even if anyone considers reviews objectionable or
            inaccurate. Reviews are not endorsed by us, and do not necessarily
            represent our opinions or the views of any of our affiliates or
            partners. We do not assume liability for any review or for any
            claims, liabilities, or losses resulting from any review.
          </p>
          <p className="text-sm md:text-md leading-relaxed">
            By posting a review, you hereby grant to us a perpetual,
            non-exclusive, worldwide, royalty-free, fully-paid, assignable, and
            sublicensable right and license to reproduce, modify, translate,
            transmit by any means, display, perform, and/or distribute all
            content relating to reviews.
          </p>
        </div>

        <div className="space-y-6 mt-12">
          <h2 className="text-3xl md:text-4xl font-bold">Submissions</h2>
          <p className="text-sm md:text-md leading-relaxed">
            You acknowledge and agree that any questions, comments, suggestions,
            ideas, feedback, or other information regarding the Site
            (“Submissions”) provided by you to us are non-confidential and shall
            become our sole property. We shall own exclusive rights, including
            all intellectual property rights, and shall be entitled to the
            unrestricted use and dissemination of these Submissions for any
            lawful purpose, commercial or otherwise, without acknowledgment or
            compensation to you. You hereby waive all moral rights to any such
            Submissions, and you hereby warrant that any such Submissions are
            original with you, or that you have the right to submit such
            Submissions. You agree there shall be no recourse against us for any
            alleged or actual infringement or misappropriation of any
            proprietary right in your Submissions.
          </p>
        </div>

        <div className="space-y-6 mt-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Third-party Website{" "}
            <span className="text-blue-400">And Content</span>
          </h2>
          <p className="text-sm md:text-md leading-relaxed">
            The Site may contain (or you may be sent via the Site) links to
            other websites (“Third-Party Websites”) as well as articles,
            photographs, text, graphics, pictures, designs, music, sound, video,
            information, applications, software, and other content or items
            belonging to or originating from third parties (“Third-Party
            Content”). Such Third-Party Websites and Third-Party Content are not
            investigated, monitored, or checked for accuracy, appropriateness,
            or completeness by us, and we are not responsible for any
            Third-Party Websites accessed through the Site or any Third-Party
            Content posted on, available through, or installed from the Site,
            including the content, accuracy, offensiveness, opinions,
            reliability, privacy practices, or other policies of or contained in
            the Third-Party Websites or the Third-Party Content. Inclusion of,
            linking to, or permitting the use or installation of any Third-Party
            Websites or any Third-Party Content does not imply approval or
            endorsement thereof by us. If you decide to leave the Site and
            access the Third-Party Websites or to use or install any Third-Party
            Content, you do so at your own risk, and you should be aware these
            Terms of Use no longer govern. You should review the applicable
            terms and policies, including privacy and data gathering practices,
            of any website to which you navigate from the Site or relating to
            any applications you use or install from the Site.
          </p>
          <p className="text-sm md:text-md leading-relaxed">
            Any purchases you make through Third-Party Websites will be through
            other websites and from other companies, and we take no
            responsibility whatsoever in relation to such purchases which are
            exclusively between you and the applicable third party. You agree
            and acknowledge that we do not endorse the products or services
            offered on Third-Party Websites and you shall hold us harmless from
            any harm caused by your purchase of such products or services.
            Additionally, you shall hold us harmless from any losses sustained
            by you or harm caused to you relating to or resulting in any way
            from any Third-Party Content or any contact with Third-Party
            Websites.
          </p>
        </div>

        <div className="space-y-6 mt-12">
          <h2 className="text-3xl md:text-4xl font-bold">Advertisers</h2>
          <p className="text-sm md:text-md leading-relaxed">
            We allow advertisers to display their advertisements and other
            information in certain areas of the Site, such as sidebar
            advertisements or banner advertisements. If you are an advertiser,
            you shall take full responsibility for any advertisements you place
            on the Site and any services provided on the Site or products sold
            through those advertisements. Further, as an advertiser, you warrant
            and represent that you possess all rights and authority to place
            advertisements on the Site, including, but not limited to,
            intellectual property rights, publicity rights, and contractual
            rights. We simply provide the space to place such advertisements,
            and we have no other relationship with advertisers.
          </p>
        </div>

        <div className="space-y-6 mt-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Site <span className="text-blue-400">Management</span>
          </h2>
          <p className="text-sm md:text-md leading-relaxed">
            We reserve the right, but not the obligation, to:
          </p>
          <ul className="list-disc pl-10 my-4 text-sm md:text-md">
            <li>Monitor the Site for violations of these Terms of Use;</li>
            <li>
              Take appropriate legal action against anyone who, in our sole
              discretion, violates the law or these Terms of Use, including
              without limitation, reporting such user to law enforcement
              authorities;
            </li>
            <li>
              In our sole discretion and without limitation, refuse, restrict
              access to, limit the availability of, or disable (to the extent
              technologically feasible) any of your Contributions or any portion
              thereof;
            </li>
            <li>
              In our sole discretion and without limitation, notice, or
              liability, to remove from the Site or otherwise disable all files
              and content that are excessive in size or are in any way
              burdensome to our systems; and
            </li>
            <li>
              Otherwise manage the Site in a manner designed to protect our
              rights and property and to facilitate the proper functioning of
              the Site.
            </li>
          </ul>
        </div>

        <div className="space-y-6 mt-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Privacy <span className="text-blue-400">Policy</span>
          </h2>
          <p className="text-sm md:text-md leading-relaxed">
            We care about data privacy and security. Please review our Privacy
            Policy: https://hagroup.ae/privacy-policy/. By using the Site, you
            agree to be bound by our Privacy Policy, which is incorporated into
            these Terms of Use. Please be advised the Site is hosted in the
            United Arab Emirates. If you access the Site from any other region
            of the world with laws or other requirements governing personal data
            collection, use, or disclosure that differ from applicable laws in
            the United Arab Emirates, then through your continued use of the
            Site, you are transferring your data to the United Arab Emirates,
            and you agree to have your data transferred to and processed in the
            United Arab Emirates.
          </p>
        </div>

        <div className="space-y-6 mt-12">
          <h2 className="text-3xl font-bold">
            Modifications and{" "}
            <span className="text-blue-400">Interruptions</span>
          </h2>
          <p className="text-sm md:text-md leading-relaxed">
            We reserve the right to change, modify, or remove the contents of
            the Site at any time or for any reason at our sole discretion
            without notice. However, we have no obligation to update any
            information on our Site. We also reserve the right to modify or
            discontinue all or part of the Site without notice at any time. We
            will not be liable to you or any third party for any modification,
            price change, suspension, or discontinuance of the Site.
          </p>
          <p className="text-sm md:text-md leading-relaxed">
            We cannot guarantee the Site will be available at all times. We may
            experience hardware, software, or other problems or need to perform
            maintenance related to the Site, resulting in interruptions, delays,
            or errors.
          </p>
          <p className="text-sm md:text-md leading-relaxed">
            We reserve the right to change, revise, update, suspend,
            discontinue, or otherwise modify the Site at any time or for any
            reason without notice to you. You agree that we have no liability
            whatsoever for any loss, damage, or inconvenience caused by your
            inability to access or use the Site during any downtime or
            discontinuance of the Site.
          </p>
          <p className="text-sm md:text-md leading-relaxed">
            Nothing in these Terms of Use will be construed to obligate us to
            maintain and support the Site or to supply any corrections, updates,
            or releases in connection therewith.
          </p>
        </div>

        <div className="space-y-6 mt-12">
          <h2 className="text-3xl font-bold">
            Governing <span className="text-blue-400">Law</span>
          </h2>
          <p className="text-sm md:text-md leading-relaxed">
            These Terms shall be governed by and defined following the laws of
            the United Arab Emirates. HA Group and yourself irrevocably consent
            that the courts of the United Arab Emirates shall have exclusive
            jurisdiction to resolve any dispute which may arise in connection
            with these terms.
          </p>
        </div>

        <div className="space-y-6 mt-12">
          <h2 className="text-3xl font-bold">
            Dispute <span className="text-blue-400">Resolution</span>
          </h2>
          <p className="text-sm md:text-md leading-relaxed">
            You agree to irrevocably submit all disputes related to Terms or the
            relationship established by this Agreement to the jurisdiction of
            the _________, courts. HA Group shall also maintain the right to
            bring proceedings as to the substance of the matter in the courts of
            the country where you reside or, if these Terms are entered into in
            the course of your trade or profession, the state of your principal
            place of business.
          </p>
        </div>

        <div className="space-y-6 mt-12">
          <h2 className="text-3xl font-bold">Corrections</h2>
          <p className="text-sm md:text-md leading-relaxed">
            There may be information on the Site that contains typographical
            errors, inaccuracies, or omissions, including descriptions, pricing,
            availability, and various other information. We reserve the right to
            correct any errors, inaccuracies, or omissions and to change or
            update the information on the Site at any time, without prior
            notice.
          </p>
        </div>

        <div className="space-y-6 mt-12">
          <h2 className="text-3xl font-bold">Disclaimer</h2>
          <p className="text-sm md:text-md leading-relaxed">
            The site is provided on an as-is and as-available basis. You agree
            that your use of the site and our services will be at your sole
            risk. To the fullest extent permitted by law, we disclaim all
            warranties, express or implied, including, but not limited to,
            implied warranties of merchantability, fitness for a particular
            purpose, and non-infringement. We make no warranties or
            representations about the accuracy or completeness of the site’s
            content or the content of any websites linked to the site and we
            will assume no liability or responsibility for any errors, mistakes,
            or inaccuracies of content and materials.
          </p>
          <p className="text-sm md:text-md leading-relaxed">
            Personal Injury or property damage, of any nature whatsoever,
            resulting from your access to and use of the site.
          </p>
          <p className="text-sm md:text-md leading-relaxed">
            Any unauthorized access to or use of our secure servers and/or any
            and all personal information and/or financial information stored
            therein.
          </p>
          <p className="text-sm md:text-md leading-relaxed">
            Any interruption or cessation of transmission to or from the site.
          </p>
          <p className="text-sm md:text-md leading-relaxed">
            Any bugs, viruses, trojan horses, or the like which may be
            transmitted to or through the site by any third party, and/or
          </p>
          <p className="text-sm md:text-md leading-relaxed">
            Any errors or omissions in any content and materials or for any loss
            or damage of any kind incurred as a result of the use of any content
            posted, transmitted, or otherwise made available via the site. We do
            not warrant, endorse, guarantee, or assume responsibility for any
            product or service advertised or offered by a third party through
            the site, any hyperlinked website, or any website or mobile
            application featured in any banner or other advertising, and we will
            not be a party to or in any way be responsible for monitoring any
            transaction between you and third-party providers of products or
            services. As with the purchase of a product or service through any
            medium or in any environment, you should use your best judgment and
            exercise caution where appropriate.
          </p>
        </div>

        <div className="space-y-6 mt-12">
          <h2 className="text-3xl font-bold">
            Limitations Of <span className="text-blue-400">Liability</span>
          </h2>
          <p className="text-sm md:text-md leading-relaxed">
            In no event will we or our directors, employees, or agents be liable
            to you or any third party for any direct, indirect, consequential,
            exemplary, incidental, special, or punitive damages, including lost
            profit, lost revenue, loss of data, or other damages arising from
            your use of the site, even if we have been advised of the
            possibility of such damages.
          </p>
        </div>

        <div className="space-y-6 mt-12">
          <h2 className="text-3xl md:text-4xl font-bold">Indemnification</h2>
          <p className="text-sm md:text-md leading-relaxed">
            You agree to defend, indemnify, and hold us harmless, including our
            subsidiaries, affiliates, and all of our respective officers,
            agents, partners, and employees, from and against any loss, damage,
            liability, claim, or demand, including reasonable attorneys’ fees
            and expenses, made by any third party due to or arising out of:
          </p>
          <ul className="list-disc pl-8 space-y-2 text-sm md:text-md">
            <li>Your Contributions;</li>
            <li>Use of the Site;</li>
            <li>Breach of these Terms of Use;</li>
            <li>
              Any breach of your representations and warranties set forth in
              these Terms of Use;
            </li>
            <li>
              Your violation of the rights of a third party, including but not
              limited to intellectual property rights;
            </li>
            <li>
              Any overt harmful act toward any other user of the Site with whom
              you connected via the Site.
            </li>
          </ul>
          <p className="text-sm md:text-md leading-relaxed">
            Notwithstanding the foregoing, we reserve the right, at your
            expense, to assume the exclusive defense and control of any matter
            for which you are required to indemnify us, and you agree to
            cooperate, at your expense, with our defense of such claims. We will
            use reasonable efforts to notify you of any such claim, action, or
            proceeding which is subject to this indemnification upon becoming
            aware of it.
          </p>
        </div>

        <div className="space-y-6 mt-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            User <span className="text-blue-400">Data</span>
          </h2>
          <p className="text-sm md:text-md leading-relaxed">
            We will maintain certain data that you transmit to the Site for the
            purpose of managing the performance of the Site, as well as data
            relating to your use of the Site. Although we perform regular
            routine backups of data, you are solely responsible for all data
            that you transmit or that relates to any activity you have
            undertaken using the Site. You agree that we shall have no liability
            to you for any loss or corruption of any such data, and you hereby
            waive any right of action against us arising from any such loss or
            corruption of such data.
          </p>
        </div>

        <div className="space-y-6 mt-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Electronic Communications,{" "}
            <span className="text-blue-400">Transactions, And Signatures</span>
          </h2>
          <p className="text-sm md:text-md leading-relaxed">
            Visiting the Site, sending us emails, and completing online forms
            constitute electronic communications. You consent to receive
            electronic communications and you agree that all agreements,
            notices, disclosures, and other communications we provide to you
            electronically, via email and on the Site, satisfy any legal
            requirement that such communications be in writing.
          </p>
          <p className="text-sm md:text-md leading-relaxed">
            You hereby agree to the use of electronic signatures, contracts,
            orders, and other records, and to electronic delivery of notices,
            policies, and records of transactions initiated or completed by us
            or via the Site. You hereby waive any rights or requirements under
            any statutes, regulations, rules, ordinances, or other laws in any
            jurisdiction which require an original signature or delivery or
            retention of non-electronic records, or to payments or the granting
            of credits by any means other than electronic means.
          </p>
        </div>

        <div className="space-y-6 mt-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            California Users And{" "}
            <span className="text-blue-400">Residents</span>
          </h2>
          <p className="text-sm md:text-md leading-relaxed">
            If any complaint with us is not satisfactorily resolved, you can
            contact the Complaint Assistance Unit of the Division of Consumer
            Services of the California Department of Consumer Affairs in writing
            at 1625 North Market Blvd., Suite N 112, Sacramento, California
            95834 or by telephone at (800) 952-5210 or (916) 445-1254.
          </p>
        </div>

        <div className="space-y-6 mt-12">
          <h2 className="text-3xl md:text-4xl font-bold">Miscellaneous</h2>
          <p className="text-sm md:text-md leading-relaxed">
            These Terms of Use and any policies or operating rules posted by us
            on the Site or in respect to the Site constitute the entire
            agreement and understanding between you and us. Our failure to
            exercise or enforce any right or provision of these Terms of Use
            shall not operate as a waiver of such right or provision. These
            Terms of Use operate to the fullest extent permissible by law. We
            may assign any or all of our rights and obligations to others at any
            time. We shall not be responsible or liable for any loss, damage,
            delay, or failure to act caused by any cause beyond our reasonable
            control. If any provision or part of a provision of these Terms of
            Use is determined to be unlawful, void, or unenforceable, that
            provision or part of the provision is deemed severable from these
            Terms of Use and does not affect the validity and enforceability of
            any remaining provisions. There is no joint venture, partnership,
            employment or agency relationship created between you and us as a
            result of these Terms of Use or use of the Site. You agree that
            these Terms of Use will not be construed against us by virtue of
            having drafted them. You hereby waive any and all defenses you may
            have based on the electronic form of these Terms of Use and the lack
            of signing by the parties hereto to execute these Terms of Use.
          </p>
        </div>

        <div className="space-y-6 mt-12">
          <h2 className="text-3xl md:text-4xl font-bold">Contact Us</h2>
          <p className="text-sm md:text-md leading-relaxed">
            In order to resolve a complaint regarding the Site or to receive
            further information regarding use of the Site, please contact us at:
          </p>
          <p className="text-sm md:text-md leading-relaxed">
            HA Group
            <br />
            Office 205, Zalfa Tower – Garhoud – Dubai – United Arab Emirates
            <br />
            Dubai, UAE 000000
            <br />
            Customer Service: +97148241725
            <br />
            Email: info@hagroup.ae
          </p>
        </div>
      </div>
      </Fade>
    </>
  );
};

export default TermsAndConditions;
