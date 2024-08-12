import { PropsWithChildren, useEffect, useState } from "react"

export const Underbar = ({ children }: PropsWithChildren) => {
  const [underbar, setUnderbar] = useState("_")

  useEffect(() => {
    const intervalId = setInterval(() => {
      setUnderbar((prev) => (prev ? "" : "_"))
    }, 600)

    return () => {
      clearInterval(intervalId)
    }
  })
  return (
    <>
      {children} <span className="absolute">{underbar}</span>
    </>
  )
}
