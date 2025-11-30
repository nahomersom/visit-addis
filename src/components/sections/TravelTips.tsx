import { useState } from "react"
import { motion } from "framer-motion"
import { travelTips } from "@/data/travelTips"
import healthIcon from "@/assets/images/health.png"
import safetyIcon from "@/assets/images/safety.png"
import emergencyNumberIcon from "@/assets/images/emergencyNumber.png"
import travelDocumentsIcon from "@/assets/images/traveldocuments.png"
import currencyIcon from "@/assets/images/currency.png"
import weatherIcon from "@/assets/images/weather.png"
import { Plus, X } from "lucide-react"

const iconMap: Record<string, string> = {
  "heart-pulse": healthIcon,
  "shield-check": safetyIcon,
  phone: emergencyNumberIcon,
  "file-text": travelDocumentsIcon,
  "dollar-sign": currencyIcon,
  "cloud-sun": weatherIcon,
}

export function TravelTips() {
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
    <section className="py-10 px-[120px] bg-white">
          <div
          className="flex justify-between mb-10 "
        >
          <h2 className="text-2xl font-semibold ">
          Travel Tips
          </h2>
          <p className="text-sm text-[#758886] max-w-[400px] ">
          Lorem ipsum dolor sit amet consectetur. Nulla facilisis vel id morbi. Lectus id odio quam ut tincidunt commodo ut. Nisi eget elit pretium id adipiscing nunc ac volutpat amet. Et sed quam commodo tortor eget.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {travelTips.map((tip, index) => {
            const iconSrc = iconMap[tip.icon] || travelDocumentsIcon
            const isFlipped = flippedCards.has(tip.id)
            return (
              <motion.div
                key={tip.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flip-card-container"
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
                      <a 
                        href="#" 
                        className="text-sm text-theme-primary underline font-medium"
                      >
                        Read more
                      </a>
                    </div>
                    <div 
                      className="size-12 rounded-full bg-theme-dark flex items-center justify-center cursor-pointer hover:bg-accent-120 transition-colors"
                      onClick={() => toggleFlip(tip.id)}
                    >
                      <X className="size-6 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
    </section>
  )
}

