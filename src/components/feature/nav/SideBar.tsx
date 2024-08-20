import { useRouter } from "next/router"
import { RefObject } from "react"
import cn from "@/src/lib/cn"
import { Tables } from "@/src/models/supabase"
import { Container } from "../../layout/Container"
import { List } from "../../layout/List"
import { SideBarItem } from "./SideBarItem"

interface Props {
  categories?: Tables<"category">[]
  subCategories?: Tables<"sub_category">[]
  statusRef?: RefObject<HTMLDivElement>
}

export const SideBar = ({ categories, subCategories, statusRef }: Props) => {
  const router = useRouter()

  const handleSubCategoryButtonClick = (menu: Tables<"sub_category">) => {
    router.push({
      pathname: "/blog",
      query: { categoryId: menu.parent_category_id, subCategoryId: menu.id },
    })
  }

  return (
    <Container
      as="nav"
      ref={statusRef && statusRef}
      data-status="closed"
      variant="other"
      className={cn(
        "fixed left-6 top-28 origin-top-left flex-col px-2 py-4 transition md:left-0 md:rounded-l-none md:px-2",
        statusRef ? "status-popup" : "",
      )}
    >
      <List>
        {categories?.map((category) => {
          let validateSubCategories: Tables<"sub_category">[] = []
          if (subCategories) {
            validateSubCategories =
              subCategories.filter(
                (subCategory) => subCategory.parent_category_id === category.id,
              ) || []
          }
          return (
            <SideBarItem
              key={category.id}
              category={category}
              subCategories={validateSubCategories}
              onClick={handleSubCategoryButtonClick}
            />
          )
        })}
      </List>
    </Container>
  )
}
