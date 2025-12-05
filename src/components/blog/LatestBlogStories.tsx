import React from 'react';
import { Link } from 'react-router-dom';
import { useBlogs } from '@/hooks/useBlogs'; 
import type { StrapiImage } from '@/types/blog';


const getImageUrl = (imageData?: StrapiImage) => {
  if (!imageData) return '/placeholder-image.jpg';
  
  const url = imageData.formats?.medium?.url || 
              imageData.formats?.small?.url || 
              imageData.url;

const BASE_URL = import.meta.env.VITE_BASE_URL;
  return `${BASE_URL}${url}`;
};

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};

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
  const { data: blogData, isLoading, isError } = useBlogs();

  if (isLoading) {
    return <div className="w-full h-[400px] flex items-center justify-center">Loading stories...</div>;
  }

  if (isError || !blogData?.data) {
    return <div className="w-full h-[400px] flex items-center justify-center text-red-500">Failed to load stories.</div>;
  }

  const blogs = blogData.data;

  const featuredStory = blogs[0]; 
  const sideStories = blogs.slice(1, 5);

  if (!featuredStory) return null;

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
              src={getImageUrl(featuredStory.featured)} 
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
              {featuredStory.excerpt || featuredStory.content}
            </p>
            <div className="flex items-center justify-between mt-2">
              <Button id={featuredStory.documentId} />
              <span className="text-[12px] text-gray-500 font-medium">
                {formatDate(featuredStory.published_date)}
              </span>
            </div>
          </div>
        </div>

        <div className="w-full xl:flex-1 xl:h-full flex 
          flex-row overflow-x-auto snap-x
          md:-mr-12 md:pr-12
          
          xl:flex-col xl:overflow-x-hidden xl:overflow-y-auto xl:mr-0 xl:pr-2
          
          gap-4 md:gap-4 xl:gap-4
          pb-4 md:pb-4 xl:pb-0
        ">
          
          {sideStories.map((story) => (
            <div 
              key={story.documentId} 
              className="bg-[#F7F8F7] snap-center shrink-0
                min-w-[85vw]
                md:min-w-[321px] md:w-[321px] md:p-2 md:rounded-2xl
                
                xl:min-w-0 xl:w-full xl:p-2 xl:rounded-2xl xl:shrink-0

                flex 
                flex-col md:flex-col xl:flex-row
                
                gap-4 md:gap-4 xl:gap-4
                rounded-2xl p-2 
              "
              style={{ minHeight: '180px' }}
            >
              
              <div className="w-full h-[200px] shrink-0 rounded-2xl overflow-hidden relative
                 md:h-[200px]
                 xl:w-40 xl:h-full
              ">
                <img 
                  src={getImageUrl(story.featured)} 
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
                    {story.excerpt || story.content}
                  </p>
                </div>
                
                <div className="flex items-center justify-between mt-4 xl:mt-0">
                  <Button id={story.documentId} />
                  <span className="text-[12px] text-gray-500 font-medium whitespace-nowrap ml-2">
                    {formatDate(story.published_date)}
                  </span>
                </div>
              </div>
            </div>
          ))}

          {sideStories.length === 0 && (
             <p className="text-gray-500 text-sm">No more stories to display.</p>
          )}
        </div>

      </div>
    </div>
  );
};

export default LatestBlogStories;