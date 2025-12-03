import React from 'react';
import { articles } from '@/constant';

interface VoiceProps {
  title?: string; 
}

const VoiceOfAddis: React.FC<VoiceProps> = ({ title = "Voice Of Addis" }) => {
  if (!articles || articles.length === 0) {
    console.warn("VoiceOfAddis: 'articles' data is empty or undefined.");
    return null;
  }

  return (
    // Main Container
    <div className="w-full max-w-[1512px] mx-auto flex flex-col bg-white
                    py-10 px-6 gap-6
                    md:py-10 md:px-12 md:gap-6
                    xl:px-[120px] xl:gap-6">
      
      {/* Heading */}
      <h2 className="text-[24px] font-bold text-[#10383A] text-center md:text-left">
         {title}
      </h2>

      {/* Cards Container (Grid) */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 
                      gap-4 
                      md:gap-4 
                      xl:gap-6">
        
        {articles.map((item) => (
          <div 
            key={item.id}
            className="flex flex-col justify-between transition-all duration-300 w-full 
                       bg-[#F7F8F7] 
                       min-h-[272px] h-fit rounded-2xl p-2 gap-4
                       
                       md:h-[445px] md:rounded-3xl md:p-4 md:gap-4
                       
                       xl:rounded-3xl xl:p-4"
          >
            {/* Image Wrapper */}
            <div className="w-full shrink-0 overflow-hidden relative
                            h-[180px] rounded-xl
                            md:h-[220px] md:rounded-xl">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content Wrapper */}
            <div className="flex flex-col grow gap-2 md:gap-3 px-1 md:px-0">
              <h3 className="text-[#10383A] font-bold text-base md:text-lg leading-tight">
                {item.title}
              </h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed line-clamp-3 md:line-clamp-2">
                {item.desc}
              </p>
            </div>

            
            <div className="flex items-center justify-between mt-auto pt-2 px-1 md:px-0">
              <button className="bg-white text-[#10383A] text-xs md:text-sm font-bold py-2 px-4 md:px-6 rounded-full shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                Read More
              </button>
              <span className="text-[10px] md:text-xs text-gray-500">
                Posted {item.time}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="w-full flex items-center justify-between mt-4 md:mt-8">
        <span className="text-xs text-gray-500 font-medium">1/4</span>
        
        <div className="grow mx-4 h-px bg-gray-200">
          <div className="w-1/4 h-full bg-gray-300"></div>
        </div>

        <div className="flex items-center gap-3">
          <button className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50 transition-colors cursor-pointer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          
          <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#DFAA18] flex items-center justify-center text-white shadow-md hover:bg-[#c99815] transition-colors cursor-pointer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>

    </div>
  );
};

export default VoiceOfAddis;