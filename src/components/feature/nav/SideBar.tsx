import { useRouter } from "next/router"
import { RefObject, useRef } from "react"
import cn from "@/src/lib/cn"
import { Tables } from "@/src/models/supabase"
import { Container } from "../../layout/Container"
import { List } from "../../layout/List"
import { SideBarItem } from "./SideBarItem"
import { Button } from "../../shared/Button"
import { WriteIcon } from "../../icon/WriteIcon"

interface Props {
  categories?: Tables<"category">[]
  subCategories?: Tables<"sub_category">[]
  statusRef?: RefObject<HTMLDivElement>
}

export const SideBar = ({ categories, subCategories, statusRef }: Props) => {
  const router = useRouter()
  const addPostButtonRef = useRef<HTMLButtonElement>(null)
  const showRef = useRef<HTMLDivElement>(null)

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
    <div onMouseLeave={() => showRef.current?.setAttribute("data-status", "closed")}>
      <Container
        ref={showRef}
        dataStatus="closed"
        variant="other"
        className="fixed left-16 top-28 origin-left px-2 py-4 transition data-[status=closed]:scale-0"
      >
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
      </Container>
      <Container
        as="nav"
        ref={statusRef && statusRef}
        data-status="closed"
        onMouseEnter={() => showRef.current?.setAttribute("data-status", "opened")}
        variant="other"
        className={cn(
          "fixed left-0 top-28 origin-top-left flex-col rounded-l-none px-2 py-4 transition md:px-2",
          statusRef ? "status-popup" : "",
        )}
      >
        <List className="grid">
          <List.Row className="relative">
            <Button
              onMouseEnter={() => openStatusChange()}
              onMouseLeave={() => closeStatusChange()}
              variant="icon"
              onClick={() => router.push("/write")}
            >
              <WriteIcon />
            </Button>
            <Button
              ref={addPostButtonRef}
              data-status="closed"
              className="absolute -top-8 left-0 origin-bottom text-nowrap rounded-t-lg p-2 text-sm shadow-lg transition data-[status=closed]:scale-0 data-[status=closed]:opacity-0"
            >
              새 포스팅 하기
            </Button>
          </List.Row>
        </List>
      </Container>
    </div>
  )
}
