import { Search, Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CompareHotelPrices() {
  return (
    <section className="py-[60px] px-4 sm:px-6 lg:px-[120px] bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center mb-10 gap-2">
          <h2 className="text-2xl sm:text-3xl font-semibold text-text-dark-100">
            Compare Hotel Prices
          </h2>
          <p className="text-sm sm:text-base text-text-dark-80 max-w-2xl">
            A Comprehensive Comparison of Prices Across Various Products and Services.
          </p>
        </div>

        <div className="bg-accent-80 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Destination */}
            <div className="flex-1 relative">
              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 size-5 text-text-dark-60" />
              <input
                type="text"
                placeholder="Destination"
                defaultValue="Addis Ababa, Ethiopia"
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-white border border-transparent focus:border-theme-primary focus:outline-none text-sm sm:text-base"
              />
            </div>

            {/* Check-in / Check-out */}
            <div className="flex-1 relative">
              <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 size-5 text-text-dark-60" />
              <input
                type="text"
                placeholder="Check-in - Check-out"
                defaultValue="Select Date"
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-white border border-transparent focus:border-theme-primary focus:outline-none text-sm sm:text-base"
              />
            </div>

            {/* Search Button */}
            <Button
              className="bg-theme-primary text-white px-6 sm:px-8 py-3 rounded-lg min-h-[50px] flex items-center justify-center gap-2 hover:bg-theme-primary/90"
            >
              <Search className="size-5" />
              <span className="text-sm sm:text-base">Search</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

