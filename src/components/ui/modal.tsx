import * as React from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface ModalProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
  showCloseButton?: boolean
}

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  ({ open, onOpenChange, children, className, showCloseButton = true, ...props }, ref) => {
    return (
      <Dialog.Root open={open} onOpenChange={onOpenChange}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          <Dialog.Content
            ref={ref}
            className={cn(
              // BASE STYLES (Positioning & Animation)
              "fixed left-[50%] top-[50%] z-50 flex flex-col bg-white shadow-lg duration-200 translate-x-[-50%] translate-y-[-50%]",
              "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
              "w-full max-w-[390px] h-[733px] max-h-[95vh]",
              "rounded-4xl p-6 gap-6", 
              "md:w-[710px] md:max-w-[710px] md:h-[840px] md:gap-4",

              className
            )}
            {...props}
          >
            {showCloseButton && (
              <Dialog.Close
                className="absolute right-6 top-6 z-50 flex h-10 w-10 items-center justify-center rounded-[8px] transition-colors hover:opacity-100 focus:outline-none bg-[#F9FAFB] border border-gray-100"
                onClick={(e) => {
                  e.stopPropagation()
                  if (onOpenChange) onOpenChange(false)
                }}
              >
                <X className="h-4 w-4 text-gray-500" />
              </Dialog.Close>
            )}
            {children}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    )
  }
)

Modal.displayName = "Modal"

const ModalTitle = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <Dialog.Title className={cn("text-lg font-semibold", className)}>{children}</Dialog.Title>
)

const ModalDescription = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <Dialog.Description className={cn("text-sm text-gray-500", className)}>{children}</Dialog.Description>
)

export { Modal, ModalTitle, ModalDescription }