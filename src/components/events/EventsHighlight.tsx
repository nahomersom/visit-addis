import { EventHighlights } from '@/constant';


const PastEventsHighlight: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex justify-center bg-white">

      <div className="
        w-full max-w-[1512px]
        px-6 py-10
        md:px-[120px] 
        flex flex-col gap-6
      ">

        <div className="
          w-full 
          flex flex-col xl:flex-row 
          xl:items-end xl:justify-between 
          xl:h-[65px]
          gap-4 xl:gap-0
        ">
          <h2 className="text-[24px] font-bold text-[#10383A] leading-tight">
            Past Events Highlight
          </h2>
          
          <p className="text-[14px] text-[#758886] xl:text-left leading-snug max-w-md xl:max-w-none">
            Delving into the Colorful History of Events: <br className="hidden xl:block" />
            An Extensive Collection
          </p>
        </div>

        {/* 
          CARDS CONTAINER
        */}

        <div className="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          xl:grid-cols-4 
          gap-4
          w-full
        ">
          {EventHighlights.map((event, index) => (
            <div 
              key={index}
              className="group relative w-full rounded-2xl overflow-hidden"
            >

              <div className="h-[260px] xl:h-[400px] w-full relative">
                
                {/* Image */}
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

                {/* 
                  Card Content 
                */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end items-start">
                  
                  <div className="flex flex-col gap-1 mb-4 transform transition-transform duration-300 group-hover:-translate-y-1">

                    <h3 className="text-[18px] font-bold text-white leading-tight">
                      {event.title}
                    </h3>
                    
                    <p className="text-[12px] text-gray-200 line-clamp-3 xl:line-clamp-4 leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  <button className="
                    bg-[#DAA520] hover:bg-[#B8860B] text-white 
                    text-[12px] font-medium 
                    py-2 px-5 rounded-full 
                    transition-all duration-300
                    shadow-md hover:shadow-lg
                  ">
                    Read More
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default PastEventsHighlight;