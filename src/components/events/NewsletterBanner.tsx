const NewsletterBanner: React.FC = () => {
  return (
    // Main Container
    <div className="w-full max-w-[1512px] mx-auto flex flex-col items-center justify-center 
                    py-10 px-6 md:px-[120px] gap-6 bg-white">
      
      {/* Card */}
      <div className="relative w-full md:max-w-[1272px] md:h-auto h-[400px] md:min-h-[231px]
                      rounded-3xl p-10 flex flex-col items-center justify-center gap-4
                      overflow-hidden bg-[#EAF4FA] shadow-sm isolation-auto">
        
        {/* Background Image Setup */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none z-0"
          style={{ backgroundImage: "url('/assets/images/NewsBg.jpg')" }} 
        ></div>
        
        {/* Decorative Gradient */}
        <div className="absolute inset-0 bg-linear-to-r from-[#EAF4FA] via-white/40 to-[#EAF4FA] opacity-80 z-0"></div>

        {/* Content Wrapper */}
        <div className="relative z-10 flex flex-col items-center text-center w-full max-w-[660px]">
          
          {/* Heading & Description */}
          <div className="flex flex-col items-center gap-1 mb-6">
            <h2 className="text-[24px] font-bold text-[#10383A] leading-tight">
              Never Miss a Moment!
            </h2>
            <p className="text-[14px] text-[#758886] font-normal">
              Unlock Addis Ababa's best-kept secrets! Subscribe now for a monthly guide to exclusive cultural events, underground art scenes, and the most exciting happenings around the city.
            </p>
          </div>

          <form className="flex flex-col md:flex-row items-center justify-center gap-2 w-full md:w-auto">
            
            <input 
              type="email" 
              placeholder="Enter Email Address" 
              className="w-full md:w-[320px] rounded-[100px] border border-[#E0E0E0] bg-white 
                         py-3 px-6 text-[14px] text-[#758886] outline-none 
                         focus:border-[#DAA520] transition-colors placeholder:text-[#B0B0B0]"
            />
            
            <button
              type="button"
              className="w-auto rounded-[105px] bg-[#DAA520] hover:bg-[#C59216] 
                         text-white font-medium py-3 px-8 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default NewsletterBanner;