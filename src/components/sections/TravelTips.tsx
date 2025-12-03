import { useState } from "react"
import { Link } from "react-router-dom"
import { travelTips } from "@/data/travelTips"
import healthIcon from "@/assets/images/health.png"
import safetyIcon from "@/assets/images/safety.png"
import emergencyNumberIcon from "@/assets/images/emergencyNumber.png"
import travelDocumentsIcon from "@/assets/images/traveldocuments.png"
import currencyIcon from "@/assets/images/currency.png"
import weatherIcon from "@/assets/images/weather.png"
import { Plus, X } from "lucide-react"
import { ROUTES } from "@/config/routes"
import { SectionHeader } from "@/components/common/SectionHeader"

const iconMap: Record<string, string> = {
  "heart-pulse": healthIcon,
  "shield-check": safetyIcon,
  phone: emergencyNumberIcon,
  "file-text": travelDocumentsIcon,
  "dollar-sign": currencyIcon,
  "cloud-sun": weatherIcon,
}

interface TravelTipsProps {
  isColumn?: boolean
}


export function TravelTips({ isColumn = false }: TravelTipsProps) {
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set())

  const toggleFlip = (tipId: string) => {
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

  return (
    <section className="py-10 md:py-[60px] px-6 md:px-[48px] lg:px-[120px]">
      <SectionHeader
        title="Travel Tips"
        description="Lorem ipsum dolor sit amet consectetur. Nulla facilisis vel id morbi. Lectus id odio quam ut tincidunt commodo ut. Nisi eget elit pretium id adipiscing nunc ac volutpat amet. Et sed quam commodo tortor eget."
      />

        {/* Tips list - horizontal scroll on mobile, grid on larger screens */}
        <div className={`${isColumn ? 'flex flex-col gap-[16px]' : 'flex overflow-x-auto'} scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 ${isColumn ? 'mx-0 px-0' : '-mx-6 px-6'} md:mx-0 md:px-0`}>
          {travelTips.map((tip) => {
            const iconSrc = iconMap[tip.icon] || travelDocumentsIcon
            const isFlipped = flippedCards.has(tip.id)
            return (
              <div
                key={tip.id}
                className={`flip-card-container ${isColumn ? 'w-full md:w-auto' : 'shrink-0 w-[310px] md:w-auto'}`}
              >
                <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
                  {/* Front of card */}
                  <div className="flip-card-front p-6 bg-accent-80 rounded-3xl flex flex-col items-center justify-center gap-4">
                    <img src={iconSrc} alt={tip.title} className="size-[60px] object-contain" />
                    <div className="flex flex-col items-center text-center gap-1">
                      <h3 className="text-lg font-semibold text-text-dark-100">
                        {tip.title}
                      </h3>
                      <p className="text-sm text-text-dark-80 text-center">{tip.description}</p>
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
                      <p className="text-sm text-text-dark-80 text-center leading-relaxed">{tip.detailedDescription}</p>
                      <Link 
                        to={ROUTES.DETAIL}
                        state={{ from: ROUTES.GUIDE }}
                        className="text-sm text-theme-primary underline font-medium"
                      >
                        Read more
                      </Link>
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

