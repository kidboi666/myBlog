import cn from "@/src/lib/cn"
import { cva } from "class-variance-authority"
import { ComponentProps, ElementType, forwardRef, PropsWithRef } from "react"

interface Props extends ComponentProps<"div"> {
  className?: string
  as?: ElementType
  dataStatus?: string
  variant?: "header" | "footer" | "main" | "other" | "post" | "wrapper" | "background" | "write"
}

const containerVariants = cva("flex items-center justify-center", {
  variants: {
    variant: {
      header: "h-full w-full rounded-3xl bg-white px-4 py-12 shadow-md md:px-12",
      footer: "h-full w-full rounded-3xl bg-white px-4 py-12 shadow-md md:px-12",
      main: "relative mb-12 mt-28 grid h-full w-full items-start gap-14 rounded-3xl bg-white px-4 py-12 shadow-md md:px-12 2xl:grid-cols-2",
      post: "mb-12 mt-28 grid h-full w-full max-w-[864px] grid-cols-1 items-start gap-4 rounded-3xl bg-white px-12 py-12 shadow-md",
      other: "h-fit w-fit rounded-3xl bg-white shadow-md",
      wrapper: "flex w-full flex-1 flex-col items-center justify-center md:px-12 xl:px-40",
      background: "relative flex min-h-dvh flex-col overflow-hidden gradient-move",
      write: "mb-12 mt-28 size-full flex-col gap-4 rounded-3xl bg-white p-4 md:grid md:grid-cols-2",
    },
  },
})

export const Container = forwardRef<HTMLElement, PropsWithRef<Props>>(
  ({ as: Component = "div", variant = "main", dataStatus, children, className, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        data-status={dataStatus}
        className={cn(containerVariants({ variant }), className)}
        {...props}
      >
        {children}
      </Component>
    )
  },
)
