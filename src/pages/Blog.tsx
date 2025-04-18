import React, { useRef } from 'react';
import { BlogsList } from '../components/BlogsSection';
import { useLocation } from 'react-router-dom';
import { Fade, Zoom } from 'react-awesome-reveal';
import { calendlyUrl } from '../Constants/constant';
import { useBlogStore } from '../store/store';
// Add this helper function at the top of the file
const slugify = (text) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
  };
// Blog component
export const BlogPost = ({ post }) => {

    const sectionRefs = useRef({});

    // Add scroll handler
    const scrollToSection = (item) => {
        const sectionId = slugify(item);
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
        <Fade triggerOnce direction="up" cascade damping={0.1}>
        <h1 className="text-2xl font-bold text-gray-800">{post?.title}</h1>
        <p className="text-sm text-gray-500 mt-2">{post?.date}</p>
        </Fade>
      </div>

      {/* Hero Image */}
      <div className="px-6">
        <Zoom>
        <div className="rounded-lg overflow-hidden mb-6">
          <img loading="lazy"  
            src={post?.featuredImage} 
            alt={post?.imageAlt} 
            className="w-full h-auto object-cover rounded-4xl"
          />
        </div>
        </Zoom>
      </div>

      {/* Content Grid */}
      <div className="px-6 flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="md:w-1/4 mb-6 md:mb-0">
        <Fade triggerOnce direction="left" cascade damping={0.01}>
          <h2 className="uppercase text-sm font-bold text-gray-500 mb-4">CONTENTS</h2>
          <ul className="space-y-2 text-sm">
            {post?.tableOfContents?.map((item, index) => (
              <li key={index}  onClick={() => scrollToSection(item)} className="text-black hover:cursor-pointer whitespace-pre-wrap">
                {item}
              </li>
            ))}
          </ul>
          </Fade>

          {/* Contact Box */}
          <div className="mt-8 p-8 rounded-lg bg-linear-to-r from-[#2CAFF3]  to-[#1975BB] ;
">
            <h3 className=" font-semibold mb-2 text-white text-2xl">{post?.contactText}</h3>
            <button className="bg-red-600 text-white py-2 px-4 mt-8 w-full rounded text-sm font-medium hover:bg-red-700 transition-colors" onClick={()=>window.open(calendlyUrl)}>
              Schedule a Call
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:w-3/4 md:pl-8">
          {/* Introduction */}
          <Fade triggerOnce direction="up" cascade damping={0.1} >
          <div ref={el => sectionRefs.current['introduction'] = el}>
          {post?.introduction.map((paragraph, index) => (
            <p key={`intro-${index}`} className="text-gray-700 mb-6">
              {paragraph}
            </p>
          ))}
        </div>
        </Fade>


          {/* Sections */}
          <Fade triggerOnce direction="up" cascade damping={0.1} >
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
          </Fade>


        </div>
      </div>
    </div>
  );
};

// Usage example
const BlogPage = () => {
  const location = useLocation();
  const post = location?.state?.post;
  const blogPosts = useBlogStore((state) => state.blogs);
  const blogPost=blogPosts[0]
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
        
        <button className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium py-2 px-4 rounded transition-colors w-36 text-center" onClick={()=>window.open(calendlyUrl)}>
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