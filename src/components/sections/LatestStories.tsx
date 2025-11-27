import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { stories } from "@/data/stories"

export function LatestStories() {
  const mainStory = stories[0]
  const sideStories = stories.slice(1)

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Latest Stories
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Main Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full">
              <div className="relative h-64 lg:h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-purple-800"></div>
              </div>
              <CardContent className="p-6 lg:p-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                  {mainStory.title}
                </h3>
                <p className="text-gray-600 mb-4">{mainStory.description}</p>
                <div className="flex items-center justify-between">
                  <Button variant="outline" className="border-gray-300">
                    Read More
                  </Button>
                  <span className="text-sm text-gray-500">{mainStory.date}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Side Stories */}
          <div className="space-y-6">
            {sideStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="relative h-32 lg:h-40">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-yellow-300"></div>
                  </div>
                  <CardContent className="p-4 lg:p-6">
                    <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">
                      {story.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {story.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-sm p-0 h-auto"
                      >
                        Read More
                      </Button>
                      <span className="text-xs text-gray-500">{story.date}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

