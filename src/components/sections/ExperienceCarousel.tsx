
import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"
import experienceBackground from "@/assets/images/experienceBackground.jpg"
import { experienceSlides } from "@/data/experienceCarousel"
import { ROUTES } from "@/config/routes"
import { Button } from "@/components/ui/button"

export function ExperienceCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0) // 1 for next, -1 for prev
  const [isAnimating, setIsAnimating] = useState(false)

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(1)
    
    // Wait for animation to complete, then update slide
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % experienceSlides.length)
      setTimeout(() => {
        setIsAnimating(false)
        setDirection(0)
      }, 50)
    }, 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(-1)
    
    // Update slide first, then animate in
    setCurrentSlide((prev) => (prev - 1 + experienceSlides.length) % experienceSlides.length)
    setTimeout(() => {
      setIsAnimating(false)
      setDirection(0)
    }, 550)
  }

  // Get visible slides (from currentSlide onwards)
  const getVisibleSlides = () => {
    const visible: Array<{ slide: typeof experienceSlides[0], index: number }> = []
    for (let i = 0; i < experienceSlides.length; i++) {
      const index = (currentSlide + i) % experienceSlides.length
      visible.push({ slide: experienceSlides[index], index })
    }
    return visible
  }

  return (
    <section 
      className="relative py-[60px] text-white overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${experienceBackground})`,
      }}
    >
      {/* Black overlay with 50% opacity */}
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)]"></div>
      
      <div className="container py-[100px] min-h-[964px] z-10 relative flex items-center justify-center">
        <div className="flex gap-8 px-[120px] w-full">
          {/* Left Side - Content */}
          <div className="flex flex-col gap-6 justify-center flex-1 z-50 min-w-[543px]  ">
            {/* Date Badge */}
            <div className="inline-flex items-center justify-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-[144px] w-fit">
              <span className="text-sm text-white/90">January 12, 2025</span>
            </div>
            
            {/* Headline */}
            <h2 className="text-[40px] text-white font-semibold leading-tight">
              EXPERIENCE ADDIS ABABA FROM A WHOLE NEW PERSPECTIVE
            </h2>
            
            {/* Description */}
            <p className="text-sm text-white leading-relaxed">
              A hot air balloon ride in Addis offers a breathtaking panoramic view of Ethiopia's capital, blending the charm of ancient history with the pulse of modern life below.
            </p>
            
            {/* Plan Your Trip Button */}
            <Link to={ROUTES.PLAN_YOUR_TRIP}>
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-accent-100 rounded-[105px] px-6 py-4 text-text-dark-100 w-fit"
              >
                Plan Your Trip
              </Button>
            </Link>
          </div>
          {/* Right Side - Carousel */}
          <div className="flex-1 flex flex-col items-center justify-center gap-6 z-50">
            {/* Carousel Images */}
            <div className="relative flex gap-4 items-center justify-center ">
              {getVisibleSlides().map(({ slide, index }, displayIndex) => {
                const isFirst = displayIndex === 0
                const shouldAnimateOut = isFirst && direction === 1 && isAnimating
                const shouldAnimateIn = isFirst && direction === -1
                
                return (
                  <motion.div
                    key={`${slide.id}-${index}-${currentSlide}`}
                    initial={shouldAnimateIn
                      ? { opacity: 0, x: -600, height: '600px' }
                      : { opacity: 1, x: 0 }
                    }
                    animate={shouldAnimateOut
                      ? { scale: 1.5, opacity: 0, x: 0 }
                      : shouldAnimateIn
                      ? { opacity: 1, x: 0, height: '320px' }
                      : { opacity: 1, x: 0 }
                    }
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="relative rounded-2xl overflow-hidden"
                    style={{
                      width: '292px',
                      height: '290px',
                    }}
                  >
                    <img
                      src={slide.thumbnail}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback if image doesn't exist
                        e.currentTarget.src = slide.image
                      }}
                    />
                  </motion.div>
                )
              })}
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center gap-4 w-full pr-12 max-w-[747px]">
              {/* Navigation Arrows */}
              <div className="flex gap-2">
                <button
                  onClick={prevSlide}
                  className="size-[74px] bg-white/5 backdrop-blur-sm rounded-full  flex items-center justify-center "
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="size-8 text-white" />
                </button>
                <button
                  onClick={nextSlide}
                  className="size-[74px] bg-white/5 backdrop-blur-sm rounded-full  flex items-center justify-center "
                  aria-label="Next slide"
                >
                  <ChevronRight className="size-8 text-white" />
                </button>
              </div>

              {/* Page Indicator */}
              <div className="flex items-center gap-6 flex-1 min-w-0">
                <div className="flex-1 h-0.5 bg-white"></div>
                <span className="text-[34px] font-bold text-white">
                  {String(currentSlide + 1).padStart(2, '0')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


