import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { SITE_CONFIG } from "@/config/constants"

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/images/hero-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            {SITE_CONFIG.name}
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/90 mb-8">
            {SITE_CONFIG.tagline}
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

