import { useState } from "react"
import { mostLovedItems } from "@/data/whereToStay"
import { SectionHeader } from "../common/SectionHeader"
import { CallToActionBanner } from "../common/CallToActionBanner"
import visitBackground from "@/assets/images/visitBackground.png"
import planImage from "@/assets/images/plan.png"
interface TagProps {
  label: string
}

function Tag({ label }: TagProps) {
  return (
    <div className="px-4 py-2 rounded-[100px] bg-[rgba(0,0,0,0.1)] backdrop-blur-[34px] border border-white/10">
      <span className="text-sm text-white font-medium whitespace-nowrap">
        {label}
      </span>
    </div>
  )
}

export function MostLovedByTourists() {
  const [hoveredMostLoved, setHoveredMostLoved] = useState<string | null>("1") // First card active by default
  const [clickedMostLoved, setClickedMostLoved] = useState<string | null>(null) // For mobile click

  const handleCardClick = (itemId: string) => {
    if (clickedMostLoved === itemId) {
      setClickedMostLoved(null) // Toggle off if clicking the same card
    } else {
      setClickedMostLoved(itemId) // Expand clicked card
    }
  }

  return (
    <section className="py-0 md:py-[60px]   px-6 md:px-12 lg:px-[120px]">
      
      <SectionHeader
      title="Most Loved By Tourists"
      description=" Discover the city's favorite activities, showcasing a mix of historic treasures and lively cultural hubs."
      alignLeft={true}
      />

      <div className="md:overflow-x-auto lg:overflow-x-visible pb-4 scrollbar-hide">
        <div className="flex flex-col md:flex-row gap-6 md:gap-6 lg:justify-start">
          {mostLovedItems.map((item) => {
            const isActive = clickedMostLoved === item.id || (hoveredMostLoved === item.id && !clickedMostLoved)
            return (
              <div
                key={item.id}
                className={`flex flex-col shrink-0 rounded-3xl overflow-hidden transition-all duration-300 cursor-pointer w-full ${
                  isActive 
                    ? 'md:w-[450px] lg:w-[600px]' 
                    : 'md:w-[180px] lg:w-52'
                }`}
                onClick={() => handleCardClick(item.id)}
                onMouseEnter={() => setHoveredMostLoved(item.id)}
                onMouseLeave={() => setHoveredMostLoved("1")} // Return to first card being active on leave
              >
                {/* Image Container */}
                <div className={`relative w-full rounded-3xl overflow-hidden transition-all duration-300 ${
                  isActive 
                    ? 'h-[411px] md:h-[600px]' 
                    : 'h-[70px] md:h-[600px]'
                }`}>
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${item.image})`,
                      filter: isActive ? 'none' : 'grayscale(100%)',
                      transition: 'filter 0.3s ease',
                    }}
                  />
                  
                  {/* Overlay for both active and inactive states */}
                  <div className="absolute inset-0 p-4 flex flex-col justify-end overflow-hidden">
                    {/* Bottom section - Title, Description, Tags and Info */}
                    <div className="relative z-10 flex flex-col gap-4">
                      {/* Title and Description - only for active cards, positioned above tags */}
                      {isActive && (
                        <div className="flex flex-col gap-2 mb-2">
                          <h3 className="text-xl font-bold text-white">
                            {item.title}
                          </h3>
                          <p className="text-sm text-white font-medium">
                            {item.description}
                          </p>

                        </div>
                      )}

                      {/* Tags Overlay */}
                      {isActive && (
                        <div className="flex flex-col gap-2">
                          <span className="text-xs font-medium text-white">📍 Locations</span>

                        <div className="flex gap-2 scrollbar-hide overflow-x-auto">
                          {item.tags.map((tag) => (
                            <Tag key={tag} label={tag} />
                          ))}
                        </div>
                        </div>
                      )}
                      
                      {/* Location and Rating (only visible when active) */}
                    
                    </div>

                    {/* Background gradient - different for active vs inactive */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: isActive
                          ? 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.32) 100%)'
                          : 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)',
                      }}
                    />

                    {/* Progressive blur effect - different for active vs inactive */}
                    {isActive ? (
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
                    ) : (
                      <div
                        className="absolute"
                        style={{
                          top: '47.65%',
                          left: '50.08%',
                          right: '50%',
                          bottom: 0,
                          backdropFilter: 'blur(24px)',
                          WebkitBackdropFilter: 'blur(24px)',
                          maskImage: 'linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 5%, rgba(255, 255, 255, 0.3) 15%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.85) 70%, rgba(255, 255, 255, 0.95) 85%, white 95%, white 100%)',
                          WebkitMaskImage: 'linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 5%, rgba(255, 255, 255, 0.3) 15%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.85) 70%, rgba(255, 255, 255, 0.95) 85%, white 95%, white 100%)',
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
              <div className="mt-10 lg:mt-8">

        <CallToActionBanner
            title={{
              coloredText: "Plan",
              regularText: "Your Day",
            }}
            description="Explore the vibrant city of Addis Ababa! Discover its rich culture, delicious cuisine, and stunning landscapes. Don't miss out on the chance to immerse yourself in this unique experience plan your visit today!"
            buttonText="Get Itinerary"
            backgroundImage={visitBackground}
            overlayColor="#F7F8F7"
            showLogo
            logoImage={planImage}
          />
        </div>
    </section>
  )
}

