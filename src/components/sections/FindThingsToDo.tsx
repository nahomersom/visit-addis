import { activityCategories } from "@/data/whereToStay"

interface FindThingsToDoProps {
  title?: string
  description?: string
}

export function FindThingsToDo({ 
  title = "Find Things To Do",
  description
}: FindThingsToDoProps = {}) {
  return (
        <section className="py-10 px-6 lg:py-[60px] lg:px-[120px] ">

      <div className="flex flex-col items-center justify-center mb-10 gap-2">
        <h2 className="md:text-2xl font-semibold text-text-dark-100">{title}</h2>
        {description && (
          <p className="text-xs md:text-sm text-[#758886] ">
            {description}
          </p>
        )}
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        {activityCategories.map((category) => (
          <div
            key={category.id}
            className="relative w-[calc(33.333%-0.67rem)] lg:w-[198.67px] h-[100px] md:h-[180px] rounded-2xl overflow-hidden cursor-pointer group"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${category.image})`,
              }}
            />
            {/* Progressive blur overlay - same as SocialHighlights */}
            <div className="absolute inset-0 p-4 flex flex-col justify-end overflow-hidden">
              {/* Background darkening gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.32) 100%)',
                  clipPath: 'polygon(0 54.67%, 100% 54.67%, 100% 100%, 0 100%)',
                }}
              />
              {/* Progressive blur effect */}
              <div
                className="absolute"
                style={{
                  top: '54.67%',
                  left: 0,
                  right: 0,
                  bottom: '-20px',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  maskImage: 'linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 5%, rgba(255, 255, 255, 0.3) 15%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.85) 70%, rgba(255, 255, 255, 0.95) 85%, white 95%, white 100%)',
                  WebkitMaskImage: 'linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 5%, rgba(255, 255, 255, 0.3) 15%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.85) 70%, rgba(255, 255, 255, 0.95) 85%, white 95%, white 100%)',
                }}
              />
              {/* Content */}
              <div className="relative z-10 flex  items-center gap-3">
              
                <span className="text-white font-semibold text-xs md:text-lg">
                  {category.name}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

