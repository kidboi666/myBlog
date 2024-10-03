import { useRouter } from "next/router"
import { useRef } from "react"
import { Tables } from "@/src/models/supabase"
import { useStateChange } from "@/src/hooks/useStateChange"
import { Container } from "@/src/components/layout/Container"
import { Button } from "@/src/components/shared/Button"
import { CategoryIcon } from "@/src/components/icon/CategoryIcon"
import { List } from "@/src/components/layout/List"
import { SideBarItem } from "./SideBarItem"

interface Props {
  categories?: Tables<"category">[]
  subCategories?: Tables<"sub_category">[]
}

export const SideBar = ({ categories, subCategories }: Props) => {
  const router = useRouter()
  const addPostButtonRef = useRef<HTMLButtonElement>(null)
  const { ref, open, close, onTransitionEnd } = useStateChange()

  const handleSubCategoryButtonClick = (menu: Tables<"sub_category">) => {
    router.push({
      pathname: "/blog",
      query: {
        categoryId: menu.parent_category_id,
        name: menu.name,
        subCategoryId: menu.id,
      },
    })
  }

  const handleCategoryButtonClick = (menu: Tables<"category">) => {
    router.push({
      pathname: "/blog",
      query: {
        categoryId: menu.id,
        name: menu.name,
      },
    })
  }

  const openStatusChange = () => {
    addPostButtonRef.current?.setAttribute("data-status", "opened")
  }

  const closeStatusChange = () => {
    addPostButtonRef.current?.setAttribute("data-status", "closed")
  }

  return (
    <div onMouseLeave={close}>
      <Container
        ref={ref}
        dataStatus="closed"
        variant="other"
        onTransitionEnd={onTransitionEnd}
        className="fixed left-16 top-28 hidden origin-left p-2 transition ease-in-out data-[status=closed]:scale-95 data-[status=closed]:opacity-0"
      >
        <List className="flex w-56 flex-wrap">
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
                onSubCategoryButtonClick={handleSubCategoryButtonClick}
                onCategoryButtonClick={handleCategoryButtonClick}
              />
            )
          })}
        </List>
      </Container>
      <Container
        as="nav"
        dataStatus="closed"
        onMouseEnter={open}
        variant="other"
        className="fixed left-0 top-28 flex-col rounded-l-none px-2 py-4 transition md:px-2"
      >
        <Button
          onMouseEnter={() => openStatusChange()}
          onMouseLeave={() => closeStatusChange()}
          variant="icon"
          className="cursor-default"
        >
          <CategoryIcon />
        </Button>
      </Container>
    </div>
  )
}
