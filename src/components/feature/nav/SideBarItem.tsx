import { Tables } from "@/src/models/supabase"
import Image from "next/image"
import { useRef } from "react"
import { Button } from "../../shared/Button"
import { List } from "../../layout/List"
import { DropDownList } from "../../shared/DropDown/DropDownList"

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
            width={24}
            height={24}
            className="rounded-md"
          />
        )}
      </Button>
      <Button
        ref={titleStatus}
        data-status="closed"
        className="absolute -top-8 left-0 origin-bottom text-nowrap rounded-t-lg p-2 text-sm shadow-lg transition hover:-translate-y-1 data-[status=closed]:scale-0 data-[status=closed]:opacity-0"
      >
        {category.name}
      </Button>
      {subCategories.length !== 0 && (
        <DropDownList
          itemList={subCategories}
          ref={subCategoriesStatus}
          onClick={onSubCategoryButtonClick}
          className="left-0 top-14 origin-top"
        />
      )}
    </List.Row>
  )
}
