import { Sun, Cloud, Sunrise, Sunset, Thermometer, Droplet } from "lucide-react"

const seasons = [
  {
    name: "Tsedey (Spring)",
    months: "September to November",
    icon: Sun,
  },
  {
    name: "Bega (Summer)",
    months: "December to February",
    icon: Sun,
  },
  {
    name: "Belg (Fall)",
    months: "March to May",
    icon: Sun,
  },
  {
    name: "Kiremt (Winter)",
    months: "June to August",
    icon: Cloud,
  },
]

const weatherData = {
  condition: "Sunny",
  temperature: "33.1",
  sunrise: "06:30",
  sunset: "07:00",
  low: "26.3",
  high: "31.7",
  humidity: "56",
}

export function WeatherInAddisAbaba() {
  return (
    <section className="py-[60px] px-4 sm:px-6 lg:px-[120px] bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center mb-10 gap-2">
          <h2 className="text-2xl sm:text-3xl font-semibold text-text-dark-100">
            The Weather In Addis Ababa
          </h2>
          <p className="text-sm sm:text-base text-text-dark-80 max-w-2xl">
            Experience sunny days and cool breezes in the capital city, where the weather is pleasant year-round.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-xl font-semibold text-text-dark-100 text-center mb-6">
            The Four Seasons Of Ethiopia
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {seasons.map((season, index) => {
              const IconComponent = season.icon
              return (
                <div
                  key={index}
                  className="bg-accent-80 rounded-2xl p-6 flex flex-col items-center text-center gap-3"
                >
                  <div className="size-12 rounded-full bg-theme-primary/10 flex items-center justify-center">
                    <IconComponent className="size-6 text-theme-primary" />
                  </div>
                  <h4 className="text-base font-semibold text-text-dark-100">
                    {season.name}
                  </h4>
                  <p className="text-sm text-text-dark-80">
                    {season.months}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Current Weather Display */}
        <div className="bg-accent-80 rounded-2xl p-6 sm:p-8 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 sm:gap-6">
            {/* Condition */}
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <Sun className="size-5 text-theme-primary" />
                <Cloud className="size-5 text-text-dark-60" />
              </div>
              <span className="text-sm sm:text-base font-semibold text-text-dark-100">
                {weatherData.condition}
              </span>
            </div>

            {/* Temperature */}
            <div className="flex flex-col items-center gap-2">
              <span className="text-2xl sm:text-3xl font-bold text-text-dark-100">
                {weatherData.temperature}
              </span>
              <span className="text-xs sm:text-sm text-text-dark-80">Celsius</span>
            </div>

            {/* Sunrise */}
            <div className="flex flex-col items-center gap-2">
              <Sunrise className="size-5 text-theme-primary" />
              <span className="text-sm sm:text-base font-semibold text-text-dark-100">
                {weatherData.sunrise}
              </span>
              <span className="text-xs text-text-dark-80">Sunrise</span>
            </div>

            {/* Sunset */}
            <div className="flex flex-col items-center gap-2">
              <Sunset className="size-5 text-theme-primary" />
              <span className="text-sm sm:text-base font-semibold text-text-dark-100">
                {weatherData.sunset}
              </span>
              <span className="text-xs text-text-dark-80">Sunset</span>
            </div>

            {/* Low */}
            <div className="flex flex-col items-center gap-2">
              <Thermometer className="size-5 text-theme-secondary" />
              <span className="text-sm sm:text-base font-semibold text-text-dark-100">
                {weatherData.low} Low
              </span>
            </div>

            {/* High */}
            <div className="flex flex-col items-center gap-2">
              <Thermometer className="size-5 text-theme-secondary" />
              <span className="text-sm sm:text-base font-semibold text-text-dark-100">
                {weatherData.high} High
              </span>
            </div>

            {/* Humidity */}
            <div className="flex flex-col items-center gap-2 col-span-2 sm:col-span-3 lg:col-span-1">
              <Droplet className="size-5 text-theme-secondary" />
              <span className="text-sm sm:text-base font-semibold text-text-dark-100">
                {weatherData.humidity}% Humidity
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

