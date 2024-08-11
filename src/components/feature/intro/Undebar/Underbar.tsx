import { useEffect, useState } from "react"

export const Underbar = () => {
  const [underbar, setUnderbar] = useState("")

  useEffect(() => {
    const intervalId = setInterval(() => {
      setUnderbar((prev) => (prev ? "" : "_"))
    }, 600)

    return () => {
      clearInterval(intervalId)
    }
  })
  return underbar
}
