import { useWeather } from "@/hooks/useWeather"
import { Loader2 } from "lucide-react"
import springImage from "../../assets/images/spring.png"
import summerImage from "../../assets/images/summer.png"
import fallImage from "../../assets/images/fall.png"
import winterImage from "../../assets/images/winter.png"
import sunnyImage from "../../assets/images/sunny.png"
import thermometerIcon from "../../assets/icons/thermometer.svg"
import humidityIcon from "../../assets/icons/humidity.svg"
import sunriseIcon from "../../assets/icons/sunrise.svg"
import sunsetIcon from "../../assets/icons/sunset.svg"
import exploreBackground from "@/assets/images/exploreBackground.png"

const seasons = [
  {
    name: "Tsedey (Spring)",
    months: "September to November",
    image: springImage,
  },
  {
    name: "Bega (Summer)",
    months: "December to February",
    image: summerImage,
  },
  {
    name: "Belg (Fall)",
    months: "March to May",
    image: fallImage,
  },
  {
    name: "Kiremt (Winter)",
    months: "June to August",
    image: winterImage,
  },
]

// Get weather icon based on condition
const getWeatherIcon = (condition: string): string => {
  const lowerCondition = condition.toLowerCase()
  if (lowerCondition.includes("clear") || lowerCondition.includes("sunny")) {
    return sunnyImage
  }
  // You can add more conditions here for different weather icons
  return sunnyImage // Default to sunny
}

