<<<<<<< HEAD
// import React from "react"
// import {
//   Mountain,
//   Waves,
//   Calendar,
//   Tent,
//   Book,
//   Dumbbell,
//   Bike,
//   Building2,
//   Heart,
//   Palette,
//   Utensils,
//   ShoppingBag,
//   Music,
//   Scroll,
//   Trees,
//   Gamepad2,
//   Compass,
//   Activity,
// } from "lucide-react"
// import { 
//   FaHiking,
//   FaFootballBall,
//   FaSpa,
// } from "react-icons/fa"

// const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
//   mountain: Mountain,
//   waves: Waves,
//   hiking: FaHiking,
//   calendar: Calendar,
//   tent: Tent,
//   book: Book,
//   football: FaFootballBall,
//   yoga: Activity,
//   dumbbell: Dumbbell,
//   bike: Bike,
//   museum: Building2,
//   heart: Heart,
//   palette: Palette,
//   utensils: Utensils,
//   "shopping-bag": ShoppingBag,
//   music: Music,
//   scroll: Scroll,
//   tree: Trees,
//   spa: FaSpa,
//   gamepad: Gamepad2,
//   compass: Compass,
// }
=======
import { useState } from "react"
>>>>>>> 3db19b48239c130d862892c2fad7661f24f2bfd6

import { activities } from "@/data/activities"
import exploreBackground from "@/assets/images/exploreBackground.png"
import { CallToActionBanner } from "../common/CallToActionBanner"
import { SectionHeader } from "../common/SectionHeader"
import { ActivityDetailModal } from "../modals/ActivityDetailModal"
import type { ActivityCategory } from "@/data/whereToStay"
import hikingImage from "@/assets/images/hiking.png"
import buildingsImage from "@/assets/images/buildings.jpg"
import keberoImage from "@/assets/images/kebero.jpg"
import stadiumImage from "@/assets/images/stadium.jpg"
import womensquareImage from "@/assets/images/womensquare.jpg"
import oldHouseImage from "@/assets/images/oldHouse.jpg"
import hikingIcon from "@/assets/icons/hiking.svg"
import museumsIcon from "@/assets/icons/museums.svg"
import foodIcon from "@/assets/icons/food.svg"
import entertainmentIcon from "@/assets/icons/entertainment.svg"
import shoppingIcon from "@/assets/icons/shopping.svg"
import musicIcon from "@/assets/icons/music.svg"

// Map activity names to ActivityCategory format
const getActivityCategory = (activityName: string): ActivityCategory | null => {
  const name = activityName.toLowerCase()
  
  // Map activities to categories
  if (name.includes("hiking") || name.includes("camping") || name.includes("exploring") || name.includes("rock climbing") || name.includes("cycling")) {
    return { id: "1", name: "Outdoor", icon: hikingIcon, image: hikingImage }
  }
  if (name.includes("books") || name.includes("literature") || name.includes("museum") || name.includes("photography") || name.includes("arts") || name.includes("crafts")) {
    return { id: "2", name: "Cultural", icon: museumsIcon, image: buildingsImage }
  }
  if (name.includes("food") || name.includes("drink") || name.includes("cooking")) {
    return { id: "3", name: "Food & Drinks", icon: foodIcon, image: keberoImage }
  }
  if (name.includes("music") || name.includes("musical") || name.includes("night") || name.includes("gaming") || name.includes("movies")) {
    return { id: "4", name: "Night Life", icon: musicIcon, image: stadiumImage }
  }
  if (name.includes("sports") || name.includes("fitness") || name.includes("yoga") || name.includes("swimming") || name.includes("competitions")) {
    return { id: "5", name: "Entertainment", icon: entertainmentIcon, image: womensquareImage }
  }
  if (name.includes("shopping") || name.includes("pets") || name.includes("animals") || name.includes("gardening") || name.includes("space") || name.includes("astronomy") || name.includes("science") || name.includes("nature")) {
    return { id: "6", name: "Shopping", icon: shoppingIcon, image: oldHouseImage }
  }
  
  // Default fallback
  return { id: "1", name: "Outdoor", icon: hikingIcon, image: hikingImage }
}

export function ThingsToDo() {
  const [selectedCategory, setSelectedCategory] = useState<ActivityCategory | null>(null)
  const [selectedActivityName, setSelectedActivityName] = useState<string>("")
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleActivityClick = (activityName: string) => {
    const category = getActivityCategory(activityName)
    if (category) {
      setSelectedCategory(category)
      setSelectedActivityName(activityName)
      setIsModalOpen(true)
    }
  }
  return (
    <section className="py-10 md:py-[60px] px-6 md:px-12 lg:px-[120px]">
      <div className="w-full">
        {/* Header Section */}
       
          
    
          <SectionHeader
        title="  Things To Do In Addis Ababa"
        description="Discover the city's must-see landmarks, from ancient treasures to modern cultural hubs."
      />

        <div className="flex flex-wrap gap-2 justify-center ">
          {activities.map((activity) => {
            return (
              <div
                key={activity.id}
                onClick={() => handleActivityClick(activity.name)}
                className="gap-[5.09px] bg-[#f9f9f9] p-4 rounded-4xl cursor-pointer group hover:bg-accent-100 transition-colors"
              >
                <span className="text-sm text-text-dark-100">
                  {activity.name}
                </span>
              </div>
            )
          })}

        </div>

        {/* Activity Detail Modal */}
        <ActivityDetailModal
          open={isModalOpen}
          onOpenChange={setIsModalOpen}
          category={selectedCategory}
          activityName={selectedActivityName}
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

