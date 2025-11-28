import { Heart } from "lucide-react"
import { attractions } from "@/data/attractions"
import locationIcon from "@/assets/icons/location.svg"
import starIcon from "@/assets/icons/star.svg"


interface TagProps {
  label: string
}

function Tag({ label }: TagProps) {
  return (
    <div className="px-4 py-2 rounded-[100px] bg-[rgba(0,0,0,0.1)] backdrop-blur-[34px]  border border-white/10 ">
      <span className="text-sm text-white font-medium whitespace-nowrap">
        {label}
      </span>
    </div>
  )
}

export function TopAttractions() {
  return (
    <section className="py-[60px] bg-accent-60">
        <div
          className="flex justify-between  px-[120px]"
        >
          <h2 className="text-2xl font-semibold ">
            Top Attractions in Addis Ababa
          </h2>
          <p className="text-sm text-[#758886] max-w-[400px] ">
            Discover the city's must-see landmarks, from ancient treasures to modern cultural hubs.
          </p>
        </div>

      {/* Scrollable area - full width with padding matching header */}
      <div className="overflow-x-auto pb-4 scrollbar-hide mt-10">
        <div className="flex gap-6 pl-[120px]">
            {attractions.map((attraction) => (
            <div key={attraction.id} className="flex flex-col gap-2.5 shrink-0 ">
                  {/* Image Container */}
                  <div className="relative h-[565px] w-[460px]  ">
                    <img
                      src={attraction.image}
                      alt={attraction.title}
                      className="w-full h-full object-cover rounded-3xl"
                    />
                    {/* Heart Icon */}
                    <button className="absolute top-6 right-6 h-10 w-10 flex items-center justify-center  rounded-full z-10 bg-[rgba(0,0,0,0.1)] backdrop-blur-[34px]  border border-white/10">
                      <Heart className="w-5 h-5 text-white" />
                    </button>
                    {/* Tags Overlay */}
                    <div className="absolute bottom-6 left-6 right-6 flex gap-2 flex-wrap">
                      {attraction.tags.map((tag) => (
                        <Tag key={tag} label={tag} />
                      ))}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="mt-2">
                    <h3 className="text-xl font-medium text-text-dark-100 mb-2">
                      {attraction.title}
                    </h3>
                    <div className="flex justify-between">

                    <div className="flex items-center gap-2 text-sm text-[#758886] mb-3">
                       <img 
              src={locationIcon} 
              alt={`location logo`}
            />
                      <span>{attraction.location}</span>
                    </div>
                    <div className="flex gap-1">
                      <img 
              src={starIcon} 
              alt={`star logo`}
              className="w-6 h-6"
            />
                      <span className="text-sm font-semibold text-text-dark-100">
                        {attraction.rating}
                      </span>
                    </div>
                    </div>
                  </div>
            </div>
          ))}
          {/* Spacer for right padding */}
          <div className="shrink-0 w-20"></div>
        </div>
      </div>
    </section>
  )
}

