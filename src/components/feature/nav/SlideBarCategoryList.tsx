import Image from "next/image"
import { useRouter } from "next/router"
import { ComponentPropsWithRef, MouseEvent, useRef } from "react"
import { Tables } from "@/src/models/supabase"
import { List } from "../../layout/List"
import { Button } from "../../shared/Button"
import { ArrowHeadIcon } from "../../icon/ArrowHeadIcon"

interface Props extends ComponentPropsWithRef<"ul"> {
  category: Tables<"category">
  subCategories: Tables<"sub_category">[]
}

export const SlideBarCategoryList = ({ category, subCategories }: Props) => {
  const router = useRouter()
  const arrowRef = useRef<SVGSVGElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  const handleCategoryButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    if (listRef.current?.getAttribute("data-status") === "closed") {
      arrowRef.current?.setAttribute("data-status", "opened")
      listRef.current?.setAttribute("data-status", "opened")
    } else {
      arrowRef.current?.setAttribute("data-status", "closed")
      listRef.current?.setAttribute("data-status", "closed")
    }
  }

  const handleSubCategoryButtonClick = (menu: Tables<"sub_category">) => {
    router.push({
      pathname: "/blog",
      query: { categoryId: menu.parent_category_id, subCategoryId: menu.id },
    })
  }

  return (
    <List.Row className="flex w-full flex-col items-start">
      <Button variant="teritory" onClick={(e) => handleCategoryButtonClick(e)} className="px-0">
        <div className="flex items-center gap-4 text-base text-slate-500">
          {category.icon && (
            <Image
              src={category.icon}
              alt="카테고리 아이콘"
              width={24}
              height={24}
              className="rounded-md"
            />
          )}
          <ArrowHeadIcon ref={arrowRef} className="transition data-[status=closed]:-rotate-90" />
          {category.name}
        </div>
      </Button>
      <List
        data-status="closed"
        targetRef={listRef}
        className="ml-12 origin-top transition data-[status=closed]:h-0 data-[status=closed]:scale-y-0 data-[status=closed]:opacity-0"
      >
        {subCategories.map((subCategory) => (
          <List.Row key={subCategory.id}>
            <Button variant="teritory" onClick={() => handleSubCategoryButtonClick(subCategory)}>
              {subCategory.name}
            </Button>
          </List.Row>
        ))}
      </List>
    </List.Row>
  )
}
