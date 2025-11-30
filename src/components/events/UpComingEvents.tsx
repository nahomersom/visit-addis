import React, { useState } from 'react';
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { 
  Utensils, 
  Music, 
  Activity, 
  Leaf, 
  Briefcase, 
  ChevronDown, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';
import { allEvents } from '@/constant';

interface EventCardProps {
  id: number;
  image: string;
  title: string;
  description: string;
  category: string;
}

interface FilterButtonProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

interface TimeRangeDropdownProps {
  timeRange: string;
  onSelect: (value: string) => void;
}


const UpcomingEvents = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Food');
  const [timeRange, setTimeRange] = useState<string>('This week');

  //handle dropdown selection
  const handleDropdownSelect = (value: string) => {
    setTimeRange(value);
  };


  const filteredEvents = activeCategory === 'All' 
    ? allEvents 
    : allEvents.filter(event => event.category === activeCategory);

  const displayEvents = activeCategory === 'Food' ? allEvents : filteredEvents;

  return (
    <div className="w-full flex justify-center bg-white min-h-screen">
      <div className="
        w-full max-w-[1512px] 
        flex flex-col 
        border-t border-gray-200 
        py-10
        px-6 md:px-[120px]
        gap-6
      ">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col gap-4 md:gap-6">
          
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-[#0D2B28] text-2xl font-bold font-sans">
              Upcoming Events
            </h1>

            <div className="block md:hidden">
              <TimeRangeDropdown 
                timeRange={timeRange}
                onSelect={handleDropdownSelect}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            
            {/* Scrollable Buttons Container */}
            <div 
              className="
                w-full md:w-auto 
                flex flex-row flex-nowrap 
                overflow-x-auto 
                gap-2 
                -mx-6 px-6 md:mx-0 md:px-0
                pb-2 md:pb-0
                items-center
                [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
              "
            >
              <div className="shrink-0">
                <FilterButton 
                  icon={<Utensils size={18} />} 
                  label="Food" 
                  isActive={activeCategory === 'Food'} 
                  onClick={() => setActiveCategory('Food')}
                />
              </div>
              <div className="shrink-0">
                <FilterButton 
                  icon={<Music size={18} />} 
                  label="Music" 
                  isActive={activeCategory === 'Music'} 
                  onClick={() => setActiveCategory('Music')}
                />
              </div>
              <div className="shrink-0">
                <FilterButton 
                  icon={<Activity size={18} />} 
                  label="Sports" 
                  isActive={activeCategory === 'Sports'} 
                  onClick={() => setActiveCategory('Sports')}
                />
              </div>
              <div className="shrink-0">
                <FilterButton 
                  icon={<Leaf size={18} />} 
                  label="Cultural" 
                  isActive={activeCategory === 'Cultural'} 
                  onClick={() => setActiveCategory('Cultural')}
                />
              </div>
              <div className="shrink-0">
                <FilterButton 
                  icon={<Briefcase size={18} />} 
                  label="Business" 
                  isActive={activeCategory === 'Business'} 
                  onClick={() => setActiveCategory('Business')}
                />
              </div>
            </div>

            <div className="hidden md:block">
              <TimeRangeDropdown 
                timeRange={timeRange}
                onSelect={handleDropdownSelect}
              />
            </div>
          </div>
        </div>

        {/* EVENTS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 min-h-[400px]">
          {displayEvents.length > 0 ? (
            displayEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))
          ) : (
            <div className="col-span-full h-[400px] flex items-center justify-center text-gray-400 flex-col gap-2">
               <Briefcase size={48} className="opacity-20"/>
               <p>No events found for this category.</p>
               <button onClick={() => setActiveCategory('Food')} className="text-[#1EB196] text-sm font-medium hover:underline">
                 View all events
               </button>
            </div>
          )}
        </div>

        {/* PAGINATION */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-4 gap-4 w-full">
          <span className="text-sm text-gray-500 font-medium">1 / 4</span>
          
          <div className="hidden sm:block flex-1 mx-6 h-px bg-gray-200 relative">
            <div className="absolute left-0 top-0 h-full w-[25%] bg-gray-900"></div>
          </div>

          <div className="flex items-center gap-4">
            <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition active:scale-95">
              <ChevronLeft size={20} className="text-gray-500" />
            </button>
            
            <button className="w-12 h-12 rounded-full bg-[#DAA520] flex items-center justify-center hover:bg-[#c2921a] transition shadow-md active:scale-95">
              <ChevronRight size={20} className="text-white" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

const TimeRangeDropdown: React.FC<TimeRangeDropdownProps> = ({ 
  timeRange, 
  onSelect 
}) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button 
          className="group flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-md text-sm text-gray-600 hover:bg-gray-200 transition-colors w-[130px] sm:w-[140px] justify-between whitespace-nowrap outline-none focus:ring-2 focus:ring-[#1EB196]/20"
        >
          <span className="truncate">{timeRange}</span>
          <ChevronDown 
            size={16} 
            className="transition-transform duration-200 shrink-0 group-data-[state=open]:rotate-180" 
          />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content 
          className="
            min-w-[140px] 
            bg-white 
            rounded-lg 
            shadow-xl 
            border border-gray-100 
            overflow-hidden 
            p-1 
            z-50 
            animate-in fade-in zoom-in-95 duration-100
            data-[side=bottom]:slide-in-from-top-2
          "
          align="end"
          sideOffset={5}
        >
          {['This week', 'This month', 'This year'].map((option) => (
            <DropdownMenu.Item
              key={option}
              onSelect={() => onSelect(option)}
              className={`
                relative flex items-center
                cursor-pointer select-none outline-none
                w-full text-left px-3 py-2 text-sm rounded-md transition-colors
                data-highlighted:bg-gray-50
                ${timeRange === option ? 'text-[#1EB196] font-medium bg-gray-50' : 'text-gray-600'}
              `}
            >
              {option}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

const FilterButton: React.FC<FilterButtonProps> = ({ icon, label, isActive, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`
        flex items-center gap-2
        pl-1.5 pr-6 py-1.5
        rounded-[100px]
        transition-all duration-300 ease-in-out
        border
        whitespace-nowrap
        outline-none focus:ring-2 focus:ring-[#1EB196]/20
        ${isActive 
          ? 'bg-[#1EB196] text-white border-[#1EB196]' 
          : 'bg-[#F2F4F5] text-gray-600 border-transparent hover:bg-gray-200 hover:border-gray-300'}
      `}
    >
      <div className={`
        w-8 h-8 rounded-full flex items-center justify-center shadow-sm transition-colors duration-300
        ${isActive ? 'bg-white text-[#1EB196]' : 'bg-white text-black'}
      `}>
        {icon}
      </div>
      <span className="font-medium text-sm">{label}</span>
    </button>
  );
};

const EventCard: React.FC<Omit<EventCardProps, 'id'>> = ({ image, title, description }) => {
  return (
    <div className="
      relative 
      w-full 
      h-[400px] 
      rounded-2xl 
      overflow-hidden 
      group 
      cursor-pointer
      animate-in fade-in duration-500
    ">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />
      
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-90" />

      <div className="absolute inset-0 flex flex-col justify-end p-6 gap-3">
        <h3 className="text-white text-[18px] font-bold leading-tight group-hover:text-[#DAA520] transition-colors">
          {title}
        </h3>
        <p className="text-gray-200 text-xs leading-relaxed line-clamp-3">
          {description}
        </p>
        
        <button className="
          mt-2 
          bg-[#DAA520] 
          text-white 
          text-sm font-medium 
          py-3 px-6 
          rounded-[100px] 
          w-max
          hover:bg-[#c2921a] 
          hover:shadow-lg
          active:scale-95
          transition-all
        ">
          Read More
        </button>
      </div>
    </div>
  );
};

export default UpcomingEvents;