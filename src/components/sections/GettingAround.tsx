import { useGuide } from "@/hooks/useGuide"
import type { Image } from "@/types/thingsToDo"
import { Skeleton } from "../ui/skeleton"
import { GETTING_AROUND_CONFIG } from "@/config/constants"

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

export function GettingAround() {
  const { data, isLoading } = useGuide();

  const gettingAroundData = data?.data?.getting_around;
  const headerTitle = gettingAroundData?.header?.title || "Getting Around Addis Ababa";
  const transportMethods = gettingAroundData?.transport_methods || [];

  // Map transport_methods to the format expected by the component
  const items = transportMethods.map((method) => ({
    id: String(method.id),
    title: method.name,
    description: method.description || "",
    icon: getImageUrl(method.icon),
  }));

  if (isLoading) {
    return (
      <section className="py-0 px-6 md:py-10 lg:py-[60px] lg:px-[120px]">
        <div className="flex flex-col gap-6 items-start mb-6">
          <Skeleton className="h-8 w-64" />
          <Skeleton className="w-[210px] h-0.5" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <Skeleton key={i} className="h-64 rounded-2xl" />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="py-0 px-6 md:py-10 lg:py-[60px] lg:px-[120px] ">
   
      <div className="flex flex-col gap-6 items-start mb-6">
        <h2 className="text-2xl font-semibold text-text-dark-100 mb-2">
          {headerTitle}
        </h2>
        <div className="w-[210px] h-0.5 bg-theme-primary self-center md:self-start"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 justify-center md:justify-start">
        {items.map((item, index) => {
          const isLastItem = index === items.length - 1
          return (
          <div
            key={item.id}
            className={`rounded-2xl p-4 bg-white relative overflow-hidden ${isLastItem ? 'md:col-span-2 lg:col-span-1' : ''}`}
          >
            {/* Base color */}
            <div
              className="absolute inset-0"
              style={{
                backgroundColor: "#f9f9f9",
              }}
            ></div>
            {/* Background image with 8% opacity */}
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage: `url(${GETTING_AROUND_CONFIG.backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center md:items-start md:text-left gap-4 md:gap-2">
              {/* Icon */}
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-[60px] h-[60px] object-contain"
                />

              {/* Title */}
              <h3 className="font-semibold text-text-dark-100">
                {item.title}
              </h3>

              {/* Description */}
              {item.description && (
                <p className="text-xs text-text-dark-80 leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>
          </div>
          )
        })}
      </div>
    </section>
  )
}

