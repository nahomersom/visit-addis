import { Download } from "lucide-react"
import { useState, useEffect } from "react"
import airplaneImage from "@/assets/images/airplane.png"
import { useGuide } from "@/hooks/useGuide"
import type { Image } from "@/types/thingsToDo"
import { Skeleton } from "../ui/skeleton"

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

export function SuggestedItineraries() {
  const { data, isLoading } = useGuide();
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const itinerariesData = data?.data?.itineraries;
  const headerTitle = itinerariesData?.header?.title || "Suggested Itineraries";
  const headerSubtitle = itinerariesData?.header?.subtitle || "Lorem ipsum dolor sit amet consectetur. Feugiat nisi amet mattis neque ultrices nibh tempor ipsum aliquam. In cum ultricies placerat eleifend. Diam cum blandit sed ipsum placerat commodo eget. Tristique faucibus leo malesuada ac facilisis arcu morbi suspendisse.";
  const durationButtons = itinerariesData?.duration_buttons || [];

  // Map duration_buttons to the format expected by the component
  const buttons = durationButtons.map((button) => ({
    label: button.label,
    id: String(button.id),
    icon: getImageUrl(button.icon),
  }));

  // Set first button as active by default when data loads
  useEffect(() => {
    if (buttons.length > 0 && activeButton === null) {
      setActiveButton(buttons[0].id);
    }
  }, [buttons.length, activeButton]);

  if (isLoading) {
    return (
      <section className="py-0 px-6 lg:py-[60px] md:px-[48px] lg:px-[120px]">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="flex flex-col items-center text-center md:items-start md:text-left gap-2 flex-1 md:max-w-[1032px]">
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-16 w-full" />
            <div className="flex flex-wrap gap-3 mt-2">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-14 w-32 rounded-[105px]" />
              ))}
            </div>
          </div>
          <Skeleton className="size-[200px] md:size-[138px] lg:size-[200px]" />
        </div>
      </section>
    );
  }

  return (
    <section className="py-0 px-6 lg:py-[60px] md:px-[48px] lg:px-[120px]">

      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 lg:gap-12">
        {/* Left Section - Text and Buttons */}
        <div className="flex flex-col items-center text-center md:items-start  md:text-left gap-2 flex-1 md:max-w-[1032px]">
          <h2 className="text-2xl font-semibold text-text-dark-100">
            {headerTitle}
          </h2>
          
          <p className="text-sm md:text-xs lg:text-sm text-text-dark-80">
            {headerSubtitle}
          </p>
          

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mt-2 justify-center md:justify-start">
            {buttons.map((button) => {
              const isActive = activeButton === button.id
              return (
                <button
                  key={button.id}
                  onClick={() => setActiveButton(button.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-[105px] min-h-[56px] text-sm transition-all ${
                    isActive
                      ? "bg-theme-primary text-white"
                      : "bg-accent-100 text-text-dark-100"
                  }`}
                >
                  <span>{button.label}</span>
                  {button.icon ? (
                    <img src={button.icon} alt="icon" className="w-4 h-4" />
                  ) : (
                    <Download className="w-4 h-4" />
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Right Section - Graphic */}
        <img
            src={airplaneImage}
            alt="Visit Addis App Preview"
            className="size-[200px] md:size-[138px] lg:size-[200px] object-contain"
          />
      </div>
    </section>
  )
}

