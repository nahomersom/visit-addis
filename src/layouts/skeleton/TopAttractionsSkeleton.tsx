function TopAttractionCardSkeleton() {
  return (
    <div className="flex flex-col gap-2.5 shrink-0">
      {/* Image Container */}
      <div className="relative h-[235px] w-[324px] md:h-[565px] md:w-[460px]">
        {/* Image skeleton */}
        <div className="w-full h-full bg-gray-200 rounded-3xl animate-shimmer" />
        
        {/* Heart Icon skeleton */}
        <div className="absolute top-6 right-6 h-10 w-10 rounded-full bg-gray-300 animate-shimmer" />
        
        {/* Tags skeleton */}
        <div className="absolute bottom-6 left-6 right-6 flex gap-2 flex-wrap">
          <div className="h-8 w-16 bg-gray-300 rounded-[100px] animate-shimmer" />
          <div className="h-8 w-20 bg-gray-300 rounded-[100px] animate-shimmer" />
          <div className="h-8 w-14 bg-gray-300 rounded-[100px] animate-shimmer" />
        </div>
      </div>
      
      {/* Content skeleton */}
      <div className="mt-2">
        {/* Title skeleton */}
        <div className="h-6 w-48 md:w-64 bg-gray-200 rounded animate-shimmer mb-2" />
        
        <div className="flex justify-between">
          {/* Location skeleton */}
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-200 rounded animate-shimmer" />
            <div className="h-4 w-32 bg-gray-200 rounded animate-shimmer" />
          </div>
          
          {/* Rating skeleton */}
          <div className="flex gap-1 items-center">
            <div className="w-6 h-6 bg-gray-200 rounded animate-shimmer" />
            <div className="h-4 w-8 bg-gray-200 rounded animate-shimmer" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function TopAttractionsSkeleton() {
  return (
    <section className="py-10 md:py-[60px] bg-accent-60 relative">
      {/* Header skeleton */}
      <div className="flex flex-col lg:flex-row lg:justify-between px-6 md:px-12 lg:px-[120px] gap-2 mb-10">
        {/* Title skeleton */}
        <div className="h-8 w-64 bg-gray-200 rounded animate-shimmer" />
        {/* Description skeleton */}
        <div className="flex flex-col gap-2 max-w-[400px]">
          <div className="h-4 w-full bg-gray-200 rounded animate-shimmer" />
          <div className="h-4 w-4/5 bg-gray-200 rounded animate-shimmer" />
        </div>
      </div>

      {/* Scrollable area skeleton */}
      <div className="overflow-x-auto pb-4 scrollbar-hide">
        <div className="flex gap-6 pl-6 md:pl-[48px] lg:pl-[120px]">
          {Array.from({ length: 5 }).map((_, index) => (
            <TopAttractionCardSkeleton key={index} />
          ))}
          {/* Spacer for right padding */}
          <div className="shrink-0 w-20"></div>
        </div>
      </div>
    </section>
  )
}

