import { useState, useEffect, useRef } from 'react';
import { events } from '@/constant';

const FeaturedEvents: React.FC = () => {

  const extendedEvents = [...events, ...events, ...events];
  
  const [currentIndex, setCurrentIndex] = useState(events.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const DESKTOP_ACTIVE_W = 800;
  const DESKTOP_INACTIVE_W = 640;
  const DESKTOP_GAP = 60;

  const MOBILE_CARD_W = 300;
  const MOBILE_GAP = 16;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;

  useEffect(() => {
    const interval = setInterval(() => {

      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  //Infinite Loop Reset
  useEffect(() => {
    if (currentIndex >= events.length * 2) {
      // Wait for the slide animation to finish (700ms), then snap back silently
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(currentIndex - events.length);
      }, 700);
    }
    
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex]);

  const getTranslateX = () => {
    const activeWidth = isMobile ? MOBILE_CARD_W : DESKTOP_ACTIVE_W;
    const inactiveWidth = isMobile ? MOBILE_CARD_W : DESKTOP_INACTIVE_W;
    const gap = isMobile ? MOBILE_GAP : DESKTOP_GAP;
    
    const screenCenter = windowWidth / 2;
    
    const activeCardCenter = activeWidth / 2;
    
    const targetLeftPos = screenCenter - activeCardCenter;

    const widthOfPreviousItems = currentIndex * (inactiveWidth + gap);
    
    return targetLeftPos - widthOfPreviousItems;
  };

  return (
    <div className="w-full flex flex-col items-center bg-white overflow-x-hidden py-10">
      
      {/* HEADER SECTION */}
      <div className="w-full max-w-[1512px] px-6 md:px-[120px] mb-8 md:mb-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 w-full">
          <h2 className="text-[#1A3C34] text-center text-[24px] font-bold leading-tight shrink-0">
            Featured Events
          </h2>
          <p className="text-gray-500 text-sm md:text-[14px] leading-relaxed max-w-[340px] mx-auto md:mx-0 text-center md:text-left">
            Explore the vibrant city of Addis Ababa! Discover its rich culture, 
            delicious cuisine, and stunning landscapes.
          </p>
        </div>
      </div>

      {/* CAROUSEL TRACK */}
      <div className="w-full relative h-[334px] md:h-[600px] flex items-center">
        <div 
          className={`flex absolute left-0 items-center h-full ease-[cubic-bezier(0.25,1,0.5,1)] ${isTransitioning ? 'transition-transform duration-700' : ''}`}
          style={{ 
            transform: `translateX(${getTranslateX()}px)`,
            gap: isMobile ? `${MOBILE_GAP}px` : `${DESKTOP_GAP}px`
          }}
        >
          {extendedEvents.map((event, index) => {
            const isActive = index === currentIndex;
            
            const sizeClasses = isMobile
              ? 'w-[300px] h-[334px]'
              : isActive 
                ? 'w-[800px] h-[600px]' 
                : 'w-[640px] h-[480px]';

            return (
              <div
                key={`${event.id}-${index}`}
                className={`
                  relative shrink-0 overflow-hidden rounded-3xl
                  ${isTransitioning ? 'transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]' : ''}
                  ${sizeClasses}
                  ${isActive ? 'opacity-100 shadow-2xl z-10' : 'opacity-60 scale-100 z-0 grayscale-30'}
                `}
              >
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                <div 
                  className={`
                    absolute inset-0 w-full flex flex-col justify-center items-start text-left
                    ${isMobile ? 'p-6' : 'p-10'}
                  `}
                >
                  <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-4 py-2 mb-4">
                    <span className="text-white text-xs md:text-sm font-medium tracking-wide">
                      {event.date}
                    </span>
                  </div>

                  <h3 className="text-white font-bold uppercase mb-3
                    text-[20px] leading-6
                    md:text-[32px] md:leading-[1.2]
                  ">
                    {event.title}
                  </h3>

                  <p className="text-gray-200 text-[12px] md:text-[14px] leading-relaxed line-clamp-3 md:line-clamp-none max-w-[90%]">
                    {event.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturedEvents;