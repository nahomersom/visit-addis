import { Modal } from "@/components/ui/modal"
import { X, Heart, Star } from "lucide-react"
import attractionImageOne from "@/assets/images/attractionImageOne.jpg"
import attractionImageTwo from "@/assets/images/attractionImageTwo.jpg"
import attractionImageThree from "@/assets/images/attractionImageThree.png"
import attractionImageFour from "@/assets/images/attractionImageFour.png"
import locationIcon from "@/assets/icons/location.svg"
import locationWhiteIcon from "@/assets/icons/locationWhite.svg"


interface Hotel {
  id: string
  name: string
  location: string
  rating: number
  price: number
  image: string
  amenities: string[]
}

interface HotelSearchResultsModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  resultCount?: number
}

// Mock hotel data
const mockHotels: Hotel[] = [
  {
    id: "1",
    name: "Sheraton Hotel",
    location: "Addis Ababa, Ethiopia",
    rating: 4.9,
    price: 2000,
    image: attractionImageOne,
    amenities: ["Dinner", "Breakfast", "WIFI"],
  },
  {
    id: "2",
    name: "Sheraton Hotel",
    location: "Addis Ababa, Ethiopia",
    rating: 4.9,
    price: 2000,
    image: attractionImageTwo,
    amenities: ["Dinner", "Breakfast", "WIFI"],
  },
  {
    id: "3",
    name: "Sheraton Hotel",
    location: "Addis Ababa, Ethiopia",
    rating: 4.9,
    price: 2000,
    image: attractionImageThree,
    amenities: ["Dinner", "Breakfast", "WIFI"],
  },
  {
    id: "4",
    name: "Sheraton Hotel",
    location: "Addis Ababa, Ethiopia",
    rating: 4.9,
    price: 2000,
    image: attractionImageFour,
    amenities: ["Dinner", "Breakfast", "WIFI"],
  },
  {
    id: "5",
    name: "Sheraton Hotel",
    location: "Addis Ababa, Ethiopia",
    rating: 4.9,
    price: 2000,
    image: attractionImageOne,
    amenities: ["Dinner", "Breakfast", "WIFI"],
  },
  {
    id: "6",
    name: "Sheraton Hotel",
    location: "Addis Ababa, Ethiopia",
    rating: 4.9,
    price: 2000,
    image: attractionImageTwo,
    amenities: ["Dinner", "Breakfast", "WIFI"],
  },
]

export function HotelSearchResultsModal({
  open,
  onOpenChange,
  resultCount = 24,
}: HotelSearchResultsModalProps) {
  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      className="min-w-full md:min-w-[700px] lg:min-w-[1000px] overflow-hidden rounded-4xl mb-4 md:mx-4 max-h-full md:max-h-[90vh] flex flex-col p-6md:p-[40px]"
      showCloseButton={false}
    >
      <div className="flex flex-col gap-6 flex-1 overflow-hidden">
        {/* Header */}
        <div className="flex items-start justify-between  shrink-0">
          <div>
            <h2 className=" md:text-2xl font-semibold text-white md:text-text-dark-100 mb-1">
              Hotels Found
            </h2>
            <p className="text-sm  text-white/80 md:text-text-dark-80">
              {resultCount} Results Near You
            </p>
          </div>
          
          {/* Close Button */}
          <button
            onClick={() => onOpenChange(false)}
            className="size-12 bg-black/6 rounded-[8px] backdrop-blur-sm border-[0.5px] border-white/40 md:border-white/10 flex items-center justify-center cursor-pointer "
          >
            <X className="h-5 w-5 text-[#929292]" />
          </button>
        </div>

        {/* Hotel Grid */}
        <div className="overflow-y-auto flex-1 scrollbar-hide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {mockHotels.map((hotel) => (
              <div
                key={hotel.id}
                className="flex flex-col gap-2.5 shrink-0 cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative h-[149px] md:h-[224px] w-full ">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover rounded-3xl"
                  />
                  
                  {/* Heart Icon */}
                  <button className="absolute top-2 right-2 h-10 w-10 flex items-center justify-center rounded-full z-10 bg-[rgba(0,0,0,0.1)] backdrop-blur-[34px] border border-white/10 hover:bg-[rgba(0,0,0,0.2)] transition-colors">
                    <Heart className="w-5 h-5 text-white" />
                  </button>
                  
                  {/* Amenity Tags */}
                  <div className="absolute bottom-2 left-2 right-2 flex gap-2 flex-wrap">
                    {hotel.amenities.map((amenity, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 rounded-[100px] bg-[rgba(0,0,0,0.1)] backdrop-blur-[34px] border border-white/10"
                      
                      >
                        <span className=" text-xs md:text-sm text-white font-medium whitespace-nowrap">
                          {amenity}
                        </span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-row justify-between gap-1">
                  <div className="space-y-1">

                  <h3 className="text-sm font-medium text-white md:text-text-dark-100">
                    {hotel.name}
                  </h3>
                  <div className="flex gap-1">
                  <img 
              src={locationWhiteIcon} 
              alt={`location logo`}
              className="size-4 text-white  md:hidden"
            />
              <img 
              src={locationIcon} 
              alt={`location logo`}
              className="size-4 text-white hidden md:block"
            />
                 <p className="text-xs text-white md:text-text-dark-80 mb-2">
                    {hotel.location}
                  </p>
                  </div>
             
                  </div>
                  
                  {/* Rating and Price */}
                  <div className="flex flex-col gap-1">
                    <div className="flex  gap-1 justify-end">
                      <Star className="size-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-medium text-white md:text-text-dark-80">
                        {hotel.rating}
                      </span>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-theme-secondary">
                        {hotel.price.toLocaleString()} ETB <span className="text-white md:text-text-dark-80 font-normal">/ night</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  )
}

