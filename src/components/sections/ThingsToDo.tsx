import React from "react"
import { motion } from "framer-motion"
import {
  Mountain,
  Waves,
  Calendar,
  Tent,
  Book,
  Dumbbell,
  Bike,
  Building2,
  Heart,
  Palette,
  Utensils,
  ShoppingBag,
  Music,
  Scroll,
  Trees,
  Gamepad2,
  Compass,
  Activity,
} from "lucide-react"
import { 
  FaHiking,
  FaFootballBall,
  FaSpa,
} from "react-icons/fa"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  mountain: Mountain,
  waves: Waves,
  hiking: FaHiking,
  calendar: Calendar,
  tent: Tent,
  book: Book,
  football: FaFootballBall,
  yoga: Activity,
  dumbbell: Dumbbell,
  bike: Bike,
  museum: Building2,
  heart: Heart,
  palette: Palette,
  utensils: Utensils,
  "shopping-bag": ShoppingBag,
  music: Music,
  scroll: Scroll,
  tree: Trees,
  spa: FaSpa,
  gamepad: Gamepad2,
  compass: Compass,
}

import { activities } from "@/data/activities"

export function ThingsToDo() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Things To Do In Addis Ababa
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the best places to visit and things to do in Addis Ababa.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 lg:gap-6">
          {activities.map((activity, index) => {
            const Icon = iconMap[activity.icon] || Compass
            return (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex flex-col items-center p-4 lg:p-6 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group"
              >
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-teal-400 to-yellow-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                </div>
                <span className="text-xs sm:text-sm text-center text-gray-700 font-medium">
                  {activity.name}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

