import React from 'react';
import { featuredStory, sideStories } from '@/constant';
import { Link } from 'react-router-dom';

interface ButtonProps {
  id?: string | number;
}

const Button = ({id}: ButtonProps) => (
  <button className="bg-[#EAECE9] hover:bg-[#dcdedb] text-[#152C2C] text-[14px] font-bold py-3 px-6 rounded-3xl transition-colors w-fit">
    <Link to={`/blogs/${id}`}>
      Read More
    </Link>
  </button>
);

const LatestBlogStories: React.FC = () => {
  return (
    // Main Container
    <div className="w-full max-w-[1512px] mx-auto border-t border-gray-200 py-10 px-6 lg:px-[120px] flex flex-col gap-6">
      
      {/* Heading */}
      <h2 className="text-[24px] font-bold text-[#152C2C]">
        Latest Stories
      </h2>

      {/* Content Container */}
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        
        <div className="w-full lg:w-[756px] lg:h-[614px] bg-[#F7F8F7] rounded-2xl p-2 flex flex-col gap-4">
          
          <div className="w-full h-[250px] lg:h-full grow rounded-2xl overflow-hidden">
            <img 
              src={featuredStory.image} 
              alt={featuredStory.title} 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-3 px-1 pb-2">
            <h3 className="text-[18px] font-bold text-[#152C2C]">
              {featuredStory.title}
            </h3>
            <p className="text-[14px] text-gray-600 leading-relaxed">
              {featuredStory.description}
            </p>
            <div className="flex items-center justify-between mt-2">
              <Button id={featuredStory.id} />
              <span className="text-[12px] text-gray-500 font-medium">{featuredStory.timeAgo}</span>
            </div>
          </div>
        </div>

        {/* Side Stories Container */}
        <div className="w-full lg:w-[500px] flex flex-col gap-4 lg:h-[614px]">
          {sideStories.map((story) => (
            <div 
              key={story.id} 
              // Small Card
              className="bg-[#F7F8F7] rounded-2xl p-2 flex flex-col lg:flex-row gap-4 w-full lg:flex-1"
            >
              
              {/* Small Card Image */}
              {/* Desktop: Fixed width 160px. Mobile: Full width, height 200px */}
              <div className="w-full h-[200px] lg:w-40 lg:h-full shrink-0 rounded-2xl overflow-hidden">
                <img 
                  src={story.image} 
                  alt={story.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Small Card Content */}
              <div className="flex flex-col justify-between py-1 lg:pr-2 w-full">
                <div className="flex flex-col gap-2">
                  <h3 className="text-[18px] font-bold text-[#152C2C] leading-tight">
                    {story.title}
                  </h3>
                  <p className="text-[14px] text-gray-600 line-clamp-2">
                    {story.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between mt-4 lg:mt-0">
                  <Button id={story.id} />
                  <span className="text-[12px] text-gray-500 font-medium whitespace-nowrap ml-2">
                    {story.timeAgo}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default LatestBlogStories;