export function WeatherInAddisAbaba() {
  const { data: weatherData, isLoading, isError } = useWeather()
  
  // Fallback data if loading or error
  const displayData = weatherData || {
    condition: "Loading...",
    temperature: "--",
    sunrise: "--:--",
    sunset: "--:--",
    low: "--",
    high: "--",
    humidity: "--",
  }
  return (
    <section className="py-10 px-6 lg:py-[60px] lg:px-[120px] bg-white">
   
        <div className="flex flex-col items-center text-center mb-6 gap-1">
          <h2 className="text-2xl font-bold text-text-dark-100">
            <span className="text-theme-secondary">The Weather </span>In Addis Ababa
          </h2>
          <p className="text-sm text-text-dark-80 max-w-2xl">
          Discover the lively weather of Addis Ababa, where sunny days and cool breezes create ideal conditions for outdoor fun.
          </p>
        </div>

        <div className="space-y-4 mb-6">
          <h3 className="text-sm font-medium text-text-dark-100 text-center">
            The Four Seasons Of Ethiopia
          </h3>
          <div className="grid grid-cols-2  md:grid-cols-4 gap-2 lg:gap-4">
            {seasons.map((season, index) => {
              return (
                <div
                  key={index}
                  className=" rounded-2xl p-4 flex flex-col items-center text-center gap-2 border border-accent-100 min-h-[129px]"
                >
                    <img 
                      src={season.image} 
                      alt={season.name}
                      className="size-10 object-contain"
                    />
                  <h4 className="text-sm md:text-base font-semibold text-text-dark-100">
                    {season.name}
                  </h4>
                  <p className="text-xs md:text-sm text-text-dark-80">
                    {season.months}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Current Weather Display */}
        <div 
          className="bg-accent-80 rounded-2xl p-4 w-full relative overflow-hidden lg:h-52 h-auto"
          style={{
            backgroundImage: `url(${exploreBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div 
            className="absolute inset-0 bg-accent-80"
            style={{ opacity: 0.8 }}
          />
          <div className="relative z-10 flex flex-col md:flex-row md:flex-wrap items-center gap-2">
            {isLoading ? (
              <div className="flex items-center justify-center w-full py-8">
                <Loader2 className="w-8 h-8 animate-spin text-theme-secondary" />
              </div>
            ) : isError ? (
              <div className="flex items-center justify-center w-full py-8">
                <p className="text-sm text-red-600">Failed to load weather data</p>
              </div>
            ) : (
              <>
                {/* Condition */}
                <div className="flex justify-center gap-8 items-center bg-theme-white/40 rounded-2xl w-full lg:min-w-[500px] lg:w-auto  p-6 md:h-full h-auto">
                  <div className="flex flex-col items-center justify-center gap-1 ">
                    <span className=" md:text-2xl font-bold text-text-dark-100">
                      {displayData.condition}
                    </span>
                    <span className="text-xs md:text-base text-text-dark-80">Now</span>
                  </div>
                  <img 
                    src={getWeatherIcon(displayData.condition)} 
                    alt={displayData.condition}
                    className="md:w-[131px] md:h-32 w-20 h-20 object-contain"
                  />
                 
                  {/* Temperature */}
                  <div className="flex flex-col items-center gap-1 w-fit">
                    <span className="text-2xl font-bold text-text-dark-100">
                      {displayData.temperature}
                    </span>
                    <span className="md:text-base text-xs text-text-dark-80">Celsius</span>
                  </div>
                </div>
              </>
            )}

            {!isLoading && !isError && (
              <>
                {/* Sunrise and Sunset Row (Mobile) */}
                <div className="flex sm:hidden gap-2 w-full">
                  {/* Sunrise */}
                  <div className="flex flex-col items-center gap-2 flex-1 bg-white rounded-2xl p-6 justify-center">
                    <img 
                      src={sunriseIcon} 
                      alt="Sunrise"
                      className="size-[24px] md:size-10 object-contain"
                    />
                    <span className="text-sm font-medium md:text-lg md:font-semibold text-theme-secondary">
                      {displayData.sunrise}
                    </span>
                    <span className="text-xs md:text-sm text-text-dark-80">Sunrise</span>
                  </div>

                  {/* Sunset */}
                  <div className="flex flex-col items-center gap-2 flex-1 bg-white rounded-2xl p-6 justify-center">
                    <img 
                      src={sunsetIcon} 
                      alt="Sunset"
                      className="size-[24px] md:size-10 object-contain"
                    />
                    <span className="text-sm font-medium md:text-lg md:font-semibold text-theme-secondary">
                      {displayData.sunset}
                    </span>
                    <span className="text-xs md:text-sm text-text-dark-80">Sunset</span>
                  </div>
                </div>

                {/* Low, High, Humidity Row (Mobile) */}
                <div className="flex sm:hidden gap-2 w-full">
                  {/* Low */}
                  <div className="flex flex-col items-center gap-2 flex-1 bg-white rounded-2xl p-6 justify-center">
                    <img 
                      src={thermometerIcon} 
                      alt="Thermometer"
                      className="size-[24px] md:size-10 object-contain"
                    />
                    <span className="text-sm font-medium md:text-lg md:font-semibold text-theme-secondary">
                      {displayData.low}
                    </span>
                    <span className="text-xs md:text-sm text-text-dark-80">Low</span>
                  </div>

                  {/* High */}
                  <div className="flex flex-col items-center gap-2 flex-1 bg-white rounded-2xl p-6 justify-center">
                    <img 
                      src={thermometerIcon} 
                      alt="Thermometer"
                      className="size-[24px] md:size-10 object-contain"
                    />
                    <span className="text-sm font-medium md:text-lg md:font-semibold text-theme-secondary">
                      {displayData.high}
                    </span>
                    <span className="text-xs md:text-sm text-text-dark-80">High</span>
                  </div>

                  {/* Humidity */}
                  <div className="flex flex-col items-center gap-2 flex-1 bg-white rounded-2xl p-6 justify-center">
                    <img 
                      src={humidityIcon} 
                      alt="Humidity"
                      className="size-[24px] md:size-10 object-contain"
                    />
                    <span className="text-sm font-medium md:text-lg md:font-semibold text-theme-secondary">
                      {displayData.humidity}%
                    </span>
                    <span className="text-xs md:text-sm text-text-dark-80">Humidity</span>
                  </div>
                </div>

                {/* Desktop: Sunrise */}
                <div className="hidden sm:flex flex-col items-center gap-2 flex-1 max-w-[140px] bg-white rounded-2xl p-6 h-full justify-center">
                  <img 
                    src={sunriseIcon} 
                    alt="Sunrise"
                    className="size-10 object-contain"
                  />
                  <span className="text-lg font-semibold text-theme-secondary">
                    {displayData.sunrise}
                  </span>
                  <span className="text-sm text-text-dark-80">Sunrise</span>
                </div>

                {/* Desktop: Sunset */}
                <div className="hidden sm:flex flex-col items-center gap-2 flex-1 max-w-[140px] bg-white rounded-2xl p-6 h-full justify-center">
                  <img 
                    src={sunsetIcon} 
                    alt="Sunset"
                    className="size-10 object-contain"
                  />
                  <span className="text-lg font-semibold text-theme-secondary">
                    {displayData.sunset}
                  </span>
                  <span className="text-sm text-text-dark-80">Sunset</span>
                </div>

                {/* Desktop: Low */}
                <div className="hidden sm:flex flex-col items-center gap-2 flex-1 max-w-[140px] bg-white rounded-2xl p-6 h-full justify-center">
                  <img 
                    src={thermometerIcon} 
                    alt="Thermometer"
                    className="size-10 object-contain"
                  />
                  <span className="text-lg font-semibold text-theme-secondary">
                    {displayData.low}
                  </span>
                  <span className="text-sm text-text-dark-80">Low</span>
                </div>

                {/* Desktop: High */}
                <div className="hidden sm:flex flex-col items-center gap-2 flex-1 max-w-[140px] bg-white rounded-2xl p-6 h-full justify-center">
                  <img 
                    src={thermometerIcon} 
                    alt="Thermometer"
                    className="size-10 object-contain"
                  />
                  <span className="text-lg font-semibold text-theme-secondary">
                    {displayData.high}
                  </span>
                  <span className="text-sm text-text-dark-80">High</span>
                </div>

                {/* Desktop: Humidity */}
                <div className="hidden sm:flex flex-col items-center gap-2 flex-1 max-w-[140px] bg-white rounded-2xl p-6 h-full justify-center">
                  <img 
                    src={humidityIcon} 
                    alt="Humidity"
                    className="size-10 object-contain"
                  />
                  <span className="text-lg font-semibold text-theme-secondary">
                    {displayData.humidity}%
                  </span>
                  <span className="text-sm text-text-dark-80">Humidity</span>
                </div>
              </>
            )}
          </div>
        </div>
    </section>
  )
}

