import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const adviceItems = [
  {
    id: "1",
    number: "1",
    title: "Best Time To Visit",
    description:
      "Plan your visit during the dry season for the best weather and experiences.",
  },
  {
    id: "2",
    number: "2",
    title: "Transportation Options",
    description:
      "Explore various transportation methods available in the city for easy navigation.",
  },
  {
    id: "3",
    number: "3",
    title: "Hotels, Resorts",
    description:
      "Find the perfect accommodation that suits your needs and budget.",
  },
  {
    id: "4",
    number: "4",
    title: "Food & Drinks",
    description:
      "Discover the rich culinary culture and traditional Ethiopian cuisine.",
  },
]

export function AdviceForTravelers() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Advice for Travelers
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
              Essential advice to help you make the most of your visit to Addis
              Ababa.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {adviceItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 lg:p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-teal-500 to-yellow-400 flex items-center justify-center">
                      <span className="text-2xl lg:text-3xl font-bold text-white">
                        {item.number}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

