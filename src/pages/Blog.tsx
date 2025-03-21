import React, { useRef } from 'react';
import { BlogsList } from '../components/BlogsSection';
import { useLocation } from 'react-router-dom';
// Add this helper function at the top of the file
const slugify = (text) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
  };
// Blog data structure
const blogPost = {
  id: 1,
  title: "UAE Golden Visa Now Covers More Categories - Here's how HA Group Can Help You Secure Yours",
  date: "23.02.23",
  featuredImage: "https://s3-alpha-sig.figma.com/img/103a/5712/1c3df7480970c725b831e38adeaf1325?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aRxtqrnXWidssBfErKiPjjB5hHoNLup~9X0QRtuYk4Sh9Zr0mi86wJ6-uKSDDlbtU3bI7SCBevtxKvJRFXqvj8o7gB-x4awCaCWQIpAvJzoALTE0teehxCZ-vrGKbfBN3dlNQQcpyPNLL6Mcur19Q~hpVljEZftnmebELVOZoQV-mNsDHy-v35VBcIkY8tSy~4rhE2qJdf~xWkAMMo-PG98c1Y46JcBhMdqFaLFDQBO3UpHND-96sXgiFOw9Vt3yrGLRbpH8f~IxMCRIiNoHhHbdRhozcT347rr0MHlUUhjnW7TxVTqoWOwNMcRA9XwVXkZWdftLuoVkW1q-wk9ZaA__",
  imageAlt: "Dubai skyline with Burj Khalifa",
  introduction: [
    "The UAE Golden Visa is one of the most sought-after residency programs, offering long-term residence options for professionals, investors, and individuals. Now, with its recent expansion, even more people can take advantage of this opportunity. Humanitarian workers, frontline heroes, and employees of international organizations are among the new additions to eligibility requirements of the UAE.",
    "HA Group has been helping individuals and companies, but UAE has specific requirements and processes for each type of applicant. We offer a personalized service, from eligibility assessments to document preparation and submission. Our team provides end-to-end support to make the process smooth and hassle-free."
  ],
  tableOfContents: [
    "Introduction to the UAE Golden Visa",
    "Who is Eligible Under the New Expansion?",
    "   1. Humanitarian Workers",
    "   2. Frontline Heroes",
    "   3. Workers in International Organizations",
    "Benefits of the Golden Visa",
    "Why You Should Use a Service Provider",
    "How HA Group Can Help You Get Started",
    "Frequently Asked Questions"
  ],
  sections: [
    {
      title: "Who is Eligible under the New Expansion?",
      content: [
        "The recent update adds three new categories of professionals who can now apply for the Golden Visa:"
      ],
      subsections: [
        {
          title: "1. Humanitarian Workers",
          content: [
            "Individuals involved in charitable or humanitarian activities—whether as volunteers or workers in local or international humanitarian fields—may now be eligible. This includes those working in disaster relief, community service, or non-profit organizations.",
            "This expansion recognizes the contributions of those who dedicate their lives to caring others. By offering them residence, the UAE allows these individuals to continue their impactful work while benefiting from residency stability and enhanced career opportunities."
          ]
        },
        {
          title: "2. Frontline Heroes",
          content: [
            "Individuals involved in healthcare or humanitarian activities—whether as volunteers or workers in local or international humanitarian fields—may now be eligible. This includes those working in disaster relief, community service, or non-profit organizations.",
            "This expansion recognizes the contributions of those who dedicate their lives to caring others. By offering them residence, the UAE allows these individuals to continue their impactful work while benefiting from residency stability and enhanced career opportunities."
          ]
        },
        {
          title: "3. Workers in International Organizations",
          content: [
            "Employees of international organizations, diplomatic missions, or multinational companies who operate within the UAE or have UAE as their headquarters are now eligible for the Golden Visa. This includes professionals in global cooperation and international development whose activities facilitate partnerships and international links enjoying the benefits of long-term residency in the UAE while continuing their impactful work."
          ]
        }
      ]
    },
    {
      title: "Ready to Apply for Your Golden Visa?",
      content: [
        "HA Group is ready to assist those interested in securing the Golden Visa under any of these new categories. Our team of immigration specialists understands the requirements and processes for each category and can provide expert guidance at every step."
      ],
      type: "cta",
    }
  ],
  ctaText: "INQUIRE TODAY",
  ctaUrl: "/contact",
  contactText: "Connect with our team to start your business !"
};

