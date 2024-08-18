/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import cn from "@/src/lib/cn"
import { ComponentPropsWithRef, forwardRef } from "react"

interface DropDownListProps extends ComponentPropsWithRef<"ul"> {
  itemList?: Record<string, any>[]
  onClick: (arg: any) => void
  className?: string
}

export const DropDownList = forwardRef<HTMLUListElement, DropDownListProps>(
  ({ itemList, onClick, className }, ref) => {
    return (
      <ul
        ref={ref}
        data-status="closed"
        className={cn(
          "status-popup absolute z-10 mt-2 w-56 origin-top rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none",
          className,
        )}
      >
        {itemList?.map((menu) => (
          <li
            key={menu.id}
            onClick={() => onClick(menu)}
            className="relative w-full cursor-pointer px-4 py-2 text-start text-sm font-normal text-slate-600 transition hover:bg-slate-200"
          >
            {menu.name}
          </li>
        ))}
      </ul>
    )
  },
)
