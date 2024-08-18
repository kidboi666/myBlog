import { useStatusChange } from "@/src/hooks/useStatusChange"
import { ArrowHeadIcon } from "../../icon/ArrowHeadIcon"
import { Text } from "../Text"
import { DropDownList } from "./DropDowList"

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  itemList?: Record<string, any>[]
  listName?: string
  selectedItem?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
          type="button"
          onClick={handleClickOutside}
          className="inline-flex w-full items-center justify-between gap-x-1.5 rounded-lg bg-white px-3 py-2 shadow-sm ring-1 ring-inset ring-slate-300 transition hover:bg-slate-50"
        >
          {selectedItem ? (
            <Text variant="body" className="text-sm">
              {selectedItem}
            </Text>
          ) : (
            <Text variant="caption">{listName}</Text>
          )}
          <ArrowHeadIcon />
        </button>
      </div>
      {/** 메뉴 아이템들 */}

      <DropDownList itemList={itemList} ref={statusRef} onClick={onClick} />
    </div>
  )
}
