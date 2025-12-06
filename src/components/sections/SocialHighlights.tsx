import { Star } from "lucide-react"
import instagramIcon from "@/assets/icons/instagram.png"
import { SectionHeader } from "../common/SectionHeader"
import { useSocialHighlights } from "@/hooks/useSocialHighlights"
import type { StrapiMedia } from "@/types/home"
import { SocialHighlightsSkeleton } from "@/layouts/skeleton/SocialHighlightsSkeleton"

// Helper function to get full image URL
const getImageUrl = (image: StrapiMedia | null | undefined): string => {
  if (!image) return ""
  
  const baseUrl = import.meta.env.VITE_BASE_URL || "https://api.visitaddisababa.et"
  
  // Handle formats if available (when formats is an object, not a string)
  const formats = image.formats as any
  if (formats && typeof formats === 'object') {
    // Try medium format first, then thumbnail, then small
    if (formats.medium?.url) {
      const mediumUrl = formats.medium.url
      // If it's already a full URL (e.g., Cloudinary), return as is
      if (mediumUrl.startsWith("http")) return mediumUrl
      // Otherwise, construct the URL
      return `${baseUrl}${mediumUrl}`
    }
    if (formats.thumbnail?.url) {
      const thumbnailUrl = formats.thumbnail.url
      if (thumbnailUrl.startsWith("http")) return thumbnailUrl
      return `${baseUrl}${thumbnailUrl}`
    }
    if (formats.small?.url) {
      const smallUrl = formats.small.url
      if (smallUrl.startsWith("http")) return smallUrl
      return `${baseUrl}${smallUrl}`
    }
  }
  
  // Use the main URL
  const url = image.url || ""
  // If it's already a full URL (e.g., Cloudinary), return as is
  if (url.startsWith("http")) return url
  // Otherwise, construct the URL
  return `${baseUrl}${url}`
}

// Width pattern: 75%, 25%, 25%, 75%, 75%, 25%
const cardWidths = ["w-[60%]", "w-[40%]", "w-[40%]", "w-[60%]", "w-[60%]", "w-[40%]"]

