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
    | "modal"
    | "comment"
}

const containerVariants = cva("flex items-center justify-center", {
  variants: {
    variant: {
      header: "h-full w-full rounded-3xl bg-white px-4 py-12 shadow-md md:px-12 dark:bg-slate-800",
      footer:
        "relative h-full w-full flex-col rounded-3xl rounded-b-none bg-white px-4 py-4 shadow-md md:gap-2 md:px-12 md:py-8 xl:px-40 dark:bg-slate-800",
      main: "relative mb-12 mt-52 grid h-full w-full animate-fadeIn grid-cols-1 items-start gap-14 rounded-3xl bg-white px-4 py-12 shadow-md md:px-12 2xl:grid-cols-2 dark:bg-slate-800",
      post: "mb-12 mt-28 grid h-full w-full max-w-[864px] animate-fadeIn grid-cols-1 items-start gap-4 rounded-3xl bg-white px-4 py-12 shadow-md md:px-12 dark:bg-slate-800",
      comment:
        "mb-12 grid h-full w-full max-w-[864px] animate-fadeIn grid-cols-1 items-start gap-4 rounded-3xl bg-white px-4 py-12 shadow-md md:px-12 dark:bg-slate-800",
      other: "h-fit w-fit rounded-3xl bg-white shadow-md dark:bg-slate-800",
      wrapper: "flex w-full flex-1 flex-col items-center justify-center px-0 lg:px-28 xl:px-40",
      background:
        "relative flex min-h-dvh flex-col overflow-hidden gradient-move dark:gradient-move-dark",
      write: "h-screen w-screen animate-fadeIn bg-white p-4 dark:bg-slate-800",
      search: "size-full rounded-lg bg-white p-4 shadow-md",
      modal:
        "fixed left-1/2 top-1/2 flex h-fit w-full max-w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white px-0 py-0 md:px-0",
      dropdown:
        "status-popup absolute z-10 w-fit min-w-40 origin-top rounded-md bg-white px-4 py-4 shadow-md ring-1 ring-black ring-opacity-10 transition focus:outline-none dark:bg-slate-800 dark:ring-slate-700",
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
