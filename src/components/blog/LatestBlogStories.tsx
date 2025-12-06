import React from 'react';
import { Link } from 'react-router-dom';
import { useBlogs } from '@/hooks/useBlogs';
import { getImageUrl, formatDate } from '@/utils/imageUtils'; // Ensure path is correct
import { Skeleton } from '../ui/skeleton';

// Helper for truncation
const truncateText = (text: string, maxLength: number) => {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

interface ButtonProps {
  id?: string | number;
}

const Button = ({ id }: ButtonProps) => (
  <Link to={`/blogs/${id}`} className="block w-fit shrink-0">
    <button className="bg-[#EAECE9] hover:bg-[#dcdedb] text-[#152C2C] text-[14px] font-bold py-3 px-6 rounded-3xl transition-colors cursor-pointer whitespace-nowrap">
      Read More
    </button>
  </Link>
);

const LatestBlogStories: React.FC = () => {
  // CONFIGURATION: Fetch Page 1, Size 4 (1 Big + 3 Small)
  const { data: blogData, isLoading, isError } = useBlogs(1, 4);

  // Styles
  const CONTAINER_CLASSES = "w-full max-w-[1512px] mx-auto flex flex-col border-t border-gray-200 py-10 px-6 gap-6 md:px-12 xl:px-[120px]";
  const CONTENT_WRAPPER_CLASSES = "flex flex-col gap-4 w-full xl:flex-row xl:h-[614px]";
  const BIG_CARD_CONTAINER = "bg-[#F7F8F7] rounded-2xl flex flex-col shrink-0 overflow-hidden w-full h-[436px] p-2 gap-6 md:h-[552px] md:p-3 xl:w-[756px] xl:h-full xl:p-2";
  const SIDE_LIST_CONTAINER = "flex gap-4 w-full overflow-x-auto scrollbar-hide snap-x md:h-[396px] xl:flex-col xl:w-[500px] xl:h-full xl:overflow-visible";
  const SMALL_CARD_CONTAINER = "bg-[#F7F8F7] rounded-2xl shrink-0 p-2 gap-4 flex snap-center transition-all duration-300 flex-col w-[308px] h-[272px] md:w-[321px] md:h-[396px] xl:flex-row xl:w-full xl:h-[180px]";

  // Loading State
  if (isLoading) {
    return (
      <div className={CONTAINER_CLASSES}>
        <Skeleton className="h-8 w-48 mb-2" />
        <div className={CONTENT_WRAPPER_CLASSES}>
          <div className={BIG_CARD_CONTAINER}>
            <Skeleton className="w-full grow rounded-xl" />
            <Skeleton className="h-20 w-full" />
          </div>
          <div className={SIDE_LIST_CONTAINER}>
            {[1, 2, 3].map((i) => (
              <div key={i} className={SMALL_CARD_CONTAINER}>
                <Skeleton className="w-full h-1/2 xl:w-1/3 xl:h-full rounded-xl" />
                <Skeleton className="w-full h-1/2 xl:w-2/3 xl:h-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Error State
  if (isError || !blogData?.data) {
    return <div className="w-full h-[200px] flex items-center justify-center text-red-500">Failed to load stories.</div>;
  }

  const blogs = blogData.data;

  // If no blogs at all
  if (blogs.length === 0) return null;

  // Split logic: The first one (index 0) is the "Most Recent"
  const featuredStory = blogs[0];
  // The next three (index 1, 2, 3) are the side stories
  const sideStories = blogs.slice(1, 4);

  return (
    <div className={CONTAINER_CLASSES}>
      <h2 className="text-[24px] font-bold text-[#152C2C] leading-tight">
        Latest Stories
      </h2>

      <div className={CONTENT_WRAPPER_CLASSES}>
        
        {/* BIG CARD (Most Recent) */}
        <div className={BIG_CARD_CONTAINER}>
          <div className="w-full grow relative rounded-xl overflow-hidden group">
            <Link to={`/blog/${featuredStory.documentId}`}>
              <img
                src={getImageUrl(featuredStory.featured)}
                alt={featuredStory.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </Link>
          </div>

          <div className="flex flex-col gap-3 shrink-0 w-full">
            <div className="flex flex-col gap-2 w-full">
               <h3 className="text-[20px] font-bold text-[#152C2C] w-full whitespace-nowrap overflow-hidden text-ellipsis">
                {truncateText(featuredStory.title, 60)}
              </h3>
              <p className="text-[14px] text-gray-600 leading-relaxed w-full whitespace-nowrap overflow-hidden text-ellipsis">
                {truncateText(featuredStory.excerpt || featuredStory.content, 100)}
              </p>
            </div>
           
            <div className="flex items-center justify-between pt-1">
              <Button id={featuredStory.documentId} />
              <span className="text-[12px] text-gray-500 font-medium whitespace-nowrap ml-2">
                {formatDate(featuredStory.published_date)}
              </span>
            </div>
          </div>
        </div>

        {/* SIDE STORIES (Next 3 Recent) */}
        <div className={SIDE_LIST_CONTAINER}>
          {sideStories.map((story) => (
            <div key={story.id} className={SMALL_CARD_CONTAINER}>

              <div className="
                shrink-0 relative rounded-xl overflow-hidden group
                w-full h-[130px]
                md:h-[220px]
                xl:w-[180px] xl:h-full
              ">
                <Link to={`/blog/${story.documentId}`}>
                  <img
                    src={getImageUrl(story.featured)}
                    alt={story.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </Link>
              </div>

              <div className="flex flex-col justify-between h-full w-full xl:flex-1">
                <div className="flex flex-col gap-2 w-full">
                  <h3 className="text-[16px] md:text-[18px] font-bold text-[#152C2C] leading-snug w-full whitespace-nowrap overflow-hidden text-ellipsis">
                    {truncateText(story.title, 50)}
                  </h3>
                  <p className="text-[13px] md:text-[14px] text-gray-600 leading-relaxed w-full whitespace-nowrap overflow-hidden text-ellipsis">
                    {truncateText(story.excerpt || story.content, 80)}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-2 xl:mt-0">
                  <Button id={story.documentId} />
                  <span className="text-[12px] text-gray-500 font-medium whitespace-nowrap ml-2">
                    {formatDate(story.published_date)}
                  </span>
                </div>
              </div>

            </div>
          ))}
          
          {sideStories.length === 0 && (
             <div className="hidden xl:flex w-full h-full items-center justify-center bg-[#F7F8F7] rounded-2xl">
               <p className="text-gray-400 font-medium">No additional stories found.</p>
             </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default LatestBlogStories;