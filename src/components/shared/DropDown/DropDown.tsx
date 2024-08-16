import { useStatusChange } from "@/src/hooks/useStatusChange"
import { Button } from "../Button"
import { Text } from "../Text"

interface Props {
  itemList?: Record<string, string | number>[]
  listName?: string
  selectedItem?: string
  onClick: (arg: Record<string, string | number>) => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}

export const DropDown = ({ itemList, listName, selectedItem, onClick }: Props) => {
  const [targetRef, statusRef, onStatusChange] = useStatusChange<HTMLDivElement, HTMLUListElement>()

  return (
    <div className="relative inline-block text-left">
      {/** 메뉴 버튼 */}
      <div ref={targetRef}>
        <button
          type="button"
          onClick={onStatusChange}
          className="inline-flex w-full items-center justify-between gap-x-1.5 rounded-lg bg-white px-3 py-2 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50"
        >
          {selectedItem ? (
            <Text variant="body" className="text-sm">
              {selectedItem}
            </Text>
          ) : (
            <Text variant="caption">{listName}</Text>
          )}
          {/* <div aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" /> */}
          <svg
            className="-mr-1 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {/** 메뉴 아이템들 */}
      <ul
        ref={statusRef}
        data-status="closed"
        className="absolute left-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[status=closed]:scale-95 data-[status=closed]:transform data-[status=closed]:opacity-0"
      >
        {itemList?.map((menu) => (
          <Button
            key={menu.id}
            variant="icon"
            className="w-full font-normal"
            onClick={() => onClick(menu)}
          >
            <li className="relative w-full px-4 py-2 text-start text-sm hover:bg-slate-200">
              {menu.name}
            </li>
          </Button>
        ))}
      </ul>
    </div>
  )
}
