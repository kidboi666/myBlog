import { useEffect, useState } from "react"
import { Underbar } from "../Undebar"

interface Props {
  children: string
}

export const TypingEffect = ({ children }: Props) => {
  const [text, setText] = useState("")

  useEffect(() => {
    const splitText = children.split("")
    let timeoutArr: NodeJS.Timeout[] = []

    splitText.forEach((txt, idx) => {
      const timeoutId = setTimeout(() => {
        setText((prev) => prev + txt)
      }, idx * 100)
      timeoutArr.push(timeoutId)
    })

    return () => {
      timeoutArr.forEach((id) => clearTimeout(id))
    }
  }, [])
  return (
    <>
      <p className="relative">
        {text}
        <span className="absolute">
          <Underbar />
        </span>
      </p>
    </>
  )
}
