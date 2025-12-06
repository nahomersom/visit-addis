import { Modal } from "@/components/ui/modal"
import type { ActivityCategory } from "@/data/whereToStay"
import { X } from "lucide-react"
import attractionImageOne from "@/assets/images/attractionImageOne.jpg"
import attractionImageTwo from "@/assets/images/attractionImageTwo.jpg"

interface ActivityDetailModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  category: ActivityCategory | null
  activityName?: string // Original activity name with emoji
}

// Mock locations data - in a real app, this would come from the category data
const getLocationsForCategory = (categoryName: string): string[] => {
  const locationMap: Record<string, string[]> = {
    "Outdoor": [
      "Entoto Mountains",
      "Bale Mountain",
      "Simien Mountains",
      "Ras Dashen",
      "Mount Kenya",
      "Mount Kilimanjaro",
      "Atlas Mountains",
      "Drakensberg Mountains",
      "Zagros Mountains",
    ],
    "Cultural": [
      "National Museum",
      "Ethnological Museum",
      "Holy Trinity Cathedral",
      "Unity Park",
      "Red Terror Martyrs Memorial",
    ],
    "Food & Drinks": [
      "Bole Road",
      "Piazza",
      "Bishoftu",
      "Mercato",
      "Kazanchis",
    ],
    "Night Life": [
      "Bole Road",
      "Kazanchis",
      "Cazanchis",
      "Piazza",
      "Bishoftu",
    ],
    "Entertainment": [
      "Unity Park",
      "Addis Ababa Stadium",
      "National Theatre",
      "Cinema",
    ],
    "Shopping": [
      "Mercato",
      "Bole Road",
      "Piazza",
      "Shiro Meda",
    ],
  }
  return locationMap[categoryName] || []
}

export function ActivityDetailModal({
  open,
  onOpenChange,
  category,
  activityName,
}: ActivityDetailModalProps) {
  if (!category) return null

  const locations = getLocationsForCategory(category.name)
  const description = "Lorem ipsum dolor sit amet consectetur. Leo adipiscing nibh risus aenean et vitae et. Tristique urna leo nisl quisque. Sem massa elementum lacus ut volutpat interdum lectus purus quis. Eget magna at donec urna sit viverra porta tellus pellentesque."
  
  // Extract emoji from activity name (e.g., "⛺️ Hiking" -> "⛺️")
  const emoji = activityName ? activityName.match(/[\p{Emoji_Presentation}\p{Emoji}\u{1F300}-\u{1F9FF}]/u)?.[0] || null : null

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
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover rounded-xl"
          />
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
            {emoji ? (
              <span className="text-3xl md:text-4xl">{emoji}</span>
            ) : (
              <img
                src={category.icon}
                alt={category.name}
                className="w-6 h-6 md:w-8 md:h-8"
              />
            )}
            <h2 className="text-2xl md:text-[40px] font-semibold text-white md:text-text-dark-100">
              {category.name}
            </h2>
           
          </div>
              {/* Description Paragraphs */}
         
            <p className="text-xs md:text-base text-white/80 md:text-text-dark-80 leading-relaxed">
              {description}
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
              {description}
            </p>

          {/* Bottom Images */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="w-full h-[120px] md:h-[250px] rounded-xl overflow-hidden">
              <img
                src={attractionImageOne}
                alt="Activity image 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-[120px] md:h-[250px] rounded-xl overflow-hidden">
              <img
                src={attractionImageTwo}
                alt="Activity image 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}

