import { useEtiquette } from "@/hooks/useEtiquette";
import { Skeleton } from "@/components/ui/skeleton";

const CulturalEtiquette = () => {
  const { data, isLoading, isError } = useEtiquette();

  if (isLoading) {
    return (
      <section className="w-full max-w-[1512px] mx-auto flex flex-col gap-6 px-6 py-10 md:px-12 md:py-[60px] xl:px-[120px]">
        {/* Header Skeleton */}
        <div className="flex flex-col xl:flex-row justify-between items-center md:items-start xl:items-center w-full max-w-[1272px] mx-auto gap-4 xl:gap-0">
          <Skeleton className="h-8 w-64" />
          <div className="w-full md:w-[500px]">
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>

        {/* Cards Skeleton Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-[1272px] mx-auto">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="min-h-[253px] rounded-3xl p-6 bg-white shadow-sm flex flex-col justify-center gap-4 border border-gray-100">
              <Skeleton className="h-6 w-1/2 mx-auto" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6 mx-auto" />
              <Skeleton className="h-4 w-1/3 mx-auto mt-2" />
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (isError || !data?.header) {
    return (
      <div className="w-full py-20 text-center bg-[#F7F8F7]">
        <h2 className="text-[#10383A] text-xl font-semibold">Content Unavailable</h2>
        <p className="text-[#758886]">Unable to load Etiquette information.</p>
      </div>
    );
  }

  const { header, cards } = data;

  return (
    <section className="w-full max-w-[1512px] mx-auto flex flex-col gap-6 px-6 py-10 md:px-12 md:py-[60px] xl:px-[120px]">
      
      {/* HEADER */}
      <div className="flex flex-col xl:flex-row justify-between items-center md:items-start xl:items-center w-full max-w-[1272px] mx-auto gap-4 xl:gap-0">
        <h1 className="text-[#10383A] text-[24px] font-semibold text-center md:text-left">
          {header.title}
        </h1>

        <p className="text-[#758886] text-[14px] max-w-[500px] mx-auto md:mx-0 text-center md:text-left leading-[150%]">
          {header.subtitle}
        </p>
      </div>

      {/* CARDS CONTAINER */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-[1272px] mx-auto">
        {cards.map((card) => (
          <div
            key={card.id}
            className="relative w-full h-full min-h-[253px] md:min-h-[242px] rounded-3xl overflow-hidden p-4 md:p-6 flex flex-col justify-center gap-4 bg-white shadow-sm md:shadow-none border border-[#E5E7EB] transition-colors"
          >
            <div className="absolute inset-0 bg-[#F7F8F7] opacity-20 pointer-events-none" />

            {/* CARD CONTENT */}
            <div className="relative z-10 flex flex-col gap-4">
              
              {/* HEADING */}
              <h2 className="font-semibold text-[#10383A] text-xl md:text-2xl text-center capitalize">
                {/* Title Highlight (Green) */}
                {card.title_highlight && (
                  <span className="text-[#1EAA9D]">{card.title_highlight} </span>
                )}
                {/* Rest of Title */}
                {card.title}
              </h2>

              {/* DESCRIPTION */}
              <p className="text-[#10383A] text-sm md:text-base leading-[150%] text-center line-clamp-4">
                {card.description}
              </p>

              {/* TIP */}
              {card.tip && (
                <div className="text-[#10383A] text-[12px] md:text-base text-center py-2 px-4 rounded-full mx-auto">
                  <span className="font-semibold text-[#1EAA9D]">Tip:</span> {card.tip.text}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CulturalEtiquette;