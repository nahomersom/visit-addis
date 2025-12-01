import React, { useState } from 'react';

// Interface for the Accordion Item Props
interface AccordionItemProps {
  title: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, isOpen, onClick }) => {
  return (
    <div 
      className="group w-full flex flex-col rounded-[8px] overflow-hidden transition-all duration-300"
    >
      <button 
        onClick={onClick}
        className="w-full flex items-center justify-between text-left py-2 bg-transparent cursor-pointer"
      >
        <span className="text-[14px] font-medium text-[#758886]">
          {title}
        </span>
        
        {/* Chevron Icon Container */}
        <div className={`
          flex items-center justify-center w-8 h-8 min-w-8 rounded-[4px] 
          bg-[#F9FAFB] transition-colors duration-200 group-hover:bg-gray-100
        `}>
          <svg 
            width="12" 
            height="8" 
            viewBox="0 0 12 8" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          >
            <path 
              d="M1.5 1.75L6 6.25L10.5 1.75" 
              stroke="#758886" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>

      {/* Expandable Content (Optional logic added if you want them to actually work) */}
      <div 
        className={`
          grid transition-all duration-300 ease-in-out text-[#758886] text-[14px]
          ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-4' : 'grid-rows-[0fr] opacity-0'}
        `}
      >
        <div className="overflow-hidden">
          <p className="pt-2">
            This is the detailed content for this FAQ item. It is hidden by default and shown when clicked.
          </p>
        </div>
      </div>
    </div>
  );
};

export default function FaqSection() {
  // State to handle opening/closing. 
  // Set default to -1 so all are closed initially (matching the image).
  const [openIndex, setOpenIndex] = useState<number>(-1);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const faqData = [
    "Lorem Ipsum Dolor Sit Amet Consectetur. Orci Netus Velit Pulvinar Neque Pulvinar Elementum Aliquet Scelerisque.",
    "Lorem Ipsum Dolor Sit Amet Consectetur. Orci Netus Velit Pulvinar Neque Pulvinar Elementum Aliquet Scelerisque.",
    "Lorem Ipsum Dolor Sit Amet Consectetur. Orci Netus Velit Pulvinar Neque Pulvinar Elementum Aliquet Scelerisque."
  ];

  return (
    /* 
      Main Container 
      - Width: Fill (w-full)
      - Height: Hug (h-auto)
      - Padding Y: 40px
      - Padding X: 24px (Mobile) -> 120px (Desktop)
      - Gap: 24px
    */
    <div className="w-full h-auto flex flex-col gap-6 py-10 px-6 md:px-[120px] bg-white">
      
      {/* 
        Heading 
        - Mobile: Centered
        - Desktop: Left Aligned
        - Color: #10383A
        - Size: 24px
      */}
      <div className="w-full flex justify-center md:justify-start">
        <h2 className="text-[24px] font-bold text-[#10383A] leading-tight">
          FAQ
        </h2>
      </div>

      {/* 
        Accordion Container 
        - Width: Fill
        - Gap: 16px
      */}
      <div className="w-full flex flex-col gap-4">
        {faqData.map((item, index) => (
          <AccordionItem 
            key={index}
            title={item}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>

    </div>
  );
}