import React from 'react';
import { ChevronLeft, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getImageUrl } from '@/utils/imageUtils';
import { useBlogs } from '@/hooks/useBlogs';
import { Skeleton } from "@/components/ui/skeleton";
import type { BlogAttribute } from '@/types/blog';

// Local Assets
import exploreImage from '@/assets/images/list.png';
import vectorImage from '@/assets/images/Vector.png';

interface BlogData {
  documentId: string;
  title: string;
  content: string;
  published_date?: string;
  featured?: any;
  images?: any[];
}

interface BlogProps {
  blog: BlogData;
}

const TechInnovationsPage: React.FC<BlogProps> = ({ blog }) => {
  // Fetch data for the sidebar with loading state
  const { data: latestBlogsData, isLoading } = useBlogs(1, 6);

  // Filter out current blog and pick top 4
  const sidebarBlogs = latestBlogsData?.data
    ? latestBlogsData.data
        .filter((b: BlogAttribute) => b.documentId !== blog.documentId)
        .slice(0, 4)
    : [];

  // Image Logic
  const featuredImageUrl = getImageUrl(blog.featured);
  const galleryImage1 = blog.images?.[0] ? getImageUrl(blog.images[0]) : featuredImageUrl;
  const galleryImage2 = blog.images?.[1] ? getImageUrl(blog.images[1]) : featuredImageUrl;

  const formatDate = (dateString?: string) => {
    if (!dateString) return "January 18, 2025";
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center">
      {/* Main Layout Container */}
      <div className="w-full max-w-[1512px] flex flex-col xl:flex-row
                      py-10 px-6 gap-6
                      md:py-10 md:px-12
                      xl:px-[120px] 
                      items-start justify-center">
     
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-6 w-full xl:max-w-[858px] flex-1">
          
          {/* Back Button */}
          <div className="flex items-start shrink-0">
            <Link to={"/blogs"}>
              <button className="bg-[#F3F4F6] hover:bg-gray-200 transition-colors rounded-[105px] px-6 py-4 flex items-center gap-2 text-[#10383A] text-[14px] font-medium leading-none cursor-pointer">
                <ChevronLeft size={16} />
                <span>Back</span>
              </button>
            </Link>
          </div>

          {/* Text Content */}
          <div className="flex flex-col gap-6 w-full">
            <h1 className="text-[24px] md:text-[32px] font-bold text-[#10383A] leading-tight">
              {blog.title}
            </h1>

            <div className="flex flex-col gap-4 text-[14px] md:text-[16px] text-[#758886] leading-relaxed whitespace-pre-wrap">
              <p>{blog.content}</p>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="flex flex-col gap-6 w-full mt-4">
            <h2 className="text-[18px] font-bold text-[#10383A]">
              Gallery
            </h2>

            <div className="flex flex-col gap-6 w-full">
              {/* Two Small Cards Row */}
              {blog.images && blog.images.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                  <div className="relative w-full h-[200px] md:h-[318px] rounded-2xl overflow-hidden shadow-sm">
                    <img 
                      src={galleryImage1}
                      alt="Gallery Item 1" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="relative w-full h-[200px] md:h-[318px] rounded-2xl overflow-hidden shadow-sm">
                    <img 
                      src={galleryImage2}
                      alt="Gallery Item 2" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              )}

              {/* Big Featured/Video Card */}
              <div className="relative w-full h-60 md:h-[500px] rounded-2xl overflow-hidden group shadow-md">
                <img 
                  src={featuredImageUrl}
                  alt={blog.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-14 h-14 md:w-20 md:h-20 bg-[#EAB308] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
                    <Play className="fill-white text-white ml-1" size={24} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN (Desktop Only) */}
        <div className="hidden xl:flex flex-col gap-6 w-[374px] shrink-0 xl:py-6">
          
          {/* 1. Explore Card */}
          <div className="relative w-full bg-[#7F92760F] rounded-3xl flex flex-col items-center text-center 
                          px-8 py-10 gap-4 shadow-sm border border-gray-100 overflow-hidden">
            
            {/* Vector Decoration: Top Left */}
            <img 
              src={vectorImage} 
              alt="" 
              className="absolute -top-4 -left-4 w-40 opacity-60 pointer-events-none" 
            />
            
            {/* Vector Decoration: Right Side */}
            <img 
              src={vectorImage} 
              alt="" 
              className="absolute top-20 -right-24 w-40 opacity-60 rotate-180 pointer-events-none" 
            />

            <div className="flex flex-col items-center relative z-10">
              <span className="font-handwriting text-[#EAB308] text-[40px] leading-none font-normal" style={{ fontFamily: 'cursive' }}>
                Explore
              </span>
              <h3 className="text-[#10383A] text-[28px] font-bold leading-tight">
                Addis Ababa
              </h3>
            </div>

            <div className="relative w-full h-[250px] my-4 z-10">
               <img 
                src={exploreImage} 
                alt="Explore Addis" 
                className="w-full h-full object-contain drop-shadow-md"
              />
            </div>

            <p className="text-[#758886] text-[12px] leading-relaxed z-10">
              Plan a trip to Addis Ababa, take time to explore the vibrant city. Check out local spots, enjoy delicious Ethiopian food, and learn about the culture.
            </p>

            <button className="bg-[#10383A] text-white text-[14px] font-bold py-3 px-8 rounded-full hover:bg-[#0c2b2d] transition-colors shadow-lg mt-2 z-10 cursor-pointer">
              Plan your Trip
            </button>
          </div>

          {/* 2. Latest Blogs Section */}
          <div className="flex flex-col gap-6 w-full">
            <h3 className="text-[#10383A] text-[20px] font-extrabold pl-3">
              Latest Blogs
            </h3>

            <div className="flex flex-col w-full">
              {isLoading ? (
                // Loading Skeletons
                Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="flex flex-row w-full items-start gap-4 py-4 border-b border-gray-100">
                    <Skeleton className="w-[179px] h-[116px] rounded-[8px] shrink-0" />
                    <div className="flex flex-col gap-2 flex-1 pt-1">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-3 w-2/3" />
                    </div>
                  </div>
                ))
              ) : sidebarBlogs.length > 0 ? (

                sidebarBlogs.map((item: BlogAttribute) => (
                  <Link 
                    key={item.documentId}
                    to={`/blogs/${item.documentId}`} 
                    className="group flex flex-row w-full items-start gap-4 py-4 cursor-pointer border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors"
                  >

                    <div className="w-[179px] h-[116px] rounded-[8px] overflow-hidden shrink-0 shadow-sm">
                      <img 
                        src={getImageUrl(item.featured)} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    {/* Content */}
                    <div className="flex flex-col justify-center gap-1 flex-1 py-1">
                      <h4 className="text-[#10383A] text-[14px] font-bold leading-tight line-clamp-3 group-hover:text-[#EAB308] transition-colors">
                        {item.title}
                      </h4>
                      <span className="text-[#EAB308] text-[12px] font-medium uppercase tracking-wide">
                        {formatDate(item.published_date)}
                      </span>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="text-gray-400 text-sm py-4">No other blogs available.</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechInnovationsPage;