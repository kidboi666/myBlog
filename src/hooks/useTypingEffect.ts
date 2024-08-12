import { useEffect, useState } from "react"

export const useTypingEffect = (value: string) => {
  const [text, setText] = useState("")

  useEffect(() => {
    const splitText = value.split("")
    const timeoutArr: NodeJS.Timeout[] = []

    splitText.forEach((txt, idx) => {
      const timeoutId = setTimeout(() => {
        setText((prev) => prev + txt)
      }, idx * 100)
      timeoutArr.push(timeoutId)
    })

    return () => {
      timeoutArr.forEach((id) => clearTimeout(id))
    }
  }, [value])

  return text
}
