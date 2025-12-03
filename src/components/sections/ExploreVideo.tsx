import { Button } from "@/components/ui/button"
import mexicoVideo from "@/assets/videos/mexico.mp4"

export function ExploreVideo() {
  return (
    <section className="py-10 px-6 lg:py-[60px] lg:px-[120px] ">
      <div className="flex flex-col gap-4">
        {/* Video Player */}
        <div className="w-full rounded-[24px] overflow-hidden">
          <video
            src={mexicoVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[240px] md:h-[500px] object-cover"
          />
        </div>

        {/* Description and Button */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-[40px]">
          {/* Lorem Ipsum Text */}
            <p className="text-sm text-text-dark-80 leading-relaxed text-center md:text-start">
            Lorem ipsum dolor sit amet consectetur. Feugiat nisi amet mattis neque ultrices nibh tempor ipsum aliquam. In cum ultricies placerat eleifend. Diam cum blandit sed ipsum placerat commodo eget. Tristique faucibus leo malesuada ac facilisis arcu morbi suspendisse. Gravida erat ut sollicitudin eget dictum nam malesuada semper. Risus cras neque suspendisse amet est aliquet venenatis massa vel. Volutpat et ut sed quisque. Sagittis et ullamcorper blandit quam. Ac id tempor tortor lobortis duis. Eleifend erat magna massa non fringilla nibh nulla faucibus non.
            </p>

          {/* Get Itinerary Button */}
          <Button
            className="bg-theme-primary text-sm text-white px-6 py-3 rounded-[105px] h-[50px] font-medium hover:opacity-90 transition-opacity whitespace-nowrap hidden md:block"
          >
            Get Itinerary
          </Button>
          <Button
              className="block md:hidden w-full bg-theme-primary text-sm text-white px-6 py-3 rounded-[105px] h-[50px] font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
            >
          Travel Tips & Essentials
          </Button>
        </div>
      </div>
    </section>
  )
}

