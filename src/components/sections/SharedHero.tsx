import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SharedHeroProps {
  image: string
  title?: ReactNode
  description?: string
  className?: string
}

const SharedHero = ({ 
  image,
  title,
  description,
  className
}: SharedHeroProps) => {

    return (
      <div className={cn(
        "relative w-full h-[733px] md:h-[584px] lg:h-[488px]",
        "flex justify-center items-center flex-col",
        "lg:py-[200px] lg:px-[120px]",
        "bg-center bg-cover",
        "gap-10",
        className
      )} style={{ backgroundImage: `url(${image})`}}>
          
          {/* overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
  
          {/* content */}
          <div className="relative flex flex-col items-center text-center w-full gap-3 px-4">
             
              {title && (
                <h1 className="text-2xl md:text-[64px] font-bold mb-2">
                  {title}
                </h1>
              )}
              {description && (
                <p className="text-white/80 text-[12px] md:text-[16px] w-full  md:max-w-[738px] lg:max-w-[840px] mx-auto">
                  {description}
                </p>
              )}
          </div>
      </div>
    )
  }
  
  export default SharedHero

