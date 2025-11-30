import { Star } from "lucide-react"
import { socialHighlights } from "@/data/socialHighlights"
import stadiumImage from "@/assets/images/stadium.jpg"
import womensquareImage from "@/assets/images/womensquare.jpg"
import keberoImage from "@/assets/images/kebero.jpg"
import oldHouseImage from "@/assets/images/oldHouse.jpg"
import catholicChurchImage from "@/assets/images/catholicChurch.jpg"
import buildingsImage from "@/assets/images/buildings.jpg"
import instagramIcon from "@/assets/icons/instagram.png"

const backgroundImages = [
  stadiumImage,
  womensquareImage,
  keberoImage,
  oldHouseImage,
  catholicChurchImage,
  buildingsImage,
]

// Width pattern: 75%, 25%, 25%, 75%, 75%, 25%
const cardWidths = ["w-[60%]", "w-[40%]", "w-[40%]", "w-[60%]", "w-[60%]", "w-[40%]"]

export function SocialHighlights() {
  return (
     <section className="py-[60px] px-[120px] bg-accent-80">

        <div
          className="flex justify-between mb-10 "
        >
          <h2 className="text-2xl font-semibold ">
          Social Highlights
          </h2>
          <p className="text-sm text-[#758886] max-w-[400px] ">
            Discover the city's must-see landmarks, from ancient treasures to modern cultural hubs.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {/* Row 1: 75% + 25% */}
          <div className="flex gap-6">
            {socialHighlights.slice(0, 2).map((highlight, index) => (
              <div
            
                className={cardWidths[index]}
              >
                <div className="overflow-hidden  cursor-pointer relative min-h-[352px] rounded-[40px] ">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${backgroundImages[index]})`,
                    }}
                  />
                  {/* Progressive blur overlay */}
                  <div className="absolute inset-0 p-4 flex flex-col justify-end overflow-hidden">
                    {/* Background darkening gradient */}
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.32) 100%)',
                        clipPath: 'polygon(0 54.67%, 100% 54.67%, 100% 100%, 0 100%)',
                      }}
                    />
                    {/* Progressive blur effect - extends beyond bottom for smooth fade */}
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
                    <div className="relative z-10 flex justify-between">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="relative size-[49px]">
                          <div className="size-[49px] rounded-[8px] border border-white/60 overflow-hidden bg-gray-200">
                            <img 
                              src={`https://i.pravatar.cc/150?img=${highlight.id}`}
                              alt={highlight.user.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(highlight.user.name)}&background=random&size=49`
                              }}
                            />
                          </div>
                          {/* Instagram icon circle */}
                          <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center z-20">
                            <img 
                              src={instagramIcon} 
                              alt="Instagram"
                              className=" object-contain"
                            />
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-white text-lg">
                            {highlight.user.name}
                          </p>
                          <p className="text-sm text-white/80">
                            {highlight.location}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-[20.36px] h-[20.36px] fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-semibold text-white">
                          {highlight.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: 25% + 75% */}
          <div className="flex gap-6">
            {socialHighlights.slice(2, 4).map((highlight, index) => (
              <div
                key={highlight.id}
 
                className={cardWidths[index + 2]}
              >
                <div className="overflow-hidden  cursor-pointer relative min-h-[352px] rounded-[40px] ">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${backgroundImages[index + 2]})`,
                    }}
                  />
                  {/* Progressive blur overlay */}
                  <div className="absolute inset-0 p-4 flex flex-col justify-end overflow-hidden">
                    {/* Background darkening gradient */}
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.32) 100%)',
                        clipPath: 'polygon(0 54.67%, 100% 54.67%, 100% 100%, 0 100%)',
                      }}
                    />
                    {/* Progressive blur effect - extends beyond bottom for smooth fade */}
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
                    <div className="relative z-10 flex justify-between">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="relative size-[49px]">
                          <div className="size-[49px] rounded-[8px] border border-white/60 overflow-hidden bg-gray-200">
                            <img 
                              src={`https://i.pravatar.cc/150?img=${highlight.id}`}
                              alt={highlight.user.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(highlight.user.name)}&background=random&size=49`
                              }}
                            />
                          </div>
                          {/* Instagram icon circle */}
                          <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center z-20">
                            <img 
                              src={instagramIcon} 
                              alt="Instagram"
                              className=" object-contain"
                            />
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-white text-lg">
                            {highlight.user.name}
                          </p>
                          <p className="text-sm text-white/80">
                            {highlight.location}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-[20.36px] h-[20.36px] fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-semibold text-white">
                          {highlight.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 3: 75% + 25% */}
          <div className="flex gap-6">
            {socialHighlights.slice(4, 6).map((highlight, index) => (
              <div
                key={highlight.id}

                className={cardWidths[index + 4]}
              >
                <div className="overflow-hidden  cursor-pointer relative min-h-[352px] rounded-[40px] ">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${backgroundImages[index + 4]})`,
                    }}
                  />
                  {/* Progressive blur overlay */}
                  <div className="absolute inset-0 p-4 flex flex-col justify-end overflow-hidden">
                    {/* Background darkening gradient */}
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.32) 100%)',
                        clipPath: 'polygon(0 54.67%, 100% 54.67%, 100% 100%, 0 100%)',
                      }}
                    />
                    {/* Progressive blur effect - extends beyond bottom for smooth fade */}
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
                    <div className="relative z-10 flex justify-between">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="relative size-[49px]">
                          <div className="size-[49px] rounded-[8px] border border-white/60 overflow-hidden bg-gray-200">
                            <img 
                              src={`https://i.pravatar.cc/150?img=${highlight.id}`}
                              alt={highlight.user.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(highlight.user.name)}&background=random&size=49`
                              }}
                            />
                          </div>
                          {/* Instagram icon circle */}
                          <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center z-20">
                            <img 
                              src={instagramIcon} 
                              alt="Instagram"
                              className=" object-contain"
                            />
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-white text-lg">
                            {highlight.user.name}
                          </p>
                          <p className="text-sm text-white/80">
                            {highlight.location}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-[20.36px] h-[20.36px] fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-semibold text-white">
                          {highlight.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>
  )
}

