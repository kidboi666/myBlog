/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import cn from "@/src/lib/cn"
import { ComponentPropsWithRef, forwardRef } from "react"
import { Container } from "../../layout/Container"

interface DropDownListProps extends ComponentPropsWithRef<"ul"> {
  itemList?: Record<string, any>[]
  onClick: (arg: any) => void
  className?: string
  onTransitionEnd?: () => void
}

export const DropDownList = forwardRef<HTMLUListElement, DropDownListProps>(
  ({ itemList, onClick, className, onTransitionEnd }, ref) => {
    return (
      <Container
        as="ul"
        variant="dropdown"
        ref={ref}
        dataStatus="closed"
        onTransitionEnd={onTransitionEnd}
        className={cn("hidden max-h-40 flex-col overflow-y-auto px-0 py-1", className)}
      >
        {itemList?.map((menu) => (
          <li
            key={menu.id}
            onClick={() => onClick(menu)}
            className="w-full cursor-pointer px-4 py-2 text-start text-sm font-normal text-slate-600 transition hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-600"
          >
            {menu.name}
          </li>
        ))}
      </Container>
    )
  },
)
