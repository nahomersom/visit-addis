import ExploreEvents from "@/components/events/EventMarker"
import EventsHero from "@/components/events/EventsHero"
import PastEventsHighlight from "@/components/events/EventsHighlight"
import FeaturedEvents from "@/components/events/FeaturedEvents"
import NewsletterBanner from "@/components/events/NewsletterBanner"
import UpComingEvents from "@/components/events/UpComingEvents"


const Events = () => {
  return (
    <main>
      <EventsHero />
      <UpComingEvents />
      <FeaturedEvents />
      <ExploreEvents />
      <NewsletterBanner />
      <PastEventsHighlight />
    </main>
  )
}

export default Events