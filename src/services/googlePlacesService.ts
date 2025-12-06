// Google Places API service to fetch real locations in Addis Ababa

export interface GooglePlace {
  place_id: string
  name: string
  geometry: {
    location: {
      lat: number
      lng: number
    }
  }
  types: string[]
  rating?: number
  user_ratings_total?: number
  formatted_address?: string
}

export interface GooglePlacesResponse {
  results: GooglePlace[]
  status: string
}

// Map filter types to Google Places API types
const FILTER_TO_PLACE_TYPES: Record<string, string[]> = {
  "Eatery": ["restaurant", "food", "cafe", "meal_takeaway", "bakery"],
  "Museums": ["museum", "art_gallery"],
  "Hiking": ["park", "tourist_attraction", "natural_feature"],
  "Shopping": ["shopping_mall", "store", "supermarket", "clothing_store"],
  "Entertainment": ["night_club", "bar", "movie_theater", "amusement_park", "stadium"]
}

// Addis Ababa coordinates
const ADDIS_ABABA_LAT = 9.1450
const ADDIS_ABABA_LNG = 38.7617

export const fetchPlacesByFilter = async (
  filterName: string,
  apiKey: string
): Promise<GooglePlace[]> => {
  const placeTypes = FILTER_TO_PLACE_TYPES[filterName] || ["establishment"]
  
  try {
    // Use Text Search API with location bias for Addis Ababa
    const query = getSearchQuery(filterName)
    const url = `https://maps.googleapis.com/maps/api/place/textsearch/json`
    
    // Build query with type-specific search terms
    const searchQuery = `${query} in Addis Ababa, Ethiopia`
    
    const params = new URLSearchParams({
      query: searchQuery,
      location: `${ADDIS_ABABA_LAT},${ADDIS_ABABA_LNG}`,
      radius: '15000', // 15km radius
      key: apiKey
    })

    const response = await fetch(`${url}?${params.toString()}`)
    const data: GooglePlacesResponse = await response.json()

    if (data.status === 'OK' && data.results) {
      return data.results.slice(0, 20) // Limit to 20 results
    } else if (data.status === 'ZERO_RESULTS') {
      return []
    } else {
      console.error('Google Places API error:', data.status)
      return []
    }
  } catch (error) {
    console.error('Error fetching places:', error)
    return []
  }
}

const getSearchQuery = (filterName: string): string => {
  const queries: Record<string, string> = {
    "Eatery": "restaurants",
    "Museums": "museums",
    "Hiking": "hiking trails parks",
    "Shopping": "shopping malls stores",
    "Entertainment": "entertainment venues bars"
  }
  return queries[filterName] || filterName.toLowerCase()
}

// Convert Google Place to our Location format
export const convertGooglePlaceToLocation = (place: GooglePlace, type: string): {
  name: string
  type: string
  lat: number
  lng: number
  placeId?: string
  rating?: number
  address?: string
} => {
  return {
    name: place.name,
    type: type.toLowerCase(),
    lat: place.geometry.location.lat,
    lng: place.geometry.location.lng,
    placeId: place.place_id,
    rating: place.rating,
    address: place.formatted_address
  }
}

