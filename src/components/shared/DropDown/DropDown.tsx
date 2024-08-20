/* eslint-disable @typescript-eslint/no-explicit-any */
import cn from "@/src/lib/cn"
import { useStatusChange } from "@/src/hooks/useStatusChange"
import { ArrowHeadIcon } from "../../icon/ArrowHeadIcon"
import { Text } from "../Text"
import { DropDownList } from "./DropDowList"

interface Props {
  itemList?: Record<string, any>[]
  listName?: string
  selectedItem?: string
  onClick: (arg: any) => void
}

export const DropDown = ({ itemList, listName, selectedItem, onClick }: Props) => {
  const [targetRef, statusRef, handleClickOutside] = useStatusChange<
    HTMLDivElement,
    HTMLUListElement
  >()

  return (
    <div className="relative inline-block text-left">
      {/** 메뉴 버튼 */}
      <div ref={targetRef}>
        <button
          disabled={!itemList?.[0]}
          type="button"
          onClick={handleClickOutside}
          className={cn(
            "inline-flex w-full items-center justify-between gap-x-1.5 rounded-lg bg-white px-3 py-2 shadow-sm ring-1 ring-inset ring-slate-300 transition hover:bg-slate-50",
            !itemList?.[0] ? "bg-slate-200 hover:bg-slate-200" : "",
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

          <ArrowHeadIcon />
        </button>
      </div>
      {/** 메뉴 아이템들 */}
      <DropDownList itemList={itemList} ref={statusRef} onClick={onClick} />
    </div>
  )
}
