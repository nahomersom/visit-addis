import { motion } from "framer-motion"
import {
  HeartPulse,
  ShieldCheck,
  Phone,
  FileText,
  DollarSign,
  CloudSun,
  Plus,
  type LucideIcon,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { travelTips } from "@/data/travelTips"

const iconMap: Record<string, LucideIcon> = {
  "heart-pulse": HeartPulse,
  "shield-check": ShieldCheck,
  phone: Phone,
  "file-text": FileText,
  "dollar-sign": DollarSign,
  "cloud-sun": CloudSun,
}

export function TravelTips() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Travel Tips
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <p className="text-lg text-gray-600">
              Essential information to help you plan your visit to Addis Ababa.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {travelTips.map((tip, index) => {
            const Icon = iconMap[tip.icon] || FileText
            return (
              <motion.div
                key={tip.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-400 to-yellow-400 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <Plus className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {tip.title}
                    </h3>
                    <p className="text-sm text-gray-600">{tip.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

