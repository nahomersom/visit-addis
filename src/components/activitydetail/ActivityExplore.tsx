import React, { useState } from 'react';
import { Utensils, Landmark, Mountain, ShoppingCart, Dices } from 'lucide-react';

interface Category {
  id: string;
  label: string;
  icon: React.ElementType;
}

const categories: Category[] = [
  { id: 'eatery', label: 'Eatery', icon: Utensils },
  { id: 'museums', label: 'Museums', icon: Landmark },
  { id: 'hiking', label: 'Hiking', icon: Mountain },
  { id: 'shopping', label: 'Shopping', icon: ShoppingCart },
  { id: 'entertainment', label: 'Entertainment', icon: Dices },
];

const ActivityExploreLocations: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('eatery');
  
  const mapImageSrc = "https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80";

  return (
    <div className="
      w-full max-w-[1512px] mx-auto flex flex-col bg-white
      py-10 gap-6
      px-6 md:px-12 xl:px-[120px] 
    ">
        
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-[#10383A] text-left">
        Explore Locations
      </h2>

      <div className="w-full flex flex-col xl:flex-row xl:items-center xl:justify-between min-h-14 gap-6 xl:gap-0">
        
        {/* Categories */}
        <div className="
          flex flex-row items-center
          overflow-x-auto xl:overflow-visible 
          gap-3 
          pb-4 xl:pb-0 
          -mx-6 px-6 
          md:-mx-12 md:px-12
          xl:mx-0 xl:px-0
          no-scrollbar snap-x
        ">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`
                  flex items-center gap-2 rounded-full 
                  pl-1.5 pr-6 py-1.5 h-12
                  transition-all duration-200 
                  whitespace-nowrap shrink-0
                  border xl:border-none
                  ${isActive 
                    ? 'bg-[#1EAA9D] border-[#1EAA9D]' 
                    : 'bg-[#F3F4F6] border-transparent hover:bg-gray-200 text-[#758886]'}
                `}
              >
                <div className={`
                  w-8 h-8 rounded-full flex items-center justify-center shadow-sm
                  ${isActive ? 'bg-white text-[#1EAA9D]' : 'bg-white text-black'}
                `}>
                  <cat.icon size={16} strokeWidth={2.5} />
                </div>
                <span className={`text-sm font-medium ${isActive ? 'text-white' : 'inherit'}`}>
                  {cat.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Description Text */}
        <p
          className="
            text-sm text-[#758886] leading-relaxed
            text-left md:text-left xl:text-left
            w-full xl:max-w-lg shrink-0
          "
        >
          Discover the city's must-see landmarks, from ancient treasures to modern cultural hubs.
        </p>
      </div>

      {/* Map Container */}
      <div className="relative w-full mt-2 xl:mt-0">
        {/* 
           Map Dimensions
        */}
        <div className="w-full h-[250px] md:h-[500px] rounded-2xl overflow-hidden shadow-sm border border-gray-100 relative group">
            <img 
              src={mapImageSrc} 
              alt="Map Location" 
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#10383A] opacity-10 mix-blend-multiply pointer-events-none"></div>

            {/* Markers */}
            {[
              { top: '30%', left: '25%' },
              { top: '50%', left: '50%' },
              { top: '65%', left: '70%' }
            ].map((pos, index) => (
              <div key={index} 
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:-translate-y-2 transition-transform duration-200"
                    style={{ top: pos.top, left: pos.left }}>
                <div className="bg-[#FF4444] text-white p-1.5 md:p-2 rounded-full shadow-lg border-2 border-white">
                  <Utensils className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-8 border-t-white shadow-sm"></div>
              </div>
            ))}
        </div>
      </div>
      
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default ActivityExploreLocations;