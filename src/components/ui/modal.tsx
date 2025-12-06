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
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          <Dialog.Content
            ref={ref}
            className={cn(
              "fixed left-[50%] top-[50%] z-50 grid w-auto! !md:!w-full md:max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 md:border bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg",
              "h-full rounded-none top-0 left-0 right-0 bottom-0 translate-x-0 translate-y-0 bg-black/40 backdrop-blur-[32px]",
              "md:h-auto rounded-none! md:rounded-4xl! md:left-[50%] md:top-[50%] md:right-auto md:bottom-auto md:translate-x-[-50%] md:translate-y-[-50%] md:bg-white md:backdrop-blur-none",
              className
            )}
            {...props}
          >
            {showCloseButton && (
              <Dialog.Close 
                className="absolute right-6 top-6 w-12 h-12 flex items-center justify-center rounded-[8px] backdrop-blur transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none z-10 cursor-pointer"
                style={{
                  border: '0.5px solid rgba(255, 255, 255, 0.8)',
                  backgroundColor: 'rgba(0, 0, 0, 0.06)',
                }}
                onClick={(e) => {
                  e.stopPropagation()
                  if (onOpenChange) {
                    onOpenChange(false)
                  }
                }}
              >
                <X className="h-4 w-4" />
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

const ModalTrigger = Dialog.Trigger
const ModalClose = Dialog.Close
const ModalTitle = Dialog.Title
const ModalDescription = Dialog.Description

export { Modal, ModalTrigger, ModalClose, ModalTitle, ModalDescription }

