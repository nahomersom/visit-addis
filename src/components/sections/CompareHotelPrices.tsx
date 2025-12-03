import { useState, useEffect, useRef } from "react"
import { Search, Calendar1, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CompareHotelPrices() {
  const [destination] = useState("Addis Ababa, Ethiopia")
  const [checkIn, setCheckIn] = useState<Date | null>(null)
  const [checkOut, setCheckOut] = useState<Date | null>(null)
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectingStart, setSelectingStart] = useState(true)
  const datePickerRef = useRef<HTMLDivElement>(null)

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
  }

  const handleDateClick = (date: Date) => {
    if (selectingStart || !checkIn) {
      setCheckIn(date)
      setCheckOut(null)
      setSelectingStart(false)
    } else {
      if (date < checkIn) {
        setCheckIn(date)
        setCheckOut(null)
      } else {
        setCheckOut(date)
        setSelectingStart(true)
      }
    }
  }

  const dateRangeDisplay = checkIn && checkOut 
    ? `${formatDate(checkIn)} - ${formatDate(checkOut)}`
    : checkIn 
    ? formatDate(checkIn)
    : ""

  // Generate calendar days
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()
    
    const days: (Date | null)[] = []
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }
    
    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day))
    }
    
    return days
  }

  const isDateInRange = (date: Date) => {
    if (!checkIn || !checkOut) return false
    return date >= checkIn && date <= checkOut
  }

  const isDateSelected = (date: Date) => {
    if (checkIn && date.getTime() === checkIn.getTime()) return true
    if (checkOut && date.getTime() === checkOut.getTime()) return true
    return false
  }

  const isDateDisabled = (date: Date) => {
    return date < new Date(new Date().setHours(0, 0, 0, 0))
  }

  const days = getDaysInMonth(currentMonth)
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  // Close datepicker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (datePickerRef.current && !datePickerRef.current.contains(event.target as Node)) {
        setShowDatePicker(false)
      }
    }

    if (showDatePicker) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [showDatePicker])

  return (
    <section className="py-10 px-6 lg:py-[60px] lg:px-[120px] ">
        <div className="bg-accent-80 rounded-3xl p-4 md:p-6 md:mx-auto">
        
        <div className="flex flex-col items-center text-center mb-6 md:mb-10 gap-2">
          <h2 className="text-2xl md:text-3xl font-semibold text-text-dark-100">
            <span className="text-theme-secondary">Compare</span> Hotel Prices
          </h2>
          <p className="text-sm  text-text-dark-80 max-w-2xl">
           A Comprehensive Comparison of Prices Across Various Products and Services
          </p>
        </div>

          <div className="flex flex-col sm:flex-row gap-4">
            {/* Destination */}
            <div className="flex-1 relative">
              <div className="relative">
                <input
                  type="text"
                  disabled
                  className="w-full p-10 py-4 rounded-3xl bg-white border border-[#ECECEC] text-sm sm:text-base text-text-dark-100 placeholder-transparent min-h-[101px] focus:outline-none"
                  placeholder=""
                />
                <label 
                  className="absolute inset-0 flex items-center pointer-events-none pr-10 pl-4 sm:pl-[64px]"
                >
                  <div className="space-y-1">
                    <span className="text-text-dark-80 text-xs md:text-sm">Destination</span>
                    <h3 className="font-semibold text-text-dark-100 text-sm md:text-base">
                      Addis Ababa, Ethiopia
                    </h3>
                  </div>
                </label>
              </div>
            </div>

            {/* Check-in / Check-out */}
            <div className="flex-1 relative">
              <div className="relative">
                <Calendar1 className="absolute left-6 top-[28%] sm:top-1/2 transform -translate-y-1/2 size-5 text-text-dark-60 z-10" />
                {showDatePicker ? (
                  <>
                    <button
                      className="hidden sm:flex absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 items-center justify-center rounded-[8px] backdrop-blur transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none z-10 cursor-pointer"
                      style={{
                        border: '0.5px solid rgba(255, 255, 255, 0.8)',
                        backgroundColor: 'rgba(0, 0, 0, 0.06)',
                      }}
                      onClick={() => setShowDatePicker(false)}
                    >
                      <X className="h-4 w-4" />
                    </button>
                    <Button
                      className="sm:hidden absolute bottom-4 left-4 right-4 bg-theme-primary text-white px-6 py-4 rounded-[105px] h-14 flex items-center justify-center gap-2 hover:bg-theme-primary/90 z-10"
                      onClick={() => setShowDatePicker(false)}
                    >
                      <X className="h-4 w-4" />
                      <span className="text-sm">Close</span>
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      className="hidden sm:flex absolute right-4 top-1/2 transform -translate-y-1/2 bg-theme-primary text-white px-6 py-4 rounded-[105px] h-14 items-center justify-center gap-2 hover:bg-theme-primary/90 z-10"
                      onClick={() => {
                        // Handle search
                        console.log("Search clicked", { destination, checkIn, checkOut })
                      }}
                    >
                      <Search className="size-4" />
                      <span className="text-sm">Search</span>
                    </Button>
                    <Button
                      className="sm:hidden absolute bottom-4 left-4 right-4 bg-theme-primary text-white px-6 py-4 rounded-[105px] h-14 flex items-center justify-center gap-2 hover:bg-theme-primary/90 z-10"
                      onClick={() => {
                        // Handle search
                        console.log("Search clicked", { destination, checkIn, checkOut })
                      }}
                    >
                      <Search className="size-4" />
                      <span className="text-sm">Search</span>
                    </Button>
                  </>
                )}
                <input
                  type="text"
                  readOnly
                  onClick={() => {
                    if (showDatePicker) {
                      setShowDatePicker(false)
                    } else {
                      setShowDatePicker(true)
                    }
                  }}
                  className="w-full p-10 py-4 rounded-3xl bg-white border border-[#ECECEC] text-sm sm:text-base text-text-dark-100 cursor-pointer placeholder-transparent min-h-[160px] sm:min-h-[101px] focus:outline-none"
                  placeholder=""
                />
                <label 
                  className="absolute inset-0 flex flex-col justify-center pointer-events-none pl-4 sm:pl-10 pr-4 sm:pr-4"
                >
                  <div className="space-y-1 ml-9 sm:ml-5 sm:mr-[132px] mr-0 pb-16 sm:pb-0">
                    <span className="text-text-dark-80 text-xs md:text-sm">Check in - Check out</span>
                    <div className="p-2 rounded-[8px] bg-accent-80 w-full">
                    <h3 className="font-semibold text-text-dark-100 text-xs md:text-base ">
                      {dateRangeDisplay || "Select Date"}
                    </h3>
                    </div>
                  
                  </div>
                </label>
                {showDatePicker && (
                  <div ref={datePickerRef} className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border p-4 z-20 w-[320px]">
                    {/* Calendar Header */}
                    <div className="flex items-center justify-between mb-4">
                      <button
                        onClick={() => {
                          setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
                        }}
                        className="p-2 hover:bg-gray-100 rounded-lg"
                      >
                        <span className="text-sm">‹</span>
                      </button>
                      <h3 className="text-sm font-semibold">
                        {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                      </h3>
                      <button
                        onClick={() => {
                          setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
                        }}
                        className="p-2 hover:bg-gray-100 rounded-lg"
                      >
                        <span className="text-sm">›</span>
                      </button>
                    </div>
                    
                    {/* Day Names */}
                    <div className="grid grid-cols-7 gap-1 mb-2">
                      {dayNames.map((day) => (
                        <div key={day} className="text-xs text-center text-text-dark-60 font-medium py-1">
                          {day}
                        </div>
                      ))}
                    </div>
                    
                    {/* Calendar Days */}
                    <div className="grid grid-cols-7 gap-1">
                      {days.map((date, index) => {
                        if (!date) {
                          return <div key={index} className="aspect-square" />
                        }
                        
                        const isDisabled = isDateDisabled(date)
                        const isSelected = isDateSelected(date)
                        const isInRange = isDateInRange(date)
                        const isStart = checkIn && date.getTime() === checkIn.getTime()
                        const isEnd = checkOut && date.getTime() === checkOut.getTime()
                        
                        return (
                          <button
                            key={index}
                            onClick={() => !isDisabled && handleDateClick(date)}
                            disabled={isDisabled}
                            className={`aspect-square text-sm rounded-lg transition-colors ${
                              isDisabled
                                ? "text-gray-300 cursor-not-allowed"
                                : isSelected
                                ? "bg-theme-secondary text-white font-semibold"
                                : isInRange
                                ? "bg-theme-secondary/20 text-theme-secondary border  border-[#1EAA9D]/40"
                                : "hover:bg-gray-100 text-text-dark-100"
                            } ${
                              isStart ? "rounded-l-lg" : ""
                            } ${
                              isEnd ? "rounded-r-lg" : ""
                            }`}
                          >
                            {date.getDate()}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

        
        </div>
    </section>
  )
}

