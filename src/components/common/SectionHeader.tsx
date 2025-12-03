interface SectionHeaderProps {
  title: string
  description: string
  className?: string
}

export function SectionHeader({ title, description, className = "" }: SectionHeaderProps) {
  return (
    <div
      className={`flex flex-col lg:flex-row md:justify-between mb-10 items-center md:items-start gap-2 ${className}`}
    >
      <h2 className="text-2xl font-semibold">
        {title}
      </h2>
      <p className="text-sm text-center md:text-left text-[#758886] max-w-[400px] md:max-w-none lg:max-w-[400px]">
        {description}
      </p>
    </div>
  )
}

