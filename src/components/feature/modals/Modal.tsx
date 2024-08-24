/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useModal } from "@/src/store/useModal"
import { AlertModal } from "./alert/AlertModal"

export const Modal = () => {
  const { isOpen, closeModal } = useModal()
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 animate-fadeIn bg-black/50" onClick={() => closeModal()}>
      <div onClick={(e) => e.stopPropagation()}>
        <AlertModal />
      </div>
    </div>
  )
}
