/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand"

type ModalType = "newPost" | "alert"

interface ModalState {
  isOpen: boolean
  type: ModalType | null
  data: any
  setOpen: (type: ModalType, data?: any) => void
  setClose: () => void
}

export const useModal = create<ModalState>((set) => ({
  isOpen: false,
  type: null,
  data: null,
  setOpen: (type, data) => set({ isOpen: true, type, data }),
  setClose: () => set({ isOpen: false, type: null, data: null }),
}))
