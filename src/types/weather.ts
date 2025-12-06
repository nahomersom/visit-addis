export interface WeatherData {
  condition: string
  temperature: string
  sunrise: string
  sunset: string
  low: string
  high: string
  humidity: string
  icon?: string
}

export interface OpenWeatherResponse {
  weather: Array<{
    main: string
    description: string
    icon: string
  }>
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    humidity: number
  }
  sys: {
    sunrise: number
    sunset: number
  }
  name: string
}

