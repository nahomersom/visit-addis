
import { useState } from "react"
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
  const [direction, setDirection] = useState(0) // 1 for next, -1 for prev
  const [isAnimating, setIsAnimating] = useState(false)
  const [renderKey, setRenderKey] = useState(0)

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(1)
    
    // Wait for full animation to complete (800ms) before updating slide
    // This keeps "a" as first during animation and allows "b", "c", "d" to slide smoothly
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % experienceSlides.length)
      setRenderKey(prev => prev + 1) // Force re-render
      setTimeout(() => {
        setIsAnimating(false)
        setDirection(0)
      }, 50)
    }, 800) // Match the slide animation duration
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
  const visibleSlides = React.useMemo(() => {
    const visible: Array<{ slide: typeof experienceSlides[0], index: number }> = []
    for (let i = 0; i < experienceSlides.length; i++) {
      const index = (currentSlide + i) % experienceSlides.length
      visible.push({ slide: experienceSlides[index], index })
    }
    return visible
  }, [currentSlide])

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
              {visibleSlides.map(({ slide, index }, displayIndex) => {
                const isFirst = displayIndex === 0
                const isLast = displayIndex === visibleSlides.length - 1
                const shouldAnimateOut = isFirst && direction === 1 && isAnimating
                const shouldAnimateIn = isFirst && direction === -1
                // Images that slide left to make space (all except first and last)
                const shouldSlideLeft =
                direction === 1 &&
                isAnimating &&
                !isFirst // slide everything except the item being removed
              
                // The last image is the one that was first, entering from right
                const shouldEnterFromRight = isLast && direction === 1 && isAnimating
                
                return (
         <motion.div
  key={`${slide.id}-${currentSlide}-${displayIndex}-${renderKey}`}
  initial={
    shouldAnimateIn
      ? {
          opacity: 0,
          x: -500,
          scale: 5,
          transition:{
            duration: 2
          }
        }
      : shouldEnterFromRight
      ? {
          opacity: 0,
          x: 316, // Start from right (292px width + 24px gap) - slides in from right
          scale: 0.9,
        }
      : shouldSlideLeft
      ? {
          x: 316, // Start from one position to the right
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
      : shouldAnimateIn
      ? {
          // PREV: new first image matches NEXT but reversed
          x: 0,
          scale: 1,
          opacity: 1,
          transition: {
            duration: 1,
            ease: [0.25, 0.1, 0.25, 1],
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
      : shouldEnterFromRight
      ? {
          // NEXT: last image (was first) slides in from right to last position
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
    shouldAnimateOut
      ? { duration: 1 }
      : shouldAnimateIn
      ? { duration: 1, ease: [0.25, 0.1, 0.25, 1] } // Reverse animation for previous button
      : shouldSlideLeft || shouldEnterFromRight
      ? { duration: 0.8, ease: [0.4, 0, 0.2, 1] } // Same smooth slide for b, c, d - no bounce (standard easing)
      : { duration: 0 }
  }
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


