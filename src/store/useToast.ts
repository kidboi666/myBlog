/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand"

type ToastType = "warn" | "success" | "failure"

interface ToastState {
  isOpen: boolean
  time: number
  type: ToastType | null
  data: any
  openToast: (type: ToastType, data?: any, time?: number) => void
  closeToast: () => void
}

export const useToast = create<ToastState>((set) => ({
  isOpen: false,
  time: 3,
  type: null,
  data: null,
  openToast: (type, data, time) => set({ isOpen: true, type, data, time: time ?? 3 }),
  closeToast: () => set({ isOpen: false, type: null, data: null }),
}))
