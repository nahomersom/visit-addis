import { Button } from "@/components/ui/button"
import { STORY_IMAGES } from "@/config/constants"
import { useBlogs } from "@/hooks/useBlogs"

export function LatestStories() {
  const { data: blogsData, isLoading, isError } = useBlogs()
  
  if (isLoading) {
    return (
      <section className="py-[60px] px-6 md:px-12 lg:px-[120px]">
        <h2 className="text-2xl font-semibold mb-8 md:mb-6 lg:mb-10 text-text-dark-100 text-center md:text-start">
          Latest Stories
        </h2>
        <div className="text-center">Loading...</div>
      </section>
    )
  }

  if (isError || !blogsData?.data || blogsData.data.length === 0) {
    return (
      <section className="py-[60px] px-6 md:px-12 lg:px-[120px]">
        <h2 className="text-2xl font-semibold mb-8 md:mb-6 lg:mb-10 text-text-dark-100 text-center md:text-start">
          Latest Stories
        </h2>
        <div className="text-center">No stories available</div>
      </section>
    )
  }

  const blogs = blogsData.data
  const mainStory = blogs[0]
  const sideStories = blogs.slice(1, 4) // Get 3 side stories

  // Helper function to trim title
  const trimTitle = (title: string, maxLength: number = 60) => {
    const trimmed = title.trim()
    if (trimmed.length <= maxLength) return trimmed
    return trimmed.substring(0, maxLength).trim() + "..."
  }

  // Helper function to trim content
  const trimContent = (content: string, maxLength: number = 150) => {
    const trimmed = content.trim()
    if (trimmed.length <= maxLength) return trimmed
    return trimmed.substring(0, maxLength).trim() + "..."
  }

  // Helper function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }

  // Helper function to get image URL
  const getImageUrl = (blog: typeof blogs[0], fallbackIndex: number) => {
    if (blog.featured?.url) {
      return blog.featured.url
    }
    if (blog.featured?.formats?.large?.url) {
      return blog.featured.formats.large.url
    }
    if (blog.featured?.formats?.medium?.url) {
      return blog.featured.formats.medium.url
    }
    // Fallback to STORY_IMAGES if no featured image
    return STORY_IMAGES[fallbackIndex] || STORY_IMAGES[0]
  }

  return (
     <section className="py-[60px] px-6  md:px-12 lg:px-[120px]">

      
          <h2 className="text-2xl font-semibold mb-8 md:mb-6 lg:mb-10 text-text-dark-100 text-center md:text-start ">
        
            Latest Stories
          </h2>

        {/* Mobile and tab Layout */}
        <div className="flex flex-col lg:hidden gap-6">
          {/* Main Story - Full Width */}
          <div className="w-full bg-accent-80 p-2 rounded-2xl">
            <div className="relative h-[264px] md:h-[313px]  rounded-2xl">
              <img 
                src={getImageUrl(mainStory, 0)} 
                alt={mainStory.title}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="mt-6 md:mt-4 space-y-2">
              <h3 className="md:text-lg font-semibold text-text-dark-100 font-sans line-clamp-2 overflow-hidden">
                {trimTitle(mainStory.title, 80)}
              </h3>
              <p className="text-text-dark-80 text-sm font-sans line-clamp-3 overflow-hidden">{trimContent(mainStory.content, 120)}</p>
              <div className="flex items-center justify-between">
                <Button
                  size="sm"
                  className="bg-[#7F92760F] py-4 px-6 rounded-[100px] min-h-[50px] md:min-h-[52px] text-[#758886] font-semibold "
                >
                  Read More
                </Button>
                <span className="text-xs text-[#758886]">{formatDate(mainStory.published_date)}</span>
              </div>
            </div>
          </div>

          {/* Side Stories - Horizontal Scroll */}
          <div className="flex gap-4 overflow-x-auto scrollbar-hide -mx-6 px-6 md:-mx-12 md:px-12">
            {sideStories.map((story, index) => (
              <div key={story.id} className="bg-accent-80 p-2 flex flex-col md:flex-row md:gap-4 rounded-2xl w-[280px] md:w-[500px] shrink-0">
                <div className="relative h-[120px] md:h-[164px]  md:w-[200px] rounded-2xl overflow-hidden shrink-0">
                  <img 
                    src={getImageUrl(story, index + 1)} 
                    alt={story.title}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div className="mt-4 md:mt-0 flex-1 min-w-0">
                  <h3 className="text-sm md:text-lg font-semibold text-text-dark-100 mb-2 line-clamp-2 overflow-hidden">
                    {trimTitle(story.title, 50)}
                  </h3>
                  <p className="text-xs md:text-sm text-text-dark-80 mb-3 line-clamp-2 overflow-hidden">
                    {trimContent(story.content, 80)}
                  </p>
                  <div className="flex items-center justify-between">
                    <Button
                      size="sm"
                      className="bg-[#7F92760F] py-4 px-6 rounded-[100px] min-h-[52px] text-[#758886] font-semibold  font-sans"
                    >
                      Read More
                    </Button>
                    <span className="text-xs text-[#758886]">{formatDate(story.published_date)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout - Unchanged */}
        <div className="hidden lg:grid lg:grid-cols-[minmax(0,630px)_1fr] lg:gap-4">
          {/* Main Story */}
          <div
            className="w-full max-w-full lg:max-w-[740px] bg-accent-80 p-2 rounded-2xl "
          >
             
              <div className="relative h-[458px]  rounded-2xl">
                <img 
                  src={getImageUrl(mainStory, 0)} 
                  alt={mainStory.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="mt-6 space-y-2">
                <h3 className="text-sm lg:text-lg font-semibold text-text-dark-100 line-clamp-2 overflow-hidden">
                  {trimTitle(mainStory.title, 80)}
                </h3>
                <p className="text-text-dark-80 text-sm line-clamp-3 overflow-hidden">{trimContent(mainStory.content, 150)}</p>
                <div className="flex items-center justify-between">
                <Button
                        size="sm"
                        className="bg-[#7F92760F] py-4 px-6 rounded-[100px] min-h-[52px] text-[#758886] font-semibold "
                      >
                        Read More
                      </Button>
                  <span className="text-xs text-[#758886]">{formatDate(mainStory.published_date)}</span>
                </div>
              </div>
          </div>

          {/* Side Stories */}
          <div className="space-y-6">
            {sideStories.map((story, index) => (
              <div key={story.id} className="bg-accent-80 p-2 flex gap-4 rounded-2xl w-full">
                <div className="relative h-auto w-[200px] rounded-2xl overflow-hidden shrink-0">
                  <img 
                    src={getImageUrl(story, index + 1)} 
                    alt={story.title}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm lg:text-xl font-semibold text-text-dark-100 mb-2 line-clamp-2 overflow-hidden">
                    {trimTitle(story.title, 60)}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2 overflow-hidden">
                    {trimContent(story.content, 100)}
                  </p>
                  <div className="flex items-center justify-between">
                    <Button
                      size="sm"
                      className="bg-[#7F92760F] py-4 px-6 rounded-[100px] min-h-[52px] text-[#758886] font-semibold "
                    >
                      Read More
                    </Button>
                    <span className="text-xs text-[#758886]">{formatDate(story.published_date)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>
  )
}

