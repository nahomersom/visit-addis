import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useFAQ } from "@/hooks/useFAQ"
import { FAQSkeleton } from "@/layouts/skeleton/FAQSkeleton"

export function FAQ() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())
  const { data, isLoading, error } = useFAQ()

  const toggleItem = (id: number) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  if (isLoading) {
    return <FAQSkeleton />
  }

  if (error || !data?.data) {
    return (
      <section className="py-10 px-6 md:px-[48px] lg:py-[60px] lg:px-[120px]">
        <div className="text-center py-20">
          <p className="text-gray-600">Failed to load FAQ</p>
        </div>
      </section>
    )
  }

  const { title, items } = data.data

  return (
    <section className="py-10 px-6 md:px-[48px] lg:py-[60px] lg:px-[120px] ">

      <h2 className="text-2xl font-semibold text-text-dark-100 mb-6">
        {title}
      </h2>

      <div className="flex flex-col gap-4">
        {items.map((item) => {
          const isOpen = openItems.has(item.id)
          return (
            <div
              key={item.id}
              className="rounded-lg bg-white transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full flex items-center justify-between gap-4"
              >
                <p
                  className={`text-sm font-medium text-left flex-1 transition-colors duration-300 ${
                    isOpen
                      ? "text-theme-primary"
                      : "text-theme-dark"
                  }`}
                >
                  {item.question}
                </p>
                <div
                  className={`shrink-0 w-[40px] h-[40px] rounded-lg flex items-center justify-center transition-colors duration-300 ${
                    isOpen
                      ? "bg-theme-primary"
                      : "bg-accent-80"
                  }`}
                >
                  {isOpen ? (
                    <ChevronUp className="size-6 text-white transition-colors duration-300" />
                  ) : (
                    <ChevronDown className="size-6 text-theme-dark transition-colors duration-300" />
                  )}
                </div>
              </button>

              {/* Answer content */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? "max-h-96 opacity-100  pt-4" : "max-h-0 opacity-0"
                }`}
              >
                {item.answer && (
                  <p className="text-sm text-text-dark-80 leading-relaxed p-2">{item.answer}</p>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

