import { createContext, useContext, useState, useCallback, type ReactNode } from "react"

type ModalId = string

interface ModalState {
  [key: ModalId]: boolean
}

interface ModalContextType {
  openModal: (modalId: ModalId) => void
  closeModal: (modalId: ModalId) => void
  toggleModal: (modalId: ModalId) => void
  isOpen: (modalId: ModalId) => boolean
  closeAllModals: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modals, setModals] = useState<ModalState>({})

  const openModal = useCallback((modalId: ModalId) => {
    setModals((prev) => ({ ...prev, [modalId]: true }))
  }, [])

  const closeModal = useCallback((modalId: ModalId) => {
    setModals((prev) => ({ ...prev, [modalId]: false }))
  }, [])

  const toggleModal = useCallback((modalId: ModalId) => {
    setModals((prev) => ({ ...prev, [modalId]: !prev[modalId] }))
  }, [])

  const isOpen = useCallback(
    (modalId: ModalId) => {
      return modals[modalId] ?? false
    },
    [modals]
  )

  const closeAllModals = useCallback(() => {
    setModals({})
  }, [])

  return (
    <ModalContext.Provider
      value={{
        openModal,
        closeModal,
        toggleModal,
        isOpen,
        closeAllModals,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useModal() {
  const context = useContext(ModalContext)
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider")
  }
  return context
}

