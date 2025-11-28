import { motion } from "framer-motion"
import { useState } from "react"
import { UtensilsCrossed, Building2, Mountain, ShoppingCart, Dice1, Bed } from "lucide-react"

const filters = [
  { name: "Eatery", icon: UtensilsCrossed },
  { name: "Museums", icon: Building2 },
  { name: "Hiking", icon: Mountain },
  { name: "Shopping", icon: ShoppingCart },
  { name: "Entertainment", icon: Dice1 },
]

const locations = [
  { name: "Toro Grill and Lounge", type: "eatery", x: 15, y: 75 },
  { name: "HOTTO", type: "eatery", x: 20, y: 60 },
  { name: "The Hacienda Restaurant", type: "eatery", x: 25, y: 55 },
  { name: "Berlin Bar & Restaurant", type: "eatery", x: 30, y: 50 },
  { name: "URAEL", type: "eatery", x: 35, y: 45 },
  { name: "Ye Tiru Kitfo", type: "eatery", x: 40, y: 70 },
  { name: "Zemera Cultural Bar and Restaurant", type: "eatery", x: 50, y: 30 },
  { name: "مطعم بكري BAKRI RESTAURANT", type: "eatery", x: 55, y: 50 },
  { name: "Senayit Restaurant - مطعم سانایت", type: "eatery", x: 75, y: 25 },
  { name: "Beemnet Restaurant No. 4", type: "eatery", x: 80, y: 75 },
  { name: "Blue Sky hotel", type: "hotel", x: 85, y: 20 },
]

export function ExploreLocations() {
  const [activeFilter, setActiveFilter] = useState("Eatery")

  const filteredLocations = activeFilter === "Eatery" 
    ? locations.filter(loc => loc.type === "eatery")
    : locations

  return (
    <section className="py-[60px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          
            <h2 className="text-2xl font-semibold text-text-dark-100">
              Explore Locations
            </h2>
          
        

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mt-6">
            {filters.map((filter) => {
              const Icon = filter.icon
              const isActive = activeFilter === filter.name
              return (
                <button
                  key={filter.name}
                  onClick={() => setActiveFilter(filter.name)}
                  className={`pl-1.5 pr-6 py-2 rounded-[100px] font-medium transition-colors flex items-center gap-2 ${
                    isActive
                      ? "bg-theme-secondary text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  <div className="size-11 rounded-full bg-white flex items-center justify-center">
                  <Icon className={`w-4 h-4 ${isActive ? "text-theme-secondary" : "text-black"}`} />

                  </div>
                  {filter.name}
                </button>
              )
            })}
          </div>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-96 lg:h-[600px] rounded-lg overflow-hidden bg-gray-200 border border-gray-300"
        >
          {/* Map Grid Background */}
          <div className="absolute inset-0 bg-gray-200">
            {/* Grid lines */}
            <svg className="absolute inset-0 w-full h-full opacity-30">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#94a3b8" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>

            {/* Green shapes (parks/water) */}
            <div className="absolute top-10 left-10 w-32 h-24 bg-green-200 rounded-lg opacity-60"></div>
            <div className="absolute bottom-20 right-20 w-40 h-32 bg-green-200 rounded-lg opacity-60"></div>
            <div className="absolute top-1/2 left-1/3 w-28 h-20 bg-green-200 rounded-lg opacity-60"></div>

            {/* Road names */}
            <div className="absolute top-5 left-5 text-xs font-medium text-gray-600">Congo St</div>
            <div className="absolute top-5 right-5 text-xs font-medium text-gray-600">Ghana St</div>
            <div className="absolute bottom-5 left-5 text-xs font-medium text-gray-600">Airport Road</div>
            <div className="absolute top-1/2 right-10 text-xs font-medium text-gray-600">Bekelech St</div>
            <div className="absolute bottom-5 right-5 text-xs font-medium text-gray-600">Djibuti St</div>

            {/* Location Markers */}
            {filteredLocations.map((location, index) => (
              <div
                key={index}
                className="absolute group"
                style={{
                  left: `${location.x}%`,
                  top: `${location.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className={`relative ${
                  location.type === "eatery" 
                    ? "bg-red-500" 
                    : location.type === "hotel"
                    ? "bg-pink-500"
                    : "bg-gray-500"
                } w-8 h-8 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform`}>
                  {location.type === "eatery" && (
                    <UtensilsCrossed className="w-4 h-4 text-white" />
                  )}
                  {location.type === "hotel" && (
                    <Bed className="w-4 h-4 text-white" />
                  )}
                </div>
                {/* Location Label */}
                <div className="absolute top-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="bg-white px-2 py-1 rounded text-xs font-medium text-gray-800 shadow-lg whitespace-normal max-w-[150px] text-center">
                    {location.name}
                  </div>
                </div>
              </div>
            ))}

            {/* Additional unnamed markers */}
            {activeFilter === "Eatery" && (
              <>
                <div className="absolute top-[20%] left-[45%] bg-red-500 w-8 h-8 rounded-full flex items-center justify-center shadow-lg">
                  <UtensilsCrossed className="w-4 h-4 text-white" />
                </div>
                <div className="absolute top-[35%] left-[60%] bg-red-500 w-8 h-8 rounded-full flex items-center justify-center shadow-lg">
                  <UtensilsCrossed className="w-4 h-4 text-white" />
                </div>
                <div className="absolute top-[50%] left-[25%] bg-red-500 w-8 h-8 rounded-full flex items-center justify-center shadow-lg">
                  <UtensilsCrossed className="w-4 h-4 text-white" />
                </div>
                <div className="absolute top-[65%] left-[70%] bg-red-500 w-8 h-8 rounded-full flex items-center justify-center shadow-lg">
                  <UtensilsCrossed className="w-4 h-4 text-white" />
                </div>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

