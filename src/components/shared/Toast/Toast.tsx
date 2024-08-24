import { useEffect } from "react"
import { cva } from "class-variance-authority"
import cn from "@/src/lib/cn"
import { useToast } from "@/src/store/useToast"
import { Container } from "../../layout/Container"
import { Title } from "../Title"
import { Text } from "../Text"
import { Xicon } from "../../icon/XIcon"
import { Button } from "../Button"

const toastVariants = cva("text-sm", {
  variants: {
    container: {
      warn: "bg-white",
      success: "bg-green-500",
      failure: "bg-red-600",
    },
    title: {
      warn: "text-slate-500",
      success: "text-white",
      failure: "text-white",
    },
    text: {
      warn: "text-slate-500",
      success: "text-white",
      failure: "text-white",
    },
  },
})

export const Toast = () => {
  const { time, isOpen, data, closeToast, type } = useToast()

  useEffect(() => {
    const timer = setTimeout(() => {
      closeToast()
    }, 1000 * time)

    return () => {
      clearTimeout(timer)
    }
  }, [closeToast, isOpen, type, time])

  if (!isOpen) return null

  return (
    <Container
      variant="other"
      className={cn(
        "fixed right-4 top-4 z-50 h-fit w-fit animate-slideDown flex-col items-start gap-4 px-4 py-4 md:px-6",
        toastVariants({ container: type }),
      )}
    >
      <div className="flex items-start gap-2">
        <Title className={cn(toastVariants({ title: type }))}>{data?.title}</Title>
        <Button
          variant="icon"
          onClick={() => closeToast()}
          className={cn("p-0 hover:rotate-90", toastVariants({ text: type }))}
        >
          <Xicon />
        </Button>
      </div>
      <Text className={cn(toastVariants({ text: type }))}>{data?.text}</Text>
    </Container>
  )
}
