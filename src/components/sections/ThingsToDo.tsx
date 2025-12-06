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

import { activities } from "@/data/activities"
import exploreBackground from "@/assets/images/exploreBackground.png"
import { CallToActionBanner } from "../common/CallToActionBanner"
import { SectionHeader } from "../common/SectionHeader"

export function ThingsToDo() {
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
               
                className="gap-[5.09px] bg-[#f9f9f9] p-4 rounded-4xl cursor-pointer group"
              >
                <span className="text-sm text-text-dark-100">
                  {activity.name}
                </span>
              </div>
            )
          })}

        </div>

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

