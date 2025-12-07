import { useState } from "react"
import exploreBackground from "@/assets/images/exploreBackground.png"
import { SectionHeader } from "../common/SectionHeader"
import { useThingsToDo } from "@/hooks/useThingsToDo"
import type { Image } from "@/types/thingsToDo"

// Helper function to get image URL from Image object
const getImageUrl = (image: Image | null | undefined): string => {
  if (!image) return '';
  
  const baseUrl = import.meta.env.VITE_BASE_URL || 'https://api.visitaddisababa.et';
  
  // Handle formats if available
  const formats = image.formats;
  if (formats && typeof formats === 'object') {
    // Try medium format first, then thumbnail, then small, then large
    if (formats.medium?.url) {
      const mediumUrl = formats.medium.url;
      if (mediumUrl.startsWith("http")) return mediumUrl;
      return `${baseUrl}${mediumUrl}`;
    }
    if (formats.thumbnail?.url) {
      const thumbnailUrl = formats.thumbnail.url;
      if (thumbnailUrl.startsWith("http")) return thumbnailUrl;
      return `${baseUrl}${thumbnailUrl}`;
    }
    if (formats.small?.url) {
      const smallUrl = formats.small.url;
      if (smallUrl.startsWith("http")) return smallUrl;
      return `${baseUrl}${smallUrl}`;
    }
    if (formats.large?.url) {
      const largeUrl = formats.large.url;
      if (largeUrl.startsWith("http")) return largeUrl;
      return `${baseUrl}${largeUrl}`;
    }
  }
  
  // Use the main URL
  const url = image.url || "";
  if (url.startsWith("http")) return url;
  return `${baseUrl}${url}`;
};

export function IconicPlaces() {
  const { data, isLoading } = useThingsToDo();
  const [hoveredIconic, setHoveredIconic] = useState<string | null>(null)

  const iconicPlacesData = data?.data?.iconic_places;
  const iconicPlacesItems = iconicPlacesData?.items || [];

  // Map iconic_places items to the format expected by the component
  const iconicPlaces = iconicPlacesItems.map((item) => ({
    id: String(item.id),
    title: item.title,
    description: item.description,
    image: getImageUrl(item.image),
  }));

  // Determine the overlay background color - same logic as CallToActionBanner
  const getOverlayColor = (overlayColor?: string, overlayOpacity?: number) => {
    // If overlayColor is provided, check if it's rgba/rgb (has transparency) or solid color
    if (overlayColor) {
      // If it's already rgba/rgb, use it directly
      if (overlayColor.includes('rgba') || overlayColor.includes('rgb(')) {
        return overlayColor
      }
      // If it's a solid color (hex or named), apply the overlayOpacity to it
      // If overlayOpacity is not provided, use 0.8 as default for solid colors to make them visible
      const opacity = overlayOpacity !== undefined ? overlayOpacity : 0.8
      
      // Convert hex to rgb if needed
      if (overlayColor.startsWith('#')) {
        const hex = overlayColor.replace('#', '')
        const r = parseInt(hex.substring(0, 2), 16)
        const g = parseInt(hex.substring(2, 4), 16)
        const b = parseInt(hex.substring(4, 6), 16)
        return `rgba(${r}, ${g}, ${b}, ${opacity})`
      }
      // For named colors or other formats, try to apply opacity
      return overlayColor
    }
    // Default overlay if none provided
    return 'rgba(0, 0, 0, 0.5)'
  }

  if (isLoading) {
    return (
      <section className="py-10 px-6 md:px-12 lg:py-[60px] lg:px-[120px]">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-64 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-96 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-[350px] bg-gray-200 rounded-2xl"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10 px-6 md:px-12 lg:py-[60px] lg:px-[120px]">
     
      <SectionHeader
      title="Iconic Places You Need To See"
      description="Visiting Addis Ababa is easier than you think! From knowing the best time to visit and visa requirements to discovering must-see attractions and cultural experiences, we've made planning simple."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {iconicPlaces.map((place) => {
          const isHovered = hoveredIconic === place.id
          return (
            <div
              key={place.id}
              className="flex flex-col cursor-pointer group"
              onMouseEnter={() => {
                if (window.innerWidth >= 1024) {
                  setHoveredIconic(place.id)
                }
              }}
              onMouseLeave={() => {
                if (window.innerWidth >= 1024) {
                  setHoveredIconic(null)
                }
              }}
            >
              {/* Image Container - shrinks when hovered */}
              <div
                className="relative rounded-2xl overflow-hidden transition-all duration-300 h-[146px] md:h-[146px] lg:h-auto"
                style={window.innerWidth >= 1024 ? (isHovered ? { aspectRatio: '4/3' } : { aspectRatio: '1/1' }) : {}}
              >
                <img
                  src={place.image}
                  alt={place.title}
                  className="w-full h-full md:min-h-[146px] lg:min-h-[350px] object-cover transition-all duration-300"
                />
              </div>
              
              {/* Hover content - appears below image */}
              <div
                className={`relative rounded-2xl mt-2 md:mt-2 lg:mt-4 transition-all duration-300 overflow-hidden min-h-[96px] max-h-[105px] opacity-100 p-4 lg:max-h-0 lg:opacity-0 lg:p-0 lg:min-h-0 ${
                  isHovered 
                    ? 'lg:max-h-[105px] lg:opacity-100 lg:p-4 lg:min-h-[96px]' 
                    : ''
                }`}
              >
                {/* Background image layer with opacity - same as CallToActionBanner */}
                {exploreBackground && (
                  <div
                    className={`absolute inset-0 rounded-2xl bg-cover bg-center bg-no-repeat z-0 ${
                      isHovered ? '' : 'lg:hidden'
                    }`}
                    style={{
                      backgroundImage: `url(${exploreBackground})`,
                      opacity: 1,
                    }}
                  />
                )}
                
                {/* Overlay layer - same logic as CallToActionBanner */}
                {exploreBackground && (
                  <div
                    className={`absolute inset-0 rounded-2xl z-10 ${
                      isHovered ? '' : 'lg:hidden'
                    }`}
                    style={{
                      backgroundColor: getOverlayColor('#F9F9F9', 0.8),
                    }}
                  />
                )}
                
                {/* Content */}
                <div className="relative z-20">
                  <h3 className="text-base lg:text-lg font-semibold text-text-dark-100">
                    {place.title}
                  </h3>
                  <p className="text-xs lg:text-sm text-text-dark-80">
                    {place.description}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

