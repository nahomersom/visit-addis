import { useState } from "react"
import { iconicPlaces } from "@/data/whereToStay"
import exploreBackground from "@/assets/images/exploreBackground.png"

export function IconicPlaces() {
  const [hoveredIconic, setHoveredIconic] = useState<string | null>(null)

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

  return (
    <section className="py-[60px] px-[120px]">
      <div className="flex justify-between mb-10">
        <h2 className="text-2xl font-semibold text-black/80">Iconic Places You Need To See</h2>
        <p className="text-sm text-[#758886] max-w-[400px]">
          Visiting Addis Ababa is easier than you think! From knowing the best time to visit and visa requirements to discovering must-see attractions and cultural experiences, we've made planning simple.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {iconicPlaces.map((place) => {
          const isHovered = hoveredIconic === place.id
          return (
            <div
              key={place.id}
              className="flex flex-col cursor-pointer group"
              onMouseEnter={() => setHoveredIconic(place.id)}
              onMouseLeave={() => setHoveredIconic(null)}
            >
              {/* Image Container - shrinks when hovered */}
              <div
                className="relative rounded-2xl overflow-hidden transition-all duration-300"
                style={{ aspectRatio: isHovered ? '4/3' : '1/1' }}
              >
                <img
                  src={place.image}
                  alt={place.title}
                  className="w-full h-full object-cover transition-all duration-300"
                />
              </div>
              
              {/* Hover content - appears below image */}
              <div
                className={`relative rounded-2xl mt-4 transition-all duration-300 overflow-hidden ${
                  isHovered 
                    ? 'max-h-[105px] opacity-100 p-4' 
                    : 'max-h-0 opacity-0 p-0'
                }`}
              >
                {/* Background image layer with opacity - same as CallToActionBanner */}
                {isHovered && exploreBackground && (
                  <div
                    className="absolute inset-0 rounded-2xl bg-cover bg-center bg-no-repeat z-0"
                    style={{
                      backgroundImage: `url(${exploreBackground})`,
                      opacity: 1,
                    }}
                  />
                )}
                
                {/* Overlay layer - same logic as CallToActionBanner */}
                {isHovered && exploreBackground && (
                  <div
                    className="absolute inset-0 rounded-2xl z-10"
                    style={{
                      backgroundColor: getOverlayColor('#F9F9F9', 0.8),
                    }}
                  />
                )}
                
                {/* Content */}
                <div className="relative z-20">
                  <h3 className="text-lg font-semibold text-text-dark-100">
                    {place.title}
                  </h3>
                  <p className="text-sm text-text-dark-80">
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

