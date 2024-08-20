import { useRouter } from "next/router"
import { RefObject, useRef } from "react"
import cn from "@/src/lib/cn"
import { Tables } from "@/src/models/supabase"
import { Container } from "../../layout/Container"
import { List } from "../../layout/List"
import { SideBarItem } from "./SideBarItem"
import { Button } from "../../shared/Button"
import { PencilIcon } from "../../icon/PencilIcon"

interface Props {
  categories?: Tables<"category">[]
  subCategories?: Tables<"sub_category">[]
  statusRef?: RefObject<HTMLDivElement>
}

export const SideBar = ({ categories, subCategories, statusRef }: Props) => {
  const router = useRouter()
  const addPostButtonRef = useRef<HTMLButtonElement>(null)

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
        <List.Row>
          <Button
            onMouseEnter={() => openStatusChange()}
            onMouseLeave={() => closeStatusChange()}
            variant="secondary"
            onClick={() => router.push("/write")}
            className="flex w-full px-4 py-4 text-base text-slate-500 ring-0"
          >
            <PencilIcon />
          </Button>
          <Button
            ref={addPostButtonRef}
            data-status="closed"
            className="absolute -top-2 left-12 origin-left text-nowrap rounded-t-lg p-2 text-sm shadow-lg transition data-[status=closed]:scale-0 data-[status=closed]:opacity-0"
          >
            새 포스팅 하기
          </Button>
        </List.Row>
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
  )
}
