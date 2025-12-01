import React from 'react';

interface EventData {
  id: number;
  title: string;
  description: string;
  image: string;
  buttonText: string;
}

const events: EventData[] = [
  {
    id: 1,
    title: 'Tech Innovations 2024',
    description: 'Dive into the future of technology at our annual conference! Explore groundbreaking advancements, attend expert panels, and network with industry leaders.',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1740&auto=format&fit=crop',
    buttonText: 'Read More',
  },
  {
    id: 2,
    title: 'Adventure Weekend Retreat',
    description: 'Escape the city and reconnect with nature! Join guided hikes, rock climbing, and campfire storytelling under the stars. Perfect for adventure seekers.',
    image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=1746&auto=format&fit=crop',
    buttonText: 'Read More',
  },
  {
    id: 3,
    title: 'Summer Music Fest',
    description: "Join us for a day filled with rhythm and fun! Enjoy live performances from local bands, food trucks serving delicious eats, and activities for the whole family.",
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1740&auto=format&fit=crop',
    buttonText: 'Read More',
  },
];

const ActivityEvents: React.FC = () => {
  return (
    <div className="w-full flex justify-center bg-white">
      {/* 
        Main Container 
      */}
      <div className="
        w-full max-w-[1512px] 
        flex flex-col 
        px-6 py-10 gap-6 
        md:px-[120px] md:py-10
      ">
        
        {/* 
          Header Section 
        */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-2 md:gap-0">
          <h2 className="
            text-[24px] 
            font-bold 
            text-[#10383A] 
            text-center md:text-left
          ">
            Upcoming Events
          </h2>
          
          <p className="
            text-[14px] 
            text-[#758886] 
            text-center md:text-left 
            max-w-full md:max-w-[400px]
            leading-relaxed
          ">
            Explore the vibrant city of Addis Ababa! Discover its rich culture, delicious cuisine, and stunning landscapes.
          </p>
        </div>

        {/* 
          Cards Container 
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {events.map((event) => (
            <div 
              key={event.id}
              className="
                relative 
                w-full 
                h-60 md:h-[400px] 
                rounded-2xl 
                overflow-hidden 
                group
              "
            >
              {/* Background Image */}
              <img 
                src={event.image} 
                alt={event.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

              {/* Content within Card */}
              <div className="
                relative 
                h-full 
                flex flex-col 
                justify-end 
                p-6 
                items-start
              ">
                <h3 className="text-white text-[18px] md:text-[20px] font-bold mb-2 leading-tight">
                  {event.title}
                </h3>
                
                <p className="text-gray-200 text-[12px] mb-4 line-clamp-3 md:line-clamp-4">
                  {event.description}
                </p>

                <button className="
                  bg-[#ECA619] 
                  hover:bg-[#d49516] 
                  text-white 
                  text-[14px] 
                  font-medium 
                  py-2 
                  px-6 
                  rounded-full 
                  transition-colors
                ">
                  {event.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityEvents;