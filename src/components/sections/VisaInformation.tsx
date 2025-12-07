import { usePlanYourTrip } from "@/hooks/usePlanYourTrip"
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

export function VisaInformation() {
  const { data, isLoading } = usePlanYourTrip();

  const visaSection = data?.data?.visa_section;
  const headerTitle = visaSection?.header?.title || "Visa information";
  const headerDescription = visaSection?.header?.description || "";
  const actionLink = visaSection?.header?.action_link;
  const visaTypes = visaSection?.visa_types || [];

  // Map visa_types to the format expected by the component
  const mappedVisaTypes = visaTypes.map((visa) => ({
    id: String(visa.id),
    name: visa.type.charAt(0).toUpperCase() + visa.type.slice(1), // Capitalize first letter
    image: getImageUrl(visa.icon),
    description: visa.description,
  }));

  // Split description to insert action link if available
  const renderDescription = () => {
    if (!headerDescription) return null;
    
    if (actionLink && actionLink.is_active) {
      // Find where to insert the link (look for the link label in the description)
      const linkLabel = actionLink.label;
      const linkIndex = headerDescription.indexOf(linkLabel);
      
      if (linkIndex !== -1) {
        const beforeLink = headerDescription.substring(0, linkIndex);
        const afterLink = headerDescription.substring(linkIndex + linkLabel.length);
        
        return (
          <>
            {beforeLink}
            <a
              href={actionLink.url}
              target={actionLink.target || "_blank"}
              rel="noopener noreferrer"
              className="text-theme-secondary hover:underline"
            >
              {linkLabel}
            </a>
            {afterLink}
          </>
        );
      }
    }
    
    return headerDescription;
  };

  if (isLoading) {
    return (
      <section className="py-10 px-6 lg:py-[60px] lg:px-[120px]">
        <div className="flex flex-col items-center text-center mb-6 gap-4">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-20 w-full max-w-[1272px]" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-6 w-32 mx-auto" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-64 rounded-2xl" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10 px-6 lg:py-[60px] lg:px-[120px] ">
        <div className="flex flex-col items-center text-center mb-6 gap-4">
          <h2 className="text-2xl font-semibold text-text-dark-100">
            {headerTitle}
          </h2>
          <p className="text-sm text-text-dark-80 max-w-[1272px] font-medium font-sans">
            {renderDescription()}
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm lg:text-xl font-semibold text-text-dark-100 text-center">
            Visa Types
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {mappedVisaTypes.map((visa) => {
              return (
                <div
                  key={visa.id}
                  className="bg-white rounded-2xl p-6 flex flex-col items-center text-center gap-2 border border-accent-80 shadow-[0px_4px_16px_0px_#0000000A,0px_0px_8px_0px_#00000005]"
                >
                    <img 
                      src={visa.image} 
                      alt={visa.name}
                      className="size-[60px] md:size-[76px] object-contain"
                    />
                  <h4 className="text-lg font-semibold text-text-dark-100">
                    {visa.name}
                  </h4>
                  <p className="text-xs md:text-sm text-text-dark-80">
                    {visa.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
    </section>
  )
}

