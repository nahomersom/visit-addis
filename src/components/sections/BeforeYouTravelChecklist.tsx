import { useTravelChecklist } from "@/hooks/useTravelChecklist"
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

export function BeforeYouTravelChecklist() {
  const { data, isLoading } = useTravelChecklist();

  const checklistData = data?.data;
  const title = checklistData?.title || "Before You Travel Checklist";
  const subtitle = checklistData?.subtitle || "Essential Tips to Consider Before You Embark on Your Journey.";
  const items = checklistData?.items || [];
  const tip = checklistData?.tip;

  // Split title: take the last two words before the last word and highlight them
  // Example: "Before You Travel Checklist" -> "Before" + "You Travel" (highlighted) + "Checklist"
  const titleWords = title.split(" ");
  let titleBefore = "";
  let titleHighlight = "";
  let titleAfter = "";

  if (titleWords.length >= 3) {
    // Take last two words before the last word for highlight
    const highlightStart = titleWords.length - 3;
    titleBefore = titleWords.slice(0, highlightStart).join(" ");
    titleHighlight = titleWords.slice(highlightStart, highlightStart + 2).join(" ");
    titleAfter = titleWords.slice(highlightStart + 2).join(" ");
  } else if (titleWords.length === 2) {
    // If only 2 words, highlight the first one
    titleBefore = "";
    titleHighlight = titleWords[0];
    titleAfter = titleWords[1];
  } else {
    // If only 1 word, no highlight
    titleBefore = title;
    titleHighlight = "";
    titleAfter = "";
  }

  // Remove markdown formatting from tip text (e.g., **Tip**:)
  const tipText = tip?.text?.replace(/\*\*Tip\*\*:\s*/i, "").replace(/\*\*/g, "") || "";

  if (isLoading) {
    return (
      <section className="py-10 px-6 lg:py-[60px] lg:px-[120px] bg-accent-80">
        <div className="flex flex-col items-center text-center mb-6 md:mb-10 gap-2">
          <Skeleton className="h-8 w-64" />
          <Skeleton className="h-4 w-96" />
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-12 w-48 rounded-4xl" />
          ))}
        </div>
        <Skeleton className="h-16 w-full max-w-2xl mx-auto rounded-3xl" />
      </section>
    );
  }

  return (
    <section className="py-10 px-6 lg:py-[60px] lg:px-[120px] bg-accent-80">
      <div className="flex flex-col items-center text-center mb-6 md:mb-10 gap-2">
        <h2 className="text-2xl font-semibold text-text-dark-100">
          {titleBefore && `${titleBefore} `}
          {titleHighlight && (
            <span className="text-theme-secondary">{titleHighlight}</span>
          )}
          {titleAfter && ` ${titleAfter}`}
        </h2>
        <p className="text-sm text-text-dark-80 max-w-2xl">
          {subtitle}
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-2 bg-theme-secondary rounded-4xl p-3 md:p-4 w-fit"
          >
            <img 
              src={getImageUrl(item.icon)} 
              alt="check" 
              className="size-5" 
            />
            <span className="text-[10px] md:text-sm text-white font-medium">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {tip && (
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 bg-white rounded-3xl md:rounded-[72px] px-6 py-8 md:p-4 w-fit md:mx-auto min-h-auto">
          <img 
            src={getImageUrl(tip.icon)} 
            alt="idea" 
            className="size-4" 
          />
          <p className="text-xs font-bold text-text-dark-100">Tip:</p>
          <p className="text-xs text-text-dark-80 text-center">
            {tipText}
          </p>
        </div>
      )}
    </section>
  );
}

