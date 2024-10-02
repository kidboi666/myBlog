import { MouseEvent, useRef } from "react"

export const useStateChange = <T extends HTMLElement>() => {
  const ref = useRef<T>(null)

  const wait = async (time: number = 1000) => {
    // eslint-disable-next-line no-promise-executor-return
    return new Promise((resolve) => setTimeout(resolve, time))
  }

  const open = async () => {
    if (ref.current) {
      ref.current.classList.remove("hidden")
      await wait(0)
      ref.current.setAttribute("data-status", "opened")
    }
  }

  const close = () => {
    if (ref.current) {
      ref.current.setAttribute("data-status", "closed")
    }
  }

  const handleTransitionEnd = () => {
    if (ref?.current?.getAttribute("data-status") === "closed") {
      ref.current.classList.add("hidden")
    }
  }

  const handleButtonClick = (e: MouseEvent) => {
    e.stopPropagation()
    const isOpen = ref.current?.getAttribute("data-status")

    if (isOpen === "opened") {
      close()
    }

    if (isOpen === "closed") {
      open()
    }
  }

  return {
    ref,
    open,
    close,
    onTransitionEnd: handleTransitionEnd,
    onClick: handleButtonClick,
  }
}
