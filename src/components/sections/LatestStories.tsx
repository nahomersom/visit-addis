import { Button } from "@/components/ui/button"
import { stories } from "@/data/stories"
import { STORY_IMAGES } from "@/config/constants"

export function LatestStories() {
  const mainStory = stories[0]
  const sideStories = stories.slice(1, 4) // Get 3 side stories

  return (
     <section className="py-[60px] px-[120px]">

      
          <h2 className="text-2xl font-semibold mb-10  ">
        
            Latest Stories
          </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,630px)_1fr] gap-4">
          {/* Main Story */}
          <div
            className="w-full max-w-full lg:max-w-[740px] bg-accent-80 p-2 rounded-2xl "
          >
             
              <div className="relative h-[458px]  rounded-2xl">
                <img 
                  src={STORY_IMAGES[0]} 
                  alt={mainStory.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="mt-6 space-y-2">
                <h3 className="text-lg font-semibold text-text-dark-100">
                  {mainStory.title}
                </h3>
                <p className="text-text-dark-80 text-sm">{mainStory.description}</p>
                <div className="flex items-center justify-between">
                <Button
                        size="sm"
                        className="bg-[#7F92760F] py-4 px-6 rounded-[100px] min-h-[52px] text-[#758886] font-semibold "
                      >
                        Read More
                      </Button>
                  <span className="text-xs text-[#758886]">{mainStory.date}</span>
                </div>
              </div>
          </div>

          {/* Side Stories */}
          <div className="space-y-6">
            {sideStories.map((story, index) => (
            
                <div className="bg-accent-80 p-2 flex gap-4 rounded-2xl w-full">
                  <div className="relative h-auto w-[200px] rounded-2xl overflow-hidden shrink-0">
                    <img 
                      src={STORY_IMAGES[index + 1]} 
                      alt={story.title}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">
                      {story.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {story.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <Button
                        size="sm"
                        className="bg-[#7F92760F] py-4 px-6 rounded-[100px] min-h-[52px] text-[#758886] font-semibold "
                      >
                        Read More
                      </Button>
                      <span className="text-xs text-[#758886]">{story.date}</span>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
    </section>
  )
}

