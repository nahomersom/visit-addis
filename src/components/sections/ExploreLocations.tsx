import { motion } from "framer-motion"
import { useState } from "react"

const filters = ["All", "Hotels", "Restaurants", "Shopping", "Attractions", "Events"]

export function ExploreLocations() {
  const [activeFilter, setActiveFilter] = useState("All")

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Explore Locations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find the best places to visit and things to do in Addis Ababa.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeFilter === filter
                  ? "bg-teal-500 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-96 lg:h-[600px] rounded-lg overflow-hidden bg-gradient-to-br from-blue-100 to-green-100 border border-gray-200"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">📍</span>
              </div>
              <p className="text-gray-600">Interactive Map</p>
              <p className="text-sm text-gray-500 mt-2">
                Addis Ababa Bole International Airport, Hilton Addis Ababa,
                <br />
                National Museum of Ethiopia, Sheraton Addis, Friendship Park
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

