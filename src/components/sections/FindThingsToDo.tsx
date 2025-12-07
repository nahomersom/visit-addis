import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft } from "lucide-react"
import { useActivityTypeList, useActivityTypes } from "@/hooks/useActivityTypes"
import type { ActivityType, Activity, ActivityItem } from "@/types/activityType"
import { ThingsToDoSkeleton } from "@/layouts/skeleton/ThingsToDoSkeleton"
import { ActivityDetailModal } from "../modals/ActivityDetailModal"

interface FindThingsToDoProps {
  title?: string
  description?: string
  isForThingsTodo?: boolean
}

// Helper function to get icon URL from activity type
const getIconUrl = (icon: any | null | undefined): string => {
  if (!icon) return ""
  
  const baseUrl = import.meta.env.VITE_BASE_URL || "https://api.visitaddisababa.et"
  
  // Handle formats if available (when formats is an object, not a string)
  const formats = icon.formats as any
  if (formats && typeof formats === 'object') {
    // Try medium format first, then thumbnail, then small
    if (formats.medium?.url) {
      const mediumUrl = formats.medium.url
      // If it's already a full URL (e.g., Cloudinary), return as is
      if (mediumUrl.startsWith("http")) return mediumUrl
      // Otherwise, construct the URL
      return `${baseUrl}${mediumUrl}`
    }
    if (formats.thumbnail?.url) {
      const thumbnailUrl = formats.thumbnail.url
      if (thumbnailUrl.startsWith("http")) return thumbnailUrl
      return `${baseUrl}${thumbnailUrl}`
    }
    if (formats.small?.url) {
      const smallUrl = formats.small.url
      if (smallUrl.startsWith("http")) return smallUrl
      return `${baseUrl}${smallUrl}`
    }
  }
  
  // Use the main URL
  const url = icon.url || ""
  // If it's already a full URL (e.g., Cloudinary), return as is
  if (url.startsWith("http")) return url
  // Otherwise, construct the URL
  return `${baseUrl}${url}`
}

export function FindThingsToDo({ 
  title = "Find Things To Do",
  description,
  isForThingsTodo = false
}: FindThingsToDoProps = {}) {
  const { data: activityTypesData, isLoading: isLoadingTypes } = useActivityTypeList()
  const { data: activitiesData, isLoading: isLoadingActivities } = useActivityTypes()
  const [selectedActivityType, setSelectedActivityType] = useState<ActivityType | null>(null)
  const [selectedActivity, setSelectedActivity] = useState<ActivityItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const activityTypes = activityTypesData?.data || []
  const allActivities = activitiesData?.data || []

  const handleActivityTypeClick = (activityType: ActivityType) => {
    setSelectedActivityType(activityType)
  }

  const handleBackClick = () => {
    setSelectedActivityType(null)
  }

  const handleActivityClick = (activityId: number) => {
    // Find the full activity details from all activities
    const fullActivity = allActivities.find(activity => activity.id === activityId) || null
    setSelectedActivity(fullActivity)
    setIsModalOpen(true)
  }

  const categoryActivities: Activity[] = selectedActivityType?.activities || []

  const isLoading = isLoadingTypes || isLoadingActivities

  if (isLoading) {
    return <ThingsToDoSkeleton />
  }

  return (
    <section className="py-10 px-6 md:px-12 lg:py-[60px] lg:px-[120px]">
      <AnimatePresence mode="wait">
        {!selectedActivityType ? (
          <motion.div
            key="categories"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className={`flex flex-col ${isForThingsTodo ? 'mb-6 md:mb-10' : 'mb-10'} gap-2 ${isForThingsTodo ? 'items-start md:items-center' : 'items-center justify-center'}`}>
              <h2 className={`font-semibold text-text-dark-100 ${isForThingsTodo ? 'text-2xl md:text-2xl' : 'md:text-2xl'}`}>{title}</h2>
              {description && (
                <p className={`text-[#758886] ${isForThingsTodo ? 'text-sm md:text-sm' : 'text-xs md:text-sm'}`}>
                  {description}
                </p>
              )}
            </div>

            <div className="flex flex-wrap gap-4 ">
              {activityTypes.map((activityType) => (
                <div
                  key={activityType.id}
                  onClick={() => handleActivityTypeClick(activityType)}
                  className={`relative ${isForThingsTodo ? 'w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.67rem)]' : 'w-[calc(33.333%-0.67rem)]'} lg:w-[198.67px] ${isForThingsTodo ? 'h-[180px] md:h-[180px]' : 'h-[100px] md:h-[180px]'} rounded-2xl overflow-hidden cursor-pointer group`}
                >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${getIconUrl(activityType.icon)})`,
              }}
            />
            {/* Progressive blur overlay - same as SocialHighlights */}
            <div className="absolute inset-0 p-4 flex flex-col justify-end overflow-hidden">
              {/* Background darkening gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.32) 100%)',
                  clipPath: 'polygon(0 54.67%, 100% 54.67%, 100% 100%, 0 100%)',
                }}
              />
              {/* Progressive blur effect */}
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
              {/* Gradient overlay on hover - modifies progressive blur effect */}
              <div
                className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  top: '45%',
                  left: 0,
                  right: 0,
                  bottom: '-20px',
                  background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #1EAA9D 100%)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  maskImage: 'linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 5%, rgba(255, 255, 255, 0.3) 15%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.85) 70%, rgba(255, 255, 255, 0.95) 85%, white 95%, white 100%)',
                  WebkitMaskImage: 'linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 5%, rgba(255, 255, 255, 0.3) 15%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.85) 70%, rgba(255, 255, 255, 0.95) 85%, white 95%, white 100%)',
                }}
              />
              {/* Content */}
              <div className="relative z-10 flex  items-center gap-3">
              
                <span className="text-white font-semibold text-xs md:text-lg">
                  {activityType.name}
                </span>
              </div>
            </div>
          </div>
        ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="activities"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-accent-80 rounded-3xl p-6 space-y-6"
          >
            {/* Back Button and Title */}
            <div className="flex gap-4">
              
              <button
                onClick={handleBackClick}
                className="min-w-12 min-h-12 p-0 md:size-16 self-center md:self-start bg-accent-100 rounded-full md:rounded-2xl flex items-center justify-center cursor-pointer"
              >
                <ChevronLeft className="size-6 md:size-8 text-theme-dark" />
              </button>
              <div className="flex flex-col justify-between">
              <h2 className="text-2xl font-semibold text-text-dark-100 mb-2">
                {selectedActivityType.name} Activities
              </h2>
              
              <p className="text-sm  text-text-dark-80">
                {selectedActivityType.description || "Explore activities in this category"}
              </p>
              </div>

             
            </div>

            {/* Activity Tags */}
            <div className="flex flex-wrap gap-2">
              {categoryActivities.length > 0 ? (
                categoryActivities.map((activity) => (
                  <div
                    key={activity.id}
                    onClick={() => handleActivityClick(activity.id)}
                    className="px-4 min-w-[90px] min-h-[50px] bg-white text-text-dark-100 rounded-4xl cursor-pointer border border-accent-100 flex items-center justify-center hover:bg-accent-100 transition-colors"
                  >
                    <span className="text-sm">
                      {activity.title}
                    </span>
                  </div>
                ))
              ) : (
                <div className="text-center text-text-dark-80 py-4 w-full">
                  No activities available for this category
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Activity Detail Modal */}
      <ActivityDetailModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        activity={selectedActivity}
      />
    </section>
  )
}

