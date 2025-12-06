import { useParams, useNavigate } from "react-router-dom";
import { venues } from "@/data/venues";
import SharedHero from "@/components/sections/SharedHero";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import visitBackground from "@/assets/images/venueHeroBg.png";
import stadiumImage from "@/assets/images/stadium.jpg";
import womensquareImage from "@/assets/images/womensquare.jpg";
import keberoImage from "@/assets/images/kebero.jpg";
import oldHouseImage from "@/assets/images/oldHouse.jpg";
import catholicChurchImage from "@/assets/images/catholicChurch.jpg";
import buildingsImage from "@/assets/images/buildings.jpg";
import areasIcon from "@/assets/icons/areas.svg";
import capacityIcon from "@/assets/icons/capacity.svg";
import { SubscribeBanner } from "@/components/sections/venue/subscirbeBanner";
import { FAQ } from "@/components/sections/detail-section/FAQ";

interface MeetingRoom {
  id: string;
  title: string;
  area: string;
  capacity: string;
  image: string;
  tags: string[];
}

const meetingRooms: MeetingRoom[] = [
  {
    id: "1",
    title: "Multi Purpose Hall I",
    area: "450 sq.mt",
    capacity: "5000",
    image: stadiumImage,
    tags: ["Banquet Style", "Board room setup", "Auditorium style", "TV", "LED Screen", "Sound System", "AV Technician"],
  },
  {
    id: "2",
    title: "Multi Purpose Hall 2",
    area: "450 sq.mt",
    capacity: "5000",
    image: womensquareImage,
    tags: ["Banquet Style", "Board room setup", "Auditorium style", "TV", "LED Screen", "Sound System", "AV Technician"],
  },
  {
    id: "3",
    title: "Meeting Room 1",
    area: "450 sq.mt",
    capacity: "5000",
    image: keberoImage,
    tags: ["Banquet Style", "Board room setup", "Auditorium style", "TV", "LED Screen", "Sound System", "AV Technician"],
  },
  {
    id: "4",
    title: "Meeting Room 2",
    area: "450 sq.mt",
    capacity: "5000",
    image: oldHouseImage,
    tags: ["Banquet Style", "Board room setup", "Auditorium style", "TV", "LED Screen", "Sound System", "AV Technician"],
  },
  {
    id: "5",
    title: "Meeting Room 3",
    area: "450 sq.mt",
    capacity: "5000",
    image: catholicChurchImage,
    tags: ["Banquet Style", "Board room setup", "Auditorium style", "TV", "LED Screen", "Sound System", "AV Technician"],
  },
  {
    id: "6",
    title: "Meeting Room 4",
    area: "450 sq.mt",
    capacity: "5000",
    image: buildingsImage,
    tags: ["Banquet Style", "Board room setup", "Auditorium style", "TV", "LED Screen", "Sound System", "AV Technician"],
  },
  {
    id: "7",
    title: "Meeting Room 5",
    area: "450 sq.mt",
    capacity: "5000",
    image: stadiumImage,
    tags: ["Banquet Style", "Board room setup", "Auditorium style", "TV", "LED Screen", "Sound System", "AV Technician"],
  },
  {
    id: "8",
    title: "Meeting Room 6",
    area: "450 sq.mt",
    capacity: "5000",
    image: womensquareImage,
    tags: ["Banquet Style", "Board room setup", "Auditorium style", "TV", "LED Screen", "Sound System", "AV Technician"],
  },
  {
    id: "9",
    title: "Meeting Room 7",
    area: "450 sq.mt",
    capacity: "5000",
    image: keberoImage,
    tags: ["Banquet Style", "Board room setup", "Auditorium style", "TV", "LED Screen", "Sound System", "AV Technician"],
  },
];

interface TagProps {
  label: string;
}

