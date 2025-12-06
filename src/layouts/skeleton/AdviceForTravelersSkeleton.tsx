function AdviceCardSkeleton() {
  return (
    <div className="h-full relative rounded-2xl p-4 md:p-6 bg-gray-100">
      <div className="flex gap-6">
        {/* Number skeleton */}
        <div 
          className="self-center"
          style={{
            width: '31.058px',
            height: '74.2px',
          }}
        >
          <div className="w-full h-full bg-gray-300 rounded animate-shimmer" />
        </div>
        
        {/* Content skeleton */}
        <div className="space-y-2 flex-1">
          {/* Title skeleton */}
          <div className="h-5 w-3/4 bg-gray-300 rounded animate-shimmer" />
          {/* Description skeleton */}
          <div className="space-y-1">
            <div className="h-4 w-full bg-gray-200 rounded animate-shimmer" />
            <div className="h-4 w-5/6 bg-gray-200 rounded animate-shimmer" />
            <div className="h-4 w-4/6 bg-gray-200 rounded animate-shimmer" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function AdviceForTravelersSkeleton() {
  return (
    <section className="py-10 md:pb-[60px] md:pt-0 lg:pt-10 px-6 md:px-[48px] lg:px-[120px]">
      {/* Header skeleton */}
      <div className="mb-6 md:mb-8">
        <div className="h-8 w-64 bg-gray-200 rounded animate-shimmer mb-2" />
        <div className="space-y-2">
          <div className="h-4 w-full bg-gray-200 rounded animate-shimmer" />
          <div className="h-4 w-5/6 bg-gray-200 rounded animate-shimmer" />
        </div>
      </div>

      {/* Cards skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
        {Array.from({ length: 4 }).map((_, index) => (
          <AdviceCardSkeleton key={index} />
        ))}
      </div>
    </section>
  )
}

