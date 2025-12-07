import { useQuery } from "@tanstack/react-query"
import { fetchWeatherData } from "@/services/weatherService"
import type { WeatherData } from "@/types/weather"

export const useWeather = () => {
  return useQuery<WeatherData>({
    queryKey: ["weather", "addis-ababa"],
    queryFn: fetchWeatherData,
    staleTime: 1000 * 60 * 10, // 10 minutes - weather doesn't change that frequently
    refetchOnWindowFocus: false,
    retry: 2,
  })
}

