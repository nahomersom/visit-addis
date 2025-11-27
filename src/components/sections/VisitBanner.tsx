import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { SITE_CONFIG } from "@/config/constants"

export function VisitBanner() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-teal-500 to-yellow-400 rounded-lg flex items-center justify-center">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-white rounded-full"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              {SITE_CONFIG.name}
            </h2>
          </div>
          <p className="text-lg text-gray-600 mb-8">
            Discover the best places to visit and things to do in Addis Ababa. We
            have a wide range of experiences to make your trip memorable.
          </p>
          <Button
            size="lg"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold text-lg px-8 py-6 rounded-lg"
          >
            Explore
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

