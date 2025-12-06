// Google Places API service to fetch real locations in Addis Ababa

// Google Places API Key
export const GOOGLE_PLACES_API_KEY = "AIzaSyBZEystX9mqDYPCkLCJ46AqouQdzPWhmqk"

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

// New Places API (New) response structure
interface NewPlacesResponse {
  places: Array<{
    id: string
    displayName: {
      text: string
    }
    location: {
      latitude: number
      longitude: number
    }
    types: string[]
    rating?: number
    userRatingCount?: number
    formattedAddress?: string
  }>
}



// Addis Ababa coordinates
const ADDIS_ABABA_LAT = 9.1450
const ADDIS_ABABA_LNG = 38.7617

export const fetchPlacesByFilter = async (
  filterName: string,
  apiKey?: string
): Promise<GooglePlace[]> => {
  
  try {
    // Use Places API (New) - Text Search
    const query = getSearchQuery(filterName)
    const url = `https://places.googleapis.com/v1/places:searchText`
    
    // Build query with type-specific search terms
    const searchQuery = `${query} in Addis Ababa, Ethiopia`
    
    // Use provided API key or fall back to default
    const key = apiKey || GOOGLE_PLACES_API_KEY

    const requestBody = {
      textQuery: searchQuery,
      maxResultCount: 20,
      locationBias: {
        circle: {
          center: {
            latitude: ADDIS_ABABA_LAT,
            longitude: ADDIS_ABABA_LNG
          },
          radius: 15000.0 // 15km in meters
        }
      }
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': key,
        'X-Goog-FieldMask': 'places.id,places.displayName,places.location,places.types,places.rating,places.userRatingCount,places.formattedAddress'
      },
      body: JSON.stringify(requestBody)
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error('Google Places API (New) error:', response.status, errorData)
      
      if (response.status === 403 || response.status === 400) {
        const errorMessage = errorData?.error?.message || 'API access denied'
        const activationUrl = errorData?.error?.details?.[0]?.metadata?.activationUrl
        
        console.error('Places API (New) Error:', errorMessage)
        
        if (activationUrl) {
          console.error(`Enable Places API (New) here: ${activationUrl}`)
          // Throw error with helpful message for UI display
          throw new Error(`Places API (New) is not enabled. Please enable it in Google Cloud Console: ${activationUrl}`)
        } else {
          throw new Error(`Places API (New) Error: ${errorMessage}. Please enable Places API (New) in Google Cloud Console.`)
        }
      }
      return []
    }

    const data: NewPlacesResponse = await response.json()

    console.log('Google Places API (New) response:', { placesCount: data.places?.length || 0 })

    if (data.places && data.places.length > 0) {
      // Convert new API format to our GooglePlace format
      const results: GooglePlace[] = data.places.map(place => ({
        place_id: place.id,
        name: place.displayName.text,
        geometry: {
          location: {
            lat: place.location.latitude,
            lng: place.location.longitude
          }
        },
        types: place.types || [],
        rating: place.rating,
        user_ratings_total: place.userRatingCount,
        formatted_address: place.formattedAddress
      }))

      console.log(`Successfully fetched ${results.length} places using Places API (New)`)
      return results
    } else {
      console.warn('No results found for query:', searchQuery)
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

