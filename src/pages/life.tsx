import Markdown from "@/src/components/shared/Markdown/Markdown"
import { Text } from "@/src/components/shared/Text"
import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"

const Content = () => {
  const [content, setContent] = useState("")
  useEffect(() => {
    fetch("/contents/react/life_cycle.md")
      .then((res) => res.text())
      .then((text) => setContent(text))
  })
}

export default Content
