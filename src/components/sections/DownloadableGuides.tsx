import { Download } from "lucide-react"
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

export function DownloadableGuides() {
  const { data, isLoading } = useGuide();

  const downloadableGuidesData = data?.data?.downloadable_guides;
  const backgroundImage = downloadableGuidesData?.background_image;
  const headerTitle = downloadableGuidesData?.header?.title || "Downloadable Guides";
  const headerSubtitle = downloadableGuidesData?.header?.subtitle || "Plan your visit with our easy-to-read travel guides. Whether it's your first time in Addis, learning local etiquette, or exploring where to eat, these PDFs help you experience the city confidently and respectfully.";
  const guides = downloadableGuidesData?.guides || [];

  const bgImageUrl = backgroundImage ? getImageUrl(backgroundImage) : "";

  const handleDownload = (fileUrl: string) => {
    if (fileUrl) {
      window.open(fileUrl, '_blank');
    }
  };

  if (isLoading) {
    return (
      <section className="py-10 px-6 lg:py-[60px] lg:px-[120px]">
        <Skeleton className="h-[500px] rounded-[24px]" />
      </section>
    );
  }

  return (
    <section className="py-10 px-6 lg:py-[60px] lg:px-[120px] ">

      <div
        className="relative p-4 rounded-[24px] overflow-hidden flex flex-col min-h-[500px]"
        style={{
          backgroundImage: bgImageUrl ? `url(${bgImageUrl})` : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center mt-auto">
        {/* Title and Description */}
        <div className="text-center mb-4 max-w-[690px]">
          <h2 className="text-2xl lg:text-3xl  font-semibold text-white mb-2">
            {headerTitle}
          </h2>
          <p className="text-xs md:text-sm text-white/80">
            {headerSubtitle}
          </p>
        </div>

        {/* Guide Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-7xl">
          {guides.map((guide) => {
            const fileUrl = getImageUrl(guide.file);
            return (
              <div
                key={guide.id}
                className="rounded-[24px] p-4 backdrop-blur-[32px] bg-white/20 flex flex-col items-center justify-center gap-2"
              >
                <h3 className="text-lg font-semibold text-white ">
                  {guide.title}
                </h3>
                <p className="text-xs text-white/80 text-center">
                  {guide.description}
                </p>
                <button 
                  onClick={() => handleDownload(fileUrl)}
                  className="flex items-center gap-2 bg-theme-primary text-white text-sm px-6 py-3 rounded-[105px] font-medium hover:opacity-90 transition-opacity min-h-14 cursor-pointer!"
                >
                  <span>{guide.button_text || "Download"}</span>
                  <Download className="w-5 h-5" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
      </div>
    </section>
  )
}
