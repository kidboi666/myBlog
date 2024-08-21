import { useCallback, useEffect, useState } from "react"
import { wait } from "../utils/wait"

export const useStrTypingEffect = (value: string) => {
  const [text, setText] = useState("")

  const createText = useCallback(
    async (txt: string) => {
      // await wait(1000)

      setText((prev) => prev + txt)
    },
    [value],
  )

  useEffect(() => {
    setText("")
    const splitText = value?.split("")
    const timeoutArr: NodeJS.Timeout[] = []

    splitText?.forEach((txt, idx) => {
      const timeoutId = setTimeout(() => createText(txt), idx * 100)
      timeoutArr.push(timeoutId)
    })

    return () => {
      timeoutArr.forEach((id) => clearTimeout(id))
    }
  }, [value, createText])

  return text
}
