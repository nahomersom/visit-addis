import { SITE_CONFIG } from "@/config/constants"
import heroVideo from "@/assets/videos/hero-video.mp4"
import { useHome } from "@/hooks/useHome"

export function Hero() {
  const { data: homeData } = useHome();
  
  // Parse title: first word and rest
  const getTitleParts = (title: string) => {
    const words = title.trim().split(/\s+/);
    const firstWord = words[0] || "";
    const restOfTitle = words.slice(1).join(" ") || "";
    return { firstWord, restOfTitle };
  };

  // Use dynamic data if available, otherwise fallback to SITE_CONFIG
  const hero = homeData?.data?.hero;
  const titleParts = hero?.title ? getTitleParts(hero.title) : { firstWord: "Visit", restOfTitle: SITE_CONFIG.tagline };
  const titleHighlight = hero?.title_highlight || "Addis Ababa";
  const subtitle = hero?.subtitle || SITE_CONFIG.heroDescription;

  return (
    <section className="relative h-screen flex items-end md:items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
        aria-label="Background video"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-[95px] lg:px-8 pb-6 md:pb-0 w-full">
        <div>
          <h1 className="text-2xl md:text-[64px] font-bold mb-2">
            <span className="text-white">{titleParts.firstWord} </span>
            <span className="text-theme-primary">{titleHighlight}</span>
          </h1>
          {titleParts.restOfTitle && (
            <p className="text-2xl md:text-[64px] text-white font-bold mb-3">
              {titleParts.restOfTitle}
            </p>
          )}
          <p className="max-w-[870px] mx-auto text-white/80 mb-6 md:mb-8 text-xs md:text-[16px]">
            {subtitle}
          </p>
          
         
         
        </div>
      </div>
    </section>
  )
}

