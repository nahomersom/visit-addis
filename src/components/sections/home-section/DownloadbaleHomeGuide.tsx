import { Button } from "@/components/ui/button"
import {  Download } from "lucide-react"
import locationImage from "@/assets/images/location.png"

export function DownloadableHomeGuides() {
  return (
    <section className="py-10 md:py-[60px] px-6 md:px-[48px] lg:px-[120px] bg-white flex flex-col-reverse md:flex-row justify-between gap-6 md:gap-[60px] items-center">
    

          <div
         className="flex flex-col justify-center items-center md:items-start"
          >
            <h2 className="text-dark-100 font-semibold text-2xl mb-4">
              Downloadable Guides
            </h2>
            <p className="text-sm md:text-xs lg:text-sm text-text-dark-80 mb-8 text-center md:text-left">
Lorem ipsum dolor sit amet consectetur. Nulla facilisis vel id morbi. Lectus id odio quam ut tincidunt commodo ut. Nisi eget elit pretium id adipiscing nunc ac volutpat amet. Et sed quam commodo tortor eget. Egestas mattis a enim quam cursus nibh facilisis tincidunt. Interdum in vitae pulvinar neque id donec tellus nam pellentesque. Risus amet sollicitudin natoque placerat. Vel ac porta ut eget consequat.
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-8">
             <Button className="bg-theme-primary  cursor-pointer text-sm  px-4 lg:px-6 text-white rounded-[105px] h-14">
              <span>First Time Visitors Guide</span>
                  <Download className="w-4 h-4" />
            </Button>
              <Button className="bg-[#F0F0EE]   cursor-pointer text-sm  px-4 lg:px-6 text-text-dark-100 rounded-[105px] h-14">
              <span>View More</span>
            </Button>
            </div>
          </div>

      
            <img 
              src={locationImage} 
              alt="Location map" 
              className="w-[168px] h-[121px] md:w-[200px] md:h-[200px] lg:w-[306px] lg:h-[306px] object-cover"
            />
       
    </section>
  )
}

