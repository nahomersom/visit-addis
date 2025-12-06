import React from 'react';
import { Modal } from '@/components/ui/modal';
import { Calendar, MapPin } from 'lucide-react';
import type { FormattedEvent } from '@/hooks/useEvents';

interface EventDetailModalProps {
  isOpen: boolean;
  onClose: (open: boolean) => void;
  event: FormattedEvent | null;
}

const EventDetailModal: React.FC<EventDetailModalProps> = ({ isOpen, onClose, event }) => {
  if (!event) return null;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <Modal open={isOpen} onOpenChange={onClose}>
      <div className="flex flex-col w-full h-full gap-4 overflow-hidden">
        
        {/* Scrollable Content Wrapper */}
        <div className="flex flex-col gap-4 overflow-y-auto custom-scrollbar h-full pr-2 pt-[88px]">
          
          {/* Header Section (Title & Description) */}
          <div className="flex flex-col gap-4">
            <h2 className="text-[18px] font-bold text-[#10383A] leading-tight">
              {event.title}
            </h2>
            <p className="text-[12px] text-[#758886] font-normal leading-relaxed">
              {event.fullDescription || event.description || "Join us for an exciting journey into the future of technology..."}
            </p>
          </div>

          {/* Details (Chips) */}
          <div className="flex flex-col gap-3 mt-2">
            <h3 className="text-[18px] font-bold text-[#10383A]">Details</h3>
            <div className="flex flex-row flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-[#F9FAFB] px-4 py-3 rounded-2xl border border-transparent">
                <Calendar size={18} className="text-[#758886]" />
                <span className="text-sm font-medium text-[#10383A]">{formatDate(event.startDate)}</span>
              </div>
              <div className="flex items-center gap-2 bg-[#F9FAFB] px-4 py-3 rounded-2xl border border-transparent">
                <MapPin size={18} className="text-[#c52c2c]" />
                <span className="text-sm font-medium text-[#10383A]">{event.location}</span>
              </div>
            </div>
          </div>

          {/* Gallery */}
          <div className="flex flex-col gap-3 pb-4">
            <h3 className="text-[18px] font-bold text-[#10383A]">Gallery</h3>
            
            {event.galleryImages && event.galleryImages.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {event.galleryImages.map((img, index) => (
                  <div 
                    key={index} 
                    className={`
                      relative overflow-hidden rounded-2xl h-48
                      /* Logic: If odd number of images, make the LAST one big to sit at the bottom */
                      ${index === event.galleryImages.length - 1 && event.galleryImages.length % 2 !== 0 ? 'md:col-span-2 md:h-64' : ''} 
                    `}
                  >
                    <img 
                      src={img} 
                      alt={`Gallery ${index}`} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            ) : (
               <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                 
                 {/*Small Image (Left) */}
                 <div className="h-40 md:h-48 rounded-2xl overflow-hidden bg-gray-100">
                    <img src={event.imageUrl} className="w-full h-full object-cover" alt="Event cover" />
                 </div>

                 {/*Small Image (Right) */}
                 <div className="h-40 md:h-48 rounded-2xl overflow-hidden bg-gray-100">
                    <img src={event.imageUrl} className="w-full h-full object-cover filter brightness-90" alt="Event cover" />
                 </div>

                 {/* Big Image */}
                 <div className="h-48 md:h-64 md:col-span-2 rounded-2xl overflow-hidden bg-gray-100 relative">
                    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                      <div className="w-12 h-12 bg-[#DAA520] rounded-full flex items-center justify-center shadow-lg">
                        <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-10 border-l-white border-b-[6px] border-b-transparent ml-1"></div>
                      </div>
                    </div>
                    <img src={event.imageUrl} className="w-full h-full object-cover filter brightness-75" alt="Video placeholder" />
                 </div>
               </div>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default EventDetailModal;