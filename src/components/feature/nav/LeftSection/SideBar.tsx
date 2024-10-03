import { useRouter } from "next/router"
import { Tables } from "@/src/models/supabase"
import { useStateChange } from "@/src/hooks/useStateChange"
import { Container } from "@/src/components/layout/Container"
import { CategoryIcon } from "@/src/components/icon/CategoryIcon"
import { List } from "@/src/components/layout/List"
import { SideBarItem } from "./SideBarItem"

interface Props {
  categories?: Tables<"category">[]
  subCategories?: Tables<"sub_category">[]
}

export const SideBar = ({ categories, subCategories }: Props) => {
  const router = useRouter()
  const { ref, open, close, onTransitionEnd } = useStateChange()
  const { ref: barRef, open: barOpen, close: barClose } = useStateChange()

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
  const handleMouseEnter = () => {
    open()
    barOpen()
  }

  const handleMouseLeave = () => {
    close()
    barClose()
  }

  return (
    <div onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
      <Container
        ref={barRef}
        as="nav"
        dataStatus="closed"
        variant="other"
        className="fixed left-0 top-28 flex-col rounded-l-none bg-slate-200/80 p-6 text-slate-500 transition data-[status=closed]:-translate-x-6 dark:bg-slate-700/80 dark:text-slate-400"
      >
        <CategoryIcon />
      </Container>
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
    </div>
  )
}
