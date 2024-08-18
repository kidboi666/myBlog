import { isServer } from "@/src/utils/isServer"
import { PropsWithChildren } from "react"
import { createPortal } from "react-dom"

export const Portal = ({ children }: PropsWithChildren) => {
  const targetElement = !isServer && document.getElementById("portal")

  if (!targetElement) {
    return null
  }

  return createPortal(children, targetElement)
}
