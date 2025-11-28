import ElementOne from "../../assets/images/TraditionElementAttachement.png";
import ElementTwo from "../../assets/images/TraditionElementAttachementSecond.png";

const TraditionAspires = () => {
  return (
    <div className="relative w-full max-w-[1512px] mx-auto h-[578px] lg:h-[500px] flex justify-center items-center px-4 py-10 sm:px-10 lg:px-[120px] lg:py-[60px]">
      
      {/* Decorative Elements */}
      <img
        src={ElementOne}
        className="absolute bottom-0 left-0 w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-cover"
      />
      <img
        src={ElementTwo}
        className="absolute top-0 right-0 w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-cover"
      />

      {/* Content */}
      <div className="flex flex-col items-center text-center justify-center gap-2 h-auto w-auto max-h-[149px] max-w-[658px] mx-auto">
        <h1 className="font-semibold text-[#10383A] text-[20px] sm:text-[24px]">
          Tradition That Aspires
        </h1>

        <p className="text-[#758886] text-[14px] leading-[150%] px-2 sm:px-6 lg:px-0">
          With the growing recognition of the tourism sector’s potential, it was
          separated from the cultural division and reorganized with dedicated
          human resources from the former Trade and Industry office. This
          restructuring aimed to provide focused leadership, coordination, and
          development of tourism activities across the city. Today, the Bureau
          actively works to enhance Addis Ababa’s appeal as a destination by
          promoting its historical sites, urban experiences, cultural landmarks,
          and hospitality services. It also collaborates with stakeholders to
          improve tourism infrastructure, ensure quality service delivery, and
          create policies that support sustainable and inclusive tourism
          development.
        </p>
      </div>
    </div>
  );
};

export default TraditionAspires;
