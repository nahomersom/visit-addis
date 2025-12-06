import { SectionHeaderSkeleton } from "./SectionHeaderSkeleton"

function SocialHighlightCardSkeleton({ width = "w-full" }: { width?: string }) {
  return (
    <div className={`${width} overflow-hidden cursor-pointer relative min-h-[345px] md:min-h-[352px] rounded-[40px]`}>
      {/* Background image skeleton */}
      <div className="absolute inset-0 bg-gray-200 animate-shimmer rounded-[40px]" />
      
      {/* Progressive blur overlay */}
      <div className="absolute inset-0 p-4 flex flex-col justify-end overflow-hidden">
        {/* Background darkening gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.32) 100%)',
            clipPath: 'polygon(0 54.67%, 100% 54.67%, 100% 100%, 0 100%)',
          }}
        />
        {/* Progressive blur effect */}
        <div 
          className="absolute"
          style={{
            top: '54.67%',
            left: 0,
            right: 0,
            bottom: '-20px',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            maskImage: 'linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 5%, rgba(255, 255, 255, 0.3) 15%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.85) 70%, rgba(255, 255, 255, 0.95) 85%, white 95%, white 100%)',
            WebkitMaskImage: 'linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 5%, rgba(255, 255, 255, 0.3) 15%, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.85) 70%, rgba(255, 255, 255, 0.95) 85%, white 95%, white 100%)',
          }}
        />
        
        {/* Content skeleton */}
        <div className="relative z-10 flex justify-between">
          <div className="flex items-center gap-3 mb-3">
            {/* Avatar skeleton */}
            <div className="relative size-[49px]">
              <div className="size-[49px] rounded-[8px] border border-white/60 overflow-hidden bg-gray-300 animate-shimmer" />
              {/* Instagram icon circle skeleton */}
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-gray-300 rounded-full animate-shimmer" />
            </div>
            <div className="flex-1">
              {/* Author name skeleton */}
              <div className="h-5 w-24 bg-gray-300 rounded animate-shimmer mb-2" />
              {/* Location skeleton */}
              <div className="h-4 w-32 bg-gray-300 rounded animate-shimmer" />
            </div>
          </div>
          {/* Rating skeleton */}
          <div className="flex items-center gap-1">
            <div className="w-5 h-5 bg-gray-300 rounded animate-shimmer" />
            <div className="h-4 w-8 bg-gray-300 rounded animate-shimmer" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function SocialHighlightsSkeleton() {
  const cardWidths = ["w-[60%]", "w-[40%]", "w-[40%]", "w-[60%]", "w-[60%]", "w-[40%]"]
  
  return (
    <section className="py-10 md:py-[60px] px-6 md:px-[48px] lg:px-[120px] bg-accent-80">
      <SectionHeaderSkeleton />

      {/* Mobile skeleton */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide -mx-6 px-6 md:hidden">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="shrink-0 w-[342px]">
            <SocialHighlightCardSkeleton />
          </div>
        ))}
      </div>

      {/* Desktop skeleton */}
      <div className="hidden md:flex md:flex-col md:gap-6">
        {/* Row 1 */}
        <div className="flex gap-6">
          <SocialHighlightCardSkeleton width={cardWidths[0]} />
          <SocialHighlightCardSkeleton width={cardWidths[1]} />
        </div>
        {/* Row 2 */}
        <div className="flex gap-6">
          <SocialHighlightCardSkeleton width={cardWidths[2]} />
          <SocialHighlightCardSkeleton width={cardWidths[3]} />
        </div>
        {/* Row 3 */}
        <div className="flex gap-6">
          <SocialHighlightCardSkeleton width={cardWidths[4]} />
          <SocialHighlightCardSkeleton width={cardWidths[5]} />
        </div>
      </div>
    </section>
  )
}

