import { useRouter } from "next/router"
import { useState } from "react"
import { useStatusChange } from "@/src/hooks/useStatusChange"
import { Tables } from "@/src/models/supabase"
import { ArrowHeadIcon } from "../../icon/ArrowHeadIcon"
import { Button } from "../../shared/Button"
import { DropDownList } from "../../shared/DropDown/DropDowList"

interface Props {
  category: Tables<"category">
  subCategories: Tables<"sub_category">[]
}

export const NavMenuList = ({ category, subCategories }: Props) => {
  const [showSubCategory, setShowSubCategory] = useState(false)
  const [targetRef, statusRef, handleStatusChange] = useStatusChange<
    HTMLButtonElement,
    HTMLUListElement
  >()
  const router = useRouter()

  const handleMenuClick = (menu: Record<string, any>) => {
    router.push({
      pathname: "/blog",
      query: { categoryId: menu.parent_category_id, subCategoryId: menu.id },
    })
  }

  return (
    <Button
      key={category.id}
      ref={targetRef}
      variant="teritory"
      onClick={handleStatusChange}
      className="relative flex-shrink-0 p-0"
    >
      {category.name}
      <ArrowHeadIcon className="h-4 w-4 transition" />
      <DropDownList
        ref={statusRef}
        itemList={subCategories}
        onClick={handleMenuClick}
        className="left-0 top-4"
      />
    </Button>
  )
}
