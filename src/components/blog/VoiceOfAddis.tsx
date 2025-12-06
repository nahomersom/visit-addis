import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useBlogs } from '@/hooks/useBlogs';
import { getImageUrl, formatDate } from '@/utils/imageUtils';
import { Skeleton } from '../ui/skeleton';

interface VoiceProps {
  title?: string;
}

const VoiceOfAddis: React.FC<VoiceProps> = ({ title = "Voice Of Addis" }) => {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  // Fetch Size 6, isFeatured = TRUE
  const { data, isLoading, isError } = useBlogs(page, 6, true);

  const blogs = data?.data || [];
  const pagination = data?.meta?.pagination;

  // Handlers
  const handleNext = () => {
    if (pagination && page < pagination.pageCount) {
      setPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  const handleReadMore = (documentId: string) => {
    navigate(`/blogs/${documentId}`);
  };

  if (isLoading) {
    return (
      <div className="w-full max-w-[1512px] mx-auto flex flex-col bg-white py-10 px-6 gap-6 md:py-10 md:px-12 md:gap-6 xl:px-[120px] xl:gap-6">
        
        {/* Title Skeleton */}
        <div className="flex justify-center md:justify-start">
          <Skeleton className="h-8 w-48 rounded-lg" />
        </div>

        {/* Cards Grid Skeleton */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-4 xl:gap-6">
          {/* Render 6 skeleton cards to match page size */}
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="flex flex-col justify-between w-full bg-[#F7F8F7] min-h-[272px] h-fit rounded-2xl p-2 gap-4 md:h-[445px] md:rounded-3xl md:p-4 md:gap-4 xl:rounded-3xl xl:p-4"
            >
              {/* Image Skeleton */}
              <Skeleton className="w-full shrink-0 h-[180px] rounded-xl md:h-[220px] md:rounded-xl" />

              {/* Content Skeleton */}
              <div className="flex flex-col grow gap-2 md:gap-3 px-1 md:px-0">
                {/* Title lines */}
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-6 w-1/2" />
                
                {/* Excerpt lines */}
                <div className="mt-2 space-y-2">
                  <Skeleton className="h-3 w-full" />
                  <Skeleton className="h-3 w-full" />
                  <Skeleton className="h-3 w-2/3" />
                </div>
              </div>

              {/* Footer Skeleton */}
              <div className="flex items-center justify-between mt-auto pt-2 px-1 md:px-0">
                <Skeleton className="h-9 w-24 rounded-full" /> {/* Button */}
                <Skeleton className="h-3 w-20" /> {/* Date */}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Skeleton */}
        <div className="w-full flex items-center justify-between mt-4 md:mt-8">
          <Skeleton className="h-4 w-8" /> {/* Page count */}
          
          <div className="grow mx-4 h-px bg-gray-100 relative">
             <Skeleton className="absolute inset-0 w-full h-full" />
          </div>

          <div className="flex items-center gap-3">
             <Skeleton className="w-10 h-10 md:w-12 md:h-12 rounded-full" />
             <Skeleton className="w-10 h-10 md:w-12 md:h-12 rounded-full" />
          </div>
        </div>
      </div>
    );
  }

  if (isError) return <div className="text-center py-10 text-red-500">Failed to load stories.</div>;
  
  // If no featured blogs exist, hide the section
  if (!blogs.length) return null; 

  return (
    <div className="w-full max-w-[1512px] mx-auto flex flex-col bg-white py-10 px-6 gap-6 md:py-10 md:px-12 md:gap-6 xl:px-[120px] xl:gap-6">
      
      {/* Heading */}
      <h2 className="text-[24px] font-bold text-[#152C2C] text-center md:text-left">
        {title}
      </h2>

      {/* Cards Container (Grid) */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-4 xl:gap-6">
        {blogs.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-between transition-all duration-300 w-full bg-[#F7F8F7] min-h-[272px] h-fit rounded-2xl p-2 gap-4 md:h-[445px] md:rounded-3xl md:p-4 md:gap-4 xl:rounded-3xl xl:p-4"
          >
            {/* Image Wrapper */}
            <div 
              className="w-full shrink-0 overflow-hidden relative h-[180px] rounded-xl md:h-[220px] md:rounded-xl cursor-pointer"
              onClick={() => handleReadMore(item.documentId)}
            >
              <img
                src={getImageUrl(item.featured)}
                alt={item.title}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>

            {/* Content Wrapper */}
            <div className="flex flex-col grow gap-2 md:gap-3 px-1 md:px-0">
              <h3 className="text-[#152C2C] font-bold text-base md:text-lg leading-tight line-clamp-2">
                {item.title}
              </h3>
              <p className="text-[#758886] text-xs md:text-sm leading-relaxed line-clamp-3 md:line-clamp-2">
                {item.excerpt || item.content}
              </p>
            </div>

            {/* Footer / Action */}
            <div className="flex items-center justify-between mt-auto pt-2 px-1 md:px-0">
              <button 
                onClick={() => handleReadMore(item.documentId)}
                className="bg-white text-[#10383A] text-xs md:text-sm font-bold py-2 px-4 md:px-6 rounded-full shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                Read More
              </button>
              <span className="text-[10px] md:text-xs text-gray-500">
                Posted {formatDate(item.published_date)}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="w-full flex items-center justify-between mt-4 md:mt-8">
        <span className="text-xs text-gray-500 font-medium">
          {page}/{pagination?.pageCount || 1}
        </span>

        <div className="grow mx-4 h-px bg-gray-200">
          <div 
            className="h-full bg-gray-300 transition-all duration-300"
            style={{ width: `${(page / (pagination?.pageCount || 1)) * 100}%` }}
          ></div>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={handlePrev}
            disabled={page === 1}
            className={`w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 flex items-center justify-center transition-colors
              ${page === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-400 hover:bg-gray-50 cursor-pointer'}`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button 
            onClick={handleNext}
            disabled={page >= (pagination?.pageCount || 1)}
            className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white shadow-md transition-colors
              ${page >= (pagination?.pageCount || 1) ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#DFAA18] hover:bg-[#c99815] cursor-pointer'}`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

    </div>
  );
};

export default VoiceOfAddis;