export function SocialHighlights() {
  const { data, isLoading, error } = useSocialHighlights()

  if (isLoading) {
    return <SocialHighlightsSkeleton />
  }

  if (error || !data?.data || data.data.length === 0) {
    return (
      <section className="py-10 md:py-[60px] px-6 md:px-[48px] lg:px-[120px] bg-accent-80">
        <div className="text-center py-20">
          <p className="text-gray-600">Failed to load social highlights</p>
        </div>
      </section>
    )
  }

  const socialHighlights = data.data

  return (
     <section className="py-10 md:py-[60px] px-6 md:px-[48px] lg:px-[120px] bg-accent-80">
                 <SectionHeader
                title="Social Highlights"
                description="Discover what visitors are sharing about Addis Ababa"
              />

        {/* Mobile: Horizontal scroll with all cards */}
        <div className="flex gap-4 overflow-x-auto scrollbar-hide -mx-6 px-6 md:hidden">
          {socialHighlights.map((highlight) => (
            <div
              key={highlight.id}
              className="shrink-0 w-[342px] h-[345px]"
            >
              <div className="overflow-hidden cursor-pointer relative w-full h-full rounded-[40px]">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${getImageUrl(highlight.image)})`,
                  }}
                />
                {/* Progressive blur overlay */}
                <div className="absolute inset-0 p-4 flex flex-col justify-end overflow-hidden">
                  {/* Background darkening gradient */}
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.32) 100%)',
                      clipPath: 'polygon(0 54.67%, 100% 54.67%, 100% 100%, 0 100%)',
                    }}
                  />
                  {/* Progressive blur effect - extends beyond bottom for smooth fade */}
                  <div 
                    className="absolute"
                    style={{
                      top: '54.67%',
                      left: 0,
                      right: 0,
                      bottom: '-20px',
                      backdropFilter: 'blur(16px)',
                      WebkitBackdropFilter: 'blur(16px)',
                      maskImage: 'linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 5%, rgba(255, 255, 255, 0.3) 15%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.85) 70%, rgba(255, 255, 255, 0.95) 85%, white 95%, white 100%)',
                      WebkitMaskImage: 'linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 5%, rgba(255, 255, 255, 0.3) 15%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.85) 70%, rgba(255, 255, 255, 0.95) 85%, white 95%, white 100%)',
                    }}
                  />
                  {/* Content */}
                  <div className="relative z-10 flex justify-between">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="relative size-[49px]">
                        <div className="size-[49px] rounded-[8px] border border-white/60 overflow-hidden bg-gray-200">
                          <img 
                            src={getImageUrl(highlight.author_avatar) || `https://ui-avatars.com/api/?name=${encodeURIComponent(highlight.author_name)}&background=random&size=49`}
                            alt={highlight.author_name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(highlight.author_name)}&background=random&size=49`
                            }}
                          />
                        </div>
                        {/* Instagram icon circle */}
                        <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center z-20">
                          <img 
                            src={instagramIcon} 
                            alt="Instagram"
                            className=" object-contain"
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-white text-lg">
                          {highlight.author_name}
                        </p>
                        <p className="text-sm text-white/80">
                          {highlight.location}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-[20.36px] h-[20.36px] fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold text-white">
                        {highlight.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Grid layout with rows */}
        <div className="hidden md:flex md:flex-col md:gap-6">
          {/* Row 1: 75% + 25% */}
          <div className="flex gap-6">
            {socialHighlights.slice(0, 2).map((highlight, index) => (
              <div
                key={highlight.id}
                className={cardWidths[index]}
              >
                <div className="overflow-hidden  cursor-pointer relative min-h-[352px] rounded-[40px] ">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${getImageUrl(highlight.image)})`,
                    }}
                  />
                  {/* Progressive blur overlay */}
                  <div className="absolute inset-0 p-4 flex flex-col justify-end overflow-hidden">
                    {/* Background darkening gradient */}
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.32) 100%)',
                        clipPath: 'polygon(0 54.67%, 100% 54.67%, 100% 100%, 0 100%)',
                      }}
                    />
                    {/* Progressive blur effect - extends beyond bottom for smooth fade */}
                    <div 
                      className="absolute"
                      style={{
                        top: '54.67%',
                        left: 0,
                        right: 0,
                        bottom: '-20px',
                        backdropFilter: 'blur(16px)',
                        WebkitBackdropFilter: 'blur(16px)',
                        maskImage: 'linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 5%, rgba(255, 255, 255, 0.3) 15%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.85) 70%, rgba(255, 255, 255, 0.95) 85%, white 95%, white 100%)',
                        WebkitMaskImage: 'linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 5%, rgba(255, 255, 255, 0.3) 15%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.85) 70%, rgba(255, 255, 255, 0.95) 85%, white 95%, white 100%)',
                      }}
                    />
                    {/* Content */}
                    <div className="relative z-10 flex justify-between">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="relative size-[49px]">
                          <div className="size-[49px] rounded-[8px] border border-white/60 overflow-hidden bg-gray-200">
                            <img 
                              src={getImageUrl(highlight.author_avatar) || `https://ui-avatars.com/api/?name=${encodeURIComponent(highlight.author_name)}&background=random&size=49`}
                              alt={highlight.author_name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(highlight.author_name)}&background=random&size=49`
                              }}
                            />
                          </div>
                          {/* Instagram icon circle */}
                          <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center z-20">
                            <img 
                              src={instagramIcon} 
                              alt="Instagram"
                              className=" object-contain"
                            />
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-white text-lg">
                            {highlight.author_name}
                          </p>
                          <p className="text-sm text-white/80">
                            {highlight.location}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-[20.36px] h-[20.36px] fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-semibold text-white">
                          {highlight.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: 25% + 75% */}
          <div className="flex gap-6">
            {socialHighlights.slice(2, 4).map((highlight, index) => (
              <div
                key={highlight.id}
 
                className={cardWidths[index + 2]}
              >
                <div className="overflow-hidden  cursor-pointer relative min-h-[352px] rounded-[40px] ">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${getImageUrl(highlight.image)})`,
                    }}
                  />
                  {/* Progressive blur overlay */}
                  <div className="absolute inset-0 p-4 flex flex-col justify-end overflow-hidden">
                    {/* Background darkening gradient */}
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.32) 100%)',
                        clipPath: 'polygon(0 54.67%, 100% 54.67%, 100% 100%, 0 100%)',
                      }}
                    />
                    {/* Progressive blur effect - extends beyond bottom for smooth fade */}
                    <div 
                      className="absolute"
                      style={{
                        top: '54.67%',
                        left: 0,
                        right: 0,
                        bottom: '-20px',
                        backdropFilter: 'blur(16px)',
                        WebkitBackdropFilter: 'blur(16px)',
                        maskImage: 'linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 5%, rgba(255, 255, 255, 0.3) 15%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.85) 70%, rgba(255, 255, 255, 0.95) 85%, white 95%, white 100%)',
                        WebkitMaskImage: 'linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 5%, rgba(255, 255, 255, 0.3) 15%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.85) 70%, rgba(255, 255, 255, 0.95) 85%, white 95%, white 100%)',
                      }}
                    />
                    {/* Content */}
                    <div className="relative z-10 flex justify-between">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="relative size-[49px]">
                          <div className="size-[49px] rounded-[8px] border border-white/60 overflow-hidden bg-gray-200">
                            <img 
                              src={getImageUrl(highlight.author_avatar) || `https://ui-avatars.com/api/?name=${encodeURIComponent(highlight.author_name)}&background=random&size=49`}
                              alt={highlight.author_name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(highlight.author_name)}&background=random&size=49`
                              }}
                            />
                          </div>
                          {/* Instagram icon circle */}
                          <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center z-20">
                            <img 
                              src={instagramIcon} 
                              alt="Instagram"
                              className=" object-contain"
                            />
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-white text-lg">
                            {highlight.author_name}
                          </p>
                          <p className="text-sm text-white/80">
                            {highlight.location}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-[20.36px] h-[20.36px] fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-semibold text-white">
                          {highlight.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 3: 75% + 25% */}
          <div className="flex gap-6">
            {socialHighlights.slice(4, 6).map((highlight, index) => (
              <div
                key={highlight.id}

                className={cardWidths[index + 4]}
              >
                <div className="overflow-hidden  cursor-pointer relative min-h-[352px] rounded-[40px] ">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${getImageUrl(highlight.image)})`,
                    }}
                  />
                  {/* Progressive blur overlay */}
                  <div className="absolute inset-0 p-4 flex flex-col justify-end overflow-hidden">
                    {/* Background darkening gradient */}
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.32) 100%)',
                        clipPath: 'polygon(0 54.67%, 100% 54.67%, 100% 100%, 0 100%)',
                      }}
                    />
                    {/* Progressive blur effect - extends beyond bottom for smooth fade */}
                    <div 
                      className="absolute"
                      style={{
                        top: '54.67%',
                        left: 0,
                        right: 0,
                        bottom: '-20px',
                        backdropFilter: 'blur(16px)',
                        WebkitBackdropFilter: 'blur(16px)',
                        maskImage: 'linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 5%, rgba(255, 255, 255, 0.3) 15%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.85) 70%, rgba(255, 255, 255, 0.95) 85%, white 95%, white 100%)',
                        WebkitMaskImage: 'linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 5%, rgba(255, 255, 255, 0.3) 15%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.85) 70%, rgba(255, 255, 255, 0.95) 85%, white 95%, white 100%)',
                      }}
                    />
                    {/* Content */}
                    <div className="relative z-10 flex justify-between">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="relative size-[49px]">
                          <div className="size-[49px] rounded-[8px] border border-white/60 overflow-hidden bg-gray-200">
                            <img 
                              src={getImageUrl(highlight.author_avatar) || `https://ui-avatars.com/api/?name=${encodeURIComponent(highlight.author_name)}&background=random&size=49`}
                              alt={highlight.author_name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(highlight.author_name)}&background=random&size=49`
                              }}
                            />
                          </div>
                          {/* Instagram icon circle */}
                          <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center z-20">
                            <img 
                              src={instagramIcon} 
                              alt="Instagram"
                              className=" object-contain"
                            />
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-white text-lg">
                            {highlight.author_name}
                          </p>
                          <p className="text-sm text-white/80">
                            {highlight.location}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-[20.36px] h-[20.36px] fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-semibold text-white">
                          {highlight.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>
  )
}

