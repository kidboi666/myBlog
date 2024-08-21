import { Tables } from "@/src/models/supabase"
import Image from "next/image"
import { useRef } from "react"
import { Button } from "../../shared/Button"
import { List } from "../../layout/List"
import { DropDownList } from "../../shared/DropDown/DropDowList"

interface Props {
  category: Tables<"category">
  subCategories: Tables<"sub_category">[]
  onCategoryButtonClick: (menu: Tables<"category">) => void
  onSubCategoryButtonClick: (menu: Tables<"sub_category">) => void
}

export const SideBarItem = ({
  category,
  subCategories,
  onCategoryButtonClick,
  onSubCategoryButtonClick,
}: Props) => {
  const subCategoriesStatus = useRef<HTMLUListElement>(null)
  const titleStatus = useRef<HTMLButtonElement>(null)

  const openStatusChange = () => {
    subCategoriesStatus.current?.setAttribute("data-status", "opened")
    titleStatus.current?.setAttribute("data-status", "opened")
  }

  const closeStatusChange = () => {
    subCategoriesStatus.current?.setAttribute("data-status", "closed")
    titleStatus.current?.setAttribute("data-status", "closed")
  }

  return (
    <List.Row
      onMouseEnter={() => openStatusChange()}
      onMouseLeave={() => closeStatusChange()}
      className="relative flex"
    >
      <Button
        variant="secondary"
        onClick={() => onCategoryButtonClick(category)}
        className="flex px-4 py-4 text-base text-slate-500 ring-0"
      >
        {category.icon && (
          <Image
            src={category.icon}
            alt="카테고리 아이콘"
            width={30}
            height={30}
            className="rounded-md"
          />
        )}
      </Button>
      <Button
        ref={titleStatus}
        data-status="closed"
        className="absolute -top-5 left-12 text-nowrap rounded-t-lg bg-slate-300 p-2 text-sm shadow-lg transition hover:-translate-y-1 data-[status=closed]:scale-0 data-[status=closed]:opacity-0"
      >
        {category.name}
      </Button>
      <DropDownList
        itemList={subCategories}
        ref={subCategoriesStatus}
        onClick={onSubCategoryButtonClick}
        className="left-12 origin-left"
      />
    </List.Row>
  )
}
