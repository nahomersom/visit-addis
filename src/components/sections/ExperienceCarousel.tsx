import experienceBackground from "@/assets/images/experienceBackground.jpg"

export function ExperienceCarousel() {


  return (
    <section 
      className="relative py-[60px] text-white overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${experienceBackground})`,
      }}
    >
      {/* Black overlay with 50% opacity */}
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)]"></div>
      
      <div className="container py-[100px] min-h-[964px] z-10 flex">
       <div className="flex flex-col gap-4 justify-center px-[120px] z-50">
        <h2 className="text-[40px] text-white font-semibold  max-w-[543px]">
        Experience Addis Ababa from a Whole New Perspective
        </h2>
        <p className="text-sm text-white  max-w-[543px]">
        A hot air balloon ride in Addis offers a breathtaking panoramic view of Ethiopia’s capital, blending the charm of ancient history with the pulse of modern life below.
        </p>
       </div>
      </div>
    </section>
  )
}

