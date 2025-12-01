import React from 'react';
import { featuredStory, sideStories } from '@/constant';
import { Link } from 'react-router-dom';

interface ButtonProps {
  id?: string | number;
}

const Button = ({ id }: ButtonProps) => (
  <Link to={`/blogs/${id}`}>
    <button className="bg-[#EAECE9] hover:bg-[#dcdedb] text-[#152C2C] text-[14px] font-bold py-3 px-6 rounded-3xl transition-colors w-fit cursor-pointer">
      Read More
    </button>
  </Link>
);

const LatestBlogStories: React.FC = () => {
  return (
    <div className="w-full max-w-[1512px] mx-auto border-t border-gray-200 py-10 px-6 md:px-[120px] flex flex-col gap-6">
      
      {/* Heading */}
      <h2 className="text-[24px] font-bold text-[#152C2C]">
        Latest Stories
      </h2>

      {/* Content Container */}
      <div className="flex flex-col lg:flex-row gap-6 w-full lg:h-[620px]">
        
        <div className="w-full lg:w-[60%] h-auto lg:h-full bg-[#F7F8F7] rounded-2xl p-2 flex flex-col gap-4 shrink-0">
          <div className="w-full h-[250px] md:h-[400px] lg:h-auto lg:grow rounded-2xl overflow-hidden relative">
            <img 
              src={featuredStory.image} 
              alt={featuredStory.title} 
              className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="flex flex-col gap-3 px-2 pb-4">
            <h3 className="text-[20px] font-bold text-[#152C2C]">
              {featuredStory.title}
            </h3>
            <p className="text-[14px] text-gray-600 leading-relaxed line-clamp-3">
              {featuredStory.description}
            </p>
            <div className="flex items-center justify-between mt-2">
              <Button id={featuredStory.id} />
              <span className="text-[12px] text-gray-500 font-medium">{featuredStory.timeAgo}</span>
            </div>
          </div>
        </div>

        <div className="w-full lg:flex-1 flex flex-row lg:flex-col gap-4 
                        overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 snap-x">
          
          {sideStories.map((story) => (
            <div 
              key={story.id} 
              className="bg-[#F7F8F7] rounded-2xl p-2 
                         min-w-[85vw] md:min-w-[45vw] lg:min-w-0 lg:w-full lg:flex-1
                         flex flex-col lg:flex-row gap-4 snap-center"
            >
              
              <div className="w-full h-[200px] lg:w-40 lg:h-full shrink-0 rounded-2xl overflow-hidden relative">
                <img 
                  src={story.image} 
                  alt={story.title} 
                  className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between py-1 lg:pr-2 w-full h-full">
                <div className="flex flex-col gap-2">
                  <h3 className="text-[18px] font-bold text-[#152C2C] leading-tight line-clamp-2">
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