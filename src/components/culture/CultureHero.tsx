import { getImageUrl } from "@/lib/axios";
import { useCulturePage } from "@/hooks/useCulturePage";
import CultureHeroBgImage from "../../assets/images/CultureHeroAttachement.png";
import { Skeleton } from "@/components/ui/skeleton"; 

const CultureHero = () => {
  const { data, isLoading, isError } = useCulturePage();

  const hero = data?.data?.hero;

  const bgImage = (!isError && !isLoading && hero?.background_image?.url)
    ? getImageUrl(hero.background_image.url) 
    : CultureHeroBgImage;

  return (
    <div 
      className="relative w-full 
      h-[400px] 
      md:h-auto
      lg:h-[500px]

      flex justify-center items-center flex-col
      bg-center bg-cover

      gap-10 md:gap-10

      md:py-[120px] md:px-12
      
      lg:py-[200px] lg:px-[120px]
      " 
      style={{ backgroundImage: `url(${bgImage})`}}
    >
        
        {/* overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* content */}
        <div className="relative flex flex-col items-center text-center w-full px-4 md:px-0
          md:max-w-[738px]
          lg:max-w-[840px]
          gap-3
        ">
            {/* Title Section: Show Skeleton or Text */}
            {isLoading ? (
               <Skeleton className="h-8 sm:h-10 md:h-14 lg:h-16 w-[200px] sm:w-[300px] md:w-[400px] bg-white/20 rounded-md" />
            ) : (
                <h1 className="font-bold text-white text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] leading-tight">
                  {isError ? "Content Unavailable" : hero?.title || "Culture & Lifestyle"}
                </h1>
            )}
            
            {/* Description Section: Show Skeleton Lines or Text */}
            {isLoading ? (
               <div className="w-full flex flex-col items-center gap-2 mt-2">
                  <Skeleton className="h-4 w-full sm:w-[500px] bg-white/20" />
                  <Skeleton className="h-4 w-[90%] sm:w-[450px] bg-white/20" />
                  <Skeleton className="h-4 w-[80%] sm:w-[400px] bg-white/20" />
               </div>
            ) : (
                <p className="text-white/80 text-[12px] sm:text-[16px] w-full mx-auto">
                  {isError 
                    ? "We encountered an issue loading the culture details. Please check your internet connection or try again later."
                    : hero?.subtitle || "Addis Ababa is where tradition meets transformation — a city alive with stories, rhythm, and creativity. Explore how the people, culture, and way of life blend heritage and modern energy into a truly unique experience."
                  }
                </p>
            )}
        </div>
    </div>
  )
}

export default CultureHero;