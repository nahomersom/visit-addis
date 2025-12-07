import { useState } from "react"
import { useActivityTypes } from "@/hooks/useActivityTypes"
import exploreBackground from "@/assets/images/exploreBackground.png"
import { CallToActionBanner } from "../common/CallToActionBanner"
import { SectionHeader } from "../common/SectionHeader"
import { ActivityDetailModal } from "../modals/ActivityDetailModal"
import { ThingsToDoSkeleton } from "@/layouts/skeleton/ThingsToDoSkeleton"

export function ThingsToDo() {
  const { data: activitiesData, isLoading } = useActivityTypes()
  const [selectedActivity, setSelectedActivity] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const activities = activitiesData?.data || []

  const handleActivityClick = (activityId: number) => {
    setSelectedActivity(activityId)
    setIsModalOpen(true)
  }

  const currentActivity = selectedActivity 
    ? activities.find(activity => activity.id === selectedActivity) || null
    : null

  if (isLoading) {
    return <ThingsToDoSkeleton />
  }

  return (
    <section className="py-10 md:py-[60px] px-6 md:px-[48px] lg:px-[120px]">
      <div className="w-full">
        {/* Header Section */}
        <SectionHeader
          title="  Things To Do In Addis Ababa"
          description="Discover the city's must-see landmarks, from ancient treasures to modern cultural hubs."
        />

        <div className="flex flex-wrap gap-2 justify-center ">
          {activities.length > 0 ? (
            activities.map((activity) => {
            return (
              <div
                  key={activity.id}
                  onClick={() => handleActivityClick(activity.id)}
                className="gap-[5.09px] bg-[#f9f9f9] p-4 rounded-4xl cursor-pointer group hover:bg-accent-100 transition-colors"
              >
                <span className="text-sm text-text-dark-100">
                    {activity.title}
                </span>
              </div>
            )
            })
          ) : (
            <div className="text-center text-text-dark-80 py-8">
              No activities available
            </div>
          )}
        </div>

        {/* Activity Detail Modal */}
        <ActivityDetailModal
          open={isModalOpen}
          onOpenChange={setIsModalOpen}
          activity={currentActivity}
        />

        <div className="mt-10">
          <CallToActionBanner
            title={{
              coloredText: "Continue Exploring",
              regularText: "Amazing Experience",
            }}
            description="Discover the city's must-see landmarks, from ancient treasures to modern cultural hubs."
            buttonText="View More"
            backgroundImage={exploreBackground}
            overlayColor="#F9F9F9"
          />
        </div>
      </div>
    </section>
  )
}

