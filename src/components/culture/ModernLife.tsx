import { useModernLifeData } from "@/hooks/useModernLife";
import { getImageUrl } from "@/lib/axios";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";

const ModernLife = () => {
  const { data: items, isLoading, isError } = useModernLifeData();
  

  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});

  const handleImageError = (id: number) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };


  if (isLoading) {
    return (
      <div className="w-full max-w-[1512px] mx-auto h-auto bg-[#F7F8F7] flex flex-col py-10 px-6 gap-10 md:py-[60px] md:px-12 md:gap-[60px] lg:gap-[120px] lg:px-[120px] lg:py-10">
        <div className="flex justify-between items-center flex-col gap-6 md:flex-row md:gap-[60px]">
          <div className="w-full md:w-1/2 lg:flex-1 space-y-4">
            <Skeleton className="h-8 w-1/2 mx-auto md:mx-0" />
            <Skeleton className="h-1 w-[210px] mx-auto md:mx-0" />
            <Skeleton className="h-32 w-full" />
          </div>
          <div className="w-full md:w-1/2 flex justify-end h-[262px] lg:h-[400px]">
            <Skeleton className="w-full h-full rounded-xl rounded-tl-[150px]" />
          </div>
        </div>
      </div>
    );
  }


  if (isError || !items || items.length === 0) {
    return (
      <div className="w-full h-[400px] bg-[#F7F8F7] flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-[24px] font-semibold text-[#10383A] mb-2">
          Content Unavailable
        </h2>
        <p className="text-[#758886]">
          We are having trouble loading this section. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[1512px] mx-auto h-auto bg-[#F7F8F7] flex flex-col 
      py-10 px-6 gap-10 
      md:py-[60px] md:px-12 md:gap-[60px] 
      lg:gap-[120px] lg:px-[120px] lg:py-10">

      {items.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center 
            flex-col gap-6 
            md:flex-row md:gap-[60px]"
        >
          {/* TEXT Section */}
          <div className="w-full h-auto 
            text-center 
            md:w-1/2 md:text-left
            lg:flex-1">
            
            <h1 className="text-[24px] font-semibold leading-[150%] text-[#10383A]">
              {item.title}
            </h1>

            <div className="bg-[#DAA112] w-[210px] h-0.5 
              mx-auto mt-6 
              md:mx-0 md:mt-4 
              lg:mt-6"></div>

            <p className="text-[#758886] mt-6 md:mt-4 lg:mt-6">
              {item.description}
            </p>
          </div>

          {/* IMAGE Section */}
          <div className="w-full shrink-0 flex 
            justify-center h-auto
            md:w-1/2 md:justify-end md:h-[262px]
            lg:h-[400px]">
            
            {failedImages[item.id] || !item.image?.url ? (
              <div className="w-full h-full bg-[#E5E7EB] rounded-xl rounded-tl-[150px] flex items-center justify-center p-6 border-2 border-dashed border-[#B0B0B0]">
                <span className="text-[#758886] font-medium text-lg text-center">
                  {item.title}
                </span>
              </div>
            ) : (
              <img
                src={getImageUrl(item.image.url)}
                className="w-full h-full object-cover rounded-xl rounded-tl-[150px]"
                alt={item.title}
                loading="lazy"
                onError={() => handleImageError(item.id)}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ModernLife;