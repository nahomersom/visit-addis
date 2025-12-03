import React from 'react';
import heroImage from '../../assets/images/Leading.png';

const CultureCta: React.FC = () => {
  return (
    // MAIN CONTAINER
    <div className="w-full h-auto md:min-h-[448px] bg-[#123332] flex justify-center items-center">
      
      <div className="w-full box-border py-[60px] px-6 md:px-12 lg:px-16 xl:px-[120px]">

        <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">

          <div className="flex flex-col gap-6 text-center md:text-left 
                          flex-1 max-w-[500px] md:max-w-none lg:max-w-full xl:max-w-[500px]">
            
            <h1 className="text-white text-[24px] font-bold">
              Live The Culture, Feel The Lifestyle
            </h1>

            <p className="text-[#aebcbc] text-[14px] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Nulla facilisis vel id morbi. Lectus id
              odio quam ut tincidunt commodo ut. Nisi eget elit pretium id adipiscing nunc
              ac volutpat amet. Et sed quam commodo tortor eget.
            </p>

            <div className="w-full h-auto flex flex-row gap-2 justify-center md:justify-start">
              <button className="w-auto h-auto bg-[#dea91e] hover:bg-[#c99618] text-white text-sm font-medium py-4 px-6 rounded-[105px] transition-colors text-nowrap">
                Plan Your Trip
              </button>
              <button className="bg-[#eff1f3] hover:bg-[#dde0e4] text-[#123332] text-sm font-medium py-3 px-6 rounded-[105px] transition-colors text-nowrap">
                Travel Essentials
              </button>
            </div>
          </div>

          <div className="flex-1 w-full max-w-[560px] flex justify-center md:justify-end">
            <img
              src={heroImage}
              alt="City Lifestyle"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CultureCta;