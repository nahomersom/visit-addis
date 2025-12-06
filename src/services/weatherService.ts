import type { WeatherData } from "@/types/weather"

// Addis Ababa coordinates
const ADDIS_ABABA_LAT = 9.1450
const ADDIS_ABABA_LNG = 38.7617

// OpenWeatherMap API - Free tier (no API key required for basic usage, but better with key)
// Using openweathermap.org free API
// const OPENWEATHER_API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY || ""
// const OPENWEATHER_BASE_URL = "https://api.openweathermap.org/data/2.5"

// Fallback: Using a free weather API that doesn't require key
// We'll use open-meteo.com which is completely free and doesn't require API key
const OPEN_METEO_BASE_URL = "https://api.open-meteo.com/v1/forecast"

/**
 * Fetch weather data from Open-Meteo (free, no API key required)
 */
export const fetchWeatherData = async (): Promise<WeatherData> => {
  try {
    // Open-Meteo API - completely free, no API key needed
    const url = `${OPEN_METEO_BASE_URL}?latitude=${ADDIS_ABABA_LAT}&longitude=${ADDIS_ABABA_LNG}&current=temperature_2m,relative_humidity_2m,weather_code&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=Africa/Addis_Ababa&forecast_days=1`
    
    const response = await fetch(url)
    
    if (!response.ok) {
      throw new Error(`Weather API error: ${response.status}`)
    }
    
    const data = await response.json()
    
    // Format the data to match our WeatherData interface
    const current = data.current
    const daily = data.daily
    
    // Get weather condition from weather code
    const condition = getWeatherCondition(current.weather_code)
    
    // Format temperature (Open-Meteo returns in Celsius by default)
    const temperature = current.temperature_2m.toFixed(1)
    const high = daily.temperature_2m_max[0].toFixed(1)
    const low = daily.temperature_2m_min[0].toFixed(1)
    const humidity = Math.round(current.relative_humidity_2m).toString()
    
    // Format sunrise and sunset times
    const sunrise = formatTime(daily.sunrise[0])
    const sunset = formatTime(daily.sunset[0])
    
    return {
      condition,
      temperature,
      sunrise,
      sunset,
      low,
      high,
      humidity,
    }
  } catch (error) {
    console.error("Error fetching weather data:", error)
    // Return fallback data on error
    return getFallbackWeatherData()
  }
}

/**
 * Get weather condition from WMO weather code
 * https://open-meteo.com/en/docs
 */
const getWeatherCondition = (code: number): string => {
  const conditions: Record<number, string> = {
    0: "Clear",
    1: "Mainly Clear",
    2: "Partly Cloudy",
    3: "Overcast",
    45: "Foggy",
    48: "Depositing Rime Fog",
    51: "Light Drizzle",
    53: "Moderate Drizzle",
    55: "Dense Drizzle",
    56: "Light Freezing Drizzle",
    57: "Dense Freezing Drizzle",
    61: "Slight Rain",
    63: "Moderate Rain",
    65: "Heavy Rain",
    66: "Light Freezing Rain",
    67: "Heavy Freezing Rain",
    71: "Slight Snow",
    73: "Moderate Snow",
    75: "Heavy Snow",
    77: "Snow Grains",
    80: "Slight Rain Showers",
    81: "Moderate Rain Showers",
    82: "Violent Rain Showers",
    85: "Slight Snow Showers",
    86: "Heavy Snow Showers",
    95: "Thunderstorm",
    96: "Thunderstorm with Slight Hail",
    99: "Thunderstorm with Heavy Hail",
  }
  
  return conditions[code] || "Clear"
}

/**
 * Format ISO 8601 time string to HH:MM format
 */
const formatTime = (isoString: string): string => {
  const date = new Date(isoString)
  const hours = date.getHours().toString().padStart(2, "0")
  const minutes = date.getMinutes().toString().padStart(2, "0")
  return `${hours}:${minutes}`
}

/**
 * Fallback weather data in case API fails
 */
const getFallbackWeatherData = (): WeatherData => {
  return {
    condition: "Sunny",
    temperature: "22.0",
    sunrise: "06:30",
    sunset: "18:30",
    low: "15.0",
    high: "25.0",
    humidity: "60",
  }
}

