import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft } from "lucide-react"
import { activityCategories } from "@/data/whereToStay"
import type { ActivityCategory } from "@/data/whereToStay"
import { activities } from "@/data/activities"

interface FindThingsToDoProps {
  title?: string
  description?: string
  isForThingsTodo?: boolean
}

// Map category names to activity filters
const getActivitiesForCategory = (categoryName: string) => {
  const categoryLower = categoryName.toLowerCase()
  
  if (categoryLower.includes("outdoor")) {
    return activities.filter(a => {
      const name = a.name.toLowerCase()
      return name.includes("hiking") || name.includes("camping") || name.includes("cycling") || 
             name.includes("rock climbing") || name.includes("exploring") || name.includes("travel") ||
             name.includes("photography") || name.includes("gardening") || name.includes("science") ||
             name.includes("nature")
    })
  }
  if (categoryLower.includes("cultural")) {
    return activities.filter(a => {
      const name = a.name.toLowerCase()
      return name.includes("books") || name.includes("literature") || name.includes("museum") || 
             name.includes("photography") || name.includes("arts") || name.includes("crafts")
    })
  }
  if (categoryLower.includes("food")) {
    return activities.filter(a => {
      const name = a.name.toLowerCase()
      return name.includes("food") || name.includes("drink") || name.includes("cooking")
    })
  }
  if (categoryLower.includes("night")) {
    return activities.filter(a => {
      const name = a.name.toLowerCase()
      return name.includes("music") || name.includes("musical") || name.includes("gaming") || 
             name.includes("movies")
    })
  }
  if (categoryLower.includes("entertainment")) {
    return activities.filter(a => {
      const name = a.name.toLowerCase()
      return name.includes("sports") || name.includes("fitness") || name.includes("yoga") || 
             name.includes("swimming") || name.includes("competitions")
    })
  }
  if (categoryLower.includes("shopping")) {
    return activities.filter(a => {
      const name = a.name.toLowerCase()
      return name.includes("shopping") || name.includes("pets") || name.includes("animals")
    })
  }
  
  return activities
}

export function FindThingsToDo({ 
  title = "Find Things To Do",
  description,
  isForThingsTodo = false
}: FindThingsToDoProps = {}) {
  const [selectedCategory, setSelectedCategory] = useState<ActivityCategory | null>(null)

  const handleCategoryClick = (category: ActivityCategory) => {
    setSelectedCategory(category)
  }

  const handleBackClick = () => {
    setSelectedCategory(null)
  }

  const categoryActivities = selectedCategory ? getActivitiesForCategory(selectedCategory.name) : []

  return (
    <section className="py-10 px-6 md:px-12 lg:py-[60px] lg:px-[120px]">
      <AnimatePresence mode="wait">
        {!selectedCategory ? (
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
              {activityCategories.map((category) => (
                <div
                  key={category.id}
                  onClick={() => handleCategoryClick(category)}
                  className={`relative ${isForThingsTodo ? 'w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.67rem)]' : 'w-[calc(33.333%-0.67rem)]'} lg:w-[198.67px] ${isForThingsTodo ? 'h-[180px] md:h-[180px]' : 'h-[100px] md:h-[180px]'} rounded-2xl overflow-hidden cursor-pointer group`}
                >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${category.image})`,
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
                  {category.name}
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
                {selectedCategory.name} Activities
              </h2>
              
              <p className="text-sm  text-text-dark-80">
                Lorem ipsum dolor sit amet consectetur. Leo adipiscing nibh risus aenean et vitae et.
              </p>
              </div>

             
            </div>

            {/* Activity Tags */}
            <div className="flex flex-wrap gap-2">
              {categoryActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="px-4 min-w-[90px] min-h-[50px] bg-white text-text-dark-100 rounded-4xl cursor-pointer border border-accent-100 flex items-center justify-center"
                >
                  <span className="text-sm">
                    {activity.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

