import { useRef } from "react"
import Image from "next/image"
import { useStateChange } from "@/src/hooks/useStateChange"
import { Tables } from "@/src/models/supabase"
import { Button } from "@/src/components/shared/Button"
import { List } from "@/src/components/layout/List"
import { DropDownList } from "@/src/components/shared/DropDown/DropDownList"

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
  const { ref, open, close, onTransitionEnd } = useStateChange<HTMLButtonElement>()

  return (
    <List.Row onMouseEnter={open} onMouseLeave={close} className="relative flex">
      <Button
        variant="icon"
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
        ref={ref}
        dataStatus="closed"
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
