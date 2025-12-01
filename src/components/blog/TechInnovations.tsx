import React from 'react';
import { ChevronLeft, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Story } from '@/constant';

interface BlogProps {
  blog: Story;
}

const TechInnovationsPage: React.FC<BlogProps> = ({ blog }) =>  {
  return (
    // Main Container 
    <div className="w-full min-h-screen bg-white flex flex-col items-center">
      
      {/* 
        Main Layout Container 
      */}
      <div className="w-full max-w-[590px] md:max-w-[1512px] px-6 md:px-[120px] py-10 flex flex-col gap-6">
     
        <div className="flex items-start">
         <Link to={"/blogs"}>
          <button className="bg-[#F3F4F6] hover:bg-gray-200 transition-colors rounded-[105px] px-6 py-4 flex items-center gap-2 text-[#10383A] text-[14px] font-medium leading-none cursor-pointer">
            <ChevronLeft size={16} />
            <span>Back</span>
          </button>
          </Link>
        </div>

        {/* Text Content Section */}
        <div className="flex flex-col gap-6">

          <h1 className="text-[24px] font-bold text-[#10383A] leading-tight">
            {blog.title}
          </h1>

          {/* Description: Size 14px, Color #758886, Gap between paragraphs 16px */}
          <div className="flex flex-col gap-4 text-[14px] text-[#758886] leading-relaxed">
            <p>
              {blog.description}
            </p>
            <p>
              {blog.description}
            </p>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="flex flex-col gap-6 w-full">

          <h2 className="text-[14px] font-bold text-[#10383A]">
            Gallery
          </h2>

          <div className="flex flex-col gap-6 w-full">
            {/* Two Small Cards */}
            <div className="grid grid-cols-2 gap-6 w-full">
              {/* Image 1 */}
              <div className="relative w-full h-[130px] md:h-[318px] rounded-2xl overflow-hidden">
                <img 
                  src={blog.image}
                  alt="Speaker" 
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay  */}
                <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
              </div>

              {/* Image 2 */}
              <div className="relative w-full h-[130px] md:h-[318px] rounded-2xl overflow-hidden">
                <img 
                  src={blog.image}
                  alt="Conference" 
                  className="w-full h-full object-cover"
                />
                {/* Interface overlay */}
                <div className="absolute top-4 left-4 bg-blue-500/80 text-white text-[10px] px-2 py-1 rounded">
                   Live
                </div>
              </div>
            </div>

            {/* One Big Card */}
            <div className="relative w-full h-[200px] md:h-[500px] rounded-2xl overflow-hidden group">
              <img 
                src={blog.image}
                alt="Keynote Speaker" 
                className="w-full h-full object-cover"
              />
              {/* Overlay effect */}
              <div className="absolute inset-0 bg-indigo-900/40 mix-blend-multiply"></div>
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-12 h-12 md:w-16 md:h-16 bg-[#EAB308] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                  <Play className="fill-white text-white ml-1" size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TechInnovationsPage;