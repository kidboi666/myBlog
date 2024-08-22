import cn from "@/src/lib/cn"
import { cva } from "class-variance-authority"
import { ComponentProps, ElementType, forwardRef, PropsWithRef } from "react"

interface Props extends ComponentProps<"div"> {
  className?: string
  as?: ElementType
  dataStatus?: string
  variant?:
    | "header"
    | "footer"
    | "main"
    | "other"
    | "post"
    | "wrapper"
    | "background"
    | "write"
    | "search"
    | "dropdown"
}

const containerVariants = cva("flex items-center justify-center", {
  variants: {
    variant: {
      header: "h-full w-full rounded-3xl bg-white px-4 py-12 shadow-md md:px-12",
      footer:
        "relative h-full w-full flex-col rounded-3xl rounded-b-none bg-white px-4 py-4 shadow-md md:gap-2 md:px-12 md:py-8 xl:px-40",
      main: "relative mb-12 mt-52 grid h-full w-full grid-cols-1 items-start gap-14 rounded-3xl bg-white px-4 py-12 shadow-md md:px-12 2xl:grid-cols-2",
      post: "mb-12 mt-28 grid h-full w-full max-w-[864px] grid-cols-1 items-start gap-4 rounded-3xl bg-white px-4 py-12 shadow-md md:px-12",
      other: "h-fit w-fit rounded-3xl bg-white shadow-md",
      wrapper: "flex w-full flex-1 flex-col items-center justify-center px-0 lg:px-28 xl:px-40",
      background: "relative flex min-h-dvh flex-col overflow-hidden gradient-move",
      write: "h-screen w-screen gap-4 bg-white p-4",
      search: "size-full rounded-lg bg-white p-4 shadow-md",
      dropdown:
        "status-popup absolute z-10 w-fit min-w-40 origin-top rounded-md bg-white px-4 py-4 shadow-md ring-1 ring-black ring-opacity-10 transition focus:outline-none",
    },
  },
})

export const Container = forwardRef<HTMLElement, PropsWithRef<Props>>(
  ({ as: Component = "div", variant = "main", dataStatus, children, className, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        data-status={dataStatus}
        className={cn(containerVariants({ variant }), className, "")}
        {...props}
      >
        {children}
      </Component>
    )
  },
)