// Blog component
const BlogPost = ({ post }) => {
  console.log(post);
    const sectionRefs = useRef({});

    // Add scroll handler
    const scrollToSection = (item) => {
        const sectionId = slugify(item);
        console.log(sectionId);
      const element = sectionRefs.current[sectionId];
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    };
  return (
    <div className="max-w-5xl mx-auto bg-white rounded-md overflow-hidden">
      {/* Header */}
      <div className="px-6 py-6 text-center">
        <h1 className="text-2xl font-bold text-gray-800">{post.title}</h1>
        <p className="text-sm text-gray-500 mt-2">{post.date}</p>
      </div>

      {/* Hero Image */}
      <div className="px-6">
        <div className="rounded-lg overflow-hidden mb-6">
          <img loading="lazy"  
            src={post.featuredImage} 
            alt={post.imageAlt} 
            className="w-full h-auto object-cover rounded-4xl"
          />
        </div>
      </div>

      {/* Content Grid */}
      <div className="px-6 flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="md:w-1/4 mb-6 md:mb-0">
          <h2 className="uppercase text-sm font-bold text-gray-500 mb-4">CONTENTS</h2>
          <ul className="space-y-2 text-sm">
            {post?.tableOfContents?.map((item, index) => (
              <li key={index}  onClick={() => scrollToSection(item)} className="text-black hover:cursor-pointer whitespace-pre-wrap">
                {item}
              </li>
            ))}
          </ul>

          {/* Contact Box */}
          <div className="mt-8 p-8 rounded-lg bg-linear-to-r from-[#2CAFF3]  to-[#1975BB] ;
">
            <h3 className=" font-semibold mb-2 text-white text-2xl">{post.contactText}</h3>
            <button className="bg-red-600 text-white py-2 px-4 mt-8 w-full rounded text-sm font-medium hover:bg-red-700 transition-colors">
              Schedule a Call
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:w-3/4 md:pl-8">
          {/* Introduction */}
          <div ref={el => sectionRefs.current['introduction'] = el}>
          {post.introduction.map((paragraph, index) => (
            <p key={`intro-${index}`} className="text-gray-700 mb-6">
              {paragraph}
            </p>
          ))}
        </div>

          {/* Sections */}
          {post?.sections?.map((section, sectionIndex) => (
            section.type === "cta"?<Advertisement title={section.title} text={section.content[0]} />:
            <div key={`section-${sectionIndex}`}  ref={el => sectionRefs.current[slugify(section.title)] = el}>
              <h2 className="text-xl font-bold text-gray-800 mb-4 mt-8">{section.title}</h2>
              {section.content.map((paragraph, paragraphIndex) => (
                <p key={`section-${sectionIndex}-p-${paragraphIndex}`} className="text-gray-700 mb-6">
                  {paragraph}
                </p>
              ))}
              
              {/* Subsections */}
              {section?.subsections?.map((subsection, subsectionIndex) => (
                <div key={`subsection-${sectionIndex}-${subsectionIndex}`} ref={el => sectionRefs.current[slugify(subsection.title)] = el}>
                  <h3 className="text-lg font-bold text-gray-800 mb-3 mt-6">{subsection.title}</h3>
                  {subsection.content.map((paragraph, paragraphIndex) => (
                    <p key={`subsection-${sectionIndex}-${subsectionIndex}-p-${paragraphIndex}`} className="text-gray-700 mb-6">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

// Usage example
const BlogPage = () => {
  const location = useLocation();
  console.log(location)
  const post = location?.state?.post;
  return <>
  <BlogPost post={post?post:blogPost} />
  <RelatedPost/>
  </>;
};
export const Advertisement = ({title,text}) => {
    return (
      <div className="bg-gray-800 text-white rounded-lg p-6 shadow-md max-w-full my-4 ">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        
        <p className="text-gray-300 text-sm mb-4">
         {text}
        </p>
        
        <button className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium py-2 px-4 rounded transition-colors w-36 text-center">
          Schedule a call
        </button>
      </div>
    );
  };
  export const RelatedPost = () => {

    return (
        <div className="max-w-5xl mx-auto bg-white rounded-md overflow-hidden my-8">
           <h1 className='text-5xl font-medium my-8'>Related <span className='text-blue-400'>Reads</span></h1> 
           <div className='p-2'><BlogsList/></div>
        </div>
    )
  }
export default BlogPage;