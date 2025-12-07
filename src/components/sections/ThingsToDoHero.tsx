import { getImageUrl } from "@/lib/axios";
import { useThingsToDo } from "@/hooks/useThingsToDo";
import { Skeleton } from "@/components/ui/skeleton";

const   ThingToDoHero = () => {
  const { data, isLoading } = useThingsToDo();

  if (isLoading) {
    return (
      <div className="relative w-full h-[733px] md:h-[584px] lg:h-[488px] flex justify-center items-center flex-col lg:py-[200px] lg:px-[120px] bg-center bg-cover gap-10">
        <Skeleton className="absolute inset-0 w-full h-full bg-slate-200" />
        <div className="relative flex flex-col items-center gap-4 w-full px-4 z-10">
          <Skeleton className="h-10 sm:h-12 md:h-16 w-3/4 max-w-[600px] bg-slate-300" />
          <Skeleton className="h-4 sm:h-6 w-full max-w-[800px] bg-slate-300" />
        </div>
      </div>
    );
  }

  const heroData = data?.data?.hero;

  const fullTitle = heroData?.title || "Explore a World of Activities";
  const titleHighlight = heroData?.title_highlight || "Activities";
  const subtitle = heroData?.subtitle || "Addis Ababa blends rich traditions with a lively nightlife. Whether you want to explore history, enjoy local cuisine, dance, or meet friendly locals, this city has something for everyone.";

  // Split title around the highlight word
  const highlightIndex = fullTitle.toLowerCase().indexOf(titleHighlight.toLowerCase());
  let titleBefore = "";
  let titleAfter = "";
  let actualHighlight = titleHighlight;
  
  if (highlightIndex !== -1) {
    // Get the actual highlight word from the title (with original casing)
    const actualHighlightLength = titleHighlight.length;
    actualHighlight = fullTitle.substring(highlightIndex, highlightIndex + actualHighlightLength);
    
    titleBefore = fullTitle.substring(0, highlightIndex);
    titleAfter = fullTitle.substring(highlightIndex + actualHighlightLength).trim();
  } else {
    // If highlight not found in title, use title as before and highlight separately
    titleBefore = fullTitle;
    titleAfter = "";
  }

  const bgImageUrl = heroData?.background_image?.url
    ? getImageUrl(heroData.background_image.url)
    : "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1770&auto=format&fit=crop";

  return (
    <div
      className="relative w-full h-[733px] md:h-[584px] lg:h-[488px]
      flex justify-center items-center flex-col
      lg:py-[200px] lg:px-[120px]
      bg-center bg-cover
      gap-10
      "
      style={{ backgroundImage: `url(${bgImageUrl})` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* content */}
      <div className="relative flex flex-col items-center text-center w-full gap-3 px-4">
        <h1 className="text-2xl md:text-[64px] font-bold mb-2">
          <span className="text-white">
            {titleBefore}
            <span className="text-theme-primary">{actualHighlight}</span>
          </span>
          {titleAfter && titleAfter.length > 0 && (
            <div className="text-white">{titleAfter}</div>
          )}
        </h1>
        <p className="text-white/80 text-[12px] md:text-[16px] w-full md:max-w-[738px] lg:max-w-[840px] mx-auto">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default ThingToDoHero;