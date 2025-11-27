import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Eye } from "lucide-react"

export function DownloadableGuides() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Downloadable Guides
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get comprehensive guides to help you plan your perfect trip to
              Addis Ababa. Download our free travel guides and maps.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-6 rounded-lg"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 hover:bg-gray-50 font-semibold px-6 py-6 rounded-lg"
              >
                <Eye className="w-5 h-5 mr-2" />
                View All
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-64 sm:h-80 lg:h-96"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-teal-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-4xl">📍</span>
                </div>
                <p className="text-gray-600 font-medium">3D Map Illustration</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

