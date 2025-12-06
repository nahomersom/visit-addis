export function FAQSkeleton() {
  return (
    <section className="py-10 px-6 md:px-[48px] lg:py-[60px] lg:px-[120px]">
      {/* Title skeleton */}
      <div className="h-8 w-32 bg-gray-200 rounded animate-shimmer mb-6" />

      {/* FAQ items skeleton */}
      <div className="flex flex-col gap-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="rounded-lg bg-white p-4 transition-all duration-300"
          >
            <div className="flex items-center justify-between gap-4">
              {/* Question skeleton */}
              <div className="flex-1 space-y-2">
                <div className="h-4 w-full bg-gray-200 rounded animate-shimmer" />
                <div className="h-4 w-4/5 bg-gray-200 rounded animate-shimmer" />
              </div>
              {/* Chevron button skeleton */}
              <div className="shrink-0 w-[40px] h-[40px] rounded-lg bg-gray-200 animate-shimmer" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

