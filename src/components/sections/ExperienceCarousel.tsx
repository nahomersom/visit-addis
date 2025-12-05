
import { useState, useEffect } from "react"
import React from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"
import experienceBackground from "@/assets/images/experienceBackground.jpg"
import { experienceSlides } from "@/data/experienceCarousel"
import { ROUTES } from "@/config/routes"
import { Button } from "@/components/ui/button"

export function ExperienceCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [displaySlide, setDisplaySlide] = useState(0) // For visibleSlides calculation
  const [direction, setDirection] = useState(0) // 1 for next, -1 for prev
  const [isAnimating, setIsAnimating] = useState(false)
  const [renderKey, setRenderKey] = useState(0)
  const [slideDistance, setSlideDistance] = useState(316) // Default desktop value

  // Calculate slide distance based on screen size
  useEffect(() => {
    const updateSlideDistance = () => {
      if (window.innerWidth >= 768) {
        // Desktop: 292px width + 16px gap (gap-4) ≈ 308px, but using 316px as original
        setSlideDistance(316)
      } else {
        // Mobile: 97px width + 5px gap = 102px
        setSlideDistance(102)
      }
    }
    
    updateSlideDistance()
    window.addEventListener('resize', updateSlideDistance)
    return () => window.removeEventListener('resize', updateSlideDistance)
  }, [])

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(1)
    
    // Update slide immediately so other slides can start moving while first one zooms out
    setCurrentSlide((prev) => (prev + 1) % experienceSlides.length)
    setRenderKey(prev => prev + 1) // Force re-render
    
    // Wait for animation to complete before allowing next interaction
    setTimeout(() => {
      setIsAnimating(false)
      setDirection(0)
    }, 1000) // Match the zoom animation duration (1s)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(-1)
    
    // Update slide immediately so other slides can start moving while first one zooms out
    setCurrentSlide((prev) => (prev - 1 + experienceSlides.length) % experienceSlides.length)
    setRenderKey(prev => prev + 1) // Force re-render
    
    // Wait for animation to complete before allowing next interaction
    setTimeout(() => {
      setIsAnimating(false)
      setDirection(0)
    }, 1000) // Match the zoom animation duration (1s)
  }

  // Get visible slides (from currentSlide onwards)
  const visibleSlides = React.useMemo(() => {
    const visible: Array<{ slide: typeof experienceSlides[0], index: number }> = []
    for (let i = 0; i < experienceSlides.length; i++) {
      const index = (displaySlide + i) % experienceSlides.length
      visible.push({ slide: experienceSlides[index], index })
    }
    return visible
  }, [currentSlide])

  return (
    <section 
      className="relative md:py-[60px] py-6 text-white overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${experienceBackground})`,
      }}
    >
      {/* Black overlay with 50% opacity */}
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)]"></div>
      
      <div className="container   md:py-[100px] min-h-full md:min-h-[964px] z-10 relative flex items-center justify-center">
        <div className="flex flex-col md:flex-row gap-8 px-6 md:px-[48px] lg:px-[120px] w-full">
          {/* Left Side - Content */}
          <div className="flex flex-col gap-6 justify-center flex-1 z-50 min-w-[369px] lg:min-w-[543px] py-6 md:py-0  ">
            {/* Date Badge */}
            <div className="inline-flex items-center justify-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-[144px] w-fit">
              <span className="text-sm text-white/90">January 12, 2025</span>
            </div>
            
            {/* Headline */}
            <h2 className="lg:text-[40px] text-2xl md:text-[32px] text-white font-semibold leading-tight">
              EXPERIENCE ADDIS ABABA FROM A WHOLE NEW PERSPECTIVE
            </h2>
            
            {/* Description */}
            <p className="lg:text-sm text-xs  text-white leading-relaxed">
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
          <div className="flex-1 flex flex-col md:items-center md:justify-center gap-6 z-50">
            {/* Carousel Images */}
            <div className="relative flex gap-[5px] md:gap-4 md:items-center md:justify-center ">
              {visibleSlides.map(({ slide }, displayIndex) => {
                const isFirst = displayIndex === 0
                const isLast = displayIndex === visibleSlides.length - 1
                const shouldAnimateOut = isFirst && direction === 1 && isAnimating
                const shouldAnimateOutPrev = isFirst && direction === -1 && isAnimating
                // Images that slide left to make space when going next (all except first and last)
                const shouldSlideLeft =
                direction === 1 &&
                isAnimating &&
                !isFirst // slide everything except the item being removed
              
                // Images that slide right to make space when going prev (all except first and last)
                const shouldSlideRight =
                direction === -1 &&
                isAnimating &&
                !isFirst // slide everything except the item being removed
              
                // The last image is the one that was first, entering from right (when going next)
                const shouldEnterFromRight = isLast && direction === 1 && isAnimating
                
                // The last image enters from left (when going prev)
                const shouldEnterFromLeft = isLast && direction === -1 && isAnimating
                
                return (
         <motion.div
  key={`${slide.id}-${currentSlide}-${displayIndex}-${renderKey}`}
  initial={
    shouldEnterFromRight
      ? {
          opacity: 0,
          x: slideDistance, // Start from right - slides in from right
          scale: 0.9,
        }
      : shouldEnterFromLeft
      ? {
          opacity: 0,
          x: -slideDistance, // Start from left - slides in from left
          scale: 0.9,
        }
      : shouldSlideLeft
      ? {
          x: slideDistance, // Start from one position to the right
          opacity: 1,
          scale: 1,
        }
      : shouldSlideRight
      ? {
          x: -slideDistance, // Start from one position to the left
          opacity: 1,
          scale: 1,
        }
      : {
          opacity: 1,
          x: 0,
          scale: 1,
        }
  }
  animate={
    shouldAnimateOut
      ? {
          // NEXT: first image zooms in slightly + moves left + fades
          x: -500,
          scale: 5,
          opacity: 0,
          transition:{
            duration: 1
          }
        }
      : shouldAnimateOutPrev
      ? {
          // PREV: first image zooms in slightly + moves left + fades
          x: -500,
          scale: 5,
          opacity: 0,
          transition:{
            duration: 1
          }
        }
      : shouldSlideLeft
      ? {
          // NEXT: images slide left to make space (b, c, d all use this)
          x: 0,
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1], // Explicit transition to prevent bounce
          }
        }
      : shouldSlideRight
      ? {
          // PREV: images slide right to make space (b, c, d all use this)
          x: 0,
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1], // Explicit transition to prevent bounce
          }
        }
      : shouldEnterFromRight
      ? {
          // NEXT: last image (was first) slides in from right to last position
          x: 0,
          scale: 1,
          opacity: 1,
        }
      : shouldEnterFromLeft
      ? {
          // PREV: last image (was first) slides in from left to last position
          x: 0,
          scale: 1,
          opacity: 1,
        }
      : {
          // Default state
          x: 0,
          opacity: 1,
          scale: 1,
        }
  }
  transition={
    shouldAnimateOut || shouldAnimateOutPrev
      ? { duration: 1 }
      : shouldSlideLeft || shouldSlideRight || shouldEnterFromRight || shouldEnterFromLeft
      ? { duration: 0.8, ease: [0.4, 0, 0.2, 1] } // Same smooth slide - no bounce (standard easing)
      : { duration: 0 }
  }
  className="relative rounded-2xl overflow-hidden w-[97px] h-[96px] md:w-[292px] md:h-[290px]"
>
  <img
    src={slide.thumbnail}
    alt={slide.title}
    className="w-full h-full object-cover"
    onError={(e) => {
      e.currentTarget.src = slide.image
    }}
  />
</motion.div>


                )
              })}
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center gap-4 w-full md:pr-12 max-w-full md:max-w-[369px]  lg:max-w-[747px] self-start lg:self-center">
              {/* Navigation Arrows */}
              <div className="flex gap-2">
                <button
                  onClick={prevSlide}
                  className="size-[42px] md:size-[74px] bg-white/5 backdrop-blur-sm rounded-full  flex items-center justify-center "
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="size-6 md:size-8 text-white" />
                </button>
                <button
                  onClick={nextSlide}
                  className="size-[42px] md:size-[74px] bg-white/5 backdrop-blur-sm rounded-full  flex items-center justify-center "
                  aria-label="Next slide"
                >
                  <ChevronRight className="size-6 md:size-8 text-white" />
                </button>
              </div>

              {/* Page Indicator */}
              <div className="flex items-center gap-6 flex-1 min-w-0">
                <div className="flex-1 h-0.5 bg-white"></div>
                <span className="text-base md:text-[34px] font-bold text-white">
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
