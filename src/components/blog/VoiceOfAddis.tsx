import { articles } from '@/constant';

interface VoiceProps {
  title?: string; 
}

const VoiceOfAddis: React.FC<VoiceProps> = ({ title = "Voice Of Addis" }) => {
  return (
    <div className="w-full flex justify-center bg-white">
      <div className="w-full max-w-[1512px] flex flex-col py-10 px-6 md:px-12 xl:px-[120px] gap-6">
        
        {/* Heading */}
        <h2 className="text-[24px] font-bold text-[#10383A] text-center md:text-left">
           {title}
        </h2>

        {/* Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-6">
          {articles.map((item) => (
            <div 
              key={item.id}
              className="flex flex-col justify-between transition-all duration-300 w-full min-h-[272px] h-fit bg-[#F7F8F7] rounded-2xl p-2 gap-4 md:h-[445px] md:bg-[#7F9276]/6 md:rounded-3xl md:p-4"
            >
              {/* Image */}
              <div className="w-full h-[180px] md:h-[220px] rounded-xl overflow-hidden shrink-0">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col grow gap-2 md:gap-3 px-1 md:px-0">
                <h3 className="text-[#10383A] font-bold text-base md:text-lg leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed line-clamp-3 md:line-clamp-2">
                  {item.desc}
                </p>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between mt-auto pt-2 px-1 md:px-0">
                <button className="bg-white text-[#10383A] text-xs md:text-sm font-bold py-2 px-4 md:px-6 rounded-full shadow-sm hover:shadow-md transition-shadow">
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
            {/* Prev Icon */}
            <button className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            
            {/* Next Icon */}
            <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#DFAA18] flex items-center justify-center text-white shadow-md hover:bg-[#c99815] transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default VoiceOfAddis;