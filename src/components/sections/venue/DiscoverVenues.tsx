import { SectionHeader } from "@/components/common/SectionHeader";
import { venues } from "@/data/venues";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const DiscoverVenues: React.FC = () => {
    const navigate = useNavigate();
    return(
     <section className="py-10 md:py-[60px] px-6 md:px-12 lg:px-[120px]">
          <SectionHeader
            title="Discover Venues in Addis Ababa"
            description="Addis Ababa is Africa's welcoming meetings hub — a city built for global connections, cultural immersion and high-impact events."
          />
          
          {/* Mobile: Horizontal scroll */}
          <div className="flex gap-4 overflow-x-auto scrollbar-hide -mx-6 px-6 md:hidden mt-8">
            {venues.map((venue) => (
              <div
                key={venue.id}
                className="shrink-0 w-[342px] h-[400px]"
              >
                <div className="overflow-hidden cursor-pointer relative w-full h-full rounded-3xl group">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${venue.image})`,
                    }}
                  />
                  {/* Progressive blur overlay */}
                  <div className="absolute inset-0 p-4 flex flex-col justify-end overflow-hidden">
                    {/* Background darkening gradient */}
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)',
                        clipPath: 'polygon(0 47.65%, 100% 47.65%, 100% 100%, 0 100%)',
                      }}
                    />
                    {/* Progressive blur effect - starts at 47.65% with 0 blur, ends at 100% with 24px blur */}
                    <div 
                      className="absolute"
                      style={{
                        top: '47.65%',
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backdropFilter: 'blur(24px)',
                        WebkitBackdropFilter: 'blur(24px)',
                        maskImage: 'linear-gradient(180deg, transparent 0%, transparent 0%, rgba(255, 255, 255, 0.1) 5%, rgba(255, 255, 255, 0.3) 15%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.85) 70%, rgba(255, 255, 255, 0.95) 85%, white 95%, white 100%)',
                        WebkitMaskImage: 'linear-gradient(180deg, transparent 0%, transparent 0%, rgba(255, 255, 255, 0.1) 5%, rgba(255, 255, 255, 0.3) 15%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.85) 70%, rgba(255, 255, 255, 0.95) 85%, white 95%, white 100%)',
                      }}
                    />
                    {/* Content */}
                    <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <h3 className="font-semibold text-white text-xl mb-2">
                        {venue.title}
                      </h3>
                      <p className="text-sm text-white/90 leading-relaxed mb-3">
                        {venue.description}
                      </p>
                      <Button
                        onClick={() => navigate(`/venue/${venue.id}`)}
                        className="bg-white text-text-dark-100 text-sm px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        View Detail
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Grid layout - 2 rows, 3 columns */}
          <div className="hidden md:grid md:grid-cols-3 md:gap-6 mt-8">
            {venues.map((venue) => (
              <div
                key={venue.id}
                className="overflow-hidden cursor-pointer relative min-h-[400px] rounded-3xl group"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${venue.image})`,
                  }}
                />
                {/* Progressive blur overlay */}
                <div className="absolute inset-0 p-4 flex flex-col justify-end overflow-hidden">
                  {/* Background darkening gradient */}
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)',
                      clipPath: 'polygon(0 47.65%, 100% 47.65%, 100% 100%, 0 100%)',
                    }}
                  />
                  {/* Progressive blur effect - starts at 47.65% with 0 blur, ends at 100% with 24px blur */}
                  <div 
                    className="absolute"
                    style={{
                      top: '47.65%',
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backdropFilter: 'blur(24px)',
                      WebkitBackdropFilter: 'blur(24px)',
                      maskImage: 'linear-gradient(180deg, transparent 0%, transparent 0%, rgba(255, 255, 255, 0.1) 5%, rgba(255, 255, 255, 0.3) 15%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.85) 70%, rgba(255, 255, 255, 0.95) 85%, white 95%, white 100%)',
                      WebkitMaskImage: 'linear-gradient(180deg, transparent 0%, transparent 0%, rgba(255, 255, 255, 0.1) 5%, rgba(255, 255, 255, 0.3) 15%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.85) 70%, rgba(255, 255, 255, 0.95) 85%, white 95%, white 100%)',
                    }}
                  />
                  {/* Content */}
                  <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <h3 className="font-bold text-white text-lg mb-2">
                      {venue.title}
                    </h3>
                    <p className="text-xs text-white/80 leading-relaxed mb-3">
                      {venue.description}
                    </p>
                    <Button
                      onClick={() => navigate(`/venue/${venue.id}`)}
                      className="bg-theme-primary text-white text-sm px-4 py-3 rounded-[105px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      View Detail
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </section>
    )
};
export default DiscoverVenues;
