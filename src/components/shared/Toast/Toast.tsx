import { useEffect } from "react"
import { useStatusChange } from "@/src/hooks/useStatusChange"
import { cva } from "class-variance-authority"
import cn from "@/src/lib/cn"
import { useToast } from "@/src/store/useToast"
import { Container } from "../../layout/Container"
import { Title } from "../Title"
import { Text } from "../Text"

const toastVariants = cva("text-white", {
  variants: {
    container: {
      warn: "bg-red-500",
      success: "bg-green-500",
      failure: "bg-red-600",
    },
    title: {
      warn: "",
      success: "",
      failure: "",
    },
    text: {
      warn: "",
      success: "",
      failure: "",
    },
  },
})

export const Toast = () => {
  const { time, isOpen, data, setClose, type } = useToast()

  useEffect(() => {
    const timer = setTimeout(() => {
      setClose()
    }, 1000 * time)

    return () => {
      clearTimeout(timer)
    }
  })

  if (!isOpen) return null

  return (
    <Container
      className={cn(
        "fixed right-4 top-4 z-50 h-20 w-fit animate-slideDown flex-col items-start px-8 py-4",
        toastVariants({ container: type }),
      )}
    >
      <Title className={cn(toastVariants({ title: type }))}>{data?.title}</Title>
      <Text className={cn(toastVariants({ text: type }))}>{data?.text}</Text>
    </Container>
  )
}
