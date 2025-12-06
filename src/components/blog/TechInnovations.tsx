import { ChevronLeft, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getImageUrl } from '@/utils/imageUtils';

interface BlogData {
  title: string;
  content: string;
  featured?: any;
  images?: any[];
}

interface BlogProps {
  blog: BlogData;
}

const TechInnovationsPage: React.FC<BlogProps> = ({ blog }) => {
  
  const featuredImageUrl = getImageUrl(blog.featured);
  const galleryImage1 = blog.images?.[0] ? getImageUrl(blog.images[0]) : featuredImageUrl;
  const galleryImage2 = blog.images?.[1] ? getImageUrl(blog.images[1]) : featuredImageUrl;

  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center">
      
      {/* Main Layout Container */}
      <div className="w-full max-w-[1512px] flex flex-col
                      py-10 px-6 gap-6
                      md:py-10 md:px-12 md:gap-6
                      xl:px-[120px] overflow-x-hidden">
     
        {/* Back Button */}
        <div className="flex items-start shrink-0">
         <Link to={"/blogs"}>
          <button className="bg-[#F3F4F6] hover:bg-gray-200 transition-colors rounded-[105px] px-6 py-4 flex items-center gap-2 text-[#10383A] text-[14px] font-medium leading-none cursor-pointer">
            <ChevronLeft size={16} />
            <span>Back</span>
          </button>
          </Link>
        </div>

        {/* Text Content Section */}
        <div className="flex flex-col gap-6 w-full max-w-full">

          <h1 className="text-[24px] font-bold text-[#10383A] leading-tight wrap-break-word w-full">
            {blog.title}
          </h1>

          <div className="flex flex-col gap-4 text-[14px] text-[#758886] leading-relaxed whitespace-pre-wrap w-full max-w-full wrap-break-word">
            <p className="wrap-break-word break-all">
              {blog.content}
            </p>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="flex flex-col gap-6 w-full">

          <h2 className="text-[14px] font-bold text-[#10383A]">
            Gallery
          </h2>

          <div className="flex flex-col gap-6 w-full">
            
            {/* Two Small Cards Row */}
            {blog.images && blog.images.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {/* Image 1 */}
                <div className="relative w-full h-[200px] md:h-[318px] rounded-2xl overflow-hidden shrink-0">
                  <img 
                    src={galleryImage1}
                    alt="Gallery Item 1" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply pointer-events-none"></div>
                </div>

                {/* Image 2 */}
                <div className="relative w-full h-[200px] md:h-[318px] rounded-2xl overflow-hidden shrink-0">
                  <img 
                    src={galleryImage2}
                    alt="Gallery Item 2" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            )}

            {/* One Big Card (Featured Image) */}
            <div className="relative w-full h-60 md:h-[500px] rounded-2xl overflow-hidden group shrink-0">
              <img 
                src={featuredImageUrl}
                alt={blog.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-indigo-900/40 mix-blend-multiply transition-opacity group-hover:bg-indigo-900/30"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-12 h-12 md:w-16 md:h-16 bg-[#EAB308] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
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