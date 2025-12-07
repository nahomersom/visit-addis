import { motion } from "framer-motion"
import { useState, useEffect, useCallback, useMemo } from "react"
import { MapPin, Star, Loader2 } from "lucide-react"
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api"
import { ADDIS_ABABA_CENTER } from "@/config/constants"
import { LOCATION_FILTERS } from "./ExploreLocationsIcons"
import { fetchPlacesByFilter, convertGooglePlaceToLocation, GOOGLE_PLACES_API_KEY } from "@/services/googlePlacesService"
import type { GooglePlace } from "@/services/googlePlacesService"

interface ExploreLocationsProps {
  fullWidth?: boolean
  isForPlanyourTrp?: boolean
}

// Google Maps container style
const mapContainerStyle = {
  width: '100%',
  height: '100%'
}

// Get marker color based on filter type
const getMarkerColor = (filterName: string): string => {
  const colors: Record<string, string> = {
    "Eatery": "#ef4444",
    "Museums": "#8b5cf6",
    "Hiking": "#10b981",
    "Shopping": "#f59e0b",
    "Entertainment": "#ec4899"
  }
  return colors[filterName] || "#6b7280"
}

export function ExploreLocations({ fullWidth = false, isForPlanyourTrp = false }: ExploreLocationsProps) {
  const [activeFilter, setActiveFilter] = useState("Eatery")
  const [places, setPlaces] = useState<GooglePlace[]>([])
  const [loading, setLoading] = useState(false)
  const [selectedPlace, setSelectedPlace] = useState<GooglePlace | null>(null)
  const [map, setMap] = useState<google.maps.Map | null>(null)
  const [mapError, setMapError] = useState<string | null>(null)
  const [placesError, setPlacesError] = useState<string | null>(null)

  // Get Google Maps API key from environment variable or use default
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || GOOGLE_PLACES_API_KEY

  // Fetch places when filter changes
  useEffect(() => {
    const loadPlaces = async () => {
      setLoading(true)
      setPlacesError(null)
      try {
        const fetchedPlaces = await fetchPlacesByFilter(activeFilter, apiKey)
        console.log(`Loaded ${fetchedPlaces.length} places for filter: ${activeFilter}`, fetchedPlaces)
        setPlaces(fetchedPlaces)
        setSelectedPlace(null)
      } catch (error) {
        console.error("Error loading places:", error)
        const errorMessage = error instanceof Error ? error.message : 'Failed to load places'
        setPlacesError(errorMessage)
        setPlaces([])
      } finally {
        setLoading(false)
      }
    }

    loadPlaces()
  }, [activeFilter, apiKey])

  // Fit bounds when places change
  const onMapLoad = useCallback((map: google.maps.Map) => {
    setMap(map)
    setMapError(null) // Clear error on successful load
  }, [])

  useEffect(() => {
    if (map && places.length > 0) {
      const bounds = new google.maps.LatLngBounds()
      places.forEach(place => {
        if (place.geometry?.location) {
        bounds.extend({
          lat: place.geometry.location.lat,
          lng: place.geometry.location.lng
        })
        }
      })
      if (!bounds.isEmpty()) {
        // Properly add padding to fitBounds depending on the Maps JS API version
        // @ts-ignore: padding is supported in Maps JavaScript API v3.22+
        map.fitBounds(bounds, { padding: { top: 50, right: 50, bottom: 50, left: 50 } })
    }
    } else if (map && places.length === 0 && !loading) {
      // If no places, center on Addis Ababa
      map.setCenter({ lat: ADDIS_ABABA_CENTER[0], lng: ADDIS_ABABA_CENTER[1] })
      map.setZoom(13)
    }
  }, [map, places, loading])

  const locations = useMemo(() => {
    return places.map(place => convertGooglePlaceToLocation(place, activeFilter))
  }, [places, activeFilter])

  const gradientStyle = fullWidth ? {
    background: `radial-gradient(75.26% 109.29% at 50% 50%, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%), linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.2) 16%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.2) 84%, #FFFFFF 100%)`
  } : {}

  return (
    <section className="py-[60px]">
      {/* Title and Description - Always with padding */}
      <div className="max-w-full px-6 md:px-[48px] lg:px-[120px]">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          
          <div
          className="flex flex-col lg:flex-row lg:justify-between gap-2  "
        >
          <div className="flex flex-col gap-2">
          <h2 className={`text-2xl font-semibold ${isForPlanyourTrp ? 'self-start ' : 'self-center'} md:self-start `}>
          Explore Locations
          </h2>
          <span className={`hidden md:block lg:hidden text-sm ${isForPlanyourTrp ? 'px-0' : 'px-6'} md:px-0 ${isForPlanyourTrp ? 'text-start' : 'text-center'}md:text-start text-[#758886] ${isForPlanyourTrp ? 'self-start lg:self-center' : (fullWidth ? 'self-center' : 'lg:self-end')}`}>
            Discover the city's must-see landmarks, from ancient treasures to modern cultural hubs.
          </span>
            {/* Filters */}
            <div className="flex gap-3 overflow-x-scroll scrollbar-hide -mx-6 md:-mx-[10px] lg:mx-0">
              <div className="pl-6 md:pl-0 flex gap-3">
                {LOCATION_FILTERS.map((filter) => {
                  const isActive = activeFilter === filter.name
                  const IconComponent = filter.Icon
                  return (
                    <button
                      key={filter.name}
                      onClick={() => setActiveFilter(filter.name)}
                      className={`pl-1.5 pr-6 py-2 rounded-[100px] font-medium transition-colors flex items-center gap-2 cursor-pointer shrink-0 ${
                        isActive
                          ? "bg-theme-secondary text-white"
                          : "bg-[#f5f5f5] text-text-dark-80 text-sm font-medium"
                      }`}
                    >
                      <div className="size-11 rounded-full bg-white flex items-center justify-center">
                        <IconComponent fill={isActive ? '#1EAA9D' : '#000000'} />
                      </div>
                      {filter.name}
                    </button>
                  )
                })}
              </div>
              <div className="pr-6 md:pr-0 shrink-0"></div>
            </div>
          </div>
          
          <span className={`md:hidden lg:block text-sm ${isForPlanyourTrp ? 'px-0' : 'px-6'} md:px-0 ${isForPlanyourTrp ? 'text-start' : 'text-center'}md:text-start text-[#758886] ${isForPlanyourTrp ? 'self-start' : (fullWidth ? 'self-center' : 'lg:self-end')}`}>
            Discover the city's must-see landmarks, from ancient treasures to modern cultural hubs.
          </span>
        </div>
          
        

        
        </motion.div>
      </div>

      {/* Map Container with gradient when fullWidth */}
          <div className={`py-4 md:py-6 lg:py-4 ${fullWidth ? 'relative' : 'px-6 md:px-[48px] lg:px-[120px]'}`}
           style={fullWidth ? gradientStyle : {}}
          >

    
<div

  className="relative h-[244px] md:h-[345px] lg:h-[500px] rounded-2xl overflow-hidden"
>
  {/* Gradient overlay - only when fullWidth */}
  {fullWidth && (
    <div
      className="absolute inset-0 pointer-events-none z-5"
      style={{
        background: `
          radial-gradient(75.26% 109.29% at 50% 50%, rgba(255,255,255,0) 0%, #FFFFFF 100%),
          linear-gradient(
            180deg, 
            #FFFFFF 0%, 
            rgba(255,255,255,0.2) 16%, 
            rgba(255,255,255,0) 50%, 
            rgba(255,255,255,0.2) 84%, 
            #FFFFFF 100%
          )
        `,
      }}
    />
  )}

  <LoadScript 
    googleMapsApiKey={apiKey}
    onError={(error) => {
      console.error('Google Maps API Error:', error)
      setMapError('Unable to load Google Maps. Please check API key configuration.')
    }}
  >
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={{ lat: ADDIS_ABABA_CENTER[0], lng: ADDIS_ABABA_CENTER[1] }}
        zoom={13}
        onLoad={onMapLoad}
        options={{
          zoomControl: true,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: true,
        }}
      >
        {mapError && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/90 z-20">
            <div className="text-center p-6 max-w-md">
              <p className="text-red-600 font-semibold mb-2">Google Maps Error</p>
              <p className="text-sm text-gray-600 mb-4">{mapError}</p>
              <p className="text-xs text-gray-500">
                Please ensure the API key has Maps JavaScript API enabled and proper domain restrictions configured in Google Cloud Console.
              </p>
            </div>
          </div>
        )}
        {placesError && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/90 z-20">
            <div className="text-center p-6 max-w-md">
              <p className="text-red-600 font-semibold mb-2">Places API Error</p>
              <p className="text-sm text-gray-600 mb-4">{placesError}</p>
              <p className="text-xs text-gray-500 mt-4">
                After enabling the API, wait a few minutes for changes to propagate, then refresh the page.
              </p>
            </div>
          </div>
        )}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-10">
            <div className="flex flex-col items-center gap-2">
              <Loader2 className="w-8 h-8 animate-spin text-theme-secondary" />
              <span className="text-sm text-gray-600">Loading places...</span>
            </div>
          </div>
        )}

        {locations.length > 0 && locations.map((location, index) => {
          if (!location || !location.lat || !location.lng) {
            console.warn('Invalid location data:', location)
            return null
          }

          const markerColor = getMarkerColor(activeFilter)
          const svgIcon = `
            <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="14" fill="${markerColor}" stroke="white" stroke-width="2"/>
              <circle cx="16" cy="16" r="6" fill="white"/>
            </svg>
          `
          
          const iconConfig: google.maps.Icon = {
            url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svgIcon)}`,
            scaledSize: new google.maps.Size(32, 32),
            anchor: new google.maps.Point(16, 32),
          }
          
          return (
            <Marker
              key={location.placeId || `marker-${index}`}
              position={{ lat: location.lat, lng: location.lng }}
              onClick={() => {
                const place = places[index]
                if (place) {
                  console.log('Marker clicked:', place)
                  setSelectedPlace(place)
                }
              }}
              icon={iconConfig}
              title={location.name}
            />
          )
        })}

        {selectedPlace && (
          <InfoWindow
            position={{
              lat: selectedPlace.geometry.location.lat,
              lng: selectedPlace.geometry.location.lng
            }}
            onCloseClick={() => setSelectedPlace(null)}
          >
            <div className="p-2 min-w-[200px]">
              <h3 className="font-semibold text-sm mb-1">{selectedPlace.name}</h3>
              {selectedPlace.rating && (
                <div className="flex items-center gap-1 text-xs text-gray-600 mb-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span>{selectedPlace.rating.toFixed(1)}</span>
                  {selectedPlace.user_ratings_total && (
                    <span className="text-gray-400">({selectedPlace.user_ratings_total})</span>
                  )}
                </div>
              )}
              {selectedPlace.formatted_address && (
                <div className="flex items-start gap-1 text-xs text-gray-500 mt-2">
                  <MapPin className="w-3 h-3 mt-0.5 shrink-0" />
                  <span>{selectedPlace.formatted_address}</span>
                </div>
              )}
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
</div>

      </div>
    </section>
  )
}

