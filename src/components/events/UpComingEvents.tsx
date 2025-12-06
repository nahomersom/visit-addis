import { useState } from 'react';
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  Briefcase,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ImageOff
} from 'lucide-react';
import { useEvents, type FormattedEvent, type CategoryData } from '@/hooks/useEvents';
import { getImageUrl } from '@/lib/axios';
import { Skeleton } from '../ui/skeleton';
import EventDetailModal from '../../components/EventDetailModal';

const UpcomingEvents = () => {
  const {
    categories,
    displayEvents,
    activeCategory,
    setActiveCategory,
    page,
    setPage,
    isLoading,
    isError,
    pagination
  } = useEvents();

  const [timeRange, setTimeRange] = useState<string>('This week');
  
  // State for the modal
  const [selectedEvent, setSelectedEvent] = useState<FormattedEvent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const totalPages = pagination?.pageCount || 1;

  const handlePrevPage = () => {
    if (page > 1) setPage((old) => old - 1);
  };

  const handleNextPage = () => {
    if (page < totalPages) setPage((old) => old + 1);
  };

  const handleReadMore = (event: FormattedEvent) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  return (
    <div className="w-full flex justify-center bg-white min-h-screen font-sans">
      <div className="w-full max-w-[1512px] flex flex-col border-t border-gray-200 py-10 px-6 md:px-12 xl:px-[120px] gap-6">

        {/* HEADER SECTION */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-[#0D2B28] text-2xl md:text-[32px] font-bold tracking-tight">Upcoming Events</h1>
            <div className="block md:hidden">
              <TimeRangeDropdown timeRange={timeRange} onSelect={setTimeRange} />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="w-full md:w-auto flex flex-row flex-nowrap overflow-x-auto gap-2 -mx-6 px-6 md:mx-0 md:px-0 pb-2 md:pb-0 items-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {isLoading && !categories.length ? (
                Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="shrink-0 flex items-center gap-2 pl-1.5 pr-6 py-1.5 bg-gray-50 rounded-full border border-gray-100">
                    <Skeleton className="w-8 h-8 rounded-full" />
                    <Skeleton className="h-4 w-20 rounded-md" />
                  </div>
                ))
              ) : (
                categories.map((cat: CategoryData) => (
                  <div className="shrink-0" key={cat.id}>
                    <FilterButton
                      icon={cat.icon ? (
                        <img
                          src={getImageUrl(cat.icon.url)}
                          alt={cat.name}
                          className="w-4 h-4 object-contain"
                        />
                      ) : <Briefcase size={18} />}
                      label={cat.name}
                      isActive={activeCategory === cat.name}
                      onClick={() => setActiveCategory(cat.name)}
                    />
                  </div>
                ))
              )}
            </div>

            <div className="hidden md:block">
              <TimeRangeDropdown timeRange={timeRange} onSelect={setTimeRange} />
            </div>
          </div>
        </div>

        {/* EVENTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 min-h-[400px]">
          {isLoading ? (
            Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden bg-gray-100 border border-gray-200">
                <Skeleton className="absolute inset-0 w-full h-full opacity-50" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 gap-4">
                  <Skeleton className="h-8 w-3/4 rounded-md bg-gray-300" />
                  <Skeleton className="h-3 w-5/6 rounded-md bg-gray-300" />
                  <Skeleton className="mt-2 h-10 w-32 rounded-full bg-gray-300" />
                </div>
              </div>
            ))
          ) : isError ? (
            <div className="col-span-full h-[400px] flex items-center justify-center text-red-400">
              Error loading events.
            </div>
          ) : displayEvents.length > 0 ? (
            displayEvents.map((event: FormattedEvent) => (
              <EventCard
                key={event.id}
                image={event.imageUrl}
                title={event.title}
                description={event.description}
                category={event.category}
                onReadMore={() => handleReadMore(event)} // Pass handler
              />
            ))
          ) : (
            <div className="col-span-full h-[400px] flex items-center justify-center text-gray-400 flex-col gap-2">
              <ImageOff size={48} className="opacity-20" />
              <p>No events found for <span className="font-semibold text-gray-600">{activeCategory}</span>.</p>
              {categories[0] && (
                <button onClick={() => setActiveCategory(categories[0].name)} className="text-[#1EB196] text-sm font-medium hover:underline">
                  View available events
                </button>
              )}
            </div>
          )}
        </div>

        {/* PAGINATION */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-4 gap-4 w-full">
          <span className="text-sm text-gray-500 font-medium">
            {isLoading ? <Skeleton className="h-4 w-12 inline-block" /> : `${page} / ${totalPages}`}
          </span>
          <div className="hidden sm:block flex-1 mx-6 h-px bg-gray-200 relative">
            <div
              className="absolute left-0 top-0 h-full bg-[#F0F0EE] transition-all duration-300"
              style={{ width: `${(page / totalPages) * 100}%` }}
            />
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrevPage}
              disabled={page === 1 || isLoading}
              className={`w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center transition active:scale-95 ${page === 1 ? 'opacity-50 cursor-not-allowed bg-gray-50' : 'hover:bg-gray-50 cursor-pointer'}`}
            >
              <ChevronLeft size={20} className="text-gray-500" />
            </button>
            <button
              onClick={handleNextPage}
              disabled={page === totalPages || isLoading}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition shadow-md active:scale-95 ${page === totalPages ? 'bg-gray-300 cursor-not-allowed opacity-50' : 'bg-[#DAA520] hover:bg-[#c2921a] cursor-pointer'}`}
            >
              <ChevronRight size={20} className="text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* RENDER THE MODAL */}
      <EventDetailModal 
        isOpen={isModalOpen} 
        onClose={setIsModalOpen} 
        event={selectedEvent} 
      />
    </div>
  );
};

interface EventCardProps {
  image: string;
  title: string;
  description: string;
  category: string;
  onReadMore: () => void; // Added prop
}

const EventCard: React.FC<EventCardProps> = ({ image, title, description, category, onReadMore }) => {
  return (
    <div 
      onClick={onReadMore} // Allow clicking the whole card too if desired
      className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden group cursor-pointer animate-in fade-in duration-500 shadow-sm hover:shadow-xl transition-all"
    >
      <div className="absolute top-4 left-4 z-10">
        <span className="backdrop-blur-md bg-white/20 text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full border border-white/30">
          {category}
        </span>
      </div>
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-90" />
      <div className="absolute inset-0 flex flex-col justify-end p-6 gap-3">
        <h3 className="text-white text-xl md:text-2xl font-bold leading-tight group-hover:text-[#DAA520] transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-300 text-xs md:text-sm leading-relaxed line-clamp-2 md:line-clamp-3 font-light">
          {description}
        </p>
        <button 
          onClick={(e) => {
            e.stopPropagation(); // Prevent double firing if card has onClick
            onReadMore();
          }}
          className="mt-2 bg-[#DAA520] text-white text-sm font-semibold py-2.5 px-6 rounded-full w-max hover:bg-[#c2921a] hover:shadow-lg active:scale-95 transition-all"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

// FilterButton and TimeRangeDropdown remain the same as your original code
const FilterButton: React.FC<{ icon: React.ReactNode; label: string; isActive: boolean; onClick: () => void; }> = ({ icon, label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-2 pl-1.5 pr-6 py-1.5 rounded-full transition-all duration-300 ease-in-out border whitespace-nowrap outline-none focus:ring-2 focus:ring-[#1EB196]/20
        ${isActive
          ? 'bg-[#1EB196] text-white border-[#1EB196] shadow-md'
          : 'bg-[#F9FAFB] text-gray-600 border-transparent hover:bg-gray-100 hover:border-gray-200'}
      `}
    >
      <div className={`
        w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 overflow-hidden shrink-0
        ${isActive ? 'bg-white text-[#1EB196]' : 'bg-white text-black shadow-sm'}
      `}>
        {icon}
      </div>
      <span className="font-semibold text-sm tracking-wide">{label}</span>
    </button>
  );
};

const TimeRangeDropdown: React.FC<{ timeRange: string; onSelect: (val: string) => void }> = ({ timeRange, onSelect }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="group flex items-center gap-2 px-4 py-2.5 bg-[#F9FAFB] border border-transparent hover:border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all w-[140px] justify-between whitespace-nowrap outline-none focus:ring-2 focus:ring-[#1EB196]/20">
          <span className="truncate">{timeRange}</span>
          <ChevronDown size={16} className="text-gray-400 transition-transform duration-200 shrink-0 group-data-[state=open]:rotate-180" />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="min-w-[140px] bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden p-1.5 z-50 animate-in fade-in zoom-in-95 duration-100 data-[side=bottom]:slide-in-from-top-2" align="end" sideOffset={8}>
          {['This week', 'This month', 'This year'].map((option) => (
            <DropdownMenu.Item
              key={option}
              onSelect={() => onSelect(option)}
              className={`
                relative flex items-center cursor-pointer select-none outline-none w-full text-left px-3 py-2 text-sm rounded-lg transition-colors 
                ${timeRange === option ? 'text-[#1EB196] font-semibold bg-green-50' : 'text-gray-600 hover:bg-gray-50'}
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

export default UpcomingEvents;