import React from 'react';
import { Fade } from 'react-awesome-reveal';

const NewsEventsSection = () => {
  return (
    <div className="bg-gray-50 py-16 px-6">
      {/* Heading */}
      <Fade triggerOnce direction="up"  cascade damping={0.1}>
      <div className="max-w-6xl mx-auto mb-12">
        <h2 className="text-5xl font-normal text-center ">
          News & <span className="text-blue-400 font-semibold">Events</span>
        </h2>
      </div>

      {/* Featured News */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <div className="bg-black rounded-xl overflow-hidden shadow-md">
              <img loading="lazy"  
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Digital chip technology" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-2/3 flex flex-col justify-center">
            <div className="flex justify-between items-start mb-2">
              <span className="text-gray-700 font-medium">Actiontec</span>
              <span className="text-gray-700">February 24,2024</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">
              HA Group, an innovative 4G/5G System on a Chip (SoC) in the semiconductor startup.
            </h3>
            <div>
              <button className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium py-2 px-6 rounded-sm">
                See More
              </button>
            </div>
          </div>
        </div>
      </div>
      </Fade>

      {/* News Grid */}
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* News Item 1 */}
          <Fade triggerOnce direction="up"  cascade damping={0.1}>
          <div className="flex flex-col rounded-xl shadow-md">
            <div className="bg-black mb-4 overflow-hidden rounded-t-xl">
              <img loading="lazy"  
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" 
                alt="Conference audience" 
                className="w-full h-48 object-cover"
              />
            </div>
            <div className='p-2'>
            <div className="text-red-600 font-semibold text-sm mb-1 ">Q3-14</div>
            <div className="text-xs text-gray-700 mb-2 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </div>
            <div className="text-xs text-blue-400 font-medium hover:underline cursor-pointer">
              read more
            </div>
            </div>
          </div>

          {/* News Item 2 */}
          <div className="flex flex-col rounded-xl shadow-md">
            <div className="bg-black mb-4 overflow-hidden rounded-t-xl">
              <img loading="lazy"  
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" 
                alt="Conference audience" 
                className="w-full h-48 object-cover"
              />
            </div>
            <div className='p-2'>
            <div className="text-red-600 font-semibold text-sm mb-1 ">Q3-14</div>
            <div className="text-xs text-gray-700 mb-2 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </div>
            <div className="text-xs text-blue-400 font-medium hover:underline cursor-pointer">
              read more
            </div>
            </div>
          </div>

          {/* News Item 3 */}
          <div className="flex flex-col rounded-xl shadow-md">
            <div className="bg-black mb-4 overflow-hidden rounded-t-xl">
              <img loading="lazy"  
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" 
                alt="Conference audience" 
                className="w-full h-48 object-cover"
              />
            </div>
            <div className='p-2'>
            <div className="text-red-600 font-semibold text-sm mb-1 ">Q3-14</div>
            <div className="text-xs text-gray-700 mb-2 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </div>
            <div className="text-xs text-blue-400 font-medium hover:underline cursor-pointer">
              read more
            </div>
            </div>
          </div>
          </Fade>

        </div>
      </div>

      </div>
  );
};

export default NewsEventsSection;