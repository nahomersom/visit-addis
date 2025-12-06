import { SectionHeaderSkeleton } from "./SectionHeaderSkeleton"

interface TravelTipsSkeletonProps {
  isColumn?: boolean
  count?: number
}

export function TravelTipsSkeleton({ isColumn = false, count = 6 }: TravelTipsSkeletonProps) {
  return (
    <section className="py-10 md:py-[60px] px-6 md:px-[48px] lg:px-[120px]">
      <SectionHeaderSkeleton />

      {/* Tips list skeleton - horizontal scroll on mobile, grid on larger screens */}
      <div className={`${isColumn ? 'flex flex-col gap-[16px]' : 'flex overflow-x-auto'} scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 ${isColumn ? 'mx-0 px-0' : '-mx-6 px-6'} md:mx-0 md:px-0`}>
        {Array.from({ length: count }).map((_, index) => (
          <TravelTipCardSkeleton
            key={index}
            isColumn={isColumn}
          />
        ))}
      </div>
    </section>
  )
}

function TravelTipCardSkeleton({ isColumn }: { isColumn: boolean }) {
  return (
    <div className={`flip-card-container ${isColumn ? 'w-full md:w-auto' : 'shrink-0 w-[310px] md:w-auto'}`}>
      <div className="flip-card-inner">
        {/* Front of card skeleton */}
        <div className="flip-card-front p-6 bg-accent-80 rounded-3xl flex flex-col items-center justify-center gap-4">
          {/* Icon skeleton - circular */}
          <div className="size-[60px] rounded-full bg-gray-200 animate-shimmer" />
          
          {/* Title and description skeleton */}
          <div className="flex flex-col items-center text-center gap-1 w-full">
            {/* Title skeleton */}
            <div className="h-6 w-32 bg-gray-200 rounded animate-shimmer" />
            {/* Short description skeleton */}
            <div className="h-4 w-full max-w-[220px] bg-gray-200 rounded animate-shimmer" />
          </div>
          
          {/* Plus button skeleton */}
          <div className="size-12 rounded-full bg-gray-200 animate-shimmer" />
        </div>
      </div>
    </div>
  )
}

