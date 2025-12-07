import { useState, useEffect } from "react"
import { SectionHeader } from "../common/SectionHeader"
import { CallToActionBanner } from "../common/CallToActionBanner"
import visitBackground from "@/assets/images/visitBackground.png"
import planImage from "@/assets/images/plan.png"
import { useThingsToDo } from "@/hooks/useThingsToDo"
import type { Image } from "@/types/thingsToDo"
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

export function MostLovedByTourists() {
  const { data, isLoading } = useThingsToDo();
  const [hoveredMostLoved, setHoveredMostLoved] = useState<string | null>(null) // First card active by default
  const [clickedMostLoved, setClickedMostLoved] = useState<string | null>(null) // For mobile click

  const mostLovedData = data?.data?.most_loved;
  const headerTitle = mostLovedData?.header?.title || "Most Loved By Tourists";
  const headerDescription = mostLovedData?.header?.description || "Discover the city's favorite activities, showcasing a mix of historic treasures and lively cultural hubs.";
  const featuredCards = mostLovedData?.featured_cards || [];

  const planYourDayData = data?.data?.plan_your_day;
  // Split title into coloredText and regularText (split on first space)
  const planTitle = planYourDayData?.title || "Plan Your Day";
  const titleParts = planTitle.split(" ");
  const planColoredText = titleParts[0] || "Plan";
  const planRegularText = titleParts.slice(1).join(" ") || "Your Day";
  const planDescription = planYourDayData?.description || "Explore the vibrant city of Addis Ababa! Discover its rich culture, delicious cuisine, and stunning landscapes. Don't miss out on the chance to immerse yourself in this unique experience plan your visit today!";
  const planButtonText = planYourDayData?.buttons?.[0]?.label || "Get Itinerary";
  const planBackgroundImage = planYourDayData?.background_image ? getImageUrl(planYourDayData.background_image) : visitBackground;

  // Map featured_cards to the format expected by the component
  const mostLovedItems = featuredCards.map((card) => ({
    id: String(card.id),
    title: card.title,
    description: card.description,
    location: card.location || "",
    rating: card.rating,
    tags: card.tags.map((tag) => tag.label),
    image: getImageUrl(card.image),
  }));

  // Set first card as active by default when data loads
  useEffect(() => {
    if (mostLovedItems.length > 0 && hoveredMostLoved === null) {
      setHoveredMostLoved(mostLovedItems[0].id);
    }
  }, [mostLovedItems.length, hoveredMostLoved]);

  const handleCardClick = (itemId: string) => {
    if (clickedMostLoved === itemId) {
      setClickedMostLoved(null) // Toggle off if clicking the same card
    } else {
      setClickedMostLoved(itemId) // Expand clicked card
    }
  }

  if (isLoading) {
    return (
      <section className="py-0 md:py-[60px] px-6 md:px-12 lg:px-[120px]">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-64 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-96 mb-8"></div>
          <div className="flex gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-[600px] w-52 bg-gray-200 rounded-3xl"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-0 md:py-[60px]   px-6 md:px-12 lg:px-[120px]">
      
      <SectionHeader
      title={headerTitle}
      description={headerDescription}
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
                onMouseLeave={() => setHoveredMostLoved(mostLovedItems.length > 0 ? mostLovedItems[0].id : null)} // Return to first card being active on leave
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
              coloredText: planColoredText,
              regularText: planRegularText,
            }}
            description={planDescription}
            buttonText={planButtonText}
            backgroundImage={planBackgroundImage}
            overlayColor="#F7F8F7"
            showLogo
            logoImage={planImage}
          />
        </div>
    </section>
  )
}

