import { useState } from 'react';

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
        className="w-full flex items-start md:items-center justify-between text-left py-2 bg-transparent cursor-pointer gap-4"
      >
        <span className="text-[14px] font-medium text-[#758886] leading-relaxed">
          {title}
        </span>
        
        {/* Chevron Icon Container */}
        <div className={`
          flex items-center justify-center w-8 h-8 min-w-8 rounded-[4px] 
          bg-[#F9FAFB] transition-colors duration-200 group-hover:bg-gray-100 shrink-0
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

      <div 
        className={`
          grid transition-all duration-300 ease-in-out text-[#758886] text-[14px]
          ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-4' : 'grid-rows-[0fr] opacity-0'}
        `}
      >
        <div className="overflow-hidden">
          <p className="pt-2 leading-relaxed">
            This is the detailed content for this FAQ item. It is hidden by default and shown when clicked.
          </p>
        </div>
      </div>
    </div>
  );
};

export default function FaqSection() {
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
    */
    <div className="
      w-full h-auto max-w-[1512px] mx-auto flex flex-col bg-white
      py-10 gap-6
      px-6 md:px-12 xl:px-[120px]
    ">
      
      {/* Heading */}
      <div className="w-full flex justify-start">
        <h2 className="text-2xl md:text-3xl font-bold text-[#10383A] leading-tight">
          FAQ
        </h2>
      </div>

      {/* Accordion Container */}
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