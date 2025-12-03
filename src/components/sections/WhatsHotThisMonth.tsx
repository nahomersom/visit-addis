import { Button } from "@/components/ui/button"
import { whatsHotItems } from "@/data/whereToStay"
import { SectionHeader } from "../common/SectionHeader"

export function WhatsHotThisMonth() {
  return (
    <section className="py-10 px-6 md:px-12 lg:py-[60px] lg:px-[120px]">
    

        <SectionHeader
            title="What's hot this month"
            description="  Visiting Ethiopia is easier than you think! From knowing the best time to visit and visa requirements to discovering must-see attractions and cultural experiences, we've made planning simple."
            />

      <div className="grid grid-cols-1 md:grid-cols-[65%_35%] lg:grid-cols-[70%_30%] gap-4">
        {/* Main Story */}
        <div className="w-full overflow-hidden">
          <div className="relative h-[600px] rounded-2xl overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${whatsHotItems[0].image})`,
              }}
            />
            {/* Progressive blur overlay - right to left */}
            <div className="absolute inset-0 flex items-center justify-start overflow-hidden">
              {/* Background darkening gradient - right to left */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.320274) 40%, rgba(0, 0, 0, 0.4) 100%)',
                }}
              />
              {/* Progressive blur effect - right to left */}
              <div
                className="absolute inset-0 backdrop-blur-xs"
                style={{
                  maskImage: 'linear-gradient(270deg, transparent 0%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 5%, rgba(255, 255, 255, 0.3) 15%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.85) 70%, rgba(255, 255, 255, 0.95) 85%, white 95%, white 100%)',
                  WebkitMaskImage: 'linear-gradient(270deg, transparent 0%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 5%, rgba(255, 255, 255, 0.3) 15%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.85) 70%, rgba(255, 255, 255, 0.95) 85%, white 95%, white 100%)',
                }}
              />
              {/* Content - left aligned */}
              <div className="relative z-10 flex flex-col gap-4 items-start px-6">
                <span className="text-xs text-white/80">{whatsHotItems[0].date}</span>
                <h3 className="text-sm font-medium text-theme-primary">{whatsHotItems[0].category}</h3>

                <h3 className="text-2xl font-semibold text-white">
                  {whatsHotItems[0].title}
                </h3>
                <p className="text-sm text-white max-w-[500px]">
                  {whatsHotItems[0].description}
                </p>
                <Button
                  size="sm"
                  className="bg-theme-primary w-auto py-4 px-6 rounded-[100px] min-h-[52px] text-white text-sm"
                >
                  Read More
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Side Stories */}
        <div className="space-y-6">
          {whatsHotItems.slice(1).map((item) => (
            <div key={item.id} className="bg-accent-80 p-2 flex flex-col rounded-2xl w-full">
              {/* Image - no blur */}
              <div className="relative w-full h-40 lg:h-[190px] rounded-2xl overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Content below image */}
              <div className="flex-1 mt-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-text-dark-100">
                    {item.title}
                  </h3>
                  <span className="text-xs text-text-dark-80">{item.date}</span>
                </div>
                <p className="text-sm text-text-dark-80">
                  {item.description}
                </p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

