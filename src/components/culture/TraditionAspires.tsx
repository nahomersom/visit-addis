import ElementOne from "../../assets/images/TraditionElementAttachement.png";
import ElementTwo from "../../assets/images/TraditionElementAttachementSecond.png";

const TraditionAspires = () => {
  return (
    <div
      className="relative w-full max-w-[1512px] mx-auto flex justify-center items-center 
      h-[578px] px-4 py-10 
      md:h-auto md:px-12 md:py-20 
      lg:h-[500px] lg:px-[120px] lg:py-[60px]"
    >
      {/* Decorative Elements */}
      <img
        src={ElementOne}
        alt="Decorative Element Bottom Left"
        className="absolute bottom-0 left-0 w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-cover"
      />
      <img
        src={ElementTwo}
        alt="Decorative Element Top Right"
        className="absolute top-0 right-0 w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-cover"
      />

      {/* Content */}
      <div
        className="flex flex-col items-center text-center justify-center gap-2 mx-auto
        w-auto md:w-full max-w-[658px] 
        h-auto max-h-[149px] md:max-h-none lg:max-h-[149px]"
      >
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