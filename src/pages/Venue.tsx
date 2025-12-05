import ThingToDoHeroBgImage from "@/assets/images/ThingToDoHeroBgImage.png"
import SharedHero from "@/components/sections/SharedHero";
import DiscoverVenues from "@/components/sections/venue/discoverVenues";
import { SubscribeBanner } from "@/components/sections/venue/subscirbeBanner";

export default function Venue() {
  return (
      <main className="min-h-screen">
       <SharedHero 
        image={ThingToDoHeroBgImage}
        title={
          <>
            <span className="text-white"> Venues in <span className="text-theme-primary">Addis Ababa</span> </span>
            <div className="text-white">Spaces That Bring Ideas to Life</div>
          </>
        }
        description="From modern convention centres and luxury hotels to historic palaces, creative studios and skyline event spaces, Addis Ababa offers versatile venues for every format. Explore capacity, features, locations, and downloadable floor plans to find the
perfect match for your event.
"
      />
      <DiscoverVenues/>
      <SubscribeBanner
      />
    </main>
  
  )
}

