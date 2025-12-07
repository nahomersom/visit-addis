import React from "react"
import { useFlight } from "@/hooks/useFlight"
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

// Helper function to parse markdown links and replace with action_link if available
const parseDescription = (description: string | null, actionLink: any | null): React.ReactNode => {
  if (!description) return null;
  
  if (actionLink && actionLink.is_active) {
    // Find markdown link pattern [text](url) and replace with action_link
    const markdownLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts: (string | React.ReactElement)[] = [];
    let lastIndex = 0;
    let match;
    let key = 0;
    
    while ((match = markdownLinkRegex.exec(description)) !== null) {
      // Add text before the link
      if (match.index > lastIndex) {
        parts.push(description.substring(lastIndex, match.index));
      }
      
      // Add the link using action_link
      parts.push(
        <a
          key={key++}
          href={actionLink.url}
          target={actionLink.target || "_blank"}
          rel="noopener noreferrer"
          className="text-theme-secondary underline"
        >
          {actionLink.label || match[1]}
        </a>
      );
      
      lastIndex = match.index + match[0].length;
    }
    
    // Add remaining text
    if (lastIndex < description.length) {
      parts.push(description.substring(lastIndex));
    }
    
    // If no markdown links found but we have action_link, just return the description as-is
    if (parts.length === 0) {
      return description;
    }
    
    return <>{parts}</>;
  }
  
  // If no action_link, just parse markdown links normally
  const markdownLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: (string | React.ReactElement)[] = [];
  let lastIndex = 0;
  let match;
  let key = 0;
  
  while ((match = markdownLinkRegex.exec(description)) !== null) {
    if (match.index > lastIndex) {
      parts.push(description.substring(lastIndex, match.index));
    }
    
    parts.push(
      <a
        key={key++}
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
        className="text-theme-secondary underline"
      >
        {match[1]}
      </a>
    );
    
    lastIndex = match.index + match[0].length;
  }
  
  if (lastIndex < description.length) {
    parts.push(description.substring(lastIndex));
  }
  
  // If no markdown links found, return description as plain text
  if (parts.length === 0) {
    return description;
  }
  
  return <>{parts}</>;
};

export function FlightsAndGettingHere() {
  const { data, isLoading } = useFlight();

  const flightData = data?.data;
  const headerTitle = flightData?.header?.title || "Flights And Getting Here";
  // Description is the longer text with links (lines 27-37) - swapped: using subtitle from API
  const headerDescription = flightData?.header?.subtitle;
  // Subtitle is the shorter text (line 41) - swapped: using description from API  
  const headerSubtitle = flightData?.header?.description || "Fly directly into Addis with these international and regional carriers offering frequent routes to and from Ethiopia.";
  const actionLink = flightData?.header?.action_link;
  const logos = flightData?.logos || [];

  // Map logos to the format expected by the component
  const airlines = logos.map((logo) => ({
    image: getImageUrl(logo),
  }));

  // Duplicate airlines for seamless loop
  const duplicatedAirlines = [...airlines, ...airlines];

  if (isLoading) {
    return (
      <section className="py-10 md:py-[60px] bg-white relative">
        <div className="flex flex-col items-center text-center mb-6 gap-4 px-6 lg:px-[120px]">
          <Skeleton className="h-8 w-64" />
          <Skeleton className="h-20 w-full max-w-[1272px]" />
        </div>
        <div className="relative overflow-hidden -mx-4 sm:-mx-6 lg:-mx-[120px]">
          <Skeleton className="h-4 w-96 mx-auto mb-4" />
          <div className="flex gap-8 sm:gap-12 lg:gap-16 px-4 sm:px-6 lg:px-[120px]">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Skeleton key={i} className="w-[90px] h-[60px]" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10 md:py-[60px] bg-white relative">
       <div className="flex flex-col items-center text-center mb-6 gap-4 px-6 lg:px-[120px]">
          <h2 className="text-2xl font-semibold text-text-dark-100">
           {headerTitle}
          </h2>
          {headerDescription && (
            <span className="text-sm text-text-dark-80 max-w-[1272px] font-medium">
              {parseDescription(headerDescription, actionLink)}
            </span>
          )}
        </div>

        <div className="relative overflow-hidden -mx-4 sm:-mx-6 lg:-mx-[120px]">
          <p className="text-center text-text-dark-100 text-sm font-medium mb-4 px-6 md:px-0">{headerSubtitle}</p>
          <div 
            className="flex gap-8 sm:gap-12 lg:gap-16 px-4 sm:px-6 lg:px-[120px]"
            style={{
              animation: "marquee 5s linear infinite"
            }}
          >
            {duplicatedAirlines.map((airline, index) => (
              <div
                key={`forward-${index}`}
                className="shrink-0"
              >
                <img 
                  src={airline.image} 
                  alt="airline" 
                  className="w-[90px] h-[60px] object-contain"
                />
              </div>
            ))}
          </div>
          {/* Left gradient overlay */}
          <div
            className="pointer-events-none absolute top-0 h-full w-[100px] md:w-[150px] z-30 transition-opacity duration-300 left-4 sm:left-6 lg:left-[120px]"
            style={{
              background: `
                linear-gradient(
                  90deg,
                  #FFFFFF 0%,
                  rgba(255, 255, 255, 0.6) 40%,
                  rgba(255, 255, 255, 0) 100%
                )
              `,
            }}
          />
          {/* Right gradient overlay */}
          <div
            className="pointer-events-none absolute top-0 h-full w-[100px] md:w-[150px] z-30 transition-opacity duration-300 right-4 sm:right-6 lg:right-[120px]"
            style={{
              background: `
                linear-gradient(
                  270deg,
                  #FFFFFF 0%,
                  rgba(255, 255, 255, 0.6) 40%,
                  rgba(255, 255, 255, 0) 100%
                )
              `,
            }}
          />
        </div>

        <style>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          @keyframes marquee-reverse {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0);
            }
          }
        `}</style>
    </section>
  )
}

