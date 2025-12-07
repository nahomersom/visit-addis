import { useState, useEffect, useRef } from 'react';
import { useFeaturedEvents } from '@/hooks/useFeaturedEvents';
import { Skeleton } from "@/components/ui/skeleton"; 
import { cn } from "@/lib/utils"; 

const CONFIG = {
  DESKTOP: { active: 800, inactive: 640, gap: 60 },
  TABLET:  { active: 600, inactive: 450, gap: 24 },
  MOBILE:  { active: 300, inactive: 300, gap: 16 }
};

const FeaturedEvents: React.FC = () => {
  // Data from Hook
  const { events, isLoading } = useFeaturedEvents();

  // Carousel State
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  
  const [windowWidth, setWindowWidth] = useState<number>(1200);
  
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const extendedEvents = events.length > 0 ? [...events, ...events, ...events] : [];

  useEffect(() => {
    // Check if window is defined (for SSR safety)
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Call handler immediately to sync state
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1280;

  // Initialize index in the middle set once data loads
  useEffect(() => {
    if (events.length > 0) {
      const timeout = setTimeout(() => {
        setCurrentIndex(events.length);
      }, 0);
      return () => clearTimeout(timeout);
    }
  }, [events.length]);

  // Auto-play interval
  useEffect(() => {
    if (events.length === 0) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [events.length]);

  // Infinite Loop Reset
  useEffect(() => {
    if (events.length === 0) return;

    if (currentIndex >= events.length * 2) {
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(currentIndex - events.length);
      }, 700);
    }
    
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex, events.length]);

  const getTranslateX = () => {
    if (events.length === 0) return 0;

    let activeWidth, inactiveWidth, gap;

    if (isMobile) {
      activeWidth = CONFIG.MOBILE.active;
      inactiveWidth = CONFIG.MOBILE.inactive;
      gap = CONFIG.MOBILE.gap;
    } else if (isTablet) {
      activeWidth = CONFIG.TABLET.active;
      inactiveWidth = CONFIG.TABLET.inactive;
      gap = CONFIG.TABLET.gap;
    } else {
      activeWidth = CONFIG.DESKTOP.active;
      inactiveWidth = CONFIG.DESKTOP.inactive;
      gap = CONFIG.DESKTOP.gap;
    }
    
    const screenCenter = windowWidth / 2;
    const activeCardCenter = activeWidth / 2;
    const targetLeftPos = screenCenter - activeCardCenter;
    const widthOfPreviousItems = currentIndex * (inactiveWidth + gap);
    
    return targetLeftPos - widthOfPreviousItems;
  };

  const getGapValue = () => {
    if (isMobile) return CONFIG.MOBILE.gap;
    if (isTablet) return CONFIG.TABLET.gap;
    return CONFIG.DESKTOP.gap;
  };

  if (isLoading) {
    return (
      <div className="w-full flex flex-col items-center bg-white overflow-x-hidden py-10">
        {/* Skeleton Header */}
        <div className="w-full max-w-[1512px] px-6 md:px-12 xl:px-[120px] mb-8 md:mb-6 xl:mb-12">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 w-full">
            <Skeleton className="h-8 w-48 rounded-md bg-gray-200" />
            <div className="flex flex-col gap-2 w-full max-w-[340px] mx-auto md:mx-0 items-center md:items-start">
              <Skeleton className="h-4 w-full bg-gray-100" />
              <Skeleton className="h-4 w-[80%] bg-gray-100" />
            </div>
          </div>
        </div>

        {/* Skeleton Carousel */}
        <div className="w-full relative flex items-center justify-center h-[334px] md:h-[500px] xl:h-[600px] overflow-hidden">
          <div className="flex items-center justify-center" style={{ gap: isMobile ? CONFIG.MOBILE.gap : isTablet ? CONFIG.TABLET.gap : CONFIG.DESKTOP.gap }}>
            
            {/* Left Preview Card (Hidden on Mobile) */}
            {!isMobile && (
              <Skeleton 
                className={cn(
                  "rounded-3xl bg-gray-100 shrink-0",
                  isTablet 
                    ? `w-[${CONFIG.TABLET.inactive}px] h-[380px]` 
                    : `w-[${CONFIG.DESKTOP.inactive}px] h-[480px]`
                )}
                style={{
                  width: isTablet ? CONFIG.TABLET.inactive : CONFIG.DESKTOP.inactive,
                  height: isTablet ? 380 : 480
                }}
              />
            )}

            {/* Center Active Card */}
            <div 
              className={cn(
                "relative rounded-3xl overflow-hidden shrink-0",
                isMobile ? `w-[${CONFIG.MOBILE.active}px] h-[334px]` :
                isTablet ? `w-[${CONFIG.TABLET.active}px] h-[500px]` :
                `w-[${CONFIG.DESKTOP.active}px] h-[600px]`
              )}
              style={{
                width: isMobile ? CONFIG.MOBILE.active : isTablet ? CONFIG.TABLET.active : CONFIG.DESKTOP.active,
                height: isMobile ? 334 : isTablet ? 500 : 600
              }}
            >
              <Skeleton className="w-full h-full bg-gray-200" />
              {/* Internal Content Skeleton */}
              <div className={`absolute inset-0 w-full flex flex-col justify-center items-start ${isMobile ? 'p-6' : 'p-10'}`}>
                <Skeleton className="w-24 h-8 rounded-full mb-4 bg-gray-300" />
                <Skeleton className="w-[80%] h-10 mb-3 bg-gray-300" />
                <Skeleton className="w-[60%] h-10 mb-6 bg-gray-300" />
                <div className="space-y-2 w-full">
                  <Skeleton className="w-[90%] h-4 bg-gray-300/60" />
                  <Skeleton className="w-[85%] h-4 bg-gray-300/60" />
                </div>
              </div>
            </div>

            {/* Right Preview Card (Hidden on Mobile) */}
            {!isMobile && (
               <Skeleton 
               className={cn(
                 "rounded-3xl bg-gray-100 shrink-0",
                 isTablet 
                   ? `w-[${CONFIG.TABLET.inactive}px] h-[380px]` 
                   : `w-[${CONFIG.DESKTOP.inactive}px] h-[480px]`
               )}
               style={{
                 width: isTablet ? CONFIG.TABLET.inactive : CONFIG.DESKTOP.inactive,
                 height: isTablet ? 380 : 480
               }}
             />
            )}
          </div>
        </div>
      </div>
    );
  }

  if (events.length === 0) {
    return null; 
  }

  return (
    <div className="w-full flex flex-col items-center bg-white overflow-x-hidden py-10">
      
      {/* HEADER SECTION */}
      <div className="w-full max-w-[1512px] px-6 md:px-12 xl:px-[120px] mb-8 md:mb-6 xl:mb-12">
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
      <div className="w-full relative flex items-center h-[334px] md:h-[500px] xl:h-[600px]">
        <div 
          className={`flex absolute left-0 items-center h-full ease-[cubic-bezier(0.25,1,0.5,1)] ${isTransitioning ? 'transition-transform duration-700' : ''}`}
          style={{ 
            transform: `translateX(${getTranslateX()}px)`,
            gap: `${getGapValue()}px`
          }}
        >
          {extendedEvents.map((event, index) => {
            const isActive = index === currentIndex;
            
            // Dynamic Sizing Classes
            let sizeClasses = '';
            if (isMobile) {
              sizeClasses = 'w-[300px] h-[334px]';
            } else if (isTablet) {
              sizeClasses = isActive ? 'w-[600px] h-[500px]' : 'w-[450px] h-[380px]';
            } else {
              sizeClasses = isActive ? 'w-[800px] h-[600px]' : 'w-[640px] h-[480px]';
            }

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
                  src={event.imageUrl} 
                  alt={event.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                <div className={`absolute inset-0 w-full flex flex-col justify-center items-start text-left ${isMobile ? 'p-6' : 'p-10'}`}>
                  <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-4 py-2 mb-4">
                    <span className="text-white text-xs md:text-sm font-medium tracking-wide">
                      {event.date}
                    </span>
                  </div>

                  <h3 className="text-white font-bold uppercase mb-3 text-[20px] leading-6 md:text-[32px] md:leading-[1.2]">
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