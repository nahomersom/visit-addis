import { getImageUrl } from "@/lib/axios"; 
import { useEventsHero } from "@/hooks/useEventsHero";
import { Skeleton } from "@/components/ui/skeleton";

const EventsHero = () => {
  const { data, isLoading } = useEventsHero();

  if (isLoading) {
    return (
      <div className="relative w-full flex justify-center items-center flex-col h-[500px] sm:h-[450px] md:h-auto md:py-[120px] lg:h-[500px] lg:py-[200px] gap-10">
        <Skeleton className="absolute inset-0 w-full h-full bg-slate-200" />
        <div className="relative flex flex-col items-center gap-4 w-full px-4 z-10">
          <Skeleton className="h-10 sm:h-12 md:h-16 w-3/4 max-w-[600px] bg-slate-300" />
          <Skeleton className="h-4 sm:h-6 w-full max-w-[800px] bg-slate-300" />
          <Skeleton className="h-4 sm:h-6 w-2/3 max-w-[600px] bg-slate-300" />
        </div>
      </div>
    );
  }

  // 1. Get the hero data safely (it might be undefined)
  const heroData = data?.data?.hero;

  // Fallback Content
  // If heroData.title is missing, use "Upcoming"; if highlight is missing
  const title = heroData?.title || "Upcoming";
  const titleHighlight = heroData?.title_highlight || "Events";
  const subtitle = heroData?.subtitle || "Explore our latest gatherings, workshops, and community moments designed just for you.";
  

  const bgImageUrl = heroData?.background_image?.url
    ? getImageUrl(heroData.background_image.url)
    : "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1770&auto=format&fit=crop";

  return (
    <div
      className="relative w-full flex justify-center items-center flex-col bg-center bg-cover
                                
      h-[500px] sm:h-[450px] gap-10
      
      md:h-auto md:py-[120px] md:px-12 md:gap-10
      
      lg:h-[500px] lg:py-[200px] lg:px-[120px]"
      style={{ backgroundImage: `url(${bgImageUrl})` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* content */}
      <div className="relative flex flex-col items-center text-center w-full gap-3 px-4 md:px-0">
        <h1 className="font-bold text-white text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] leading-tight">
          {title} <span className="text-[#DAA112]">{titleHighlight}</span>
        </h1>
        <p className="text-white/80 text-[12px] sm:text-[16px] w-full sm:max-w-[600px] md:max-w-[700px] lg:max-w-[840px] mx-auto">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default EventsHero;