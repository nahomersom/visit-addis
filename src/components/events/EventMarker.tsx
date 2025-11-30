import { Bed, Utensils, GraduationCap, Cross, Info } from 'lucide-react';

interface MapMarkerProps {
  top: string;
  left: string;
  imageSrc: string;
}

interface PlaceLabelProps {
  top: string;
  left: string;
  name: string;
  subText?: string;
  iconType: 'hotel' | 'food' | 'school' | 'church' | 'industry';
  color: string;
}

const EventMarker: React.FC<MapMarkerProps> = ({ top, left, imageSrc }) => {
  return (
    <div
      className="absolute flex flex-col items-center gap-2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-105 transition-transform duration-200 z-20"
      style={{ top, left }}
    >
      {/* Event Image */}
      <div className="w-[60px] h-10 md:w-20 md:h-[50px] rounded-xl overflow-hidden shadow-lg border-2 border-white bg-gray-900">
        <img src={imageSrc} alt="Event" className="w-full h-full object-cover" />
      </div>
      
      {/* Address Pill */}
      <div className="bg-white px-3 py-1 rounded-full shadow-md border border-gray-100">
        <span className="text-[10px] md:text-xs font-medium text-gray-700 block whitespace-nowrap">
          Address
        </span>
      </div>
    </div>
  );
};

const PlaceLabel: React.FC<PlaceLabelProps> = ({ top, left, name, subText, iconType, color }) => {
  
  const getIcon = () => {
    const className = "w-3 h-3 text-white";
    switch (iconType) {
      case 'hotel': return <Bed className={className} />;
      case 'food': return <Utensils className={className} />;
      case 'school': return <GraduationCap className={className} />;
      case 'church': return <Cross className={className} />;
      case 'industry': return <Info className={className} />;
      default: return <div className={className} />;
    }
  };

  return (
    <div 
      className="absolute flex items-center gap-2 transform -translate-x-1/2 -translate-y-1/2 z-10 group cursor-pointer"
      style={{ top, left }}
    >
      <div className="flex flex-col items-end">
        <span className={`text-[10px] md:text-sm font-semibold px-1 rounded bg-white/90 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none shadow-sm md:shadow-none ${color}`}>
            {name}
        </span>
        {subText && (
            <span className={`text-[8px] md:text-[10px] ${color} opacity-80 hidden md:block bg-white/60 px-1 rounded`}>
                {subText}
            </span>
        )}
      </div>
      
      <div 
        className="w-6 h-6 rounded-full flex items-center justify-center shadow-sm border border-white"
        style={{ backgroundColor: iconType === 'food' ? '#F97316' : iconType === 'hotel' ? '#DB2777' : '#64748B' }}
      >
        {getIcon()}
      </div>
    </div>
  );
};

//Main Component 
const ExploreEvents: React.FC = () => {
  return (
    <div className="w-full flex justify-center bg-white">
      <div className="w-full max-w-[1512px] flex flex-col gap-6 
                      py-10 px-6 
                      md:px-[120px] md:py-10 
                      mobile-border-container">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-4 md:gap-0">
          <h1 className="text-xl md:text-2xl font-semibold text-[#1F2937] w-full md:w-auto text-center md:text-left">
            Explore Events Near You
          </h1>
          <p className="text-sm text-gray-500 leading-relaxed w-full md:max-w-[340px] text-center md:text-left mt-2 md:mt-0">
            Explore the vibrant city of Addis Ababa! Discover its rich culture, delicious cuisine, and stunning landscapes.
          </p>
        </div>

        {/* Map Container */}
        <div className="relative w-full h-[400px] md:h-[582px] rounded-2xl border border-gray-200 overflow-hidden bg-[#F3F4F6]">
          
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3566.0301397406624!2d38.8018931744987!3d9.00967568929219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85f05cce0335%3A0x58b27f3747bc403f!2sAblaze%20Labs!5e1!3m2!1sen!2set!4v1764447684183!5m2!1sen!2set"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full object-cover"
            title="Google Map"
          ></iframe>

          <EventMarker top="25%" left="15%" imageSrc="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=150" />
          <EventMarker top="18%" left="65%" imageSrc="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=150" />
          <EventMarker top="48%" left="88%" imageSrc="https://images.unsplash.com/photo-1514525253440-b393452e8d26?auto=format&fit=crop&q=80&w=150" />
          <EventMarker top="65%" left="48%" imageSrc="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=150" />
          <EventMarker top="78%" left="66%" imageSrc="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=150" />
          <EventMarker top="68%" left="20%" imageSrc="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=150" />

          <PlaceLabel top="38%" left="28%" name="NEW DAY HOTEL" subText="| Hayahulet | ... " iconType="hotel" color="text-pink-500" />
          <PlaceLabel top="55%" left="25%" name="Teddy Juice Bar" iconType="food" color="text-orange-500" />
          <PlaceLabel top="62%" left="33%" name="Awraris Hotel" iconType="hotel" color="text-pink-500" />
          <PlaceLabel top="50%" left="55%" name="School of Tomorrow" subText="Megenagna 24 | ..." iconType="school" color="text-slate-600" />
          <PlaceLabel top="52%" left="68%" name="St.Gabriel Church" subText="24 ... " iconType="church" color="text-slate-600" />
          <PlaceLabel top="58%" left="62%" name="Sador Aluminum" subText="Technics" iconType="industry" color="text-slate-600" />
          <PlaceLabel top="90%" left="78%" name="Taishan Hotel" subText="Chinese text..." iconType="hotel" color="text-pink-500" />

        </div>
      </div>
      
      <style>{`
        @media (max-width: 768px) {
          .mobile-border-container {
            border-top: 1px solid #E5E7EB;
          }
        }
      `}</style>
    </div>
  );
};

export default ExploreEvents;