function Tag({ label }: TagProps) {
  return (
    <div className="px-3 py-2 rounded-[100px] bg-[rgba(0,0,0,0.1)] backdrop-blur-[34px] border border-white/10">
      <span className="text-xs text-white font-medium whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}

export default function VenueDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const venue = venues.find((v) => v.id === id);

  if (!venue) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Venue Not Found</h1>
          <Button
            onClick={() => navigate("/venue")}
            className="bg-theme-primary text-white"
          >
            Back to Venues
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <SharedHero
        image={visitBackground}
        className="h-[400px]!"
      />
      
      <section className="py-10 px-6 md:px-[48px]  lg:px-[120px]">
        {/* Back Button */}
        <Button
          onClick={() => navigate("/venue")}
          type="button"
          className="bg-accent-100 text-sm px-6 py-4 text-text-dark-100 rounded-[105px] min-h-[50px] max-w-[115px] mt-2 self-center"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm font-medium">Back</span>
        </Button>

        {/* Meeting Rooms Section */}
        <div className="mt-6 ">
        <h2 className="text-[20px] md:text-2xl font-semibold text-text-dark-100 mb-4">
        Addis International Convention Center
          </h2>
          <h2 className="text-[20px] md:text-sm  text-text-dark-80 mb-6">
          Located just 15 minutes from Bole International Airport and the city center, AICC offers  unmatched accessibility and world-class facilities tailored for international delegates. Designed  to meet global standards, it is the ultimate destination for conferences, trade shows, cultural  festivals, and high-profile gatherings.
          </h2>
          <h2 className="text-[20px] md:text-3xl font-medium text-text-dark-100 mb-4">
            Meeting Rooms
          </h2>
         
          {/* Grid layout - 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {meetingRooms.map((room) => (
              <div
                key={room.id}
                className="flex flex-col cursor-pointer group"
              >
                {/* Image Container */}
                <div className="relative h-[348px] rounded-3xl overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${room.image})`,
                    }}
                  />
                  {/* Progressive blur overlay */}
                  <div className="absolute inset-0 p-4 flex flex-col justify-end overflow-hidden">
                    {/* Background darkening gradient */}
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)',
                        clipPath: 'polygon(0 47.65%, 100% 47.65%, 100% 100%, 0 100%)',
                      }}
                    />
                    {/* Progressive blur effect - starts at 47.65% with 0 blur, ends at 100% with 24px blur */}
                    <div 
                      className="absolute"
                      style={{
                        top: '47.65%',
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backdropFilter: 'blur(24px)',
                        WebkitBackdropFilter: 'blur(24px)',
                        maskImage: 'linear-gradient(180deg, transparent 0%, transparent 0%, rgba(255, 255, 255, 0.1) 5%, rgba(255, 255, 255, 0.3) 15%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.85) 70%, rgba(255, 255, 255, 0.95) 85%, white 95%, white 100%)',
                        WebkitMaskImage: 'linear-gradient(180deg, transparent 0%, transparent 0%, rgba(255, 255, 255, 0.1) 5%, rgba(255, 255, 255, 0.3) 15%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.85) 70%, rgba(255, 255, 255, 0.95) 85%, white 95%, white 100%)',
                      }}
                    />
                    {/* Tags */}
                    <div className="relative z-10">
                      <div className="flex gap-2 flex-wrap">
                        {room.tags.map((tag) => (
                          <Tag key={tag} label={tag} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content below image */}
                <div className="mb-4 mt-6">
                  <h3 className="font-semibold text-text-dark-100 text-lg mb-2">
                    {room.title}
                  </h3>
                  
                  {/* Area and Capacity */}
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                      <img 
                        src={areasIcon} 
                        alt="Area icon"
                        className="w-4 h-4"
                      />
                      <span className="text-sm text-text-dark-80">Area: <span className="text-text-dark-100">{room.area}</span></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img 
                        src={capacityIcon} 
                        alt="Capacity icon"
                        className="w-4 h-4"
                      />
                     <span className="text-sm text-text-dark-80">Area: <span className="text-text-dark-100">{room.capacity}</span></span>

                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
     
      </section>
      <SubscribeBanner
      />
      <FAQ />
    </main>
  );
}

