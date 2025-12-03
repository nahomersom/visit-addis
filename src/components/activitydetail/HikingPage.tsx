import React from 'react';
import { ChevronLeft, MapPin } from 'lucide-react';

const HikingPage: React.FC = () => {
  const locations = [
    "Entoto Mountains",
    "Bale Mountain",
    "Ras Dashen",
    "Atlas Mountains",
    "Drakensberg Mountains",
  ];

  const images = [
    {
      id: 1,
      src: "https://plus.unsplash.com/premium_photo-1661883853185-165f5869e6d3?q=80&w=1170&auto=format&fit=crop", 
      alt: "Ziplining in forest"
    },
    {
      id: 2,
      src: "https://plus.unsplash.com/premium_photo-1728262247661-f2f767933e29?q=80&w=1169&auto=format&fit=crop", 
      alt: "Entoto park architecture"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800&auto=format&fit=crop", 
      alt: "Hiker near waterfall"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop", 
      alt: "Group hiking mountains"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=800&auto=format&fit=crop", 
      alt: "Hikers on trail"
    },
  ];

  return (
    <div className="
      w-full max-w-[1512px] mx-auto flex flex-col bg-white
      py-10 gap-6
      px-6 md:px-12 xl:px-[120px]
    ">

      {/* Back Button */}
      <div className="w-full flex justify-start">
        <button className="flex items-center justify-center bg-[#F2F4F7] hover:bg-gray-200 transition-colors rounded-[105px] px-6 py-3 gap-2">
          <ChevronLeft size={16} className="text-[#10383A]" />
          <span className="text-[14px] font-medium text-[#10383A]">Back</span>
        </button>
      </div>

      {/* Header Section */}
      <div className="flex flex-col gap-4 md:gap-6">
        {/* Heading */}
        <div className="flex items-center gap-2">
          <span className="text-orange-500 text-2xl md:text-3xl">⛺</span>
          <h1 className="text-2xl md:text-3xl font-bold text-[#10383A]">
            Hiking In Addis Abeba
          </h1>
        </div>
        
        {/* Description */}
        <p className="text-sm md:text-[15px] text-[#758886] leading-relaxed xl:max-w-4xl">
          Hiking in Addis Ababa offers a unique blend of breathtaking landscapes and rich cultural experiences. Nestled in the heart of Ethiopia, the city is surrounded by stunning mountains and lush greenery, making it a hiker's paradise. One of the most popular trails is the Entoto Mountain hike, where you can enjoy panoramic views of the city while exploring ancient churches and historical sites along the way. As you ascend, the air becomes fresher, and the vibrant flora and fauna come alive. The trail is well-marked, catering to both novice and experienced hikers. Along the route, you might encounter local vendors selling traditional snacks, giving you a taste of Ethiopian culture. For those seeking a more challenging adventure, the trails around the Menagesha Forest provide a rugged terrain filled with diverse wildlife and serene landscapes. Whether you're looking for a leisurely stroll or an exhilarating trek, Addis Ababa's hiking trails promise an unforgettable experience that connects you with nature and the local community.
        </p>
      </div>

      {/* Locations Section */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <MapPin size={18} className="text-red-500" />
          <span className="text-base font-bold text-[#10383A]">Locations</span>
        </div>

        <div className="flex flex-wrap gap-3">
          {locations.map((loc, index) => (
            <button
              key={index}
              className="
                bg-[#F7F9FC] text-[#344054] 
                hover:bg-[#E4E7EC] transition-colors
                rounded-full
                py-3 px-6 
                text-sm font-medium whitespace-nowrap
              "
            >
              {loc}
            </button>
          ))}
        </div>
      </div>
      
      <div className="
        w-full 
        grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3
        gap-4 md:gap-6
      ">
        {images.map((img, index) => (
          <div
            key={img.id}
            className={`
              relative overflow-hidden rounded-2xl w-full shadow-sm
              h-[250px] md:h-[300px]
              group
              /* Make the first image span 2 cols on tablet for variety, optional */
              ${index === 0 ? 'md:col-span-2 xl:col-span-1' : ''}
            `}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
             <div className="absolute inset-0 bg-[#10383A] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default HikingPage;