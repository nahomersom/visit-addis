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
    <Modal 
      open={isOpen} 
      onOpenChange={onClose} 
      className="
        w-[390px]
        h-[733px]
        pt-24 px-6 pb-6
        gap-4
        
        md:w-[710px]
        md:h-[840px]
        md:pt-[88px] md:px-6 md:pb-6
        md:gap-4
        
        max-h-[95vh] max-w-[95vw] overflow-hidden flex flex-col bg-white
      "
    >
      <div className="flex flex-col w-full h-full gap-4 overflow-hidden">
        
        {/* Scrollable Content Wrapper */}
        <div className="flex flex-col gap-4 overflow-y-auto custom-scrollbar h-full pr-2">
          
          {/* 1. Title & Description */}
          <div className="flex flex-col gap-2">
            <h2 className="text-[#0D2B28] text-2xl md:text-[32px] font-bold tracking-tight leading-tight">
              {event.title}
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              {event.fullDescription || event.description || "Join us for an exciting journey into the future of technology..."}
            </p>
          </div>

          {/* Details (Chips) */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-bold text-[#0D2B28]">Details</h3>
            <div className="flex flex-row flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-[#F9FAFB] px-4 py-3 rounded-2xl border border-transparent">
                <Calendar size={18} className="text-gray-500" />
                <span className="text-sm font-medium text-gray-700">{formatDate(event.startDate)}</span>
              </div>
              <div className="flex items-center gap-2 bg-[#F9FAFB] px-4 py-3 rounded-2xl border border-transparent">
                <MapPin size={18} className="text-[#c52c2c]" />
                <span className="text-sm font-medium text-gray-700">{event.location}</span>
              </div>
            </div>
          </div>

          {/* Gallery */}
          <div className="flex flex-col gap-3 pb-2">
            <h3 className="text-lg font-bold text-[#0D2B28]">Gallery</h3>
            
            {event.galleryImages && event.galleryImages.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {event.galleryImages.map((img, index) => (
                  <div 
                    key={index} 
                    className={`
                      relative overflow-hidden rounded-2xl h-48
                      ${index === 0 && event.galleryImages.length % 2 !== 0 ? 'md:col-span-2 md:h-64' : ''} 
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
               /* Fallback Layout */
               <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                 <div className="h-40 md:h-48 rounded-2xl overflow-hidden bg-gray-100">
                    <img src={event.imageUrl} className="w-full h-full object-cover" alt="Event cover" />
                 </div>
                 <div className="h-40 md:h-48 rounded-2xl overflow-hidden bg-gray-100">
                    <img src={event.imageUrl} className="w-full h-full object-cover filter brightness-90" alt="Event cover" />
                 </div>
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