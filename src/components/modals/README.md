# Modal System Guide

This project uses a scalable modal system that makes it easy to add and manage multiple modals.

## How to Add a New Modal

### Step 1: Create Your Modal Component

Create a new file in `src/components/modals/` following this pattern:

```tsx
// src/components/modals/YourModal.tsx
import { Modal, ModalTitle, ModalDescription } from "@/components/ui/modal"
import { useModal } from "@/contexts/ModalContext"

const MODAL_ID = "your-modal-id" // Unique identifier

export function YourModal() {
  const { isOpen, closeModal } = useModal()

  return (
    <Modal
      open={isOpen(MODAL_ID)}
      onOpenChange={(open) => {
        if (!open) closeModal(MODAL_ID)
      }}
      className="max-w-md" // Customize as needed
    >
      <div className="flex flex-col gap-4 p-6">
        <ModalTitle className="text-2xl font-semibold">
          Your Modal Title
        </ModalTitle>
        <ModalDescription className="text-sm text-gray-600">
          Your modal description
        </ModalDescription>
        {/* Your modal content */}
      </div>
    </Modal>
  )
}

// Export the modal ID for use in other components
export { MODAL_ID as YOUR_MODAL_ID }
```

### Step 2: Add Modal to MainLayout

Add your modal component to `src/layouts/MainLayout.tsx`:

```tsx
import { YourModal } from "@/components/modals/YourModal"

export function MainLayout() {
  return (
    <ModalProvider>
      {/* ... existing code ... */}
      <GetAppModal />
      <YourModal /> {/* Add your modal here */}
    </ModalProvider>
  )
}
```

### Step 3: Use the Modal in Your Component

```tsx
import { useModal } from "@/contexts/ModalContext"
import { YOUR_MODAL_ID } from "@/components/modals/YourModal"

export function YourComponent() {
  const { openModal } = useModal()

  return (
    <button onClick={() => openModal(YOUR_MODAL_ID)}>
      Open Modal
    </button>
  )
}
```

## Available Modal Methods

The `useModal` hook provides:

- `openModal(modalId)` - Opens a modal
- `closeModal(modalId)` - Closes a modal
- `toggleModal(modalId)` - Toggles a modal's state
- `isOpen(modalId)` - Checks if a modal is open
- `closeAllModals()` - Closes all open modals

## Modal Component Props

- `open` - Boolean to control modal visibility
- `onOpenChange` - Callback when modal state changes
- `className` - Custom CSS classes
- `showCloseButton` - Show/hide the close button (default: true)

## Examples

See `GetAppModal.tsx` for a complete example.

