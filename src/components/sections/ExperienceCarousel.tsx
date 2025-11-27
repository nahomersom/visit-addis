import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { experienceSlides } from "@/data/experienceCarousel"

export function ExperienceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % experienceSlides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % experienceSlides.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + experienceSlides.length) % experienceSlides.length)
  }

  const currentSlide = experienceSlides[currentIndex]

  return (
    <section className="relative py-16 lg:py-24 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              {currentSlide.title}
            </h2>
            <p className="text-lg lg:text-xl text-gray-300 max-w-xl">
              {currentSlide.description}
            </p>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-gray-900 hover:bg-gray-100 border-white font-semibold text-lg px-8 py-6 rounded-lg"
            >
              Start Your Trip
            </Button>
          </motion.div>

          {/* Right Images */}
          <div className="relative">
            {/* Main Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                className="relative h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden mb-4"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-purple-800"></div>
              </motion.div>
            </AnimatePresence>

            {/* Thumbnails */}
            <div className="flex gap-4">
              {experienceSlides.map((slide, index) => (
                <motion.button
                  key={slide.id}
                  onClick={() => setCurrentIndex(index)}
                  className={`relative h-24 sm:h-32 lg:h-40 flex-1 rounded-lg overflow-hidden ${
                    index === currentIndex ? "ring-2 ring-white" : "opacity-60"
                  }`}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-yellow-400"></div>
                </motion.button>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Slider Indicator */}
        <div className="flex justify-end mt-8">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">
              {String(currentIndex + 1).padStart(2, "0")}
            </span>
            <div className="w-24 h-1 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-white"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, repeat: Infinity }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

