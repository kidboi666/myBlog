import React, { RefObject, useCallback, useEffect, useRef } from "react"

export const useStatusChange = <T extends HTMLElement, S extends HTMLElement>(): [
  RefObject<T>,
  RefObject<S>,
  (e: React.MouseEvent<HTMLElement>) => void,
] => {
  const targetRef = useRef<T>(null)
  const statusRef = useRef<S>(null)

  const openStatus = useCallback(() => {
    statusRef.current?.setAttribute("data-status", "opened")
  }, [])

  const closeStatus = useCallback(() => {
    statusRef.current?.setAttribute("data-status", "closed")
  }, [])

  const handleClickOutside = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (!targetRef.current) return
      if (!targetRef.current.contains(e.target as Node)) {
        closeStatus()
      } else {
        openStatus()
      }
    },
    [closeStatus, openStatus],
  )

  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      const ev = e as unknown as React.MouseEvent<HTMLElement>
      handleClickOutside(ev)
    }

    document.addEventListener("click", handleMouseDown)
    return () => {
      document.removeEventListener("click", handleMouseDown)
    }
  }, [handleClickOutside])

  return [targetRef, statusRef, handleClickOutside]
}
