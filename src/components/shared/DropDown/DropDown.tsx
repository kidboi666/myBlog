/* eslint-disable @typescript-eslint/no-explicit-any */
import cn from "@/src/lib/cn"
import { useStateChange } from "@/src/hooks/useStateChange"
import { useClickOutside } from "@/src/hooks/useClickOutside"
import { ArrowHeadIcon } from "../../icon/ArrowHeadIcon"
import { Text } from "../Text"
import { DropDownList } from "./DropDownList"

interface Props {
  itemList?: Record<string, any>[]
  listName?: string
  selectedItem?: string | null
  onClick: (arg: any) => void
  className?: string
  innerClassName?: string
}

export const DropDown = ({
  itemList,
  listName,
  selectedItem,
  onClick,
  className,
  innerClassName,
}: Props) => {
  const { ref, close, onClick: onClickState, onTransitionEnd } = useStateChange<HTMLUListElement>()
  const buttonRef = useClickOutside<HTMLDivElement>(close)

  return (
    <div className="relative inline-block text-left">
      {/** 메뉴 버튼 */}
      <div ref={buttonRef}>
        <button
          disabled={!itemList?.[0]}
          type="button"
          onClick={onClickState}
          className={cn(
            "inline-flex w-full items-center justify-between gap-x-1.5 rounded-lg bg-white px-2 py-2 shadow-sm ring-1 ring-inset ring-slate-300 transition hover:bg-slate-50 dark:bg-slate-800 dark:ring-slate-600 dark:hover:bg-slate-700",
            !itemList?.[0] && "bg-slate-200 dark:bg-slate-700",
            className,
          )}
        >
          {selectedItem ? (
            <Text variant="body" className="text-sm">
              {selectedItem}
            </Text>
          ) : (
            <Text variant="caption" className="text-sm">
              {listName}
            </Text>
          )}
          <ArrowHeadIcon className="text-slate-400" />
        </button>
      </div>
      {/** 메뉴 아이템들 */}
      <DropDownList
        itemList={itemList}
        ref={ref}
        onClick={onClick}
        className={cn(innerClassName)}
        onTransitionEnd={onTransitionEnd}
      />
    </div>
  )
}
