import { SectionHeaderSkeleton } from "./SectionHeaderSkeleton"

function ActivityPillSkeleton() {
  return (
    <div className="h-10 w-24 md:w-32 bg-gray-200 rounded-4xl animate-shimmer" />
  )
}

export function ThingsToDoSkeleton() {
  return (
    <section className="py-10 md:py-[60px] px-6 md:px-[48px] lg:px-[120px]">
      <div className="w-full">
        {/* Header Section */}
        <SectionHeaderSkeleton />

        {/* Activities skeleton */}
        <div className="flex flex-wrap gap-2 justify-center">
          {Array.from({ length: 12 }).map((_, index) => (
            <ActivityPillSkeleton key={index} />
          ))}
        </div>

        {/* CTA Banner skeleton */}
        <div className="mt-10">
          <div className="h-48 md:h-64 bg-gray-200 rounded-3xl animate-shimmer" />
        </div>
      </div>
    </section>
  )
}

