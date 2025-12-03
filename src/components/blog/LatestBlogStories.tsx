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
    <div className="w-full max-w-[1512px] mx-auto border-t border-gray-200 
      flex flex-col
      py-10 px-6 gap-6
      md:py-10 md:px-12 md:gap-6
      xl:px-[120px]
    ">
      
      {/* Heading */}
      <h2 className="text-[24px] font-bold text-[#152C2C]">
        Latest Stories
      </h2>

      <div className="flex flex-col xl:flex-row w-full xl:h-[620px]
        gap-6 md:gap-4 xl:gap-6
      ">
        
        <div className="w-full xl:w-[60%] h-auto xl:h-full bg-[#F7F8F7] 
          rounded-2xl md:rounded-2xl
          flex flex-col shrink-0
          p-2 md:p-3 xl:p-2
          gap-4 md:gap-6 xl:gap-4
        ">
          <div className="w-full h-[250px] md:h-[300px] xl:h-auto xl:grow rounded-2xl overflow-hidden relative">
            <img 
              src={featuredStory.image} 
              alt={featuredStory.title} 
              className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-3 px-2 pb-4 md:px-0 md:pb-0 xl:px-2 xl:pb-4">
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

        <div className="w-full xl:flex-1 xl:h-full flex 
          flex-row overflow-x-auto snap-x
          md:-mr-12 md:pr-12
          
          /* Desktop (xl): Column, No Scroll, Reset Margins */
          xl:flex-col xl:overflow-visible xl:flex-nowrap xl:mr-0 xl:pr-0
          
          gap-4 md:gap-4 xl:gap-4
          pb-4 md:pb-4 xl:pb-0
        ">
          
          {sideStories.map((story) => (
            <div 
              key={story.id} 
              className="bg-[#F7F8F7] snap-center shrink-0
                min-w-[85vw]
                md:min-w-[321px] md:w-[321px] md:p-2 md:rounded-2xl
                
                /* Desktop (xl): Flex-1 ensures they share the 620px height equally */
                xl:min-w-0 xl:w-full xl:p-2 xl:rounded-2xl xl:flex-1

                flex 
                flex-col md:flex-col xl:flex-row
                
                gap-4 md:gap-4 xl:gap-4
                rounded-2xl p-2 
              "
            >
              
              <div className="w-full h-[200px] shrink-0 rounded-2xl overflow-hidden relative
                 md:h-[200px]
                 /* Desktop: Image takes full height of the card */
                 xl:w-40 xl:h-full
              ">
                <img 
                  src={story.image} 
                  alt={story.title} 
                  className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between py-1 xl:pr-2 w-full h-full">
                <div className="flex flex-col gap-2">
                  <h3 className="text-[18px] font-bold text-[#152C2C] leading-tight line-clamp-2">
                    {story.title}
                  </h3>
                  <p className="text-[14px] text-gray-600 line-clamp-2">
                    {story.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between mt-4 xl:mt-0">
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