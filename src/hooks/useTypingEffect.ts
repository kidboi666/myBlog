import { useEffect, useState } from "react"
import { wait } from "../utils/wait"

export const useTypingEffect = (value: string[]) => {
  const [text, setText] = useState("")
  const [renderedIdx, setRenderedIdx] = useState(0)

  const createText = async (txt: string, idx: number, textLength: number) => {
    await wait(2000)

    if (textLength - 1 === idx && value.length > renderedIdx + 1) {
      setRenderedIdx(renderedIdx + 1)
      setText((prev) => `${prev}${txt}<br>`)
    } else {
      setText((prev) => prev + txt)
    }
  }

  useEffect(() => {
    const splitText = value[renderedIdx].split("")
    const timeoutArr: NodeJS.Timeout[] = []

    // forEach는 리렌더링으로 인해서 총 두번 실행되나 콜백함수에 전해준 clearTimeout으로 인해 한번만 실행된다.
    splitText.forEach((txt, idx) => {
      const timeoutId = setTimeout(() => createText(txt, idx, splitText.length), idx * 100)
      timeoutArr.push(timeoutId)
    })

    return () => {
      timeoutArr.forEach((id) => clearTimeout(id))
    }
  }, [value, renderedIdx])

  return text
}
