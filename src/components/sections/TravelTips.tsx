import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Plus, X } from "lucide-react"
import { SectionHeader } from "@/components/common/SectionHeader"
import { useTravelTips } from "@/hooks/useTravelTips"
import type { StrapiMedia } from "@/types/home"
import { TravelTipsSkeleton } from "@/layouts/skeleton/TravelTipsSkeleton"

interface TravelTipsProps {
  isColumn?: boolean
}

// Helper function to get full image URL
const getImageUrl = (icon: StrapiMedia | null | undefined): string => {
  if (!icon) return ""
  
  // Handle formats if available (when formats is an object, not a string)
  const formats = icon.formats as any
  if (formats && typeof formats === 'object') {
    // Try thumbnail first, then medium, then small
    if (formats.thumbnail?.url) {
      const thumbnailUrl = formats.thumbnail.url
      // If it's already a full URL (e.g., Cloudinary), return as is
      if (thumbnailUrl.startsWith("http")) return thumbnailUrl
      // Otherwise, construct the URL
      const baseUrl = import.meta.env.VITE_BASE_URL || "https://api.visitaddisababa.et"
      return `${baseUrl}${thumbnailUrl}`
    }
    if (formats.medium?.url) {
      const mediumUrl = formats.medium.url
      if (mediumUrl.startsWith("http")) return mediumUrl
      const baseUrl = import.meta.env.VITE_BASE_URL || "https://api.visitaddisababa.et"
      return `${baseUrl}${mediumUrl}`
    }
  }
  
  // Use the main URL
  const url = icon.url || ""
  // If it's already a full URL (e.g., Cloudinary), return as is
  if (url.startsWith("http")) return url
  // Otherwise, construct the URL
  const baseUrl = import.meta.env.VITE_BASE_URL || "https://api.visitaddisababa.et"
  return `${baseUrl}${url}`
}

const MAX_DESCRIPTION_LENGTH = 120

export function TravelTips({ isColumn = false }: TravelTipsProps) {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set())
  const navigate = useNavigate()
  const { data, isLoading, error } = useTravelTips()

  const toggleFlip = (tipId: number) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(tipId)) {
        newSet.delete(tipId)
      } else {
        newSet.add(tipId)
      }
      return newSet
    })
  }

  const handleReadMore = (tipId: number, e: React.MouseEvent) => {
    e.stopPropagation() // Prevent card flip
    navigate(`/detail/${tipId}`, { state: { from: window.location.pathname } })
  }

  const getTruncatedDescription = (description: string) => {
    if (description.length <= MAX_DESCRIPTION_LENGTH) {
      return description
    }
    return description.substring(0, MAX_DESCRIPTION_LENGTH).trim() + "..."
  }

  if (isLoading) {
    return <TravelTipsSkeleton isColumn={isColumn} />
  }

  if (error || !data?.data) {
    return (
      <section className="py-10 md:py-[60px] px-6 md:px-[48px] lg:px-[120px]">
        <div className="text-center py-20">
          <p className="text-gray-600">Failed to load travel tips</p>
        </div>
      </section>
    )
  }

  const { header, tips } = data.data

  // Use subtitle if description is null
  const headerDescription = header.description || header.subtitle || ""

  return (
    <section className="py-10 md:py-[60px] px-6 md:px-[48px] lg:px-[120px]">
      <SectionHeader
        title={header.title}
        description={headerDescription}
      />

      {/* Tips list - horizontal scroll on mobile, grid on larger screens */}
      <div className={`${isColumn ? 'flex flex-col gap-[16px]' : 'flex overflow-x-auto'} scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 ${isColumn ? 'mx-0 px-0' : '-mx-6 px-6'} md:mx-0 md:px-0`}>
        {tips.map((tip) => {
          const iconSrc = getImageUrl(tip.icon)
          const isFlipped = flippedCards.has(tip.id)
          return (
            <div
              key={tip.id}
              className={`flip-card-container ${isColumn ? 'w-full md:w-auto' : 'shrink-0 w-[310px] md:w-auto'}`}
            >
              <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
                {/* Front of card */}
                <div className="flip-card-front p-6 bg-accent-80 rounded-3xl flex flex-col items-center justify-center gap-4">
                  {iconSrc && (
                    <img src={iconSrc} alt={tip.icon?.alternativeText || tip.title} className="size-[60px] object-contain" />
                  )}
                  <div className="flex flex-col items-center text-center gap-1">
                    <h3 className="text-lg font-semibold text-text-dark-100">
                      {tip.title}
                    </h3>
                    <p className="text-sm text-text-dark-80 text-center">{tip.short_description}</p>
                  </div>
                  <div 
                    className="size-12 rounded-full bg-accent-100 flex items-center justify-center cursor-pointer hover:bg-accent-120 transition-colors"
                    onClick={() => toggleFlip(tip.id)}
                  >
                    <Plus className="size-4 text-theme-dark" />
                  </div>
                </div>

                {/* Back of card */}
                <div className="flip-card-back p-6 bg-accent-80 rounded-3xl flex flex-col items-center justify-center gap-4">
                  <div className="flex flex-col items-center text-center gap-3 w-full">
                    <h3 className="text-lg font-semibold text-text-dark-100">
                      {tip.title}
                    </h3>
                    <div className="flex flex-col items-center gap-2 w-full">
                      <p className="text-sm text-text-dark-80 text-center leading-relaxed">
                        {getTruncatedDescription(tip.description)}
                      </p>
                      {tip.description.length > MAX_DESCRIPTION_LENGTH && (
                        <button
                          onClick={(e) => handleReadMore(tip.id, e)}
                          className="text-sm text-theme-primary underline font-medium hover:no-underline transition-all cursor-pointer"
                        >
                          Read more
                        </button>
                      )}
                    </div>
                    {header.action_link?.is_active && header.action_link?.url && (
                      <Link 
                        to={header.action_link.url}
                        target={header.action_link.target}
                        className="text-sm text-theme-primary underline font-medium hover:no-underline transition-all cursor-pointer"
                      >
                        {header.action_link.label || "Read more"}
                      </Link>
                    )}
                  </div>
                  <div 
                    className="size-12 rounded-full bg-theme-dark flex items-center justify-center cursor-pointer hover:bg-accent-120 transition-colors"
                    onClick={() => toggleFlip(tip.id)}
                  >
                    <X className="size-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

