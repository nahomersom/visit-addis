import React from 'react';
import { useCultureCta } from "@/hooks/useCultureCta";
import { getImageUrl } from "@/lib/axios";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from 'react-router-dom';

const CultureCta: React.FC = () => {
  const { data: ctaData, isLoading, isError } = useCultureCta();

  if (isLoading) {
    return (
      <div className="w-full h-auto md:min-h-[448px] bg-[#123332] flex justify-center items-center">
        <div className="w-full box-border py-[60px] px-6 md:px-12 lg:px-16 xl:px-[120px]">
          <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
            <div className="flex flex-col gap-6 flex-1 w-full max-w-[500px]">
              <Skeleton className="h-10 w-3/4 bg-[#1e4544]" />
              <Skeleton className="h-24 w-full bg-[#1e4544]" />
              <div className="flex gap-2">
                <Skeleton className="h-12 w-32 rounded-[105px] bg-[#1e4544]" />
                <Skeleton className="h-12 w-32 rounded-[105px] bg-[#1e4544]" />
              </div>
            </div>
            <div className="flex-1 w-full max-w-[560px] flex justify-center md:justify-end">
              <Skeleton className="h-[300px] w-full rounded-xl bg-[#1e4544]" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isError || !ctaData) {
    return null; 
  }

  return (
    // MAIN CONTAINER
    <div className="w-full h-auto md:min-h-[448px] bg-[#123332] flex justify-center items-center">
      
      <div className="w-full box-border py-[60px] px-6 md:px-12 lg:px-16 xl:px-[120px]">

        <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">

          <div className="flex flex-col gap-6 text-center md:text-left 
                          flex-1 max-w-[500px] md:max-w-none lg:max-w-full xl:max-w-[500px]">
            
            {/* Title */}
            <h1 className="text-white text-[24px] font-bold">
              {ctaData.title}
            </h1>

            {/* Description */}
            <p className="text-[#aebcbc] text-[14px] leading-relaxed">
              {ctaData.description}
            </p>

            {/* Buttons */}
            <div className="w-full h-auto flex flex-row gap-2 justify-center md:justify-start">
              {ctaData.buttons.map((btn, index) => {
                const isPrimary = index === 0;
                
                const isExternal = btn.url.startsWith('http') || btn.url.startsWith('//');
                
                const buttonClasses = `
                  w-auto h-auto text-sm font-medium py-3 md:py-4 px-6 rounded-[105px] transition-colors text-nowrap
                  ${isPrimary 
                    ? 'bg-[#dea91e] hover:bg-[#c99618] text-white' 
                    : 'bg-[#eff1f3] hover:bg-[#dde0e4] text-[#123332]'}
                `;

                if (isExternal) {
                  return (
                    <a key={btn.id} href={btn.url} className={buttonClasses}>
                      {btn.label}
                    </a>
                  );
                }

                return (
                  <Link key={btn.id} to={btn.url} className={buttonClasses}>
                    {btn.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right Side Image */}
          <div className="flex-1 w-full max-w-[560px] flex justify-center md:justify-end">
            <img
              src={getImageUrl(ctaData.background_image?.url)}
              alt={ctaData.title}
              // FIX: Added 'block' to remove inline spacing at the bottom
              className="w-full h-auto object-contain block"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CultureCta;