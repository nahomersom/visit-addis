import { Heart } from "lucide-react"
import { attractions } from "@/data/attractions"
import locationIcon from "@/assets/icons/location.svg"
import starIcon from "@/assets/icons/star.svg"
import { useRef, useState } from "react"


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
  const [showLeft, setShowLeft] = useState(false);
const [showRight, setShowRight] = useState(true);

const scrollRef = useRef(null);

const handleScroll = () => {
  const el = scrollRef.current;
  if (!el) return;

  const { scrollLeft, scrollWidth, clientWidth } = el;

  setShowLeft(scrollLeft > 0); 
  setShowRight(scrollLeft + clientWidth < scrollWidth - 1);
};

  return (
    <section className="py-10 md:py-[60px]  bg-accent-60 relative">
    {/* LEFT GRADIENT — show only while scrolling */}
  {/* LEFT FIXED GRADIENT (reversed) */}
{showLeft && (
  <div
    className="pointer-events-none absolute left-0 top-0 h-full w-[40px] md:w-[150px] z-30 transition-opacity duration-300"
    style={{
      background: `
        linear-gradient(
          90deg,
          #F5F5F5 0%,
          rgba(245, 245, 245, 0.6) 40%,
          rgba(245, 245, 245, 0) 100%
        )
      `,
    }}
  />
)}

{/* RIGHT FIXED GRADIENT (reversed) */}
{showRight && (
  <div
    className="pointer-events-none absolute right-0 top-0 h-full w-[40px] md:w-[150px] z-30 transition-opacity duration-300"
    style={{
      background: `
        linear-gradient(
          270deg,
          #F5F5F5 0%,
          rgba(245, 245, 245, 0.6) 40%,
          rgba(245, 245, 245, 0) 100%
        )
      `,
    }}
  />
)}


        <div
          className="flex flex-col lg:flex-row lg:justify-between px-6 md:px-12 lg:px-[120px] gap-2 "
        >
          <h2 className="text-2xl font-semibold ">
            Top Attractions in Addis Ababa
          </h2>
          <p className="text-sm text-[#758886] max-w-[400px] text-center md:text-left">
            Discover the city's must-see landmarks, from ancient treasures to modern cultural hubs.
          </p>
        </div>

      {/* Scrollable area - full width with padding matching header */}
      <div className="overflow-x-auto pb-4 scrollbar-hide mt-10"
          ref={scrollRef}
          onScroll={handleScroll}
      >
        <div className="flex gap-6 pl-6 md:pl-[48px] lg:pl-[120px]">
            {attractions.map((attraction) => (
            <div key={attraction.id} className="flex flex-col gap-2.5 shrink-0 ">
                  {/* Image Container */}
                  <div className="relative h-[235px] w-[324px] md:h-[565px] md:w-[460px]  ">
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
                    <h3 className="text-lg lg:text-xl font-medium text-text-dark-100 mb-2">
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

