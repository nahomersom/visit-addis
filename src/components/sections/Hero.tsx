import { Search } from "lucide-react"
import { SITE_CONFIG, EXPLORE_CATEGORIES } from "@/config/constants"
import heroVideo from "@/assets/videos/hero-video.mp4"

interface ExploreCategoryProps {
  icon: string
  label: string
  alt: string
}

function ExploreCategory({ icon, label, alt }: ExploreCategoryProps) {
  return (
    <div className="rounded-4xl px-4 md:px-6 py-3 md:py-4 flex gap-3 justify-center items-center bg-[rgba(0,0,0,0.1)] backdrop-blur-[34px]  border border-white/10">
      <img 
        src={icon} 
        alt={alt}
        className="size-5 object-contain"
      />
      <span className="md:text-sm text-xs text-white">
        {label}
      </span>
    </div>
  )
}

export function Hero() {
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
        <div
        
        >
          <h1 className="text-2xl md:text-[64px] font-bold mb-2">
            <span className="text-white">Visit </span>
            <span className="text-theme-primary">Addis Ababa</span>
          </h1>
          <p className="text-2xl md:text-[64px] text-white font-bold mb-3">
            {SITE_CONFIG.tagline}
          </p>
          <p className="max-w-[870px] mx-auto text-white/80 mb-6 md:mb-8 text-xs md:text-[16px]">
            {SITE_CONFIG.heroDescription}
          </p>
          
          {/* Search Bar */}
          <div
      
            className="max-w-[800px] mx-auto"
          >
            <div className="flex items-center gap-2 rounded-full bg-[rgba(0,0,0,0.1)] backdrop-blur-[34px] p-2 md:p-4 border border-white/10">
              <div className="flex-1 flex items-center gap-3 px-4">
                <Search className="w-5 h-5 text-gray-300 shrink-0" />
                <input
                  type="text"
                  placeholder="What do you want to do?"
                  className="flex-1 bg-transparent text-white placeholder:text-white outline-none focus:outline-none focus-visible:outline-none focus:ring-0 text-sm md:text-base placeholder:text-sm"
                />
              </div>
              <button className="bg-theme-primary text-white px-6 py-4 rounded-[105px] text-sm md:text-base  whitespace-nowrap">
                Explore
              </button>
            </div>
          </div>

          {/* Explore */}
          <div className="grid grid-cols-2 md:flex gap-1 md:gap-2 mt-6 md:mt-10 md:justify-center md:flex-wrap ">
            {EXPLORE_CATEGORIES.map((category) => (
              <ExploreCategory
                key={category.label}
                icon={category.icon}
                label={category.label}
                alt={category.alt}
              />
            ))}
          </div>
         
        </div>
      </div>
    </section>
  )
}

