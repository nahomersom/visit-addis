export function SectionHeaderSkeleton() {
  return (
    <div className="flex flex-col gap-4 mb-8">
      {/* Title skeleton */}
      <div className="h-8 w-48 bg-gray-200 rounded animate-shimmer" />
      
      {/* Description skeleton - multiple lines */}
      <div className="flex flex-col gap-2">
        <div className="h-4 w-full bg-gray-200 rounded animate-shimmer" />
        <div className="h-4 w-full bg-gray-200 rounded animate-shimmer" />
        <div className="h-4 w-3/4 bg-gray-200 rounded animate-shimmer" />
      </div>
    </div>
  )
}

