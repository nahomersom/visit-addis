import { Modal } from "@/components/ui/modal"
import { X } from "lucide-react"
import type { ActivityItem, ActivityImage } from "@/types/activityType"

interface ActivityDetailModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  activity: ActivityItem | null
}

// Static locations data
const locations = [
  "Entoto Mountains",
  "Bale Mountain",
  "Simien Mountains",
  "Ras Dashen",
  "Mount Kenya",
  "Mount Kilimanjaro",
  "Atlas Mountains",
  "Drakensberg Mountains",
  "Zagros Mountains",
  "National Museum",
  "Ethnological Museum",
  "Holy Trinity Cathedral",
  "Unity Park",
  "Red Terror Martyrs Memorial",
  "Bole Road",
  "Piazza",
  "Bishoftu",
  "Mercato",
  "Kazanchis",
]

// Helper function to get image URL from ActivityImage
const getImageUrl = (image: ActivityImage | null): string => {
  if (!image) return ""
  return image.url || image.formats?.large?.url || image.formats?.medium?.url || image.formats?.small?.url || ""
}

export function ActivityDetailModal({
  open,
  onOpenChange,
  activity,
}: ActivityDetailModalProps) {
  if (!activity) return null

  // Extract emoji from activity title (e.g., "⛺️ Hiking" -> "⛺️")
  const emoji = activity.title ? activity.title.match(/[\p{Emoji_Presentation}\p{Emoji}\u{1F300}-\u{1F9FF}]/u)?.[0] || null : null
  
  // Get banner image URL
  const bannerImageUrl = getImageUrl(activity.bannerImage)
  
  // Get bottom images (first 2 from images array)
  const bottomImages = activity.images && activity.images.length > 0 
    ? activity.images.slice(0, 2) 
    : []
  
  const image1Url = bottomImages[0] ? getImageUrl(bottomImages[0]) : ""
  const image2Url = bottomImages[1] ? getImageUrl(bottomImages[1]) : ""

  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      className="min-w-full md:min-w-[700px] lg:min-w-[800px] p-0 overflow-hidden rounded-4xl  mb-4 md:mx-4 md:max-h-[90vh] flex flex-col"
      showCloseButton={false}
    >
      <div className="flex flex-col flex-1 overflow-hidden gap-2">
        {/* Top padding and close button */}
        <div className="pt-6 px-6 hidden md:flex justify-end shrink-0">
          <button
            onClick={() => onOpenChange(false)}
            className="size-9 bg-[#F2F2F2] rounded-full flex items-center justify-center  backdrop-blur transition-opacity hover:opacity-100 focus:outline-none cursor-pointer"
            
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Main Image */}
        <div className="w-full h-[200px] md:h-[300px]  relative overflow-hidden pt-8 md:pt-0 px-4 shrink-0">
          {bannerImageUrl ? (
            <img
              src={bannerImageUrl}
              alt={activity.title}
              className="w-full h-full object-cover rounded-xl"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 rounded-xl flex items-center justify-center">
              <span className="text-gray-400">No image available</span>
            </div>
          )}
          {/* Mobile close button */}
          <button
            onClick={() => onOpenChange(false)}
            className="absolute border-[0.5px] border-white/40 top-12 right-8 md:hidden size-12 bg-black/16 rounded-[8px] flex items-center justify-center backdrop-blur transition-opacity hover:opacity-100 focus:outline-none cursor-pointer z-10"
          >
            <X className="size-6 text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="px-4 pt-6 pb-8 md:px-8 lg:pt-8 md:pb-8 space-y-4 md:space-y-6 overflow-y-auto flex-1">
          {/* Heading with Icon */}
          <div className="flex-col gap-1">
          <div className="flex items-center gap-1">
            {emoji && (
              <span className="text-3xl md:text-4xl">{emoji}</span>
            )}
            <h2 className="text-2xl md:text-[40px] font-semibold text-white md:text-text-dark-100">
              {activity.title}
            </h2>
           
          </div>
              {/* Description Paragraphs */}
         
            <p className="text-xs md:text-base text-white/80 md:text-text-dark-80 leading-relaxed">
              {activity.description}
            </p>
           
      
          </div>
         

         

          {/* Locations Section */}
          <div className="space-y-4">
       
              
              <h3 className="text-sm md:text-xl font-medium md:font-semibold text-white md:text-text-dark-100">
              📍 Locations
              </h3>
            
            <div className="flex flex-wrap gap-2">
              {locations.map((location, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/16 md:bg-[#F6FAFC] text-white md:text-[#456AA2] rounded-[48px] text-xs md:text-sm  cursor-pointer "
                >
                  {location}
                </span>
              ))}
            </div>
          </div>

          <p className="text-xs md:text-base text-white/80 md:text-text-dark-80 leading-relaxed">
              {activity.short_description}
            </p>

          {/* Bottom Images */}
          {bottomImages.length > 0 && (
            <div className={`grid gap-4 pt-4 ${bottomImages.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
              {image1Url && (
                <div className="w-full h-[120px] md:h-[250px] rounded-xl overflow-hidden">
                  <img
                    src={image1Url}
                    alt={`${activity.title} image 1`}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              {image2Url && (
                <div className="w-full h-[120px] md:h-[250px] rounded-xl overflow-hidden">
                  <img
                    src={image2Url}
                    alt={`${activity.title} image 2`}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </Modal>
  )
}

