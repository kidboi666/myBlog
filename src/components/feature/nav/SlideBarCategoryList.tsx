import Image from "next/image"
import { useRouter } from "next/router"
import { ComponentPropsWithRef, MouseEvent } from "react"
import { Tables } from "@/src/models/supabase"
import { useStatusChange } from "@/src/hooks/useStatusChange"
import { List } from "../../layout/List"
import { Button } from "../../shared/Button"
import { ArrowHeadIcon } from "../../icon/ArrowHeadIcon"

interface Props extends ComponentPropsWithRef<"ul"> {
  category: Tables<"category">
  subCategories: Tables<"sub_category">[]
}

export const SlideBarCategoryList = ({ category, subCategories }: Props) => {
  const router = useRouter()
  const [targetRef, statusRef, handleStatusChange] = useStatusChange<
    HTMLButtonElement,
    HTMLUListElement
  >()

  const handleCategoryButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    handleStatusChange(e)
  }

  const handleSubCategoryButtonClick = (menu: Tables<"sub_category">) => {
    router.push({
      pathname: "/blog",
      query: { categoryId: menu.parent_category_id, subCategoryId: menu.id },
    })
  }

  return (
    <List.Row className="flex w-full flex-col items-start">
      <Button
        ref={targetRef}
        variant="teritory"
        onClick={(e) => handleCategoryButtonClick(e)}
        className="px-0"
      >
        <div className="flex items-center gap-4 text-base text-slate-500">
          <ArrowHeadIcon />
          {category.icon && (
            <Image
              src={category.icon}
              alt="카테고리 아이콘"
              width={24}
              height={24}
              className="rounded-md"
            />
          )}
          {category.name}
        </div>
      </Button>
      <List
        data-status="closed"
        targetRef={statusRef}
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
