import { useCallback, useEffect, useState } from "react"
import { wait } from "../utils/wait"

export const useArrTypingEffect = (value: string[]) => {
  const [text, setText] = useState("")
  const [renderedIdx, setRenderedIdx] = useState(0)

  const createText = useCallback(
    async (txt: string, idx: number, textLength: number) => {
      await wait(2000)

      if (textLength - 1 === idx && value.length > renderedIdx + 1) {
        setRenderedIdx(renderedIdx + 1)
        setText((prev) => `${prev}${txt}<br><br>`)
      } else {
        setText((prev) => prev + txt)
      }
    },
    [renderedIdx, value.length],
  )

  useEffect(() => {
    const splitText = value[renderedIdx]?.split("")
    const timeoutArr: NodeJS.Timeout[] = []

    splitText?.forEach((txt, idx) => {
      const timeoutId = setTimeout(() => createText(txt, idx, splitText.length), idx * 100)
      timeoutArr.push(timeoutId)
    })

    return () => {
      timeoutArr.forEach((id) => clearTimeout(id))
    }
  }, [value.length, renderedIdx, createText])

  return text
}
